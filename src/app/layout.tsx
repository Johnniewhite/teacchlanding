import './globals.css';
import { Space_Grotesk, Syne } from 'next/font/google';

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

export const metadata = {
  title: 'Teacch - Empowering Social Innovation',
  description: 'Teacch is a leading platform for social innovation, offering TED Circle discussions, Festival of Change events, and comprehensive incubator programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body className="font-sans bg-dark-500 text-white overflow-x-hidden w-screen">
        <main className="relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
