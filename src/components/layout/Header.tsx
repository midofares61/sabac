import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Clock, Droplet } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Droplet className="text-primary-600 h-8 w-8" />
            <span className="ml-2 text-2xl font-bold text-primary-900">سباك التجمع المتميز</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              من نحن
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              خدماتنا
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
              
            >
              تواصل معنا
            </NavLink>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center mr-6">
              <Clock className="h-4 w-4 text-primary-600 mr-2" />
              <span className="text-sm">24/7 خدمة</span>
            </div>
            <a 
              href="tel:+18005551234" 
              className="btn btn-emergency flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>800-555-1234</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Droplet className="text-primary-600 h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-primary-900">سباك التجمع المتميز</span>
            </Link>
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'}
              onClick={() => setIsOpen(false)}
              end
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'}
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'}
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'}
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </NavLink>
          </nav>
          <div className="mt-auto">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-primary-600 mr-2" />
              <span>24/7 Emergency Service</span>
            </div>
            <a 
              href="tel:+18005551234" 
              className="btn btn-emergency w-full justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>800-555-1234</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;