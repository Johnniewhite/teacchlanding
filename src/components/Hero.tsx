'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-500/95 to-dark-500"></div>
        
        {/* Animated Background Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-teacch-green rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teacch-orange rounded-full blur-3xl"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green blur-xl opacity-30 animate-pulse"></div>
                <span className="relative text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider">
                  Transforming Ideas into Impact
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
            >
              Empowering{' '}
              <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
                Social Innovation
              </span>{' '}
              for a Better Tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Join us in creating sustainable solutions that drive positive change. Through innovation, collaboration, and dedication, we&apos;re building a future where every idea has the potential to transform lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-lg w-full sm:w-auto text-center transition-all duration-300 hover:shadow-lg hover:shadow-teacch-green/20"
              >
                Get Started
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-4 bg-dark-600 text-white font-medium rounded-lg w-full sm:w-auto text-center border border-white/5 transition-all duration-300 hover:bg-dark-500 hover:border-teacch-orange/50"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/logo.png"
                alt="Teacch Innovation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-teacch-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 