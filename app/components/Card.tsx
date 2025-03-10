import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-gray-300 p-4 shadow-sm bg-white ` + className}>
      {children}
    </div>
  );
}
