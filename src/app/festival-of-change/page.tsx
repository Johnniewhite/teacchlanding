'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FestivalOfChangePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-dark-500 to-dark-600 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Festival of Change
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              An annual conference responding to global challenges that threaten the stability of education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Key Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Key Elements
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Keynote addresses and panel discussions to provide thought leadership
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Innovative activities to spark ideas and solutions
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Opportunities to create impactful startups and foster strategic partnerships
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Access to mentorship, resources, and networking opportunities
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Vision & Impact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Vision & Impact
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-dark-400 dark:text-gray-300">
                  The pioneering Festival of Change was centered on revitalizing education in Nigeria, inspired by the African Union's declaration of a State of Emergency on Education.
                </p>
                <p className="text-lg text-dark-400 dark:text-gray-300">
                  Through this event, TEACcH envisions a transformed educational landscape, championed by the Business, Government, and Development sectors.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl text-lg hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300"
            >
              Join the Festival
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 