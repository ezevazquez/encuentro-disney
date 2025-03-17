"use client"
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
  return (
    <section id="testimonios" className="py-16 bg-muted/30">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Testimonios de nuestros clientes ✨</h2>

      {/* Contenedor de testimonios con scroll horizontal */}
      <div className="flex overflow-x-auto space-x-6 pb-4 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide">
        {testimonios.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="snap-center"
          >
            <Card className="min-w-[320px] max-w-sm p-6 bg-card shadow-lg rounded-lg border border-border">
              {/* Imagen de la persona */}
              {t.imagenUrl && (
                <div className="flex justify-center">
                  <Image
                    src={t.imagenUrl || "/placeholder.svg"}
                    alt={t.nombre}
                    width={70}
                    height={70}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-primary"
                  />
                </div>
              )}

              {/* Comentario */}
              <p className="text-card-foreground italic text-center">&ldquo;{t.comentario}&rdquo;</p>

              {/* Nombre */}
              <p className="mt-3 font-semibold text-sm text-center text-secondary">- {t.nombre}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

