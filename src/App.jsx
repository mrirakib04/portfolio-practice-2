import { useEffect } from 'react'
import AOS from 'aos'
import GlowBackground from './components/GlowBackground'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-[#050711] text-slate-100 selection:bg-indigo-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Mouse Follower Spotlight (Desktop only) */}
      <CursorSpotlight />

      {/* Multi-layer Aurora Background Glow */}
      <GlowBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
