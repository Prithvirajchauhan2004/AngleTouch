import React from 'react';
import { Calendar, Mail, Phone, MapPin, Sparkles, Database } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onAdminToggle: () => void;
  showAdmin: boolean;
}

export default function Footer({ onNavClick, onAdminToggle, showAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    onNavClick(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-editorial-navy text-white border-t border-white/10 pt-20 pb-12 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 pb-16 border-b border-white/10">
          
          {/* Column 1: Branding description (Left 4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xl md:text-2xl font-serif font-light tracking-[0.2em] text-white italic">
              ANGELS<span className="text-editorial-slate font-light">TOUCH</span>
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm">
              An elite design and management house sculpting luxury event geographies with meticulous logistical orchestration and impeccable modern styling.
            </p>
          </div>
          {/* Column 2: Navigation (Center 3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">
              Company Navigation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <button onClick={() => handleNav('hero')} className="text-xs text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-serif italic">
                Home Portfolio
              </button>
              <button onClick={() => handleNav('about')} className="text-xs text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-serif italic">
                About Our Vision
              </button>
              <button onClick={() => handleNav('services')} className="text-xs text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-serif italic">
                Specialized Offerings
              </button>
              <button onClick={() => handleNav('gallery')} className="text-xs text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-serif italic">
                Masterpiece Gallery
              </button>
              <button onClick={() => handleNav('founder')} className="text-xs text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-serif italic">
                Our Founder (Anurag Tomar)
              </button>
            </div>
          </div>

          {/* Column 3: Contact Details (Right 4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-editorial-slate shrink-0" />
                <a href="tel:+918860585382" className="hover:text-white transition-colors font-sans">+91 88605 85382</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-editorial-slate shrink-0" />
                <a href="mailto:anurag@angelstouch.com" className="hover:text-white transition-colors font-serif italic">anurag@angelstouch.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment bar */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-slate-400">
          <p className="font-light font-serif italic">
            © {currentYear} AnglesTouch Events. All Rights Reserved. Engineered by Anurag Tomar.
          </p>

          <div className="flex items-center gap-6">
            {/* Quick trigger to open inquiry desk */}
            <button
              onClick={onAdminToggle}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer font-sans text-[8px] uppercase tracking-[0.2em] font-bold ${
                showAdmin ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database size={11} />
              <span>Inquiry Desk Admin View</span>
            </button>
            
            <span className="flex items-center gap-1 font-serif italic">
              <Sparkles size={11} className="text-editorial-slate" />
              <span>Refined Event Geometry</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
