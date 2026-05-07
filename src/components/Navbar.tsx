'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/ted-circle', label: 'Tech' },
//   { href: '/festival-of-change', label: 'Education' },
//   { href: '/incuba8', label: 'Incuba8' },
//   { href: '/shop-mammy', label: 'Shop Mammy' },
//   { href: '/contact', label: 'Contact' },
// ];


const navGroups = [
  {
    label: 'Technology',
    links: [
      { href: '/web-development', label: 'Web Development', description: 'Modern, responsive websites & portals.' },
      { href: '/web-app', label: 'Web App Development', description: 'Scalable cloud-native applications.' },
      { href: '/mobile-app', label: 'Mobile App Development', description: 'Premium iOS & Android experiences.' },
      { href: '/ui-ux', label: 'UI/UX Design', description: 'User-centric digital interface design.' },
    ],
  },
  {
    label: 'Branding & Marketing',
    links: [
      { href: '/social-media', label: 'Social Media Management', description: 'Grow your digital community.' },
      { href: '/cc', label: 'Content Creation', description: 'Compelling brand storytelling & media.' },
      { href: '/design', label: 'Design', description: 'Visual identity & graphic systems.' },
    ],
  },
  {
    label: 'Project',
    links: [
      { href: '/programs', label: 'Programs Developed', description: 'Explore our innovation initiatives.' },
    ],
  },
  {
    label: 'Education',
    links: [
      { href: '/ted-circle', label: 'TED Circle', description: 'Collaborative learning communities.' },
      { href: 'https://www.thewellteachersfoundation.com/', label: 'The Well', description: 'Supporting educators across Africa.' },
    ],
  },
  {
    label: 'Innovation',
    links: [
      { href: '/festival-of-change', label: 'FOC', description: 'Our annual social innovation festival.' },
      { href: '/shop-mammy', label: 'Shop Mammy', description: 'Empowering local retail commerce.' },
    ],
  },
  {
    label: "Work Space",
    links: [
      { href: "/innova8/rates", label: "Work Space", description: "Premium collaborative environments." }
    ]
  }
];


const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const pathname = usePathname();
  const hideTimeout = useRef<NodeJS.Timeout | null>(null)



  const handleMouseEnter = (label: string) => {
    // Cancel any pending hide timeout
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Add delay before hiding
    hideTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-500/80 backdrop-blur-lg border-b border-dark-500/5 dark:border-white/5' : 'bg-transparent'
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
                className={`object-contain transition-all duration-300 ${!isScrolled && 'brightness-[2]'
                  }`}
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${textColorClass} hover:text-teacch-orange transition-colors duration-300 ${pathname === link.href ? '!text-teacch-orange font-medium' : ''
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isScrolled
                  ? 'bg-light-600 dark:bg-dark-600'
                  : 'bg-white/10'
                } ${textColorClass} hover:text-teacch-orange transition-all duration-300`}
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
          </div> */}

          {/*Desktop Navigation Updated*/}
          <div className='hidden md:flex items--center space-x-6'>
            <Link href="/about" className='text-[14px]'>
              About
            </Link>
            {navGroups.map((group) => (
              <div key={group.label}
                className='relative'
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >

                <button className={`${textColorClass} flex items-center gap-1 text-[14px]  hover:text-teacch-orange transition-colors duration-300`}>
                  {group.label}
                  <span className='transform transition-transform duration-300 ' style={{ transform: activeDropdown === group.label ? "rotate(180deg)" : "rotate(0" }}>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </button>

                {/* Dropdown Menu */}
                {group.links.length > 0 && activeDropdown === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-4 w-72 p-2 bg-white/95 dark:bg-dark-600/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/5 z-50"
                  >
                    <div className="grid gap-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="group flex flex-col p-3 rounded-xl transition-all duration-300 hover:bg-teacch-orange/10 dark:hover:bg-teacch-orange/20"
                        >
                          <span className="text-sm font-bold text-dark-600 dark:text-white group-hover:text-teacch-orange transition-colors">
                            {link.label}
                          </span>
                          {/* @ts-ignore */}
                          {link.description && (
                            <p className="text-[11px] text-dark-400 dark:text-gray-400 mt-1 leading-tight group-hover:text-dark-600 dark:group-hover:text-gray-300 transition-colors">
                              {/* @ts-ignore */}
                              {link.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>


          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isScrolled
                ? 'bg-light-600 dark:bg-dark-600'
                : 'bg-white/10'
                } ${textColorClass} hover:text-teacch-orange transition-all duration-300`}
            >
              {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${isScrolled
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
      {/* <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className={`md:hidden ${isScrolled ? 'bg-white dark:bg-dark-500' : 'bg-dark-500/90'
          }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${textColorClass} hover:text-teacch-orange transition-colors ${pathname === link.href ? '!text-teacch-orange font-medium' : ''
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div> */}

      {/* Mobile Navigation menu updated */}

      <motion.div initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        className={`md:hidden ${isScrolled ? 'bg-white dark:bg-dark-500' : 'bg-dark-500/90'
          }`}>
        <div className="px-4 py-4 space-y-4 ">
          <Link href="/about" className=''>
            About
          </Link>
          {navGroups.map((group) => (
            <div key={group.label} className='relative' onClick={() => setActiveDropdown(activeDropdown === group.label ? null : group.label)}>
              <button className={`${textColorClass} flex items-center gap-1 hover:text-teacch-orange transition-colors duration-300`}>
                {group.label}
                <span className='transform transition-transform duration-300 ' style={{ transform: activeDropdown === group.label ? "rotate(180deg)" : "rotate(0" }}>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </button>

              {/* {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2 text-sm ${pathname === link.href
                          ? 'text-teacch-orange font-medium'
                          : 'text-dark-600 dark:text-white hover:text-teacch-orange'
                          }`}
                      >
                        {link.label}
                      </Link>
                    ))} */}
              {activeDropdown === group.label && (
                <div className="mt-2 pl-4 space-y-2">
                  {group.links.map((link) => {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl transition-all ${pathname === link.href
                          ? 'bg-teacch-orange/10 text-teacch-orange'
                          : 'text-dark-600 dark:text-white hover:bg-light-600 dark:hover:bg-dark-600'
                          }`}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">{link.label}</span>
                          {/* @ts-ignore */}
                          {link.description && (
                            <span className="text-[10px] text-dark-400 dark:text-gray-400 mt-0.5 leading-tight">
                              {/* @ts-ignore */}
                              {link.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}


            </div>
          ))}
          
        </div>
      </motion.div>

    </motion.nav>
  );
};

export default Navbar; 