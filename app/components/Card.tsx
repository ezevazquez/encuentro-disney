import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-border p-4 shadow-sm bg-card text-card-foreground ` + className}>
      {children}
    </div>
  )
}

