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
  category: 'PHARMACEUTICALS' | 'MEDICAL_SUPPLIES' | 'FOOD_SUPPLEMENTS';
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
    warehouse: 'TSP Bldg., PH1, B5, Lot 1-2, Amityville Subd., San Jose, Rodriguez, Rizal',
    satelliteOffice: 'The Regalia Towers 407C, 150 P Tuazon Blvd, Cubao, Quezon City'
  },
  groupOfCompanies: [
    {
      name: 'Medica Uno Farma Int\'l Traders Corp.',
      description:
        'Licensed pharmaceutical importing company committed to providing safe, high-quality, and affordable medicines to the local market. We source our products from reputable, compliant manufacturers and ensure strict adherence to regulatory standards, quality control, and proper storage and distribution practices. Our goal is to support healthcare providers and patients by ensuring a reliable supply of essential medicines.'
    },
    {
      name: 'Twostar Pharmaceutical Trading',
      description:
        'Company engaged in ethical pharmaceutical marketing, operating in compliance with FDA regulations and applicable industry codes of conduct. Committed to responsible promotion, accurate product information, and professional engagement with healthcare stakeholders to support safe and effective patient care.'
    },
    {
      name: 'Biomed International Traders Inc.',
      description: 'Importation and distribution of generic pharmaceuticals, food supplements, and medical devices'
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
  // MUF products first
  { id: '1', name: 'Hydrocortisone', brandCode: 'MUFCORT', category: 'PHARMACEUTICALS' },
  { id: '2', name: 'Mufitek', brandCode: 'MUFITEK', category: 'FOOD_SUPPLEMENTS' },
  { id: '3', name: 'Mufisitol', brandCode: 'MUFISITOL', category: 'FOOD_SUPPLEMENTS' },

  // Products with STAR at the end of the brand code
  { id: '4', name: 'Atracurium Besilate', brandCode: 'ATRACARE-STAR', category: 'PHARMACEUTICALS' },
  {
    id: '5',
    name: 'Bupivacaine HCl in 8% Dextrose',
    brandCode: 'BUPISTAR',
    category: 'PHARMACEUTICALS'
  },
  { id: '6', name: 'Sugammadex', brandCode: 'GADEX-STAR', category: 'PHARMACEUTICALS' },
  { id: '7', name: 'Tranexamic Acid', brandCode: 'RANEXSTAR', category: 'PHARMACEUTICALS' },
  { id: '8', name: 'Norepinephrine', brandCode: 'NOREPHSTAR', category: 'PHARMACEUTICALS' },
  { id: '9', name: 'Paracetamol', brandCode: 'CETASTAR', category: 'PHARMACEUTICALS' },
  { id: '10', name: 'Propofol', brandCode: 'PROFOSTAR', category: 'PHARMACEUTICALS' },
  {
    id: '11',
    name: 'Piperacillin + Tazobactam',
    brandCode: 'TAZASTAR-4.5',
    category: 'PHARMACEUTICALS'
  },
  {
    id: '12',
    name: 'Piperacillin + Tazobactam',
    brandCode: 'TAZASTAR-2.25',
    category: 'PHARMACEUTICALS'
  },

  // Remaining pharmaceuticals
  { id: '13', name: 'Propofol', brandCode: 'XYFOL', category: 'PHARMACEUTICALS' },
  { id: '14', name: 'Sevoflurane', brandCode: 'SEVOTANE', category: 'PHARMACEUTICALS' },

  // MEDICAL SUPPLIES/DEVICE
  { id: '15', name: 'Sevoflurane Vaporizer Machine and Adaptor', category: 'MEDICAL_SUPPLIES' },
  { id: '16', name: 'Hospital Supplies: Syringes, Gloves', category: 'MEDICAL_SUPPLIES' },
  // Temporarily hidden
  // { id: '17', name: 'Laboratory and Diagnostics', category: 'MEDICAL_SUPPLIES' },
  // { id: '18', name: 'Orthopedic Supplies', category: 'MEDICAL_SUPPLIES' },

  // UPCOMING FOOD SUPPLEMENTS (remaining)
  { id: '17', name: 'Ercemed', brandCode: 'ERCEMED-2B', category: 'FOOD_SUPPLEMENTS' },
  { id: '18', name: 'Ercemed', brandCode: 'ERCEMED-4B', category: 'FOOD_SUPPLEMENTS' }
];

export const productCategories = {
  PHARMACEUTICALS: 'Pharmaceuticals',
  MEDICAL_SUPPLIES: 'Medical Supplies/Device',
  FOOD_SUPPLEMENTS: 'Upcoming Food Supplements'
};
