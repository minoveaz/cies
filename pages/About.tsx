import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Award, 
  Stethoscope, 
  GraduationCap, 
  Globe, 
  UserCheck,
  Zap,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Smile
} from 'lucide-react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';

const About: React.FC = () => {
  const fullTeam = [
    {
      name: "Dra. Ana María García Bravo",
      specialty: "Implantología, Regeneración ósea y Periodoncia",
      image: "/images/doctora-ana-maria-garcia-bravo-1.jpg",
      credentials: [
        "Licenciada en Odontología por la Pontificia Universidad Javeriana, Bogotá, Colombia.",
        "Máster en Periodoncia, Implantología oral y Regeneración tisular por la Universidad Nacional de Colombia.",
        "Diplomada en Estética y Rehabilitación Oral por la Universidad Nacional de Colombia.",
        "Secretaria Junta Nacional Asociación Colombiana de Periodoncia y Osteointegración.",
        "Miembro de la Sociedad Española de Periodoncia, SEPA."
      ]
    },
    {
      name: "Dra. Lucía Hernández Pageo",
      specialty: "Implantología, Regeneración ósea, Periodoncia e Implantoprótesis",
      image: "/images/doctora-lucia-hernandez-pageo-1.jpg",
      credentials: [
        "Licenciada en Odontología por la Universidad de Granada.",
        "Máster en Implantología avanzada, Regeneración tisular e Implantoprótesis por la Universidad Rey Juan Carlos, Madrid.",
        "Máster en investigación Odontológica.",
        "Especialista en Implantología Estética por Fundación IAVANTE.",
        "Postgrado en Rehabilitación oral y estética por la SCOE, Barcelona.",
        "Especialista en endodoncia, Valencia.",
        "Miembro de la Sociedad Española de Periodoncia, SEPA y Sociedad Española de Cirugía Bucal, SECIB."
      ]
    },
    {
      name: "Dra. Alexandra López Vélez",
      specialty: "Operatoria y Estética dental",
      image: "/images/Alexandra-saturacion-cerca-scaled.jpg",
      credentials: [
        "Licenciada en Odontología por la Universidad Santiago de Cali en Cali (Colombia).",
        "Diplomada de técnica de restauraciones estéticas directas e indirectas en composite.",
        "Formación especializada en carillas estéticas Firsfi.",
        "Entrenamiento clínico y técnico de restauraciones cerámicas y resinas compuestas.",
        "Miembro de la Sociedad Española de Prótesis Estomatológica y Estética SEPES."
      ]
    },
    {
      name: "Dra. Laura López Ruiz",
      specialty: "Ortodoncia y Ortopedia dentofacial",
      image: "/images/doctora-laura-lopez-ruiz.jpg",
      credentials: [
        "Licenciada en Odontología por la universidad de Granada.",
        "Master en ortodoncia y ortopedia dentofacial por la Universidad de Murcia.",
        "Máster en ortodoncia invisible, Málaga.",
        "Especialista en ortodoncia invisible, Málaga.",
        "Postgrados en Incógnito (Manuel Fernández, Madrid) y SPARK (Málaga).",
        "Máster en investigación odontológica.",
        "Miembro de la sociedad española de ortodoncia SEDO y sociedad española de alineadores SEDA."
      ]
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
        title="Sobre Nosotros | Un gran equipo de especialistas"
        description="Conoce al equipo de dentistas, implantólogos y ortodoncistas de Clínica CIES en Málaga. Profesionalidad y tecnología de vanguardia a tu servicio."
        canonical="/sobre-nosotros"
      />

      {/* Hero Section - Minimalist & Authoritative */}
      <section className="relative pt-44 pb-20 lg:pt-56 lg:pb-32 bg-[#F7F8F9] overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-white lg:rounded-l-[10rem] shadow-2xl -z-10" />
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Conoce CIES</h2>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-[#222222] leading-[0.9] mb-8 uppercase tracking-tighter">
              Pasión por la <br /> <span className="text-[#838F61]">Excelencia</span>
            </h1>
            <p className="text-xl text-[#575760] leading-relaxed mb-10 max-w-xl italic">
              "Nuestro personal cualificado y la aplicación de tecnología de máximo nivel son la clave para conseguir el mejor resultado en nuestros pacientes."
            </p>
            <div className="flex gap-8 items-center border-t border-slate-200 pt-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#222222]">15+</span>
                <span className="text-[10px] font-black uppercase text-[#838F61] tracking-widest">Años de Exp.</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#222222]">10k+</span>
                <span className="text-[10px] font-black uppercase text-[#838F61] tracking-widest">Pacientes</span>
              </div>
              <div className="w-[1px] h-12 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#222222]">4.9/5</span>
                <span className="text-[10px] font-black uppercase text-[#838F61] tracking-widest">Valoración</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                src="/images/clinica-cies-malaga-1.jpg" 
                alt="Clínica Dental CIES Málaga" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 hidden md:block opacity-40">
              <img src="/images/marca.png" alt="Sello CIES" className="w-full h-auto rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Nuestra Filosofía</h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-8 leading-none">
              Odontología de Autor, <br /> <span className="text-[#838F61]">no de franquicia</span>
            </h3>
            <p className="text-lg text-[#575760] leading-relaxed">
              En Clínica CIES creemos en el trato directo y personalizado. Aquí siempre te atenderá la misma doctora, 
              creando un vínculo de confianza que las grandes cadenas dentales han perdido. Combinamos esa calidez 
              con la tecnología más puntera del sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Trato Humano", 
                desc: "No eres un número. Nos tomamos el tiempo necesario para escucharte y explicarte cada paso.", 
                icon: <UserCheck className="w-8 h-8" /> 
              },
              { 
                title: "Tecnología 3D", 
                desc: "Diagnósticos precisos con escáner intraoral y TAC propio para resultados predecibles.", 
                icon: <Zap className="w-8 h-8" /> 
              },
              { 
                title: "Resultados Naturales", 
                desc: "Buscamos la armonía estética respetando siempre la salud y funcionalidad de tu boca.", 
                icon: <Smile className="w-8 h-8" /> 
              }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 border border-slate-50 hover:border-[#838F61]/20 transition-all group">
                <div className="size-16 bg-[#F7F8F9] flex items-center justify-center mx-auto mb-6 text-[#363C27] group-hover:bg-[#838F61] group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight text-[#222222] mb-4">{value.title}</h4>
                <p className="text-sm text-[#575760] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Team Section - Spotlight Style */}
      <section className="py-32 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Equipo Médico</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter">
              Especialistas de <span className="text-[#838F61]">Primer Nivel</span>
            </h3>
          </div>

          <div className="space-y-32">
            {fullTeam.map((member, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 border-[20px] border-white/10 m-6 pointer-events-none" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 pt-8">
                  <h4 className="text-3xl md:text-4xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-2">
                    {member.name}
                  </h4>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#838F61] mb-10 pb-4 border-b border-[#838F61]/20 inline-block">
                    {member.specialty}
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#222222] mb-6">
                        <GraduationCap className="w-4 h-4 text-[#838F61]" />
                        Formación y Credenciales
                      </h5>
                      <ul className="space-y-4">
                        {member.credentials.map((cred, i) => (
                          <li key={i} className="flex gap-4 items-start text-sm text-[#575760] leading-relaxed">
                            <CheckCircle2 size={16} className="text-[#838F61] flex-shrink-0 mt-1" />
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-12 flex gap-4">
                    <button className="btn-primary">Reservar cita con ella</button>
                    <button className="p-4 border border-slate-200 text-[#222222] hover:bg-white hover:shadow-lg transition-all">
                      <Globe size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sello de Calidad / Professional Bodies */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale filter">
            <span className="text-2xl font-black uppercase tracking-widest">SEPA</span>
            <span className="text-2xl font-black uppercase tracking-widest">SEPES</span>
            <span className="text-2xl font-black uppercase tracking-widest">SECIB</span>
            <span className="text-2xl font-black uppercase tracking-widest">SEDO</span>
            <span className="text-2xl font-black uppercase tracking-widest">SEDA</span>
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-display font-extrabold text-[#222222] mb-8 uppercase tracking-tighter leading-none">
                Ven a <br /> <span className="text-[#838F61]">conocernos</span>
              </h2>
              <p className="text-lg text-[#575760] leading-relaxed mb-12">
                Estamos en el corazón de Málaga, listos para ofrecerte la mejor solución dental. Agenda tu primera valoración sin compromiso.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="size-12 bg-[#F7F8F9] flex items-center justify-center text-[#363C27]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#575760] mb-1">Teléfono Directo</h5>
                    <p className="text-2xl text-[#222222] font-black tracking-tighter">951 91 94 25</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="size-12 bg-[#F7F8F9] flex items-center justify-center text-[#363C27]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#575760] mb-1">Ubicación</h5>
                    <p className="text-sm text-[#222222] font-bold uppercase tracking-widest">Calle Ntra. Sra. de las Candelas 14, Málaga</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
