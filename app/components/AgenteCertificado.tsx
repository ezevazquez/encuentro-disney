"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./Card"
import { ChevronDown, ChevronUp, Award } from "lucide-react"
import { PortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"

interface AgenteCertificadoProps {
  agenteCertificado: {
    titulo: string
    descripcion: string
    informacionDetallada: PortableTextBlock[]
    imagenUrl?: string
  } | null
}

export function AgenteCertificado({ agenteCertificado }: AgenteCertificadoProps) {
  const [expanded, setExpanded] = useState(false)

  // Si no hay datos, no renderizamos nada
  if (!agenteCertificado) return null

  return (
    <section id="agente" className="py-16 w-full bg-white">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#7D4EC2] mb-4">Soy agente certificada de Disney</h2>
          <p className="text-lg text-[#1a1a1a] max-w-2xl mx-auto">
            ¿Qué es eso?
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-2 border-[#F2E0D5] p-0">
            <div className="flex flex-col md:flex-row">
              {/* Imagen (a la izquierda en desktop, arriba en móvil) */}
              {agenteCertificado.imagenUrl && (
                <div className="w-full md:w-2/5">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={agenteCertificado.imagenUrl || "/placeholder.svg"}
                      alt="Agente Certificado Disney"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Contenido (a la derecha en desktop, abajo en móvil) */}
              <div className={`w-full ${agenteCertificado.imagenUrl ? "md:w-3/5" : ""} p-6 md:p-8`}>
                <div className="flex items-center mb-4">
                  <Award className="text-[#F28729] mr-2 h-6 w-6" />
                  <h3 className="text-2xl font-bold text-[#7D4EC2]">{agenteCertificado.titulo}</h3>
                </div>

                <p className="text-[#1a1a1a] mb-4">
                  {agenteCertificado.descripcion.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>

                {/* "Ver más" text link instead of button */}
                {agenteCertificado.informacionDetallada && agenteCertificado.informacionDetallada.length > 0 && (
                  <div>
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-[#F20544] hover:text-[#d00339] font-medium flex items-center transition-colors underline underline-offset-2 decoration-1 focus:outline-none"
                    >
                      {expanded ? "Ver menos" : "Ver más"}
                      {expanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                    </button>

                    {/* Contenido expandible */}
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden"
                        >
                          <div className="prose prose-sm max-w-none text-[#1a1a1a]">
                            <PortableText value={agenteCertificado.informacionDetallada} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

