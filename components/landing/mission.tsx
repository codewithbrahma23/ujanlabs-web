import {
  ArrowUpRight,
  CircleCheckBig,
  Globe2,
  Layers3,
  Sparkles,
} from "lucide-react";

type MissionProps = {
  data?: any;
};

const missionPoints = [
  {
    title: "Trusted Technology",
    description:
      "Reliable digital systems designed for real organisations and long-term use.",
    icon: CircleCheckBig,
  },
  {
    title: "Connected Experiences",
    description:
      "Products that bring people, processes and information together.",
    icon: Layers3,
  },
  {
    title: "Meaningful Impact",
    description:
      "Technology created to enable growth, access and lasting progress.",
    icon: Globe2,
  },
];

export function Mission({ data }: MissionProps) {
  const mission =
    data?.mission?.text ||
    "To harness modern technology to build trusted digital solutions that connect people, empower organisations, and create opportunities for innovation, growth, and lasting impact.";

  return (
    <section
      id="mission"
      className="
        relative
        overflow-hidden
        bg-[#eef3f8]
        py-24

        dark:bg-[#020817]

        lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200/80
            bg-white/80
            shadow-[0_24px_80px_rgba(15,23,42,0.08)]
            backdrop-blur-xl

            dark:border-white/10
            dark:bg-white/[0.04]
            dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)]
          "
        >
          {/* Decorative light */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-blue-500/10
              blur-[90px]

              dark:bg-blue-500/20
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              right-[-5rem]
              h-80
              w-80
              rounded-full
              bg-violet-500/10
              blur-[100px]

              dark:bg-violet-500/20
            "
          />

          {/* Technical grid */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-60

              [background-image:linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]
              [background-size:48px_48px]

              dark:opacity-40
              dark:[background-image:linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-16
              p-8

              sm:p-10

              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-center
              lg:p-14
            "
          >
            {/* Left side */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-700

                  dark:border-blue-400/20
                  dark:bg-blue-400/10
                  dark:text-blue-300
                "
              >
                <Sparkles className="size-4" aria-hidden="true" />
                Our Mission
              </div>

              <h2
                className="
                  mt-7
                  max-w-xl
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-950

                  sm:text-5xl

                  dark:text-white
                "
              >
                Building technology that creates lasting progress.
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-slate-600

                  dark:text-slate-400
                "
              >
                {mission}
              </p>

              <div className="mt-9">
                <a
                  href="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-blue-700
                    transition-colors

                    hover:text-blue-900

                    dark:text-blue-300
                    dark:hover:text-blue-200
                  "
                >
                  Learn more about Ujan Labs
                  <ArrowUpRight
                    className="
                      size-4
                      transition-transform
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="grid gap-4">
              {missionPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <div
                    key={point.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200/80
                      bg-white/80
                      p-5
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-blue-400/50
                      hover:shadow-[0_18px_45px_rgba(37,99,235,0.10)]

                      dark:border-white/10
                      dark:bg-white/[0.04]
                      dark:hover:border-blue-400/30
                      dark:hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)]
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-px
                        bg-gradient-to-b
                        from-transparent
                        via-blue-500/60
                        to-transparent
                      "
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className="
                          flex
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-500/10
                          text-blue-700
                          transition-all
                          duration-300

                          group-hover:scale-105
                          group-hover:bg-blue-500/15

                          dark:bg-blue-400/10
                          dark:text-blue-300
                        "
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="
                              text-xs
                              font-semibold
                              tracking-[0.14em]
                              text-slate-400

                              dark:text-slate-500
                            "
                          >
                            0{index + 1}
                          </span>

                          <h3
                            className="
                              text-lg
                              font-semibold
                              text-slate-950

                              dark:text-white
                            "
                          >
                            {point.title}
                          </h3>
                        </div>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-600

                            dark:text-slate-400
                          "
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
