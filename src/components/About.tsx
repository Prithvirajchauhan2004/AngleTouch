import React from 'react';
import { Award, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Sparkles className="text-editorial-navy" size={20} />,
      title: 'Aesthetic Precision',
      description: 'We curate every event with rigorous artistic oversight. From the visual balance of table centerpieces to custom lighting geometry, everything is designed to project luxury.'
    },
    {
      icon: <Clock className="text-editorial-navy" size={20} />,
      title: 'Choreographed Logistics',
      description: 'An event is a living production. Our minute-by-minute timeline coordination ensures that sound, catering, staging, and entertainment flow in perfect synchronization.'
    },
    {
      icon: <Award className="text-editorial-navy" size={20} />,
      title: 'Bespoke Vendor Alchemy',
      description: 'We align exclusively with top-tier culinary artists, floral designers, sound technicians, and artisans who meet our exact standard of execution.'
    },
    {
      icon: <ShieldCheck className="text-editorial-navy" size={20} />,
      title: 'Absolute Discretion',
      description: 'Our clients value security and elegance. We maintain strict privacy and premium coordination, allowing you and your guests to enjoy an immersive event without friction.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f9fa] text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
            01 / Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-editorial-navy tracking-tight leading-tight italic">
            Choreographing Lifelong Moments with Impeccable Refinement
          </h2>
          <div className="h-[1px] w-16 bg-editorial-slate mt-6" />
        </div>

        {/* Narrative Split Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed font-light font-serif">
              Founded on the belief that extraordinary events do not happen by chance—they are engineered, drafted, and refined—<strong className="font-semibold text-editorial-navy font-sans uppercase text-sm tracking-widest">AngelsTouch Events</strong> has spent the last 5 years redefining the spatial and sensory language of celebrations.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We look at empty spaces and see canvases. We look at schedules and see symphonies. By integrating high-end styling, architectural staging, and seamless backend technical direction, we remove the stress of coordination, replacing it with an absolute peace of mind.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether it is an imposing product launch for hundreds of tech journalists, an elegant anniversary banquet in an estate conservatory, or a breathtaking coastal wedding, we focus on structural elegance and sensory rhythm. Every layout, every timing, and every transition is touched by angles of perfection.
            </p>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white border border-editorial-slate/20 p-8 md:p-12 shadow-sm rounded-none">
              <span className="text-[8px] uppercase tracking-[0.3em] text-editorial-slate font-sans font-bold block mb-2">Our Manifesto</span>
              <p className="italic text-slate-800 text-base leading-relaxed font-serif">
                "An event is not an assembly of decorations. It is a living, breathing landscape of interaction. We ensure that every angle of your milestone is crafted with deliberate grace and meticulous structural focus."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-[1px] w-10 bg-editorial-navy" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-editorial-navy font-sans font-bold">Anurag Tomar</span>
              </div>
            </div>
            {/* Elegant Background navy square offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-editorial-navy -z-0 hidden md:block opacity-[0.03]" />
          </div>
        </div>

        {/* Grid of Core Pillars */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        </div>
      </div>
    </section>
  );
}
