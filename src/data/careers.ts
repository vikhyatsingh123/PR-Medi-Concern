// Dummy job openings and perks — replace with real data.

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Medical Sales Representative",
    department: "Sales & Marketing",
    location: "Kathmandu Valley / Across Nepal",
    type: "Full-time",
    experience: "1–2 Years",
    summary:
      "Promote pharmaceutical products, develop relationships with doctors, pharmacies and healthcare professionals, and support business growth within assigned territories.",
    requirements: [
      "Bachelor's degree in Pharmacy, Science or a related field.",
      "Good communication and negotiation skills.",
      "Pharmaceutical sales experience preferred.",
      "Ability to achieve sales targets and develop market relationships.",
    ],
  },
  {
    id: "j2",
    title: "Warehouse & Inventory Executive",
    department: "Warehouse & Supply Chain",
    location: "Lalitpur, Nepal",
    type: "Full-time",
    experience: "1–3 years",
    summary:
      "Manage daily warehouse operations, maintain inventory records, monitor product batches and expiry dates, and ensure proper storage and handling of pharmaceutical products.",
    requirements: [
      "Bachelor's degree or relevant qualification.",
      "Experience in warehouse or inventory management preferred.",
      "Knowledge of stock management and documentation.",
      "Good organizational and coordination skills.",
    ],
  },
  {
    id: "j6",
    title: "Supply Chain Intern",
    department: "Supply Chain",
    location: "Kathmandu Valley / Across Nepal",
    type: "Internship",
    experience: "Fresher",
    summary:
      "Support procurement, inventory and dispatch planning for a 6-month internship.",
    requirements: [
      "MBA / BBA (final year)",
      "Proficiency in Excel",
      "Curious and detail oriented",
    ],
  },
];
export const jobDepartments = [
  "All",
  ...Array.from(new Set(jobs.map((j) => j.department))),
];

export const hiringSteps = [
  {
    title: "Apply online",
    text: "Send your resume through the form below or by email.",
  },
  {
    title: "Screening call",
    text: "A quick conversation with our HR team to understand your goals.",
  },
  {
    title: "Technical interview",
    text: "Meet the hiring manager and team for a role-specific discussion.",
  },
  {
    title: "Offer & onboarding",
    text: "Receive your offer and join a structured induction programme.",
  },
];
