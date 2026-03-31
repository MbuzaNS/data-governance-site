const BigDataCaseStudy = () => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The Challenge" },
    { id: "role", label: "My Role" },
    { id: "revealed", label: "What the Work Revealed" },
    { id: "identity", label: "Identity Was the First Constraint" },
    { id: "legal", label: "The Legal Environment Was Still Evolving" },
    { id: "social", label: "Social Conditions Were Embedded in the Data" },
    { id: "infrastructure", label: "Infrastructure Was a Data Risk" },
    { id: "legacy", label: "Legacy Systems Limited Readiness" },
    { id: "politics", label: "Politics Moved Faster Than Strategy" },
    { id: "lessons", label: "What This Project Taught Me" },
    { id: "outcome", label: "Outcome" },
    { id: "final-thought", label: "Final Thought" }
  ]

  return (
    <div className="bg-[#fcfcfb] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <a
                href="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-black transition mb-6"
              >
                ← Back to portfolio
              </a>

              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gray-400 mb-4">
                On this page
              </p>

              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-black transition leading-5"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-4xl">
            <a
              href="/"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition mb-6 lg:hidden"
            >
              ← Back to portfolio
            </a>

            <header className="mb-14">
              <p className="text-sm font-semibold tracking-[0.22em] uppercase text-gray-500 mb-4">
                Case Study · Data Governance · Telecommunications
              </p>

              <h1 className="text-4xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] text-[#0a0a0a] max-w-4xl">
                Big Data Under Pressure: A Mobile Operator in Emerging Markets
              </h1>

              <p className="mt-6 text-xl text-gray-700 leading-9 max-w-3xl">
                In 2017, I was brought in to support a leading African mobile
                network operator during a period of intense regulatory scrutiny
                and reputational pressure in one of its largest markets.
              </p>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-6 py-5 shadow-sm max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Core theme
                </p>
                <p className="text-lg leading-8 text-[#111111]">
                  This work showed that data strategy only works when it is
                  designed for the environment it must survive in — not the one
                  leadership wishes it had.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                <img
                  src="/case-study-mobile-operator-emerging-markets.png"
                  alt="Connected mobile operator network infrastructure across emerging markets"
                  className="w-full h-auto object-cover"
                />
              </div>
            </header>

            <section id="overview" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Overview
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  The backdrop was a highly publicised compliance crisis.
                  Regulators had fined the operator billions for irregularly
                  registered SIM cards, arguing that the failure to disconnect
                  them had serious national security implications. Public
                  commentary at the time pointed to a widening trust gap between
                  the company and the authorities. Criticism was not only about
                  compliance failures, but also about the perception that the
                  operator had become arrogant and out of touch in the market.
                </p>
                <p>
                  By 2017, the business was trying to recover financially and
                  operationally, but it was doing so under pressure. Compliance
                  expectations were higher. Public trust was fragile. Government
                  scrutiny remained intense. In that environment, data stopped
                  being a by-product of operations and became something much
                  more important: a strategic asset tied to traceability,
                  accountability, and trust. It became part of how the business
                  could start rebuilding credibility.
                </p>
                <p>
                  It was in this context that the organisation commissioned a
                  big data initiative focused on three priorities:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>customer identification and SIM registration readiness</li>
                  <li>social media sentiment monitoring</li>
                  <li>making data available for large-scale analytics</li>
                </ul>
                <p>
                  My mandate was to assess whether the operator’s people,
                  processes, and technology were ready to support these use
                  cases responsibly.
                </p>
              </div>
            </section>

            <section id="challenge" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                The Challenge
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  The use cases were clear enough. Delivering them in practice
                  was another matter.
                </p>
                <p>
                  The operator wanted to strengthen customer traceability,
                  understand public sentiment more effectively, and create a
                  well-governed data environment capable of supporting
                  large-scale analytics using emerging technologies such as
                  Hadoop and Apache Spark. But those ambitions were running into
                  a harder truth: the operating environment was not yet ready.
                </p>
                <p>So the real question was never just whether the tooling existed.</p>
                <p>
                  It was whether the operator’s data, controls, and operating
                  environment were ready to support these use cases responsibly
                  and reliably in a context shaped by regulatory tension,
                  incomplete identity systems, legacy technology, uneven
                  infrastructure, and high public sensitivity.
                </p>
              </div>
            </section>

            <section id="role" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                My Role
              </h2>

              <div className="grid gap-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium mb-3 text-[#0a0a0a]">
                    People
                  </h3>
                  <p className="text-[17px] leading-8 text-gray-800">
                    Could the right teams support a more advanced data and
                    analytics environment? Did business and technology teams
                    understand the control, governance, and operating changes
                    required to produce data fit for large-scale analytics? Was
                    the organisation’s culture ready to sustain governance
                    beyond implementation?
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium mb-3 text-[#0a0a0a]">
                    Processes
                  </h3>
                  <p className="text-[17px] leading-8 text-gray-800">
                    Were there workable structures for data access, ownership,
                    accountability, and risk management? Could the organisation
                    support new use cases without creating new control failures?
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-medium mb-3 text-[#0a0a0a]">
                    Technology
                  </h3>
                  <p className="text-[17px] leading-8 text-gray-800">
                    Was the data accessible in a timely and accurate manner?
                    Could legacy environments feed new platforms? Were the
                    underlying systems stable enough to support analytics at
                    scale?
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[17px] leading-8 text-gray-800">
                This assessment also fed into the development of a data
                accessibility framework and a data playbook to bring more
                consistency to governance, controlled usage, and delivery
                practices.
              </p>
            </section>

            <section id="revealed" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                What the Work Revealed
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  One of the clearest lessons from the project was that data is
                  never only a technology story.
                </p>
                <p>
                  Data is shaped by its environment. Political pressure affects
                  urgency. Economic conditions affect identity quality. Social
                  realities affect coverage. Infrastructure affects integrity.
                  Law affects what can be enforced. Technology affects what can
                  be done at all.
                </p>
                <p>
                  Once that becomes clear, you stop treating data as a purely
                  technical problem.
                </p>
              </div>
            </section>

            <section id="identity" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Identity Was the First Constraint
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>A major part of the work centred on customer identification.</p>
                <p>
                  In telecommunications, this matters because SIM registration
                  is not just an administrative control. Reliable identification
                  is foundational to fraud prevention, investigative capability,
                  and public safety.
                </p>
                <p>
                  The difficulty in this case was that a SIM registration and
                  traceability outcome was being pursued in a market where the
                  underlying identity system was far less mature. A large
                  portion of the population did not have formal identification.
                  In many cases, obtaining formal identification required money,
                  literacy, and access to institutions that were easier to reach
                  in urban areas than in rural ones. That meant identity
                  coverage was uneven from the start.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#111111] text-white p-6 lg:p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
                  The strategic question
                </p>
                <p className="text-2xl leading-10 font-medium">
                  How do you build traceability where formal identity is incomplete?
                </p>
              </div>

              <div className="space-y-5 text-[17px] leading-8 text-gray-800 mt-6">
                <p>That pushed the analytics toward more inferential methods, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>using cell tower location data to estimate where a subscriber spent most of their time in the evening</li>
                  <li>analysing frequency of activity to infer a likely home base</li>
                  <li>combining that with local naming patterns and contextual indicators</li>
                  <li>applying probabilistic matching where certainty was not possible</li>
                </ul>
              </div>

              <blockquote className="mt-8 border-l-4 border-black pl-5 italic text-xl leading-9 text-[#111111]">
                In some environments, identity is not verified first. It is inferred first.
              </blockquote>
            </section>

            <section id="legal" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                The Legal Environment Was Still Evolving
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>There was also a legal complication.</p>
                <p>
                  Unlike South Africa’s{" "}
                  <strong>
                    Regulation of Interception of Communications and Provision of
                    Communication-Related Information Act (RICA)
                  </strong>
                  , the local regulatory model did not yet provide the same
                  mature, consistently enforceable structure for SIM
                  registration and traceability. In the South African context,
                  RICA requires SIM cards to be registered against verified
                  individuals. That creates a legal basis for traceability and
                  helps law enforcement investigate fraud, organised crime, and
                  other illegal activity enabled by anonymous communication.
                </p>
                <p>
                  In practical terms, a similar registration and traceability
                  outcome was being pursued in a market where both the identity
                  system and the regulatory framework were still maturing.
                </p>
                <p>
                  Support for that model only emerged later through the NIN-SIM
                  linkage policy, which strengthened the connection between
                  subscriber registration and formal identity.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>operationally useful</li>
                  <li>strategically necessary</li>
                  <li>but not always clearly formalised in law</li>
                </ul>
                <p>
                  This is a familiar problem in data work: the business needs
                  answers before regulation has fully decided how those answers
                  should be produced.
                </p>
                <p>
                  Legal readiness can determine whether an otherwise workable
                  data use case succeeds or stalls.
                </p>
              </div>
            </section>

            <section id="social" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Social Conditions Were Embedded in the Data
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  The identity issue was not just regulatory or technical. It
                  was social.
                </p>
                <p>
                  Urban populations were generally more visible in formal
                  systems, but large parts of the population lived in rural
                  areas where the cost and complexity of obtaining formal
                  identification were much higher. Literacy also played a role.
                  If you need money, mobility, and the ability to navigate
                  bureaucracy just to become visible in the system, the data
                  will naturally skew toward those who have access.
                </p>
                <p>That matters because incomplete data is rarely neutral.</p>
                <p>
                  It usually reflects deeper inequalities in participation,
                  affordability, and access.
                </p>
                <p>
                  So when the operator looked at customer records, registration
                  coverage, or traceability, it was not just looking at weak
                  data quality. It was looking at the structural limits of the
                  environment itself.
                </p>
                <p>
                  This is not unique to one market. It reflects a broader
                  challenge where frameworks assume stronger identity systems,
                  infrastructure, and institutional maturity than actually
                  exist.
                </p>
                <p>
                  That is one reason many data governance practices fail when
                  they are imported without adaptation.
                </p>
                <p>
                  The data accessibility framework therefore had to be aligned
                  to the market while still preserving the core governance
                  principles.
                </p>
              </div>
            </section>

            <section id="infrastructure" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Infrastructure Was a Data Risk
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>Another major insight came from infrastructure.</p>
                <p>
                  The local operating environment relied heavily on generators.
                  During switch-over periods, when the public grid handed over
                  capacity to a generator, or when one generator handed over to
                  another, systems did not always fail cleanly. They could pause
                  mid-process.
                </p>
                <p>
                  That sounds like an operational inconvenience. In reality, it
                  had direct data consequences.
                </p>
                <p>
                  In one instance, a disruption during processing resulted in
                  MSISDN values, or subscriber phone numbers, being written into
                  the wrong billing-related field. The consequence was
                  inaccurate account outputs and incorrect charges being
                  generated.
                </p>
                <p>That changes how you think about data integrity.</p>
                <p>
                  In some environments, data quality is not only about rules,
                  controls, or code discipline. It is also about whether the
                  infrastructure underneath the process is stable enough for the
                  process to complete properly.
                </p>
                <p>
                  Because parts of the underlying infrastructure sat outside the
                  operator’s direct control, resolving the issue required
                  coordination beyond the immediate project. Sustained data
                  quality therefore became as much an operating model problem as
                  a technical one.
                </p>
              </div>
            </section>

            <section id="legacy" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Legacy Systems Limited Readiness
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  The problem was not the new technology itself. The deeper
                  issue was the legacy environment around it: fragmented data,
                  weak integration paths, and limited accessibility.
                </p>
                <p>
                  Data quality issues were often attributed to new technologies,
                  when the real constraint sat in the underlying legacy estate.
                  Legacy systems made extraction difficult. Integration paths
                  were weak. Moving information from operational systems into
                  analytics environments required far more effort than strategy
                  documents tended to assume.
                </p>
                <p>
                  So while the organisation wanted to move toward modern
                  analytics, the existing environment was still making basic
                  access difficult.
                </p>
                <p>That changed the nature of the readiness question.</p>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-3">
                  The real readiness test
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-500">It was not:</p>
                    <p className="text-2xl leading-9 text-[#111111]">
                      Do we have the capability to support large-scale analytics?
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">It was:</p>
                    <p className="text-2xl leading-9 text-[#111111]">
                      Will the existing environment allow that capability to work?
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[17px] leading-8 text-gray-800">
                This also affected timeliness, forcing the project team to work
                around data delays that made operationalisation harder.
              </p>
            </section>

            <section id="politics" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Politics Moved Faster Than Strategy
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  This initiative did not gain momentum because the organisation
                  suddenly became philosophically committed to data maturity.
                </p>
                <p>It gained momentum because circumstances forced the issue.</p>
                <p>That is worth saying plainly.</p>
                <p>
                  Regulatory tension, public pressure, and national security
                  concerns accelerated the need for traceability and compliance
                  far more quickly than any internal roadmap would have. The
                  wider public discourse around the operator at the time
                  reflected exactly that mix of distrust, scrutiny, and
                  sensitivity.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-black pl-5 italic text-xl leading-9 text-[#111111]">
                Data becomes urgent when something external makes it impossible to ignore.
              </blockquote>
            </section>

            <section id="lessons" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                What This Project Taught Me
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  This project stripped away the comforting idea that data
                  strategy can be designed in the abstract, underpinned by
                  frameworks developed for different conditions and
                  environments.
                </p>
                <p>It cannot.</p>
                <p>Not if it is going to work.</p>
                <p>The real operating environment included:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>incomplete identity systems</li>
                  <li>uneven access to formal participation</li>
                  <li>unstable infrastructure</li>
                  <li>ageing legacy technology</li>
                  <li>evolving legal expectations</li>
                  <li>strong political and regulatory pressure</li>
                </ul>
                <p>So the goal was never going to be perfection.</p>
                <p>It had to be practicality.</p>
                <p>
                  Not perfect identity, but workable traceability.<br />
                  Not perfect data quality, but resilient controls.<br />
                  Not imported models, but context-aware ones.
                </p>
              </div>

              <blockquote className="mt-8 border-l-4 border-black pl-5 italic text-xl leading-9 text-[#111111]">
                Data frameworks fail when they are designed for ideal conditions instead of real ones.
              </blockquote>
            </section>

            <section id="outcome" className="scroll-mt-24 mb-14">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Outcome
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>
                  The assessment clarified what would be required to support
                  these use cases responsibly: stronger identity controls, more
                  realistic assumptions about data quality, better alignment
                  between legal and operational models, and a clearer
                  understanding of where legacy infrastructure would constrain
                  delivery.
                </p>
                <p>In this setting, data sat at the intersection of:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>compliance</li>
                  <li>security</li>
                  <li>operational risk</li>
                  <li>customer trust</li>
                  <li>institutional credibility</li>
                </ul>
                <p>
                  And that changed the standard for what “readiness” really
                  meant.
                </p>
              </div>
            </section>

            <section id="final-thought" className="scroll-mt-24 pb-8">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] mb-6 text-[#0a0a0a]">
                Final Thought
              </h2>
              <div className="space-y-5 text-[17px] leading-8 text-gray-800">
                <p>Most organisations treat data as a technical problem.</p>
                <p>Usually, it is not.</p>
                <p>
                  The harder question is whether the strategy fits the
                  environment it must survive in. If it does not, it may sound
                  impressive, but it will not hold when reality arrives.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export default BigDataCaseStudy
