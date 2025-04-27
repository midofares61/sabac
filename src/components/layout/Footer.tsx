import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Droplet } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Droplet className="text-white h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">سباك التجمع المتميز</span>
            </div>
            <p className="mb-6 text-primary-100">
              خدمات سباكة احترافية مع أكثر من 20 عاماً من الخبرة. مرخصون ومؤمن عليهم وجاهزون لخدمتكم على مدار 24 ساعة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-100 hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#emergency" className="text-primary-100 hover:text-white transition-colors">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link to="/services#installation" className="text-primary-100 hover:text-white transition-colors">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-primary-100 hover:text-white transition-colors">
                  Maintenance Work
                </Link>
              </li>
              <li>
                <Link to="/services#water-heaters" className="text-primary-100 hover:text-white transition-colors">
                  Water Heater Services
                </Link>
              </li>
              <li>
                <Link to="/services#sewer" className="text-primary-100 hover:text-white transition-colors">
                  Sewer & Drain Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#remodeling" className="text-primary-100 hover:text-white transition-colors">
                  Bathroom Remodeling
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-accent-400" />
                <div>
                  <p className="font-bold text-white">خط الطوارئ</p>
                  <a href="tel:+18005551234" className="text-primary-100 hover:text-white transition-colors">
                    800-555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-accent-400" />
                <div>
                  <p className="font-bold text-white">موقعنا</p>
                  <p className="text-primary-100">
                    التجمع الخامس
                    القاهرة الجديدة<br />

                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 text-accent-400" />
                <div>
                  <p className="font-bold text-white">ساعات العمل</p>
                  <p className="text-primary-100">
                    طوال أيام الأسبوع
                    <br />
                    <span className="text-accent-400 font-semibold">خدمة 24 ساعة

                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-primary-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-200 text-sm">
            © {currentYear} سباك التجمع المتميز. جميع الحقوق محفوظة.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-primary-200 space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;