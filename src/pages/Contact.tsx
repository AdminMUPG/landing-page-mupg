import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Send, Phone } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Pill from '../components/Pill';
import { companyData } from '../data/tsp';
import { imagePaths } from '../utils/imageMap';

const inquiryTypes = [
  'Wholesale Inquiry',
  'Distribution',
  'Ethical Marketing',
  'Product Quote',
  'Partnership'
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get('product');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: productQuery ? `I'm interested in: ${productQuery}` : '',
    inquiryTypes: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (productQuery) {
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in: ${productQuery}`
      }));
    }
  }, [productQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleInquiryType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryTypes: prev.inquiryTypes.includes(type)
        ? prev.inquiryTypes.filter(t => t !== type)
        : [...prev.inquiryTypes, type]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (no backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryTypes: []
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
            Contact Us
          </h1>
          <p className="text-lg text-slate-600">
            Get in touch with us for inquiries, partnerships, or product information
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
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
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <Pill
                        key={type}
                        variant={formData.inquiryTypes.includes(type) ? 'solid' : 'outline'}
                        onClick={() => toggleInquiryType(type)}
                        className="cursor-pointer"
                      >
                        {type}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Main Office with Warehouse</h3>
                    <p className="text-slate-600">{companyData.locations.warehouse}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Satellite Office</h3>
                    <p className="text-slate-600 whitespace-pre-line">
                      {companyData.locations.satelliteOffice}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-bold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-slate-600 text-sm mb-4">
                For inquiries about our products, services, or partnerships, please fill out the form or reach out to us directly.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>8371-3230</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>0917-102-9691</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600" />
                  <span>twostarpharmatrading@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600" />
                  <span>muf.importgrp@gmail.com</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Location</h2>
          <ImagePlaceholder 
            src={imagePaths.map} 
            alt="Map" 
            aspectRatio="wide"
          />
        </div>
      </Section>
    </div>
  );
}
