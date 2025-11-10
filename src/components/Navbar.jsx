import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-6 md:items-center">
      <li>
        <a href="#about" className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition">About</a>
      </li>
      <li>
        <a href="#features" className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition">Features</a>
      </li>
      <li>
        <a href="#contact" className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition">Contact</a>
      </li>
      <li>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2 text-sm md:text-base shadow-lg hover:shadow-xl hover:bg-slate-800 transition">
          <Rocket size={16} />
          Get Started
        </a>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-lg bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-inner" />
            <span className="font-semibold tracking-tight text-slate-900 text-lg md:text-xl">ICARE</span>
          </a>

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/70 border border-slate-200 shadow-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-2">
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  )
}
