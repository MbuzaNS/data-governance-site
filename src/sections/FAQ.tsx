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
      question: 'What is data governance and why does it matter?',
      answer: 'Data gponsibly through clear policies and processes thaovernance is the practice of managing data rest ensure data is accurate, secure, and accessibility is governed through the accountability structures. It matters because it helps organisations make better decisions with trusted data, reduces risks related to privacy, sovereignty and compliance. It unlocks greater value by enabling responsible, safe and effective data use',
    },
    {
      question: 'How long does a typical implementation take?',
      answer: 'A basic data governance setup usually takes 3 to 12 months. This includes establishing governance councils, onboarding key data roles, mapping data domains, and designing the full governance roadmap. Reaching a point where data governance is fully embedded and consistently practiced typically takes around 3 years. By then, most organisations progress from Level 3 (managed data) to Level 4 (automated and measured processes). After the three‑year mark, the work doesn’t stop—it simply evolves. The pace becomes steadier and more continuous. This is when data consciousness becomes woven into the organisation’s fabric, guiding decisions naturally.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'Data governance is industry agnostic, and its core principles apply across all sectors. My experience spans; financial services, banking, auditing and accounting, short‑ and long‑term insurance, energy and engineering. This foundation makes it straightforward to learn and apply governance practices in new industries as needed',
    },
    {
      question: 'How do you measure success?',
      answer: 'We measure success using both quantitative and qualitative indicators. Quantitative metrics include data quality scores, compliance audit results, time‑to‑insight improvements, and cost efficiencies. We define these KPIs upfront and track them throughout the engagement. On the qualitative side, success is reflected in stronger data awareness and more responsible data use across the organisation. A key sign of maturity is when data‑driven insights become part of everyday work—not only for decision‑makers, but for staff at all levels.',
    },
    {
      question: 'What makes your approach different?',
      answer: 'My approach integrates deep technical capability with strategic business thinking. I don’t focus only on tools—I help organisations shift how they understand, manage, and leverage their data as a true strategic asset. This approach encompasses hands‑on information architecture design, end‑to‑end data tools architecture and implementation, and the thoughtful inclusion of AI and data‑driven thinking within broader business strategies. The result is a governance approach that is both technically robust and aligned with real organisational outcomes.',
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
              Get answers to frequently asked questions about data governance implementations and my approach.
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
