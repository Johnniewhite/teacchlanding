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
      { href: '/web-development', label: 'Web Development' },
      { href: '/web-app', label: 'Web App Development' },
      { href: '/mobile-app', label: 'Mobile App Development' },
      { href: '/ui-ux', label: 'UI/UX Design' },
    ],
  },
  {
    label: 'Branding & Marketing',
    links: [
      { href: '/social-media', label: 'Social Media Management' },
      { href: '/cc', label: 'Content Creation' },
      { href: '/design', label: 'Design' },
    ],
  },
  {
    label: 'Project',
    links: [
      { href: '/programs', label: 'Programs Developed' },
    ],
  },
  {
    label: 'Education',
    links: [
      { href: '/ted-circle', label: 'TED Circle' },
      { href: 'https://www.thewellteachersfoundation.com/', label: 'The Well' },
    ],
  },
  {
    label: 'Innovation',
    links: [
      { href: '/festival-of-change', label: 'FOC' },
      { href: '/shop-mammy', label: 'Shop Mammy' },
    ],
  },{
    label:"Work Space",
    links: [
      {href:"/innova8/rates",label:"Work Space"}
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
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48  dark:bg-dark-600 rounded-md shadow-lg z-10 overflow-hidden"
                  >
                    {group.links.map((link) => {

                      const isTechAndBrandGroup = group.label === "Technology" || group.label === "Branding & Marketing"
                      const href = isTechAndBrandGroup ? "/incuba8/rates" : link.href

                      return (

                        <Link
                          key={link.href}
                          href={href}
                          className={`block px-4 py-2 text-sm border-b-1 hover:text-teacch-orange   `}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
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
                    const isTechAndBrandGroup = group.label === "Technology" || group.label === "Branding & Marketing"
                    const href = isTechAndBrandGroup ? "/incuba8/rates" : link.href


                    return (
                      <Link
                        key={link.href}
                        href={href}
                        className={`block px-4 py-2 text-sm ${pathname === link.href
                          ? 'text-teacch-orange font-medium'
                          : 'text-dark-600 dark:text-white hover:text-teacch-orange'
                          }`}
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {link.label}
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