"use client"
import { motion } from "framer-motion"
import type React from "react"

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-background bg-opacity-90 shadow-md backdrop-blur-lg py-4 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="/" className="text-2xl font-bold text-primary no-underline">
          Encuentro con Disney
        </a>
        <ul className="hidden md:flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#paquetes" className="text-foreground hover:text-primary transition-all no-underline">
              Paquetes
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#testimonios" className="text-foreground hover:text-primary transition-all no-underline">
              Testimonios
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#contacto" className="text-foreground hover:text-primary transition-all no-underline">
              Contacto
            </a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar

