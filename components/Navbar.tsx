import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              className="px-5 py-2 text-sm font-medium text-white bg-primary-100 text-primary-600 hover:bg-primary-200 rounded-md transition-colors"
            >
              立即咨询
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <Sun className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-gray-600 font-medium py-2 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full py-3 bg-primary-600 text-white rounded-md font-medium">
            立即咨询
          </button>
        </div>
      )}
    </header>
  );
};