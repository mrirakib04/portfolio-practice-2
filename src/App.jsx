import { useEffect } from 'react'
import AOS from 'aos'
import GlowBackground from './components/GlowBackground'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './sections/Navbar'

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
        <main className="flex-grow pt-24">
          {/* Sections will be added step by step */}
        </main>
      </div>
    </div>
  )
}

export default App
