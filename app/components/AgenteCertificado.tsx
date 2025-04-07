"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./Card"
import { ChevronDown, ChevronUp, Award } from "lucide-react"
import { PortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"

interface AgenteCertificadoProps {
  agenteCertificado:
    | {
        titulo: string
        descripcion: string
        informacionDetallada: PortableTextBlock[]
        imagenUrl?: string
      }[]
    | null
}

export function AgenteCertificado({ agenteCertificado }: AgenteCertificadoProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [descExpanded, setDescExpanded] = useState<Record<number, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    setIsMobile(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const toggleDescExpanded = (index: number) => {
    setDescExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  if (!agenteCertificado || agenteCertificado.length === 0) return null

  return (
    <section id="agente" className="py-16 w-full bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#7D4EC2] mb-4">¿Quién soy yo?</h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {agenteCertificado.map((agente, index) => {
            const isExpanded = expandedItems[index]
            const isDescExpanded = descExpanded[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden border-2 border-[#F2E0D5] p-0">
                  <div className="flex flex-col md:flex-row">
                    {agente.imagenUrl && (
                      <div className="w-full md:w-2/5">
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={agente.imagenUrl}
                            alt="Agente Certificado Disney"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    <div className={`w-full ${agente.imagenUrl ? "md:w-3/5" : ""} p-6 md:p-8`}>
                      <div className="flex items-center mb-4">
                        <Award className="text-[#F28729] mr-2 h-6 w-6" />
                        <h3 className="text-2xl font-bold text-[#7D4EC2]">{agente.titulo}</h3>
                      </div>

                      <p
                        className={`text-[#1a1a1a] whitespace-pre-line transition-all duration-300 ${
                          isMobile && !isDescExpanded ? "line-clamp-5" : ""
                        }`}
                      >
                        {agente.descripcion}
                      </p>

                      {isMobile && (
                        <button
                          onClick={() => toggleDescExpanded(index)}
                          className="text-[#F20544] hover:text-[#d00339] font-medium flex items-center text-sm mt-1 underline underline-offset-2 decoration-1"
                        >
                          {isDescExpanded ? "Ver menos" : "Ver más"}
                          {isDescExpanded ? (
                            <ChevronUp className="ml-1 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-1 h-4 w-4" />
                          )}
                        </button>
                      )}

                      {agente.informacionDetallada && agente.informacionDetallada.length > 0 && (
                        <div className="mt-4">
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-[#F20544] hover:text-[#d00339] font-medium flex items-center transition-colors underline underline-offset-2 decoration-1 focus:outline-none"
                          >
                            {isExpanded ? "Ver menos" : "Ver más"}
                            {isExpanded ? (
                              <ChevronUp className="ml-1 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            )}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 overflow-hidden"
                              >
                                <div className="prose prose-sm max-w-none text-[#1a1a1a]">
                                  <PortableText value={agente.informacionDetallada} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
