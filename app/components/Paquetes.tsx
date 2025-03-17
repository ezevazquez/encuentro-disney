"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./Card"
// Import the Button component
import { Button } from "./Button"

interface Paquete {
  _id: string // ✅ Se agregó _id para que coincida con la API de Sanity
  nombre: string
  descripcion: string
  precio: number
  imagenUrl: string
  slug: string
}

interface PaquetesProps {
  paquetes: Paquete[]
}

export function Paquetes({ paquetes }: PaquetesProps) {
  return (
    <section id="paquetes" className="py-12 text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Nuestros Paquetes</h2>
      <p className="text-lg text-secondary mb-6">Descubre las mejores opciones para tu viaje soñado a Disney.</p>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {paquetes.map((paq, index) => (
          <motion.div
            key={paq._id} // ✅ Ahora usamos `_id` como key
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              {paq.imagenUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-md"
                >
                  <Image
                    src={paq.imagenUrl || "/placeholder.svg"}
                    alt={paq.nombre}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </motion.div>
              )}

              <h3 className="text-xl font-semibold mt-4 text-text">{paq.nombre}</h3>
              <p className="text-md text-gray-700 mb-3">{paq.descripcion}</p>
              <p className="text-lg font-bold text-accent">Precio: ${paq.precio}</p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <Button variant="default" size="md">
                  Ver Detalles
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

