import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/layout/header";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  symbol: string;
  status?: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  symbol,
  status = "Content coming soon",
}: PlaceholderPageProps) {
  return (
    <>
      <Header />

      <main
        className="
          relative
          min-h-[calc(100vh-5rem)]
          overflow-hidden
          bg-[#eef3f8]
          px-6
          py-20

          dark:bg-[#020817]

          lg:px-8
          lg:py-28
        "
      >
        {/* Background grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-60

            [background-image:linear-gradient(to_right,rgba(59,130,246,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.045)_1px,transparent_1px)]
            [background-size:48px_48px]

            dark:opacity-35
            dark:[background-image:linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]
          "
        />

        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-32
            top-16
            size-[28rem]
            rounded-full
            bg-blue-500/10
            blur-[110px]

            dark:bg-blue-500/20
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-10
            size-[28rem]
            rounded-full
            bg-violet-500/10
            blur-[120px]

            dark:bg-violet-500/20
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[650px]
            w-full
            max-w-6xl
            items-center
            justify-center
          "
        >
          <section
            className="
              relative
              w-full
              overflow-hidden
              rounded-[40px]
              border
              border-slate-200/80
              bg-white/80
              px-7
              py-16
              text-center
              shadow-[0_30px_90px_rgba(15,23,42,0.10)]
              backdrop-blur-xl

              sm:px-10
              sm:py-20

              lg:px-16
              lg:py-24

              dark:border-white/10
              dark:bg-white/[0.04]
              dark:shadow-[0_35px_100px_rgba(0,0,0,0.38)]
            "
          >
            {/* Inner glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-48
                w-3/4
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-blue-500/10
                via-cyan-400/15
                to-violet-500/10
                blur-[70px]

                dark:from-blue-500/20
                dark:via-cyan-400/20
                dark:to-violet-500/20
              "
            />

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Symbol */}
              <div
                className="
                  mx-auto
                  flex
                  size-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-500/20
                  bg-gradient-to-br
                  from-blue-600
                  via-blue-500
                  to-cyan-400
                  text-2xl
                  font-semibold
                  text-white
                  shadow-[0_18px_45px_rgba(37,99,235,0.28)]
                "
              >
                {symbol}
              </div>

              {/* Eyebrow */}
              <p
                className="
                  mt-8
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-blue-700

                  dark:text-blue-300
                "
              >
                {eyebrow}
              </p>

              {/* Title */}
              <h1
                className="
                  mt-5
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-950

                  sm:text-5xl
                  lg:text-6xl

                  dark:text-white
                "
              >
                {title}
              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-7
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600

                  dark:text-slate-400
                "
              >
                {description}
              </p>

              {/* Status */}
              <div
                className="
                  mx-auto
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-slate-200/80
                  bg-slate-50/80
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-slate-600

                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-slate-300
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    size-2
                    rounded-full
                    bg-cyan-500
                    shadow-[0_0_12px_rgba(6,182,212,0.9)]
                  "
                />

                {status}
              </div>

              {/* Back home */}
              <div className="mt-10">
                <Link
                  href="/"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-950
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-blue-700
                    hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)]

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#eef3f8]

                    dark:bg-white
                    dark:text-slate-950
                    dark:hover:bg-blue-300
                    dark:focus-visible:ring-offset-[#020817]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  >
                    ←
                  </span>
                  Return to homepage
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
