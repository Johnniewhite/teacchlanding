'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'TED Circle', href: 'ted-circle' },
    { name: 'Festival of Change', href: 'festival' },
    { name: 'Contact', href: 'contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo.png"
                  alt="TEACcH Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className={`cursor-pointer text-base font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-teacch-orange' 
                      : 'text-white hover:text-teacch-orange'
                  }`}
                >
                  {item.name}
                </ScrollLink>
              </motion.div>
            ))}
            <motion.button
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: navItems.length * 0.1 }}
              className="bg-teacch-green text-white px-6 py-2 rounded-full hover:bg-teacch-green/90 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 flex flex-col justify-between transform transition-transform duration-300">
                <span 
                  className={`block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                />
                <span 
                  className={`block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                />
                <span 
                  className={`block h-0.5 w-6 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  } ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-teacch-orange transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-3 py-2"
              >
                <button className="w-full bg-teacch-green text-white px-6 py-2 rounded-full hover:bg-teacch-green/90 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 