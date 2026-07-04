import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Database } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  showAdmin: boolean;
  setShowAdmin: (show: boolean) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  showAdmin,
  setShowAdmin
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'founder', label: 'Our Founder' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: string) => {
    setShowAdmin(false);
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-sm py-4 border-b border-editorial-slate/20' 
          : 'bg-slate-950/80 backdrop-blur-sm py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex flex-col items-start group text-left cursor-pointer"
          id="btn-logo"
        >
          <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-300 ${isScrolled ? 'text-editorial-navy' : 'text-white'}`}>
            ANGELS<span className="text-editorial-slate font-light">TOUCH</span>
          </span>
          <span className="text-[8px] uppercase tracking-[0.3em] text-editorial-slate group-hover:text-blue-500 transition-colors duration-300 font-sans font-bold">
            Celebtrate With Grace
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" id="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[11px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 cursor-pointer border-b-2 py-1 ${
                !showAdmin && activeSection === item.id
                  ? isScrolled ? 'border-editorial-navy text-editorial-navy' : 'border-white text-white'
                  : 'border-transparent text-editorial-slate hover:text-editorial-navy'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4" id="nav-actions">

          {/* Core Consultation CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center gap-2 px-5 py-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border ${
              isScrolled 
                ? 'bg-editorial-navy text-white border-editorial-navy hover:bg-white hover:text-editorial-navy'
                : 'bg-white text-editorial-navy border-white hover:bg-transparent hover:text-white'
            }`}
            id="btn-consultation-cta"
          >
            <Calendar size={12} />
            Book Inquiry
          </button>
        </div>

        {/* Mobile Menu & Admin Toggle */}
        <div className="flex items-center space-x-3 lg:hidden" id="mobile-controls">

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1 cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-editorial-navy hover:text-editorial-slate' : 'text-slate-300 hover:text-white'}`}
            aria-label="Toggle menu"
            id="btn-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-b shadow-xl animate-fadeIn ${
          isScrolled ? 'bg-white border-editorial-slate/20' : 'bg-slate-950 border-slate-800'
        }`} id="mobile-menu-dropdown">
          <div className="px-6 py-6 space-y-4 flex flex-col items-center text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full py-2 text-xs uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 ${
                  !showAdmin && activeSection === item.id
                    ? isScrolled ? 'text-editorial-navy border-b border-editorial-navy' : 'text-white border-b border-white'
                    : 'text-editorial-slate hover:text-editorial-navy'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className={`w-full h-[1px] my-2 ${isScrolled ? 'bg-editorial-slate/10' : 'bg-slate-800'}`} />
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className={`w-full max-w-xs flex items-center justify-center gap-2 px-5 py-3 text-[10px] font-sans font-bold uppercase tracking-[0.2em] transition-colors duration-300 border ${
                isScrolled 
                  ? 'bg-editorial-navy text-white border-editorial-navy hover:bg-white hover:text-editorial-navy'
                  : 'bg-white text-editorial-navy border-white hover:bg-transparent hover:text-white'
              }`}
              id="mobile-btn-consultation"
            >
              <Calendar size={12} />
              Book Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
