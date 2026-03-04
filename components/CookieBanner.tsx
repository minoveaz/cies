import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cies-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cies-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cies-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-[300]"
        >
          <div className="bg-white rounded-none shadow-2xl border border-slate-100 p-8 relative overflow-hidden">
            {/* Decorative brand glow */}
            <div className="absolute -top-10 -right-10 size-32 bg-[#838F61]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="size-12 bg-[#838F61]/10 flex items-center justify-center text-[#838F61]">
                  <Cookie className="w-6 h-6" />
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-slate-300 hover:text-[#222222] transition-colors"
                  aria-label="Cerrar aviso"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black text-[#222222] uppercase tracking-tighter leading-tight">Tu privacidad es importante</h3>
                <p className="text-xs text-[#575760] leading-relaxed font-bold uppercase tracking-tight">
                  Utilizamos cookies propias y de terceros para analizar tu navegación y mostrarte una experiencia personalizada. Consulta nuestra <Link to="/cookies" className="text-[#838F61] underline decoration-2 underline-offset-4">Política de Cookies</Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={handleAccept}
                  className="flex-1 py-4 bg-[#363C27] text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#838F61] transition-all"
                >
                  Aceptar todas
                </button>
                <button 
                  onClick={handleDecline}
                  className="flex-1 py-4 bg-transparent border border-slate-200 text-[#575760] font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-50 transition-all"
                >
                  Solo necesarias
                </button>
              </div>

              <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                <ShieldCheck size={12} className="text-[#838F61]/40" /> Navegación Segura & GDPR Compliance
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
