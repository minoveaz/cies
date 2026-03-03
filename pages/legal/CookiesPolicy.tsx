import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const CookiesPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen py-32"
    >
      <SEO title="Política de Cookies" description="Información sobre el uso de cookies en la web de Clínica Dental CIES." />
      <div className="container mx-auto px-6 max-w-4xl text-[#575760] leading-relaxed">
        <h1 className="text-4xl font-black text-[#222222] uppercase tracking-tighter mb-12">Política de Cookies</h1>
        
        <p className="mb-6">
          Esta web utiliza cookies para mejorar la experiencia del usuario y garantizar el funcionamiento de los servicios ofrecidos.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">¿Qué son las cookies?</h2>
        <p className="mb-6">
          Las cookies son pequeños archivos de texto que los sitios web envían al navegador y que se almacenan en el terminal del usuario para recordar información sobre su visita.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Tipos de cookies utilizadas</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Cookies técnicas:</strong> Necesarias para el correcto funcionamiento de la web.</li>
          <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web.</li>
        </ul>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Gestión de cookies</h2>
        <p className="mb-6">
          El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
        </p>
      </div>
    </motion.div>
  );
};

export default CookiesPolicy;
