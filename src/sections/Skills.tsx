import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [barsAnimated, setBarsAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setBarsAnimated(true), 500)
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

  const skillCategories = [
    {
      name: 'Governance Skills',
      skills: [
        { name: 'Policy Writing', level: 95 },
        { name: 'Business Engineering', level: 82 },
        { name: 'Strategic Formation', level: 88 },
      ],
    },
    {
      name: 'Transformation Skills',
      skills: [
        { name: 'Training and Facilitation', level: 80 },
        { name: 'Information Architecture', level: 95 },
        { name: 'Change Management', level: 90 },
      ],
    },
    {
      name: 'Compliance & Risk',
      skills: [
        { name: 'GDPR/POPIA', level: 95 },
        { name: 'Data Privacy', level: 90 },
        { name: 'DataRisk Management', level: 88 },
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <span 
              className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Expertise
            </span>
            <h2 
              className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mt-4 mb-6 transition-all duration-600 ${
                isVisible ? 'opacity-100 clip-reveal' : 'opacity-0 clip-hidden'
              }`}
              style={{ 
                transitionDelay: '0.15s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Technical Proficiency
            </h2>
            <p 
              className={`text-[#6a6a6a] text-lg leading-relaxed transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.35s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              Deep expertise across the data governance technology stack, from enterprise platforms to emerging cloud solutions.
            </p>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-3 space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.name}
                className={`transition-all duration-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: `${0.5 + categoryIndex * 0.15}s`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <h3 className="text-lg font-medium text-[#0a0a0a] mb-6">
                  {category.name}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#6a6a6a] group-hover:text-black transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-[#0a0a0a]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-black rounded-full transition-all duration-1200 relative ${
                            barsAnimated ? 'w-full' : 'w-0'
                          }`}
                          style={{ 
                            width: barsAnimated ? `${skill.level}%` : '0%',
                            transitionDelay: `${0.6 + categoryIndex * 0.1 + skillIndex * 0.1}s`,
                            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        >
                          {/* Shimmer effect */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            style={{
                              animation: barsAnimated ? 'shimmer 3s infinite' : 'none',
                              animationDelay: `${categoryIndex * 0.5 + skillIndex * 0.2}s`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
