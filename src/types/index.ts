export type ScreenType = 
  | 'home' 
  | 'services' 
  | 'estimator'
  | 'deep-cleaning' 
  | 'locations' 
  | 'why-us' 
  | 'testimonials' 
  | 'faqs' 
  | 'contact' 
  | 'my-bookings';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  unit: string;
  duration: string;
  teamSize: string;
  icon: string;
  featured?: boolean;
  popularTag?: string;
  inclusions: string[];
  equipment: string[];
  chemicalType: string;
  variants?: {
    name: string;
    price: number;
    description: string;
  }[];
}

export interface CityHub {
  id: string;
  name: string;
  state: 'Telangana' | 'Andhra Pradesh';
  estYear: number;
  teamsCount: number;
  statusBadge: string;
  supervisorName: string;
  phone: string;
  coverageAreas: string[];
  depotAddress: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  city: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Process' | 'Chemicals' | 'Guarantee';
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  variant?: string;
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  address: string;
  date: string;
  timeSlot: string;
  addons: string[];
  totalAmount: number;
  status: 'Confirmed' | 'Supervisor Assigned' | 'In Progress' | 'Completed';
  supervisorName?: string;
  supervisorPhone?: string;
  createdAt: string;
  notes?: string;
}
