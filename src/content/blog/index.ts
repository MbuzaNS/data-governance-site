import { africaAiBiasPost } from './posts/africaAiBias'
import { dataGovernanceLovedInPrincipleIgnoredInPracticePost } from './posts/dataGovernanceLovedInPrincipleIgnoredInPractice'
import { dataGovernanceResponsibleAIPost } from './posts/dataGovernanceResponsibleAI'
import { sovereigntyByScaleSovereigntyByDesignPost } from './posts/sovereigntyByScaleSovereigntyByDesign'

export type { BlogPost, BlogBodyBlock } from './types'

export const blogPosts = [
  sovereigntyByScaleSovereigntyByDesignPost,
  africaAiBiasPost,
  dataGovernanceResponsibleAIPost,
  dataGovernanceLovedInPrincipleIgnoredInPracticePost,
]
