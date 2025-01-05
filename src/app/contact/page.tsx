'use client';

import { motion } from 'framer-motion';
import { Contact } from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display text-dark-600 dark:text-white">
                Contact Us
              </h1>
              <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
                Have questions or want to learn more about our programs? We&apos;d love to hear from you. Reach out to us through any of the channels below or fill out the contact form.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </main>
  );
} 