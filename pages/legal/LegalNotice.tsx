import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const LegalNotice: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen py-32"
    >
      <SEO title="Aviso Legal" description="Aviso legal de Clínica Dental CIES Málaga." />
      <div className="container mx-auto px-6 max-w-4xl text-[#575760] leading-relaxed">
        <h1 className="text-4xl font-black text-[#222222] uppercase tracking-tighter mb-12">Aviso Legal</h1>
        
        <p className="mb-6">
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE) a continuación se detallan los datos identificativos de la entidad:
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Datos Identificativos</h2>
        <p className="mb-6">
          <strong>Razón social:</strong> Clínica Dental CIES<br />
          <strong>NIF:</strong> [Insertar NIF real si está disponible]<br />
          <strong>Dirección:</strong> Calle Ntra. Sra. de las Candelas 14, local 4, 29004 Málaga<br />
          <strong>Teléfono:</strong> 951 91 94 25<br />
          <strong>Email:</strong> info@ciesclinica.com<br />
          <strong>Nº de Autorización Sanitaria (NICA):</strong> 60357
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Finalidad de la página web</h2>
        <p className="mb-6">
          La presente página web tiene una finalidad puramente informativa sobre los servicios odontológicos y de medicina estética ofrecidos por la Clínica CIES en Málaga.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Legislación</h2>
        <p className="mb-6">
          Con carácter general las relaciones entre Clínica Dental CIES con los usuarios de sus servicios telemáticos, presentes en este sitio web, se encuentran sometidas a la legislación y jurisdicción españolas.
        </p>

        <h2 className="text-xl font-bold text-[#222222] mt-10 mb-4 uppercase">Uso y acceso de usuarios</h2>
        <p className="mb-6">
          El Usuario queda informado, y acepta, que el acceso a la presente web no supone, en modo alguno, el inicio de una relación comercial con Clínica Dental CIES.
        </p>
      </div>
    </motion.div>
  );
};

export default LegalNotice;
