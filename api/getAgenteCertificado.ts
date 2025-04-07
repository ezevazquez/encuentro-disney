import { sanityClient } from "@/sanity/lib/client"
import type { PortableTextBlock } from "@portabletext/types"

export interface AgenteCertificadoData {
  titulo: string
  descripcion: string
  informacionDetallada: PortableTextBlock[]
  imagenUrl?: string
}

export async function getAgenteCertificado(): Promise<AgenteCertificadoData[] | null> {
  const query = `
    *[_type == "agenteCertificado"]{
      titulo,
      descripcion,
      informacionDetallada,
      "imagenUrl": imagen.asset->url
    } | order(_createdAt asc)
  `

  const resultados = await sanityClient.fetch(query, {}, { cache: "no-store" })

  return resultados.length > 0 ? resultados : null
}

