import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Scale, ShieldCheck, BarChart3, Workflow } from 'lucide-react'

const services = [
  {
    slug: 'data-ai-governance',
    icon: Scale,
    theme: 'Trust',
    title: 'Data & AI Governance',
    description:
      'Build trusted data and AI environments through clear governance, ethical use, accountability, ownership, and control.',
  },
  {
    slug: 'data-risk-compliance-controls',
    icon: ShieldCheck,
    theme: 'Prevention',
    title: 'Data Risk, Compliance & Controls',
    description:
      'Turn regulatory, privacy, AI, and operational risk into practical data controls that support trust, compliance, and accountable decision-making.',
  },
  {
    slug: 'data-quality-analytics',
    icon: BarChart3,
    theme: 'Confidence',
    title: 'Data Quality & Analytics',
    description:
      'Turn fragmented, unreliable data into decision-grade assets for analytics, reporting, and AI-ready insight.',
  },
  {
    slug: 'data-products-engineering',
    icon: Workflow,
    theme: 'Value, sustained',
    title: 'Data Products & Engineering',
    description:
      'Design reusable data products, pipelines, platforms, and tooling-enabled capabilities that make trusted data easier to access, scale, manage, and sustain.',
  },
]

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

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#f5f5f5]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <span
            className={`text-xs font-semibold tracking-[0.22em] uppercase text-black transition-all duration-500 ${
              isVisible ? 'opacity-100 tracking-[0.22em]' : 'opacity-0 tracking-[0.5em]'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Services
          </span>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl text-[#050505] font-medium leading-tight mt-4 mb-5 transition-all duration-700 ${
              isVisible ? 'opacity-100 clip-reveal' : 'opacity-0 clip-hidden'
            }`}
            style={{
              transitionDelay: '0.15s',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Data Services That Build Trust and Deliver Value
          </h2>

          <p
            className={`text-[#5f5f5f] text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: '0.35s',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Bring governance, control, quality, and sustainable delivery to data
            environments where regulation, infrastructure, and business reality
            do not always align.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl p-8 lg:p-10 min-h-[260px] shadow-sm hover:shadow-xl transition-all duration-350 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${0.5 + index * 0.12}s`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="h-full flex flex-col transition-transform duration-350 group-hover:-translate-y-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-[#dddddd] rounded-xl flex items-center justify-center mb-7 transition-all duration-500 group-hover:bg-black group-hover:scale-110 ${
                    isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'
                  }`}
                  style={{
                    transitionDelay: `${0.7 + index * 0.12}s`,
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  }}
                >
                  <service.icon
                    size={28}
                    className="text-black group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#777777] mb-3">
                    {service.theme}
                  </span>

                  <h3 className="text-xl font-medium text-[#050505] mb-4 group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#686868] leading-relaxed flex-grow max-w-xl">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href={`/services/${service.slug}`}
                    className="mt-7 flex items-center gap-2 text-black font-medium"
                  >
                    <span className="text-sm">Learn More</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </a>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/80 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-350 origin-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services