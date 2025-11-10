import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We will reach out shortly.')
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_180px_at_80%_20%,rgba(99,102,241,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Start a conversation</h2>
            <p className="mt-3 text-slate-600 max-w-prose">We’d love to hear about your goals and how ICARE can help. Send a message and our team will respond promptly.</p>
            {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
          </div>
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">First name</label>
                <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last name</label>
                <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full rounded-full bg-slate-900 text-white px-6 py-3 text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-slate-800 transition">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
