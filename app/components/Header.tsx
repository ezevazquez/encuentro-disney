import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-xl font-bold">Encuentro con Disney</span>
        <div className="space-x-6">
          <Link href="/">Inicio</Link>
          <Link href="/#agente">¿Por qué un agente certificado?</Link>
          <Link href="/#paquetes">Promos</Link>
          <Link href="/#contacto">Contacto</Link>
        </div>
      </nav>
    </header>
  )
}

