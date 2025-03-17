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
        default: "bg-[#F20544] text-white hover:bg-[#d00339] shadow-md", // Direct color value
        secondary: "bg-[#7D4EC2] text-white hover:bg-[#6a3fa6] shadow-md", // Direct color value
        outline: "border-2 border-[#F20544] text-[#F20544] hover:bg-[#F20544] hover:text-white", // Direct color value
        accent: "bg-[#F28729] text-white hover:bg-[#d97520] shadow-md", // Direct color value
        muted: "bg-[#F2E0D5] text-foreground hover:bg-[#e8d0c3] border border-border", // Direct color value
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

