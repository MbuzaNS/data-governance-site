import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollY: number
  isSubpage?: boolean
  subpageBackLabel?: string
  subpageBackHref?: string
}

const Navigation = ({
  scrollY,
  isSubpage = false,
  subpageBackLabel = 'Back to Home',
  subpageBackHref = '/',
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = scrollY > 50

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5'
            : 'bg-transparent py-3'
        }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center shrink-0"
              aria-label="Siyabonga - The Data Professional"
            >
              <img
                src="/siyabonga-logo.png"
                alt="Siyabonga - The Data Professional"
                className="h-[52px] sm:h-[58px] lg:h-[64px] xl:h-[68px] w-auto max-w-[280px] object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {!isSubpage &&
                navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-medium text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}

              <button
                onClick={() => {
                  if (isSubpage) {
                    window.location.href = subpageBackHref
                    return
                  }

                  window.location.href = '/enquiries'
                }}
                className="px-6 py-3 bg-[#0a0a0a] text-white text-sm font-medium rounded-full hover:bg-[#333333] transition-all duration-300 hover:shadow-lg"
              >
                {isSubpage ? subpageBackLabel : 'Work With Me'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#0a0a0a]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-24">
            <div className="flex flex-col gap-4">
              {!isSubpage &&
                navLinks.map((link, index) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-medium text-[#0a0a0a] py-3 border-b border-gray-100 hover:text-[#333333] transition-colors"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen
                        ? 'fadeInRight 0.4s ease forwards'
                        : 'none',
                    }}
                  >
                    {link.label}
                  </button>
                ))}

              <button
                onClick={() => {
                  if (isSubpage) {
                    window.location.href = subpageBackHref
                    return
                  }

                  window.location.href = '/enquiries'
                }}
                className="mt-4 px-6 py-4 bg-[#0a0a0a] text-white font-medium rounded-full hover:bg-[#333333] transition-all duration-300"
              >
                {isSubpage ? subpageBackLabel : 'Work With Me'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default Navigation