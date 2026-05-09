import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { services } from '../data/ServiceData'

type ServiceDetailProps = {
  slug: string
}

const SITE_URL = 'https://siyabonga.pro'

const setMetaTag = (name: string, content: string, property = false) => {
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`

  let tag = document.head.querySelector(selector) as HTMLMetaElement | null

  if (!tag) {
    tag = document.createElement('meta')
    if (property) {
      tag.setAttribute('property', name)
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

const setCanonicalUrl = (url: string) => {
  let link = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const service = services.find(
    (item) => item.slug === slug || item.aliasSlugs?.includes(slug)
  )

  useEffect(() => {
    if (!service) return

    const serviceUrl = `${SITE_URL}/services/${service.slug}`

    document.title = service.seoTitle

    setMetaTag('description', service.seoDescription)
    setMetaTag('keywords', service.seoKeywords.join(', '))

    setMetaTag('og:title', service.seoTitle, true)
    setMetaTag('og:description', service.seoDescription, true)
    setMetaTag('og:type', 'website', true)
    setMetaTag('og:url', serviceUrl, true)

    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', service.seoTitle)
    setMetaTag('twitter:description', service.seoDescription)

    setCanonicalUrl(serviceUrl)

    const existingServiceSchema = document.getElementById('service-detail-schema')
    if (existingServiceSchema) existingServiceSchema.remove()

    const existingBreadcrumbSchema = document.getElementById(
      'service-breadcrumb-schema'
    )
    if (existingBreadcrumbSchema) existingBreadcrumbSchema.remove()

    const serviceSchema = document.createElement('script')
    serviceSchema.id = 'service-detail-schema'
    serviceSchema.type = 'application/ld+json'
    serviceSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      name: service.title,
      description: service.schemaDescription,
      serviceType: service.schemaServiceType,
      url: serviceUrl,
      areaServed: {
        '@type': 'Country',
        name: 'South Africa',
      },
      provider: {
        '@type': 'ProfessionalService',
        name: 'Siyabonga.Pro',
        alternateName: 'The Data Professional',
        url: SITE_URL,
      },
      keywords: service.seoKeywords,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': serviceUrl,
      },
    })

    const breadcrumbSchema = document.createElement('script')
    breadcrumbSchema.id = 'service-breadcrumb-schema'
    breadcrumbSchema.type = 'application/ld+json'
    breadcrumbSchema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${SITE_URL}/#services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: serviceUrl,
        },
      ],
    })

    document.head.appendChild(serviceSchema)
    document.head.appendChild(breadcrumbSchema)

    return () => {
      const currentServiceSchema = document.getElementById('service-detail-schema')
      if (currentServiceSchema) currentServiceSchema.remove()

      const currentBreadcrumbSchema = document.getElementById(
        'service-breadcrumb-schema'
      )
      if (currentBreadcrumbSchema) currentBreadcrumbSchema.remove()
    }
  }, [service])

  const scrollToServices = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#services'
      return
    }

    const servicesSection = document.getElementById('services')

    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!service) {
    return (
      <section className="min-h-screen bg-[#f5f5f5] px-6 lg:px-12 xl:px-20 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
          <h1 className="text-3xl font-medium text-[#050505] mb-4">
            Service not found
          </h1>

          <p className="text-[#686868] leading-relaxed mb-8">
            The service you are looking for does not exist or may have moved.
          </p>

          <button
            type="button"
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 text-black font-medium"
          >
            <ArrowLeft size={16} />
            Back to services
          </button>
        </div>
      </section>
    )
  }

  return (
    <section
      id={service.slug}
      aria-label={`${service.title}: ${service.seoKeywords.join(', ')}`}
      className="min-h-screen bg-[#f5f5f5] px-6 lg:px-12 xl:px-20 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={scrollToServices}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#050505] mb-10"
        >
          <ArrowLeft size={16} />
          Back to services
        </button>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left Summary Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm lg:sticky lg:top-28">
            <div className="w-16 h-16 bg-[#dddddd] rounded-xl flex items-center justify-center mb-7">
              <service.icon size={28} className="text-black" aria-hidden="true" />
            </div>

            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#777777]">
              {service.theme}
            </span>

            <h1 className="text-3xl lg:text-5xl font-medium text-[#050505] leading-tight mt-4 mb-6">
              {service.title}
            </h1>

            <p className="text-[#686868] text-lg leading-relaxed">
              {service.shortDescription}
            </p>

            <a
              href="/enquiries"
              className="mt-8 inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#222222] transition-colors duration-300"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Detail Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-medium text-[#050505] mb-4">
                What it is
              </h2>

              <p className="text-[#686868] leading-relaxed text-lg">
                {service.intro}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-medium text-[#050505] mb-6">
                Where I help
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.whereIHelp.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-black mt-1 shrink-0"
                    />
                    <p className="text-[#686868] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-medium text-[#050505] mb-6">
                Typical outcomes
              </h2>

              <div className="space-y-4">
                {service.outcomes.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-black mt-1 shrink-0"
                    />
                    <p className="text-[#686868] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#050505] text-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-medium mb-4">
                Need help with this area?
              </h2>

              <p className="text-white/70 leading-relaxed mb-7 max-w-2xl">
                Let’s discuss where your organisation is today, what is getting
                in the way, and what practical next steps would create the most
                value.
              </p>

              <a
                href="/enquiries"
                className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:bg-[#e8e8e8] transition-colors duration-300"
              >
                Start a conversation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail