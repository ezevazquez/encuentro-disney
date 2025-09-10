import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Encuentro con Disney | Paquetes, Entradas, Hoteles y Asesoría Oficial",
  description: "Organizá tu viaje a Disney con paquetes a medida, entradas, hoteles dentro y fuera del parque, financiación y asesoría de un agente certificado. Viví la magia sin estrés.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground">
        {children}
        <Analytics />
        </body>
    </html>
  )
}

