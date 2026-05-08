import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const faqs = [
    {
      question: '1. What kind of problems do you help solve?',
      answer: 'I help where organisations have more data than clarity. That can include fragmented systems, inconsistent definitions, weak ownership, low confidence in reporting, unclear controls, or AI ambitions that are moving faster than the data foundations underneath them.',
    },
    {
      question: '2. Is this only data governance work?',
      answer: 'No. Governance is part of the work, but the real focus is making data usable, trusted, and sustainable. That often includes data quality, reporting confidence, risk and compliance controls, operating models, ownership, delivery practices, and responsible AI readiness.',
    },
    {
      question: '3. What types of organisations do you work with?',
      answer: 'I work best with organisations operating in complex environments — where regulation, legacy systems, infrastructure constraints, executive priorities, and operational reality do not always align.',
    },
    {
      question: '4. What makes your approach different?',
      answer: 'I do not treat data as a purely technical problem. I look at the people, processes, controls, systems, and operating conditions that shape whether data can actually be trusted and used. The goal is not a beautiful framework on paper; it is a practical model that can survive real-world conditions.',
    },
    {
      question: '5. How do you measure success?',
      answer: 'Success means fewer disputes about numbers, clearer ownership, stronger controls, better reporting confidence, and a data environment that can support analytics and AI responsibly. The work should make decisions easier, not create another layer of complexity',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              FAQ
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
              Common Questions
            </h2>
            <p 
              className={`text-[#6a6a6a] text-lg leading-relaxed transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.35s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              Practical answers about how I work, where I add value, and what organisations can expect when improving data trust, reporting confidence, and AI readiness.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-100 rounded-xl overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'border-black/30 bg-black/5' : 'hover:border-black/20 hover:bg-gray-50'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ 
                  transitionDelay: `${0.5 + index * 0.1}s`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-black' : 'text-[#0a0a0a]'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-[#6a6a6a] transition-transform duration-400 flex-shrink-0 ml-4 ${
                      openIndex === index ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className="grid transition-all duration-400"
                  style={{
                    gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="overflow-hidden">
                    <div 
                      className={`px-6 pb-6 text-[#6a6a6a] leading-relaxed transition-all duration-300 ${
                        openIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
