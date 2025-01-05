'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Import client components
const AnimatedFeatureCard = dynamic(() => import('../../components/AnimatedFeatureCard'), {
  ssr: false
});

const AnimatedContent = dynamic(() => import('../../components/AnimatedContent'), {
  ssr: false
});

const HeroAnimation = dynamic(() => import('../../components/HeroAnimation'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-light-100 to-light-200 dark:from-dark-500 dark:to-dark-600" />
  )
});

export default function ShopMammyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <AnimatedContent delay={0}>
            <div className="text-center max-w-4xl">
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <Image
                  src="/shopmammy.png"
                  alt="Shop Mammy Logo"
                  width={192}
                  height={192}
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-dark-600 dark:text-white">
                Shop Mammy
              </h1>
              <p className="text-xl md:text-2xl text-dark-500 dark:text-gray-300 mb-8">
                Make impact with every purchase
              </p>
              <p className="text-lg text-dark-400 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Shop Mammy connects conscious consumers with meaningful causes through everyday shopping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.shopmammy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl text-lg hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300"
                >
                  Start Shopping
                </a>
                <a
                  href="https://shopmammy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-dark-500/10 dark:bg-white/10 backdrop-blur-sm text-dark-500 dark:text-white font-medium rounded-xl text-lg hover:bg-dark-500/20 dark:hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </AnimatedContent>

          {/* Scroll Indicator - Only render on client side */}
          {isClient && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex flex-col items-center text-dark-400 dark:text-gray-400"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>

        {/* Background Animation */}
        <HeroAnimation />
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 px-4 bg-light-500 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-500 dark:text-white">
                How It Works
              </h2>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-dark-500 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-500 shadow-xl"
                >
                  <h3 className="text-xl font-bold mb-4 text-dark-500 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-dark-400 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-dark-500 to-dark-600">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedContent delay={0.2}>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                Start Shopping with Purpose
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of conscious consumers making a difference with every purchase
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.shopmammy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl text-lg hover:shadow-2xl hover:shadow-teacch-green/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    title: "Shop & Support",
    description: "Make purchases while contributing to underprivileged communities and verified social causes.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>
  },
  {
    title: "Track Progress",
    description: "Monitor your orders through our intuitive dashboard from vendor to delivery.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
  },
  {
    title: "Multiple Payment Options",
    description: "Fund your account easily with USSD, bank transfers, and secure online payments.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /></svg>
  }
];

const faqs = [
  {
    question: "What is Shop Mammy about?",
    answer: "Shop Mammy is an online marketplace that combines shopping with social impact. It allows users to shop seamlessly while contributing to underprivileged communities and verified social causes through their purchases."
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order through a progress bar on your dashboard, which shows your order's journey—from the vendor, to the rider, to your designated pickup location."
  },
  {
    question: "Does Shop Mammy verify the social causes and NGO partners?",
    answer: "Yes, all social causes and NGO partners go through a strict validation process to ensure they meet our standards of accountability and transparency."
  },
  {
    question: "How do I fund my Shop Mammy account?",
    answer: "You can fund your Shop Mammy account using multiple payment methods, including USSD codes, bank transfers, and other secure online payment options."
  },
  {
    question: "How many causes can I donate to?",
    answer: "There's no limit—you can donate to as many causes as you wish. Shop Mammy empowers you to make a broader impact with your contributions."
  }
]; 