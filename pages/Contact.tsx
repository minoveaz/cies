import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 container mx-auto px-6">
      <SEO title="Contacto" description="Contacta con Clínica Dental CIES Málaga para tu cita." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Contacto</h1>
          <p className="text-lg text-[#575760] leading-relaxed mb-12">Estamos en el corazón de Málaga para cuidar tu sonrisa.</p>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
