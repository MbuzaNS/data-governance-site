export type PortfolioProject = {
  title: string
  subtitle: string
  description: string
  category: string
  image: string
  link?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Big Data Under Pressure: A Mobile Operator in Emerging Markets',
    subtitle: 'Data Governance · Telecommunications',
    description:
      'A case study on identity, regulation, infrastructure, and large-scale analytics in a high-pressure environment.',
    category: 'Case Study',
    image: '/case-study-mobile-operator-emerging-markets.png',
    link: '/case-studies/big-data-under-pressure',
  },
]
