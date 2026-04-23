import { useEffect, useRef, useState } from 'react'
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '/enquiries' },
  ]

  const services = [
    'Data Strategy & Architecture',
    'Compliance & Risk Management',
    'Cloud Data Migration',
    'Data Quality &Analytics',
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bonga-mabuza-5b5498160/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
      return
    }

    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer ref={sectionRef} className="bg-[#0a0a0a] pt-20 pb-8">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <a
              href="/"
              className="mb-4 inline-block text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span className="flex flex-col leading-tight">
                <span className="text-2xl font-semibold">SIYABONGA</span>
                <span className="text-base font-medium">The Data Professional</span>
              </span>
            </a>
            <p
              className={`text-white/60 leading-relaxed transition-all duration-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.15s' }}
            >
              Transforming data into strategic assets through enterprise governance excellence.
            </p>
          </div>

          <div>
            <h4
              className={`mb-6 font-medium text-white transition-all duration-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="inline-block text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`mb-6 font-medium text-white transition-all duration-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.15s' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={service}
                  className={`transition-all duration-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${0.25 + index * 0.08}s` }}
                >
                  <span className="inline-block cursor-pointer text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`mb-6 font-medium text-white transition-all duration-400 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li
                className={`flex items-center gap-3 text-white/60 transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <Mail size={18} className="text-white/40" />
                siyabonga@siinoma.co.za
              </li>
              <li
                className={`flex items-center gap-3 text-white/60 transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '0.38s' }}
              >
                <Phone size={18} className="text-white/40" />
                +27 (0) 71 679 6220
              </li>
              <li
                className={`flex items-center gap-3 text-white/60 transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '0.46s' }}
              >
                <MapPin size={18} className="text-white/40" />
                Johannesburg, South Africa
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-250 hover:scale-110 hover:bg-white hover:text-black ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    transitionDelay: `${0.5 + index * 0.1}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mb-8 h-px bg-white/10 transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.6s', transformOrigin: 'left' }}
        />

        <div
          className={`flex flex-col items-center justify-between gap-4 text-sm text-white/40 transition-all duration-400 md:flex-row ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <p>&copy; 2026 Siyabonga | The Data Professional. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="transition-colors duration-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="transition-colors duration-200 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
