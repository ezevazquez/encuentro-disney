/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hero } from "./components/Hero"
import { Paquetes } from "./components/Paquetes"
// import { Testimonios } from "./components/Testimonios"
import { FAQ } from "./components/FAQ"
import { CTA } from "./components/CTA"
import { getPaquetes } from "@/api/getPaquetes"
// import { getTestimonios } from "@/api/getTestimonios"
import { getFAQ } from "@/api/getFAQ"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { AgenteCertificado } from "./components/AgenteCertificado"
import { getAgenteCertificado } from "@/api/getAgenteCertificado"

export default async function HomePage() {
  // Obtenemos datos desde Sanity (el componente de página es del lado servidor por defecto)
  const paquetes = await getPaquetes()
  // const testimonios = await getTestimonios()
  const faqs = await getFAQ()
  const agenteCertificado = await getAgenteCertificado()

  // Check if maintenance mode is enabled
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"

  if (maintenanceMode) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted">
        <div className="text-center p-8 bg-card rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4 text-primary">Estamos trabajando en nuestra web :)</h1>
          <p className="text-lg text-foreground">Pronto volveremos con contenido mágico para vos y tu familia.</p>
          <p>¡Gracias por tu paciencia!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <AgenteCertificado agenteCertificado={agenteCertificado} />
        <Paquetes paquetes={paquetes as any} />
        {/* <Testimonios testimonios={testimonios} /> */}
        <FAQ faqs={faqs} />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

