import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const About: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 container mx-auto px-6">
      <SEO title="Sobre Nosotros" description="Conoce al equipo de Clínica Dental CIES Málaga." />
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Sobre CIES</h1>
      <p className="text-lg text-[#575760] leading-relaxed">Próximamente: La historia y valores de nuestra clínica.</p>
    </motion.div>
  );
};

export default About;
