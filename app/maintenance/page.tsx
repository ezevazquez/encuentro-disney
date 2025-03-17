"use client"

import { motion } from "framer-motion"
import type React from "react"

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D7CEC7]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        ></motion.div>
        <h1 className="text-3xl font-semibold mb-4 text-[#333333]">Estamos trabajando en nuestra web :)</h1>
        <p className="text-lg text-[#333333]">Pronto volveremos con contenido mágico para vos y tu familia.</p>
        <p>¡Gracias por tu paciencia!</p>
      </motion.div>
    </div>
  )
}

export default MaintenancePage

