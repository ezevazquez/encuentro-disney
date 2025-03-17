"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./Button"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          opacity: .9,
        }}
      ></div>

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-6 z-20"
      >
        <Image
          src="/logo.png"
          alt="Encuentro con Disney"
          width={250}
          height={250}
          priority
          className="mx-auto rounded-full shadow-xl border-4 border-[#F20544]"
        />
        <h1 className="text-5xl font-disney text-white mt-6 drop-shadow-lg">¡Vive la magia de Disney con nosotros!</h1>
        <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
          Planificamos la mejor experiencia para tu viaje soñado con paquetes exclusivos y atención personalizada.
        </p>

        {/* Customizable Overlay Text */}
        <div className="mt-8 bg-[#F20544] bg-opacity-80 py-4 px-6 rounded-lg inline-block">
          <p className="text-2xl font-bold text-white">¡Ofertas especiales este mes!</p>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-8 z-20">
        <Button variant="accent" size="lg" className="shadow-lg font-bold">
          Explorar Opciones ✨
        </Button>
      </motion.div>
    </section>
  )
}

