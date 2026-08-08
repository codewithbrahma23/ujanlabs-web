import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroBackground } from "../hero-background/HeroBackground";

type HeroProps = {
  data: any;
};

export function Hero({ data }: HeroProps) {
  const hero = data.hero;

  return (
    //   <section
    //     className="
    //   relative
    //   isolate
    //   overflow-hidden

    //   min-h-screen

    //   bg-white
    //   dark:bg-slate-950
    // "
    //   >
    //     <HeroBackground />
    //   </section>

    <section
      className="
    relative
    isolate
    min-h-screen
    overflow-hidden

    bg-background
  "
    >
      <HeroBackground />

      {/* Temporary */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-bold">Hero Canvas</h1>
      </div>
    </section>
  );
}
