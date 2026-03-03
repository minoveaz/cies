import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const Blog: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 container mx-auto px-6">
      <SEO title="Blog Dental" description="Noticias y consejos sobre salud dental en Málaga." />
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Blog CIES</h1>
      <p className="text-lg text-[#575760] leading-relaxed">Próximamente: Artículos sobre salud y estética dental.</p>
    </motion.div>
  );
};

export default Blog;
