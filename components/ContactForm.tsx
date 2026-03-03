import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      trackEvent('contact_form_submit', { category: 'conversion', label: 'Home Page' });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 shadow-xl text-center flex flex-col items-center border border-[#A7B287]"
      >
        <div className="w-20 h-20 bg-[#A7B287]/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#A7B287]" />
        </div>
        <h3 className="text-2xl font-display font-bold text-[#222222] mb-2 uppercase tracking-tighter">¡Mensaje enviado!</h3>
        <p className="text-[#575760] mb-8">
          Gracias por contactar con CIES Dental. Nuestro equipo te llamará en menos de 24 horas para confirmar tu cita.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[#838F61] font-bold hover:underline uppercase tracking-widest text-xs"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
      <h3 className="text-2xl font-display font-bold text-[#222222] mb-2 uppercase tracking-tighter">Pide tu cita</h3>
      <p className="text-[#575760] mb-8 text-sm italic">O haznos cualquier consulta sin compromiso.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <input
              required
              type="text"
              placeholder="Nombre"
              className="w-full px-0 py-3 bg-transparent border-b border-[#969595] focus:border-[#363C27] outline-none transition-all placeholder:text-[#969595]"
            />
          </div>
          <div className="space-y-1">
            <input
              required
              type="tel"
              placeholder="Teléfono"
              className="w-full px-0 py-3 bg-transparent border-b border-[#969595] focus:border-[#363C27] outline-none transition-all placeholder:text-[#969595]"
            />
          </div>
        </div>

        <div className="space-y-1">
          <select className="w-full px-0 py-3 bg-transparent border-b border-[#969595] focus:border-[#363C27] outline-none transition-all cursor-pointer appearance-none text-[#575760]">
            <option value="Dental">Dental</option>
            <option value="Estética">Estética</option>
          </select>
        </div>

        <div className="space-y-1">
          <textarea
            rows={3}
            placeholder="Mensaje"
            className="w-full px-0 py-3 bg-transparent border-b border-[#969595] focus:border-[#363C27] outline-none transition-all resize-none placeholder:text-[#969595]"
          />
        </div>

        <div className="flex items-start gap-3 py-2">
          <input required type="checkbox" className="mt-1 accent-[#363C27]" id="privacy" />
          <label htmlFor="privacy" className="text-[10px] text-[#575760] leading-tight">
            Acepto la <a href="/privacidad" className="text-[#838F61] hover:underline font-bold">política de privacidad</a> y el tratamiento de mis datos para la gestión de mi cita.
          </label>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full py-5 bg-[#363C27] text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#838F61] transition-all shadow-lg disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
          ) : (
            "Enviar Formulario"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
