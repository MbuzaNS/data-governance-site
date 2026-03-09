import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '../content/portfolioProjects'

const Portfolio = () => {
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

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-500 ${
              isVisible ? 'opacity-100 tracking-[0.2em]' : 'opacity-0 tracking-[0.5em]'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Portfolio
          </span>
          <h2 
            className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mt-4 mb-6 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: '0.15s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Success Stories: A Case Study
          </h2>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '1200px' }}
        >
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${0.4 + index * 0.15}s`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isVisible ? 'rotateX(0deg)' : 'rotateX(25deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                
                {/* Category Badge */}
                <div 
                  className={`absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0a0a0a] transition-all duration-400 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ 
                    transitionDelay: `${0.7 + index * 0.15}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  {project.category}
                </div>

                {/* View Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 transition-transform duration-400 group-hover:-translate-y-2">
                <h3 className="text-xl font-medium text-[#0a0a0a] mb-1 group-hover:text-black transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-black/60 font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-[#6a6a6a] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
