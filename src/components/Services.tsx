import React, { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { CheckCircle2, ArrowUpRight, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-editorial-navy text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
              02 / Our Offerings
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight italic">
              Engineering Singular Gatherings
            </h2>
            <div className="h-[1px] w-16 bg-editorial-slate mt-6" />
          </div>
          <p className="text-slate-300 text-sm max-w-sm leading-relaxed font-light font-serif italic">
            Every ceremony and corporate launch is approached as an artisanal blueprint. Explore our specialized, high-production services.
          </p>
        </div>

        {/* Master-Detail Interactive Service Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
          
          {/* List of Services (Left 5 Columns on Large screens) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-3" id="services-tabs">
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-6 transition-all duration-300 border-l flex items-center justify-between cursor-pointer group ${
                    isSelected
                      ? 'bg-white/5 border-white pl-8 text-white'
                      : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`service-tab-btn-${service.id}`}
                >
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-1">
                      AnglesTouch Feature
                    </span>
                    <span className="text-base font-serif italic font-medium">
                      {service.title}
                    </span>
                  </div>
                  <ArrowUpRight 
                    size={14} 
                    className={`transition-transform duration-300 ${
                      isSelected ? 'translate-x-0.5 -translate-y-0.5 text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Details Section of Selected Service (Right 7 Columns) */}
          <div className="lg:col-span-7 bg-[#00172F] border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-white/20 transition-colors duration-500 relative overflow-hidden" id="service-detail-view">
            {/* Background absolute ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div>
              {/* Service Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                <div className="max-w-md">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-editorial-slate font-sans font-bold">Service Overview</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-white mt-1 italic">
                    {activeService.title}
                  </h3>
                </div>
                <div className="bg-[#001F3F] border border-white/10 px-4 py-2 text-right">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">Investment Standard</span>
                  <span className="text-xs font-sans font-bold text-white tracking-widest uppercase">
                    {activeService.priceRange}
                  </span>
                </div>
              </div>

              {/* Service Grid: Description & Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                <div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {activeService.description}
                  </p>
                  
                  {/* Service Features checklist */}
                  <div className="mt-8 space-y-3">
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-1">Inclusions & Scope</span>
                    {activeService.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={12} className="text-editorial-slate shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <div className="overflow-hidden aspect-[4/3] border border-white/10">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      id={`service-detail-img-${activeService.id}`}
                    />
                  </div>
                  <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Direct Interaction Button */}
            <div className="border-t border-white/10 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-slate-400 flex items-center gap-2 font-serif italic">
                <HelpCircle size={12} className="text-slate-500" />
                All service blueprints are fully tailored to your spatial parameters.
              </span>
              <button
                onClick={() => onSelectService(activeService.title)}
                className="w-full sm:w-auto px-6 py-3 bg-white text-editorial-navy text-[10px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-white border border-white transition-colors duration-300 cursor-pointer text-center"
                id={`btn-request-service-${activeService.id}`}
              >
                Request Proposal
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
