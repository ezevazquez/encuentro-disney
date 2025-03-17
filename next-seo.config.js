// next-seo.config.js
const defaultSEOConfig = {
  title: "Encuentro con Disney",
  titleTemplate: "%s | Encuentro con Disney",
  description: "Evento mágico de Disney con personajes, shows en vivo y experiencias únicas.",
  canonical: "https://www.encuentrodisney.com", // URL base del sitio (actualízala tras desplegar)
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.encuentrodisney.com",
    site_name: "Encuentro con Disney",
    title: "Encuentro con Disney",
    description: "¡No te pierdas el evento mágico de Disney lleno de sorpresas!",
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

