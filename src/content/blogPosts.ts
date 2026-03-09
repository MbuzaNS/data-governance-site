export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'data-governance-loved-in-principle-ignored-in-practice',
    title: 'Data Governance: Loved in Principle, Ignored in Practice',
    excerpt:
      'Data governance is one of those corporate ideas everyone claims to respect and almost no one wants to fund properly.',
    date: 'Mar 8, 2026',
    category: 'Data Governance',
    image: '/blog-1.jpg',
    content: [
      'Everyone says data governance is important.',
      'Until it asks for executive attention.A real budget.And a minimum of three years patience.',
      'Then suddenly it becomes “too slow,” “too heavy,” or “something the data team should handle.”',
      'That is why data governance keeps failing.',
      'Not because people do not understand it.',
      'Not because frameworks are missing.',
      'Not because organisations lack smart people.',
      'It fails because leadership often wants the benefits of data governance without the inconvenience of behaving differently.',
      'Across organisations, I keep seeing the same three reasons:',
      'No executive support',
      'No real budget',
      'No patience for the journey',
      'And honestly, any one of those is enough to kill it.',
      'Because once leadership treats data governance like a side task, the organisation learns fast:',
      'The rules are flexible.Standards are optional.Ownership is negotiable.Exceptions are normal.',
      'At that point, data governance is no longer a business discipline.',
      'It is theatre.',
      'The hardest truth is this: data governance maturity is not a one-year project.',
      'It is a multi-year commitment.',
      'Often three years or more.',
      'That means if leadership loses interest after the launch, the workshops, or the first dashboard, the effort was probably in trouble from the start.',
      'Data governance does not fail because people do not know how to do it.',
      'It fails because too many organisations are trying to get enterprise-grade accountability on a side-hustle budget, with part-time sponsorship, and the attention span of a quarterly target.',
      'They want data governance to be important.',
      'They just do not want it to be inconvenient.',
      'That is the contradiction.',
      'Has this been your experience too — or have you seen data governance done well?',
    ],
  },
  {
    slug: 'building-a-data-first-culture',
    title: 'Building a Data-First Culture',
    excerpt: 'Strategies for organizational change that puts data at the center of decision-making.',
    date: 'Jan 8, 2024',
    category: 'Strategy',
    image: '/blog-2.jpg',
    content: [
      'A data-first culture is built through clear accountability, practical literacy, and leadership behaviors that reward evidence-based decisions.',
      'The most effective programs combine policy, capability-building, and day-to-day operating rituals to make responsible data use normal.',
    ],
  },
  {
    slug: 'compliance-automation-guide',
    title: 'Compliance Automation Guide',
    excerpt: 'How to streamline regulatory compliance through intelligent automation.',
    date: 'Dec 28, 2023',
    category: 'Compliance',
    image: '/blog-3.jpg',
    content: [
      'Automation can reduce manual compliance effort by embedding control checks directly into data pipelines and access workflows.',
      'A successful approach starts with prioritized controls, then incrementally adds monitoring and audit evidence generation.',
    ],
  },
]

