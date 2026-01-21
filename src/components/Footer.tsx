import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { imagePaths } from '../utils/imageMap';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={imagePaths.logo} 
                alt="Twostar Pharmaceutical Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="w-8 h-8 bg-[#0F253A] rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-sm">TSP</span>
              </div>
              <span className="font-bold text-lg text-[#0F253A]">TWOSTAR</span>
            </div>
            <p className="text-slate-600 text-sm mb-4 max-w-md">
              Delivering on a Vision of Accessible Wellness
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0F253A] text-white px-5 py-2 rounded-full hover:bg-[#1a3a52] transition-colors font-medium text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4 text-sm">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#0F253A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-600 hover:text-[#0F253A] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#0F253A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#0F253A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-600 hover:text-[#0F253A] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © 2025 Twostar Pharmaceutical Trading. All rights reserved.
          </p>
          <a
            href="#"
            className="text-slate-600 hover:text-[#0F253A] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
