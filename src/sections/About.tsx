import { useEffect, useRef, useState } from 'react'
import { Download, Users, Briefcase, Database } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCountersStarted(true), 700)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: 10, suffix: '+', label: 'Clients', icon: Users },
    { value: 15, suffix: '+', label: 'Roles', icon: Briefcase },
    { value: 10, suffix: 'TB', label: 'Value Unlocked', icon: Database },
  ]

  const Counter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!countersStarted) return
      
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }, [countersStarted, value])
    
    return <span>{prefix}{count}{suffix}</span>
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-20 -rotate-12'
              }`}
              style={{ 
                transitionDelay: '0.3s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                perspective: '800px'
              }}
            >
              <div 
                className="relative"
                style={{ transform: 'rotateY(-3deg)', transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/about-portrait.jpg"
                  alt="About SIYABONGA: The Data Professional"
                  className="w-full max-w-lg rounded-2xl shadow-xl transition-all duration-400 hover:scale-[1.02]"
                  style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                />
                
                {/* Decorative Dot Pattern */}
                <div className="absolute -z-10 -bottom-8 -right-8 grid grid-cols-5 gap-3">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 bg-black/10 rounded-full transition-all duration-600 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{ 
                        transitionDelay: `${0.5 + i * 0.03}s`,
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-white rounded-xl p-4 shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-2xl cursor-default ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                  }`}
                  style={{ 
                    transitionDelay: `${0.7 + index * 0.12}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center">
                      <stat.icon size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#0a0a0a]">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs text-[#6a6a6a]">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <span 
                className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-400 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  clipPath: isVisible ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
                  transitionDelay: '0s'
                }}
              >
                About Me
              </span>
              <div 
                className={`h-[2px] bg-black transition-all duration-500 ${
                  isVisible ? 'w-12' : 'w-0'
                }`}
                style={{ transitionDelay: '0.2s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              />
            </div>

            {/* Headline */}
            <h2 
              className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.15s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              SIYABONGA: The Data Professional
            </h2>

            {/* Body Text */}
            <div className="space-y-4 mb-8">
              <p 
                className={`text-[#6a6a6a] text-lg leading-relaxed transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                With over 15 years of experience in enterprise data management, I specialize in transforming chaotic information ecosystems into strategic assets. My approach combines technical expertise with business acumen to deliver governance frameworks that drive real competitive advantage.
              </p>
              <p 
                className={`text-[#6a6a6a] text-lg leading-relaxed transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.55s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                I've helped Fortune 500 companies reduce data compliance risks by 80% while unlocking the full potential of their data investments. Every engagement is tailored to your unique challenges and objectives.
              </p>
            </div>

            {/* CTA */}
            <a 
              href="/resume.pdf"
              download="Siyabonga_Mabuza_Resume.pdf"
              className={`group inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-500 hover:bg-[#333333] hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}
              style={{ transitionDelay: '1.1s', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
            >
              <Download size={18} />
              Download Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
