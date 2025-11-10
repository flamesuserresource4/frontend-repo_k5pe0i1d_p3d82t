import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 md:pt-36 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Intelligent Care for a Futuristic World
          </h1>
          <p className="mt-6 text-slate-600 text-base md:text-lg">
            ICARE blends modern design, 3D interactivity, and thoughtful experience to deliver a digital presence that feels alive, minimal, and irresistibly professional.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-slate-800 transition">
              Explore Platform
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 text-sm md:text-base hover:bg-slate-50 transition">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
