export type PortfolioProject = {
  title: string
  subtitle: string
  description: string
  category: string
  image: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Fortune 500 Retailer',
    subtitle: 'Enterprise Data Governance Implementation',
    description: 'Reduced compliance costs by 60% while improving data accessibility across 12 business units.',
    category: 'Data Governance',
    image: '/portfolio-1.jpg',
  },
  {
    title: 'Healthcare Network',
    subtitle: 'HIPAA Compliance & Data Security',
    description: 'Achieved full regulatory compliance with automated data lineage and access controls.',
    category: 'Compliance',
    image: '/portfolio-2.jpg',
  },
  {
    title: 'Financial Services Firm',
    subtitle: 'Cloud Data Migration Strategy',
    description: 'Seamless migration of 500TB of sensitive data with zero security incidents.',
    category: 'Cloud Migration',
    image: '/portfolio-3.jpg',
  },
]
