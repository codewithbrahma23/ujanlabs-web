import Link from "next/link";
import type { ReactNode } from "react";

type CapabilityNodeProps = {
  name: string;
  description?: string;
  href: string;
  icon?: ReactNode;
  className?: string;
};

export function CapabilityNode({
  name,
  description,
  href,
  icon,
  className = "",
}: CapabilityNodeProps) {
  return (
    <Link
      href={href}
      aria-label={`Learn more about ${name}`}
      className={`
        group
        relative
        flex
        min-h-28
        w-full
        flex-col
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-slate-950/90
        px-5
        py-4
        text-left
        text-white
        shadow-[0_18px_55px_rgba(15,23,42,0.35)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-400/60
        hover:shadow-[0_20px_70px_rgba(59,130,246,0.30)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
        ${className}
      `}
    >
      {/* Bottom glow */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-x-6
          bottom-[-2rem]
          h-16
          rounded-full
          bg-blue-500/30
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Top edge highlight */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-x-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-blue-400/60
          to-transparent
          opacity-40
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <span className="relative z-10 flex items-start gap-4">
        {icon ? (
          <span
            className="
              flex
              size-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-blue-400/20
              bg-blue-500/10
              text-blue-300
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:border-blue-400/40
              group-hover:bg-blue-500/20
            "
          >
            {icon}
          </span>
        ) : null}

        <span className="min-w-0 pr-5">
          <span className="block font-semibold tracking-tight">{name}</span>

          {description ? (
            <span className="mt-1.5 block text-xs leading-5 text-slate-400">
              {description}
            </span>
          ) : null}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="
          absolute
          right-4
          top-4
          text-sm
          text-slate-500
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:text-blue-300
        "
      >
        ↗
      </span>
    </Link>
  );
}
