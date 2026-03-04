import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import StickyMobileCTA from './components/StickyMobileCTA';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import { trackEvent } from './utils/analytics';

// Pages - Lazy loading
const Home = lazy(() => import('./pages/Home'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const CookiesPolicy = lazy(() => import('./pages/legal/CookiesPolicy'));
const LegalNotice = lazy(() => import('./pages/legal/LegalNotice'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const ImplantesDentales = lazy(() => import('./pages/treatments/ImplantesDentales'));

const App: React.FC = () => {
  const location = useLocation();

  const whatsappNumber = "34689189999"; 
  const phoneDisplay = "951 91 94 25";
  const address = "Calle Ntra. Sra. de las Candelas 14, local 4, 29004 Málaga";

  // Colores corporativos explícitos
  const verdeOliva = "#838F61";
  const verdeBosque = "#363C27";

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#838F61]/20 selection:text-[#838F61]">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow pt-24 lg:pt-0">
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center bg-white">
            <div 
              style={{ borderTopColor: verdeOliva }}
              className="w-16 h-16 border-4 border-slate-100 rounded-full animate-spin" 
            />
          </div>
        }>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/implantes-dentales" element={<ImplantesDentales />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Footer Modernizado */}
      <footer className="bg-[#1A1D16] py-20 text-white/70 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#838F61]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-3xl font-display font-extrabold text-white mb-6">
                CIES <span style={{ color: verdeOliva }}>DENTAL</span>
              </div>
              <p className="text-sm leading-relaxed mb-8 opacity-60">
                Centro de Implantología Oral y Medicina Estética en Málaga. 
                Naturalidad y salud para tu sonrisa con la tecnología más avanzada.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ciesclinica/" target="_blank" className="w-10 h-10 bg-white/5 rounded-none flex items-center justify-center hover:bg-[#838F61] hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ciesclinicadental" target="_blank" className="w-10 h-10 bg-white/5 rounded-none flex items-center justify-center hover:bg-[#838F61] hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Tratamientos</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/implantes-dentales" className="hover:text-[#838F61] transition-colors">Implantes Dentales</Link></li>
                <li><Link to="/ortodoncia-invisible" className="hover:text-[#838F61] transition-colors">Ortodoncia Invisible</Link></li>
                <li><Link to="/estetica-dental" className="hover:text-[#838F61] transition-colors">Medicina Estética</Link></li>
                <li><Link to="/blanqueamiento-dental" className="hover:text-[#838F61] transition-colors">Blanqueamiento Dental</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin style={{ color: verdeOliva }} className="w-5 h-5 flex-shrink-0" />
                  <span>{address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone style={{ color: verdeOliva }} className="w-5 h-5 flex-shrink-0" />
                  <a href={`tel:+34951919425`} className="hover:text-white transition-colors">{phoneDisplay}</a>
                </li>
                <li className="flex gap-3">
                  <Mail style={{ color: verdeOliva }} className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:info@ciesclinica.com" className="hover:text-white transition-colors">info@ciesclinica.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Horario</h4>
              <ul className="space-y-4 text-sm opacity-60">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Lunes - Jueves:</span>
                  <span className="text-white font-medium">9:30 - 20:00</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Viernes:</span>
                  <span className="text-white font-medium">9:00 - 17:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado - Domingo:</span>
                  <span style={{ color: verdeOliva }} className="font-bold">Cerrado</span>
                </li>
              </ul>
              <div className="mt-8 pt-4 border-t border-white/5">
                <div style={{ color: verdeOliva }} className="text-[10px] font-bold uppercase tracking-widest">NICA: 60357</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-xs opacity-40">
            &copy; {new Date().getFullYear()} Clínica Dental CIES Málaga. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            <Link to="/aviso-legal" className="hover:underline">Aviso Legal</Link> | 
            <Link to="/privacidad" className="hover:underline">Política de Privacidad</Link> | 
            <Link to="/cookies" className="hover:underline">Política de Cookies</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA - Official Style */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { category: 'conversion', label: 'Floating Button' })}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
        <svg 
          viewBox="0 0 24 24" 
          className="w-9 h-9 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.131.574-.072 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.553 4.189 1.606 6.006L0 24l6.117-1.604a11.803 11.803 0 005.929 1.587h.005c6.634 0 12.032-5.396 12.035-12.032a11.763 11.763 0 00-3.489-8.492" />
        </svg>
      </motion.a>

      <StickyMobileCTA />
      <CookieBanner />
    </div>
  );
};

export default App;
