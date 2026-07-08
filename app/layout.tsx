import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LightboxProvider } from '@/components/image-lightbox'
import { ThemeToggle } from '@/components/theme-toggle'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rita's gallery",
  icons: {
    icon: [
      {
        url: '/logos/logo_green.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logos/logo_light.svg?v=2',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/logos/logo_green.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${_playfairDisplay.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <LightboxProvider>{children}</LightboxProvider>
        <ThemeToggle />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
