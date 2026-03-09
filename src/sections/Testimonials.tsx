import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const testimonials = [
    {
      name: 'David Strydom',
      role: 'CDO, PwC Africa',
      quote: 'Designed and rolled out of the data-governance framework resulted which resulted in 90% improvements in data quality and transparency across core data domains',
      avatar: 'DS',
    },
    {
      name: 'Sbusiso Mntungwa',
      role: 'Head of BI & Data, Absa',
      quote: 'Drove awareness on responsible data use and helped embed these practices into everyday processes.Her contributions ensured that our data was well‑governed, better understood, and managed responsibly throughout its lifecycle.',
      avatar: 'SM',
    },
    {
      name: 'Nyiko Nkuna',
      role: 'Snr Security Architect, Liberty Group',
      quote: 'she provided critical data governance input. Her contributions were essential and supported effective decision making throughout the project.',
      avatar: 'NN',
    },
  ]

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex
    const normalizedDiff = ((diff + testimonials.length) % testimonials.length)
    
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) translateZ(100px) rotateY(0deg)',
        opacity: 1,
        zIndex: 3,
      }
    } else if (normalizedDiff === 1 || normalizedDiff === -2) {
      return {
        transform: 'translateX(60%) translateZ(-100px) rotateY(-35deg)',
        opacity: 0.28,
        zIndex: 2,
      }
    } else {
      return {
        transform: 'translateX(-60%) translateZ(-100px) rotateY(35deg)',
        opacity: 0.28,
        zIndex: 2,
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-800 ${
          isVisible ? 'opacity 100 scale-100' : 'opacity -0 scale-110'
        }`}
        style={{ transition: 'transform 20s linear infinite, opacity 0.8s ease' }}
      >
        <img
          src="/testimonials-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover grayscale"
          style={{ animation: isVisible ? 'ken-burns 20s ease-in-out infinite alternate' : 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/75 to-[#0a0a0a]/85" />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`text-xs font-semibold tracking-[0.2em] uppercase text-white/60 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Testimonials
          </span>
          <h2 
            className={`text-3xl lg:text-4xl xl:text-5xl text-white font-medium leading-tight mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.3s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            What Clients Say
          </h2>
        </div>

        {/* 3D Carousel */}
        <div 
          className="relative h-[400px] max-w-4xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`absolute top-0 left-1/2 w-full max-w-2xl -translate-x-1/2 transition-all duration-600 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  ...getCardStyle(index),
                  transitionDelay: isVisible ? '0.6s' : '0s',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div
                  className={`rounded-2xl p-8 lg:p-10 border transition-all duration-500 ${
                    index === activeIndex
                      ? 'bg-black/45 border-white/30 backdrop-blur-xl shadow-2xl'
                      : 'bg-black/[0.2] border-white/[0.15] backdrop-blur-sm'
                  }`}
                >
                  {/* Quote Icon */}
                  <div 
                    className={`mb-6 transition-all duration-600 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: '0.7s',
                      animation: isVisible ? 'pulse-slow 4s ease-in-out infinite' : 'none'
                    }}
                  >
                    <Quote
                      size={40}
                      className={index === activeIndex ? 'text-white/70' : 'text-white/[0.35]'}
                    />
                  </div>

                  {/* Quote Text */}
                  <p
                    className={`text-xl lg:text-2xl leading-relaxed mb-8 ${
                      index === activeIndex ? 'text-white' : 'text-white/[0.55]'
                    }`}
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === activeIndex ? 'bg-white/20' : 'bg-white/10'
                      }`}
                    >
                      <span className="text-white font-medium">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className={index === activeIndex ? 'text-white font-medium' : 'text-white/70 font-medium'}>
                        {testimonial.name}
                      </p>
                      <p className={index === activeIndex ? 'text-white/70 text-sm' : 'text-white/[0.45] text-sm'}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={goToPrev}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1.1) translateX(-20px);
          }
          100% {
            transform: scale(1) translateX(20px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
