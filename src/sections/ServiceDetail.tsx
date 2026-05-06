import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Scale,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

type ServiceDetailProps = {
  slug: string
}

const services = [
  {
    slug: 'data-ai-governance',
    icon: Scale,
    theme: 'Trust',
    title: 'Data & AI Governance',
    shortDescription:
      'Build trusted data and AI environments through clear governance, ethical use, accountability, ownership, and control.',
    intro:
      'Data and AI governance helps organisations create the rules, roles, structures, and decision rights needed to use data and AI responsibly. It ensures that data is properly owned, governed, protected, and used in ways that are ethical, explainable, and aligned to business objectives.',
    whereIHelp: [
      'Data and AI governance frameworks',
      'Governance operating models',
      'Data ownership and stewardship',
      'Responsible AI and ethical data use',
      'Data policies, standards, and principles',
      'Data strategy and architecture alignment',
      'Governance forums and decision structures',
      'Data culture, adoption, and ways of working',
    ],
    outcomes: [
      'Clear accountability for data and AI decisions',
      'Stronger trust in how data and AI are used',
      'Better alignment between business, risk, technology, and compliance teams',
      'Practical governance that works in real operating environments',
      'A stronger foundation for responsible analytics and AI adoption',
    ],
  },
  {
    slug: 'data-risk-compliance-controls',
    icon: ShieldCheck,
    theme: 'Prevention',
    title: 'Data Risk, Compliance & Controls',
    shortDescription:
      'Turn regulatory, privacy, AI, and operational risk into practical data controls that support trust, compliance, and accountable decision-making.',
    intro:
      'Data risk, compliance, and controls help organisations prevent data-related failures before they become regulatory, operational, financial, or reputational issues. This service turns privacy, regulatory, AI, and operational requirements into practical controls that can be embedded into business processes.',
    whereIHelp: [
      'Data risk assessments',
      'Privacy and regulatory readiness',
      'AI risk and control alignment',
      'Data access and usage controls',
      'Data retention and protection controls',
      'Control design and remediation',
      'Audit, assurance, and compliance support',
    ],
    outcomes: [
      'Better visibility of data-related risk',
      'Practical controls that are easier to implement and evidence',
      'Reduced exposure to compliance and operational failures',
      'Stronger readiness for audits, regulatory reviews, and assurance activities',
      'Clearer links between risk, governance, and day-to-day data use',
    ],
  },
  {
    slug: 'data-quality-analytics',
    icon: BarChart3,
    theme: 'Confidence',
    title: 'Data Quality & Analytics',
    shortDescription:
      'Turn fragmented, unreliable data into decision-grade assets for analytics, reporting, and AI-ready insight.',
    intro:
      'Data quality and analytics help organisations turn fragmented, inconsistent, or unreliable data into information that can be trusted. This service focuses on improving the quality, usability, and interpretation of data so that reporting, analytics, and decision-making are based on reliable evidence.',
    whereIHelp: [
      'Data quality assessments',
      'Data profiling and issue analysis',
      'Data cleansing and validation rules',
      'Data quality scorecards and monitoring',
      'KPI and metric alignment',
      'Reporting and analytics readiness',
      'Trusted data for BI, dashboards, and AI use cases',
    ],
    outcomes: [
      'Improved confidence in reports and analytics',
      'Fewer disputes about whose numbers are correct',
      'Better-quality inputs for business intelligence and AI',
      'Clearer definitions of key metrics and data rules',
      'More reliable decision-making across teams and functions',
    ],
  },
  {
    slug: 'data-products-engineering',
    icon: Workflow,
    theme: 'Value, sustained',
    title: 'Data Products & Engineering',
    shortDescription:
      'Design reusable data products, pipelines, platforms, and tooling-enabled capabilities that make trusted data easier to access, scale, manage, and sustain.',
    intro:
      'Data products and engineering help organisations turn data capability into reusable, scalable, and sustainable assets. This service focuses on the delivery layer: data products, pipelines, platforms, metadata, lineage, catalogues, and tooling-enabled capabilities that make trusted data easier to access, manage, and reuse.',
    whereIHelp: [
      'Data product design and delivery',
      'Data pipeline and integration design',
      'Data platform enablement',
      'Metadata, lineage, and catalogue enablement',
      'Governance tooling adoption',
      'Engineering practices that support scale, reuse, and sustainability',
      'Tooling enablement across platforms such as Microsoft Purview, Informatica, Collibra, and related ecosystems',
    ],
    outcomes: [
      'Reusable data products that support business priorities',
      'Better access to trusted data across teams',
      'Stronger metadata, lineage, and catalogue adoption',
      'More sustainable data delivery practices',
      'Data capabilities that continue to work beyond the initial project',
    ],
  },
]

const ServiceDetail = ({ slug }: ServiceDetailProps) => {
  const service = services.find((item) => item.slug === slug)

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

          <a
            href="/#services"
            className="inline-flex items-center gap-2 text-black font-medium"
          >
            <ArrowLeft size={16} />
            Back to services
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 lg:px-12 xl:px-20 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <a
          href="/#services"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#050505] mb-10"
        >
          <ArrowLeft size={16} />
          Back to services
        </a>

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
              Discuss this service
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