'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaLightbulb, FaShoppingBag } from 'react-icons/fa';

const subsidiaries = [
  {
    title: 'TED Circle',
    subtitle: 'The Education Development Circle',
    description: 'Empowering social innovators with essential knowledge and advanced skills for creating sustainable solutions. Our program focuses on building entrepreneurial solutions driven by passion for change.',
    icon: FaGraduationCap,
    features: [
      'Advanced Skills Development',
      'Entrepreneurial Training',
      'Policy Understanding',
      'Pitch Development',
    ],
    gradient: 'from-teacch-green to-emerald-500',
  },
  {
    title: 'Festival of Change',
    subtitle: 'Annual Innovation Conference',
    description: 'A transformative conference responding to global education challenges. We bring together thought leaders, innovators, and change-makers to generate bold ideas and inspire action.',
    icon: FaCalendarAlt,
    features: [
      'Keynote Addresses',
      'Panel Discussions',
      'Innovation Activities',
      'Strategic Partnerships',
    ],
    gradient: 'from-teacch-orange to-amber-500',
  },
  {
    title: 'Incuba8',
    subtitle: 'Innovation Incubator Program',
    description: 'A comprehensive incubator program providing holistic solutions to organizations. We offer strategic guidance and resources to help organizations thrive and scale their impact.',
    icon: FaLightbulb,
    features: [
      'Strategic Guidance',
      'Resource Access',
      'Growth Support',
      'Impact Scaling',
    ],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Shop Mammy',
    subtitle: 'Social Impact Marketplace',
    description: 'An innovative mobile platform connecting vendors and customers while enabling social cause donations. Making an impact with every transaction through our integrated donation system.',
    icon: FaShoppingBag,
    features: [
      'Vendor Connections',
      'Social Donations',
      'Impact Tracking',
      'Community Building',
    ],
    gradient: 'from-pink-500 to-rose-500',
  },
];

export const Subsidiaries = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="relative py-32 w-full bg-dark-500 overflow-hidden" id="subsidiaries" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 w-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-500/95 to-dark-500"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
            Our Initiatives
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Driving{' '}
            <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Social Innovation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Through our diverse programs and initiatives, we&apos;re fostering sustainable change and empowering the next generation of innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <motion.div
              key={subsidiary.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${subsidiary.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10`}></div>
              <div className="relative glass rounded-2xl p-8 h-full border border-white/5 transition-all duration-500 hover:border-white/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${subsidiary.gradient} flex items-center justify-center text-white`}>
                      <subsidiary.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold font-display text-white group-hover:text-teacch-orange transition-colors duration-300">
                        {subsidiary.title}
                      </h3>
                      <p className="text-sm text-gray-400">{subsidiary.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {subsidiary.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {subsidiary.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-teacch-orange"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teacch-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teacch-orange/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries; 