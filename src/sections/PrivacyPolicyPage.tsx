import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react'
import { privacyPolicy } from '../content/privacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f2e9] pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(1,97,254,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(10,10,10,0.08),_transparent_28%)]" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 lg:px-12">
        <div className="rounded-[2rem] border border-[#0a0a0a]/10 bg-white/85 p-8 shadow-[0_30px_80px_rgba(10,10,10,0.08)] backdrop-blur-sm md:p-12">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#0a0a0a]/70 transition-colors duration-200 hover:text-[#0161fe]"
          >
            <ArrowLeft size={16} />
            Back to home
          </a>
          <div className="mb-10 flex flex-col gap-6 border-b border-[#0a0a0a]/10 pb-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0161fe]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0161fe]">
              <ShieldCheck size={14} />
              Privacy and data use
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
                {privacyPolicy.title}
              </h1>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#0a0a0a]/55">
                Website: {privacyPolicy.website} | Email: {privacyPolicy.email}
              </p>
              <p className="text-base text-[#0a0a0a]/70">Last updated: {privacyPolicy.lastUpdated}</p>
            </div>
            <div className="space-y-4 text-base leading-8 text-[#0a0a0a]/74">
              {privacyPolicy.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            {privacyPolicy.sections.map((section) => (
              <article key={section.heading} className="space-y-5">
                <h2 className="text-2xl font-semibold text-[#0a0a0a]">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[#0a0a0a]/74">
                    {paragraph}
                  </p>
                ))}
                {section.groups?.map((group) => (
                  <div key={group.title} className="space-y-3 rounded-3xl bg-[#f8f6f0] p-6">
                    <h3 className="text-lg font-semibold text-[#0a0a0a]">{group.title}</h3>
                    {group.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#0a0a0a]/74">
                        {paragraph}
                      </p>
                    ))}
                    {group.bullets && (
                      <ul className="space-y-3 text-base leading-8 text-[#0a0a0a]/74">
                        {group.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0161fe]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 text-base leading-8 text-[#0a0a0a]/74">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#0161fe]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.closing && (
                  <p className="text-base leading-8 text-[#0a0a0a]/74">{section.closing}</p>
                )}
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[1.75rem] bg-[#0a0a0a] p-8 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                  Contact for privacy requests
                </p>
                <p className="mt-2 text-lg text-white/80">
                  Questions or requests can be sent directly to the email below.
                </p>
              </div>
              <a
                href={`mailto:${privacyPolicy.email}`}
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                {privacyPolicy.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyPage
