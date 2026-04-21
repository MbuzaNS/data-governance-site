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
import PrivacyPolicyPage from './sections/PrivacyPolicyPage'
import TermsOfServicePage from './sections/TermsOfServicePage'
import BigDataCaseStudy from './sections/BigDataCaseStudy'
import EnquiriesPage from './sections/EnquiriesPage'
import InvisibleCapabilityCaseStudy from "./sections/InvisibleCapabilityCaseStudy";


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
  const isPrivacyPolicyPage = window.location.pathname === '/privacy-policy'
  const isTermsOfServicePage = window.location.pathname === '/terms-of-service'
  const isEnquiriesPage = window.location.pathname === '/enquiries'
  const isCaseStudyPage = window.location.pathname === '/case-studies/big-data-under-pressure'
 const isInvisibleCapabilityCaseStudyPage =
  window.location.pathname === "/case-studies/when-capability-is-invisible";
  const isSubpage = 
  Boolean(blogSlug) || 
  isPrivacyPolicyPage || 
  isTermsOfServicePage || 
  isEnquiriesPage ||
  isCaseStudyPage ||
  isInvisibleCapabilityCaseStudyPage;

  const subpageBackLabel =
    isCaseStudyPage || isInvisibleCapabilityCaseStudyPage
      ? 'Back to Portfolio'
      : 'Back to Home'

  const subpageBackHref =
    isCaseStudyPage || isInvisibleCapabilityCaseStudyPage ? '/#portfolio' : '/'
 
  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navigation
        scrollY={scrollY}
        isSubpage={isSubpage}
        subpageBackLabel={subpageBackLabel}
        subpageBackHref={subpageBackHref}
      />
      <main>
        {blogSlug ? (
          <BlogArticle slug={blogSlug} />
        ) : isPrivacyPolicyPage ? (
          <PrivacyPolicyPage />
        ) : isTermsOfServicePage ? (
          <TermsOfServicePage />
        ) : isEnquiriesPage ? (
          <EnquiriesPage />
        ) : isCaseStudyPage ? (
          <BigDataCaseStudy />
        ) : isInvisibleCapabilityCaseStudyPage ? (
          <InvisibleCapabilityCaseStudy />
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
