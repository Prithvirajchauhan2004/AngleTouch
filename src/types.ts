export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  priceRange: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export type InquiryStatus = 'New' | 'In Progress' | 'Confirmed' | 'Archived';

export interface BookingInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  eventDate: string;
  guestCount: number;
  details: string;
  status: InquiryStatus;
  submittedAt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
