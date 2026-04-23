import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function HighlightBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-[2px]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
        {title}
      </p>
      <div className="text-[15px] leading-8 text-white/78">{children}</div>
    </div>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 rounded-2xl border-l-4 border-white/30 bg-white/[0.03] px-6 py-6 text-xl font-medium leading-9 text-white/90 md:text-2xl md:leading-10">
      {children}
    </blockquote>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-[15px] leading-8 text-white/76 md:text-[17px]">
        {children}
      </div>
    </section>
  );
}

export default function DataGovernanceLovedInPrincipleIgnoredInPractice() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="animate-[fadeIn_0.8s_ease-out]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
              Data Governance • Strategy • Operating Reality
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Data Governance: Loved in Principle, Ignored in Practice
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Why governance often sounds right in policy decks, but struggles to
              survive contact with operational pressure, legacy systems, and real-world constraints.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/45">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Editorial Insight
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Consulting Perspective
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Africa Context
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 pb-24 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#101113] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:p-10">
          <div className="prose prose-invert max-w-none prose-p:leading-8 prose-p:text-white/76 prose-strong:text-white prose-headings:text-white">
            <p className="text-[17px] leading-8 text-white/78 md:text-[18px]">
              Governance is one of those ideas that most organisations agree with in theory.
              It appears in strategy decks, policy packs, and transformation language with
              almost no resistance. Very few executives will openly argue against better
              controls, clearer ownership, stronger quality, or more responsible use of data.
            </p>

            <p>
              And yet, when governance has to compete with delivery pressure, fragmented
              systems, operational workarounds, regulatory urgency, or political scrutiny,
              it often weakens quickly. What survives is usually not the framework as it was
              originally designed, but whatever the operating environment can realistically carry.
            </p>

            <HighlightBox title="Core Tension">
              Governance is usually not rejected because people disagree with it. It is
              sidelined because the organisation is being shaped by stronger forces:
              urgency, delivery pressure, legacy constraints, unclear accountability, and
              the need to keep the business moving.
            </HighlightBox>

            <Section title="Why the idea is easy">
              <p>
                At principle level, governance is attractive because it sounds rational. It
                suggests order, traceability, consistency, and control. It gives leadership
                a language for risk management and gives transformation teams a language for
                maturity.
              </p>

              <p>
                That is why governance travels well in presentations. It is clean in concept.
                It feels responsible. It feels modern. It sounds like the kind of thing a
                serious organisation should want.
              </p>
            </Section>

            <Section title="Why execution is harder">
              <p>
                In practice, governance has to operate inside environments that are rarely
                neat. Data is spread across old platforms, reporting logic is inconsistent,
                ownership is partial, and operational teams are already carrying competing
                priorities.
              </p>

              <p>
                In that setting, governance starts to feel less like a shared discipline and
                more like an extra layer of work. That is usually where commitment begins to
                thin out.
              </p>

              <QuoteBlock>
                Governance fails less because the principles are weak, and more because the
                operating environment is stronger than the framework.
              </QuoteBlock>
            </Section>

            <Section title="What organisations often underestimate">
              <p>
                One of the most common mistakes is treating governance as if it were only a
                policy problem or only a technology problem. It is neither. Governance is
                shaped by the wider conditions around the data: incentives, urgency, infrastructure,
                process discipline, legal context, and the maturity of the organisation itself.
              </p>

              <p>
                If those conditions are unstable, governance will also be unstable, no matter
                how polished the framework looks on paper.
              </p>
            </Section>

            <HighlightBox title="What this usually means">
              Strong governance does not come from publishing more principles. It comes from
              making governance workable inside the real environment the business actually has.
            </HighlightBox>

            <Section title="The real test">
              <p>
                The real question is not whether a governance model sounds right. The real
                question is whether it can hold under pressure: when deadlines tighten, when
                regulators are watching, when systems fail, when data does not line up, and
                when leadership wants immediate answers.
              </p>

              <p>
                That is where many governance models are exposed. They were built for ideal
                conditions, but expected to survive in imperfect ones.
              </p>
            </Section>

            <Section title="Final thought">
              <p>
                Most organisations do not ignore governance because they believe it has no value.
                They ignore it because reality keeps forcing trade-offs, and governance is often
                expected to absorb those trade-offs without being redesigned for the context.
              </p>

              <p>
                That is why the gap between principle and practice remains so common. The issue
                is usually not belief. It is fit. If governance does not fit the environment it
                must survive in, it will keep looking impressive in theory and fragile in practice.
              </p>
            </Section>
          </div>
        </div>
      </article>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}