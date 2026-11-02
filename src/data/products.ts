// Dummy product catalogue — replace with real products (or load from an API).

export const productCategories = [
  'Tablets',
  'Capsules',
  'Syrups & Suspensions',
  'Injectables',
  'Ointments & Creams',
  'Nutraceuticals',
] as const

export type ProductCategory = (typeof productCategories)[number]

export interface Product {
  id: string
  name: string
  composition: string
  category: ProductCategory
  pack: string
  area: string
}

export const products: Product[] = [
  { id: 'p01', name: 'Paracure 500', composition: 'Paracetamol IP 500 mg', category: 'Tablets', pack: '10 x 10 Alu-Alu', area: 'Analgesic / Antipyretic' },
  { id: 'p02', name: 'Azithro-PR 500', composition: 'Azithromycin IP 500 mg', category: 'Tablets', pack: '1 x 3 Blister', area: 'Anti-infective' },
  { id: 'p03', name: 'Cetrizen-D', composition: 'Cetirizine HCl 10 mg + Phenylephrine 5 mg', category: 'Tablets', pack: '10 x 10 Blister', area: 'Anti-allergic' },
  { id: 'p04', name: 'Metformin PR 500 SR', composition: 'Metformin HCl IP 500 mg (SR)', category: 'Tablets', pack: '10 x 15 Blister', area: 'Anti-diabetic' },
  { id: 'p05', name: 'Pantoprime-DSR', composition: 'Pantoprazole 40 mg + Domperidone 30 mg SR', category: 'Capsules', pack: '10 x 10 Alu-Alu', area: 'Gastroenterology' },
  { id: 'p06', name: 'Omepra-20', composition: 'Omeprazole IP 20 mg', category: 'Capsules', pack: '10 x 10 Strip', area: 'Gastroenterology' },
  { id: 'p07', name: 'Doxy-PR 100', composition: 'Doxycycline Hydrochloride IP 100 mg', category: 'Capsules', pack: '10 x 10 Alu-Alu', area: 'Anti-infective' },
  { id: 'p08', name: 'Coughrelief Plus', composition: 'Ambroxol 30 mg + Levosalbutamol 1 mg / 5 ml', category: 'Syrups & Suspensions', pack: '100 ml bottle', area: 'Respiratory' },
  { id: 'p09', name: 'Ferrovit Syrup', composition: 'Ferrous Ascorbate + Folic Acid / 5 ml', category: 'Syrups & Suspensions', pack: '200 ml bottle', area: 'Haematinic' },
  { id: 'p10', name: 'Cefix-PR DS', composition: 'Cefixime IP 100 mg / 5 ml dry suspension', category: 'Syrups & Suspensions', pack: '30 ml bottle', area: 'Anti-infective' },
  { id: 'p11', name: 'Ceftri-PR 1 g', composition: 'Ceftriaxone Sodium IP 1 g', category: 'Injectables', pack: '1 vial + WFI', area: 'Anti-infective' },
  { id: 'p12', name: 'Diclo-PR Inj', composition: 'Diclofenac Sodium IP 75 mg / 3 ml', category: 'Injectables', pack: '5 x 3 ml ampoule', area: 'Analgesic' },
  { id: 'p13', name: 'Pantoprime IV', composition: 'Pantoprazole Sodium 40 mg', category: 'Injectables', pack: '1 vial', area: 'Gastroenterology' },
  { id: 'p14', name: 'Dermaclear Cream', composition: 'Clotrimazole IP 1% w/w', category: 'Ointments & Creams', pack: '15 g tube', area: 'Dermatology' },
  { id: 'p15', name: 'Painfree Gel', composition: 'Diclofenac Diethylamine 1.16% w/w', category: 'Ointments & Creams', pack: '30 g tube', area: 'Topical analgesic' },
  { id: 'p16', name: 'Wound-Heal Ointment', composition: 'Povidone Iodine IP 5% w/w', category: 'Ointments & Creams', pack: '20 g tube', area: 'Antiseptic' },
  { id: 'p17', name: 'ImmunoPlus', composition: 'Vitamin C + Zinc + Vitamin D3', category: 'Nutraceuticals', pack: '10 x 10 Tablets', area: 'Immunity' },
  { id: 'p18', name: 'Ortho-Cal Gold', composition: 'Calcium Citrate + Vitamin D3 + Vitamin K2', category: 'Nutraceuticals', pack: '10 x 15 Tablets', area: 'Bone health' },
  { id: 'p19', name: 'Neurovit Forte', composition: 'Methylcobalamin + Alpha Lipoic Acid + Folic Acid', category: 'Nutraceuticals', pack: '10 x 10 Capsules', area: 'Neuro care' },
  { id: 'p20', name: 'Ashwa-PR Ayurvedic', composition: 'Ashwagandha Extract 300 mg', category: 'Nutraceuticals', pack: '60 Capsules bottle', area: 'Stress & wellness' },
]
