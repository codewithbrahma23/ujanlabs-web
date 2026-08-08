import Image from "next/image";

type AssamGlobalProps = {
  eyebrow?: string;
  location?: string;
  message?: string;
  globeImage?: string;
};

const ASSAM = {
  x: 130,
  y: 65,
};

const CONNECTOR = {
  bendX: 184,
  bendY: 78,
  cornerX: 218,
  cornerY: 110,
  endX: 286,
  endY: 110,
};

export function AssamGlobal({
  eyebrow = "Proudly Building",
  location = "Assam, India",
  message = "Delivering Globally",
  globeImage = "/images/globe-assam.png",
}: AssamGlobalProps) {
  const connectorPath = `
    M ${ASSAM.x} ${ASSAM.y}
    C ${CONNECTOR.bendX} ${CONNECTOR.bendY}
      ${CONNECTOR.bendX} ${CONNECTOR.cornerY}
      ${CONNECTOR.cornerX} ${CONNECTOR.cornerY}
    H ${CONNECTOR.endX}
  `;

  return (
    <div
      className="
        group
        relative
        h-[190px]
        w-full
        max-w-[540px]
      "
    >
      {/* Globe */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-1/2
          h-40
          w-60
          -translate-y-1/2

          sm:left-2
          sm:h-44
          sm:w-64
        "
      >
        <div
          className="
            absolute
            inset-[14%]
            rounded-full
            bg-blue-500/5
            blur-[55px]

            dark:bg-blue-500/10
          "
        />

        <Image
          src={globeImage}
          alt=""
          fill
          sizes="256px"
          className="
            object-contain
            object-left-center
            opacity-90
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:drop-shadow-[0_0_22px_rgba(59,130,246,0.35)]
          "
        />
      </div>

      {/* Marker, connector and text share one coordinate system */}
      <div
        className="
          absolute
          left-[4%]
          top-1/2
          h-[156px]
          w-[500px]
          max-w-full
          -translate-y-1/2
        "
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 320 156"
          preserveAspectRatio="xMinYMid meet"
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            overflow-visible
          "
        >
          <defs>
            <linearGradient
              id="assam-connector-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.95" />
              <stop offset="48%" stopColor="#67e8f9" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.3" />
            </linearGradient>

            <filter
              id="assam-marker-glow"
              x="-200%"
              y="-200%"
              width="500%"
              height="500%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="assam-path-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2.2" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connector starts exactly at the Assam marker */}
          <path
            d={connectorPath}
            fill="none"
            stroke="url(#assam-connector-gradient)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Soft marker halo */}
          <circle
            cx={ASSAM.x}
            cy={ASSAM.y}
            r="16"
            fill="#8b5cf6"
            opacity="0.16"
            filter="url(#assam-marker-glow)"
          />

          {/* Pulsating marker ring */}
          <circle
            cx={ASSAM.x}
            cy={ASSAM.y}
            r="8"
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="1.5"
            opacity="0.75"
          >
            <animate
              attributeName="r"
              values="7;15;7"
              dur="3.4s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="opacity"
              values="0.75;0;0.75"
              dur="3.4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Permanent marker */}
          <circle
            cx={ASSAM.x}
            cy={ASSAM.y}
            r="6"
            fill="#a78bfa"
            stroke="#ddd6fe"
            strokeWidth="1.5"
            filter="url(#assam-marker-glow)"
          />

          <circle cx={ASSAM.x} cy={ASSAM.y} r="2.5" fill="#f5f3ff" />

          {/* Moving light follows the same path */}
          <circle r="2.6" fill="#e0f2fe" filter="url(#assam-path-glow)">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path={connectorPath}
            />
          </circle>

          {/* Connector endpoint */}
          <circle
            cx={CONNECTOR.endX}
            cy={CONNECTOR.endY}
            r="2.8"
            fill="#67e8f9"
            filter="url(#assam-path-glow)"
          />
        </svg>

        {/* CMS-controlled text */}
        <div
          className="
            absolute
            left-[62%]
            top-[66%]
            min-w-[195px]
            -translate-y-1/2

            sm:left-[72%]
          "
        >
          <p
            className="
              text-sm
              font-normal
              leading-6
              text-foreground

              sm:text-base
            "
          >
            {eyebrow}
            <br />
            from{" "}
            <span
              className="
                font-semibold
                text-cyan-600
                drop-shadow-[0_0_9px_rgba(6,182,212,0.3)]

                dark:text-cyan-300
                dark:drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]
              "
            >
              {location}
            </span>
            <br />
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
