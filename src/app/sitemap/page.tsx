'use client';

import Link from 'next/link';

const navigation = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/ted-circle', label: 'TED Circle' },
    { href: '/festival-of-change', label: 'Festival of Change' },
    { href: '/incuba8', label: 'Incuba8' },
    { href: '/shop-mammy', label: 'Shop Mammy' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/accessibility', label: 'Accessibility' },
  ],
};

export default function SitemapPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Sitemap</h1>
        
        <div className="grid gap-16">
          {/* Main Navigation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Main Navigation</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Legal</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {navigation.legal.map((item) => (
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
          </section>
        </div>
      </div>
    </main>
  );
} 