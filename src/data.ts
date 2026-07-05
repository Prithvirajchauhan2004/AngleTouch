import { ServiceItem, GalleryItem, TestimonialItem } from './types';
import weddingImage from '../assets/Image/Wedding.jpeg';
import engagementImage from '../assets/Image/Engagement.jpeg';
import birthdayImage from '../assets/Image/Birthday.jpeg';
import anniversaryImage from '../assets/Image/Anniversary.jpeg';
import founderImage from '../assets/Image/founder.jpeg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'product-launch',
    title: 'Product Launch Events',
    description: 'High-impact, technologically seamless brand launches designed to command industry attention and foster powerful media engagement.',
    features: [
      'Comprehensive Technical Direction & Audio/Visual Design',
      'Stage Setup, Geometric Backdrops & Advanced Projection',
      'Press Kit Management & Seamless Media Coordination',
      'Immersive Brand Experience Zones & Interactive Displays',
      'Custom Lighting Scenes Aligned with Corporate Brand Identity'
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    priceRange: 'Enterprise Custom Pricing'
  },
  {
    id: 'luxury-wedding',
    title: 'Luxury Wedding Planner',
    description: 'Masterfully choreographed, high-luxury wedding experiences that blend sophisticated romantic aesthetics with precision logisitical execution.',
    features: [
      'Complete Venue Selection, Layout Plan & Acoustic Planning',
      'Elegant Royal Draping, Floral Archways & Premium Table Settings',
      'Bespoke Catering Consultation & Master Sommelier Curation',
      'Detailed Timeline Choreography & Day-of Stage Direction',
      'Vendor Coordination (Photography, Music, Invitations, Sound)'
    ],
    image: weddingImage,
    priceRange: 'Premium Tailored packages'
  },
  {
    id: 'engagements',
    title: 'Engagements',
    description: 'Intimate, meticulously styled ring ceremonies and garden gatherings that tell your unique love story with warmth and sophisticated style.',
    features: [
      'Concept Theme Creation & Bespoke Color Palette Selection',
      'Scenic Photogenic Backdrops & Soft Romantic String Lighting',
      'Intimate Seating Arrangements & Custom Ambient Music curation',
      'Signature Welcoming Cocktails & Decadent Canapé Menus',
      'Professional Photography & Videography Flow Coordination'
    ],
    image: engagementImage,
    priceRange: 'Customizable Styling Packages'
  },
  {
    id: 'birthday-bachelor',
    title: 'Birthday & Bachelor Parties',
    description: 'High-energy, ultra-custom celebrations ranging from refined minimalist dinners to high-production bachelor weekend events.',
    features: [
      'Vibrant Custom Decor Themes & Creative Props Design',
      'Professional Live DJ and Visual Effect Displays',
      'Innovative Catering & Customized Thematic Cake Designs',
      'Creative Entertainment Coordination & Photobooth Setup',
      'Logistics Management for Destination Group Weekends'
    ],
    image: birthdayImage,
    priceRange: 'Flexible Bespoke Budgets'
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries',
    description: 'Timeless celebrations honoring life milestones with absolute elegance, customized backdrops, and memorable historical retrospectives.',
    features: [
      'Multi-Generational Seating Plans & Premium Linen Styling',
      'Curated Photographic Memory Galleries & Slide Show Stages',
      'Live Instrumental Performers (Harpist, Violinist, or Jazz Quartets)',
      'Elegant Keepsakes & Personalized Thank-You Cards for Guests',
      'Exclusive Fine Dining Service & Bespoke Anniversary Toasting'
    ],
    image: anniversaryImage,
    priceRange: 'Bespoke Scale Pricing'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Minimalist Corporate Keynote',
    category: 'Product Launch Events',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek dark staging under dramatic linear LEDs for a modern electric vehicle launch.'
  },
  {
    id: 'g2',
    title: 'The Grand Pavilion Wedding',
    category: 'Luxury Wedding Planner',
    image: 'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?auto=format&fit=crop&w=800&q=80',
    description: 'Draped ivory silks, massive floral installations, and delicate warm pendant lights.'
  },
  {
    id: 'g3',
    title: 'Intimate Candlelit Dinner',
    category: 'Anniversaries',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    description: 'A glowing anniversary table featuring hundreds of wax candles on deep navy velvet overlays.'
  },
  {
    id: 'g4',
    title: 'Glass House Ring Ceremony',
    category: 'Engagements',
    image: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=800&q=80',
    description: 'Modern botanical glasshouse design filled with cascading hanging orchids and clean gold chairs.'
  },
  {
    id: 'g5',
    title: 'Technological Showcase Dome',
    category: 'Product Launch Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'A futuristic launch featuring custom holographic projectors and circular audience pods.'
  },
  {
    id: 'g6',
    title: 'Sophisticated Bachelor Soirée',
    category: 'Birthday/Bachelor Party',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    description: 'A sleek modern penthouse bachelor dinner with cocktail mixologists and live ambient jazz.'
  },
  {
    id: 'g7',
    title: 'White Sands Lakeside Vows',
    category: 'Luxury Wedding Planner',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description: 'A striking minimalist lakeside ceremony outlined by geometric floral pillars and pristine white aisles.'
  },
  {
    id: 'g8',
    title: 'The Golden Milestone Banquet',
    category: 'Anniversaries',
    image: 'https://images.unsplash.com/photo-1502635670423-68d5431b9d5a?auto=format&fit=crop&w=800&q=80',
    description: '50th-anniversary dinner framed by bespoke brass accents, calligraphed menus, and elegant glassware.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Prithvi Raj Chauhan',
    role: 'VP of Marketing, OrangeCat Technologies',
    content: 'AngelsTouch orchestrated our international product launch flawlessly. The sheer attention to brand geometry and stage direction exceeded our highest expectations.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Vikram & Diya Roy',
    role: 'Luxury Wedding Clients',
    content: 'Anurag and his team turned our dream wedding into a breathtaking reality. The exquisite navy linens, pristine white installations, and calm coordination made our day magical.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Alka Singh',
    role: 'Private Collector',
    content: 'We engaged them for our 25th-anniversary celebration. Every detail—from the string quartet to the custom calligraphed placeholders—radiated sheer refinement and poise.',
    rating: 5
  }
];

export const FOUNDER_DATA = {
  name: 'Anurag Tomar',
  role: 'Founder & Managing Director',
  bio1: 'With over a 5 years of experience orchestrating high-concept corporate activations, grand-scale marriages, and bespoke private events, Anurag Tomar founded AngelsTouch Events with a singular, unyielding vision: to elevate event production into an art form.',
  quote: '"We do not merely coordinate schedules or construct backdrops; we sculpt unforgettable, immersive experiences that reside forever in memory. Every detail, from the acoustics of a room to the geometry of the tablecloths, is selected to evoke emotion."',
  image: founderImage
};
