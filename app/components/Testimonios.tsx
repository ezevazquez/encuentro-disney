import Image from "next/image";
import { Card } from "./Card";

interface Testimonio {
  nombre: string;
  comentario: string;
  imagenUrl?: string;
}
interface TestimoniosProps {
  testimonios: Testimonio[];
}

export function Testimonios({ testimonios }: TestimoniosProps) {
  return (
    <section id="testimonios" className="py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Testimonios</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {testimonios.map((t, index) => (
          <Card key={index} className="min-w-[300px] max-w-sm">
            {t.imagenUrl && (
              <Image 
                src={t.imagenUrl} 
                alt={t.nombre} 
                width={60} height={60}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
            )}
            <p className="text-gray-800 italic">&ldquo;{t.comentario}&rdquo;</p>
            <p className="mt-2 font-semibold text-sm">- {t.nombre}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
