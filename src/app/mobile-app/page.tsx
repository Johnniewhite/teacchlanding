'use client';
import React, { useState } from "react"
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Toaster } from 'react-hot-toast';

const offerings = [
  {
    title: 'MVP Mobile App',
    price: '₦1,500,000',
    features: [
      'Single Platform (iOS or Android)',
      'Core Features Implementation',
      'Basic User Authentication',
      'App Store Submission',
      '1 Month Free Support'
    ],
  },
  {
    title: 'Cross-Platform App',
    price: '₦2,500,000',
    features: [
      'Both iOS & Android Platforms',
      'Advanced Feature Set',
      'Custom Animations & UI',
      'API Integration',
      '3 Months Free Support'
    ],
    popular: true
  },
  {
    title: 'Enterprise Mobile App',
    price: 'Custom Pricing',
    features: [
      'Native Development (Swift/Kotlin)',
      'Highly Scalable Backend',
      'Advanced Security Features',
      'IoT / Custom Integrations',
      'Dedicated Maintenance Team'
    ],
  }
];

export default function MobileAppPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teacch-orange/10 dark:bg-teacch-orange/5 blur-[120px]" />
            <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teacch-green/10 dark:bg-teacch-green/5 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teacch-green/10 text-sm md:text-base font-semibold text-teacch-green uppercase tracking-wider mb-6">
                Technology
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display text-dark-600 dark:text-white transition-colors duration-300 mb-6">
              Mobile App Development
            </h1>
            <p className="text-lg md:text-xl text-dark-400 dark:text-gray-300 transition-colors duration-300">
              Bring your ideas to the palm of your users&apos; hands. We build beautiful, fast, and engaging mobile applications for iOS and Android. Whether you need a cross-platform solution or a high-performance native app, our team delivers premium mobile experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white dark:bg-dark-500 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark-600 dark:text-white mb-16 text-center transition-colors duration-300">
            Investment Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative bg-light-100 dark:bg-dark-600 p-8 md:p-10 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 border ${service.popular ? 'border-teacch-orange' : 'border-gray-200 dark:border-gray-700'} flex flex-col`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teacch-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-dark-600 dark:text-white transition-colors duration-300">{service.title}</h3>
                <div className="my-6">
                    <p className="text-3xl font-bold text-teacch-green">{service.price}</p>
                </div>
                <ul className="mt-4 mb-8 space-y-4 text-dark-400 dark:text-gray-300 text-left flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-teacch-green mt-1">✔</span> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedService(service.title)}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${service.popular ? 'bg-linear-to-r from-teacch-green to-teacch-orange text-white shadow-lg' : 'bg-dark-600 dark:bg-white text-white dark:text-dark-600 hover:bg-teacch-green dark:hover:bg-teacch-green hover:text-white'}`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {selectedService && (
        <ContactForm
          serviceTitle={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </main>
  );
}
