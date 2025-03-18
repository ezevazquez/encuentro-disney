"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./Button"

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  // Variantes para las líneas del botón hamburguesa/X
  const topLineVariants = {
    closed: { rotate: 0, y: -6, backgroundColor: "#ffffff" },
    open: { rotate: 45, y: 0, backgroundColor: "#000000" },
  }

  const middleLineVariants = {
    closed: { opacity: 1, backgroundColor: "#ffffff" },
    open: { opacity: 0, backgroundColor: "#000000" },
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 6, backgroundColor: "#ffffff" },
    open: { rotate: -45, y: 0, backgroundColor: "#000000" },
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline relative z-10">
          <div className="relative h-10 w-20">
            <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="#paquetes" className="font-medium transition-all no-underline text-base hover:opacity-80 text-white">
            Paquetes
          </Link>
          <Link href="#testimonios" className="font-medium transition-all no-underline text-base hover:opacity-80 text-white">
            Testimonios
          </Link>
          <Link href="#contacto">
            <Button variant="secondary" size="lg" className="rounded-full px-6 shadow-lg bg-[#f28729] hover:bg-[#ff7700]">
              Pedir cotización
            </Button>
          </Link>
        </div>

        {/* Botón Hamburguesa / X */}
        <button
          ref={buttonRef}
          className="md:hidden flex flex-col justify-center items-center relative z-20 mr-4 h-6 w-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            className="absolute block h-0.5 w-6 rounded transition-all"
            animate={menuOpen ? "open" : "closed"}
            variants={topLineVariants}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block h-0.5 w-6 rounded transition-all"
            animate={menuOpen ? "open" : "closed"}
            variants={middleLineVariants}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute block h-0.5 w-6 rounded transition-all"
            animate={menuOpen ? "open" : "closed"}
            variants={bottomLineVariants}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <motion.div
        ref={sidebarRef}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 right-0 h-full bg-white shadow-lg flex flex-col items-center space-y-8 pt-20 z-10 px-6 py-4 w-[250px]"
      >
        <Link href="#paquetes" className="text-gray-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
          Paquetes
        </Link>
        <Link href="#testimonios" className="text-gray-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
          Testimonios
        </Link>
        <Link href="#contacto" onClick={() => setMenuOpen(false)}>
          <Button variant="secondary" size="lg" className="rounded-full px-6 shadow-lg bg-[#f28729] hover:bg-[#ff7700] text-white">
            Pedir cotización
          </Button>
        </Link>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
