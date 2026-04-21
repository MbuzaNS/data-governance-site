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
    <section className="relative overflow-hidden bg-white pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.96),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(10,10,10,0.05),_transparent_28%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 xl:px-20">
        <div className="rounded-[2rem] border border-[#0a0a0a]/10 bg-[#111111] p-8 text-white shadow-[0_30px_80px_rgba(10,10,10,0.14)] md:p-10">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-[#f0d07a]"
          >
            <ArrowLeft size={16} />
            Back to home
          </a>

          <div className="inline-flex items-center rounded-full border border-[#f0d07a]/30 bg-[#f0d07a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d07a]">
            Enquiries
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Start the conversation with a structured enquiry.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
            Share a few details about yourself or your organisation, outline the subject of your
            enquiry, and include the context needed for a meaningful response.
          </p>

          <div className="mt-10 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d07a]">
                What to include
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/75">
                <li>Whether you are enquiring as an individual or organisation</li>
                <li>Your preferred contact details</li>
                <li>The subject of the enquiry</li>
                <li>Enough context to understand the scope and urgency</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <a
                href="mailto:siyabonga@siinoma.co.za"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#f0d07a]"
              >
                <Mail size={16} />
                siyabonga@siinoma.co.za
              </a>
              <a
                href="tel:+270716796220"
                className="inline-flex items-center gap-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-[#f0d07a]"
              >
                <PhoneCall size={16} />
                +27 (0) 71 679 6220
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#0a0a0a]/10 bg-white/90 p-8 shadow-[0_30px_80px_rgba(10,10,10,0.08)] backdrop-blur-sm md:p-10">
          <div className="mb-8 border-b border-[#0a0a0a]/10 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8892f]">
              Enquiry form
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0a0a0a]">
              Submit your enquiry
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#0a0a0a]/65">
              Fields marked as required must be completed before submission. Submitting the form
              will open an email draft addressed to Siyabonga.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Name *</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Surname *</span>
                <input
                  name="surname"
                  type="text"
                  required
                  value={form.surname}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                  placeholder="Enter your surname"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Enquiry type *</span>
                <select
                  name="enquiryType"
                  required
                  value={form.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  <option value="Individual">Individual</option>
                  <option value="Organisation">Organisation</option>
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Contact number *</span>
                <input
                  name="contactNumber"
                  type="tel"
                  required
                  value={form.contactNumber}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                  placeholder="+27 (0) 71 679 6220"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Email address *</span>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                  placeholder="name@organisation.com"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[#0a0a0a]">Subject *</span>
                <input
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                  placeholder="What is this enquiry about?"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-[#0a0a0a]">Message *</span>
              <textarea
                name="message"
                required
                rows={8}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-[1.5rem] border border-[#0a0a0a]/12 bg-[#fcfbf7] px-4 py-3 text-[#0a0a0a] outline-none transition-colors duration-200 focus:border-[#c79a3b]"
                placeholder="Please provide the background, scope, and any relevant detail for your enquiry."
              />
            </label>

            <div className="flex flex-col gap-4 border-t border-[#0a0a0a]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[#0a0a0a]/60">
                This submission opens your email client with a prefilled message to
                {' '}
                siyabonga@siinoma.co.za.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0a0a0a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#333333] hover:shadow-lg"
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
