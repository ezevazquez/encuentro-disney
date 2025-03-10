import { defineType, defineField } from "sanity";

export default defineType({
  name: "faq",
  title: "Preguntas Frecuentes",
  type: "document",
  fields: [
    defineField({
      name: "pregunta",
      title: "Pregunta",
      type: "string",
    }),
    defineField({
      name: "respuesta",
      title: "Respuesta",
      type: "text",
    }),
  ],
});
