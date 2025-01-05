'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TEDCirclePage() {
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
                TED Circle at TEACcH
              </h1>
              <p className="text-lg text-dark-400 dark:text-gray-400">
                Join our vibrant community of thinkers and doers as we explore ideas worth spreading. Our TED Circle brings together diverse perspectives for meaningful discussions that inspire action and change.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300">
                Join Our Next Session
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/ted-circle-hero.jpg"
                alt="TED Circle at TEACcH"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Why Join Our TED Circle?
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the power of shared ideas and collaborative learning in a supportive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Engaging Discussions',
                description: 'Participate in thought-provoking conversations about the latest TED Talks and global issues.',
              },
              {
                title: 'Diverse Community',
                description: 'Connect with people from various backgrounds, sharing different perspectives and experiences.',
              },
              {
                title: 'Personal Growth',
                description: 'Develop critical thinking, communication skills, and expand your worldview.',
              },
              {
                title: 'Networking',
                description: 'Build meaningful relationships with like-minded individuals in your community.',
              },
              {
                title: 'Regular Events',
                description: 'Join our monthly sessions featuring carefully curated TED Talks and themed discussions.',
              },
              {
                title: 'Action Projects',
                description: 'Turn ideas into reality through collaborative community projects and initiatives.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-dark-400 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Ready to Join the Conversation?
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Be part of our growing community of curious minds and change-makers.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300">
              Register for Next Session
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 