import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen py-32"
    >
      <SEO title="Política de Privacidad" description="Política de privacidad de Clínica Dental CIES Málaga." />
      <div className="container mx-auto px-6 max-w-4xl text-[#575760] leading-relaxed">
        <h1 className="text-4xl font-black text-[#222222] uppercase tracking-tighter mb-12">Política de Privacidad</h1>
        
        <p className="mb-6">
          En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales, Clínica Dental CIES informa a los usuarios de lo siguiente:
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">1. Responsable del Tratamiento</h2>
        <p className="mb-6">
          Titular: Clínica Dental CIES<br />
          Dirección: Calle Ntra. Sra. de las Candelas 14, local 4, 29004 Málaga<br />
          Email: info@ciesclinica.com
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">2. Finalidad del Tratamiento</h2>
        <p className="mb-6">
          Los datos proporcionados a través de la web serán tratados para gestionar las solicitudes de cita previa, responder a consultas y, en caso de consentimiento explícito, enviar comunicaciones informativas.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">3. Legitimación</h2>
        <p className="mb-6">
          La base legal para el tratamiento de sus datos es el consentimiento del interesado al contactar con nosotros o solicitar una cita.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">4. Sus Derechos</h2>
        <p className="mb-6">
          Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como otros derechos detallados en la normativa vigente, contactando con nosotros en el email indicado.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
