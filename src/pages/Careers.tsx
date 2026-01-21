import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Heart, Users, Award, Send } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { imagePaths } from '../utils/imageMap';
import { companyData } from '../data/tsp';

const openRoles = [
  'Sales Associate',
  'Regulatory Liaison',
  'Warehouse Staff',
  'Quality Assurance Specialist',
  'Distribution Coordinator',
  'Marketing Representative'
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resume: null
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

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

      {/* Culture & Values */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Culture & Values</h2>
            <p className="text-lg text-slate-600">Our core values guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {companyData.coreValues.map((value, index) => {
              const icons = [Heart, Award, Users];
              const Icon = icons[index] || Heart;
              return (
                <Card key={index} hover>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F253A] to-[#B01E1E] rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{value}</h3>
                  </div>
                </Card>
              );
            })}
          </div>
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

      {/* Send CV Form */}
      <Section className="bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Send Your CV</h2>
            <p className="text-lg text-slate-600">
              Interested in joining our team? Send us your resume and we'll get back to you.
            </p>
          </div>
          <Card padding="lg">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                Thank you for your application! We'll review your CV and get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                  Position of Interest
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a position...</option>
                  {openRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-2">
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {formData.resume && (
                  <p className="mt-2 text-sm text-slate-600">Selected: {formData.resume.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Cover Letter / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you'd like to join our team..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0F253A] text-white px-6 py-3 rounded-full hover:bg-[#1a3a52] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Application'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>

              <p className="text-sm text-slate-500 text-center">
                Or email us directly at:{' '}
                <a href="mailto:careers@twostarpharma.com" className="text-[#0F253A] hover:underline font-medium">
                  careers@twostarpharma.com
                </a>
              </p>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
}
