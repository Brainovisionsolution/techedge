export interface Program {
  id: string;
  title: string;
  dates: string;
  timings: string;
  eligibility: string[];
  participationFee: number;
  hostCollegeFee: number;
  registrationLink: string;
  status: 'active' | 'upcoming' | 'completed';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  image: string;
}