import {
  BarChart3,
  BrainCircuit,
  Cloud,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  Smartphone,
} from "lucide-react";

import { CapabilityNode } from "./CapabilityNode";

export function CapabilityCanvas() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-3xl
      "
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    h-[72%]
    w-[78%]
    -translate-x-1/2
    -translate-y-1/2
    rounded-[40%]
    bg-gradient-to-br
    from-blue-500/6
    via-cyan-400/4
    to-violet-500/6
    blur-[110px]

    dark:from-blue-500/10
    dark:via-cyan-400/6
    dark:to-violet-500/10
  "
      />

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:gap-6
        "
      >
        {/* Main capability */}
        <div className="sm:col-span-2 sm:flex sm:justify-center">
          <CapabilityNode
            name="Digital Transformation"
            description="Modernising organisations through connected digital systems"
            href="/services/digital-transformation"
            icon={<RefreshCw className="size-5" />}
            className="
              w-full
              sm:w-[22rem]
            "
          />
        </div>

        {/* Second row */}
        <CapabilityNode
          name="Enterprise Software"
          description="Connected school management and administration"
          href="/products/school-erp"
          icon={<GraduationCap className="size-5" />}
          className="w-full"
        />

        <CapabilityNode
          name="Mobile Apps"
          description="Modern mobile experiences for customers and teams"
          href="/services/mobile-apps"
          icon={<Smartphone className="size-5" />}
          className="w-full"
        />

        {/* Third row */}
        <CapabilityNode
          name="AI Solutions"
          description="Automation and intelligent business workflows"
          href="/services/ai-solutions"
          icon={<BrainCircuit className="size-5" />}
          className="w-full"
        />

        <CapabilityNode
          name="Data & Analytics"
          description="Clear insights for better business decisions"
          href="/services/data-analytics"
          icon={<BarChart3 className="size-5" />}
          className="w-full"
        />

        {/* Fourth row */}
        <CapabilityNode
          name="Cloud Infrastructure"
          description="Reliable, scalable and production-ready platforms"
          href="/services/cloud-infrastructure"
          icon={<Cloud className="size-5" />}
          className="w-full"
        />

        <CapabilityNode
          name="Secure Platforms"
          description="Security and resilience built into every layer"
          href="/services/secure-platforms"
          icon={<LockKeyhole className="size-5" />}
          className="w-full"
        />
      </div>
    </div>
  );
}
