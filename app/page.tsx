import { Hero } from "./components/Hero";
import { Paquetes } from "./components/Paquetes";
import { Testimonios } from "./components/Testimonios";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { getPaquetes } from "@/api/getPaquetes";
import { getTestimonios } from "@/api/getTestimonios";
import { getFAQ } from "@/api/getFAQ";

export default async function HomePage() {
  // Obtenemos datos desde Sanity (el componente de página es del lado servidor por defecto)
  const paquetes = await getPaquetes();
  const testimonios = await getTestimonios();
  const faqs = await getFAQ();

  return (
    <>
      <Hero />
      <main className="container mx-auto px-6">
        <Paquetes paquetes={paquetes} />
        <Testimonios testimonios={testimonios} />
        <FAQ faqs={faqs} />
        <CTA />
      </main>
    </>
  );
}
