'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ValueIcons = {
  Innovation: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Integrity: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Compassion: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Creativity: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2322 5.23223C16.7957 6.79576 16.7957 9.34835 15.2322 10.9119C13.6686 12.4754 11.116 12.4754 9.55248 10.9119C7.98896 9.34835 7.98896 6.79576 9.55248 5.23223C11.116 3.66871 13.6686 3.66871 15.2322 5.23223" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 10L17.5 15L15 17.5L10 12.5L12.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 19.5L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Collaboration: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M19 12V12.01M5 12V12.01M12 12V12.01M19 9C19 9.82843 18.3284 10.5 17.5 10.5C16.6716 10.5 16 9.82843 16 9C16 8.17157 16.6716 7.5 17.5 7.5C18.3284 7.5 19 8.17157 19 9ZM8 9C8 9.82843 7.32843 10.5 6.5 10.5C5.67157 10.5 5 9.82843 5 9C5 8.17157 5.67157 7.5 6.5 7.5C7.32843 7.5 8 8.17157 8 9ZM15 5C15 5.82843 14.3284 6.5 13.5 6.5C12.6716 6.5 12 5.82843 12 5C12 4.17157 12.6716 3.5 13.5 3.5C14.3284 3.5 15 4.17157 15 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Excellence: () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const values = [
  {
    title: 'Innovation',
    description: 'Pioneering creative solutions to address societal challenges.',
    icon: ValueIcons.Innovation,
    gradient: 'from-teacch-green to-emerald-500',
  },
  {
    title: 'Integrity',
    description: 'Upholding honesty and transparency in our actions.',
    icon: ValueIcons.Integrity,
    gradient: 'from-teacch-orange to-amber-500',
  },
  {
    title: 'Compassion',
    description: 'Centering empathy and care in all we do.',
    icon: ValueIcons.Compassion,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Creativity',
    description: 'Encouraging fresh ideas and bold approaches.',
    icon: ValueIcons.Creativity,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Collaboration',
    description: 'Building partnerships and fostering teamwork to drive meaningful change.',
    icon: ValueIcons.Collaboration,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in every initiative.',
    icon: ValueIcons.Excellence,
    gradient: 'from-teacch-green to-teacch-orange',
  },
];

export const Values = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.2,
          from: 'start',
        },
        ease: 'power4.out',
      });

      // Rotate animation for icons
      cardsRef.current.forEach((card) => {
        const icon = card.querySelector('.value-icon');
        gsap.to(icon, {
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
          rotate: 360,
          duration: 2,
          ease: 'power1.inOut',
        });
      });

      // Background pattern parallax
      gsap.to('.bg-pattern', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: '20%',
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 w-full bg-dark-500 overflow-hidden" id="values" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 w-full bg-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-500/95 to-dark-500"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20" ref={titleRef}>
          <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Principles that{' '}
            <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Guide Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            The foundational values that shape our approach and drive our commitment to creating positive change in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el: HTMLDivElement | null) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teacch-green to-teacch-orange opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10"></div>
              <div className="relative glass rounded-2xl p-8 h-full border border-white/5 transition-all duration-500 hover:border-white/20">
                <div className="flex flex-col h-full items-center text-center">
                  <div className="value-icon mb-6 text-teacch-orange group-hover:text-white transition-colors duration-300">
                    <value.icon />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 group-hover:text-teacch-orange transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teacch-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teacch-orange/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Values; 