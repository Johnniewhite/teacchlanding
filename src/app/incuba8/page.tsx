'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Incuba8Page() {
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
              Incuba8
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              TEACcH's Incubator Program providing holistic solutions to organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Program Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Program Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-dark-400 dark:text-gray-300">
                  Incuba8 is designed to address gaps in organizations' product and service offerings. Through strategic guidance and comprehensive resources, we ensure our partner organizations are equipped to thrive and scale their impact.
                </p>
              </div>
            </motion.div>

            {/* Services Offered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-500 dark:text-white">
                Services Offered
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Strategic Business Guidance
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Product Development Support
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Service Enhancement Consulting
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teacch-orange text-2xl">•</span>
                  <p className="text-lg text-dark-400 dark:text-gray-300">
                    Resource Allocation Optimization
                  </p>
                </li>
              </ul>
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
              Partner with Incuba8
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 