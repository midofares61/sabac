import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, location, quote, rating, delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card p-6"
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} 
          />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
      <div>
        <h4 className="font-bold text-primary-900">{name}</h4>
        <p className="text-neutral-500 text-sm">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;