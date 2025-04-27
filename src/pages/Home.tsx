import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Phone, Shield, Users, Wrench, ThumbsUp, Star } from 'lucide-react';

// Components
import ServiceCard from '../components/home/ServiceCard';
import TestimonialCard from '../components/home/TestimonialCard';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceItems = [
    {
      title: 'الإصلاحات الطارئة',
      description: 'استجابة سريعة لجميع حالات الطوارئ في السباكة مع توفر الخدمة على مدار الساعة. سنقوم بالإصلاح بشكل صحيح من المرة الأولى.',
      icon: <Wrench />,
      link: '/services#emergency',
    },
    {
      title: 'خدمات سخانات المياه',
      description: 'تركيب، إصلاح وصيانة جميع أنواع سخانات المياه بما في ذلك أنظمة السخانات الفورية.',
      icon: <Wrench />,
      link: '/services#water-heaters',
    },
    {
      title: 'تنظيف المجاري',
      description: 'أدوات قوية لإزالة أي انسداد. من الأحواض إلى خطوط الصرف الرئيسية، سنعيد تدفق المياه بشكل طبيعي.',
      icon: <Wrench />,
      link: '/services#drain',
    },
    {
      title: 'تجديد الحمامات',
      description: 'حوّل حمامك مع خدمات السباكة المتخصصة لدينا لمشاريع التجديد والتحديث.',
      icon: <Wrench />,
      link: '/services#remodeling',
    },
  ];
  
  const testimonials = [
    {
      name: 'محمد فارس',
      location: 'التجمع الخامس، القاهرة',
      quote: 'استجاب سباك التجمع الخامس خلال ساعة واحدة من مكالمتنا الطارئة. كان الفني محترفًا وعلى دراية وقام بإصلاح الأنبوب المنفجر بسرعة. أنصح بهم بشدة!',
      rating: 5,
    },
    {
      name: 'محمد مجدي',
      location: 'التجمع الخامس، القاهرة',
      quote: 'أعتمد على سباك التجمع الخامس في جميع احتياجات السباكة الخاصة بي منذ 5 سنوات. فريقهم دائمًا موثوق وصادق ويقدمون عملاً عالي الجودة بأسعار عادلة.',
      rating: 5,
    },
    {
      name: 'احمد عيد',
      location: 'التجمع الخامس، القاهرة',
      quote: 'كان الفنيون في الموعد المحدد، شرحوا كل شيء بوضوح، وتركو منزلي أنظف مما كان عليه قبل مجيئهم. أعجبت جدًا بخدمتهم.',
      rating: 5,
    },
  ];
  

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[600px] bg-hero-pattern bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            خدمات السباكة الاحترافية التي يمكنك الوثوق بها
            </h1>
            <p className="text-primary-100 text-xl mb-8">
              من حالات الطوارئ إلى الصيانة الروتينية، سباكينا المرخصون موجودون هنا لحل مشاكل السباكة الخاصة بك على مدار الساعة طوال أيام الأسبوع.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact" className="btn btn-accent text-lg flex items-center">
              احجز الخدمة
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+18005551234" className="btn bg-white text-primary-900 hover:bg-primary-50 text-lg flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-600" />
                اتصل بـ 800-555-1234
              </a>
            </div>
            <div className="mt-12 flex items-center space-x-6 space-x-reverse">
              <div className="flex items-center">
                <Shield className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">مرخص ومؤمن عليه</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">خدمة على مدار الساعة</span>
              </div>
              <div className="hidden md:flex items-center">
                <Award className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">أكثر من 20 سنة خبرة</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدمات السباكة لدينا</h2>
            <p className="text-lg text-neutral-600">
            من الإصلاحات الطارئة إلى تجديد الحمامات بالكامل، يغطيك فريقنا من السباكين المرخصين بخدمة عالية الجودة وحلول خبيرة.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {serviceItems.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn btn-primary inline-flex items-center"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section bg-primary-900 text-white water-animation">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-accent-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">20+</h3>
              <p className="text-primary-100">سنوات من الخبرة

</p>
            </div>
            
            <div className="p-6">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-accent-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-primary-100">عملاء راضون</p>
            </div>
            
            <div className="p-6">
              <div className="mb-4 flex justify-center">
                <Wrench className="h-12 w-12 text-accent-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-primary-100">وظائف مكتملة</p>
            </div>
            
            <div className="p-6">
              <div className="mb-4 flex justify-center">
                <ThumbsUp className="h-12 w-12 text-accent-400" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
              <p className="text-primary-100">رضا العملاء</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} className="section bg-neutral-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول عملاؤنا عنا

  </h2>
            <p className="text-lg text-neutral-600">
            لا تأخذ كلامنا فقط. استمع إلى تجارب عملائنا الراضين.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">مستعدون لحل مشاكل السباكة الخاصة بك?</h3>
              <p className="text-neutral-600">
              فريقنا من السباكين المرخصين على بعد مكالمة هاتفية فقط.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact" className="btn btn-primary">
              احجز الخدمة
              </Link>
              <a href="tel:+18005551234" className="btn bg-neutral-200 text-primary-900 hover:bg-neutral-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                اتصل بنا الآن
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;