'use client';
import React from "react"
import { motion } from 'framer-motion';


export default function RatePage() {
  return (
    <main className="flex min-h-screen flex-col">
      
      {/* Hero Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display text-dark-600 dark:text-white">
              Our Rates
            </h1>
            <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mt-4">
              Explore our affordable pricing plans tailored to meet your startup’s needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-24 bg-white dark:bg-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Basic Plan', price: '$49/month', features: ['Workspace Access', 'Mentorship'] },
              { title: 'Pro Plan', price: '$99/month', features: ['Workspace + Events', '1-on-1 Mentorship'] },
              { title: 'Premium Plan', price: '$199/month', features: ['All Services', 'Priority Support'] }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-light-100 dark:bg-dark-600 p-8 rounded-2xl text-center"
              >
                <h3 className="text-xl font-bold text-dark-600 dark:text-white">{plan.title}</h3>
                <p className="text-lg font-semibold text-teacch-orange mt-2">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-dark-400 dark:text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-teacch-green text-white rounded-xl">
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-light-100 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display text-dark-600 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-dark-400 dark:text-gray-400 max-w-3xl mx-auto mt-4">
            Join our incubator and take your startup to the next level.
          </p>
          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white rounded-xl">
            Apply Now
          </button>
        </div>
      </section>

    </main>
  );
}
