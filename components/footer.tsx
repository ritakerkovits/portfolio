import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card dark:bg-[#071401] text-black py-16 border-t border-black/10 pt-8 ">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:justify-items-center">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center text-xl font-semibold text-foreground focus:outline-none"
              aria-label="Home Link"
            >
              {/* Replaced static link text with your responsive dynamic component */}
              <Logo className="w-9 h-9" />
            </Link>
            
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider dark:text-white/80">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/#work" className="text-black/80 hover:text-black transition-colors text-sm dark:text-white/60 dark:hover:text-white">
                Work
              </Link>
              
              <Link href="/about" className="text-black/80 hover:text-black transition-colors text-sm dark:text-white/60 dark:hover:text-white">
                About Me
              </Link>
              
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider dark:text-white/80">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-black/80 dark:text-white/80"></p>
              <div className="flex gap-4 pt-2">
                <a href="mailto:rkerkovits@gmail.com" className="text-black/80 hover:text-black transition-colors dark:text-white/60 dark:hover:text-white">
                  rkerkovits@gmail.com
                </a>
                
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/rita-kerkovits/" target="_blank"   className="text-black/80 hover:text-black transition-colors dark:text-white/60 dark:hover:text-white">
                  LinkedIn
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10 dark:border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ">
          <p className="text-black/60 text-sm dark:text-white/60 ">
            &copy; {currentYear} Rita Kerkovits. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
