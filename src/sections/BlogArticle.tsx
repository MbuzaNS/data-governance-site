import { ArrowLeft, Calendar } from 'lucide-react'
import { blogPosts } from '../content/blogPosts'

type BlogArticleProps = {
  slug: string
}

const BlogArticle = ({ slug }: BlogArticleProps) => {
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="py-24 lg:py-32 bg-[#f5f5f5]">
        <div className="w-full px-6 lg:px-12 xl:px-20 max-w-4xl mx-auto">
          <a href="/#blog" className="inline-flex items-center gap-2 text-black font-medium mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </a>
          <h1 className="text-3xl lg:text-4xl font-medium text-[#0a0a0a] mb-4">Article Not Found</h1>
          <p className="text-[#6a6a6a] leading-relaxed">
            The requested post does not exist or the URL is incorrect.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="w-full px-6 lg:px-12 xl:px-20 max-w-4xl mx-auto">
        <a href="/#blog" className="inline-flex items-center gap-2 text-black font-medium mb-8">
          <ArrowLeft size={18} />
          Back to Blog
        </a>

        <article className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="relative h-64 lg:h-80 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0a0a0a]">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-2 text-sm text-[#6a6a6a] mb-4">
              <Calendar size={14} />
              {post.date}
            </div>
            <h1 className="text-3xl lg:text-4xl font-medium text-[#0a0a0a] leading-tight mb-6">{post.title}</h1>
            <div className="space-y-5">
              {post.content.map((paragraph, index) => (
                <p key={`${post.slug}-${index}`} className="text-[#4f4f4f] leading-relaxed text-base lg:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogArticle
