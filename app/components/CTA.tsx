
"use client"
import { motion } from "framer-motion"
import { Button } from "./Button"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

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

          {/* Contenedor de los botones */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Botón de Cotización */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-auto"
            >
              <Link href="https://forms.gle/1mLCZMexbt9WK4og9">
                <Button variant="accent" size="lg" className="font-bold border-2 border-white w-full md:w-auto">
                  Pedir cotización
                </Button>
              </Link>
            </motion.div>

            {/* Botón de WhatsApp */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-auto"
            >
              <Link href="https://wa.me/5493586109849">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold border-2 border-white flex items-center justify-center gap-2 w-full md:w-auto">
                  <FaWhatsapp size={20} /> WhatsApp
                </Button>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
