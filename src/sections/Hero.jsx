import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Download,
  FolderGit2,
  Code2,
  Terminal,
  ArrowRight,
  Zap,
  CheckCircle2,
  Laptop,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const roles = [
    'Full Stack Developer',
    'MERN Stack Specialist',
    'Node.js & Express Architect',
    'React & Next.js Specialist',
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex]
    const speed = isDeleting ? 35 : 70

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1))
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex])

  const stats = [
    { label: 'Years Experience', value: '1.5+' },
    { label: 'Featured Projects', value: '3+' },
    { label: 'Tech Stack Skills', value: '15+' },
    { label: 'Architecture & UI', value: '100%' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Interactive Code Card */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </span>
              <span>AVAILABLE FOR NEW PROJECTS & ROLES</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-lg sm:text-xl text-slate-400 font-medium">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Md Rakibul Islam
                </span>{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Rakib
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typewriter Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#090e21]/90 border border-indigo-500/25 text-slate-200 text-sm sm:text-lg font-mono shadow-inner">
                <Terminal className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-indigo-300 font-bold">{displayedText}</span>
                <span className="w-2 h-5 bg-pink-500 animate-pulse inline-block" />
              </div>
            </motion.div>

            {/* Headline Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personalInfo.subHeadline} Transforming complex architectural requirements into seamless, lightning-fast digital realities.
            </motion.p>

            {/* Interactive Mini Terminal Code Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hidden sm:block text-left p-4 rounded-2xl bg-[#080d1e]/85 border border-white/[0.08] backdrop-blur-md shadow-xl text-xs font-mono max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/[0.06] text-slate-500">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-slate-400">developer.config.json</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <div>
                  <span className="text-pink-400">const</span>{' '}
                  <span className="text-indigo-300">developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"{personalInfo.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">"{personalInfo.location}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span>{' '}
                  <span className="text-cyan-300">["React 19", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind"]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-purple-300">"Ready for Production Challenges"</span>
                </div>
                <div>{'}'}</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                <FolderGit2 className="w-5 h-5" />
                <span>Explore Featured Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0b1226] hover:bg-[#111a38] text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-indigo-500/60 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                <Download className="w-5 h-5 text-indigo-400" />
                <span>Download Resume (CV)</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Photo Display with Orbital Aura */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 sm:w-84 md:w-96 aspect-square"
            >
              {/* Outer Pulsing Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 blur-3xl opacity-40 animate-pulse-glow" />
              
              {/* Rotating Dashed Orbital Ring */}
              <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-indigo-500/30 animate-spin-slow" />
              <div className="absolute inset-[-24px] rounded-full border border-purple-500/20 animate-reverse-spin" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/90 bg-gradient-to-b from-[#0e1738] to-[#050711] p-2 shadow-2xl">
                <img
                  src={personalInfo.photoWithoutBg || personalInfo.photoWithBg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-105 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Floating Experience Badge (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 sm:left-0 px-4 py-3 rounded-2xl bg-[#090e21]/95 border border-indigo-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-3 text-left"
              >
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-md">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">1.5+ Years</div>
                  <div className="text-[11px] text-slate-400 font-medium">Hands-on Experience</div>
                </div>
              </motion.div>

              {/* Floating Role Badge (Top Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:right-0 px-4 py-2.5 rounded-2xl bg-[#090e21]/95 border border-purple-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-2.5 text-left"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">MERN Specialist</div>
                  <div className="text-[10px] text-purple-300 font-mono">Full Stack Logic</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Impact Numbers / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0b1226]/80 border border-white/[0.08] backdrop-blur-md text-center hover:border-indigo-500/40 hover:bg-[#101a38]/80 transition-all duration-300 group shadow-lg"
            >
              <div className="font-heading text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
