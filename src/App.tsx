import { useEffect, useRef, useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import LogoCarousel from './sections/LogoCarousel'
import About from './sections/About'
import Services from './sections/Services'
import Metrics from './sections/Metrics'
import Testimonials from './sections/Testimonials'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import FAQ from './sections/FAQ'
import Blog from './sections/Blog'
import BlogArticle from './sections/BlogArticle'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import Navigation from './sections/Navigation'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const blogSlug = window.location.pathname.startsWith('/blog/')
    ? decodeURIComponent(window.location.pathname.replace('/blog/', ''))
    : null

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navigation scrollY={scrollY} />
      <main>
        {blogSlug ? (
          <BlogArticle slug={blogSlug} />
        ) : (
          <>
            <Hero />
            <LogoCarousel />
            <About />
            <Services />
            <Metrics />
            <Testimonials />
            <Skills />
            <Portfolio />
            <FAQ />
            <Blog />
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
