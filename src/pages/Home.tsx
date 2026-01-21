import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Package, Stethoscope, Shield, Heart } from 'lucide-react';
import Section from '../components/Section';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import MagicBento from '../components/MagicBento';
import { createTwostarBentoItems } from '../data/tspBento';
import DomeGallery from '../components/DomeGallery';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { companyData, products, productCategories } from '../data/tsp';
import { imagePaths } from '../utils/imageMap';

export default function Home() {
  // FAQ data
  const faqItems = [
    {
      question: 'What services does Medica Uno offer?',
      answer: 'We specialize in wholesale distribution, importation, and ethical marketing of pharmaceutical products including anesthesia medicines, prescription drugs, and medical supplies. Our services include efficient distribution networks, product support, and building strong relationships with healthcare professionals across the Philippines.'
    },
    {
      question: 'Do you serve both private and government healthcare institutions?',
      answer: 'Yes, we work with a diverse network of clients including private hospitals, government hospitals, local government units, drugstores, pharmacies, and independent distributors. We are committed to making quality pharmaceutical products accessible across all healthcare sectors.'
    },
    {
      question: 'What product categories do you distribute?',
      answer: 'We distribute three main categories: Anesthesia products (including general anesthetics, local anesthetics, and muscle relaxants), Prescription Drugs (antibiotics, emergency medicines, pain management, and more), and Medical Supplies/Devices (hospital supplies, laboratory equipment, and orthopedic supplies).'
    },
    {
      question: 'Where are your facilities located?',
      answer: 'We operate from two strategic locations: our main office with warehouse in Rodriguez, Rizal and a satellite office in Amityville Subd., San Jose, Rodriguez, Rizal. This dual-location setup allows us to efficiently serve healthcare institutions across the Philippines.'
    },
    {
      question: 'How can I get started with my order?',
      answer: 'You can contact us through our contact page or reach out directly to discuss your pharmaceutical product needs. Our team will work with you to understand your requirements and provide competitive pricing and reliable delivery options.'
    }
  ];

  // Testimonials data with group pictures
  const testimonials = [
    {
      name: 'Healthcare Professional',
      role: 'Chief Pharmacist',
      company: 'Private Hospital Network',
      image: '/assets/Group Picture/Pic 1.jpg',
      text: 'Twostar Pharmaceutical has been a reliable partner in ensuring our hospital has consistent access to high-quality anesthesia and prescription medicines. Their ethical marketing approach and commitment to service excellence make them stand out.',
    },
    {
      name: 'Hospital Administrator',
      role: 'Administrator',
      company: 'Government Hospital',
      image: '/assets/Group Picture/Pic 4.jpg',
      text: 'Working with Twostar has streamlined our pharmaceutical procurement process. Their distribution network is efficient, and their team is always responsive to our needs. Highly recommended for government healthcare institutions.',
    },
    {
      name: 'LGU Health Officer',
      role: 'Health Officer',
      company: 'Local Government Unit',
      image: '/assets/Group Picture/Pic 5.jpg',
      text: 'Twostar Pharmaceutical has been instrumental in helping us provide accessible healthcare to our community. Their commitment to affordable, quality medicines aligns perfectly with our mission to serve the public.',
    }
  ];

  const partnerGallery = [
    {
      src: '/assets/Clients Private/st dominic medical center.png',
      title: 'St. Dominic Medical Center',
      subtitle: 'Private'
    },
    {
      src: '/assets/Clients Private/Dela Salle Medical Center.webp',
      title: 'De La Salle Medical Center',
      subtitle: 'Private'
    },
    {
      src: '/assets/Clients Private/antipolo doctors.png',
      title: 'Antipolo Doctors Hospital',
      subtitle: 'Private'
    },
    {
      src: '/assets/Government/jose r reyes memorial medical center.png',
      title: 'Jose R. Reyes Memorial Medical Center',
      subtitle: 'Government'
    },
    {
      src: '/assets/Government/Western Visayas Medical Center.png',
      title: 'Western Visayas Medical Center',
      subtitle: 'Government'
    },
    {
      src: '/assets/Government/East Avenue Medical Center.png',
      title: 'East Avenue Medical Center',
      subtitle: 'Government'
    },
    {
      src: '/assets/Local Gov Units/Municipality of Rodriguez, Rizal.png',
      title: 'Municipality of Rodriguez, Rizal',
      subtitle: 'LGU'
    },
    {
      src: '/assets/Local Gov Units/Mindoro Occidental.png',
      title: 'Province of Occidental Mindoro',
      subtitle: 'LGU'
    },
    {
      src: '/assets/Local Gov Units/Municipality of Tanza Cavite.png',
      title: 'Municipality of Tanza, Cavite',
      subtitle: 'LGU'
    }
  ];

  const partnerImages = partnerGallery.map(p => ({
    src: p.src,
    alt: `${p.title} (${p.subtitle})`,
  }));

  return (
    <div>
      {/* Hero Section - Evolvion Style */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-white overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#6A63B6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#18B7A5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Badge/Announcement */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              <span className="w-2 h-2 bg-[#6A63B6] rounded-full animate-pulse"></span>
              Filipino-owned pharmaceutical import and distribution company
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Delivering on a Vision of
                <br />
                <span className="bg-gradient-to-r from-[#6A63B6] via-[#18B7A5] to-[#6A63B6] bg-clip-text text-transparent">
                  Accessible Wellness
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Leading pharmaceutical importer and distributor specializing in anesthesia, prescription medicines, and medical supplies for healthcare institutions across the Philippines
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-[#6A63B6] text-white px-8 py-4 rounded-lg hover:bg-[#554ea0] transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                View our products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#6A63B6] px-8 py-4 rounded-lg border-2 border-slate-200 hover:border-[#6A63B6] transition-all duration-200 font-medium text-lg"
              >
                Get a quote
              </Link>
            </div>

            {/* Trust Indicators with Partner Logos */}
            <div className="flex flex-col items-center gap-4 pt-12">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    // Private
                    '/assets/Clients Private/st dominic medical center.png',
                    '/assets/Clients Private/Dela Salle Medical Center.webp',
                    '/assets/Clients Private/antipolo doctors.png',
                    // Government
                    '/assets/Government/East Avenue Medical Center.png',
                    // LGU
                    '/assets/Local Gov Units/Municipality of Rodriguez, Rizal.png'
                  ].map((pic, i) => (
                    <img
                      key={i}
                      src={pic}
                      alt={`Team member ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm">Trusted by healthcare institutions nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group of Companies Section */}
      <Section className="bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            A Group of
            <br />
            <span className="bg-gradient-to-r from-[#6A63B6] via-[#18B7A5] to-[#6A63B6] bg-clip-text text-transparent">
              Companies
            </span>
          </h2>
          
          {/* Company Logos */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <div className="flex items-center justify-center">
              <img 
                src="/assets/Logo/MUF_LOGO__UPDATED_-removebg-preview.png" 
                alt="Medica Uno Farma" 
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/assets/Logo/Logo 2.png" 
                alt="Twostar Pharmaceutical Trading" 
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/assets/Logo/BIOMED-removebg-preview.png" 
                alt="Biomed" 
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* What is Twostar Section with Magic Bento */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Medica Uno in a
            <br />
            <span className="bg-gradient-to-r from-[#6A63B6] via-[#18B7A5] to-[#6A63B6] bg-clip-text text-transparent">
              Glance
            </span>
          </h2>
        </div>

        {/* Magic Bento Grid */}
        <div className="flex justify-center">
          <MagicBento
            className="max-w-6xl w-full"
            items={createTwostarBentoItems()}
          />
        </div>
      </Section>

      {/* Who We Are Section */}
      <Section className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text on Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {companyData.whoWeAre}
              </p>
            </div>
            {/* Group Picture on Right */}
            <div>
              <ImagePlaceholder
                src={imagePaths.groupPicture1}
                alt="Twostar Pharmaceutical team"
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services & Quality & Compliance Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            Drug Distributor / Wholesaler / Importer
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card hover>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#6A63B6] rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Wholesale and Distribution</h3>
              <p className="text-slate-600">
                Efficient distribution network serving healthcare institutions nationwide. We ensure timely delivery and consistent supply of pharmaceutical products to hospitals, clinics, and pharmacies.
              </p>
            </div>
          </Card>
          <Card hover>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#18B7A5] rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Ethical Marketing</h3>
              <p className="text-slate-600">
                Building strong relationships with healthcare professionals through ethical marketing practices. We provide product support and education to ensure proper use of our pharmaceutical solutions.
              </p>
            </div>
          </Card>
        </div>
        
        {/* Quality & Compliance */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Quality & Compliance
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Committed to the highest standards in pharmaceutical distribution
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {companyData.certifications.map((cert, index) => (
            <Card key={index} className="flex items-center gap-3 px-6 py-4">
              <Shield className="w-6 h-6 text-[#6A63B6]" />
              <span className="font-semibold text-slate-900">{cert}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Products Preview Section */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive pharmaceutical solutions for healthcare professionals
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {[
            { category: 'ANESTHESIA', icon: Stethoscope, count: products.filter(p => p.category === 'ANESTHESIA').length },
            { category: 'PRESCRIPTION_DRUGS', icon: Package, count: products.filter(p => p.category === 'PRESCRIPTION_DRUGS').length },
            { category: 'MEDICAL_SUPPLIES', icon: Building2, count: products.filter(p => p.category === 'MEDICAL_SUPPLIES').length },
            { category: 'FOOD_SUPPLEMENTS', icon: Heart, count: products.filter(p => p.category === 'FOOD_SUPPLEMENTS').length }
          ].map(({ category, icon: Icon, count }) => (
            <Card key={category} hover>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6A63B6] to-[#18B7A5] rounded-xl flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {productCategories[category as keyof typeof productCategories]}
                </h3>
                <p className="text-slate-600 text-sm">
                  {count} products available
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#0F253A] text-white px-8 py-3 rounded-lg hover:bg-[#1a3a52] transition-colors font-medium"
          >
            See Full Catalog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>

      {/* Facilities Section */}
      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Facilities
          </h2>
          <p className="text-lg text-slate-600">
            Strategically located facilities for efficient nationwide distribution
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <div className="space-y-4">
              <ImagePlaceholder
                src={imagePaths.warehouse}
                alt="Main office with warehouse in Rodriguez, Rizal"
                aspectRatio="video"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Main Office with Warehouse</h3>
                <p className="text-slate-600">{companyData.locations.warehouse}</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="space-y-4">
              <ImagePlaceholder
                src={imagePaths.warehouseAlt}
                alt="Satellite Office in Quezon City"
                aspectRatio="video"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Satellite Office</h3>
                <p className="text-slate-600">{companyData.locations.satelliteOffice}</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services Scroll Section */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Complete Pharmaceutical Solutions
          </h2>
          <p className="text-lg text-slate-600">
            We specialize in anesthesia products, prescription medicines, and medical supplies for comprehensive healthcare support
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {['Anesthesia Products', 'Prescription Medicines', 'Medical Supplies', 'Hospital Equipment', 'Laboratory Supplies', 'Emergency Medicines'].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium whitespace-nowrap"
              >
                {service}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {['Anesthesia Products', 'Prescription Medicines', 'Medical Supplies', 'Hospital Equipment', 'Laboratory Supplies', 'Emergency Medicines'].map((service, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-slate-100 rounded-full text-slate-700 font-medium whitespace-nowrap"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-slate-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Partners Gallery
          </h2>
          <p className="text-lg text-slate-600">
            A glimpse of our private, government, and LGU partners
          </p>
        </div>
        <div className="h-[480px] md:h-[600px]">
          <DomeGallery
            images={partnerImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Some of Our Partners Say
          </h2>
          <p className="text-lg text-slate-600">
            With partnerships across private hospitals, government institutions, and local government units, we deliver proven, high-quality pharmaceutical solutions for healthcare providers across every sector
          </p>
        </div>
        <Testimonials testimonials={testimonials} />
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQ items={faqItems} />
      </Section>
    </div>
  );
}
