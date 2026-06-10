import { ArrowLeft, Calendar, Landmark, Users, Unlock } from 'lucide-react'
import { blogPosts } from '../content/blogPosts'

type BlogArticleProps = {
  slug: string
}

const BlogArticle = ({ slug }: BlogArticleProps) => {
  const post = blogPosts.find((item) => item.slug === slug)
  const keepOriginalImageColors =
    post?.slug === 'data-governance-loved-in-principle-ignored-in-practice'

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

  const renderBlock = () => {
    return post.body.map((block, index) => {
      if (block.type === 'paragraph') {
        return (
          <p
            key={`${post.slug}-${index}`}
            className={`leading-8 ${
              block.lead
                ? 'text-[17px] md:text-[18px] text-[#4f4f4f]'
                : 'text-[15px] md:text-[17px] text-[#4f4f4f]'
            }`}
          >
            {block.text}
          </p>
        )
      }

      if (block.type === 'highlight') {
        return (
          <div
            key={`${post.slug}-${index}`}
            className="my-12 rounded-2xl border border-black/8 bg-[#f7f7f6] p-6 transition duration-500 hover:-translate-y-[2px] hover:border-black/12 hover:bg-[#f2f2f1]"
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6a6a6a]">
              {block.title}
            </p>
            <div className="text-[15px] leading-8 text-[#4f4f4f]">{block.text}</div>
          </div>
        )
      }

      if (block.type === 'quote') {
        return (
          <blockquote
            key={`${post.slug}-${index}`}
            className="my-12 rounded-2xl border-l-4 border-[#d9d9d6] bg-[#f7f7f6] px-6 py-8 text-xl font-medium leading-9 text-[#1f1f1f] md:text-2xl md:leading-10"
          >
            {block.text}
          </blockquote>
        )
      }

      if (block.type === 'pillars') {
        return (
          <div
            key={`${post.slug}-${index}`}
            className="my-12 rounded-2xl bg-[#0a0a0a] p-6"
          >
            <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              {block.label}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {block.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4"
                >
                  <div className="mb-3 text-white">
                    {item.icon === 'landmark' && <Landmark size={24} />}
                    {item.icon === 'users' && <Users size={24} />}
                    {item.icon === 'unlock' && <Unlock size={24} />}
                  </div>
                  <p className="mb-2 text-[14px] font-semibold text-white">{item.title}</p>
                  <p className="text-[13px] leading-relaxed text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      }

      return (
        <section key={`${post.slug}-${index}`} className="mt-16 first:mt-0">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
            {block.title}
          </h2>
          <div className="space-y-6 text-[15px] leading-8 text-[#4f4f4f] md:text-[17px]">
            {block.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${post.slug}-${index}-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      )
    })
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
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-full object-cover ${keepOriginalImageColors ? '' : 'grayscale'}`}
            />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0a0a0a]">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            {post.eyebrow ? (
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6a6a6a]">
                {post.eyebrow}
              </p>
            ) : null}

            <div className="flex items-center gap-2 text-sm text-[#6a6a6a] mb-4">
              <Calendar size={14} />
              {post.date}
            </div>

            <h1 className="text-3xl lg:text-4xl font-medium text-[#0a0a0a] leading-tight mb-4">{post.title}</h1>
            <p className="text-lg leading-8 text-[#6a6a6a] mb-8">{post.excerpt}</p>

            {post.tags?.length ? (
              <div className="mb-8 flex flex-wrap gap-3 text-sm text-[#6a6a6a]">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 bg-[#f7f7f6] px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="space-y-5">{renderBlock()}</div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogArticle
