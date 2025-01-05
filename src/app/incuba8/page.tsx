'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Incuba8Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display text-dark-600 dark:text-white">
                Incuba8
              </h1>
              <p className="text-lg text-dark-400 dark:text-gray-400">
                Our startup incubator program designed to help entrepreneurs turn their innovative ideas into successful businesses. Get access to mentorship, resources, and a supportive community of fellow founders.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300">
                Apply Now
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/incuba8-hero.jpg"
                alt="Incuba8 Program"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Program Benefits
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to transform your idea into a thriving business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Mentorship',
                description: 'Get guidance from experienced entrepreneurs and industry experts.',
              },
              {
                title: 'Workspace Access',
                description: 'Modern, fully-equipped workspace with high-speed internet and meeting rooms.',
              },
              {
                title: 'Funding Opportunities',
                description: 'Connect with investors and access funding resources for your startup.',
              },
              {
                title: 'Business Training',
                description: 'Comprehensive workshops covering essential business skills and strategies.',
              },
              {
                title: 'Network Building',
                description: 'Join a community of entrepreneurs and expand your professional network.',
              },
              {
                title: 'Technical Support',
                description: 'Access to technical expertise and resources to build your product.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-dark-400 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Program Timeline
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
              A structured 6-month program to help you build and scale your startup.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                month: 'Month 1-2',
                title: 'Ideation & Validation',
                description: 'Refine your business idea and validate market demand through customer research.',
              },
              {
                month: 'Month 2-3',
                title: 'Product Development',
                description: 'Build your minimum viable product (MVP) with technical guidance and support.',
              },
              {
                month: 'Month 3-4',
                title: 'Business Strategy',
                description: 'Develop your business model, marketing strategy, and financial projections.',
              },
              {
                month: 'Month 4-5',
                title: 'Market Entry',
                description: 'Launch your product and implement your go-to-market strategy.',
              },
              {
                month: 'Month 5-6',
                title: 'Growth & Scaling',
                description: 'Focus on user acquisition, revenue growth, and preparing for investment.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.month}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-500 p-8 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="md:w-1/4">
                    <span className="text-lg font-bold text-teacch-orange">
                      {phase.month}
                    </span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-dark-400 dark:text-gray-400">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Join our next cohort and turn your entrepreneurial dreams into reality.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300">
              Apply to Incuba8
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 