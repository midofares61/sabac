import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Phone, Wrench, Droplet, Flame, ShowerHead as Shower, PieChart, Lightbulb, Waves, Building } from 'lucide-react';

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  reversed?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  description,
  features,
  icon,
  image,
  reversed = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id={id} className="py-16 scroll-mt-20">
      <div 
        ref={ref}
        className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12`}
      >
        <motion.div
          initial={{ opacity: 0, x: reversed ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
              {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          </div>
          
          <p className="text-neutral-700 mb-6">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <Link to="/contact" className="btn btn-primary">
              Request Service
            </Link> */}
            <a href="tel:+201004481311" className="btn bg-neutral-200 text-primary-900 hover:bg-neutral-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              اتصل الان
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'emergency',
      title: 'إصلاحات الطوارئ',
      description: 'حالات الطوارئ في السباكة لا تنتظر ساعات العمل الرسمية، ونحن كذلك. يتوفر فنيونا المرخصون على مدار الساعة طوال أيام الأسبوع للتعامل مع أي مشكلة سباكة طارئة في منزلك أو عملك.',
      features: [
        'استجابة طارئة 24/7',
        'أنابيب متفجرة وتسريبات مياه',
        'انسداد المراحيض وارتجاع مياه الصرف',
        'تسربات الغاز وأعطال سخانات المياه',
        'معدات تشخيص متقدمة',
        'تسعير واضح بدون رسوم إضافية للعمل الإضافي'
      ],
      icon: <Wrench />,
      image: 'https://images.pexels.com/photos/5974329/pexels-photo-5974329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'water-heaters',
      title: 'خدمات سخانات المياه',
      description: 'من الأنظمة التقليدية ذات الخزانات إلى الحلول الحديثة بدون خزانات، يتخصص فريقنا في جميع جوانب تركيب وصيانة وإصلاح سخانات المياه لضمان توفر المياه الساخنة عند الحاجة.',
      features: [
        'تركيب سخانات مياه بخزان وبدون خزان',
        'إصلاحات طارئة وتشخيص الأعطال',
        'خدمات الصيانة الوقائية',
        'ترقيات أنظمة موفرة للطاقة',
        'تنظيف الرواسب واستبدال قضيب الأنود',
        'نصائح خبراء لاختيار أفضل نظام لاحتياجاتك'
      ],
      icon: <Flame />,
      image: 'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      reversed: true,
    },
    {
      id: 'drain',
      title: 'تنظيف المصارف والمجاري',
      description: 'لا تدع الانسدادات تعكر صفو يومك. تستخدم خدمات تنظيف المصارف الاحترافية لدينا أحدث التقنيات لإزالة الانسدادات والحفاظ على تدفق نظام السباكة بسلاسة.',
      features: [
        'تنظيف بالمياه عالية الضغط',
        'فحص بالكاميرات الداخلية',
        'تنظيف وإصلاح خطوط المجاري',
        'تنظيف المصارف باستخدام الثعابين والأدوات الخاصة',
        'خطط صيانة وقائية',
        'إزالة الجذور ومنع تسللها'
      ],
      icon: <Waves />,
      image: 'https://images.pexels.com/photos/5588371/pexels-photo-5588371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'installation',
      title: 'تركيب التركيبات الصحية',
      description: 'قم بترقية مطبخك أو حمامك أو غرفة الغسيل بتركيبات احترافية. من الحنفيات إلى المراحيض، نضمن تركيب كل شيء بشكل صحيح وعمله بكفاءة تامة.',
      features: [
        'تركيب الحنفيات والأحواض',
        'استبدال وإصلاح المراحيض',
        'تركيب الدش وأحواض الاستحمام',
        'إعداد أجهزة التخلص من النفايات',
        'تركيب توصيلات الغسالات',
        'أنظمة تنقية المياه'
      ],
      icon: <Shower />,
      image: 'https://images.pexels.com/photos/6958520/pexels-photo-6958520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      reversed: true,
    },
    {
      id: 'maintenance',
      title: 'الصيانة الوقائية',
      description: 'الصيانة الدورية تمنع حالات الطوارئ المكلفة وتطيل عمر نظام السباكة الخاص بك. صممت خطط الصيانة لدينا لاكتشاف المشكلات الصغيرة قبل أن تتحول إلى مشكلات كبيرة.',
      features: [
        'فحوصات سنوية لأنظمة السباكة',
        'اختبار وضبط ضغط المياه',
        'اكتشاف ومنع التسربات',
        'صيانة سخانات المياه',
        'عزل الأنابيب وحمايتها في الشتاء',
        'اختبار وصيانة مضخات المياه الجوفية'
      ],
      icon: <PieChart />,
      image: 'https://images.pexels.com/photos/6000135/pexels-photo-6000135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'remodeling',
      title: 'تجديد الحمامات',
      description: 'حوّل حمامك مع خدماتنا الاحترافية لتجديد السباكة. نعمل معك عن قرب لتحقيق رؤيتك مع ضمان تنفيذ جميع جوانب السباكة وفقًا للمعايير وبجودة تدوم طويلاً.',
      features: [
        'تجديد كامل لسباكة الحمامات',
        'تركيب الدش وأحواض الاستحمام',
        'استبدال الأحواض وخزائن الحمام',
        'تركيب ونقل المراحيض',
        'ترقية التركيبات لتوفير المياه',
        'تعديلات لتحسين الوصول والامتثال لمعايير ADA'
      ],
      icon: <Building />,
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      reversed: true,
    },
  ];
  

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
            خدمات السباكة الاحترافية لدينا
            </h1>
            <p className="text-primary-100 text-xl mb-10">
            من الإصلاحات الطارئة إلى التركيبات الجديدة، يقدم سباكينا المرخصون جودة عالية في العمل مدعومة بضمان الرضا بنسبة 100%.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#emergency" className="btn bg-white text-primary-900 hover:bg-primary-50">
              إصلاحات الطوارئ
              </a>
              <a href="#water-heaters" className="btn bg-white text-primary-900 hover:bg-primary-50">
              سخانات المياه
              </a>
              <a href="#drain" className="btn bg-white text-primary-900 hover:bg-primary-50">
              تنظيف المجاري
              </a>
              <a href="#remodeling" className="btn bg-white text-primary-900 hover:bg-primary-50">
              تجديد الحمام
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-primary-50 rounded-xl p-8 -mt-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                  <Droplet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">مرخص ومؤمن عليه</h3>
                  <p className="text-neutral-700">جميع السباكين لدينا مرخصون ومؤمنون عليهم بالكامل لحمايتك.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">فنيين ذوي خبرة</h3>
                  <p className="text-neutral-700">يتمتع فريقنا بخبرة تزيد عن 20 عامًا في حل مشكلات السباكة المعقدة.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">متاح على مدار الساعة طوال أيام الأسبوع</h3>
                  <p className="text-neutral-700">خدمات السباكة الطارئة متاحة 24 ساعة في اليوم، 7 أيام في الأسبوع.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="bg-white">
        <div className="container mx-auto px-4 pb-20">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              id={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              image={service.image}
              reversed={service.reversed}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            جاهز لحجز خدمتك?
            </h2>
            <p className="text-primary-100 text-xl mb-8">
            فريقنا من المحترفين المرخصين على أهبة الاستعداد لمساعدتك في جميع احتياجاتك المتعلقة بالسباكة.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact" className="btn btn-accent text-lg">
                احجز الآن
              </Link>
              <a href="tel:+201004481311" className="btn bg-white text-primary-900 hover:bg-primary-50 text-lg flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                اتصل ب 01004481311
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;