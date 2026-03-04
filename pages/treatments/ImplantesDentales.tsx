import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Award,
  ChevronDown,
  HelpCircle,
  Timer,
  Euro,
  Stethoscope,
  Smile,
  Shield,
  Activity,
  Users,
  Check
} from 'lucide-react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import { trackEvent } from '@/utils/analytics';

const ImplantesDentales: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('view_treatment', { label: 'Scroll to Contact - Implants' });
    }
  };

  const openDiscountWhatsApp = () => {
    const message = "Hola CIES, me interesa el descuento de 200€ para mi tratamiento de implantes dentales.";
    window.open(`https://wa.me/34689189999?text=${encodeURIComponent(message)}`, '_blank');
    trackEvent('whatsapp_click', { category: 'conversion', label: 'Discount Button - Implants' });
  };

  const implantFaqs = [
    {
      question: "¿Qué es un implante dental?",
      answer: "Los implantes dentales son aditamentos de titanio que se insertan en el hueso maxilar. Es el método más fiable para reponer dientes perdidos mediante la osteointegración (unión íntima con el hueso)."
    },
    {
      question: "¿Es doloroso colocarse implantes dentales?",
      answer: "No. Bajo anestesia local y con pautas antiinflamatorias y antibióticas, el procedimiento es indoloro. Además, nuestra tecnología de cirugía guiada reduce drásticamente las molestias."
    },
    {
      question: "¿Qué tiempo necesitaré para la recuperación?",
      answer: "Depende de cada caso: desde 2 meses en situaciones convencionales hasta 10 meses si se requieren injertos óseos avanzados."
    },
    {
      question: "¿Un implante dental es para toda la vida?",
      answer: "Con controles de higiene exhaustivos y revisiones periódicas, un implante dental de alta gama como los que usamos en CIES puede durar entre 15 y 25 años, o incluso toda la vida."
    },
    {
      question: "¿Qué podré comer después del tratamiento?",
      answer: "Si el implante se acaba de colocar hay que comer comidas blandas que se puedan aplastar. Una vez cicatrizado y colocada la prótesis definitiva, podrás comer de todo con total normalidad."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      <SEO 
        title="Implantes Dentales Málaga | Clínica Dental CIES ®"
        description="Expertos en Implantes dentales en Málaga. Recupera tu sonrisa en tan solo 1 día. Especialistas en carga inmediata y tecnología Straumann."
        canonical="/implantes-dentales"
      />

      {/* Hero Section - Explicit Legacy Content */}
      <section className="relative pt-44 lg:pt-32 min-h-[90vh] flex items-center bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <div className="z-10 py-12">
            <h2 className="text-[#838F61] font-black uppercase tracking-[0.2em] text-xs mb-4">Expertos en Implantes dentales en Málaga</h2>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-[#222222] leading-[0.9] mb-8 uppercase tracking-tighter">
              Solución <span className="text-[#838F61]">Rápida</span> y Eficaz
            </h1>
            <p className="text-xl text-[#575760] leading-relaxed mb-10 max-w-xl">
              Recuperar la funcionalidad y estética dental es posible. Consigue lucir una nueva sonrisa en Málaga con nuestro equipo de especialistas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="btn-primary px-12"
              >
                Concertar una cita
              </button>
              <button 
                onClick={openDiscountWhatsApp}
                className="px-8 py-4 bg-[#A7B287] text-[#363C27] font-black uppercase text-[10px] tracking-widest flex items-center justify-center hover:bg-[#838F61] hover:text-white transition-all duration-300"
              >
                Descuento de 200€
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Dientes en 1 día", "Tecnología 3D", "Garantía CIES", "Alta Gama"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#838F61]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#222222] opacity-60">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full hidden lg:block">
            <div className="absolute inset-0 bg-[#F7F8F9] -mr-[50vw]" />
            <div className="relative h-full flex items-center justify-center pr-12">
              <img 
                src="/images/cies-portada-foto.jpg" 
                alt="Clínica Implantes" 
                className="w-full h-[80%] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BENEFICIOS IMPLANTES DENTALES (Literal Content) */}
      <section className="py-32 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">BENEFICIOS IMPLANTES DENTALES</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8">
              Descubre las ventajas de los implantes dentales para tu salud
            </h3>
            <p className="text-lg text-[#575760] leading-relaxed italic">
              "La diferencia entre los implantes dentales y los dientes naturales es inapreciable gracias a los nuevos materiales para hacer las piezas artificiales."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Vida normal al día siguiente", text: "El paciente no sufre dolor en ningún momento durante el procedimiento. En la mayoría de casos puede hacer vida normal al siguiente día.", icon: <Shield className="w-6 h-6" /> },
              { title: "Conservación del hueso", text: "Los implantes dentales actúan como una raíz, por lo que benefician a la conservación del hueso.", icon: <Activity className="w-6 h-6" /> },
              { title: "Larga durabilidad", text: "Un implante dental cuenta con una vida útil muy larga. De 15 años hasta 25 años de duración.", icon: <Timer className="w-6 h-6" /> },
              { title: "100% Biocompatibles", text: "Todos nuestros implantes dentales son elaborados con materiales totalmente 100% biocompatibles.", icon: <Award className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white shadow-sm flex gap-8 items-start hover:shadow-xl transition-all duration-500">
                <div className="text-[#838F61] flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#222222] mb-3">{item.title}</h4>
                  <p className="text-sm text-[#575760] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Excelencia Médica (Literal Text Summary) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Compromiso CIES</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8 leading-tight">
                Expertos en Implantes <br /> <span className="text-[#838F61]">dentales en Málaga</span>
              </h3>
              <div className="space-y-6 text-[#575760] text-lg leading-relaxed mb-10">
                <p className="font-bold text-[#222222]">Solución rápida y eficaz para lucir una nueva sonrisa.</p>
                <p>
                  En Clínica Dental Cíes contamos con un <strong>gabinete tecnológico de última generación</strong> para facilitar la colocación de implantes dentales y aportar comodidad a nuestros pacientes. 
                </p>
                <p>
                  La técnica de <strong>carga inmediata</strong> permite colocar los dientes del paciente en una sola cita, con un margen de error mínimo y se puede utilizar en dientes individuales o en toda la dentadura.
                </p>
                <p>
                  El tratamiento se realiza por un equipo de especialistas, utilizando implantes de calidad y asegurando un resultado inmejorable. Se trata de una <strong>cirugía poco invasiva</strong> que también podría realizarse si el paciente presenta escasez de hueso. 
                </p>
                <p className="italic">
                  "Durante el tratamiento el paciente está consciente pero relajado gracias a la sedación, y tras la intervención podrá marcharse sin recuperación adicional."
                </p>
              </div>
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                Concertar una cita
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-[#F7F8F9] p-12 relative overflow-hidden border border-slate-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#838F61]/5 rounded-bl-full" />
                <h4 className="text-xl font-black uppercase text-[#222222] mb-10 border-b border-[#838F61]/20 pb-4 inline-block">Impacto en tu Salud</h4>
                <ul className="space-y-8">
                  {[
                    { title: "Mejora tu salud bucodental", desc: "Restablece el equilibrio total de tu boca." },
                    { title: "Disfruta de dientes perfectos", desc: "Estética y funcionalidad sin fisuras." },
                    { title: "Solución estética y funcional", desc: "Vuelve a sonreír y comer con total seguridad." },
                    { title: "Ayudan a la conservación del hueso", desc: "Previene la pérdida ósea tras la ausencia dental." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6 items-start">
                      <div className="size-10 bg-[#838F61] flex items-center justify-center text-white flex-shrink-0">
                        <Check size={20} />
                      </div>
                      <div>
                        <h5 className="font-black uppercase text-xs tracking-widest text-[#222222] mb-1">{item.title}</h5>
                        <p className="text-xs text-[#575760] font-medium leading-tight">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VENTAJAS CARGA INMEDIATA (The "Master" Section) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">VENTAJAS CARGA INMEDIATA</h2>
              <h3 className="text-4xl md:text-6xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8 leading-[0.9]">
                Todos tus implantes <br /> <span className="text-[#838F61]">en el mismo día</span>
              </h3>
              <p className="text-lg text-[#575760] leading-relaxed mb-12">
                A través de este procedimiento quirúrgico en el que <strong>no es necesario ni dar puntos de sutura</strong> en la encía, tus dientes quedarán listos en el mismo día.
              </p>

              <div className="p-10 bg-[#1A1D16] text-white space-y-8 relative">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Zap size={100} /></div>
                <div>
                  <h4 className="text-[#838F61] font-black uppercase text-xs tracking-widest mb-4">¿En qué consiste la carga inmediata?</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    La carga quirúrgica consiste en una técnica quirúrgica con la que se consigue la incorporación de implantes dentales en el mismo día. 
                    <br /><br />
                    En primer lugar, la doctora llevará a cabo un estudio de tu dentadura, y examinará cuáles son los dientes que se encuentran en mal estado. Además, se encargará de valorar cuál será el mejor implante que se adapte a tus necesidades.
                    Los dientes en mal estado, serán extraídos, para posteriormente colocar el implante dental.
                    Una vez colocado el implante, se procederá a la colocación de una corona protésica temporal, hasta que tras tres meses de cicatrización, la doctora cambie la corona por la prótesis terminante.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-12">
              {/* Ventajas Box */}
              <div className="bg-[#F7F8F9] p-12 border-l-4 border-[#838F61]">
                <h4 className="text-xl font-black uppercase text-[#222222] mb-8">Ventajas de la carga inmediata</h4>
                <ul className="space-y-4">
                  {[
                    "Permite comer sin ningún tipo de dolor ni molestia.",
                    "Compatible con un único implante o dentadura completa.",
                    "Tratamiento de salud y estética con resultados desde el día 1.",
                    "Mejora el bienestar y la confianza al sonreír.",
                    "Mejora la higiene bucodental."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm text-[#575760] font-medium leading-tight">
                      <CheckCircle2 size={18} className="text-[#838F61] flex-shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Paciente Ideal Box */}
              <div className="space-y-6">
                <h4 className="text-[#838F61] font-black uppercase text-xs tracking-widest">¿Cuál es el paciente ideal?</h4>
                <p className="text-[#575760] text-sm leading-relaxed">
                  Es necesario que el paciente tenga una buena salud bucodental, así como buenos hábitos de cepillado. Es muy importante que no existan inflamaciones de encía (gingivitis). En caso de bruxismo o de una oclusión dental no óptima, es necesario tratar estos problemas previamente.
                </p>
                <div className="p-6 bg-[#E9EDDE] text-[#363C27]">
                  <h5 className="font-black uppercase text-[10px] tracking-widest mb-2">Pérdida de hueso</h5>
                  <p className="text-xs font-bold leading-relaxed">
                    En caso de ausencia o pérdida de hueso, es totalmente posible realizar la carga inmediata gracias a nuestras tecnologías avanzadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Gabinete Tecnológico (Literal Text Integration) */}
      <section className="py-32 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/precio-implantes-dentales-de-carga-inmediata-malaga_1.jpg" alt="Precio implantes" className="w-full h-full object-cover shadow-lg" />
              <img src="/images/implantes-de-carga-inmediata-malaga-1.jpg" alt="Carga inmediata" className="w-full h-full object-cover shadow-lg mt-8" />
            </div>
            <div>
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Gabinete Digital</h2>
              <h3 className="text-4xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8 leading-tight">
                Tecnología de <br /> <span className="text-[#838F61]">Última Generación</span>
              </h3>
              <p className="text-lg text-[#575760] leading-relaxed mb-8">
                En Clínica Dental Cíes contamos con un gabinete tecnológico de última generación para facilitar la colocación de implantes y aportar comodidad. El tratamiento se realiza por un equipo de especialistas, asegurando un resultado inmejorable.
              </p>
              <p className="text-[#575760] text-sm leading-relaxed mb-8 italic">
                "Se trata de una cirugía poco invasiva que también podría realizarse si el paciente presenta escasez de hueso. Durante el tratamiento el paciente está consciente pero relajado gracias a la sedación."
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Salud Bucodental", "Dientes Perfectos", "Estética y Función", "Conservación Ósea"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white shadow-sm text-[10px] font-black uppercase text-[#222222]">
                    <Check size={14} className="text-[#838F61]" /> {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS - Specific to Implants */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4 text-center">Consultas Técnicas</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8 text-center">
                Dudas sobre <br /> <span className="text-[#838F61]">el tratamiento</span>
              </h3>
            </div>

            <div className="space-y-4">
              {implantFaqs.map((faq, idx) => (
                <div key={idx} className="bg-[#F7F8F9] border border-slate-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <HelpCircle className={openFaq === idx ? "text-[#838F61] w-5 h-5" : "text-slate-300 w-5 h-5 group-hover:text-[#838F61] transition-colors"} />
                      <span className="font-bold uppercase text-[11px] md:text-xs tracking-widest text-[#222222]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#838F61]' : 'text-slate-400'}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-8 pb-8 pl-16">
                          <p className="text-[#575760] text-sm leading-relaxed border-l-2 border-[#838F61]/40 pl-6 italic">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section id="contacto" className="py-32 bg-[#F7F8F9] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-extrabold text-[#222222] mb-8 uppercase tracking-tighter leading-none">
                Estudio <br /> <span className="text-[#838F61]">Personalizado</span>
              </h2>
              <p className="text-lg text-[#575760] leading-relaxed mb-12">
                Las doctoras siempre se encargarán de valorar tu caso, para poder realizar el tratamiento que mejor se adapte a ti. Incluimos radiografía diagnóstica.
              </p>
              <div className="p-8 bg-white border-l-4 border-[#838F61] shadow-sm">
                <p className="text-[#222222] font-bold text-sm uppercase tracking-widest mb-2">Reserva por Teléfono</p>
                <p className="text-3xl font-black text-[#363C27]">951 91 94 25</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ImplantesDentales;
