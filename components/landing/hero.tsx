import { HeroBackground } from "../hero-background/HeroBackground";
import { CapabilityCanvas } from "../hero-capabilities/CapabilityCanvas";
import { AssamGlobal } from "../hero-assam/AssamGlobal";
type HeroProps = {
  data: any;
};

export function Hero({ data }: HeroProps) {
  const hero = data.hero;

  return (
    <section
      className="
    relative
    isolate
    min-h-screen
    overflow-hidden
    bg-slate-50

    dark:bg-[#020817]
  "
    >
      <HeroBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-12
          px-6
          py-24
          lg:grid-cols-[0.9fr_1.1fr]
          lg:px-8
        "
      >
        {/* Temporary left content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {hero.title}
          </p>

          <h1
            className="
              mt-5
              max-w-2xl
              text-5xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-6xl
              lg:text-7xl
            "
          >
            We build modern software that scales with you.
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            From frontend experiences to cloud infrastructure, Ujan Labs
            delivers complete digital solutions.
          </p>
          <div className="mt-8 max-w-md opacity-80 transition-opacity duration-300 hover:opacity-100">
            <AssamGlobal />
          </div>
        </div>
        {/* Bottom transition card */}
        {/* Bottom page transition */}
        <div
          aria-hidden="true"
          className="
    absolute
    bottom-0
    left-1/2
    z-20
    h-24
    w-[92%]
    max-w-7xl
    -translate-x-1/2
    translate-y-0
    rounded-t-[40px]
    bg-[#eef3f8]
    shadow-[0_-12px_40px_rgba(15,23,42,0.08)]

    dark:bg-[#020817]
    dark:shadow-[0_-14px_45px_rgba(0,0,0,0.3)]
  "
        />
        {/* Interactive technology area */}
        <CapabilityCanvas />
      </div>
    </section>
  );
}
