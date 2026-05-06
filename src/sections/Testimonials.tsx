import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const testimonials = [
    {
      name: 'David Strydom',
      role: 'Former Chief Data Officer, PwC Africa',
      headline: 'Scaled Data Governance Across Africa with Measurable Impact',
      quote:
        'Led the design and rollout of a continent-wide data governance framework, translating maturity assessments into tangible improvements in data quality, transparency, and operational execution across multiple markets.',
      context: 'Data Governance • Africa • Cloud Transformation',
    },
    {
      name: 'Sbusiso Mntungwa',
      role: 'Head of BI & Data, Absa',
      headline: 'Embedded Data Governance into Core Business Operations',
      quote:
        'Established governance structures across the organisation, clarified ownership and accountability, and successfully embedded responsible data practices into day-to-day operations at scale.',
      context: 'Financial Services • Data Governance • BI & Analytics',
    },
    {
      name: 'Markus Mosupi',
      role: 'Data Governance & Architecture Leader',
      headline: 'Established Enterprise Data Foundations Across Business Units',
      quote:
        'Worked across architecture and business teams to define data domains, onboard data owners and stewards, and formalise data-sharing, classification, and sovereignty practices across the enterprise.',
      context: 'Data Domains • Data Privacy • Data Sovereignty',
    },
    {
      name: 'Nyiko Nkuna',
      role: 'Senior Security Architect, Liberty Group',
      headline: 'Delivered Governance Oversight for High-Risk Data Initiatives',
      quote:
        'Provided critical data governance input into the Data Leakage Prevention programme, directly supporting secure design decisions and ensuring effective delivery in a high-risk environment.',
      context: 'Security • DLP • Governance Controls',
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6500)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-24 lg:py-28">
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.28em] uppercase text-white/50">
              Executive Endorsements
            </span>

            <h2 className="mt-5 text-3xl lg:text-5xl text-white font-medium leading-tight">
              Trusted by Data Leaders Across Africa
            </h2>

            <p className="mt-5 text-base lg:text-lg text-white/55 leading-relaxed">
              Enterprise delivery, governance execution, and trusted leadership
              in complex data environments.
            </p>
          </div>

          {/* Main Card */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-[2rem] border border-white/15 bg-gradient-to-b from-[#161616] to-[#101010] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-500">
              <div className="p-8 md:p-12">
                {/* Top Section */}
                <div className="flex items-start justify-between gap-8 mb-8">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/40 mb-3">
                      Validated Outcome
                    </p>

                    <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight">
                      {activeTestimonial.headline}
                    </h3>
                  </div>

                  <Quote
                    className="hidden md:block text-white/20 shrink-0"
                    size={44}
                  />
                </div>

                {/* Quote */}
                <p className="text-lg lg:text-xl leading-relaxed text-white/82 max-w-[92%]">
                  “{activeTestimonial.quote}”
                </p>

                {/* Footer */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <p className="text-white font-medium">
                      {activeTestimonial.name}
                    </p>

                    <p className="text-white/50 text-sm mt-1">
                      {activeTestimonial.role}
                    </p>
                  </div>

                  <div className="inline-flex w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2">
                    <p className="text-xs text-white/55">
                      {activeTestimonial.context}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-5">
              {/* Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveIndex(index)
                    }}
                    className={`text-left rounded-xl border px-4 py-3 transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-white/50 bg-white/10 text-white shadow-lg'
                        : 'border-white/15 bg-white/[0.03] text-white/50 hover:text-white/80 hover:border-white/25 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="block text-sm font-medium">
                      {testimonial.name}
                    </span>

                    <span className="block text-xs opacity-70 mt-1 leading-snug">
                      {testimonial.role}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/35 hover:bg-white/5 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/35 hover:bg-white/5 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials