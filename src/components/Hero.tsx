'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dii1mpzje/image/upload/v1727386016/foc/lagossstech_47of458.jpg"
            alt="Diverse team collaborating in a modern innovation space"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            sizes="100vw"
          />
          
          {/* Enhanced Gradient Overlay with multiple layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-500/95 via-dark-500/85 to-dark-500/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-teacch-green/10 via-transparent to-teacch-orange/10"></div>

          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:75px_75px]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-[size:25px_25px]"></div>
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black,transparent)]"></div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto flex flex-col min-h-[100dvh] px-4 sm:px-6 lg:px-8">
        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col justify-center items-center pt-20 pb-24">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center w-full max-w-[min(95%,64rem)]"
          >
            {/* Enhanced Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-6 sm:py-2 rounded-full bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-md mb-4 sm:mb-8 border border-white/20 shadow-2xl shadow-dark-500/20"
            >
              <span className="relative text-xs sm:text-sm md:text-base font-medium text-white uppercase tracking-wider whitespace-normal break-words max-w-full">
                Transforming Ideas into Impact
              </span>
            </motion.div>
            
            {/* Enhanced Main heading with animation */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-4 sm:mb-8 text-white leading-[1.1] tracking-tight break-words"
            >
              <span className="inline">Empowering{' '}</span>
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green bg-clip-text text-transparent break-words">
                  Social Innovation
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-teacch-green/20 via-teacch-orange/20 to-teacch-green/20 blur-2xl -z-10"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>{' '}
              <br className="hidden sm:block" />
              <span className="inline">for a Better Tomorrow</span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-12 mx-auto leading-relaxed font-light max-w-[min(95%,48rem)] break-words"
            >
              Join us in creating sustainable solutions that drive positive change. Through innovation, collaboration, and dedication, we&apos;re building a future where every idea has the potential to transform lives.
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 w-full max-w-[min(95%,32rem)] mx-auto"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex-1 sm:flex-initial flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium rounded-xl text-center transition-all duration-300 text-sm sm:text-lg hover:shadow-2xl hover:shadow-teacch-green/20 border border-white/10"
              >
                Get Started
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="flex-1 sm:flex-initial flex items-center justify-center group px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-xl text-white font-medium rounded-xl text-center border border-white/20 transition-all duration-300 text-sm sm:text-lg hover:bg-white/20"
              >
                Explore Services
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator - Now in a separate container */}
        <div className="h-20 relative w-full flex justify-center items-end pb-4 sm:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-1 sm:space-y-2"
            >
              <span className="text-xs sm:text-sm font-medium text-gray-300">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 backdrop-blur-sm bg-dark-500/10"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 