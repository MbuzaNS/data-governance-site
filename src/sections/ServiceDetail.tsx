import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { services } from '../data/ServiceData'

type ServiceDetailProps = {
  slug: string
}

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const service = services.find(
    (item) => item.slug === slug || item.aliasSlugs?.includes(slug)
  )

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
    <section className="min-h-screen bg-[#f5f5f5] px-6 lg:px-12 xl:px-20 py-20 lg:py-28">
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
              <service.icon size={28} className="text-black" />
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
              Work With Me
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
