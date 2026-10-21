import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  Key,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Globe,
  Terminal,
  Shield,
  LayoutGrid,
} from 'lucide-react'
import { GithubIcon } from './Icons'
import LiveDeviceFrame from './LiveDeviceFrame'

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedRole, setCopiedRole] = useState(null)
  const [activeImageTab, setActiveImageTab] = useState('landing') // 'landing' | 'preview' | 'live'
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!mounted || !isOpen || !project) return null

  const handleCopy = (text, role) => {
    navigator.clipboard.writeText(text)
    setCopiedRole(role)
    setTimeout(() => setCopiedRole(null), 2000)
  }

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl transition-all"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#070b1c] border border-indigo-500/30 rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_40px_rgba(99,102,241,0.2)] z-10 text-slate-100 flex flex-col overflow-hidden my-auto"
        >
          {/* Fixed Sticky Header */}
          <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#050817]/95 backdrop-blur-xl border-b border-white/[0.08] z-20">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
              {/* Traffic light window dots */}
              <div className="hidden sm:flex items-center gap-1.5 mr-1">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-rose-500/90 hover:bg-rose-500 transition-colors flex items-center justify-center group"
                  aria-label="Close"
                >
                  <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </button>
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              <span className="shrink-0 px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {project.badge}
              </span>
              
              <h3 className="text-sm sm:text-lg font-bold tracking-tight text-white truncate">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="shrink-0 p-2 rounded-xl bg-slate-800/80 hover:bg-rose-600/80 text-slate-300 hover:text-white transition-colors border border-slate-700/60 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 custom-scrollbar">
            
            {/* Interactive Image Preview with Switcher */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" /> Interactive Interface & Live Preview:
                </span>
                
                {/* Switcher Tabs */}
                <div className="flex items-center p-1 rounded-xl bg-slate-950/90 border border-white/[0.08] w-full sm:w-auto">
                  <button
                    onClick={() => setActiveImageTab('landing')}
                    className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      activeImageTab === 'landing'
                        ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Landing View
                  </button>
                  <button
                    onClick={() => setActiveImageTab('live')}
                    className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      activeImageTab === 'live'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Simulator</span>
                  </button>
                </div>
              </div>

              {/* View Frame: Live Device Frame or Landing Image */}
              {activeImageTab === 'live' ? (
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#04060e] aspect-[16/10] sm:aspect-[16/9] shadow-2xl flex flex-col">
                  <LiveDeviceFrame project={project} />
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#04060e] aspect-[16/10] sm:aspect-[16/9] shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050817]/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30 font-mono flex items-center gap-1.5 shadow-md">
                      <Globe className="w-3.5 h-3.5" />
                      Landing Showcase
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Links Bar */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:scale-105 active:scale-95 text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>

              {project.clientRepo && (
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-indigo-500/40 transition-all hover:scale-105 text-center"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Client Code Repository</span>
                </a>
              )}

              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-purple-500/40 transition-all hover:scale-105 text-center"
                >
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Server Backend Repository</span>
                </a>
              )}
            </div>

            {/* Project Overview */}
            <div className="space-y-2.5 p-5 sm:p-6 rounded-2xl bg-[#090e24]/80 border border-white/[0.08]">
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-400" /> Project Objective & Description
                </h4>
                <p className="text-xs text-purple-400 font-semibold">{project.subtitle}</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.description}
              </p>
            </div>

            {/* Demo Login Credentials (If Available) */}
            {project.credentials && project.credentials.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs sm:text-sm">
                    <Key className="w-4 h-4 text-indigo-400" /> Instant Demo Login Credentials
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">1-Click Copy</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {project.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#060a1a] border border-indigo-500/20 hover:border-indigo-500/50 transition-colors space-y-1.5 text-xs group"
                    >
                      <div className="flex items-center justify-between font-bold text-indigo-400">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-[11px]">
                          {cred.role}
                        </span>
                        <button
                          onClick={() => handleCopy(`${cred.email} | ${cred.pass}`, cred.role)}
                          className="px-2 py-1 rounded-md bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                          title="Copy email and password"
                        >
                          {copiedRole === cred.role ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="text-slate-300 truncate font-mono text-[11px]">
                        <span className="text-slate-500">Email: </span>
                        {cred.email}
                      </div>
                      <div className="text-slate-300 font-mono text-[11px]">
                        <span className="text-slate-500">Pass: </span>
                        {cred.pass}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Features & Technical Highlights */}
            <div className="space-y-3.5">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" /> Key Architectural Features
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#090e24]/60 border border-white/[0.06] hover:border-emerald-500/30 transition-colors text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Cloud */}
            <div className="space-y-3.5">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" /> Complete Technology Arsenal
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-[11px] sm:text-xs rounded-xl bg-[#090e24] text-indigo-300 border border-indigo-500/25 font-mono shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
