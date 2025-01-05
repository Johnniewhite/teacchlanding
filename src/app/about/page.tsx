'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
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
                About TEACcH
              </h1>
              <p className="text-lg text-dark-400 dark:text-gray-400">
                TEACcH is a social innovation hub dedicated to empowering individuals and organizations through innovative programs and initiatives. We believe in the power of collaboration, creativity, and community to drive positive change.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about-hero.jpg"
                alt="About TEACcH"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-dark-400 dark:text-gray-400">
                To foster social innovation and empower change-makers through education, collaboration, and sustainable solutions. We strive to create lasting positive impact in our communities by bridging gaps and building capacity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white">
                Our Vision
              </h2>
              <p className="text-lg text-dark-400 dark:text-gray-400">
                A world where social innovation drives sustainable development, and every individual has the opportunity to contribute to positive change. We envision communities transformed through collaborative action and innovative thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
              The journey of building a community of change-makers.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: '2020',
                title: 'The Beginning',
                description: 'TEACcH was founded with a vision to transform social innovation in our community.',
              },
              {
                year: '2021',
                title: 'Growing Impact',
                description: 'Launched our flagship programs: TED Circle, Festival of Change, and Incuba8.',
              },
              {
                year: '2022',
                title: 'Community Expansion',
                description: 'Established partnerships with key organizations and expanded our reach.',
              },
              {
                year: '2023',
                title: 'Innovation Hub',
                description: 'Transformed into a full-fledged social innovation hub supporting multiple initiatives.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-1/4">
                  <span className="text-2xl font-bold text-teacch-orange">
                    {milestone.year}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-dark-400 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-600 dark:text-white">
              Our Team
            </h2>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation and change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Founder & CEO',
                image: '/images/team/john.jpg',
              },
              {
                name: 'Jane Smith',
                role: 'Program Director',
                image: '/images/team/jane.jpg',
              },
              {
                name: 'Mike Johnson',
                role: 'Community Manager',
                image: '/images/team/mike.jpg',
              },
              {
                name: 'Sarah Williams',
                role: 'Innovation Lead',
                image: '/images/team/sarah.jpg',
              },
              {
                name: 'David Brown',
                role: 'Operations Manager',
                image: '/images/team/david.jpg',
              },
              {
                name: 'Lisa Chen',
                role: 'Partnerships Lead',
                image: '/images/team/lisa.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 rounded-2xl overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-600 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-dark-400 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 