"use client"
import { useRef } from "react"
import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./Card"

interface Testimonio {
  nombre: string
  comentario: string
  imagenUrl?: string
}

interface TestimoniosProps {
  testimonios: Testimonio[]
}

export function Testimonios({ testimonios }: TestimoniosProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)




  return (
    <section id="testimonios" className="py-20 w-full bg-[#7D4EC2] relative">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Testimonios de nuestros clientes ✨</h2>

        {/* Simple horizontal scrollable carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-8 pt-2 snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            msOverflowStyle: "none", // Hide scrollbar in IE/Edge
          }}
        >
          {testimonios.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center flex-shrink-0"
              style={{
                width: "calc(100% - 2rem)",
                maxWidth: "330px",
              }}
            >
              <Card className="h-full p-6 bg-white shadow-lg rounded-lg border-2 border-[#F2E0D5]">
                {/* Imagen de la persona */}
                {t.imagenUrl && (
                  <div className="flex justify-center mb-4">
                    <Image
                      src={t.imagenUrl || "/placeholder.svg"}
                      alt={t.nombre}
                      width={70}
                      height={70}
                      className="w-full h-48 rounded-md object-cover border-2"
                    />
                  </div>
                )}

                {/* Comentario */}
                <p className="text-[#1a1a1a] italic text-center mb-4">&ldquo;{t.comentario}&rdquo;</p>

                {/* Nombre */}
                <p className="font-semibold text-sm text-center text-[#7D4EC2]">- {t.nombre}</p>
              </Card>
            </motion.div>
          ))}
          {/* Add an empty div at the end to ensure proper spacing */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>
    </section>
  )
}

