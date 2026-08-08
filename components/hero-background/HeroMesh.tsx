export function HeroMesh() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        h-[42%]
        overflow-hidden
      "
    >
      {/* Soft light beneath the mesh */}
      <div
        className="
          absolute
          bottom-[-8rem]
          left-1/2
          h-72
          w-[85%]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[110px]

          dark:bg-blue-500/20
        "
      />
      <svg
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
        className="
    absolute
    inset-x-0
    bottom-[12%]
    h-[80%]
    w-full
    opacity-10
    dark:opacity-20
  "
      >
        <g fill="none" stroke="rgb(59 130 246 / 0.55)" strokeWidth="0.8">
          <path d="M0 265 C170 175 320 310 485 215 C650 125 810 285 980 190 C1150 105 1350 265 1600 155" />

          <path d="M0 290 C180 200 335 335 505 240 C670 150 830 310 1000 215 C1170 130 1370 290 1600 180" />

          <path d="M0 315 C195 225 350 360 525 265 C690 175 850 335 1020 240 C1190 155 1390 315 1600 205" />

          <path d="M140 420 C155 320 205 245 280 190" />
          <path d="M350 420 C365 305 430 225 525 170" />
          <path d="M585 420 C600 300 670 215 765 165" />
          <path d="M820 420 C835 300 900 215 1000 155" />
          <path d="M1060 420 C1075 305 1140 230 1235 180" />
          <path d="M1310 420 C1325 320 1380 255 1480 205" />
        </g>
      </svg>

      <svg
        viewBox="0 0 1600 420"
        preserveAspectRatio="none"
        className="
          absolute
          inset-x-0
          bottom-0
          h-full
          w-full
          opacity-30

          dark:opacity-55
        "
      >
        <defs>
          <linearGradient id="mesh-line-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="20%" stopColor="#2563eb" stopOpacity="0.65" />
            <stop offset="55%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="82%" stopColor="#7c3aed" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="mesh-fade-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="28%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>

          <mask id="mesh-fade-mask">
            <rect width="1600" height="420" fill="url(#mesh-fade-gradient)" />
          </mask>

          <filter id="mesh-glow">
            <feGaussianBlur stdDeviation="2.2" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="url(#mesh-line-gradient)"
          strokeWidth="1"
          mask="url(#mesh-fade-mask)"
        >
          {/* Horizontal landscape curves */}

          <path d="M0 305 C180 205 300 350 480 255 C650 165 780 325 980 230 C1160 140 1340 315 1600 195" />

          <path d="M0 325 C190 225 325 375 500 275 C670 185 810 345 1000 250 C1180 160 1360 335 1600 220" />

          <path d="M0 345 C210 245 350 395 520 295 C690 205 840 365 1020 270 C1200 180 1380 355 1600 245" />

          <path d="M0 365 C220 265 370 415 540 315 C710 225 860 385 1040 290 C1220 200 1400 375 1600 270" />

          <path d="M0 385 C235 285 390 435 560 335 C730 245 880 405 1060 310 C1240 220 1420 395 1600 295" />

          <path d="M0 405 C250 305 410 455 580 355 C750 265 900 425 1080 330 C1260 240 1440 415 1600 320" />

          {/* Vertical perspective lines */}

          <path d="M70 420 C90 335 120 270 175 225" />
          <path d="M155 420 C170 330 215 260 285 215" />
          <path d="M250 420 C265 325 320 255 400 225" />
          <path d="M360 420 C375 315 430 245 520 205" />
          <path d="M475 420 C490 315 545 240 640 195" />
          <path d="M600 420 C610 310 670 235 765 205" />
          <path d="M730 420 C740 310 795 235 890 195" />
          <path d="M865 420 C875 310 930 235 1025 190" />
          <path d="M1000 420 C1010 315 1060 240 1150 205" />
          <path d="M1135 420 C1145 320 1195 250 1280 215" />
          <path d="M1270 420 C1280 325 1330 265 1410 230" />
          <path d="M1410 420 C1420 335 1460 280 1535 245" />
        </g>

        {/* Brighter ridgeline */}

        <path
          d="M0 305 C180 205 300 350 480 255 C650 165 780 325 980 230 C1160 140 1340 315 1600 195"
          fill="none"
          stroke="url(#mesh-line-gradient)"
          strokeWidth="1.5"
          filter="url(#mesh-glow)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
