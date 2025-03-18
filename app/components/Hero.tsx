"use client"
import { motion } from "framer-motion"
import { Button } from "./Button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-45 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-8 z-20 relative flex items-center h-screen">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Viví la magia de Disney con nosotros
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-white mb-8 max-w-xl"
          >
            Planificamos la mejor experiencia para tu viaje soñado con paquetes exclusivos y atención personalizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href="#paquetes">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-10 shadow-lg bg-[#8e6bc7] hover:bg-[#7D4EC2]"
                >
                  Explorar opciones
                </Button>
              </Link>
              <Link href="#contacto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-10 shadow-lg bg-[#f28729] hover:bg-[#ff7700]"
                >
                  Pedir cotización
                </Button>
              </Link>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
}

