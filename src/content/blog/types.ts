export type PillarItem = { icon: string; title: string; description: string }
export type StatItem = { value: string; label: string }
export type GridCard = { letter: string; title: string; description: string }
export type ChecklistGroup = { title: string; items: readonly string[] }

export type BlogBodyBlock =
  | { type: 'paragraph'; text: string; lead?: boolean }
  | { type: 'highlight'; title: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'section'; title: string; eyebrow?: string; paragraphs: readonly string[] }
  | { type: 'pillars'; label: string; items: readonly PillarItem[] }
  | { type: 'stats'; items: readonly StatItem[] }
  | { type: 'grid'; items: readonly GridCard[] }
  | { type: 'checklist'; groups: readonly ChecklistGroup[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  cardImage?: string
  imagePosition?: string
  imageFit?: 'cover' | 'contain'
  eyebrow?: string
  tags?: readonly string[]
  theme?: 'light' | 'editorial-dark'
  body: readonly BlogBodyBlock[]
}

export const defineBlogPost = (post: BlogPost) => post
