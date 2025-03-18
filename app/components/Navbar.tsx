"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./Button"

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full py-5 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline relative z-10">
          <div className="relative h-10 w-40">
            <Image
              src="/logo.png"
              alt="Travel Destinations"
              fill
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            <Image
              src="/logo.png"
              alt=""
              fill
              className={`object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="#paquetes"
            className={`font-medium transition-all no-underline text-base hover:opacity-80 ${
              scrolled ? "text-gray-700 hover:text-[#7D4EC2]" : "text-white hover:text-white"
            }`}
          >
            Paquetes
          </Link>
          <Link
            href="#testimonios"
            className={`font-medium transition-all no-underline text-base hover:opacity-80 ${
              scrolled ? "text-gray-700 hover:text-[#7D4EC2]" : "text-white hover:text-white"
            }`}
          >
            Testimonios
          </Link>
          <Link href="#contacto">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-6 shadow-lg bg-[#f28729] hover:bg-[#ff7700]"
            >
              Pedir cotización
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
