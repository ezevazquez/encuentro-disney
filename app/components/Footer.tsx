"use client"
import { motion } from "framer-motion"
import type React from "react"
import { Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#7D4EC2] text-white py-12"
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Left: Text Content */}
        <div>
          <h3 className="text-xl font-semibold text-white">Encuentro con Disney</h3>
          <p className="text-md mt-2 opacity-90">Tu mejor experiencia para viajar a Disney ✨</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/encuentrocondisney"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all text-white no-underline"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/543584821231"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all text-white no-underline"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer