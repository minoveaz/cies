import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Duele el tratamiento de implantes dentales?",
    answer: "Gracias a nuestra tecnología avanzada y al uso de anestesia local de última generación, el procedimiento es prácticamente indoloro. Además, realizamos cirugías mínimamente invasivas que aseguran un postoperatorio muy cómodo."
  },
  {
    question: "¿Qué ventajas tiene la ortodoncia invisible frente a los brackets?",
    answer: "La ortodoncia invisible es estética (casi imperceptible), removible (puedes quitártela para comer y cepillarte) y mucho más cómoda, ya que evita las rozaduras metálicas de los brackets convencionales."
  },
  {
    question: "¿Ofrecéis opciones de financiación?",
    answer: "Sí, en Clínica CIES ofrecemos planes de financiación a medida para que el presupuesto no sea un obstáculo para tu salud. Disponemos de opciones de hasta 24 meses sin intereses."
  },
  {
    question: "¿Es necesario pedir cita previa para una revisión?",
    answer: "Sí, recomendamos siempre solicitar cita previa para garantizarte una atención personalizada y sin esperas. Puedes hacerlo a través de nuestro teléfono, WhatsApp o el formulario de la web."
  },
  {
    question: "¿Aceptáis seguros dentales?",
    answer: "Trabajamos con las principales aseguradoras y ofrecemos condiciones especiales. No dudes en consultarnos por tu seguro específico durante tu primera visita."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#F7F8F9]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Preguntas Frecuentes</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter">
              Resolvemos <br /> <span className="text-[#838F61]">tus dudas</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={openIndex === idx ? "text-[#838F61] w-5 h-5" : "text-slate-300 w-5 h-5 group-hover:text-[#838F61] transition-colors"} />
                    <span className="font-black uppercase text-[11px] md:text-xs tracking-wider text-[#222222]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-500 ${openIndex === idx ? 'rotate-180 text-[#838F61]' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pl-16">
                        <p className="text-[#575760] text-sm leading-relaxed border-l-2 border-[#838F61]/20 pl-6 italic">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[#575760] text-xs uppercase tracking-widest font-bold mb-6">¿Tienes alguna otra consulta?</p>
            <a 
              href="https://wa.me/34689189999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#838F61] font-black uppercase text-[10px] tracking-[0.3em] hover:opacity-70 transition-opacity"
            >
              Consultar por WhatsApp
              <span className="w-10 h-[1px] bg-[#838F61]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
