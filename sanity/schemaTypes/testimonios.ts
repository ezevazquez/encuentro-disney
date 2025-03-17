import { defineType, defineField } from "sanity"

export default defineType({
  name: "testimonio",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "comentario",
      title: "Comentario",
      type: "text",
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
  ],
})

