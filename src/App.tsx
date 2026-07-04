import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Founder from './components/Founder';
import ContactForm from './components/ContactForm';
import InquiryDashboard from './components/InquiryDashboard';
import Footer from './components/Footer';
import { TESTIMONIALS_DATA } from './data';
import { Star, ArrowRight, ArrowLeft, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminUpdateCounter, setAdminUpdateCounter] = useState(0);

  // Testimonials Carousel State
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  // Auto-scrolling testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Monitor scroll height to highlight corresponding navigation button (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      if (showAdmin) return;
      const scrollPosition = window.scrollY + 200; // offset for triggers

      const sections = ['hero', 'about', 'services', 'gallery', 'founder', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAdmin]);

  // Handle service pre-selection and smooth scroll
  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const element = document.getElementById('contact');
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

  const handleInquirySubmitted = () => {
    // Increment update counter to trigger reloading inquiries inside dashboard if open
    setAdminUpdateCounter(prev => prev + 1);
  };

  // Navigating testimonials manually
  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-editorial-navy selection:text-white flex flex-col justify-between">
      
      {/* Top Level Sticky Navigation Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        showAdmin={showAdmin}
        setShowAdmin={setShowAdmin}
      />

      {showAdmin ? (
        /* Isolated Administrative Portal View */
        <main className="flex-grow pt-16">
          <InquiryDashboard
            onClose={() => setShowAdmin(false)}
            updateCounter={adminUpdateCounter}
            onTriggerReload={() => setAdminUpdateCounter(prev => prev + 1)}
          />
        </main>
      ) : (
        /* Core Brand Portfolio Website View */
        <main className="flex-grow">
          {/* Landing / Hero Section */}
          <Hero
            onExploreServices={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onBookInquiry={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* About Us Narrative Page */}
          <About />

          {/* Interactive Services / Packages Page */}
          <Services onSelectService={handleSelectService} />

          {/* Masterpiece Gallery Page */}
          <Gallery onInquireAboutCategory={handleSelectService} />

          {/* Founder Executive Profile Section */}
          <Founder />

          {/* Curated Client Credentials Slide (Testimonials) */}
          <section id="credentials" className="py-24 bg-editorial-navy text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 font-sans">
              <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
                Client Accolades
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-white mb-12 italic">
                Distinguished Client Opinions
              </h2>

              {/* Slider View */}
              <div className="relative min-h-[220px] flex flex-col items-center justify-center bg-white/5 border border-white/10 p-8 md:p-12 shadow-sm">
                
                {/* Five star rating symbols */}
                <div className="flex gap-1 mb-6 text-editorial-slate">
                  {Array.from({ length: TESTIMONIALS_DATA[currentTestimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-base md:text-lg text-slate-200 leading-relaxed font-serif italic max-w-2xl">
                  "{TESTIMONIALS_DATA[currentTestimonialIdx].content}"
                </p>

                {/* Author Name */}
                <span className="block text-xs uppercase tracking-[0.2em] text-white font-sans font-bold mt-6">
                  {TESTIMONIALS_DATA[currentTestimonialIdx].name}
                </span>

                {/* Author Credentials Role */}
                <span className="block text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold mt-1">
                  {TESTIMONIALS_DATA[currentTestimonialIdx].role}
                </span>

                {/* Left/Right manual sliders control buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                    aria-label="Previous Testimonial"
                    id="btn-prev-testimonial"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <span className="text-xs font-mono text-slate-500">
                    {currentTestimonialIdx + 1} / {TESTIMONIALS_DATA.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-all cursor-pointer"
                    aria-label="Next Testimonial"
                    id="btn-next-testimonial"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Us Booking Form */}
          <ContactForm
            selectedService={selectedService}
            onInquirySubmitted={handleInquirySubmitted}
          />
        </main>
      )}

      {/* Global Interactive Footer */}
      <Footer
        onNavClick={handleSelectService}
        onAdminToggle={() => setShowAdmin(!showAdmin)}
        showAdmin={showAdmin}
      />
    </div>
  );
}
