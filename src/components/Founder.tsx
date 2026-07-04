import React from 'react';
import { FOUNDER_DATA } from '../data';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#f8f9fa] text-slate-900 scroll-mt-20 relative overflow-hidden">
      {/* Absolute faint background text */}
      <div className="absolute -bottom-10 right-0 text-[10vw] font-black text-editorial-navy/5 tracking-widest pointer-events-none select-none uppercase font-sans">
        Tomar
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
            04 / Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-editorial-navy tracking-tight leading-tight italic">
            The Visionary Behind the Angelstouch
          </h2>
          <div className="h-[1px] w-16 bg-editorial-slate mt-6" />
        </div>

        {/* Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-8">
          
          {/* Founder Image (Left 5 Columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start" id="founder-photo-box">
            <div className="relative group max-w-sm lg:max-w-none w-full cursor-pointer">
              {/* Outer double border box */}
              <div className="absolute inset-4 border border-white/20 pointer-events-none z-20" />
              <div className="overflow-hidden aspect-[4/5] border border-editorial-slate/20 shadow-xl relative bg-white">
                <img
                  src={FOUNDER_DATA.image}
                  alt={FOUNDER_DATA.name}
                  className="w-full h-full object-cover transition duration-700 ease-in-out filter grayscale hover:grayscale-0 hover:saturate-150 hover:brightness-110 hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="founder-portrait-img"
                />
                {/* Elegant soft overlay tint */}
                <div className="absolute inset-0 bg-editorial-navy/5 mix-blend-multiply pointer-events-none transition-opacity duration-700 opacity-100 group-hover:opacity-10" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.32),rgba(59,130,246,0.24),rgba(34,197,94,0.18),transparent_55%)] mix-blend-screen" />
              </div>
              
              {/* Overlay Signature Name */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-editorial-slate/20 px-6 py-4 shadow-sm text-left hidden sm:block">
                <span className="block text-[8px] uppercase tracking-[0.25em] text-editorial-slate font-sans font-bold">ESTD 2016</span>
                <span className="block text-sm font-serif italic text-editorial-navy font-medium mt-0.5">Angelstouch Events</span>
              </div>
            </div>
          </div>

          {/* Founder Editorial bio (Right 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="founder-editorial-bio">
            <span className="text-[9px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">
              {FOUNDER_DATA.role}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-editorial-navy tracking-tight mt-1 mb-6 italic">
              {FOUNDER_DATA.name}
            </h3>
            
            <div className="space-y-6 text-slate-700 text-xs md:text-sm leading-relaxed font-light">
              <p>
                {FOUNDER_DATA.bio1}
              </p>
              <p>
                {FOUNDER_DATA.bio2}
              </p>
            </div>

            {/* Quote Block */}
            <div className="mt-8 border-l border-editorial-navy pl-6 py-2 bg-white relative">
              <Quote size={30} className="absolute -top-3 right-4 text-editorial-navy/10 pointer-events-none" />
              <p className="italic text-slate-800 text-sm leading-relaxed font-serif">
                {FOUNDER_DATA.quote}
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-8 flex items-center justify-between border-t border-editorial-slate/15 pt-6">
              <div>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">Personal Sign-off</span>
                <span className="block font-serif italic text-lg text-editorial-navy mt-1.5 font-light">
                  Anurag Tomar
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">Direct Channel</span>
                <a 
                  href="#contact" 
                  className="text-[10px] text-editorial-navy hover:text-editorial-slate font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-300 mt-1.5 block cursor-pointer"
                >
                  Schedule Personal Advisory →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
