'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaHandshake, FaGlobe, FaHeart, FaStar, FaBalanceScale, FaChevronRight } from 'react-icons/fa';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineGlobe } from 'react-icons/hi';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';


// Initiatives data
const initiatives = [
  {
    title: 'TED Circle',
    icon: HiOutlineAcademicCap,
    description: 'Empowering social innovators with essential knowledge and advanced skills for creating sustainable solutions.',
    features: [
      'Building entrepreneurial solutions',
      'Converting purpose into outcomes',
      'Developing scalable projects',
      'Understanding policy impacts'
    ]
  },
  {
    title: 'Festival of Change',
    icon: HiOutlineLightBulb,
    description: 'An annual conference responding to global education challenges, generating bold ideas and inspiring action.',
    features: [
      'Keynote addresses and panels',
      'Innovative solution activities',
      'Strategic partnerships',
      'Mentorship opportunities'
    ]
  },
  {
    title: 'Incuba8',
    icon: HiOutlineGlobe,
    description: 'A comprehensive incubator program providing holistic solutions to organizations, addressing gaps in their offerings.',
    features: [
      'Strategic guidance',
      'Resource allocation',
      'Scaling support',
      'Impact measurement'
    ]
  }
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [activeInitiative, setActiveInitiative] = useState(0);
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroScale = useTransform(scaleProgress, [0, 0.2], [1.2, 1]);
  const heroOpacity = useTransform(scaleProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scaleProgress, [0, 0.2], [0, -50]);

  // Parallax effects for values section
  const valuesY = useTransform(scrollY, [0, 1000], [0, -100]);
  const valuesOpacity = useTransform(scrollY, [800, 1000], [0, 1]);

  if (!mounted) {
    return null;
  }

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Pioneering creative solutions to address societal challenges through cutting-edge approaches and technologies.',
    },
    {
      icon: FaBalanceScale,
      title: 'Integrity',
      description: 'Maintaining unwavering commitment to honesty, transparency, and ethical practices in all our endeavors.',
    },
    {
      icon: FaHeart,
      title: 'Compassion',
      description: 'Placing empathy and understanding at the heart of our work, ensuring our solutions truly serve community needs.',
    },
    {
      icon: FaStar,
      title: 'Creativity',
      description: 'Fostering an environment where bold ideas flourish and innovative solutions emerge through creative thinking.',
    },
    {
      icon: FaHandshake,
      title: 'Collaboration',
      description: 'Building strong partnerships and fostering teamwork to amplify our impact and create lasting change.',
    },
    {
      icon: FaGlobe,
      title: 'Excellence',
      description: 'Pursuing the highest standards in every initiative, ensuring quality and impact in all our programs.',
    },
  ];

  return (
    <div>
      <ClientOnly>
        <main className="flex min-h-screen flex-col relative">
          {/* Progress bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teacch-green to-teacch-orange z-50"
            style={{ scaleX: scaleProgress }}
          />

          {/* Hero Section with Enhanced Parallax */}
          <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-dark-500/95 via-dark-500/90 to-dark-500/95 z-10"></div>
              <Image
                src="/images/team2.jpg"
                alt="TEACCH Impact"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              style={{ y: textY }}
              className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-8 max-w-4xl"
              >
                <motion.span 
                  className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Welcome to TEACCH
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
                  Transforming Africa Through
                  <motion.span 
                    className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green"
                    animate={{ backgroundPosition: ['0%', '100%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    Social Innovation
                  </motion.span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                  We&apos;re building a movement that empowers young talents, fosters collaboration, and drives sustainable change across Africa.
                </p>
                <div className="flex flex-wrap gap-4 pt-8">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#our-story"
                    className="inline-flex items-center px-8 py-4 bg-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    Discover Our Story
                    <FaChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#initiatives"
                    className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-lg"
                  >
                    Our Initiatives
                    <FaChevronRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </section>

          {/* Mission & Vision Section with Interactive Elements */}
          <section className="w-full py-32 bg-white dark:bg-dark-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-12"
                >
                  <div className="space-y-8">
                    <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider">
                      Our Purpose
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-dark-600 dark:text-white leading-tight">
                      Driving Change Through
                      <span className="block text-gradient bg-gradient-to-r from-teacch-green to-teacch-orange">
                        Purpose & Vision
                      </span>
                    </h2>
                  </div>
                  
                  <div className="space-y-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-8 rounded-2xl bg-light-100 dark:bg-dark-600 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-dark-600 dark:text-white mb-4">
                        Our Mission
                      </h3>
                      <p className="text-lg text-dark-400 dark:text-gray-400">
                        To raise creative intellectuals who are bridging gaps in social innovation.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-8 rounded-2xl bg-light-100 dark:bg-dark-600 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold text-dark-600 dark:text-white mb-4">
                        Our Vision
                      </h3>
                      <p className="text-lg text-dark-400 dark:text-gray-400">
                        To unlock the creative and intellectual capital of young Africans by 2050, who will drive sustainable change across the continent.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[600px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/61cdad1a8cdf722279528e87/669f888cbbf57b8ae7b15481_1697071968551.jpeg"
                    alt="TEACCH Mission and Vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white text-lg font-medium">
                        &quot;Empowering the next generation of African innovators to create lasting social impact.&quot;
                      </p>
                      <p className="text-white/80 mt-2">
                        - Erioluwa Adeyinka, Founder
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section with Enhanced Interaction */}
          <section className="w-full py-32 bg-light-100 dark:bg-dark-600 relative overflow-hidden">
            <motion.div 
              style={{ y: valuesY }}
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-dark-500/20 to-dark-500/40 z-0"
            />
            
            <motion.div 
              style={{ opacity: valuesOpacity }}
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-20">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4"
                >
                  Our Core Values
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white"
                >
                  The Principles That
                  <motion.span
                    animate={{ 
                      backgroundPosition: ['0%', '100%'],
                      opacity: [0.8, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                    className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green"
                  >
                    Define Our Impact
                  </motion.span>
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white dark:bg-dark-500 p-8 rounded-2xl shadow-xl dark:shadow-dark-600/50 transform transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-teacch-green/10 to-teacch-orange/10 p-4 rounded-xl inline-block mb-6 group-hover:from-teacch-green/20 group-hover:to-teacch-orange/20"
                    >
                      <value.icon className="w-12 h-12 text-teacch-orange" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4 group-hover:text-teacch-orange transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-dark-400 dark:text-gray-400 group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Initiatives Section */}
          <section id="initiatives" className="w-full py-32 bg-white dark:bg-dark-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                  Our Programs
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                  Transformative
                  <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                    Initiatives
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                  Discover our comprehensive programs designed to foster innovation and drive sustainable change.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={initiative.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`p-8 rounded-2xl cursor-pointer transform transition-all duration-300 ${
                      activeInitiative === index
                        ? 'bg-gradient-to-br from-teacch-green/10 to-teacch-orange/10'
                        : 'bg-light-100 dark:bg-dark-600'
                    }`}
                    onClick={() => setActiveInitiative(index)}
                  >
                    <initiative.icon className="w-12 h-12 text-teacch-orange mb-6" />
                    <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                      {initiative.title}
                    </h3>
                    <p className="text-dark-400 dark:text-gray-400 mb-6">
                      {initiative.description}
                    </p>
                    <AnimatePresence>
                      {activeInitiative === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3"
                        >
                          {initiative.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <FaChevronRight className="w-4 h-4 text-teacch-orange" />
                              <span className="text-dark-400 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story Section with Timeline */}
          <section id="our-story" className="w-full py-32 bg-light-100 dark:bg-dark-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider mb-4">
                      Our Journey
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                      A Vision of
                      <span className="block text-gradient bg-gradient-to-r from-teacch-green to-teacch-orange">
                        African Innovation
                      </span>
                    </h2>
                  </div>
                  <div className="space-y-6 text-lg text-dark-400 dark:text-gray-400">
                    <p>
                      TEACCH emerged from a profound understanding of the gaps in Africa&apos;s social innovation ecosystem. We recognized that sustainable change requires more than isolated efforts—it demands collective action and comprehensive solutions.
                    </p>
                    <p>
                      Under the visionary leadership of Erioluwa Adeyinka, we&apos;ve evolved into a transformative force in social innovation across Africa. Our journey began with a clear purpose: to equip young talents with the resources, knowledge, and support needed to drive meaningful change in their communities.
                    </p>
                    <p>
                      Since our incorporation in 2024, we&apos;ve been steadfast in our commitment to fostering sustainable change through innovative programs and initiatives. Our approach integrates education, technology, and collaboration to create lasting impact across African communities.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[600px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/team2.jpg"
                    alt="TEACCH Journey"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white text-lg font-medium">
                        &quot;Innovation thrives when we empower young minds with the tools and support they need to create change.&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="w-full py-32 bg-white dark:bg-dark-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-teacch-green/10 to-teacch-orange/10 rounded-3xl p-16 relative overflow-hidden backdrop-blur-xl border border-white/10">
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-dark-600 dark:text-white">
                      Be Part of the
                      <span className="block text-gradient bg-gradient-to-r from-teacch-green to-teacch-orange">
                        Innovation Movement
                      </span>
                    </h2>
                    <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                      Join us in our mission to transform social innovation in Africa. Together, we can create lasting change and build a better future for generations to come.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 text-lg"
                      >
                        Get Involved
                        <FaChevronRight className="ml-2 w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white/10 text-dark-600 dark:text-white font-medium rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-lg"
                      >
                        Partner With Us
                        <FaChevronRight className="ml-2 w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-teacch-green/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teacch-orange/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </ClientOnly>
    </div>
  );
} 