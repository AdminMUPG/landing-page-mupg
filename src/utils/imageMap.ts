// Map product brand codes and product names to their image paths
// Using the new structured folders under /public/assets
export const productImageMap: Record<string, string> = {
  // Anesthesia (brand codes)
  'ATRACARE-STAR': '/assets/Anesthesia/Atracurium Besilate (ATRACARE-STAR).png',
  BUPISTAR: '/assets/Anesthesia/Bupivacaine HCl (BUPISTAR).png',
  XYFOL: '/assets/Anesthesia/Propofol (XYFOL).png',
  PROFOSTAR: '/assets/Pharmaceuticals/General Anesthetic/PROFOSTAR (1).png',
  SEVOTANE: '/assets/Anesthesia/Sevoflurane (SEVOTANE).png',

  // Prescription drugs (brand codes)
  NOREPHSTAR: '/assets/Prescription Drugs/Norepinephrine.png',
  CETASTAR: '/assets/Prescription Drugs/Paracetamol.png',
  'TAZASTAR-2.25': '/assets/Prescription Drugs/Piperacillin + Tazobactam (TAZASTAR-2.25).png',
  'TAZASTAR-4.5': '/assets/Prescription Drugs/Piperacillin + Tazobactam (TAZASTAR-4.5).png',
  RANEXSTAR: '/assets/Prescription Drugs/Tranexamic Acid (RANEXSTAR).png',
  'GADEX-STAR': '/assets/Prescription Drugs/Sugammadex (GADEX-STAR).png',

  // Food Supplements (brand codes)
  MUFITEK: '/assets/Upcoming Food Supplements/MUFITEK.JPG',
  'ERCEMED-2B': '/assets/Upcoming Food Supplements/ERCEMED 2billion.JPG',
  'ERCEMED-4B': '/assets/Upcoming Food Supplements/ERCEMED 4billion.JPG',
  MUFISITOL: '/assets/Upcoming Food Supplements/MUFISITOL.png',

  // Map product names to images for products without brand codes
  'Hydrocortisone (as sodium succinate) 100mg':
    '/assets/Prescription Drugs/Hydrocortisone (as sodium succinate) 100mg, vial.png',
  'Sevoflurane Vaporizer Machine and Adaptor':
    '/assets/Medical Supplies and Device/Sevoflurane Vaporizer Machine and Adaptor.png',
  'Hospital Supplies: Syringes, Gloves':
    '/assets/Medical Supplies and Device/Hospital Supplies Syringes, Gloves.png',
};

// Default product placeholder (use a clean branded anesthesia image)
export const defaultProductImage = '/assets/Anesthesia/Propofol (XYFOL).png';

// Other images
export const imagePaths = {
  logo: '/assets/Logo/TSP-Official-LOGO.png',
  hero: '/assets/Group Picture/Pic 1.jpg',
  warehouse: '/assets/Warehouse and Office/Pic 2.jpg',
  warehouseAlt: '/assets/Warehouse and Office/Regalia.jpg',
  careers: '/assets/Group Picture/Pic 4.jpg',
  map: '/assets/Warehouse and Office/Regalia.jpg',
  groupPicture1: '/assets/Group Picture/Pic 1.jpg',
  groupPicture2: '/assets/Group Picture/Pic 5.jpg',
  groupPicture3: '/assets/Group Picture/Pic 6.jpg',
};

export function getProductImage(brandCode?: string, productName?: string): string {
  // First try brand code
  if (brandCode && productImageMap[brandCode]) {
    return productImageMap[brandCode];
  }
  // Then try product name
  if (productName && productImageMap[productName]) {
    return productImageMap[productName];
  }
  // Fallback to default
  return defaultProductImage;
}
