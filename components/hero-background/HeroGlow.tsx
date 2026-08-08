export function HeroGlow() {
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
      {/* Large blue light behind the capability canvas */}
      <div
        className="
          absolute
          right-[-10rem]
          top-[-5rem]
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-blue-500/20
          blur-[130px]

          dark:bg-blue-500/30
        "
      />

      {/* Cyan centre light */}
      <div
        className="
          absolute
          left-[45%]
          top-[22%]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-cyan-400/14
          blur-[120px]

          dark:bg-cyan-400/20
        "
      />

      {/* Purple lower-right light */}
      <div
        className="
          absolute
          bottom-[-13rem]
          right-[2%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-violet-500/18
          blur-[145px]

          dark:bg-violet-500/28
        "
      />

      {/* Left-side blue ambience */}
      <div
        className="
          absolute
          bottom-[5%]
          left-[-12rem]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-blue-500/12
          blur-[120px]

          dark:bg-blue-600/20
        "
      />

      {/* Focused glow behind the diagram */}
      <div
        className="
          absolute
          right-[8%]
          top-[18%]
          h-[55%]
          w-[44%]
          rounded-[50%]
          bg-gradient-to-br
          from-blue-400/8
          via-cyan-400/8
          to-violet-500/10
          blur-[75px]

          dark:from-blue-400/15
          dark:via-cyan-400/10
          dark:to-violet-500/15
        "
      />
    </div>
  );
}
