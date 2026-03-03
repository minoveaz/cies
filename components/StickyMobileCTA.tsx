import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

const StickyMobileCTA: React.FC = () => {
  const whatsappNumber = "34689189999";
  const phoneCall = "+34951919425";

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] px-4 py-3 pb-safe"
    >
      <div className="flex gap-3 h-12">
        <a 
          href={`tel:${phoneCall}`}
          onClick={() => trackEvent('phone_call_click', { category: 'conversion', label: 'Sticky Mobile' })}
          className="flex-1 bg-[#F7F8F9] text-[#363C27] flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-widest border border-slate-200"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { category: 'conversion', label: 'Sticky Mobile' })}
          className="flex-[1.5] bg-[#25D366] text-white flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-widest shadow-lg shadow-[#25D366]/20"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default StickyMobileCTA;
