import { useEffect, useState } from 'react'
import { Mail, Phone, ChevronDown, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Image */}
        <div 
          className={`hidden lg:block w-[45%] relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <img
              src="/hero-bw.jpg"
              alt="Data Governance Concept"
              className="w-full h-[85vh] object-contain object-center"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-32 lg:py-0">
          <div className="max-w-2xl">
            {/* Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0a0a0a] font-medium leading-[1.1] mb-8 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: '0.3s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Transforming
              <br />
              Data Into
              <br />
              <span className="text-[#0a0a0a]">Strategic Assets</span>
            </h1>

            {/* Body Text */}
            <p 
              className={`text-[#6a6a6a] text-lg leading-relaxed mb-10 max-w-lg transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: '0.5s',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Enterprise data governance that turns information chaos into competitive advantage. 
              I help organizations unlock the full potential of their data through strategic frameworks 
              that drive measurable results.
            </p>

            {/* CTA Button */}
            <div 
              className={`mb-12 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ 
                transitionDelay: '0.7s',
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}
            >
              <button 
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#333333] hover:shadow-xl hover:-translate-y-1"
              >
                Start Your Transformation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Contact Info */}
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: '0.9s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Email */}
              <a 
                href="mailto:siyabonga@siinoma.co.za"
                className="group flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Mail size={20} />
                </div>
                <span className="text-[#0a0a0a] font-medium group-hover:text-[#333333] transition-colors duration-300">
                  siyabonga@siinoma.co.za
                </span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+270716796220"
                className="group flex items-center gap-4"
              >
                <div className="w-14 h-14 bg-[#0a0a0a] rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Phone size={20} />
                </div>
                <span className="text-[#0a0a0a] font-medium group-hover:text-[#333333] transition-colors duration-300">
                  +27 (0) 71 679 6220
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Left Side */}
      <div 
        className={`hidden lg:flex absolute left-8 bottom-12 flex-col items-center gap-4 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1.1s' }}
      >
        <span 
          className="text-xs font-medium tracking-[0.2em] text-[#6a6a6a] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll Down
        </span>
        <div className="w-8 h-8 border border-[#0a0a0a] rounded-full flex items-center justify-center animate-bounce">
          <ChevronDown size={16} className="text-[#0a0a0a]" />
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div 
        className={`hidden lg:flex absolute right-8 bottom-12 flex-col items-center gap-6 transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <a 
          href="#" 
          className="text-xs font-medium tracking-[0.2em] text-[#6a6a6a] uppercase hover:text-[#0a0a0a] transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          LinkedIn
        </a>
        <a 
          href="#" 
          className="text-xs font-medium tracking-[0.2em] text-[#6a6a6a] uppercase hover:text-[#0a0a0a] transition-colors duration-300"
          style={{ writingMode: 'vertical-rl' }}
        >
          Twitter
        </a>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden absolute top-24 left-0 right-0 flex justify-center pointer-events-none">
        <img
          src="/hero-bw.jpg"
          alt="Data Governance Concept"
          className="w-64 h-64 object-contain opacity-20"
        />
      </div>
    </section>
  )
}

export default Hero
