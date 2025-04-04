"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./Card"
import { Button } from "./Button"
import Link from "next/link"
import { useRef } from "react"

interface Paquete {
  _id: string
  nombre: string
  descripcion: string
  precio: number
  imagenUrl: string
}

interface PaquetesProps {
  paquetes: Paquete[]
}

export function Paquetes({ paquetes }: PaquetesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const displayedPaquetes = paquetes.length > 3 ? paquetes : paquetes.slice(0, 4)
  const hasMorePaquetes = paquetes.length > 4

  return (
    <section id="paquetes" className="py-20 w-full bg-[#F2E0D5] relative">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4 text-center">Nuestras promos ✈️</h2>
        <p className="text-lg text-[#1a1a1a] max-w-2xl mx-auto text-center mb-4">
          Descubrí las mejores opciones para tu viaje soñado a Disney.
        </p>

        {/* Carousel logic */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-8 pt-2 snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "0 1rem",
          }}
        >
          {displayedPaquetes.map((paq, index) => (
            <motion.div
              key={paq._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="snap-center flex-shrink-0"
              style={{
                width: "calc(100% - 1rem)",
                maxWidth: "400px",
                marginRight: index === displayedPaquetes.length - 1 ? "0" : "0.5rem",
              }}
            >
              <Card className="h-full flex flex-col">
                {paq.imagenUrl && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-md h-48"
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
                  <h3 className="text-xl font-semibold mt-5 text-[#1a1a1a]">{paq.nombre}</h3>
                  <p className="text-md text-gray-700 mb-3 flex-grow">
                    {paq.descripcion.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
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
        {hasMorePaquetes && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Link href="/paquetes">
              <Button variant="secondary" size="lg" className="font-semibold px-8">
                Ver todos los paquetes
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

