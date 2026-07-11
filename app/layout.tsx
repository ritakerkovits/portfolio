import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, DM_Serif_Display } from 'next/font/google'
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
const _dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Product & UX/UI Designer Portfolio | Rita Kerkovits",
  description:
    "A UX/UI design portfolio focused on solving complex problems and building digital products that deliver value.",
  keywords:
    "UX/UI design, visual storytelling, digital experiences, creative portfolio, user-centered design, design thinking, interaction design, web design, mobile app design, graphic design, branding, typography, color theory, prototyping, wireframing, user research",
  openGraph: {
    title: 'Product & UX/UI Designer Portfolio | Rita Kerkovits',
    description: 'A UX/UI design portfolio focused on solving complex problems and building digital products that deliver value.',
    url: 'https://kerkorita.com',
    images: [
      {
        url: '/logos/logo_green.png', 
        width: 1200,
        height: 630,
        alt: 'Rita Kerkovits Portfolio Website',
      },
    ],
  },
 
  icons: {
    icon: [
      {
        url: '/logos/logo_dark.png',
        type: 'image/png',
        sizes: '96x96',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logos/logo_light.png',
        type: 'image/png',
        sizes: '96x96',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/logos/logo_dark.png',
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
