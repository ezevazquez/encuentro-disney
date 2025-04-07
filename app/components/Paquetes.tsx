"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "./Card"
import { Button } from "./Button"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Paquete {
  _id: string
  nombre: string
  descripcion: string
  precio: number
  imagenUrl: string
}

interface PaquetesProps {
  paquetes: Paquete[]
}

export function Paquetes({ paquetes }: PaquetesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Determine if we should use carousel or grid layout
  const useCarousel = paquetes.length > 3

  // Scroll functions for carousel navigation
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  // Check scroll position to show/hide arrows
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const checkScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return

      // Show left arrow only if not at the start
      setShowLeftArrow(container.scrollLeft > 20)

      // Show right arrow only if not at the end
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 20
      setShowRightArrow(!isAtEnd)
    }

    const container = scrollContainerRef.current
    container.addEventListener("scroll", checkScroll)
    checkScroll() // Initial check

    return () => {
      container.removeEventListener("scroll", checkScroll)
    }
  }, [])

  return (
    <section id="paquetes" className="py-20 w-full bg-[#F2E0D5] relative">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4 text-center">Nuestras promos ✈️</h2>
        <p className="text-lg text-[#1a1a1a] max-w-2xl mx-auto text-center mb-8">
          Descubrí las mejores opciones para tu viaje soñado a Disney.
        </p>

        {useCarousel ? (
          // Carousel layout for 4+ cards
          <div className="relative px-4 md:px-12">
            {/* Left navigation arrow */}
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition-all focus:outline-none border border-gray-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#7D4EC2]" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-6 pb-8 pt-2 snap-x snap-mandatory scrollbar-hide"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                padding: "0 1rem",
              }}
            >
              {paquetes.map((paq, index) => (
                <motion.div
                  key={paq._id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="snap-center flex-shrink-0"
                  style={{
                    width: "calc(100% - 2rem)",
                    maxWidth: "320px", // Changed from 400px to 320px to make cards narrower
                    marginRight: index === paquetes.length - 1 ? "0" : "0.5rem",
                  }}
                >
                  <PaqueteCard paquete={paq} isMobile={isMobile} />
                </motion.div>
              ))}
            </div>

            {/* Right navigation arrow */}
            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition-all focus:outline-none border border-gray-200"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#7D4EC2]" />
              </button>
            )}
          </div>
        ) : (
          // Grid layout for 3 or fewer cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {paquetes.map((paq, index) => (
              <motion.div
                key={paq._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="max-w-[320px] mx-auto w-full" // Added max-width and centering
              >
                <PaqueteCard paquete={paq} isMobile={isMobile} />
              </motion.div>
            ))}
          </div>
        )}

        {paquetes.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            {/* <Link href="/paquetes">
              <Button variant="secondary" size="lg" className="font-semibold px-8">
                Ver todos los paquetes
              </Button>
            </Link> */}
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Extracted card component to ensure consistent styling
function PaqueteCard({ paquete, isMobile }: { paquete: Paquete; isMobile: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const [needsTruncation, setNeedsTruncation] = useState(false)
  const descriptionRef = useRef<HTMLDivElement>(null)

  // Check if description needs truncation
  useEffect(() => {
    if (descriptionRef.current && isMobile) {
      // Get line height and element height to calculate number of lines
      const style = window.getComputedStyle(descriptionRef.current)
      const lineHeight = Number.parseInt(style.lineHeight) || 24 // fallback to 24px if not set
      const height = descriptionRef.current.clientHeight
      const lines = Math.floor(height / lineHeight)

      setNeedsTruncation(lines > 5)
    }
  }, [isMobile, paquete.descripcion])

  return (
    <Card className="h-full flex flex-col">
      {paquete.imagenUrl && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-md h-48"
        >
          <Image
            src={paquete.imagenUrl || "/placeholder.svg"}
            alt={paquete.nombre}
            width={400}
            height={250}
            className="w-full h-48 object-cover rounded-md"
          />
        </motion.div>
      )}

      <div className="flex-grow flex flex-col pt-5">
        {/* Fixed height for title to ensure consistent alignment */}
        <h3 className="text-xl font-semibold text-[#1a1a1a] min-h-[3rem] flex items-start">{paquete.nombre}</h3>

        {/* Description with flex-grow to push button to bottom */}
        <div className="flex-grow">
          <div
            ref={descriptionRef}
            className={`text-md text-gray-700 mb-3 ${isMobile && needsTruncation && !expanded ? "line-clamp-5" : ""}`}
          >
            {paquete.descripcion.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>

          {/* See more button for mobile */}
          {isMobile && needsTruncation && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#F20544] text-sm font-medium mb-2 focus:outline-none"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          <Link href="#contacto">
            <Button variant="default" size="md" className="font-semibold w-full">
              Pedir cotización
            </Button>
          </Link>
        </motion.div>
      </div>
    </Card>
  )
}

