import { Button } from "./Button";

export function CTA() {
  return (
    <section id="contacto" className="py-16 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-4">¡Prepárate para la magia!</h2>
      <p className="text-lg mb-6">¿Listo para vivir la experiencia Disney? Contáctanos y planifica tu viaje inolvidable.</p>
      <Button variant="default" size="lg">Contáctanos</Button>
    </section>
  );
}
