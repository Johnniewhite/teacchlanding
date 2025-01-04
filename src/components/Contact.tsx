'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
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
    <section className="relative py-32 w-full bg-light-500 dark:bg-dark-500 overflow-hidden" id="contact" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-0 w-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-light-500 via-light-500/95 to-light-500 dark:from-dark-500 dark:via-dark-500/95 dark:to-dark-500"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-dark-500 dark:text-white">
            Let&apos;s Create{' '}
            <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-500 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-white border border-dark-500/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-teacch-orange/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-500 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-white border border-dark-500/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-teacch-orange/50"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-500 dark:text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message || ''}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-white border border-dark-500/5 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-teacch-orange/50"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium hover:shadow-lg hover:shadow-teacch-orange/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
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

export default Contact; 