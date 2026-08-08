"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, QuadraticBezierLine, Stars } from "@react-three/drei";
import * as THREE from "three";

const ASSAM = {
  latitude: 26.2,
  longitude: 92.9,
};

type Coordinate = {
  latitude: number;
  longitude: number;
};

function latLngToVector3(latitude: number, longitude: number, radius: number) {
  const lat = THREE.MathUtils.degToRad(latitude);
  const lng = THREE.MathUtils.degToRad(longitude);

  return new THREE.Vector3(
    radius * Math.cos(lat) * Math.sin(lng),
    radius * Math.sin(lat),
    radius * Math.cos(lat) * Math.cos(lng),
  );
}

function GlobeGrid({ radius = 2 }: { radius?: number }) {
  const latitudeLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];

    for (let latitude = -60; latitude <= 60; latitude += 30) {
      const points: THREE.Vector3[] = [];

      for (let longitude = -180; longitude <= 180; longitude += 4) {
        points.push(latLngToVector3(latitude, longitude, radius + 0.012));
      }

      lines.push(points);
    }

    return lines;
  }, [radius]);

  const longitudeLines = useMemo(() => {
    const lines: THREE.Vector3[][] = [];

    for (let longitude = -180; longitude < 180; longitude += 30) {
      const points: THREE.Vector3[] = [];

      for (let latitude = -90; latitude <= 90; latitude += 4) {
        points.push(latLngToVector3(latitude, longitude, radius + 0.012));
      }

      lines.push(points);
    }

    return lines;
  }, [radius]);

  // return (
  //   <group>
  //     {[...latitudeLines, ...longitudeLines].map((points, index) => {
  //       const geometry = new THREE.BufferGeometry().setFromPoints(points);

  //       return (
  //         <line key={index} geometry={geometry}>
  //           <lineBasicMaterial color="#38bdf8" transparent opacity={0.12} />
  //         </line>
  //       );
  //     })}
  //   </group>
  // );

  return (
    <group>
      {[...latitudeLines, ...longitudeLines].map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const material = new THREE.LineBasicMaterial({
          color: "#38bdf8",
          transparent: true,
          opacity: 0.12,
        });

        const line = new THREE.Line(geometry, material);

        return <primitive key={index} object={line} />;
      })}
    </group>
  );
}

