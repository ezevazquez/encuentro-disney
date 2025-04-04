import type React from "react"
import type { Metadata } from "next"
import "../styles/globals.css"
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Encuentro con Disney",
  description: "Encuentro con Disney",
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

