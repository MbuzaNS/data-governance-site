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
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    'Data Strategy & Architecture',
    'Compliance & Risk Management',
    'Cloud Data Migration',
    'Data Quality &Analytics',
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer ref={sectionRef} className="bg-[#0a0a0a] pt-20 pb-8">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <a
              href="#"
              className="text-white mb-4 inline-block"
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

          {/* Quick Links */}
          <div>
            <h4 
              className={`text-white font-medium mb-6 transition-all duration-400 ${
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
                    className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className={`text-white font-medium mb-6 transition-all duration-400 ${
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
                  <span className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className={`text-white font-medium mb-6 transition-all duration-400 ${
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

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:scale-110 transition-all duration-250 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{ 
                    transitionDelay: `${0.5 + index * 0.1}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className={`h-px bg-white/10 mb-8 transition-all duration-600 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.6s', transformOrigin: 'left' }}
        />

        {/* Copyright */}
        <div 
          className={`flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm transition-all duration-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <p>(c) 2024 SIYABONGA: The Data Professional. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

