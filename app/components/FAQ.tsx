"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQ {
  pregunta: string;
  respuesta: string;
}
interface FAQProps {
  faqs: FAQ[];
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section id="faq" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
      <Accordion type="single" collapsible>
        {faqs.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{item.pregunta}</AccordionTrigger>
            <AccordionContent>{item.respuesta}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
