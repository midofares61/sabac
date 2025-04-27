import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgent: false
  });

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission with timeout
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgent: false
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="bg-primary-900 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            اتصل بنا
            </h1>
            <p className="text-primary-100 text-xl mb-10">
            هل لديك مشكلة في السباكة أو تحتاج إلى حجز موعد؟ نحن هنا لمساعدتك على مدار الساعة طوال أيام الأسبوع.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a 
                href="tel:+18005551234"
                className="btn btn-accent text-lg flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                اتصل ب 800-555-1234
              </a>
              <div className="flex items-center text-white">
                <Clock className="mr-2 h-5 w-5 text-accent-400" />
                <span>خدمة الطوارئ متاحة على مدار الساعة طوال أيام الأسبوع</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-white">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h2 className="text-3xl font-bold mb-8">تواصل معنا</h2>
        <div className="space-y-8 mb-10">
          <div className="flex">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">رقم الهاتف</h3>
              <p className="text-neutral-700 mb-1">خدمة العملاء:</p>
              <a href="tel:+18005551234" className="text-primary-600 font-medium hover:text-primary-800 transition-colors">
                800-555-1234
              </a>
              <p className="text-neutral-700 mt-2 mb-1">خط الطوارئ:</p>
              <a href="tel:+18005554321" className="text-accent-600 font-medium hover:text-accent-800 transition-colors flex items-center">
                800-555-4321
                <AlertTriangle className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">العنوان</h3>
              <p className="text-neutral-700 mb-1">Main Office:</p>
              <p className="text-neutral-800">التجمع الخامس</p>
            </div>
          </div>

          <div className="flex">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">ساعات العمل</h3>
              <div className="grid grid-cols-2 gap-x-4">
                <p className="text-neutral-700">السبت - الجمعة:</p>
                <p className="text-neutral-800">8am - 6pm</p>
                <p className="col-span-2 mt-2 font-medium text-accent-600">
                  خدمة الطوارئ متاحة على مدار الساعة طوال أيام الأسبوع
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-primary-50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3">مناطق الخدمة</h3>
        <p className="text-neutral-700 mb-4">
          نحن نفخر بخدمة المناطق التالية في التجمع الخامس:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-neutral-800">• Watertown</p>
          <p className="text-neutral-800">• Syracuse</p>
          <p className="text-neutral-800">• Rochester</p>
          <p className="text-neutral-800">• Albany</p>
          <p className="text-neutral-800">• Buffalo</p>
          <p className="text-neutral-800">• Utica</p>
          <p className="text-neutral-800">• Ithaca</p>
          <p className="text-neutral-800">• And surrounding areas</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">قم بزيارتنا</h2>
            <p className="text-lg text-neutral-700">
            تجدنا في قلب التجمع الخامس، ويمكن الوصول إلينا بسهولة من جميع الطرق السريعة الرئيسية.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.423990401725!2d31.422932923916875!3d29.99597972086434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d0073825d17%3A0x5782ca08fab98967!2z2LPYqNin2YMg2KfZhNiq2KzZhdi5INin2YTZhdiq2YXZitiy!5e0!3m2!1sar!2seg!4v1745728863600!5m2!1sar!2seg" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="ProPlumb Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-accent-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-white text-3xl font-bold mb-2">
              طوارئ السباكة?
              </h2>
              <p className="text-white text-lg opacity-90">
              لا تنتظر! فريق الطوارئ لدينا متاح على مدار الساعة طوال أيام الأسبوع.
              </p>
            </div>
            <a 
              href="tel:+18005554321" 
              className="btn bg-white text-accent-700 hover:bg-accent-50 text-lg flex items-center px-8"
            >
              <Phone className="mr-2 h-6 w-6" />
              <span className="font-bold">اتصل ب 800-555-4321</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;