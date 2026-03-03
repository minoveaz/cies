import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Carmen G.",
    text: "Excelente trato y profesionalidad. Me hice una ortodoncia invisible y el resultado ha sido espectacular. Muy recomendables.",
    rating: 5,
    date: "Hace 2 meses"
  },
  {
    name: "José Manuel R.",
    text: "La mejor clínica dental de Málaga. Tecnología de punta y las doctoras explican todo con mucha paciencia. Cero dolor.",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    name: "Elena M.",
    text: "Buscaba un dentista de confianza para mis implantes y no pude elegir mejor. Ana María es una gran profesional.",
    rating: 5,
    date: "Hace 3 semanas"
  },
  {
    name: "Ricardo T.",
    text: "Instalaciones impecables y trato humano inmejorable. Te hacen sentir cómodo desde que entras por la puerta.",
    rating: 5,
    date: "Hace 2 meses"
  }
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#838F61] font-black tracking-[0.4em] uppercase text-[10px] mb-4">Confianza Real</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-[#222222] uppercase tracking-tighter">
              Lo que dicen <br /> <span className="text-[#838F61]">nuestros pacientes</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-[#F7F8F9] p-6 border border-slate-100">
            <div className="text-4xl font-black text-[#222222]">4.9</div>
            <div>
              <div className="flex text-yellow-500 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="text-[10px] font-black uppercase text-[#575760]">Puntuación en Google</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                className="min-w-[300px] md:min-w-[400px] bg-[#F7F8F9] p-10 snap-center border border-transparent hover:border-[#838F61]/20 transition-all duration-500 relative group"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-[#838F61] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[#222222] text-lg font-medium leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <span className="font-black uppercase text-[10px] text-[#222222] tracking-widest">{review.name}</span>
                  <span className="text-[10px] text-[#575760] font-bold">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative side fades */}
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/CvGH6j93P3XaEvxZ9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#363C27] hover:text-[#838F61] transition-colors border-b-2 border-[#363C27]/10 pb-2"
          >
            Ver todas las opiniones en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
