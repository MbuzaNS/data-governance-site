import { useEffect, useRef, useState } from 'react'
import { Database, Shield, BarChart3, Cloud, ArrowRight } from 'lucide-react'

const Services = () => {
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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Database,
      title: 'Data Strategy & Architecture',
      description: 'Design robust data frameworks that align with business objectives and scale with growth.',
    },
    {
      icon: Shield,
      title: 'Compliance & Risk Management',
      description: 'Navigate regulatory landscapes with confidence. GDPR, POPIA, data regulations and industry-specific compliance.',
    },
    {
      icon: BarChart3,
      title: 'Data Quality & Analytics',
      description: 'Ensure accuracy, consistency, and reliability across all data sources and pipelines.',
    },
    {
      icon: Cloud,
      title: 'Cloud Data Migration',
      description: 'Seamless transitions to cloud platforms with governance built in from day one.',
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-500 ${
              isVisible ? 'opacity-100 tracking-[0.2em]' : 'opacity-0 tracking-[0.5em]'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Services
          </span>
          <h2 
            className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mt-4 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 clip-reveal' : 'opacity-0 clip-hidden'
            }`}
            style={{ 
              transitionDelay: '0.15s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Comprehensive Data Governance Solutions
          </h2>
          <p 
            className={`text-[#6a6a6a] text-lg transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.35s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            End-to-end expertise that transforms how organizations manage, protect, and leverage their data assets.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className="grid md:grid-cols-2 md:auto-rows-fr gap-8 items-stretch"
          style={{ perspective: '1200px' }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-350 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${0.5 + index * 0.12}s`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="h-full flex flex-col transition-transform duration-350 group-hover:-translate-y-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Icon */}
                <div 
                  className={`w-16 h-16 bg-black/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-600 group-hover:bg-black group-hover:scale-115 group-hover:rotate-[360deg] ${
                    isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
                  }`}
                  style={{ 
                    transitionDelay: `${0.7 + index * 0.12}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  <service.icon 
                    size={28} 
                    className="text-black group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                {/* Content */}
                <div className="pl-3">
                  <h3 className="text-xl font-medium text-[#0a0a0a] mb-3 group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#6a6a6a] leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="mt-6 flex items-center gap-2 text-black font-medium">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight 
                      size={16} 
                      className="transition-transform duration-300 group-hover:translate-x-2" 
                    />
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
