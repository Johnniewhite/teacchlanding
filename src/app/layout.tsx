import { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.teacch.co'),
  title: {
    default: 'Teacch - Empowering Social Innovation',
    template: '%s | Teacch'
  },
  description: 'Transforming ideas into sustainable solutions that drive positive change.',
  keywords: ['social innovation', 'sustainable solutions', 'TED Circle', 'festival of change', 'social transformation', 'positive change', 'education innovation'],
  authors: [{ name: 'Teacch Team' }],
  creator: 'Teacch',
  publisher: 'Teacch',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Teacch - Empowering Social Innovation',
    description: 'Transforming ideas into sustainable solutions that drive positive change.',
    url: 'https://www.teacch.co',
    siteName: 'Teacch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.teacch.co/logo.png',
        width: 800,
        height: 600,
        alt: 'Teacch Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teacch - Empowering Social Innovation',
    description: 'Transforming ideas into sustainable solutions that drive positive change.',
    creator: '@teacch',
    images: ['https://www.teacch.co/logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'qkYsYNmIAar7zv6oQ7SOgj42FxQJ17uEytWPKoZOcMY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
