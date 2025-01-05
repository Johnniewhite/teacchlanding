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

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
    // Set initial dark mode based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    // Check initial scroll position
    const heroHeight = window.innerHeight;
    setIsScrolled(window.scrollY > heroHeight * 0.8);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  const textColorClass = isScrolled 
    ? 'text-dark-600 dark:text-white' 
    : 'text-white';

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <motion.nav 
      initial={false}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-dark-500/80 backdrop-blur-lg border-b border-dark-500/5 dark:border-white/5' : 'bg-transparent'
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
                className={`object-contain transition-all duration-300 ${
                  !isScrolled && 'brightness-[2]'
                }`}
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
                className={`${textColorClass} hover:text-teacch-orange transition-colors duration-300 ${
                  pathname === link.href ? '!text-teacch-orange font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${
                isScrolled 
                  ? 'bg-light-600 dark:bg-dark-600' 
                  : 'bg-white/10'
              } ${textColorClass} hover:text-teacch-orange transition-all duration-300`}
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${
                isScrolled 
                  ? 'bg-light-600 dark:bg-dark-600' 
                  : 'bg-white/10'
              } ${textColorClass} hover:text-teacch-orange transition-all duration-300`}
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled 
                  ? 'bg-light-600 dark:bg-dark-600' 
                  : 'bg-white/10'
              } ${textColorClass} hover:text-teacch-orange transition-all duration-300`}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className={`md:hidden ${
          isScrolled ? 'bg-white dark:bg-dark-500' : 'bg-dark-500/90'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${textColorClass} hover:text-teacch-orange transition-colors ${
                pathname === link.href ? '!text-teacch-orange font-medium' : ''
              }`}
              onClick={() => setIsOpen(false)}
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