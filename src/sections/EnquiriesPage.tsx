import { ChangeEvent, FormEvent, useState } from 'react'
import { ArrowLeft, Mail, PhoneCall, Send } from 'lucide-react'

type EnquiryFormState = {
  firstName: string
  surname: string
  enquiryType: string
  contactNumber: string
  email: string
  subject: string
  message: string
}

const initialFormState: EnquiryFormState = {
  firstName: '',
  surname: '',
  enquiryType: '',
  contactNumber: '',
  email: '',
  subject: '',
  message: '',
}

const EnquiriesPage = () => {
  const [form, setForm] = useState<EnquiryFormState>(initialFormState)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const emailSubject = `${form.subject} (${form.enquiryType})`

    const emailBody = [
      'New enquiry submission',
      '',
      `Name: ${form.firstName} ${form.surname}`,
      `Enquiry type: ${form.enquiryType}`,
      `Contact number: ${form.contactNumber}`,
      `Email address: ${form.email}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:siyabonga@siinoma.co.za?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`
  }

  return (
    <section className="relative overflow-hidden bg-[#efefef] pt-32 pb-20">
      <div className="relative mx-auto grid w-full max-w-7xl gap-5 px-6 lg:grid-cols-[1fr_1fr] lg:px-12 xl:px-20">
        {/* LEFT PANEL */}
        <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-10">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </a>

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Enquiries
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl leading-[1.05]">
            Start the conversation with a structured enquiry.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
            Share a few details about yourself or your organisation, outline the
            subject of your enquiry, and include the context needed for a
            meaningful response.
          </p>

          <div className="mt-8 space-y-4">
            {/* WHAT TO INCLUDE */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#161616] to-[#101010] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                What to include
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/68">
                <li>
                  Whether you are enquiring as an individual or organisation
                </li>

                <li>Your preferred contact details</li>

                <li>The subject of the enquiry</li>

                <li>
                  Enough context to understand the scope and urgency
                </li>
              </ul>
            </div>

            {/* CONTACT DETAILS */}
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <a
                href="mailto:siyabonga@siinoma.co.za"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                <Mail size={16} />
                siyabonga@siinoma.co.za
              </a>

              <a
                href="tel:+270716796220"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                <PhoneCall size={16} />
                +27 (0) 71 679 6220
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-[2rem] border border-black/8 bg-[#fcfcfc] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.05)] md:p-10">
          {/* HEADER */}
          <div className="mb-8 border-b border-black/8 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Enquiry form
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">
              Submit your enquiry
            </h2>

            <p className="mt-3 text-sm leading-7 text-black/60">
              Fields marked as required must be completed before submission.
              Submitting the form will open an email draft addressed to
              Siyabonga.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* ROW 1 */}
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Name *
                </span>

                <input
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Surname *
                </span>

                <input
                  name="surname"
                  type="text"
                  required
                  value={form.surname}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                  placeholder="Enter your surname"
                />
              </label>
            </div>

            {/* ROW 2 */}
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Enquiry type *
                </span>

                <select
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 focus:border-black/20 focus:bg-white"
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>

                  <option value="Individual">
                    Individual
                  </option>

                  <option value="Organisation">
                    Organisation
                  </option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Contact number *
                </span>

                <input
                  name="contactNumber"
                  type="tel"
                  required
                  value={form.contactNumber}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                  placeholder="+27 (0) 71 679 6220"
                />
              </label>
            </div>

            {/* ROW 3 */}
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Email address *
                </span>

                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                  placeholder="name@organisation.com"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-black">
                  Subject *
                </span>

                <input
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                  placeholder="What is this enquiry about?"
                />
              </label>
            </div>

            {/* MESSAGE */}
            <label className="block space-y-2">
              <span className="text-sm font-medium text-black">
                Message *
              </span>

              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-[1.5rem] border border-black/8 bg-[#f3f3f3] px-4 py-3 text-black outline-none transition-all duration-200 placeholder:text-black/35 focus:border-black/20 focus:bg-white"
                placeholder="Please provide the background, scope, and any relevant detail for your enquiry."
              />
            </label>

            {/* FOOTER */}
            <div className="flex flex-col gap-4 border-t border-black/8 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-sm leading-6 text-black/55">
                This submission opens your email client with a prefilled message
                to siyabonga@siinoma.co.za.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a1a1a] hover:shadow-lg"
              >
                Submit enquiry
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EnquiriesPage