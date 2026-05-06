// src/data/servicesData.ts
import { Scale, ShieldCheck, BarChart3, Workflow } from 'lucide-react'

export const services = [
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
      'Tooling enablement across platforms such as Microsoft Purview, Informatica, Collibra, and related ecosystems',
      'Engineering practices that support scale, reuse, and sustainability',
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