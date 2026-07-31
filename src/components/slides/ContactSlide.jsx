import { useState } from "react"
import { profile } from "../../data/content"

export default function ContactSlide() {
  const { contact } = profile
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`)
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-16 gap-8">
      <div className="relative bg-paper/75 backdrop-blur-sm border border-[#E3CBC3] rounded-md p-8 max-w-md w-full shadow-[2px_3px_0_rgba(64,31,40,0.14)]">
        <div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-brass flex items-center justify-center text-xs text-brass font-semibold rotate-12"
          aria-hidden="true"
        >
          SENT
        </div>
        <div className="font-serif font-bold text-4xl text-blue-deep mb-2">Let's connect</div>
        <p className="text-base text-charcoal-soft mb-5">
          Open to product roles, and happy to talk through any of the work in
          this portfolio.
        </p>

        {sent ? (
          <p className="text-base text-blue-deep">
            Opening your email client now, thanks for reaching out.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full text-base px-4 py-2.5 rounded border border-[#E3CBC3] bg-white/70 focus:outline-none focus:ring-1 focus:ring-blue-mid"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full text-base px-4 py-2.5 rounded border border-[#E3CBC3] bg-white/70 focus:outline-none focus:ring-1 focus:ring-blue-mid"
            />
            <textarea
              placeholder="Message"
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full text-base px-4 py-2.5 rounded border border-[#E3CBC3] bg-white/70 focus:outline-none focus:ring-1 focus:ring-blue-mid resize-none"
            />
            <button
              type="submit"
              className="w-full text-base font-medium py-2.5 rounded bg-blue-deep text-paper hover:bg-blue-mid transition-colors"
            >
              Send
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="text-sm font-medium px-5 py-2 rounded-full bg-paper border border-[#E3CBC3] text-blue-deep hover:bg-paper-dim transition-colors"
        >
          {contact.email}
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium px-5 py-2 rounded-full bg-paper border border-[#E3CBC3] text-blue-deep hover:bg-paper-dim transition-colors"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
