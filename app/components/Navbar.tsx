"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./Button"

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  // Detectar scroll para cambiar el fondo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // Se activa el fondo al bajar 50px
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300 ${
          scrolled ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline relative z-10">
            <div className="relative h-20 w-20">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="#paquetes"
              className={`font-medium transition-all no-underline text-base hover:opacity-80 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Paquetes
            </Link>
            <Link
              href="#testimonios"
              className={`font-medium transition-all no-underline text-base hover:opacity-80 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Testimonios
            </Link>
            <Link href="#contacto">
              <Button
                variant="secondary"
                size="lg"
                className={`rounded-full px-6 shadow-lg ${
                  scrolled ? "bg-[#f28729] hover:bg-[#ff7700] text-white" : "bg-white hover:bg-[#f28729] text-gray-800"
                }`}
              >
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
              className={`absolute block h-0.5 w-6 rounded transition-all ${
                scrolled ? "bg-black" : "bg-white"
              }`}
              animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`absolute block h-0.5 w-6 rounded transition-all ${
                scrolled ? "bg-black" : "bg-white"
              }`}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`absolute block h-0.5 w-6 rounded transition-all ${
                scrolled ? "bg-black" : "bg-white"
              }`}
              animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Fondo Oscuro cuando el menú está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)} // Cierra el menú si se toca fuera del sidebar
        />
      )}

      {/* Mobile Sidebar Menu */}
      <motion.div
        ref={sidebarRef}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-lg z-50 flex flex-col items-center space-y-8 pt-20 px-6 py-4"
      >
        <button
          className="absolute top-5 right-5 text-black text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <Link href="#paquetes" className="text-gray-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
          Paquetes
        </Link>
        <Link href="#testimonios" className="text-gray-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
          Testimonios
        </Link>
        <Link href="#contacto" onClick={() => setMenuOpen(false)}>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full px-6 shadow-lg bg-[#f28729] hover:bg-[#ff7700] text-white"
          >
            Pedir cotización
          </Button>
        </Link>
      </motion.div>
    </>
  )
}

export default Navbar
