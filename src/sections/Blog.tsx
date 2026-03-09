import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '../content/blogPosts'

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" ref={sectionRef} className="py-24 lg:py-32 bg-[#f5f5f5]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span 
              className={`text-xs font-semibold tracking-[0.2em] uppercase text-black transition-all duration-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Insights
            </span>
            <h2 
              className={`text-3xl lg:text-4xl xl:text-5xl text-[#0a0a0a] font-medium leading-tight mt-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: '0.15s',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Latest from the Blog
            </h2>
          </div>
          <button 
            className={`group inline-flex items-center gap-2 text-black font-medium hover:gap-4 transition-all duration-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ 
              transitionDelay: '0.4s',
              transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }}
          >
            View All Articles
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${0.5 + index * 0.12}s`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isVisible ? 'rotateX(0deg)' : 'rotateX(15deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 grayscale"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#0a0a0a]">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 transition-transform duration-400 group-hover:-translate-y-2">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-[#6a6a6a] mb-3">
                  <Calendar size={14} />
                  {post.date}
                </div>

                {/* Title */}
                <a href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-medium text-[#0a0a0a] mb-3 group-hover:text-black transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </a>

                {/* Excerpt */}
                <p className="text-[#6a6a6a] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-black font-medium text-sm">
                  <span className="relative">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight 
                    size={14} 
                    className="transition-transform duration-300 group-hover:translate-x-2" 
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
