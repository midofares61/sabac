import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-accent-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span className="font-medium">هل لديك مشكلة طارئة?</span>
          </div>
          <div className="flex items-center mt-2 md:mt-0 md:ml-4">
            <span className="mx-2 hidden md:block">—</span>
            <span>نعمل على مدار 24 ساعة</span>
            <a 
              href="tel:+01147458111" 
              className="ml-4 flex items-center font-bold hover:underline"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>01147458111</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;