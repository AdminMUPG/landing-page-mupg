import { CheckCircle, Building2, MapPin, Calendar, Target } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { companyData } from '../data/tsp';
import { imagePaths } from '../utils/imageMap';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-blue-50 to-sky-50">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Twostar Pharmaceutical Trading
          </h1>
          <p className="text-lg text-slate-600">
            {companyData.description}
          </p>
        </div>
      </Section>


      {/* Company Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Twostar Pharmaceutical Trading (TSP) is a Filipino-owned pharmaceutical company dedicated to making quality healthcare accessible across the Philippines. We specialize in the distribution, marketing, and importation of branded and generic pharmaceutical products, with a particular focus on anesthesia and prescription medicines.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our commitment to excellence and our extensive network of partners enable us to serve healthcare institutions, from major hospitals to local government health centers, ensuring that essential medicines reach those who need them most.
            </p>
          </div>
        </div>
      </Section>

      {/* People & Places */}
      <Section className="bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              The People Behind Twostar
            </h2>
            <p className="text-slate-600">
              A glimpse of our team and the environments where we work and serve our partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ImagePlaceholder
              src="/assets/Group Picture/Pic 1.jpg"
              alt="Twostar team group photo 1"
              aspectRatio="video"
            />
            <ImagePlaceholder
              src="/assets/Group Picture/Pic 4.jpg"
              alt="Twostar team group photo 2"
              aspectRatio="video"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ImagePlaceholder
              src="/assets/Warehouse and Office/Pic 2.jpg"
              alt="Warehouse operations"
              aspectRatio="video"
            />
            <ImagePlaceholder
              src="/assets/Warehouse and Office/Pic 3.jpg"
              alt="Warehouse and storage area"
              aspectRatio="video"
            />
            <ImagePlaceholder
              src="/assets/Warehouse and Office/Pic 11.jpg"
              alt="Office and meeting space"
              aspectRatio="video"
            />
          </div>
        </div>
      </Section>

      {/* Mission / Vision / Values */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Mission</h3>
              <p className="text-slate-600 leading-relaxed">{companyData.mission}</p>
            </div>
          </Card>
          
          <Card>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Vision</h3>
              <p className="text-slate-600 leading-relaxed">{companyData.vision}</p>
            </div>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {companyData.coreValues.map((value, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{value}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Group of Companies */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Group of Companies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {companyData.groupOfCompanies.map((company, index) => (
            <Card key={index} hover>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{company.name}</h3>
                <p className="text-slate-600">{company.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Locations */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Locations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Warehouse</h3>
                  <p className="text-slate-600">{companyData.locations.warehouse}</p>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Satellite Office</h3>
                  <p className="text-slate-600">{companyData.locations.satelliteOffice}</p>
                </div>
              </div>
            </Card>
          </div>
          
          <ImagePlaceholder 
            src={imagePaths.warehouse} 
            alt="Warehouse" 
            aspectRatio="video"
          />
        </div>
      </Section>

      {/* Company History / Timeline */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Company History</h2>
          <p className="text-lg text-slate-600">Our journey in the Philippine pharmaceutical industry</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {companyData.timeline.map((item, index) => (
            <Card key={index} className="relative pl-12">
              <div className="absolute left-6 top-6 w-3 h-3 bg-[#E6A91E] rounded-full border-4 border-white shadow-lg"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0F253A] rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#E6A91E]">{item.year}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.event}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Founders / Leadership */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership</h2>
          <p className="text-lg text-slate-600">The people behind Twostar Pharmaceutical</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyData.founders.map((founder, index) => (
            <Card key={index} hover>
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#E6A91E]">
                  <ImagePlaceholder
                    src={founder.photo || '/assets/Group Picture/Pic 1.jpg'}
                    alt={founder.name}
                    aspectRatio="square"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{founder.name}</h3>
                  <p className="text-slate-600">{founder.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Future Plans */}
      <Section>
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0F253A] to-[#B01E1E] rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Future Plans</h2>
          <p className="text-lg text-slate-600">Our vision for growth and expansion</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {companyData.futurePlans.map((plan, index) => (
              <Card key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#E6A91E] flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-lg">{plan}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Clients</h2>
          <p className="text-lg text-slate-600">Trusted by healthcare institutions across the Philippines</p>
        </div>
        
        <div className="space-y-12">
          {/* Private Hospitals */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Private Hospitals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyData.clients.private.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{client}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Government Hospitals */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Government Hospitals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyData.clients.government.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{client}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Local Government Units */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Local Government Units</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyData.clients.localGovtUnits.map((client, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{client}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
