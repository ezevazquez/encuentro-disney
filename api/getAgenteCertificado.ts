import { sanityClient } from "@/sanity/lib/client"
import type { PortableTextBlock } from "@portabletext/types"

export interface AgenteCertificadoData {
  titulo: string
  descripcion: string
  informacionDetallada: PortableTextBlock[]
  imagenUrl?: string
}

export async function getAgenteCertificado(): Promise<AgenteCertificadoData | null> {
  const query = `
    *[_type == "agenteCertificado"][0]{
      titulo,
      descripcion,
      informacionDetallada,
      "imagenUrl": imagen.asset->url
    }
  `

  const resultado = await sanityClient.fetch(query, {}, { cache: "no-store" })

  return resultado || null
}

