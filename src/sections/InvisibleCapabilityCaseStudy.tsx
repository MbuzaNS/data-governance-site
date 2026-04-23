import InsightCallout from "../components/ui/InsightCallout";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The Challenge" },
  { id: "revealed", label: "What the Work Revealed Early" },
  { id: "role", label: "My Role" },
  { id: "changed", label: "What Changed" },
  { id: "invisible", label: "The Real Problem: Invisible Capability" },
  { id: "reframing", label: "Reframing the Work" },
  { id: "design", label: "How Governance Became Information Design" },
  { id: "possible", label: "What Became Possible" },
  { id: "underestimate", label: "The Part Most Governance Programmes Underestimate" },
  { id: "structural", label: "The Structural Problem" },
  { id: "after", label: "What Happened After" },
  { id: "lesson", label: "The Lesson That Stayed With Me" },
  { id: "outcome", label: "Outcome" },
  { id: "final", label: "Final Thought" },
];

export default function InvisibleCapabilityCaseStudy() {
  return (
    <div className="bg-[#fcfcfb] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
              >
                <span>←</span>
                <span>Back to home</span>
              </a>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
                On this page
              </p>

              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm leading-6 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Case Study
            </p>

            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-950 mb-4">
              When Capability Is Invisible
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12">
              Data governance in a constrained infrastructure environment
            </p>

            <div className="mb-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <img
                src="/case-study-invisible-capability.png"
                alt="Illustration representing invisible workforce capability across a constrained infrastructure environment"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-10 text-[17px] leading-8 text-gray-700">
              <section id="overview" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  Overview
                </h2>

                <p>
                  In 2012, I worked with a large African electricity utility at
                  a time when the organisation was operating under sustained
                  operational, financial, and public pressure.
                </p>

                <p>
                  The business was facing mounting scrutiny because it could no
                  longer meet demand consistently. New build programmes were
                  delayed. Ageing infrastructure had become increasingly
                  difficult to maintain. Skilled engineering capacity was under
                  strain. Internally, morale was declining, attrition was
                  rising, recruitment had slowed, and critical roles were
                  becoming harder to fill.
                </p>

                <p>
                  The organisation needed to understand what capability it had,
                  where that capability existed, and how to deploy it more
                  effectively.
                </p>

                <p>But it could not answer those questions with confidence.</p>

                <p>
                  A major advisory firm had already recommended the introduction
                  of data governance and stewardship as part of a broader
                  recovery effort. That recommendation reflected a growing
                  realisation within the organisation:
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  It is difficult to operate a constrained system effectively
                  when you cannot trust the data used to understand it.
                </blockquote>

                <p>This was my introduction to data governance in practice.</p>

                <p>Not as theory.</p>
                <p>Not as policy.</p>
                <p>But as operational work that had to produce results.</p>
              </section>

              <section id="challenge" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  The Challenge
                </h2>

                <p>
                  I was assigned as a Data Steward in the HR domain, with
                  responsibility for improving the quality of workforce data so
                  that it could support reporting, planning, and decision-making.
                </p>

                <p>
                  At first glance, the organisation appeared to have a strong
                  foundation. Employee data was centralised within a single ERP
                  system across the enterprise. In theory, this should have
                  enabled consistent reporting and clear workforce visibility.
                </p>

                <p>In reality, the data had degraded.</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Key fields were missing</li>
                  <li>Duplicate records existed in significant numbers</li>
                  <li>Identification details were incorrect</li>
                  <li>Reporting definitions were interpreted inconsistently</li>
                  <li>Extracting data from the ERP was difficult and slow</li>
                </ul>

                <p>As a result:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Reports took time to produce</li>
                  <li>Numbers did not reconcile</li>
                  <li>Outputs were questioned</li>
                </ul>

                <p>This created a deeper issue than data quality alone.</p>

                <p>It created a trust problem.</p>

                <p>
                  The business was asking for workforce insight at a time when
                  it needed it most, and the data could not support reliable
                  answers.
                </p>

                <InsightCallout
                  eyebrow="Core Tension"
                  title="The organisation did not lack capability. It lacked visibility of capability."
                  tone="strong"
                >
                  <p>
                    The core issue was not always the absence of skill. In many
                    cases, the capability already existed somewhere in the
                    organisation, but it was not visible in a structured, usable
                    way.
                  </p>
                </InsightCallout>
              </section>

              <section id="revealed" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  What the Work Revealed Early
                </h2>

                <p>
                  One of the first lessons from the engagement was
                  straightforward:
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Centralised data does not automatically become usable data.
                </blockquote>

                <p>The organisation had already solved for centralisation.</p>

                <p>What it had not solved for was:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>standardisation</li>
                  <li>validation</li>
                  <li>shared interpretation</li>
                  <li>usability</li>
                </ul>

                <p>That gap is where governance becomes necessary.</p>

                <p>
                  Because when data is centralised but inconsistently defined
                  and interpreted, the organisation risks operating with a
                  single system that produces multiple versions of the truth.
                </p>

                <InsightCallout
                  eyebrow="Key Lesson"
                  title="A single ERP system can still produce multiple versions of the truth."
                >
                  <p>
                    Centralisation solved only part of the problem. Without
                    clear rules, validation, and consistent interpretation, the
                    same system could still generate mistrust.
                  </p>
                </InsightCallout>
              </section>

              <section id="role" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  My Role
                </h2>

                <p>
                  The work began with engagement across the HR operating
                  environment.
                </p>

                <p>I worked with:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>policy owners</li>
                  <li>HR Business Partners</li>
                  <li>data capture teams</li>
                  <li>executive stakeholders</li>
                </ul>

                <p>
                  The goal was not only to correct poor data, but to align how
                  workforce data was defined, captured, validated, and
                  interpreted.
                </p>

                <p>
                  From there, I helped define and implement practical data
                  quality controls.
                </p>

                <p>
                  One of the earliest interventions involved validating national
                  identification numbers using established structural logic to
                  confirm whether attributes such as date of birth and gender
                  aligned with the recorded data.
                </p>

                <p>This was a foundational step.</p>

                <p>It introduced:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>consistency</li>
                  <li>immediate validation</li>
                  <li>visibility into data issues</li>
                </ul>

                <p>
                  From that point, we expanded into broader master data
                  controls, focusing on employee records whose core attributes
                  should remain stable over time.
                </p>

                <p>
                  Equally important, the rules governing the data were made
                  visible and accessible so that interpretation no longer
                  depended on a small group of individuals.
                </p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Data quality improves when rules are not only defined, but
                  consistently understood by the people who create and use the
                  data.
                </blockquote>
              </section>

              <section id="changed" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  What Changed
                </h2>

                <p>The improvements were measurable.</p>

                <p>For core employee data:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>completeness improved to 99%</li>
                  <li>accuracy increased to 80%</li>
                </ul>

                <p>
                  Because the ERP platform was enterprise-wide, these gains
                  applied across a workforce of approximately 60,000 employees.
                </p>

                <p>
                  This created a stronger foundation for enterprise-wide
                  workforce insight.
                </p>

                <p>
                  But the real value of the work only became clear when the
                  focus shifted from employee records to workforce capability.
                </p>
              </section>

              <section id="invisible" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  The Real Problem: Invisible Capability
                </h2>

                <p>
                  As part of a broader initiative, the organisation began
                  capturing engineering skills, qualifications, and
                  certifications more systematically.
                </p>

                <p>The objective was practical:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>understand available capability</li>
                  <li>respond to skills shortages</li>
                  <li>improve workforce planning</li>
                </ul>

                <p>This is where the deeper issue became visible.</p>

                <p>
                  Across the organisation, critical skills already existed. The
                  problem was that they were not visible in a structured, usable
                  way.
                </p>

                <p>
                  One site could hold a capability that another urgently needed,
                  yet the receiving team would have little or no awareness of
                  it.
                </p>

                <p>This was not an isolated occurrence.</p>

                <p>It was systemic.</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  The organisation did not lack capability. It lacked
                  visibility of capability.
                </blockquote>
              </section>

              <section id="reframing" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  Reframing the Work
                </h2>

                <p>At this point, the nature of the engagement shifted.</p>

                <p>
                  This was no longer simply a data quality initiative within HR.
                </p>

                <p>
                  It had become a visibility problem within a constrained
                  infrastructure environment.
                </p>

                <p>And that leads to a broader insight:</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Organisations do not always struggle because capability is
                  absent. Sometimes they struggle because capability is present
                  but cannot be seen.
                </blockquote>

                <p>That distinction is critical.</p>

                <p>Because the response differs fundamentally:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>If capability is absent, the solution is hiring or training</li>
                  <li>
                    If capability exists but is invisible, the solution is
                    better data design and governance
                  </li>
                </ul>
              </section>

              <section id="design" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  How Governance Became Information Design
                </h2>

                <p>
                  To support the workforce capability initiative, my role
                  expanded into advising how skills data should be structured
                  and captured within the ERP environment.
                </p>

                <p>This required:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>defining appropriate data structures</li>
                  <li>
                    establishing rules for valid qualifications and
                    certifications
                  </li>
                  <li>configuring system fields to support consistent capture</li>
                  <li>
                    introducing validation processes, including external
                    verification where required
                  </li>
                </ul>

                <p>It also required coordinated engagement across the organisation.</p>

                <p>HR Business Partners had to:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>communicate the new requirements</li>
                  <li>guide their teams through data capture</li>
                  <li>ensure compliance with validation processes</li>
                </ul>

                <p>These were not purely technical changes.</p>

                <p>
                  They required alignment across policy, process, and behaviour.
                </p>

                <p>This is where data governance moves beyond control.</p>

                <p>It becomes the design of information for operational use.</p>

                <p>
                  Because data can exist within systems without ever becoming
                  useful. For it to become useful, structure, validation, and
                  intended use must be aligned.
                </p>
              </section>

              <section id="possible" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  What Became Possible
                </h2>

                <p>With structured and governed capability data:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>engineering skills became visible across the organisation</li>
                  <li>workforce planning improved</li>
                  <li>scarce skills could be identified and allocated more effectively</li>
                  <li>
                    operational decisions were supported by more reliable
                    information
                  </li>
                </ul>

                <p>This was not theoretical value.</p>

                <p>
                  It directly improved the organisation’s ability to manage
                  constrained resources in a high-pressure environment.
                </p>
              </section>

              <section id="underestimate" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  The Part Most Governance Programmes Underestimate
                </h2>

                <p>The intervention delivered meaningful results.</p>

                <p>
                  But it also exposed a structural weakness common to many data
                  governance programmes.
                </p>

                <p>The challenge was not only improvement.</p>

                <p>It was continuity.</p>

                <p>The quality gains were real.</p>
                <p>The visibility improvements were valuable.</p>
                <p>
                  The governance structures functioned while attention and
                  sponsorship remained strong.
                </p>

                <p>But the long-term sustainability of those gains was uncertain.</p>

                <p>The governance model depended heavily on individuals.</p>

                <p>There was no deeply embedded structure ensuring that:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>ownership would persist</li>
                  <li>stewardship would continue</li>
                  <li>governance forums would remain active</li>
                  <li>data quality would be maintained over time</li>
                </ul>

                <p>When key individuals left, the system began to weaken.</p>

                <InsightCallout
                  eyebrow="What Stayed With Me"
                  title="The real issue was not whether the data could be improved. It was whether the organisation could sustain the structures required to keep it improved."
                  tone="strong"
                >
                  <p>
                    The intervention worked while sponsorship, stewardship, and
                    coordination remained active. Once those structures
                    weakened, the system began to drift.
                  </p>
                </InsightCallout>
              </section>

              <section id="structural" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  The Structural Problem
                </h2>

                <p>Governance operated largely through a matrix model.</p>

                <p>This meant:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>data owners and stewards had primary roles elsewhere</li>
                  <li>governance responsibilities were secondary</li>
                  <li>
                    continuity depended on sustained engagement rather than
                    embedded structure
                  </li>
                </ul>

                <p>This model can function when:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>leadership attention is strong</li>
                  <li>coordination is active</li>
                  <li>organisational focus is aligned</li>
                </ul>

                <p>It becomes fragile when:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>leadership changes</li>
                  <li>key coordinators leave</li>
                  <li>priorities shift</li>
                </ul>

                <p>
                  At that point, governance loses consistency before it loses
                  relevance.
                </p>

                <p>Meetings stop.</p>
                <p>Standards drift.</p>
                <p>Silos return.</p>

                <p>This raises a fundamental question:</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Can governance be sustained if it is not structurally anchored?
                </blockquote>

                <p>In this case, the answer became clear.</p>

                <p>It could not.</p>
              </section>

              <section id="after" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  What Happened After
                </h2>

                <p>
                  Following the departure of key governance coordinators and
                  executive sponsors:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>governance forums ceased</li>
                  <li>stewardship lost coordination</li>
                  <li>data initiatives slowed and eventually stopped</li>
                  <li>data silos began to re-emerge</li>
                </ul>

                <p>This was not a failure of the original work.</p>
                <p>It was a failure to institutionalise it.</p>
              </section>

              <section id="lesson" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  The Lesson That Stayed With Me
                </h2>

                <p>
                  Looking back, the most important insight from this experience
                  was not about data quality itself.
                </p>

                <p>It was about continuity.</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  The real issue was not whether the data could be improved. It
                  was whether the organisation could sustain the structures
                  required to keep it improved.
                </blockquote>

                <p>This distinction matters.</p>

                <p>Because governance does not fail at implementation.</p>

                <p>It fails when it cannot survive change.</p>
              </section>

              <section id="outcome" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  Outcome
                </h2>

                <p>The engagement delivered:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>significant improvements in workforce master data</li>
                  <li>greater visibility of engineering capability</li>
                  <li>more reliable HR reporting</li>
                  <li>improved support for workforce planning</li>
                </ul>

                <p>But it also surfaced a deeper organisational truth:</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Data governance creates value during intervention. It becomes
                  durable only when ownership survives beyond the intervention.
                </blockquote>
              </section>

              <section id="final" className="scroll-mt-24">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-950 mb-6">
                  Final Thought
                </h2>

                <p>
                  Many organisations approach data governance as a framework to
                  be implemented.
                </p>

                <p>In practice, it often begins elsewhere:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>a visibility problem</li>
                  <li>a trust problem</li>
                  <li>a planning problem</li>
                  <li>a constraint that cannot be managed effectively</li>
                </ul>

                <p>In this case, the immediate issue was workforce data.</p>

                <p>But the deeper lesson was broader:</p>

                <blockquote className="border-l-4 border-gray-300 pl-6 text-xl italic text-gray-950 my-6">
                  Governance improves decision-making in the present. It endures
                  only when continuity is built into the structure.
                </blockquote>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
