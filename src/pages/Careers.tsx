import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { imagePaths } from '../utils/imageMap';

const openRoles = [
  'Sales Associate',
  'Regulatory Liaison',
  'Warehouse Staff',
  'Quality Assurance Specialist',
  'Distribution Coordinator',
  'Marketing Representative'
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-blue-50 to-sky-50">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            We're Hiring
          </h1>
          <p className="text-lg text-slate-600">
            Join our team and help us deliver accessible wellness across the Philippines
          </p>
        </div>
      </Section>

      {/* Image */}
      <Section>
        <div className="max-w-4xl mx-auto mb-12">
          <ImagePlaceholder 
            src={imagePaths.careers} 
            alt="Careers" 
            aspectRatio="wide"
          />
        </div>
      </Section>

      {/* Open Roles */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
          <p className="text-lg text-slate-600">
            We're looking for passionate individuals to join our growing team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {openRoles.map((role, index) => (
            <Card key={index} hover>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{role}</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Join our team and contribute to making healthcare accessible across the Philippines.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Join Us */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Join Twostar Pharmaceutical?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growth Opportunities</h3>
              <p className="text-slate-600">
                We invest in our team's professional development and provide opportunities for career advancement.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Meaningful Work</h3>
              <p className="text-slate-600">
                Contribute to making quality healthcare accessible to Filipinos across the nation.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Environment</h3>
              <p className="text-slate-600">
                Work with a team that values transparency, integrity, and shared success.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Competitive Benefits</h3>
              <p className="text-slate-600">
                We offer competitive compensation and benefits packages for our employees.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
