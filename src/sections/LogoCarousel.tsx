import { useEffect, useRef, useState } from 'react'
import {
  Lightbulb,
  Cog,
  Database,
  Layout,
  Users,
  Network,
  Scale,
  GraduationCap,
  Coins,
  Tags,
  Share2,
  Library,
  Package,
  Brain,
  Bot,
} from 'lucide-react'

const LogoCarousel = () => {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const competencies = [
    { name: 'Data Strategy', icon: Lightbulb },
    { name: 'Business Engineering', icon: Cog },
    { name: 'Data Management', icon: Database },
    { name: 'Information Architecture', icon: Network },
    { name: 'Data Governance', icon: Scale },
    { name: 'Framework Design', icon: Layout },
    { name: 'Data Culture Change', icon: Users },
    { name: 'Data Economisation', icon: Coins },
    { name: 'Metadata Design', icon: Tags },
    { name: 'Data Sharing Enablement', icon: Share2 },
    { name: 'Data Catalogues', icon: Library },
    { name: 'Governed Data Products', icon: Package },
    { name: 'Data Literacy and Training', icon: GraduationCap },
    { name: 'Data Thought Leader', icon: Brain },
    { name: 'AI Governance', icon: Bot },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20 mb-10">
        <p 
          className={`text-xs font-semibold tracking-[0.2em] uppercase text-black text-center transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          TRUSTED CORE COMPETENCIES
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row 1 - Left to Right */}
        <div 
          className={`flex mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
          style={{ transitionDelay: '0.3s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex animate-scroll-left">
            {[...competencies, ...competencies].map((comp, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3 mx-10 px-8 py-4 bg-gray-50 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <comp.icon 
                  size={28} 
                  className="text-[#6a6a6a] group-hover:text-black transition-colors duration-300" 
                />
                <span className="text-lg font-medium text-[#6a6a6a] group-hover:text-[#0a0a0a] transition-colors duration-300 whitespace-nowrap">
                  {comp.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling Row 2 - Right to Left */}
        <div 
          className={`flex transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
          style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="flex animate-scroll-right">
            {[...[...competencies].reverse(), ...competencies].map((comp, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3 mx-10 px-8 py-4 bg-gray-50 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <comp.icon 
                  size={28} 
                  className="text-[#6a6a6a] group-hover:text-black transition-colors duration-300" 
                />
                <span className="text-lg font-medium text-[#6a6a6a] group-hover:text-[#0a0a0a] transition-colors duration-300 whitespace-nowrap">
                  {comp.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
