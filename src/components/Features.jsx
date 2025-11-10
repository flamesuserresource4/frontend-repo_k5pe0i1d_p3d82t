import { Shield, Sparkles, Cpu, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Enterprise-grade security practices built into every layer for peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Delightfully Simple',
    desc: 'A minimalist interface that’s easy to navigate and a joy to use.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Core',
    desc: 'Smart automation and insights to accelerate decisions and outcomes.',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    desc: 'Fast, responsive, and accessible everywhere — on any device.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-40px,rgba(20,20,20,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why ICARE</h2>
          <p className="mt-3 text-slate-600">A carefully crafted system that focuses on what matters: clarity, speed, and trust.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-slate-900 text-white grid place-items-center shadow group-hover:scale-105 transition">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
