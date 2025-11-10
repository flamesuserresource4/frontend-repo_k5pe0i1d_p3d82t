import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
        <footer id="get-started" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to elevate your ICARE experience?</h3>
                <p className="text-slate-600">Build a modern, professional presence with interactive 3D and a minimalist aesthetic.</p>
              </div>
              <a href="#contact" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 shadow-lg hover:shadow-xl hover:bg-slate-800 transition">
                Get in touch
              </a>
            </div>
            <p className="mt-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} ICARE. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
