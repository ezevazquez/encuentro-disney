"use client"; 
import { cn } from "@/lib/utils"; 
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

// Definimos variantes de estilo para el botón (usando Tailwind CSS classes)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50", 
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",  // Botón primario
        secondary: "bg-gray-100 text-blue-600 hover:bg-gray-200 border border-gray-300",  // Para fondos blancos
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",   // Borde con hover
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// Componente de botón reutilizable
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button 
        ref={ref} 
        className={cn(buttonVariants({ variant, size }), className)} 
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
