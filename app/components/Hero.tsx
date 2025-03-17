"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./Button"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6"
      >
        <Image
          src="/logo.png"
          alt="Encuentro con Disney"
          width={250}
          height={250}
          priority
          className="mx-auto rounded-full shadow-xl border-4 border-primary"
        />
        <h1 className="text-5xl font-disney text-primary mt-6 drop-shadow-lg">
          ¡Vive la magia de Disney con nosotros!
        </h1>
        <p className="text-xl text-secondary mt-4 max-w-2xl mx-auto">
          Planificamos la mejor experiencia para tu viaje soñado con paquetes exclusivos y atención personalizada.
        </p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-8">
        <Button variant="accent" size="lg" className="shadow-lg">
          Explorar Opciones ✨
        </Button>
      </motion.div>
    </section>
  )
}

