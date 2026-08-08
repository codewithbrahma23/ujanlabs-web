import Image from "next/image";

type AssamGlobalProps = {
  eyebrow?: string;
  location?: string;
  message?: string;
  globeImage?: string;
};

export function AssamGlobal({
  eyebrow = "Proudly Building",
  location = "Assam",
  message = "Delivering Globally",
  globeImage = "/images/globe-assam.png",
}: AssamGlobalProps) {
  return (
    <div
      className="
        group
        relative
        flex
        w-full
        max-w-md
        items-center
        gap-3
      "
    >
      {/* Globe image */}
      <div
        className="
    relative
    h-32
    w-48
    shrink-0
    ml-6
  "
      >
        {/* Soft glow behind globe */}
        <div
          className="
            absolute
            left-[12%]
            top-[18%]
            h-[70%]
            w-[70%]
            rounded-full
            bg-blue-500/5
            blur-[45px]

            dark:bg-blue-500/10
          "
        />

        <Image
          src={globeImage}
          alt=""
          fill
          sizes="224px"
          className="
            object-contain
            object-left-center
            opacity-80
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]

            dark:opacity-90
          "
        />

        {/* Assam marker on top of globe */}
        <span
          className="
            absolute
            right-[25%]
            top-[43%]
            flex
            size-4
            items-center
            justify-center
          "
        >
          <span
            aria-hidden="true"
            className="
              absolute
              size-4
              animate-ping
              rounded-full
              bg-violet-400/40
            "
          />

          <span
            className="
              relative
              size-2.5
              rounded-full
              bg-violet-400
              shadow-[0_0_14px_rgba(167,139,250,0.9)]
            "
          />
        </span>

        {/* Connector path */}
        <svg
          viewBox="0 0 220 140"
          preserveAspectRatio="none"
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
              id="assam-globe-connector"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="45%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
            </linearGradient>

            <filter
              id="assam-globe-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="3.5" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="
              M160 63
              C174 63 181 69 189 78
              L198 88
              L222 88
            "
            fill="none"
            stroke="url(#assam-globe-connector)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Moving glow */}
          <circle r="2.5" fill="#e0f2fe" filter="url(#assam-globe-glow)">
            <animateMotion
              dur="3.8s"
              repeatCount="indefinite"
              path="
                M160 63
                C174 63 181 69 189 78
                L198 88
                L222 88
              "
            />
          </circle>

          {/* Connector endpoint */}
          <circle
            cx="222"
            cy="88"
            r="2.5"
            fill="#67e8f9"
            filter="url(#assam-globe-glow)"
          />
        </svg>
      </div>

      {/* CMS-controlled text */}
      <div className="relative min-w-0">
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
              drop-shadow-[0_0_10px_rgba(6,182,212,0.25)]

              dark:text-cyan-300
              dark:drop-shadow-[0_0_12px_rgba(103,232,249,0.45)]
            "
          >
            {location},
          </span>
          <br />
          {message}
        </p>
      </div>
    </div>
  );
}
