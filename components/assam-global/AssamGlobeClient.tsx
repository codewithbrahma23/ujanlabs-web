"use client";

import dynamic from "next/dynamic";

const AssamGlobe = dynamic(() => import("./AssamGlobe"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full items-center justify-center sm:h-[500px] lg:h-[580px]">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full border border-cyan-400/20" />

        <div className="h-16 w-16 animate-pulse rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.2)]" />
      </div>
    </div>
  ),
});

export default function AssamGlobeClient() {
  return <AssamGlobe />;
}
