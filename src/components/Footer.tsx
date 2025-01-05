'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const navigation = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ted-circle', label: 'TED Circle' },
    { href: '/festival-of-change', label: 'Festival of Change' },
    { href: '/incuba8', label: 'Incuba8' },
    { href: '/shop-mammy', label: 'Shop Mammy' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/teacch',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/teacch',
      icon: FaLinkedinIn,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/teacch',
      icon: FaInstagram,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/teacch',
      icon: FaGithub,
    },
  ],
};

export const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      // Background pattern parallax
      gsap.to('.bg-pattern', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: '20%',
        ease: 'none',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative w-full bg-white dark:bg-dark-500 overflow-hidden border-t border-gray-200 dark:border-white/10" ref={footerRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-dark-500 dark:via-dark-500/95 dark:to-dark-500"></div>
      </div>

      <div className="relative w-full py-16" ref={contentRef}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="space-y-8 lg:col-span-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/logo.png"
                    alt="Teacch Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold font-display text-gray-900 dark:text-white">Teacch</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Empowering innovation through technology and creative solutions. Building a better future, one project at a time.
              </p>
              <div className="flex items-center space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Navigation</h3>
                <ul className="space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Contact</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:hello@teacch.com"
                      className="text-gray-600 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300"
                    >
                      hello@teacch.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    123 Innovation Street<br />
                    Tech Hub, Digital City 12345
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Teacch. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/sitemap" className="text-gray-600 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300">
                  Sitemap
                </Link>
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <Link href="/accessibility" className="text-gray-600 hover:text-teacch-orange dark:text-gray-400 dark:hover:text-teacch-orange transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teacch-green/5 dark:bg-teacch-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-teacch-orange/5 dark:bg-teacch-orange/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer; 