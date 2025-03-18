/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from "@/sanity/lib/client"

export interface Paquete {
  nombre: string
  descripcion: string
  precio: number
  imagenUrl: string
}

export async function getPaquetes(): Promise<Paquete[]> {
  const query = `
    *[_type == "paquete"]{
      _id,
      nombre,
      descripcion,
      precio,
      "imagenUrl": imagen.asset->url
    } | order(nombre asc)
  `

  const resultados = await sanityClient.fetch(query, {}, { cache: 'no-store' })

  return resultados.map((p: any) => ({
    nombre: p.nombre,
    descripcion: p.descripcion,
    precio: p.precio,
    imagenUrl: p.imagenUrl
  }))
}
