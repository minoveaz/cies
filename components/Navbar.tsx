import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { trackEvent } from '@/utils/analytics';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatmentLinks = [
    { name: 'Implantes Dentales', path: '/implantes-dentales' },
    { name: 'Ortodoncia Invisible', path: '/ortodoncia-invisible' },
    { name: 'Brackets', path: '/brackets' },
    { name: 'Limpieza Dental', path: '/limpieza-dental' },
    { name: 'Blanqueamiento Dental', path: '/blanqueamiento-dental' },
    { name: 'Carillas Dentales', path: '/carillas-dentales' },
    { name: 'Endodoncia', path: '/endodoncia' },
    { name: 'Periodoncia', path: '/periodoncia' },
    { name: 'Bruxismo', path: '/bruxismo' },
  ];

  const aestheticLinks = [
    { name: 'Ácido Hialurónico', path: '/acido-hialuronico' },
  ];

  const mainLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre CIES', path: '/sobre-nosotros' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const phoneDisplay = "951 91 94 25";
  const phoneCall = "+34951919425";
  const verdeOliva = "#838F61";
  const verdeBosque = "#363C27";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-3"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - More compact */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/clinica-cies-logo.jpg" 
            alt="Clínica Dental CIES Málaga" 
            className={cn(
              "object-contain transition-all duration-300",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            )}
          />
        </Link>

        {/* Desktop Navigation - Compact & Organized */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            style={{ color: location.pathname === '/' ? verdeOliva : "#222222" }}
            className="text-[11px] font-black uppercase tracking-widest hover:text-[#838F61] transition-colors"
          >
            Inicio
          </Link>

          {/* Tratamientos Dropdown */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setActiveDropdown('treatments')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#222222] hover:text-[#838F61] transition-colors">
              Tratamientos <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'treatments' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 min-w-[220px] p-2"
                >
                  {treatmentLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#575760] hover:bg-[#F7F8F9] hover:text-[#838F61] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Estética Dropdown */}
          <div 
            className="relative group py-4"
            onMouseEnter={() => setActiveDropdown('aesthetic')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#222222] hover:text-[#838F61] transition-colors">
              Estética <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {activeDropdown === 'aesthetic' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 min-w-[200px] p-2"
                >
                  {aestheticLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#575760] hover:bg-[#F7F8F9] hover:text-[#838F61] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/sobre-nosotros"
            style={{ color: location.pathname === '/sobre-nosotros' ? verdeOliva : "#222222" }}
            className="text-[11px] font-black uppercase tracking-widest hover:text-[#838F61] transition-colors"
          >
            Sobre CIES
          </Link>
          <Link
            to="/blog"
            style={{ color: location.pathname === '/blog' ? verdeOliva : "#222222" }}
            className="text-[11px] font-black uppercase tracking-widest hover:text-[#838F61] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contacto"
            style={{ color: location.pathname === '/contacto' ? verdeOliva : "#222222" }}
            className="text-[11px] font-black uppercase tracking-widest hover:text-[#838F61] transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Contact CTA - More compact */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${phoneCall}`}
            onClick={() => trackEvent('phone_call_click', { category: 'conversion', label: 'Navbar' })}
            className="flex items-center gap-2 text-[#363C27] font-bold hover:text-[#838F61] transition-colors group"
          >
            <div className="w-7 h-7 bg-[#363C27]/10 rounded-none flex items-center justify-center group-hover:bg-[#838F61]/10">
              <Phone className="w-3.5 h-3.5 text-[#363C27] group-hover:text-[#838F61]" />
            </div>
            <span className="text-sm tracking-tighter">{phoneDisplay}</span>
          </a>
          <button 
            style={{ backgroundColor: verdeBosque }}
            onClick={() => trackEvent('contact_form_submit', { category: 'conversion', label: 'Navbar Button' })}
            className="px-5 py-2.5 text-white rounded-none font-black uppercase tracking-[0.15em] text-[10px] shadow-sm hover:bg-[#838F61] transition-all duration-300"
          >
            Cita Online
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#222222]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white mt-2 shadow-2xl overflow-hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-black uppercase tracking-widest text-[#222222]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-2">
                <p className="text-[10px] font-black uppercase text-[#838F61] mb-2 tracking-[0.2em]">Tratamientos</p>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l border-slate-100">
                  {treatmentLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-xs font-bold text-[#575760] py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <a href={`tel:${phoneCall}`} className="flex items-center gap-3 text-[#222222] font-black">
                  <Phone className="w-4 h-4 text-[#838F61]" />
                  <span>{phoneDisplay}</span>
                </a>
                <button 
                  style={{ backgroundColor: verdeBosque }}
                  className="w-full py-4 text-white rounded-none font-black uppercase tracking-widest text-xs"
                >
                  Reservar Cita
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
