'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const subsidiaries = [
  {
    title: 'TED Circle',
    subtitle: 'Social Innovation Program',
    description: 'Empowering social innovators with essential knowledge and advanced skills for creating sustainable solutions. Our program focuses on building entrepreneurial solutions driven by passion for change.',
    logo: (
      <div className="text-xl sm:text-2xl font-bold font-display bg-gradient-to-r from-teacch-green to-emerald-500 bg-clip-text text-transparent">
        The Education Development Circle
      </div>
    ),
    features: [
      'Advanced Skills Development',
      'Entrepreneurial Training',
      'Policy Understanding',
      'Pitch Development',
    ],
    gradient: 'from-teacch-green to-emerald-500',
    href: '/ted-circle'
  },
  {
    title: 'Festival of Change',
    subtitle: 'Annual Innovation Conference',
    description: 'A transformative conference responding to global education challenges. We bring together thought leaders, innovators, and change-makers to generate bold ideas and inspire action.',
    logo: (
      <div className="text-xl sm:text-2xl font-bold font-display">
        <span className="bg-gradient-to-r from-teacch-green to-emerald-500 bg-clip-text text-transparent">Festival</span>
        <span className="text-teacch-orange mx-1 sm:mx-2">OF</span>
        <span className="bg-gradient-to-r from-teacch-green to-emerald-500 bg-clip-text text-transparent">Change</span>
      </div>
    ),
    features: [
      'Keynote Addresses',
      'Panel Discussions',
      'Innovation Activities',
      'Strategic Partnerships',
    ],
    gradient: 'from-teacch-orange to-amber-500',
    href: '/festival-of-change'
  },
  {
    title: 'Incuba8',
    subtitle: 'Innovation Incubator Program',
    description: 'A comprehensive incubator program providing holistic solutions to organizations. We offer strategic guidance and resources to help organizations thrive and scale their impact.',
    logo: (
      <div className="text-2xl sm:text-3xl font-bold font-display bg-gradient-to-r from-teacch-green to-emerald-500 bg-clip-text text-transparent tracking-wider">
        INCUBA8
      </div>
    ),
    features: [
      'Strategic Guidance',
      'Resource Access',
      'Growth Support',
      'Impact Scaling',
    ],
    gradient: 'from-purple-500 to-indigo-500',
    href: '/incuba8'
  },
  {
    title: 'Shop Mammy',
    subtitle: 'Social Impact Marketplace',
    description: 'An innovative mobile platform connecting vendors and customers while enabling social cause donations. Making an impact with every transaction through our integrated donation system.',
    logo: (
      <div className="relative w-12 h-12">
        <Image
          src="/shopmammy.png"
          alt="Shop Mammy"
          fill
          className="object-contain"
        />
      </div>
    ),
    features: [
      'Vendor Connections',
      'Social Donations',
      'Impact Tracking',
      'Community Building',
    ],
    gradient: 'from-pink-500 to-rose-500',
    href: 'https://shopmammy.com'
  },
];

export const Subsidiaries = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="relative py-32 w-full bg-light-500 dark:bg-dark-500 overflow-hidden" id="subsidiaries" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 w-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-light-500 via-light-500/95 to-light-500 dark:from-dark-500 dark:via-dark-500/95 dark:to-dark-500"></div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-dark-500 dark:text-white">
            Driving{' '}
            <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Social Innovation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
            Through our diverse programs and initiatives, we&apos;re fostering sustainable change and empowering the next generation of innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <Link
              key={subsidiary.title}
              href={subsidiary.href}
              className="group relative block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${subsidiary.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10`}></div>
                <div className="relative glass rounded-2xl p-4 sm:p-8 h-full border border-dark-500/5 dark:border-white/5 bg-light-600/50 dark:bg-dark-600/50 backdrop-blur-xl transition-all duration-500 hover:border-teacch-orange/20">
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                      <div className="flex items-center justify-center mb-3 sm:mb-0">
                        {subsidiary.logo}
                      </div>
                      <div className="sm:ml-4">
                        <h3 className="text-xl sm:text-2xl font-bold font-display text-dark-500 dark:text-white group-hover:text-teacch-orange transition-colors duration-300">
                          {subsidiary.title}
                        </h3>
                        <p className="text-sm text-dark-400 dark:text-gray-400">{subsidiary.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-dark-400 dark:text-gray-400 mb-6 group-hover:text-dark-500 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {subsidiary.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-auto">
                      {subsidiary.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-dark-400 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teacch-orange flex-shrink-0"></div>
                          <span className="flex-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
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