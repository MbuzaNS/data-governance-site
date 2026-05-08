import { useEffect, useRef, useState } from 'react'

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setCountersStarted(true), 400)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const metrics = [
    {
      value: 80,
      suffix: '%',
      label: 'Compliance Risk Reduction',
      description: 'Up to 80% reduction in regulatory exposure',
    },
    {
      value: 3,
      suffix: 'x',
      label: 'Data Accessibility',
      description: '3x improvement in data discovery speed',
    },
    {
      value: 5,
      suffix: 'M',
      prefix: '$',
      label: 'Cost Savings',
      description: 'Over $5M in efficiency gains',
    },
    {
      value: 90,
      suffix: '%',
      label: 'Data Accuracy',
      description: 'Achieved >90% data quality compliance',
    },
  ]

  const Counter = ({
    value,
    suffix = '',
    prefix = '',
  }: {
    value: number
    suffix?: string
    prefix?: string
  }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!countersStarted) return

      const duration = 2000
      const steps = 80
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment

        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }, [countersStarted, value])

    return (
      <span className="tabular-nums">
        {prefix}
        {Math.floor(count)}
        {suffix}
      </span>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-28 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] relative overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`text-xs tracking-[0.25em] uppercase text-white/50 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Impact
          </span>

          <h2
            className={`text-3xl lg:text-5xl text-white font-medium mt-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Measured Results. Delivered in Complex Environments.
          </h2>

          <p
            className={`text-sm text-white/60 mt-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            Across telecom, financial services, and regulated environments
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`group rounded-2xl px-8 py-10 text-center border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-white/20 hover:translate-y-[-4px] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="mb-4">
                <span className="text-5xl lg:text-6xl font-semibold text-white">
                  <Counter
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </span>
              </div>

              <div className="h-px bg-white/10 w-12 mx-auto mb-4" />

              <h3 className="text-base font-medium text-white/90 mb-2">
                {metric.label}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Experience Across
          </p>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span>Telecom</span>
            <span className="hidden text-white/20 sm:inline">•</span>
            <span>Heavy Machinery</span>
            <span className="hidden text-white/20 sm:inline">•</span>
            <span>Financial Services</span>
            <span className="hidden text-white/20 sm:inline">•</span>
            <span>Public Sector</span>
            <span className="hidden text-white/20 sm:inline">•</span>
            <span>Regulated Environments</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Metrics