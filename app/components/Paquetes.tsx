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

  // Determine if we should use carousel or grid layout
  const useCarousel = paquetes.length > 3

  return (
    <section id="paquetes" className="py-20 w-full bg-[#F2E0D5] relative">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4 text-center">Nuestras promos ✈️</h2>
        <p className="text-lg text-[#1a1a1a] max-w-2xl mx-auto text-center mb-8">
          Descubrí las mejores opciones para tu viaje soñado a Disney.
        </p>

        {useCarousel ? (
          // Carousel layout for 4+ cards
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
            {paquetes.map((paq, index) => (
              <motion.div
                key={paq._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="snap-center flex-shrink-0"
                style={{
                  width: "calc(100% - 1rem)",
                  maxWidth: "400px",
                  marginRight: index === paquetes.length - 1 ? "0" : "0.5rem",
                }}
              >
                <PaqueteCard paquete={paq} />
              </motion.div>
            ))}
          </div>
        ) : (
          // Grid layout for 3 or fewer cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {paquetes.map((paq, index) => (
              <motion.div
                key={paq._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <PaqueteCard paquete={paq} />
              </motion.div>
            ))}
          </div>
        )}

        {paquetes.length > 4 && (
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

// Extracted card component to ensure consistent styling
function PaqueteCard({ paquete }: { paquete: Paquete }) {
  return (
    <Card className="h-full flex flex-col">
      {paquete.imagenUrl && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-md h-48"
        >
          <Image
            src={paquete.imagenUrl || "/placeholder.svg"}
            alt={paquete.nombre}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md"
          />
        </motion.div>
      )}

      <div className="flex-grow flex flex-col pt-5">
        {/* Fixed height for title to ensure consistent alignment */}
        <h3 className="text-xl font-semibold text-[#1a1a1a] min-h-[3rem] flex items-start">{paquete.nombre}</h3>

        {/* Description with flex-grow to push button to bottom */}
        <div className="flex-grow">
          <p className="text-md text-gray-700 mb-3">
            {paquete.descripcion.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

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
  )
}

