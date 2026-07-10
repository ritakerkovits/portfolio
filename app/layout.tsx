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
  description:
    "A portfolio showcasing my work as a UX/UI designer, and creative problem solver. Explore my projects, case studies, and design philosophy.",
  keywords:
    "UX/UI design, visual storytelling, digital experiences, creative portfolio, user-centered design, design thinking, interaction design, web design, mobile app design, graphic design, branding, typography, color theory, prototyping, wireframing, user research",
 
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
