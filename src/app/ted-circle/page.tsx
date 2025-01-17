'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';

const frameworks = [
  {
    title: 'PURPOSE',
    subtitle: 'Defining Your Path',
    description: [
      'Discover and refine your passion for social innovation',
      'Identify unique opportunities in your industry to drive meaningful impact'
    ],
    illustration: '/illustrations/purpose.svg',
    gradient: 'from-teacch-green to-emerald-500'
  },
  {
    title: 'PROFIT/Pricing',
    subtitle: 'Monetizing Impact',
    description: [
      'Learn how to craft compelling pitch decks that attract investors',
      'Explore strategies for generating revenue and sustaining initiatives'
    ],
    illustration: '/illustrations/profit.svg',
    gradient: 'from-teacch-orange to-amber-500'
  },
  {
    title: 'PARTNERSHIP',
    subtitle: 'Building Strategic Alliances',
    description: [
      'Understand the fundamentals of forming impactful partnerships',
      'Learn how to identify and collaborate with the right partners'
    ],
    illustration: '/illustrations/partnership.svg',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'POLICY',
    subtitle: 'Navigating Regulations',
    description: [
      'Gain insights into the policies governing your sector',
      'Understand legal frameworks essential for operations'
    ],
    illustration: '/illustrations/policy.svg',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'PROTOTYPE',
    subtitle: 'Developing Solutions',
    description: [
      'Learn what makes a strong prototype',
      'Gain practical knowledge on developing and refining solutions'
    ],
    illustration: '/illustrations/prototype.svg',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'PRODUCT',
    subtitle: 'Perfecting Your Offering',
    description: [
      'Master the art of delivering a compelling product pitch',
      'Understand key aspects of presenting to stakeholders'
    ],
    illustration: '/illustrations/product.svg',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const benefits = [
  {
    title: 'Learn from experiments',
    description: "While experience is valuable, the real breakthroughs happen when we step outside of what&apos;s already been done and dare to experiment. We focus on what could be, rather than just what has been.",
    illustration: '/illustrations/experiment.svg',
    gradient: 'from-teacch-green to-emerald-500'
  },
  {
    title: 'Network with bright minds',
    description: 'Impact grows when great minds come together. Connect with a community of change-makers, each with unique skills, perspectives, and ideas through deep conversations and collaborations.',
    illustration: '/illustrations/network.svg',
    gradient: 'from-teacch-orange to-amber-500'
  },
  {
    title: 'Start something amazing',
    description: 'Whether improving existing projects or launching innovative solutions, TED Circle challenges you to introduce bold, transformative ideas that foster long-term, sustainable change.',
    illustration: '/illustrations/launch.svg',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export default function TEDCirclePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-500 to-dark-600">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Social Innovation Program
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
                TED Circle
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  The Education Development Circle
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Empowering social innovators with essential knowledge and advanced skills for creating sustainable solutions in the social innovation space.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#register"
                  className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  Join TED Circle
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#learn-more"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-lg w-full sm:w-auto border border-white/20"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="relative py-32 bg-light-100 dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Program Overview
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                Social Innovators
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  Program
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                A 3-month immersive program designed to empower social innovators with the tools, knowledge, and skills necessary to drive meaningful change.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-dark-400 dark:text-gray-400">
                  The program offers participants a comprehensive curriculum curated to address the most pressing challenges in the social innovation ecosystem. Through hands-on learning, expert-led workshops, and collaborative projects, participants will:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      text: 'Deepen understanding of sustainable development',
                      illustration: '/illustrations/sustainable.svg'
                    },
                    {
                      text: 'Master systems thinking approaches',
                      illustration: '/illustrations/systems.svg'
                    },
                    {
                      text: 'Develop impact-driven strategies',
                      illustration: '/illustrations/impact.svg'
                    },
                    {
                      text: 'Receive guidance from seasoned mentors',
                      illustration: '/illustrations/mentorship.svg'
                    },
                    {
                      text: 'Build capacity for long-term sustainability',
                      illustration: '/illustrations/capacity.svg'
                    },
                    {
                      text: 'Emerge as catalysts for transformative change',
                      illustration: '/illustrations/transform.svg'
                    }
                  ].map((point, index) => (
                    <motion.li
                      key={point.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 text-dark-400 dark:text-gray-400"
                    >
                      <div className="relative w-8 h-8 flex-shrink-0">
                        <Image
                          src={point.illustration}
                          alt={point.text}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{point.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/ted-circle-overview.jpg"
                  alt="TED Circle Program Overview"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* The 6 Ps Framework */}
        <section className="relative py-32 bg-white dark:bg-dark-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Program Structure
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                The 6 Ps
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  Framework
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                Our program is structured into six key phases designed to equip social innovators with comprehensive knowledge and tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={framework.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${framework.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10`}></div>
                  <div className="relative glass rounded-2xl p-8 h-full border border-dark-500/5 dark:border-white/5 bg-light-600/50 dark:bg-dark-600/50 backdrop-blur-xl transition-all duration-500 hover:border-teacch-orange/20">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={framework.illustration}
                        alt={framework.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-2">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-dark-400 dark:text-gray-400 mb-4">
                      {framework.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {framework.description.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2 text-dark-400 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-teacch-orange flex-shrink-0 mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="relative py-32 bg-light-100 dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Quarterly Gatherings
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                TED Circle
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  Workshop
                </span>
              </h2>
              <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                A quarterly gathering where social innovators come together to tackle pressing challenges and exchange impactful solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/ted-circle-workshop.jpg"
                  alt="TED Circle Workshop"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-dark-400 dark:text-gray-400">
                  Each session provides participants with practical tools, strategies, and frameworks focused on key topics, equipping them to drive meaningful change. Our workshops feature:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      text: 'Interactive learning sessions',
                      illustration: '/illustrations/interactive.svg'
                    },
                    {
                      text: 'Expert-led discussions',
                      illustration: '/illustrations/expert.svg'
                    },
                    {
                      text: 'Practical case studies',
                      illustration: '/illustrations/case-study.svg'
                    },
                    {
                      text: 'Networking opportunities',
                      illustration: '/illustrations/networking.svg'
                    },
                    {
                      text: 'Collaborative problem-solving',
                      illustration: '/illustrations/collaboration.svg'
                    },
                    {
                      text: 'Action planning workshops',
                      illustration: '/illustrations/planning.svg'
                    }
                  ].map((point, index) => (
                    <motion.li
                      key={point.text}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 text-dark-400 dark:text-gray-400"
                    >
                      <div className="relative w-8 h-8 flex-shrink-0">
                        <Image
                          src={point.illustration}
                          alt={point.text}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{point.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="relative py-32 bg-white dark:bg-dark-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-teacch-orange uppercase tracking-wider mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                Why Join
                <span className="block text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                  TED Circle
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative glass rounded-2xl p-8 h-full border border-dark-500/5 dark:border-white/5 bg-light-600/50 dark:bg-dark-600/50 backdrop-blur-xl transition-all duration-500 hover:border-teacch-orange/20">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <Image
                        src={benefit.illustration}
                        alt={benefit.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-400 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="register" className="relative py-32 bg-light-100 dark:bg-dark-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-teacch-green/10 to-teacch-orange/10 rounded-3xl p-12 relative overflow-hidden backdrop-blur-xl border border-white/10">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                  Join TED Circle Today
                </h2>
                <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                  Be part of a community that&apos;s driving meaningful change through innovation and collaboration.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#apply"
                    className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 text-lg w-full sm:w-auto"
                  >
                    Apply Now
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 text-lg w-full sm:w-auto border border-white/20"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teacch-green/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teacch-orange/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
} 