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
          setTimeout(() => setCountersStarted(true), 500)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const metrics = [
    {
      value: 80,
      suffix: '%',
      label: 'Compliance Risk Reduction',
      description: 'Average decrease in regulatory violations across client organisations',
    },
    {
      value: 3,
      suffix: 'x',
      label: 'Data Accessibility',
      description: 'Improvement in data discovery and access efficiency',
    },
    {
      value: 5,
      suffix: 'M',
      prefix: '$',
      label: 'Cost Savings',
      description: 'Potential total savings delivered through optimised data governance',
    },
    {
      value: 90,
      suffix: '%',
      label: 'Data Accuracy',
      description: 'Achieved through comprehensive quality frameworks',
      isDecimal: false,
    },
  ]

  const Counter = ({ 
    value, 
    suffix = '', 
    prefix = '', 
    isDecimal = false 
  }: { 
    value: number; 
    suffix?: string; 
    prefix?: string;
    isDecimal?: boolean;
  }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!countersStarted) return
      
      const duration = 2500
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
        {prefix}{isDecimal ? count.toFixed(1) : Math.floor(count)}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`text-xs font-semibold tracking-[0.2em] uppercase text-white/60 transition-all duration-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Impact
          </span>
          <h2 
            className={`text-3xl lg:text-4xl xl:text-5xl text-white font-medium leading-tight mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            Results That Speak Numbers
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                transitionDelay: `${0.5 + index * 0.12}s`,
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                transform: isVisible ? 'perspective(500px) rotateX(5deg)' : 'perspective(500px) rotateX(20deg)'
              }}
            >
              {/* Value */}
              <div className="mb-4">
                <span 
                  className="text-5xl lg:text-6xl font-bold text-white group-hover:text-white/80 transition-colors duration-300"
                >
                  <Counter 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    prefix={metric.prefix}
                    isDecimal={metric.isDecimal}
                  />
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
                <div 
                  className={`h-full bg-white rounded-full transition-all duration-1500 ${
                    countersStarted ? 'w-full' : 'w-0'
                  }`}
                  style={{ 
                    transitionDelay: `${1 + index * 0.1}s`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-medium text-white mb-2">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics
