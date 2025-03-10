/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityClient } from "@/sanity/lib/client";

export interface Paquete {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  slug: string; // <- Cambiamos a string
}

export async function getPaquetes(): Promise<Paquete[]> {
  const query = `
    *[_type == "paquete"]{
      nombre,
      descripcion,
      precio,
      "imagenUrl": imagen.asset->url,
      slug
    } | order(nombre asc)
  `;

  const resultados = await sanityClient.fetch(query);
  
  // Transformamos `slug` de { current: string } a string plano
  return resultados.map((p: any) => ({
    ...p,
    slug: p.slug.current, // Convertimos el objeto slug a string
  }));
}
