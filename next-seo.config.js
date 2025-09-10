// next-seo.config.js
const defaultSEOConfig = {
  title: "Encuentro con Disney | Paquetes, Entradas, Hoteles y Asesoría Oficial",
  titleTemplate: "%s | Encuentro con Disney",
  description: "Organizá tu viaje a Disney con paquetes a medida, entradas, hoteles dentro y fuera del parque, financiación y asesoría de un agente certificado. Viví la magia sin estrés.",
  canonical: "https://www.encuentrodisney.com", // URL base del sitio (actualízala tras desplegar)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.encuentrodisney.com",
    site_name: "Encuentro con Disney",
    title: "Encuentro con Disney | Viajes a Disney con agente certificado",
    description: "Paquetes personalizados, entradas a parques, hoteles, traslados y financiación. Asesoría oficial para familias, parejas y grupos.",
    images: [
      {
        url: "https://www.encuentrodisney.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Encuentro con Disney",
      },
    ],
  },
  instagram: {
    handle: "@encuentrocondisney", // Reemplaza con el usuario de Twitter de la empresa, si tiene
    site: "@encuentrocondisney",
    cardType: "",
  },
}
export default defaultSEOConfig

