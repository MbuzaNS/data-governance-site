import { useEffect, useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    const section = document.getElementById('about')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex">

       {/* Left Image */}
{/* Left Image */}
    <div
      className={`hidden lg:block w-[55%] relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-start overflow-hidden">

        <img
          src="/hero-bw.png"
          alt="Data Governance Concept"
          className="hero-image max-w-none w-[185%] h-[105vh] -translate-x-[2%] translate-y-[5%] object-contain object-left"
        />

      </div>
    </div>

        {/* Right Content */}
         <div className="flex-1 flex flex-col justify-center px-6 lg:px-10 xl:px-12 py-32 lg:py-0">
          <div className="max-w-2xl">

            <h1 className={`max-w-[600px] text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.25px] text-[#0a0a0a] sm:text-[3.75rem] lg:text-[4rem] mb-4 lg:mb-5 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              Turn Data Chaos Into Competitive Advantage
            </h1>

            <p className={`max-w-[500px] text-[1.08rem] font-normal leading-[1.65] text-[#6B6B6B] lg:text-[1.18rem] mb-6 lg:mb-8 transition-all duration-600 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <span className="block mb-3 font-medium text-[#3F3F3F]">
                Bring structure, control, and trust to your data — the foundation for responsible AI and confident decision-making.
              </span>

              <span className="block">
                Most organisations operate with more data than clarity. Fragmented systems, inconsistent definitions, and low confidence in reporting make it difficult to rely on data — and even harder to scale AI responsibly.
              </span>
            </p>

            <a
              href="/enquiries"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[0.95rem] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
            >
              Start Your Journey
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToAbout}
        className="hidden lg:flex absolute left-8 bottom-12 flex-col items-center gap-4 z-50"
      >
        <span
          className="text-xs tracking-[0.2em]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll Down
        </span>
        <ChevronDown />
      </button>

      {/* ✅ Social Links (FIXED) */}
      <div className="hidden lg:flex absolute right-8 bottom-12 flex-col items-center gap-6 z-50">
        
        <a
          href="https://www.linkedin.com/in/bonga-mabuza-5b5498160/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] uppercase hover:text-black transition"
          style={{ writingMode: 'vertical-rl' }}
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="text-xs tracking-[0.2em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Twitter
        </a>

      </div>

    </section>
  )
}

export default Hero
