import type { Metadata } from 'next';
import { Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Teacch - Empowering Social Innovation',
  description: 'Transforming ideas into sustainable solutions that drive positive change.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-body overflow-x-hidden w-full max-w-[100vw] min-h-screen bg-light-500 text-dark-500 dark:bg-dark-500 dark:text-white transition-colors duration-300`}>
        <Navbar />
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
