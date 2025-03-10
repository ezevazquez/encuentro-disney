import Image from "next/image";
import { Card } from "./Card";

interface Paquete {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
  slug: string;
}
interface PaquetesProps {
  paquetes: Paquete[];
}

export function Paquetes({ paquetes }: PaquetesProps) {
  return (
    <section id="paquetes" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Paquetes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {paquetes.map((paq) => (
          <Card key={paq.slug}>
            {/* Imagen del paquete */}
            {paq.imagenUrl && (
              <Image 
                src={paq.imagenUrl} 
                alt={paq.nombre} 
                width={400} height={250} 
                className="w-full h-40 object-cover rounded-md mb-4" 
              />
            )}
            <h3 className="text-xl font-semibold">{paq.nombre}</h3>
            <p className="text-sm text-gray-700 mb-2">{paq.descripcion}</p>
            <p className="font-semibold">Precio: ${paq.precio}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
