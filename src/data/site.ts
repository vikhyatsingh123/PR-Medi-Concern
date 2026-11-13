import { IMG } from "./images";

// All text below is dummy content — replace with real company details.

export const site = {
  name: "PR Medi Concern",
  short: "PR Medi",
  tagline: "Caring for health, committed to quality.",
  phone: "+977 9818366038",
  phoneHref: "tel:+9979818366038",
  email: "info@prmediconcern.np",
  address: "MahaLaxmi-2, Tikathali, Lalitpur, Kathmandu, Nepal",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  mapQuery: "MahaLaxmi-2, Tikathali, Lalitpur, Kathmandu, Nepal",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export const inquiryTypes = [
  "Pharmaceutical Product Distribution",
  "Import & Regulatory Coordination",
  "New Business Partnership",
  "Product Registration Support",
  "Marketing & Market Access",
  "Other Business Enquiries",
];

export const stats = [
  { value: 40, suffix: "+", label: "Stockists & Distributors" },
  { value: 2000, suffix: "+", label: "Retail networks" },
  { value: 500, suffix: "+", label: "Commercial formulations" },
  { value: 10, suffix: "L+", label: "Customers served" },
];

export const certifications = [
  "WHO-GMP",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "FSSAI",
  "NABL Accredited Lab",
  "GLP Compliant",
];

export const testimonials = [
  {
    quote:
      "PR Medi Concern has been a dependable manufacturing partner for us. Batch consistency and on-time delivery are exactly what we need at scale.",
    name: "Dr. Anil Mehta",
    role: "Head of Procurement, Sample Pharma Ltd.",
  },
  {
    quote:
      "Their regulatory and quality teams made our product launches smooth. Documentation is thorough and the communication is always transparent.",
    name: "Neha Kapoor",
    role: "Director – Operations, Example Lifesciences",
  },
  {
    quote:
      "From formulation development to packaging, everything is handled under one roof. It has cut our time to market significantly.",
    name: "Rohit Sharma",
    role: "Founder, DemoCare Wellness",
  },
];

export const timeline = [
  {
    year: "2008",
    title: "Shiva Shai - The Beginning",
    text: "Our business journey began with Shiva Shai, laying the foundation for our entrepreneurial experience and understanding of the pharmaceutical business.",
  },
  {
    year: "2012",
    title: "PR Medi Enterprises — Business Expansion",
    text: "The next phase of our journey strengthened our involvement in pharmaceutical trading and distribution, building valuable business relationships and market experience.",
  },
  {
    year: "2016",
    title: "PR Medi Concern Pvt. Ltd. — A New Chapter",
    text: "Building on our business experience, PR Medi Concern Pvt. Ltd. developed its focus on pharmaceutical imports and distribution, serving the healthcare market in Nepal.",
  },
  {
    year: "2020",
    title: "Expanding Our Nationwide Reach",
    text: "Today, our distribution network connects 40+ stockists and distributors with more than 2,000 retail outlets across all seven provinces of Nepal, supported by warehousing and cold-chain handling capabilities.",
  },
];

export const news = [
  {
    category: "Company",
    date: "12 Oct 2026",
    title:
      "PR Medi Concern opens new oral solids block with 40% higher capacity",
    image: IMG.facility,
  },
  {
    category: "Quality",
    date: "28 Sep 2026",
    title:
      "Our Panchkula plant clears WHO-GMP re-certification audit with zero critical observations",
    image: IMG.tubes,
  },
  {
    category: "Industry",
    date: "05 Sep 2026",
    title:
      "Why backward integration is becoming the backbone of reliable pharma supply",
    image: IMG.pharmacy,
  },
];

export const team = [
  { name: "Prakash Rao", role: "Founder & Chairman", image: IMG.team1 },
  { name: "Rekha Rao", role: "Managing Director", image: IMG.team2 },
  {
    name: "Dr. Sameer Joshi",
    role: "Head – Research & Development",
    image: IMG.team3,
  },
  { name: "Anita Verma", role: "Head – Quality Assurance", image: IMG.team4 },
];
