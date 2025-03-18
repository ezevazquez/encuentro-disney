import { sanityClient } from "@/sanity/lib/client"

export interface FAQData {
  pregunta: string
  respuesta: string
}

export async function getFAQ(): Promise<FAQData[]> {
  const query = `
    *[_type == "faq"]{
      pregunta,
      respuesta
    } | order(_createdAt asc)
  `

  const resultados = await sanityClient.fetch(query, {}, { cache: 'no-store' })

  return resultados
}
