// Dummy job openings and perks — replace with real data.

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  summary: string
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Production Executive – Oral Solids',
    department: 'Manufacturing',
    location: 'Panchkula, Haryana',
    type: 'Full-time',
    experience: '2–4 years',
    summary: 'Run day-to-day production of tablets and capsules while following cGMP and SOPs.',
    requirements: ['B.Pharm / M.Sc. Chemistry', 'Experience with compression, coating and blistering lines', 'Good documentation discipline'],
  },
  {
    id: 'j2',
    title: 'QC Analyst – HPLC',
    department: 'Quality',
    location: 'Panchkula, Haryana',
    type: 'Full-time',
    experience: '1–3 years',
    summary: 'Perform in-process, finished product and stability testing in the NABL accredited lab.',
    requirements: ['M.Sc. / B.Pharm', 'Hands-on HPLC and GC experience', 'Knowledge of data integrity (ALCOA+)'],
  },
  {
    id: 'j3',
    title: 'Regulatory Affairs Associate',
    department: 'Regulatory',
    location: 'Chandigarh',
    type: 'Full-time',
    experience: '3–5 years',
    summary: 'Prepare and review dossiers for domestic and export registrations.',
    requirements: ['M.Pharm / B.Pharm', 'CTD / ACTD dossier experience', 'Strong written communication'],
  },
  {
    id: 'j4',
    title: 'Formulation Scientist (R&D)',
    department: 'Research & Development',
    location: 'Panchkula, Haryana',
    type: 'Full-time',
    experience: '4–7 years',
    summary: 'Develop and scale up new oral and topical formulations from lab to commercial batch.',
    requirements: ['M.Pharm (Pharmaceutics)', 'QbD and DoE experience', 'Tech-transfer exposure'],
  },
  {
    id: 'j5',
    title: 'Area Sales Manager',
    department: 'Sales & Marketing',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '5–8 years',
    summary: 'Grow institutional and distributor business across the region.',
    requirements: ['Graduate (B.Pharm preferred)', 'Proven pharma sales track record', 'Willingness to travel'],
  },
  {
    id: 'j6',
    title: 'Supply Chain Intern',
    department: 'Supply Chain',
    location: 'Panchkula, Haryana',
    type: 'Internship',
    experience: 'Fresher',
    summary: 'Support procurement, inventory and dispatch planning for a 6-month internship.',
    requirements: ['MBA / BBA (final year)', 'Proficiency in Excel', 'Curious and detail oriented'],
  },
]

export const jobDepartments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))]

export const hiringSteps = [
  { title: 'Apply online', text: 'Send your resume through the form below or by email.' },
  { title: 'Screening call', text: 'A quick conversation with our HR team to understand your goals.' },
  { title: 'Technical interview', text: 'Meet the hiring manager and team for a role-specific discussion.' },
  { title: 'Offer & onboarding', text: 'Receive your offer and join a structured induction programme.' },
]
