import { defineType, defineField } from "sanity"

export default defineType({
  name: "paquete",
  title: "Paquete",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
    }),
    // defineField({
    //   name: "precio",
    //   title: "Precio",
    //   type: "number",
    // }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true, // permite hacer focus en partes de la imagen
      },
    }),
  ],
})

