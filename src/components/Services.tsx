'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaRobot, FaChartLine, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Web Application Development',
    description: 'Complete web application development from ideation to MVP, including front-end, back-end, and product design.',
    icon: FaCode,
    gradient: 'from-teacch-green to-emerald-500',
  },
  {
    title: 'Mobile App Development',
    description: 'Comprehensive mobile application development services including front-end, back-end, product design, and dedicated mobile app development.',
    icon: FaRobot,
    gradient: 'from-teacch-orange to-amber-500',
  },
  {
    title: 'Full Website Development',
    description: 'Professional website development including home page, about page, service page, contact page, and portfolio page.',
    icon: FaChartLine,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Branding & Marketing',
    description: 'Complete branding package including consultation, social media management, graphic design, and content creation.',
    icon: FaLightbulb,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Office Space Solutions',
    description: 'Flexible workspace options including private offices, virtual offices, and personal workspaces. Air-conditioned environment with fast internet and power supply.',
    icon: FaUsers,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Training Facilities',
    description: 'Modern training rooms with capacities from 10-40 people, featuring air conditioning, fast internet, and full amenities.',
    icon: FaCogs,
    gradient: 'from-teacch-green to-teacch-orange',
  },
];

export const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef(null);

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

      // Rotate and scale animation for icons
      cardsRef.current.forEach((card) => {
        const icon = card.querySelector('.service-icon');
        gsap.to(icon, {
          scrollTrigger: {
            trigger: card,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
          rotate: 360,
          scale: 1.2,
          duration: 2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
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
    <section className="relative py-32 w-full overflow-hidden bg-light-500 dark:bg-dark-500" id="services" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-light-500 via-light-500/95 to-light-500 dark:from-dark-500 dark:via-dark-500/95 dark:to-dark-500"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-[90%] sm:max-w-full mx-auto" ref={titleRef}>
          <span className="inline-block text-sm md:text-base font-medium text-teacch-orange uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 text-dark-500 dark:text-white break-words">
            Transforming Ideas into{' '}
            <span className="text-gradient bg-gradient-to-r from-teacch-green via-teacch-orange to-teacch-green">
              Reality
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dark-400 dark:text-gray-400 max-w-3xl mx-auto px-2">
            Comprehensive solutions designed to empower your business with cutting-edge technology and innovation.{' '}
            <a 
              href="https://rate.teacch.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teacch-orange hover:text-teacch-green transition-colors duration-300"
            >
              View our rates →
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 max-w-[95%] mx-auto sm:max-w-full">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el: HTMLDivElement | null) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teacch-green to-teacch-orange opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10"></div>
              <div className="relative glass rounded-2xl p-8 h-full border border-dark-500/5 dark:border-white/5 bg-light-600/50 dark:bg-dark-600/50 backdrop-blur-xl transition-all duration-500 hover:border-teacch-orange/20">
                <div className="flex flex-col h-full items-center text-center">
                  <div className="service-icon mb-6 text-teacch-orange group-hover:text-teacch-green transition-colors duration-300">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-dark-500 dark:text-white group-hover:text-teacch-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-400 dark:text-gray-400 text-lg group-hover:text-dark-500 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-teacch-green to-teacch-orange text-white font-medium hover:shadow-lg hover:shadow-teacch-orange/20 transition-all duration-300 transform hover:-translate-y-1">
                      Learn More
                    </button>
                  </div>
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

export default Services; 