import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Users, Award, Shield, Wrench, Phone, Star, ThumbsUp, Clock } from 'lucide-react';

const TeamMember: React.FC<{
  name: string;
  title: string;
  image: string;
  bio: string;
  delay?: number;
}> = ({ name, title, image, bio, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="card p-6"
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary-600 font-medium mb-3">{title}</p>
      <p className="text-neutral-700">{bio}</p>
    </motion.div>
  );
};

const Certification: React.FC<{
  title: string;
  organization: string;
  icon: React.ReactNode;
  description: string;
  delay?: number;
}> = ({ title, organization, icon, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center"
    >
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-8 w-8' })}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-primary-600 font-medium mb-2">
          {organization}
        </p>
        <p className="text-neutral-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [certRef, certInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'جون وينترز',
      title: 'سباك رئيسي ومؤسس',
      image: 'https://images.pexels.com/photos/8961345/pexels-photo-8961345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'بخبرة تزيد عن 25 عامًا، أسس جون شركة ProPlumb برؤية تقديم خدمات سباكة استثنائية تتميز بالنزاهة والاحترافية.'
    },
    {
      name: 'سارة ميلر',
      title: 'مديرة العمليات',
      image: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'تضمن سارة أن يقدم فريقنا خدمات عالية الجودة بشكل مستمر في كل مهمة، مع الحفاظ على التزامنا برضا العملاء.'
    },
    {
      name: 'مايك رودريجيز',
      title: 'فني رئيسي',
      image: 'https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'يتخصص مايك في التركيبات والإصلاحات المعقدة، مقدمًا حلولًا مبتكرة لمشاكل السباكة الصعبة بدقة وعناية.'
    },
    {
      name: 'ليزا تشين',
      title: 'مديرة خدمة العملاء',
      image: 'https://images.pexels.com/photos/5538616/pexels-photo-5538616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'تقود ليزا فريق خدمة العملاء لدينا، لضمان حصول كل عميل على رعاية استثنائية منذ أول مكالمة وحتى إنجاز المشروع.'
    }
  ];
  

  const certifications = [
    {
      title: 'رخصة السباك الرئيسي',
      organization: 'دائرة العمل بولاية نيويورك',
      icon: <Award />,
      description: 'أكمل سباكونا الرئيسيون تدريبًا مكثفًا واجتازوا اختبارات صارمة للحصول على أعلى مستوى من الشهادات في هذا المجال.'
    },
    {
      title: 'اختبار مانع الرجوع المعتمد',
      organization: 'الجمعية الأمريكية للهندسة الصحية',
      icon: <Shield />,
      description: 'شهادة متخصصة في اختبار وصيانة أجهزة منع الرجوع لحماية مصدر المياه من التلوث.'
    },
    {
      title: 'شهادة السباكة الخضراء',
      organization: 'الجمعية الدولية للسباكة والميكانيكا',
      icon: <Wrench />,
      description: 'تدريب متقدم في أنظمة كفاءة المياه، والممارسات المستدامة، وحلول السباكة الصديقة للبيئة.'
    }
  ];
  
  
  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[400px] bg-primary-900 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              معلومات عن سباك التجمع الخامس
            </h1>
            <p className="text-primary-100 text-xl mb-6">
            أكثر من 20 عامًا من الخبرة الموثوقة في مجال السباكة لخدمة العائلات والشركات في التجمع الخامس.
            </p>
            <div className="flex justify-center space-x-6 mt-10">
              <div className="flex items-center">
                <Award className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">مرخص ومؤمن عليه</span>
              </div>
              <div className="flex items-center">
                <Users className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">فريق محترف</span>
              </div>
              <div className="flex items-center">
                <Star className="h-10 w-10 text-accent-400" />
                <span className="ml-2 text-white font-medium">خدمة 5 نجوم</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef} 
        className="section bg-white"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">قصتنا</h2>
              <p className="text-neutral-700 mb-4">
              تأسست شركة سباك التجمع المتميز على يد جون وينترز، وهو سباك ماهر، برؤية لتقديم خدمات سباكة استثنائية بنزاهة واحترافية. ما بدأ كعمل فردي تحول إلى فريق موثوق من المحترفين المرخصين الذين يخدمون منطقة التجمع الخامس..
              </p>
              <p className="text-neutral-700 mb-4">
              على مدى العقدين الماضيين، بنينا سمعتنا على أساس الموثوقية وجودة العمل وخدمة العملاء المتميزة. ساعدنا آلاف أصحاب المنازل والشركات على حل مشاكل السباكة لديهم، بدءًا من الإصلاحات الطارئة ووصولًا إلى تجديدات الحمامات بالكامل..
              </p>
              <p className="text-neutral-700 mb-6">
              إن التزامنا بالتميز جعلنا شركة السباكة المفضلة في المنطقة، مع قاعدة عملاء مخلصين تستمر في النمو من خلال الإحالات والأعمال المتكررة.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <div>
                  <h3 className="text-3xl font-bold text-primary-600">20+</h3>
                  <p className="text-neutral-600">سنوات الخبرة</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600">10,000+</h3>
                  <p className="text-neutral-600">الوظائف المكتملة</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600">5,000+</h3>
                  <p className="text-neutral-600">العملاء السعداء</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/8962451/pexels-photo-8962451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="ProPlumb team" 
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section 
        ref={valuesRef} 
        className="section bg-primary-50"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">قيمنا</h2>
            <p className="text-lg text-neutral-700">
            توجه هذه المبادئ الأساسية كل ما نقوم به في سباك التجمع الخامس  بدءًا من كيفية تعاملنا مع عملائنا وحتى كيفية تعاملنا مع كل مهمة.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">جودة الصنعة</h3>
              <p className="text-neutral-700">
              نفخر بعملنا وندعم كل مشروع ننجزه. فنيونا مدربون على تقديم حلول تدوم طويلًا، باستخدام مواد عالية الجودة وتقنيات دقيقة..
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">العميل أولاً</h3>
              <p className="text-neutral-700">
              رضاكم هو أولويتنا. نستمع لاحتياجاتكم، ونحترم ممتلكاتكم، ونسعى جاهدين لتجاوز توقعاتكم في كل خدمة ومشروع..
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">مصداقية</h3>
              <p className="text-neutral-700">
              عندما تحتاجنا، سنكون معك. فريقنا سريع ومحترف ومتاح على مدار الساعة طوال أيام الأسبوع للطوارئ. نحترم وقتك ونصل دائمًا في الموعد المحدد..
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Team Section
      <section 
        ref={teamRef} 
        className="section bg-white"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تعرف على فريقنا</h2>
            <p className="text-lg text-neutral-700">
            يقدم خبراؤنا المرخصون سنواتٍ من الخبرة والتفاني في كل مشروع. تعرّف على فريق سباك التجمع الخامس.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section> */}
      
      {/* Certifications Section
      <section 
        ref={certRef} 
        className="section bg-primary-50"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">شهاداتنا</h2>
            <p className="text-lg text-neutral-700">
            تحافظ شركة سباك التجمع الخامس على أعلى معايير الصناعة من خلال الشهادات المهنية والتدريب المستمر.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={certInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {certifications.map((cert, index) => (
              <Certification
                key={index}
                title={cert.title}
                organization={cert.organization}
                icon={cert.icon}
                description={cert.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      <section className="bg-primary-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            جاهز لتجربة خدمة السباكة الاحترافية?
            </h2>
            <p className="text-primary-100 text-xl mb-8">
            فريقنا جاهز لمساعدتك في جميع احتياجاتك المتعلقة بالسباكة، من الإصلاحات البسيطة إلى التركيبات الكبرى.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact" className="btn btn-accent text-lg">
              اتصل بنا اليوم
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

export default About;