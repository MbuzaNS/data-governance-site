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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-500 ${
              isVisible ? 'opacity-100 tracking-[0.2em]' : 'opacity-0 tracking-[0.5em]'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Portfolio
          </span>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mt-4 mb-5 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: '0.15s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Case Studies, Projects, and Collaborations
          </h2>

          <p
            className={`text-[#6a6a6a] text-base lg:text-lg leading-relaxed max-w-2xl mx-auto transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: '0.25s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Selected work showing how data, governance, infrastructure, and operating
            reality come together in complex environments.
          </p>
        </div>

        {/* Featured Case Study */}
        <a
          href="/case-studies/big-data-under-pressure"
          className={`group relative mb-10 lg:mb-12 block overflow-hidden rounded-3xl bg-white border border-black/10 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            transitionDelay: '0.35s',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Featured Image */}
            <div className="relative min-h-[260px] lg:min-h-[360px] overflow-hidden bg-black">
              <img
                src={portfolioProjects[0].image}
                alt="Telecommunications network visual representing data readiness and infrastructure complexity"
                className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-black backdrop-blur-sm">
                Featured Case Study
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
              <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                Big Data Under Pressure
              </span>

              <h3 className="max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-[#0a0a0a] mb-5">
                A Mobile Operator in Emerging Markets
              </h3>

              <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-[#555555] mb-7">
                This case study shows how data readiness changes when regulation,
                identity, infrastructure, and public trust all collide.
              </p>

              <div className="grid gap-3 border-y border-black/10 py-5 mb-7">
                <p className="text-sm lg:text-base text-[#333333] leading-relaxed">
                  <span className="font-medium text-black">Context:</span>{' '}
                  a high-pressure telecommunications environment shaped by regulatory
                  scrutiny and public trust.
                </p>

                <p className="text-sm lg:text-base text-[#333333] leading-relaxed">
                  <span className="font-medium text-black">Focus:</span>{' '}
                  identity, traceability, analytics readiness, data accessibility,
                  and operational risk.
                </p>

                <p className="text-sm lg:text-base text-[#333333] leading-relaxed">
                  <span className="font-medium text-black">Lesson:</span>{' '}
                  data frameworks fail when they are designed for ideal conditions
                  instead of real ones.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors duration-300 group-hover:text-[#A67C52]">
                Read the case study
                <ArrowUpRight
                  size={18}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#A67C52]"
                />
              </div>
            </div>
          </div>
        </a>

        {/* Projects Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '1200px' }}
        >
          {portfolioProjects.slice(1).map((project, index) => (
            <a
              key={project.title}
              href={project.link || '#'}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: `${0.55 + index * 0.15}s`,
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
                    transitionDelay: `${0.85 + index * 0.15}s`,
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
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio