import { africaAiBiasPost } from './posts/africaAiBias'
import { dataGovernanceLovedInPrincipleIgnoredInPracticePost } from './posts/dataGovernanceLovedInPrincipleIgnoredInPractice'
import { dataGovernanceResponsibleAIPost } from './posts/dataGovernanceResponsibleAI'

export type { BlogPost, BlogBodyBlock } from './types'

export const blogPosts = [
  africaAiBiasPost,
  dataGovernanceResponsibleAIPost,
  dataGovernanceLovedInPrincipleIgnoredInPracticePost,
]
