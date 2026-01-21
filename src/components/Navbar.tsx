import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img 
              src="/assets/Logo/MUF_LOGO__UPDATED_-removebg-preview.png" 
              alt="Medica Uno Logo" 
              className="h-8 md:h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#6A63B6] rounded-lg flex items-center justify-center hidden">
              <span className="text-white font-bold text-sm md:text-xl">MU</span>
            </div>
            <span className={`font-bold text-lg md:text-xl ${isScrolled ? 'text-[#6A63B6]' : 'text-white'}`}>
              MEDICA UNO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-sm font-medium transition-colors
                  ${
                    location.pathname === link.path
                      ? isScrolled
                        ? 'text-[#6A63B6]'
                        : 'text-white'
                      : isScrolled
                      ? 'text-slate-700 hover:text-[#6A63B6]'
                      : 'text-white/90 hover:text-white'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#6A63B6] text-white px-5 py-2 rounded-full hover:bg-[#554ea0] transition-colors font-medium text-sm"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 bg-white/95 backdrop-blur-sm -mx-4 px-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block font-medium text-slate-700 hover:text-[#6A63B6]
                  ${location.pathname === link.path ? 'text-[#6A63B6]' : ''}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#6A63B6] text-white px-5 py-2 rounded-full hover:bg-[#554ea0] transition-colors font-medium text-center"
            >
              Get a quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
