import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  MapPin,
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Clock,
  Zap,
  Globe,
  Compass,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function About() {
  const [dhakaTime, setDhakaTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setDhakaTime(new Intl.DateTimeFormat('en-US', options).format(new Date()))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      color: 'indigo',
      title: 'Frontend Craftsmanship',
      desc: 'Pixel-perfect, accessible React & Next.js interfaces with Tailwind CSS & Motion animations.',
      badge: 'React 19 & Next.js',
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      color: 'purple',
      title: 'High-Performance Backend',
      desc: 'Scalable RESTful microservices, Express.js routing, and optimized async server pipelines.',
      badge: 'Node & Express',
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      color: 'cyan',
      title: 'Database Architecture',
      desc: 'Optimized MongoDB schema designs, indexing, aggregation pipelines, and Firebase real-time sync.',
      badge: 'MongoDB & Firebase',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      color: 'emerald',
      title: 'Security & Integrations',
      desc: 'Role-based access controls (RBAC), JWT authentication, and secure Stripe payment processing.',
      badge: 'Stripe & JWT Auth',
    },
  ]

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> BENTO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Bridging Aesthetics with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Full-Stack Architecture
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A look into who I am, where I build from, and the engineering principles that guide my work.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Narrative & Origin Story (8 cols) */}
          <div
            data-aos="fade-right"
            className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>My Journey & Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Turning pure curiosity into{' '}
                <span className="text-indigo-300 underline decoration-indigo-500/40 underline-offset-8">
                  production-grade software
                </span>.
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am <strong className="text-white font-semibold">{personalInfo.name}</strong>, a dedicated Full Stack Web Developer based in <span className="text-indigo-400 font-semibold">{personalInfo.location}</span>. My software engineering journey began with a spark of fascination watching my elder brother build applications on the web. That curiosity soon matured into an obsession with creating clean, scalable digital architectures.
                </p>
                <p>
                  Over the past <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold font-mono">1.5+ years</span> of intense hands-on development, I have specialized in the <strong className="text-white">MERN stack</strong>. I take pride in engineering end-to-end applications—where silky 60fps frontend interactions meet rock-solid, resilient backend APIs.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] mt-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold">
                  R
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{personalInfo.name}</div>
                  <div className="text-xs text-slate-400">{personalInfo.role}</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 transition-all font-semibold text-xs sm:text-sm shadow-md"
              >
                <span>Let's Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Item 2: Location & Real-Time Clock Widget (4 cols) */}
          <div
            data-aos="fade-left"
            className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>HQ & Timezone</span>
                </div>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              {/* Real-time Clock Card */}
              <div className="p-5 rounded-2xl bg-[#060a1a] border border-white/[0.08] space-y-2 text-center shadow-inner">
                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LOCAL TIME (BANGLADESH)</span>
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {dhakaTime || 'Loading...'}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold">
                  GMT +6 • Active & Available
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Current Location</div>
                    <div className="text-sm font-bold text-white">{personalInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Target className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Work Preference</div>
                    <div className="text-sm font-bold text-white">Remote & Worldwide Freelance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-400 font-mono text-center">
              Response time: <span className="text-indigo-300 font-semibold">&lt; 24 hours</span>
            </div>
          </div>

          {/* Bento Item 3: Four Pillars of Architecture (Full 12 cols, 4 sub-boxes) */}
          <div className="lg:col-span-12 space-y-4 pt-4" data-aos="fade-up">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider px-1">
              <Zap className="w-4 h-4 text-pink-400" />
              <span>Core Architectural Pillars</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl hover:border-indigo-500/40 hover:bg-[#0e173a]/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[#060a1a] border border-white/[0.08] group-hover:scale-110 transition-transform">
                        {pillar.icon}
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-indigo-400">Pillar 0{idx + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
