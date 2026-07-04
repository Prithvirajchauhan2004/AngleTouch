import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '../../assets/Image/WhatsApp Image 2026-07-04 at 9.07.14 PM.jpeg';

interface HeroProps {
  onExploreServices: () => void;
  onBookInquiry: () => void;
}

export default function Hero({ onExploreServices, onBookInquiry }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-[#001F3F] overflow-hidden pt-20"
    >
      {/* Background Image with Ken Burns / Elegant Zoom effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: `url(${heroBg})`
          }}
        />
      </div>

      {/* Decorative Grid Accents (Subtle minimalist lines) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05] flex justify-between max-w-7xl mx-auto px-6 lg:px-12">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden sm:block" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Subtle Tagline */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-editorial-slate" />
          <div className="h-[1px] w-8 bg-editorial-slate" />
        </div>

        {/* Brand Display Title - Editorial Serif and Sans combination */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-extralight text-white leading-tight select-none tracking-tight">
          AngelsTouch <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.6em] text-editorial-slate font-bold mt-4">Celebrate With Grace</span>
        </h1>

        {/* Brand Subtitle / Positioning Statement */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-light tracking-wide leading-relaxed">
        We are a team of seasoned professionals with years of expertise in event management, dedicated to creating unforgettable experiences with precision and elegance.
        </p>

        {/* Call to Actions */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <button
            onClick={onBookInquiry}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-editorial-navy text-[10px] font-sans font-bold uppercase tracking-[0.25em] hover:bg-transparent hover:text-white hover:border-white border border-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            id="hero-book-btn"
          >
            <span>Initiate Inquiry</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-[10px] font-sans font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-editorial-navy hover:border-white transition-all duration-300 flex items-center justify-center cursor-pointer"
            id="hero-explore-btn"
          >
            Our Services
          </button>
        </div>

        {/* Feature Highlights (Small minimalistic metrics) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-white/10 pt-8 text-left border-b border-white/10 pb-8">
          <div>
            <span className="block text-2xl font-serif italic text-white">5+</span>
            <span className="text-[9px] uppercase tracking-widest text-editorial-slate font-sans font-bold mt-1 block">Years Experience</span>
          </div>
          <div>
            <span className="block text-2xl font-serif italic text-white">100+</span>
            <span className="text-[9px] uppercase tracking-widest text-editorial-slate font-sans font-bold mt-1 block">Events Engineered</span>
          </div>
          <div>
            <span className="block text-2xl font-serif italic text-white">100%</span>
            <span className="text-[9px] uppercase tracking-widest text-editorial-slate font-sans font-bold mt-1 block">Bespoke Curation</span>
          </div>
          <div>
            <span className="block text-2xl font-serif italic text-white">5★</span>
            <span className="text-[9px] uppercase tracking-widest text-editorial-slate font-sans font-bold mt-1 block">Client Distinction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
