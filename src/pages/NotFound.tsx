import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeft, Phone } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-md">
        <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-neutral-700 mb-10">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to solving your plumbing needs.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <HomeIcon className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn bg-white text-primary-900 border border-neutral-300 hover:bg-neutral-100 flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-neutral-600 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/services" className="text-primary-600 hover:text-primary-800 hover:underline">Services</Link>
            <Link to="/about" className="text-primary-600 hover:text-primary-800 hover:underline">About Us</Link>
            <Link to="/portfolio" className="text-primary-600 hover:text-primary-800 hover:underline">Portfolio</Link>
            <Link to="/blog" className="text-primary-600 hover:text-primary-800 hover:underline">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;