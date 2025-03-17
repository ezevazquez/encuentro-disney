import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border-2 border-[#F2E0D5] p-4 shadow-md bg-white text-[#1a1a1a] ` + className}>
      {children}
    </div>
  )
}

