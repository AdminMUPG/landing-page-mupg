export interface Company {
  name: string;
  description: string;
  motto: string;
  mission: string;
  vision: string;
  coreValues: string[];
  locations: {
    warehouse: string;
    satelliteOffice: string;
  };
  groupOfCompanies: {
    name: string;
    description: string;
  }[];
  services: string[];
  networks: string[];
  clients: {
    private: string[];
    government: string[];
    localGovtUnits: string[];
  };
  whoWeAre: string;
  founders: {
    name: string;
    role: string;
    photo?: string;
  }[];
  timeline: {
    year: string;
    event: string;
  }[];
  futurePlans: string[];
  certifications: string[];
}

export interface Product {
  id: string;
  name: string;
  brandCode?: string;
  category: 'ANESTHESIA' | 'PRESCRIPTION_DRUGS' | 'MEDICAL_SUPPLIES' | 'FOOD_SUPPLEMENTS';
}

export const companyData: Company = {
  name: 'Medica Uno Farma Int\'l Traders Corp.',
  description: 'Filipino-owned pharmaceutical company in the Philippines focused on the importation, distribution, and marketing of branded and generic pharmaceutical products including anesthesia and prescription medicines.',
  motto: 'Delivering on a Vision of Accessible Wellness',
  mission: 'To empower Filipino patients and healthcare professionals by delivering consistent access to high-quality, affordable pharmaceutical products through trusted importation and distribution channels that support effective and sustainable treatment outcomes.',
  vision: 'To be a trusted leader in the Philippine pharmaceutical industry—enhancing the quality of life of Filipinos through accessible and reliable medicines, and fostering long-term partnerships with medical professionals built on integrity, loyalty, and shared success.',
  coreValues: [
    'Transparency & Integrity',
    'Service & Reliability',
    'Passion & Persistence'
  ],
  whoWeAre: 'Medica Uno Farma Int\'l Traders Corp. is a 100% Filipino-owned pharmaceutical company committed to improving healthcare access in the Philippines. We specialize in the importation, distribution, and marketing of branded and generic pharmaceutical products, with a particular focus on anesthesia and prescription medicines. Our extensive network enables us to serve healthcare institutions nationwide—from major hospitals to local government health centers—ensuring that essential medicines reach those who need them most.',
  locations: {
    warehouse: 'Rodriguez, Rizal',
    satelliteOffice: 'TSP Bldg., PH1, B5, Lot 1-2, Amityville Subd., San Jose, Rodriguez, Rizal'
  },
  groupOfCompanies: [
    {
      name: 'Medica Uno Farma Int\'l Traders Corp.',
      description: 'Importation and distribution of generic pharmaceuticals, food supplements, and medical devices'
    },
    {
      name: 'Twostar Pharmaceutical Trading',
      description: 'Distribution and marketing of affordable branded/generic pharma products with focus on anesthesia and prescription medicines'
    }
  ],
  services: [
    'Wholesale and Distribution',
    'Ethical Marketing'
  ],
  networks: [
    'Government Hospitals',
    'Local Government Units / Health Centers',
    'Private Hospitals',
    'Drugstores and Pharmacies',
    'Independent Distributors / Wholesalers'
  ],
  clients: {
    private: [
      'De La Salle University Medical Center',
      'New Era General Hospital',
      'Providence Hospital',
      'Mission Hospital',
      'Antipolo Doctors Hospital',
      'Clinica Antipolo and Wellness',
      'GMF Hospital',
      'H Vill Hospital',
      'La Consolacion Hospital',
      'Dr. Yanga\'s General Hospital',
      'Ortigas Hospital and Medical Center',
      'St. Dominic Medical Center'
    ],
    government: [
      'Armed Forces of the Philippines (CGEASH) – Camp General',
      'Jose R. Reyes Memorial Medical Center',
      'Emilio Aguinaldo Station Hospital',
      'East Avenue Medical Center',
      'Western Visayas Medical Center',
      'Cavite City General',
      'PNP Hospital',
      'Cainta Municipal Hospital',
      'Dr. Jose Rodriguez Memorial Hospital',
      'Casiguran General Hospital',
      'Pasig City General Hospital'
    ],
    localGovtUnits: [
      'Municipality of Rodriguez, Rizal',
      'Municipality of Tanza, Cavite',
      'Municipality of Cainta, Rizal',
      'Municipality of Occidental Mindoro',
      'Municipality of Cavite City, Cavite'
    ]
  },
  founders: [
    {
      name: 'Jolah B. Hernaez',
      role: 'President, Head of Finance',
      photo: '/assets/Group Picture/Pic 1.jpg' // Placeholder - replace with actual photo
    },
    {
      name: 'Leonard C. Hernaez',
      role: 'Vice President, National Sales Manager',
      photo: '/assets/Group Picture/Pic 4.jpg' // Placeholder - replace with actual photo
    }
  ],
  timeline: [
    {
      year: '2019',
      event: 'Twostar Pharmaceutical Trading (TSP) established, focusing on distribution and marketing of pharmaceutical products'
    },
    {
      year: '2022',
      event: 'Medica Uno Farma Int\'l Traders Corp. (MUF) established, expanding operations to include importation and distribution'
    }
  ],
  futurePlans: [
    'Grow medicines supply to government programs',
    'Expand wholesale network across the Philippines',
    'Strengthen importer and distributor role in the pharmaceutical industry',
    'Possible expansion into medical devices and equipment'
  ],
  certifications: [
    'FDA Registered Products',
    'GMP Certified',
    'Certified Distributor'
  ]
};

