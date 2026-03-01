import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Calendar, 
  Phone, 
  MapPin, 
  Sparkles, 
  Layers, 
  Award,
  Clock,
  ArrowRight,
  Zap,
  Eye,
  Microscope,
  Box,
  MonitorCheck
} from 'lucide-react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import ReviewsSection from '@/components/ReviewsSection';

const Home: React.FC = () => {
  const services = [
    {
      title: "Implantes Dentales",
      description: "Recupera tu sonrisa con la tecnología más avanzada en implantología. Resultados naturales y duraderos.",
      image: "/images/implante-dental-malaga.jpg",
      link: "/implantes-dentales"
    },
    {
      title: "Ortodoncia Invisible",
      description: "Alinea tus dientes de forma discreta y cómoda con los últimos sistemas de ortodoncia transparente.",
      image: "/images/ortodoncia-invisible-malaga.jpg",
      link: "/ortodoncia-invisible"
    },
    {
      title: "Brackets",
      description: "Ortodoncia convencional y estética para corregir la posición de tus dientes con la máxima eficacia.",
      image: "/images/brackets-malaga.jpg",
      link: "/brackets"
    },
    {
      title: "Estética Dental",
      description: "Diseño de sonrisa personalizado mediante carillas, blanqueamiento y contorneado estético.",
      image: "/images/carillas-dentales-malaga-2.jpg",
      link: "/carillas-dentales"
    },
    {
      title: "Periodoncia",
      description: "Cuidamos la salud de tus encías para prevenir la pérdida de piezas dentales y asegurar una base sana.",
      image: "/images/clinica-periodoncia-malaga.jpg",
      link: "/periodoncia"
    },
    {
      title: "Endodoncia",
      description: "Tratamientos de conducto avanzados para salvar piezas dentales dañadas evitando su extracción.",
      image: "/images/endodoncia-malaga.jpg",
      link: "/endodoncia"
    },
    {
      title: "Bruxismo",
      description: "Soluciones para el rechinamiento dental y dolores articulares relacionados con la ATM.",
      image: "/images/bruxismo-malaga-1.jpg",
      link: "/bruxismo"
    },
    {
      title: "Medicina Estética",
      description: "Tratamientos con Ácido Hialurónico para armonizar tu sonrisa con el resto de tu rostro.",
      image: "/images/acido-hialuronico-malaga.jpg",
      link: "/acido-hialuronico"
    }
  ];

  const team = [
    {
      name: "Dra. Ana María García Bravo",
      specialty: "Directora Médica | Implantología y Periodoncia",
      credentials: "Máster en Implantología Oral y Rehabilitación. Especialista en casos complejos de regeneración.",
      description: "Con más de 15 años de experiencia, la Dra. García Bravo lidera el equipo clínico con un enfoque en la excelencia quirúrgica y el trato humano cercano.",
      image: "/images/dr-ana-maria-garcia-bravo.jpg"
    },
    {
      name: "Dra. Lucía Hernández Pageo",
      specialty: "Especialista en Rehabilitación y Periodoncia",
      credentials: "Máster en Periodoncia e Implantoprótesis. Experta en estética funcional sobre implantes.",
      description: "Su precisión en la rehabilitación protésica permite devolver la funcionalidad total a la boca del paciente con una estética impecable.",
      image: "/images/dr-lucia-hernandez-pageo.jpg"
    },
    {
      name: "Dra. Alexandra López Vélez",
      specialty: "Especialista en Estética Dental y Operatoria",
      credentials: "Experta en Diseño Digital de Sonrisa y Estética de Alta Complejidad. Especialista en Carillas.",
      description: "Dedicada en exclusiva a la creación de sonrisas naturales, combinando arte y tecnología dental avanzada.",
      image: "/images/Alexandra-saturacion-cerca-cuadrado-scaled.jpg"
    },
    {
      name: "Dra. Laura López Ruiz",
      specialty: "Especialista en Ortodoncia y Ortopedia",
      credentials: "Máster en Ortodoncia Invisible (Invisalign Diamond Provider). Especialista en desarrollo infantil.",
      description: "Lidera el área de ortodoncia aplicando los sistemas más discretos y eficientes para alinear sonrisas a cualquier edad.",
      image: "/images/dr-laura-lopez-ruiz.jpg"
    }
  ];

  const technologies = [
    {
      title: "Escáner Intraoral 3D",
      description: "Olvídate de las pastas molestas. Obtenemos una réplica digital exacta de tu boca en segundos para una precisión total.",
      icon: <Box className="w-10 h-10" />,
      benefit: "Sin moldes incómodos"
    },
    {
      title: "TAC Dental (CBCT)",
      description: "Radiología de alta resolución que nos permite ver cada detalle óseo y planificar cirugías guiadas por ordenador.",
      icon: <Microscope className="w-10 h-10" />,
      benefit: "Máxima seguridad quirúrgica"
    },
    {
      title: "Diseño Digital de Sonrisa",
      description: "Podrás ver el resultado final de tu tratamiento antes de empezar. Diseñamos tu sonrisa ideal de forma personalizada.",
      icon: <Eye className="w-10 h-10" />,
      benefit: "Resultados predecibles"
    },
    {
      title: "Flujo Digital CIES",
      description: "Integramos toda la tecnología para reducir tiempos de espera y garantizar tratamientos mínimamente invasivos.",
      icon: <MonitorCheck className="w-10 h-10" />,
      benefit: "Menos citas, más rapidez"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F8F9] min-h-screen"
    >
      <SEO
        title="Tu Clínica Dental en Málaga de Confianza"
        description="Clínica Dental CIES en Málaga. Expertos en implantes dentales, ortodoncia invisible y estética dental."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-20 lg:py-0">
        {/* Animated Background Elements for 'Calm & Tech' feel */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-full h-full bg-[#838F61]/5 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-[#363C27]/5 rounded-full blur-[100px]" 
          />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9EDDE] text-[#363C27] rounded-none text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-[#838F61]/20">
              <Award className="w-4 h-4" />
              Excelencia Médica en Málaga
            </div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-8xl font-display font-extrabold text-[#222222] leading-[0.9] mb-6 uppercase tracking-tighter"
            >
              Cuidamos <br /> <span className="text-[#838F61] relative inline-block">
                Tu Sonrisa
                <motion.svg 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#838F61]/30" viewBox="0 0 100 10" preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h1>
            <h2 className="text-xl md:text-2xl font-display font-bold text-[#575760] mb-8 uppercase tracking-widest leading-snug">
              Implantología y Medicina Estética Avanzada
            </h2>
            <p className="text-lg text-[#575760] mb-10 leading-relaxed max-w-xl italic">
              "En Clínica CIES te proponemos un concepto de estética dental que busca la <span className="text-[#838F61] font-bold">naturalidad</span> y va más allá de lo funcional."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Reservar Cita
              </button>
              <button className="btn-outline">
                Ver Tratamientos
              </button>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-[10px] text-[#575760] font-black uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#838F61]" />
                <span>Garantía CIES</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#838F61]" />
                <span>Nº NICA: 60357</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full bg-white shadow-2xl overflow-hidden group border-[12px] border-white">
              <img 
                src="/images/clinica-dental-malaga-cies-foto.jpg" 
                alt="Clínica Dental CIES Málaga"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 z-20 w-32 h-32 hidden md:block opacity-20">
              <img src="/images/simbolo2.png" alt="Sello" className="w-full h-auto rotate-12" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Tecnología Section - Clínica Digital 3D */}
      <section className="py-32 bg-[#1A1D16] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Clínica Dental Digital</h2>
              <h3 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter">
                Tecnología que <br /> <span className="text-[#838F61]">Cura Sin Dolor</span>
              </h3>
            </div>
            <p className="max-w-md text-white/60 text-lg leading-relaxed border-l-2 border-[#838F61] pl-8">
              En CIES hemos eliminado los procesos analógicos incómodos. El flujo digital nos permite ser más rápidos, precisos y, sobre todo, más humanos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#838F61]/40 transition-all duration-500 group relative"
              >
                <div className="text-[#838F61] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{tech.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{tech.description}</p>
                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#838F61] bg-[#838F61]/10 px-3 py-1">
                  <Zap className="w-3 h-3 fill-current" />
                  {tech.benefit}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Tech */}
          <div className="mt-20 text-center">
            <button className="btn-secondary inline-flex items-center gap-4">
              Descubre nuestra tecnología 3D
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* NEW: Bento Grid "Experiencia CIES" con Fotos Reales */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4 text-left">Nuestras Instalaciones</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter text-left">
              Tu salud dental en el mejor <span className="text-[#838F61]">entorno</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1000px] md:h-[700px]">
            {/* Foto Principal - Fachada/Clínica */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden group shadow-lg"
            >
              <img 
                src="/images/odontologia-malaga-3.webp" 
                alt="Instalaciones CIES Málaga" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D16]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A7B287] mb-2 block">Ubicación Málaga</span>
                <h4 className="text-2xl font-extrabold uppercase tracking-tight">Espacios de Vanguardia</h4>
              </div>
            </motion.div>

            {/* Trato Humano */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-1 relative overflow-hidden group shadow-lg"
            >
              <img 
                src="/images/dentista-malaga-cita.webp" 
                alt="Atención al paciente CIES" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#363C27]/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-6 right-6 bg-white px-4 py-2 text-[#363C27] text-[10px] font-black uppercase tracking-widest shadow-xl">
                Trato Humano
              </div>
            </motion.div>

            {/* Especialidad / Implantes */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group shadow-lg"
            >
              <img 
                src="/images/implante-dental-malaga.jpg" 
                alt="Cirugía dental avanzada" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#838F61]/10" />
            </motion.div>

            {/* Ambiente de Equipo */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group shadow-lg"
            >
              <img 
                src="/images/clinicas-dentales-en-malaga.jpg" 
                alt="Equipo CIES Málaga" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#838F61]/20 to-[#363C27]/40 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center p-6 border-2 border-white/20 m-4">
                <span className="text-white text-center font-black uppercase tracking-[0.2em] text-[10px] leading-relaxed">
                  Pasión por <br /> la Odontología
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Treatment Showcase (Modern Layout) */}
      <section id="tratamientos" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Especialidades Médicas</h2>
              <h3 className="text-4xl md:text-6xl font-display font-extrabold text-[#222222] uppercase tracking-tighter">
                Tu sonrisa en <br /> <span className="text-[#838F61]">Manos Expertas</span>
              </h3>
            </div>
            <p className="max-w-xs text-[#575760] text-sm leading-relaxed border-l-2 border-[#838F61] pl-6 hidden md:block">
              Excelencia técnica y calidez humana en cada tratamiento para Málaga.
            </p>
          </div>

          {/* Desktop Grid / Mobile horizontal scroll */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-12 md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="min-w-[85vw] md:min-w-0 aspect-[3/4] relative group overflow-hidden shadow-2xl snap-center"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay - Darker for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D16] via-[#1A1D16]/70 to-transparent opacity-90 transition-opacity duration-500" />
                
                {/* Hover Scrim - Extra darkness on hover to make text pop */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 leading-none drop-shadow-md">
                    {service.title}
                  </h4>
                  
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="text-white/90 text-xs leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>
                  </div>

                  <a 
                    href={service.link}
                    className="inline-block w-full py-4 text-center bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1D16] transition-all duration-300"
                  >
                    Ver detalles
                  </a>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white/30 font-black text-xs">
                  0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Nuestro Equipo</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8">Profesionales Cualificadas</h3>
            <p className="text-[#575760] text-lg leading-relaxed italic">
              "Nuestro personal cualificado y la aplicación de tecnología de máximo nivel son la clave para conseguir el mejor resultado en nuestros pacientes."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -10 }}
                className="group bg-white p-6 shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D16]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-xl font-black text-[#222222] mb-1 uppercase tracking-tighter leading-none">{member.name}</h4>
                  <p className="text-[10px] text-[#838F61] font-black uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">{member.specialty}</p>
                  <p className="text-[11px] text-[#222222] font-bold leading-relaxed mb-3">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-[#575760] leading-relaxed mb-6 opacity-80 italic">
                    "{member.description}"
                  </p>
                </div>

                <button className="w-full py-3 border border-[#363C27] text-[#363C27] text-[10px] font-black uppercase tracking-widest hover:bg-[#363C27] hover:text-white transition-all duration-300">
                  Conocer a la doctora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* Contact Section */}
      <section id="contacto" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-[#222222] mb-12 uppercase tracking-tighter">
                Tu cita en <br /> <span className="text-[#838F61]">un clic</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6 items-center text-[#363C27]">
                  <div className="w-12 h-12 bg-[#F7F8F9] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#575760] mb-1">Teléfono Directo</h5>
                    <p className="text-2xl text-[#222222] font-black tracking-tighter">951 91 94 25</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center text-[#363C27]">
                  <div className="w-12 h-12 bg-[#F7F8F9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#575760] mb-1">Dirección Clínica</h5>
                    <p className="text-lg text-[#222222] font-bold tracking-tight leading-tight">Calle Ntra. Sra. de las Candelas 14, <br /> local 4, 29004 Málaga</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 bg-[#A7B287] text-[#363C27] shadow-xl relative border border-[#363C27]/10">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Primera Revisión CIES</h4>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80 mb-8">Incluye radiografía panorámica y diagnóstico completo sin compromiso.</p>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] border-t border-[#363C27]/20 pt-4 inline-block">
                  Promo exclusiva web
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-[#1A1D16] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-10 uppercase tracking-tighter">
            ¿Listo para tu <span className="text-[#838F61]">nueva sonrisa</span>?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/34689189999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-widest text-sm hover:bg-[#1ebd5b] transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Pedir Cita por WhatsApp
            </a>
            <a 
              href="https://www.google.com/maps/search/Calle+Ntra.+Sra.+de+las+Candelas+14,+Málaga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
            >
              Ver ubicación en el mapa
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-[#838F61]/10 opacity-30" />
      </section>
    </motion.div>
  );
};

export default Home;
