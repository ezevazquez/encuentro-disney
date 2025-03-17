"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface FAQ {
  pregunta: string
  respuesta: string
}
interface FAQProps {
  faqs: FAQ[]
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section id="faq" className="py-16 w-full bg-[#F28729]">
      <h2 className="text-3xl font-bold text-[#1a1a1a] text-center mb-6">Preguntas Frecuentes</h2>

      <div className="max-w-3xl mx-auto px-6">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white rounded-lg shadow-md p-4 border-2 border-[#F2E0D5]"
            >
              <AccordionTrigger className="text-lg font-semibold text-[#F20544]">{item.pregunta}</AccordionTrigger>
              <AccordionContent className="text-md text-[#1a1a1a] mt-2">{item.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

