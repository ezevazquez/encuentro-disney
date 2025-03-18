"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./Card"
import { Button } from "./Button"
import Link from "next/link"

interface Paquete {
  _id: string
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
    <section id="paquetes" className="flex items-center justify-center min-h-screen w-full bg-[#F2E0D5] py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">Nuestras propuestas ✈️</h2>
          <p className="text-lg text-[#1a1a1a] max-w-2xl mx-auto">
            Descubre las mejores opciones para tu viaje soñado a Disney.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {paquetes.map((paq, index) => (
            <motion.div
              key={paq._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              style={{ maxWidth: "400px" }}
            >
              <Card className="h-full flex flex-col">
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

                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mt-4 text-[#1a1a1a]">{paq.nombre}</h3>
                  <p className="text-md text-gray-700 mb-3 flex-grow">{paq.descripcion}</p>
                  {/* <p className="text-lg font-bold text-[#F28729]">Precio: ${paq.precio}</p> */}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <Link href="#contacto">
                      <Button variant="default" size="md" className="font-semibold w-full">
                        Pedir cotización
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

