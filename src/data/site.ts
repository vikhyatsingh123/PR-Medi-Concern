import { IMG } from './images'

// All text below is dummy content — replace with real company details.

export const site = {
  name: 'PR Medi Concern',
  short: 'PR Medi',
  tagline: 'Caring for health, committed to quality.',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'info@prmediconcern.com',
  address: 'Plot 24, Industrial Area Phase II, Panchkula, Haryana 134113, India',
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM',
  mapQuery: 'Industrial Area Phase 2, Panchkula, Haryana',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Careers', to: '/careers' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]

export const inquiryTypes = [
  'Domestic formulation supply',
  'Export formulation supply',
  'Contract manufacturing (CDMO)',
  'Third-party / loan licence',
  'API & intermediates',
  'General inquiry',
]

export const stats = [
  { value: 5, suffix: '', label: 'Manufacturing facilities' },
  { value: 2.5, suffix: 'B+', label: 'Units annual capacity', decimals: 1 },
  { value: 500, suffix: '+', label: 'Commercial formulations' },
  { value: 1200, suffix: '+', label: 'Customers served' },
]

export const certifications = [
  'WHO-GMP',
  'ISO 9001:2015',
  'ISO 14001:2015',
  'FSSAI',
  'NABL Accredited Lab',
  'GLP Compliant',
]

export const testimonials = [
  {
    quote:
      'PR Medi Concern has been a dependable manufacturing partner for us. Batch consistency and on-time delivery are exactly what we need at scale.',
    name: 'Dr. Anil Mehta',
    role: 'Head of Procurement, Sample Pharma Ltd.',
  },
  {
    quote:
      'Their regulatory and quality teams made our product launches smooth. Documentation is thorough and the communication is always transparent.',
    name: 'Neha Kapoor',
    role: 'Director – Operations, Example Lifesciences',
  },
  {
    quote:
      'From formulation development to packaging, everything is handled under one roof. It has cut our time to market significantly.',
    name: 'Rohit Sharma',
    role: 'Founder, DemoCare Wellness',
  },
]

export const timeline = [
  { year: '2008', title: 'Humble beginnings', text: 'Started as a small formulation unit with a team of 20 people.' },
  { year: '2012', title: 'WHO-GMP certification', text: 'Our first facility received WHO-GMP certification.' },
  { year: '2016', title: 'Nutraceutical division', text: 'Launched a dedicated nutraceutical and Ayurvedic wing.' },
  { year: '2020', title: 'Export expansion', text: 'Began supplying to over 15 countries across Asia and Africa.' },
  { year: '2024', title: 'R&D centre', text: 'Opened an in-house R&D and analytical development centre.' },
]

export const news = [
  {
    category: 'Company',
    date: '12 Oct 2026',
    title: 'PR Medi Concern opens new oral solids block with 40% higher capacity',
    image: IMG.facility,
  },
  {
    category: 'Quality',
    date: '28 Sep 2026',
    title: 'Our Panchkula plant clears WHO-GMP re-certification audit with zero critical observations',
    image: IMG.tubes,
  },
  {
    category: 'Industry',
    date: '05 Sep 2026',
    title: 'Why backward integration is becoming the backbone of reliable pharma supply',
    image: IMG.pharmacy,
  },
]

export const team = [
  { name: 'Prakash Rao', role: 'Founder & Chairman', image: IMG.team1 },
  { name: 'Rekha Rao', role: 'Managing Director', image: IMG.team2 },
  { name: 'Dr. Sameer Joshi', role: 'Head – Research & Development', image: IMG.team3 },
  { name: 'Anita Verma', role: 'Head – Quality Assurance', image: IMG.team4 },
]
