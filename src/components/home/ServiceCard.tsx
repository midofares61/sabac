import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, description, icon, link, delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card hover:translate-y-[-5px]"
    >
      <div className="p-6">
        <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
          {React.cloneElement(icon as React.ReactElement, { className: 'h-7 w-7' })}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">
          {description}
        </p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;