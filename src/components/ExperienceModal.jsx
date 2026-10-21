import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  ShoppingBag,
  Zap,
  Users,
  MessageSquare,
  Sparkles,
  Building2,
  Check,
  TrendingUp,
  Layers,
} from 'lucide-react'

export default function ExperienceModal({ experience, isOpen, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('all') // 'all', 'technical', 'interpersonal'

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

  if (!mounted || !isOpen || !experience) return null

  const isCurrentRole = experience.isCurrent

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
          className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#070b1c] border border-emerald-500/30 rounded-2xl sm:rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.15)] z-10 text-slate-100 flex flex-col overflow-hidden my-auto"
        >
          {/* Header */}
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

              <span
                className={`shrink-0 px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${
                  isCurrentRole
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                }`}
              >
                {experience.badge}
              </span>

              <h3 className="text-sm sm:text-lg font-bold tracking-tight text-white truncate">
                {experience.company}
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
            
            {/* Top Overview Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0a122c] via-[#080d20] to-[#040611] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-start sm:items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${
                      isCurrentRole
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                        : 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400'
                    }`}
                  >
                    {isCurrentRole ? (
                      <ShoppingBag className="w-7 h-7" />
                    ) : (
                      <Code2 className="w-7 h-7" />
                    )}
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                      {experience.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {experience.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:self-start">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {experience.period}
                  </div>
                  {isCurrentRole && (
                    <div className="px-3 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Position
                    </div>
                  )}
                </div>
              </div>

              {/* Bio / Summary */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-slate-300 text-xs sm:text-sm leading-relaxed">
                {experience.summary}
              </div>
            </div>

            {/* Metrics Strip */}
            {experience.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {experience.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#090e23]/90 border border-white/[0.08] text-center sm:text-left"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {m.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Filter Tabs for Deep Dive */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950/90 border border-white/[0.08] w-full sm:w-fit">
              <button
                onClick={() => setActiveTab('all')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Overview
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'technical'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ⚡ Technical & Liquid
              </button>
              <button
                onClick={() => setActiveTab('interpersonal')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === 'interpersonal'
                    ? 'bg-gradient-to-r from-emerald-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🤝 Client & Team Skills
              </button>
            </div>

            {/* Section 1: Technical Responsibilities */}
            {(activeTab === 'all' || activeTab === 'technical') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Technical Responsibilities & Core Engineering</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {experience.technicalResponsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technical Skills Badges */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    Core Technical Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technicalSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono rounded-xl bg-emerald-950/30 text-emerald-200 border border-emerald-500/25"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Interpersonal & Client Management */}
            {(activeTab === 'all' || activeTab === 'interpersonal') && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span>Client Management & Interpersonal Communication</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {experience.interpersonalResponsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-all flex items-start gap-3"
                    >
                      <MessageSquare className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interpersonal Skills Badges */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    Interpersonal & Client Handling Competencies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.interpersonalSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono rounded-xl bg-indigo-950/40 text-indigo-200 border border-indigo-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Fixed Footer */}
          <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#050817]/95 backdrop-blur-xl border-t border-white/[0.08] text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{experience.location}</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}
