import { HeroGlow } from "./HeroGlow";
import { HeroGrid } from "./HeroGrid";
import { HeroMesh } from "./HeroMesh";
import { HeroStars } from "./HeroStars";
export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* Base canvas */}
      <div
        className="
          absolute
          inset-0
          bg-slate-50

          dark:bg-[#020817]
        "
      />

      {/* Main atmospheric gradient */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_70%_22%,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_88%_70%,rgba(124,58,237,0.13),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(239,246,255,0.8))]

          dark:bg-[radial-gradient(circle_at_68%_20%,rgba(37,99,235,0.24),transparent_32%),radial-gradient(circle_at_88%_65%,rgba(124,58,237,0.20),transparent_36%),linear-gradient(to_bottom,#020817,#030b20)]
        "
      />

      <HeroGrid />
      <HeroStars />
      <HeroGlow />

      <HeroMesh />

      {/* Edge vignette */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(148,163,184,0.10)_100%)]

          dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.85)_100%)]
        "
      />

      {/* Top highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-blue-500/35
          to-transparent

          dark:via-blue-400/50
        "
      />
    </div>
  );
}