export const products: Product[] = [
  // ANESTHESIA
  { id: '1', name: 'Atracurium Besilate', brandCode: 'ATRACARE-STAR', category: 'ANESTHESIA' },
  { id: '2', name: 'Bupivacaine HCl', brandCode: 'BUPISTAR', category: 'ANESTHESIA' },
  { id: '3', name: 'Propofol', brandCode: 'XYFOL', category: 'ANESTHESIA' },
  { id: '4', name: 'Propofol', brandCode: 'PROFOSTAR', category: 'ANESTHESIA' },
  { id: '5', name: 'Sevoflurane', brandCode: 'SEVOTANE', category: 'ANESTHESIA' },
  
  // PRESCRIPTION DRUGS
  { id: '6', name: 'Hydrocortisone (as sodium succinate) 100mg', category: 'PRESCRIPTION_DRUGS' },
  { id: '7', name: 'Norepinephrine', brandCode: 'NOREPHSTAR', category: 'PRESCRIPTION_DRUGS' },
  { id: '8', name: 'Paracetamol', brandCode: 'CETASTAR', category: 'PRESCRIPTION_DRUGS' },
  { id: '9', name: 'Piperacillin + Tazobactam', brandCode: 'TAZASTAR-2.25', category: 'PRESCRIPTION_DRUGS' },
  { id: '10', name: 'Piperacillin + Tazobactam', brandCode: 'TAZASTAR-4.5', category: 'PRESCRIPTION_DRUGS' },
  { id: '11', name: 'Tranexamic Acid', brandCode: 'RANEXSTAR', category: 'PRESCRIPTION_DRUGS' },
  { id: '12', name: 'Sugammadex', brandCode: 'GADEX-STAR', category: 'PRESCRIPTION_DRUGS' },
  
  // MEDICAL SUPPLIES/DEVICE
  { id: '13', name: 'Sevoflurane Vaporizer Machine and Adaptor', category: 'MEDICAL_SUPPLIES' },
  { id: '14', name: 'Hospital Supplies: Syringes, Gloves', category: 'MEDICAL_SUPPLIES' },
  // Temporarily hidden
  // { id: '15', name: 'Laboratory and Diagnostics', category: 'MEDICAL_SUPPLIES' },
  // { id: '16', name: 'Orthopedic Supplies', category: 'MEDICAL_SUPPLIES' },
  
  // UPCOMING FOOD SUPPLEMENTS
  { id: '17', name: 'Mufitek', brandCode: 'MUFITEK', category: 'FOOD_SUPPLEMENTS' },
  { id: '18', name: 'Ercemed', brandCode: 'ERCEMED-2B', category: 'FOOD_SUPPLEMENTS' },
  { id: '19', name: 'Ercemed', brandCode: 'ERCEMED-4B', category: 'FOOD_SUPPLEMENTS' },
  { id: '20', name: 'Mufisitol', brandCode: 'MUFISITOL', category: 'FOOD_SUPPLEMENTS' }
];

export const productCategories = {
  ANESTHESIA: 'Anesthesia',
  PRESCRIPTION_DRUGS: 'Prescription Drugs',
  MEDICAL_SUPPLIES: 'Medical Supplies/Device',
  FOOD_SUPPLEMENTS: 'Upcoming Food Supplements'
};
