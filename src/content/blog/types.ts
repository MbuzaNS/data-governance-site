export type BlogBodyBlock =
  | { type: 'paragraph'; text: string; lead?: boolean }
  | { type: 'highlight'; title: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'section'; title: string; paragraphs: readonly string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  cardImage?: string
  eyebrow?: string
  tags?: readonly string[]
  theme?: 'light' | 'editorial-dark'
  body: readonly BlogBodyBlock[]
}

export const defineBlogPost = (post: BlogPost) => post
