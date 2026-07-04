import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface ContactFormProps {
  selectedService: string;
  onInquirySubmitted: () => void;
}

export default function ContactForm({ selectedService, onInquirySubmitted }: ContactFormProps) {
  return (
    <section id="contact" className="py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
            05 / Direct Booking
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-editorial-navy tracking-tight leading-tight italic">
            Initiate Your Spatial Masterpiece
          </h2>
          <div className="h-[1px] w-16 bg-editorial-slate mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info-block">
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-serif italic text-editorial-navy">The Advisory Process</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2 font-light">
                  Once your proposal request is registered, Anurag Tomar’s specialized design team will draft an initial spatial feasibility checklist based on your venue parameters. We will schedule a direct consultation call within 12 business hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] border border-editorial-slate/10">
                  <div className="p-3 bg-white text-editorial-navy border border-editorial-slate/10">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">Official Inquiries</span>
                    <a href="mailto:anurag@angelstouch.com" className="text-sm font-serif italic text-editorial-navy hover:text-editorial-slate transition-colors">
                      anurag@angelstouch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] border border-editorial-slate/10">
                  <div className="p-3 bg-white text-editorial-navy border border-editorial-slate/10">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">Direct Advisory</span>
                    <a href="tel:+918860585382" className="text-sm font-sans font-bold uppercase tracking-widest text-editorial-navy hover:text-editorial-slate transition-colors">
                      +91 88605 85382
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 p-6 bg-editorial-navy text-white">
              <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-1">Secured Registration</span>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                All submitted data is stored in your private local session container. AnglesTouch Events protects private event drafts with strict structural guidelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#f8f9fa] border border-editorial-slate/20 p-8 md:p-12 shadow-sm relative" id="contact-form-card">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-serif italic text-editorial-navy">Schedule a Private Consultation</h3>
                <p className="text-xs text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
                  Please contact our concierge directly to discuss your bespoke event requirements, availability, and production roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 text-left">
                <div className="p-6 bg-white border border-editorial-slate/10">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-3">Preferred Contact</span>
                  <div className="flex items-center gap-3 text-editorial-navy">
                    <Mail size={18} />
                    <a href="mailto:anurag@angelstouch.com" className="text-sm font-serif hover:text-editorial-slate transition-colors">
                      anurag@angelstouch.com
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white border border-editorial-slate/10">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-3">Direct Phone</span>
                  <div className="flex items-center gap-3 text-editorial-navy">
                    <Phone size={18} />
                    <a href="tel:+918860585382" className="text-sm font-serif hover:text-editorial-slate transition-colors">
                      +91 88605 85382
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white border border-editorial-slate/10">
                  <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mb-3">Consultation Hours</span>
                  <p className="text-sm font-serif text-slate-700 leading-relaxed">24X7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
