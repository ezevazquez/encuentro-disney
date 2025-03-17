import type { SchemaTypeDefinition } from "sanity"
import faq from "./faq"
import paquetes from "./paquetes"
import testimonios from "./testimonios"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faq, paquetes, testimonios],
}

