import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { Maximize2, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  onInquireAboutCategory: (categoryName: string) => void;
}

export default function Gallery({ onInquireAboutCategory }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Available categories to filter by
  const categories = ['All', 'Product Launch Events', 'Luxury Wedding Planner', 'Engagements', 'Anniversaries'];

  // Filter the items list
  const filteredItems = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  // Navigating inside lightbox
  const handlePrevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white text-slate-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-editorial-slate font-sans font-bold block mb-3">
            03 / Showcase Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-editorial-navy tracking-tight leading-tight italic">
            Visual Proof of Flawless Geometry
          </h2>
          <div className="h-[1px] w-16 bg-editorial-slate mt-6" />
        </div>

        {/* Category Filters Row */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-12 border-b border-editorial-slate/10 pb-6" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 cursor-pointer rounded-none border ${
                activeFilter === cat
                  ? 'bg-editorial-navy text-white border-editorial-navy shadow-sm'
                  : 'text-editorial-slate border-transparent hover:text-editorial-navy hover:bg-[#f8f9fa]'
              }`}
              id={`filter-btn-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat === 'All' ? 'All Masterpieces' : cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-items-container">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative cursor-pointer overflow-hidden aspect-square border border-editorial-slate/20 bg-[#f8f9fa] flex flex-col justify-end"
              id={`gallery-item-${item.id}`}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/95 via-[#001F3F]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Hover Text Info */}
              <div className="relative z-20 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                <span className="text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold">
                  {item.category}
                </span>
                <h4 className="text-base font-serif italic mt-1 font-medium text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 font-light mt-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-white font-sans font-bold">
                  <span>Enlarge Details</span>
                  <Maximize2 size={8} />
                </div>
              </div>

              {/* Static category corner tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm border border-editorial-slate/20 px-3 py-1 text-[8px] uppercase tracking-[0.2em] font-sans font-bold text-editorial-navy group-hover:opacity-0 transition-opacity duration-300">
                {item.category.split(' ')[0]} {/* shortened category name for mobile */}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter doesn't exist */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-editorial-slate/20" id="gallery-empty">
            <p className="text-editorial-slate text-xs font-sans font-bold uppercase tracking-[0.2em]">No masterpieces matched this criteria.</p>
          </div>
        )}
      </div>

      {/* Elegant Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#001F3F]/98 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={handleCloseLightbox}
          id="gallery-lightbox-modal"
        >
          {/* Close button */}
          <button 
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer bg-[#00172F] border border-white/10"
            aria-label="Close Lightbox"
            id="btn-lightbox-close"
          >
            <X size={18} />
          </button>

          {/* Lightbox Container */}
          <div 
            className="relative max-w-5xl w-full bg-[#00172F] border border-white/10 grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            id="lightbox-container"
          >
            
            {/* Image Box */}
            <div className="md:col-span-8 bg-[#001F3F] relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[80vh] w-full object-contain"
                referrerPolicy="no-referrer"
                id="lightbox-active-img"
              />

              {/* Left Navigation Arrow */}
              <button
                onClick={handlePrevItem}
                className="absolute left-4 p-3 bg-[#00172F]/90 hover:bg-white/10 text-white transition-all cursor-pointer border border-white/10 shadow-md"
                aria-label="Previous image"
                id="btn-lightbox-prev"
              >
                <ArrowLeft size={14} />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={handleNextItem}
                className="absolute right-4 p-3 bg-[#00172F]/90 hover:bg-white/10 text-white transition-all cursor-pointer border border-white/10 shadow-md"
                aria-label="Next image"
                id="btn-lightbox-next"
              >
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Content Details Box */}
            <div className="md:col-span-4 p-8 flex flex-col justify-between text-white border-t md:border-t-0 md:border-l border-white/10">
              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold block mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-light text-white leading-tight italic">
                  {selectedItem.title}
                </h3>
                <div className="h-[1px] w-12 bg-editorial-slate my-4" />
                <p className="text-xs text-slate-300 font-light leading-relaxed mt-4">
                  {selectedItem.description}
                </p>
                
                <div className="bg-[#001F3F] border border-white/5 p-4 mt-8">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-editorial-slate font-sans font-bold block">AnglesTouch Quality</span>
                  <span className="text-xs text-slate-300 font-light block mt-1">
                    Every detail shown was structured, coordinated, and overseen directly by our specialized planning team.
                  </span>
                </div>
              </div>

              {/* Direct Booking Link inside Lightbox */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <button
                  onClick={() => {
                    onInquireAboutCategory(selectedItem.category);
                    handleCloseLightbox();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-editorial-navy text-[10px] font-sans font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-white border border-white transition-colors cursor-pointer"
                  id="btn-lightbox-book-category"
                >
                  <span>Replicate Theme</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
