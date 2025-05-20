'use client';
import React, { useState } from "react"
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';


const offerings = {
  development: [
    {
      title: 'Web Application Development',
      price: '₦1,500,000',
      features: [
        'Ideation to MVP',
        'Front End Development',
        'Back End Development',
        'Product Design'
      ],
      category: 'development'
    },
    {
      title: 'Mobile Application Development',
      price: '₦2,500,000',
      features: [
        'Ideation to MVP',
        'Front End Development',
        'Back End Development',
        'Product Design',
        'Mobile App Developer'
      ],
      category: 'development'
    },
    {
      title: 'Full Website Development',
      price: '₦500,000',
      features: [
        'Front End Development and Product Design',
        'Home Page',
        'About Page',
        'Service Page',
        'Contact Page',
        'Portfolio Page'
      ],
      category: 'development'
    }
  ],
  branding: [
    {
      title: 'Branding',
      price: '₦300,000',
      features: [
        'Consultation',
        'Social Media Management',
        'Graphic Design',
        'Content Creation'
      ],
      category: 'branding'
    }
  ],
  workspace: [
    {
      title: 'Office Space for Admin',
      price: '₦50,000',
      features: [
        '1 Month Access for 1 Person',
        'Air-Conditioned Environment',
        'Fast & Uninterrupted Internet',
        'Uninterrupted Power Supply',
        'Kitchenette Access',
        'Lounge Area Access',
        'Library Access'
      ],
      category: 'workspace'
    },
    {
      title: 'Admin Personnel',
      price: '₦100,000',
      features: [
        'Managing Inquiries',
        'Official Business Address',
        '1 Month Access',
        'Air-Conditioned Environment',
        'Fast Internet',
        'Power Supply'
      ],
      category: 'workspace'
    },
    {
      title: 'Virtual Office',
      price: '₦10,000',
      features: [
        'Use of Office Location',
        'Official Business Address',
        'Personal Mailbox',
        'Frontdesk Service'
      ],
      category: 'workspace'
    },
    {
      title: 'Personal Workspace',
      price: '₦4,000',
      features: [
        '1 Day Access for 1 Person',
        'Air-Conditioned Environment',
        'Fast Internet',
        'Power Supply',
        'Kitchenette Access',
        'Lounge Access'
      ],
      category: 'workspace'
    }
  ]
};

export default function RatePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleGetStarted = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* <Toaster position="top-center" /> */}
      
      {/* Hero Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display text-dark-600 dark:text-white transition-colors duration-300">
              Our Rates
            </h1>
            <p className="text-lg text-dark-400 dark:text-gray-300 max-w-3xl mx-auto mt-4 transition-colors duration-300">
              Explore our comprehensive range of services designed to help your startup thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="w-full py-16 bg-white dark:bg-dark-500 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white mb-12 text-center transition-colors duration-300">
            Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.development.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-2xl font-semibold text-teacch-orange mt-2">{service.price}</p>
                <ul className="mt-4 space-y-2 text-dark-400 dark:text-gray-300 transition-colors duration-300">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-teacch-green">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleGetStarted(service.title)}
                  className="mt-6 px-6 py-3 bg-teacch-green hover:bg-teacch-orange text-white rounded-xl transition-colors duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Section */}
      <section className="w-full py-16 bg-light-100 dark:bg-dark-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white mb-12 text-center transition-colors duration-300">
            Branding Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.branding.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-500 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-2xl font-semibold text-teacch-orange mt-2">{service.price}</p>
                <ul className="mt-4 space-y-2 text-dark-400 dark:text-gray-300 transition-colors duration-300">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-teacch-green">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleGetStarted(service.title)}
                  className="mt-6 px-6 py-3 bg-teacch-green hover:bg-teacch-orange text-white rounded-xl transition-colors duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace Solutions Section */}
      <section className="w-full py-16 bg-white dark:bg-dark-500 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white mb-12 text-center transition-colors duration-300">
            Workspace Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.workspace.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-2xl font-semibold text-teacch-orange mt-2">{service.price}</p>
                <ul className="mt-4 space-y-2 text-dark-400 dark:text-gray-300 transition-colors duration-300">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="text-teacch-green">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleGetStarted(service.title)}
                  className="mt-6 px-6 py-3 bg-teacch-green hover:bg-teacch-orange text-white rounded-xl transition-colors duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white transition-colors duration-300">
            Ready to Transform Your Startup?
          </h2>
          <p className="text-lg text-dark-400 dark:text-gray-300 max-w-3xl mx-auto mt-4 transition-colors duration-300">
            Join Incuba8 and take your business to the next level with our comprehensive support system.
          </p>
          <button 
            onClick={() => handleGetStarted('General Inquiry')}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange hover:from-teacch-orange hover:to-teacch-green text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
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
