"use client";
import { motion } from "framer-motion";
import { Button } from "./Button";

export function CTA() {
  return (
    <section id="contacto" className="py-20 text-center bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      {/* Decoraciones animadas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"
      />

      {/* Contenido Principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          ¡Prepárate para la magia! ✨
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          ¿Listo para vivir la experiencia Disney? Contáctanos y planifica tu viaje inolvidable.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          <Button variant="default" size="lg">
            Contáctanos
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
