import { defineType, defineField } from "sanity"

export default defineType({
  name: "agenteCertificado",
  title: "Agente Certificado",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción Corta",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "informacionDetallada",
      title: "Información Detallada",
      type: "array",
      of: [{ type: "block" }],
      description: "Esta información se mostrará al hacer clic en 'Ver más'",
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})

