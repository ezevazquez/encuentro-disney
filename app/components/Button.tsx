"use client"
import { cn } from "@/lib/utils"
import { type VariantProps, cva } from "class-variance-authority"
import { type ButtonHTMLAttributes, forwardRef } from "react"

// Definimos variantes de estilo para el botón (usando Tailwind CSS classes)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-secondary", // Primary button using theme colors
        secondary: "bg-secondary text-white hover:bg-primary border border-secondary", // Secondary button
        outline: "border border-primary text-primary hover:bg-primary hover:text-white", // Outline button
        accent: "bg-accent text-white hover:bg-accent/90", // Accent button
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

// Componente de botón reutilizable
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }

