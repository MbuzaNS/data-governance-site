import { useEffect, useRef, useState } from 'react'

  const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const bookingUrl =
    'https://outlook.office.com/bookwithme/user/fa337cf95dd64f5683288c2035b054c9%40siinoma.co.za/meetingtype/-EQyrP5eNkGdLW7c_behVw2?anonymous&ismsaljsauthenabled'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pulse */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
          animation: isVisible ? 'pulse-bg 8s ease-in-out infinite' : 'none'
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mb-6">
            {'Ready to Transform Your Data?'.split(' ').map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${0.1 + index * 0.07}s`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {word}
              </span>
            ))}
          </h2>

          {/* Subheadline */}
          <p 
            className={`text-[#6a6a6a] text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            Let's discuss how strategic data governance can unlock your organization's potential.
          </p>

          {/* Consultation CTA */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ 
              transitionDelay: '0.6s',
              transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }}
          >
            <div className="max-w-2xl mx-auto">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-medium rounded-xl transition-all duration-300 hover:bg-[#333333] hover:shadow-xl hover:-translate-y-1"
              >
                Schedule a Consulation
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse-bg {
          0%, 100% {
            transform: scale(1);
            opacity: 0.03;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.06;
          }
        }
      `}</style>
    </section>
  )
}

export default CTA
