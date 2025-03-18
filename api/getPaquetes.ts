/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from "@/sanity/lib/client"

export interface Paquete {
  nombre: string
  descripcion: string
  precio: number
  imagenUrl: string
  slug: string
}

export async function getPaquetes(): Promise<Paquete[]> {
  const query = `
    *[_type == "paquete"]{
      _id,
      nombre,
      descripcion,
      precio,
      "imagenUrl": imagen.asset->url,
      slug
    } | order(nombre asc)
  `

  const resultados = await sanityClient.fetch(query, {}, { cache: 'no-store' })

  return resultados.map((p: any) => ({
    ...p,
    slug: p.slug.current,
  }))
}
