'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ted-circle', label: 'TED Circle' },
  { href: '/festival-of-change', label: 'Festival of Change' },
  { href: '/incuba8', label: 'Incuba8' },
  { href: '/shop-mammy', label: 'Shop Mammy' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-500/80 dark:bg-dark-500/80 backdrop-blur-xl border-b border-dark-500/5 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 h-12 sm:w-32 sm:h-14">
              <Image
                src="/logo.png"
                alt="Teacch Logo"
                fill
                priority
                className="object-contain dark:brightness-[1.15] dark:contrast-[1.1]"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-dark-500 dark:text-gray-300 hover:text-teacch-orange dark:hover:text-teacch-orange transition-colors duration-300 ${
                  pathname === link.href ? 'text-teacch-orange dark:text-teacch-orange font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-gray-300 hover:text-teacch-orange dark:hover:text-teacch-orange transition-colors duration-300"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-gray-300 hover:text-teacch-orange dark:hover:text-teacch-orange transition-colors duration-300"
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-light-600 dark:bg-dark-600 text-dark-500 dark:text-gray-300 hover:text-teacch-orange dark:hover:text-teacch-orange transition-colors duration-300"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-4 bg-light-500/95 dark:bg-dark-500/95 backdrop-blur-xl border-b border-dark-500/5 dark:border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-dark-500 dark:text-gray-300 hover:text-teacch-orange dark:hover:text-teacch-orange transition-colors duration-300 ${
                pathname === link.href ? 'text-teacch-orange dark:text-teacch-orange font-medium' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 