function AssamMarker({ radius = 2 }: { radius?: number }) {
  const pulseRef = useRef<THREE.Mesh>(null);
  const outerPulseRef = useRef<THREE.Mesh>(null);

  const position = useMemo(
    () => latLngToVector3(ASSAM.latitude, ASSAM.longitude, radius + 0.07),
    [radius],
  );

  const normal = useMemo(() => position.clone().normalize(), [position]);

  const orientation = useMemo(() => {
    const quaternion = new THREE.Quaternion();

    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);

    return quaternion;
  }, [normal]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (pulseRef.current) {
      const scale = 1 + Math.sin(elapsed * 2.8) * 0.2;
      pulseRef.current.scale.setScalar(scale);
    }

    if (outerPulseRef.current) {
      const progress = (elapsed * 0.42) % 1;
      const scale = 1 + progress * 2.6;

      outerPulseRef.current.scale.setScalar(scale);

      const material = outerPulseRef.current
        .material as THREE.MeshBasicMaterial;

      material.opacity = 0.6 * (1 - progress);
    }
  });

  return (
    <group position={position} quaternion={orientation}>
      {/* Bright central marker */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[0.065, 24, 24]} />
        <meshBasicMaterial color="#67e8f9" toneMapped={false} />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.115, 24, 24]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.25}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Expanding pulse */}
      <mesh ref={outerPulseRef} position={[0, 0, -0.002]}>
        <ringGeometry args={[0.09, 0.12, 40]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      {/* Permanent location ring */}
      <mesh position={[0, 0, -0.003]}>
        <ringGeometry args={[0.13, 0.145, 40]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function ConnectionArc({
  start,
  end,
  radius = 2,
}: {
  start: Coordinate;
  end: Coordinate;
  radius?: number;
}) {
  const startPoint = useMemo(
    () => latLngToVector3(start.latitude, start.longitude, radius + 0.035),
    [start, radius],
  );

  const endPoint = useMemo(
    () => latLngToVector3(end.latitude, end.longitude, radius + 0.035),
    [end, radius],
  );

  const middlePoint = useMemo(() => {
    return startPoint
      .clone()
      .add(endPoint)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(radius + 0.7);
  }, [startPoint, endPoint, radius]);

  return (
    <QuadraticBezierLine
      start={startPoint}
      end={endPoint}
      mid={middlePoint}
      color="#22d3ee"
      lineWidth={1}
      transparent
      opacity={0.45}
      dashed
      dashScale={8}
      dashSize={0.5}
      gapSize={0.35}
    />
  );
}

function GlobeScene() {
  const globeGroupRef = useRef<THREE.Group>(null);

  const assamFacingRotation = useMemo(
    () => -THREE.MathUtils.degToRad(ASSAM.longitude),
    [],
  );

  useFrame(({ clock }) => {
    if (!globeGroupRef.current) {
      return;
    }

    /*
     * A very small floating movement.
     * Assam remains near the front rather than disappearing
     * behind a continuously rotating globe.
     */
    globeGroupRef.current.rotation.y =
      assamFacingRotation + Math.sin(clock.getElapsedTime() * 0.22) * 0.12;

    globeGroupRef.current.rotation.x =
      -0.08 + Math.sin(clock.getElapsedTime() * 0.18) * 0.025;
  });

  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight position={[4, 3, 5]} intensity={2.2} color="#bae6fd" />

      <pointLight
        position={[-4, -2, 2]}
        intensity={8}
        color="#2563eb"
        distance={10}
      />

      <group ref={globeGroupRef}>
        {/* Main globe */}
        <mesh>
          <sphereGeometry args={[2, 96, 96]} />

          <meshStandardMaterial
            color="#06182f"
            emissive="#061b35"
            emissiveIntensity={0.45}
            metalness={0.35}
            roughness={0.65}
            transparent
            opacity={0.96}
          />
        </mesh>

        {/* Atmospheric edge */}
        <mesh scale={1.025}>
          <sphereGeometry args={[2, 64, 64]} />

          <meshBasicMaterial
            color="#0ea5e9"
            transparent
            opacity={0.07}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        <GlobeGrid />

        <AssamMarker />

        <ConnectionArc
          start={ASSAM}
          end={{ latitude: 1.35, longitude: 103.82 }}
        />

        <ConnectionArc
          start={ASSAM}
          end={{ latitude: -33.87, longitude: 151.21 }}
        />

        <ConnectionArc
          start={ASSAM}
          end={{ latitude: 51.5, longitude: -0.12 }}
        />

        <ConnectionArc
          start={ASSAM}
          end={{ latitude: 37.77, longitude: -122.42 }}
        />
      </group>

      <Stars
        radius={50}
        depth={20}
        count={700}
        factor={2}
        saturation={0}
        fade
        speed={0.25}
      />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.3}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.6}
      />
    </>
  );
}

export default function AssamGlobe() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[500px] lg:h-[580px]">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[65%]
          w-[65%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[90px]
        "
      />

      <Canvas
        dpr={[1, 1.6]}
        camera={{
          position: [0, 0.2, 6.6],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <GlobeScene />
      </Canvas>

      {/* Assam label */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[27%]
          -translate-x-1/2
          rounded-full
          border
          border-cyan-300/20
          bg-slate-950/65
          px-3
          py-1.5
          text-center
          backdrop-blur-md
        "
      >
        <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300/70">
          Building from
        </div>

        <div className="text-sm font-semibold text-white">Assam, India</div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-3
          text-center
          text-xs
          text-slate-400
        "
      >
        Drag gently to explore
      </div>
    </div>
  );
}
