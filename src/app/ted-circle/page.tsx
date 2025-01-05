'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TEDCirclePage() {
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
              The Education Development Circle
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Empowering social innovators with essential knowledge and advanced skills for sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Program Focus */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Program Focus
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Building entrepreneurial solutions driven by passion for change
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Converting purpose into sustainable outcomes
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Developing scalable products or projects
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Understanding policies that impact social innovation
                  </p>
                </li>
              </ul>
            </motion.div>

            {/* Program Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Program Benefits
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-dark-400 dark:text-gray-300">
                  Participants gain access to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-teacch-green text-2xl">•</span>
                    <p className="text-lg text-dark-400 dark:text-gray-300">
                      Expert-led training sessions and workshops
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teacch-green text-2xl">•</span>
                    <p className="text-lg text-dark-400 dark:text-gray-300">
                      Pitch development and presentation skills
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teacch-green text-2xl">•</span>
                    <p className="text-lg text-dark-400 dark:text-gray-300">
                      Resources to accelerate initiatives
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teacch-green text-2xl">•</span>
                    <p className="text-lg text-dark-400 dark:text-gray-300">
                      Networking opportunities with industry leaders
                    </p>
                  </li>
                </ul>
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
              Join TED Circle
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 