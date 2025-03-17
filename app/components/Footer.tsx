"use client"
import { motion } from "framer-motion"
import type React from "react"

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-secondary text-secondary-foreground py-8 mt-10"
    >
      <div className="container mx-auto text-center px-6">
        <h3 className="text-xl font-semibold text-secondary-foreground">Encuentro con Disney</h3>
        <p className="text-md mt-2 opacity-80">Tu mejor experiencia para viajar a Disney ✨</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            className="hover:opacity-80 transition-all text-secondary-foreground no-underline"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            className="hover:opacity-80 transition-all text-secondary-foreground no-underline"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com"
            className="hover:opacity-80 transition-all text-secondary-foreground no-underline"
          >
            TikTok
          </a>
        </div>
        <p className="text-sm opacity-70 mt-6">© 2025 Encuentro con Disney. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  )
}

export default Footer

