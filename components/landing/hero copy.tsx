import { Button } from "@/components/ui/button";
import Image from "next/image";

type HeroProps = {
  data: any;
};

export function Hero({ data }: HeroProps) {
  const hero = data.hero;

  return (
    <section className="relative isolate overflow-hidden">
      {/* <Image
        src={`http://localhost:3000${hero.backgroundImage.url}`}
        alt={hero.backgroundImage.alt || "Hero Background"}
        fill
        priority
        className="
    object-cover
    opacity-20
  "
      /> */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(http://localhost:3000${hero.backgroundImage.url})`,
        }}
      />
      {/* console.log({`http://localhost:3000${hero.backgroundImage.url}`}) */}
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      {/* Blue Glow */}
      <div className="absolute left-10 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      {/* Cyan Glow */}
      <div className="absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
      {/* Decorative Grid */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-30
          [background-image:linear-gradient(to_right,#94a3b810_1px,transparent_1px),linear-gradient(to_bottom,#94a3b810_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border bg-background/70 px-5 py-2 text-sm font-medium backdrop-blur">
            🚀 Trusted Technology Partner
          </div>

          {/* CMS Badge */}
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            {hero.badge}
          </p>

          {/* CMS Title */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          {/* CMS Subtitle */}
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {hero.subtitle}
          </p>

          {/* CMS Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {hero.primaryButtonText}
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 backdrop-blur transition-all duration-300 hover:-translate-y-1"
            >
              {hero.secondaryButtonText}
            </Button>
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-3 gap-10 border-t pt-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">RFID</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Smart Attendance
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">Cloud</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                SaaS Platform
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">SME</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Business Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
