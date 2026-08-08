// import { Header } from "@/components/layout/header";
// import { Hero } from "@/components/landing/hero";
// import { Mission } from "@/components/landing/mission";
// import { Services } from "@/components/landing/services";
// import { FeaturedProduct } from "@/components/landing/featured-product";
// import { Audience } from "@/components/landing/audience";
// import { Vision } from "@/components/landing/vision";
// import { Footer } from "@/components/landing/footer";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <Mission />
//       <Services />
//       <FeaturedProduct />
//       <Audience />
//       <Vision />
//       <Footer />
//     </>
//   );
// }
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { Mission } from "@/components/landing/mission";
import { Services } from "@/components/landing/services";
import { FeaturedProduct } from "@/components/landing/featured-product";
import { Audience } from "@/components/landing/audience";
import { Vision } from "@/components/landing/vision";
import { Footer } from "@/components/landing/footer";

import { getHomepage } from "@/lib/cms";

export default async function Home() {
  const homepage = await getHomepage();

  return (
    <>
      <Header />

      <Hero data={homepage} />

      <main className=" bg-[#eef3f8] dark:bg-[#020817] ">
        <Mission data={homepage} />

        <Services data={homepage} />

        <FeaturedProduct data={homepage} />

        <Audience data={homepage} />

        <Footer />
      </main>
    </>
  );
}
