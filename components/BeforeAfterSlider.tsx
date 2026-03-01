import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  title, 
  description 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center bg-white p-8 lg:p-12 shadow-sm border border-slate-100">
      <div className="w-full lg:w-1/2">
        <div 
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden cursor-ew-resize touch-none group border-4 border-white shadow-2xl"
          onMouseDown={() => setIsSubmitted(true)}
          onMouseUp={() => setIsSubmitted(false)}
          onMouseLeave={() => setIsSubmitted(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsSubmitted(true)}
          onTouchEnd={() => setIsSubmitted(false)}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <img 
            src={afterImage} 
            alt="Después" 
            className="absolute inset-0 w-full h-full object-cover select-none"
          />

          {/* Before Image (Overlay) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={beforeImage} 
              alt="Antes" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth }}
            />
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#838F61] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white/50 rounded-full" />
                <div className="w-1 h-3 bg-white/50 rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 z-30 px-3 py-1 bg-[#1A1D16]/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest pointer-events-none">
            Antes
          </div>
          <div className="absolute bottom-4 right-4 z-30 px-3 py-1 bg-[#838F61]/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest pointer-events-none">
            Después
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="inline-flex items-center gap-2 text-[#838F61] font-black uppercase text-[10px] tracking-[0.3em] mb-4">
          <span className="w-8 h-[2px] bg-[#838F61]" />
          Casos de Éxito
        </div>
        <h3 className="text-3xl lg:text-4xl font-display font-extrabold text-[#222222] uppercase tracking-tighter mb-6">
          {title}
        </h3>
        <p className="text-[#575760] text-lg leading-relaxed mb-8 italic">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
          <div>
            <span className="block text-[10px] font-black uppercase text-[#838F61] mb-1">Tratamiento</span>
            <span className="text-[#222222] font-bold text-sm">Estética Dental Pro</span>
          </div>
          <div>
            <span className="block text-[10px] font-black uppercase text-[#838F61] mb-1">Duración</span>
            <span className="text-[#222222] font-bold text-sm">2 Sesiones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
