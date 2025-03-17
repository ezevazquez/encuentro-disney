import { sanityClient } from "@/sanity/lib/client"

export interface TestimonioData {
  nombre: string
  comentario: string
  imagenUrl?: string
}

export async function getTestimonios(): Promise<TestimonioData[]> {
  const query = `
    *[_type == "testimonio"]{
      nombre,
      comentario,
      "imagenUrl": imagen.asset->url
    } | order(_createdAt desc)
  `
  return await sanityClient.fetch(query)
}

