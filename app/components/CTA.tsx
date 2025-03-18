"use client"
import { motion } from "framer-motion"
import { Button } from "./Button"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contacto" className="py-20 text-center bg-[#F20544] text-white relative overflow-hidden w-full">
      {/* Decoraciones animadas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"
      />

      {/* Contenido Principal */}
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg text-white">¡Prepárate para la magia! ✨</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            ¿Listo para vivir la experiencia Disney? Contáctanos y planifica tu viaje inolvidable.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Link href="https://forms.gle/1mLCZMexbt9WK4og9">
              <Button variant="accent" size="lg" className="font-bold border-2 border-white">
                Pedir cotización
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

