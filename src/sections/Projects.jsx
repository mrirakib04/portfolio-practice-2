import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Sparkles,
  Info,
  Layers,
  ArrowRight,
  SlidersHorizontal,
  Key,
  Copy,
  Check,
  CheckCircle2,
  Globe,
  Terminal,
} from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { projectsData } from '../data/portfolioData'
import ProjectModal from '../components/ProjectModal'
import LiveDeviceFrame from '../components/LiveDeviceFrame'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  // Store view mode per project: 'landing' or 'preview'
  const [projectViews, setProjectViews] = useState({})
  const [copiedKey, setCopiedKey] = useState(null)

  const setViewMode = (id, mode, e) => {
    e?.stopPropagation()
    setProjectViews((prev) => ({
      ...prev,
      [id]: mode,
    }))
  }

  const handleCopyCredentials = (text, keyId, e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedKey(keyId)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> PRODUCTION WORK
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured Full-Stack{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world MERN architectures with role-based dashboards, payment gateways, live databases, and production deployments.
          </p>
        </div>

        {/* Projects Cards Stack */}
        <div className="space-y-8 sm:space-y-10">
          {projectsData.map((project, index) => {
            const currentView = projectViews[project.id] || 'landing'
            const isLivePreview = currentView === 'preview'

            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="p-6 sm:p-9 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:border-indigo-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Ambient glow behind each card */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Stack Index Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                      FEATURED ARCHITECTURE
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-900/90 border border-white/[0.08] text-indigo-300 font-mono font-bold text-xs">
                    0{index + 1} / 0{projectsData.length}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Left Column: Live Device Simulator / Browser Mockup Frame */}
                  <div className="lg:col-span-6 space-y-3">
                    
                    {/* Device Window Box */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#050711] aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col group/frame">
                      
                      {isLivePreview ? (
                        <LiveDeviceFrame project={project} />
                      ) : (
                        <div className="relative w-full h-full flex flex-col">
                          {/* Browser Window Header */}
                          <div className="shrink-0 flex items-center justify-between px-3.5 py-2.5 bg-[#080d20]/95 backdrop-blur-md border-b border-white/[0.08] z-20">
                            {/* Window controls */}
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>

                            {/* URL Bar */}
                            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-black/60 border border-white/[0.06] text-[10px] sm:text-[11px] text-slate-300 font-mono truncate max-w-[180px] sm:max-w-[240px]">
                              <Globe className="w-3 h-3 text-indigo-400 shrink-0" />
                              <span className="truncate">{project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
                            </div>

                            <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                              LANDING
                            </span>
                          </div>

                          {/* Landing Image */}
                          <div
                            onClick={() => setSelectedProject(project)}
                            className="relative flex-1 w-full h-full cursor-pointer group/img overflow-hidden"
                          >
                            <img
                              src={project.image}
                              alt={`${project.title} landing`}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-102"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/90 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-3 right-3 flex items-center justify-end pointer-events-none">
                              <span className="text-xs font-semibold text-indigo-300 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1 group-hover/img:underline">
                                Inspect Specs <Info className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* View Switch Control Strip */}
                    <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                      <span className="flex items-center gap-1.5 font-medium">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Interactive Mode:</span>
                      </span>
                      
                      <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/90 border border-white/[0.08]">
                        <button
                          onClick={(e) => setViewMode(project.id, 'landing', e)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            currentView === 'landing'
                              ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Landing
                        </button>
                        
                        <button
                          onClick={(e) => setViewMode(project.id, 'preview', e)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                            currentView === 'preview'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Info & Actions */}
                  <div className="lg:col-span-6 space-y-5">
                    
                    {/* Header Badges */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shadow-sm">
                          {project.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          Full Stack
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-purple-400">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Quick Demo Credentials (If provided) */}
                    {project.credentials && project.credentials.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-[#060a1a] border border-indigo-500/20 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-bold text-indigo-300">
                          <span className="flex items-center gap-1.5">
                            <Key className="w-3.5 h-3.5 text-indigo-400" /> Demo Credentials:
                          </span>
                          <span className="text-slate-400 text-[10px] font-mono">1-Click Copy</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {project.credentials.slice(0, 3).map((cred, cIdx) => {
                            const keyId = `${project.id}-${cIdx}`
                            return (
                              <button
                                key={cIdx}
                                onClick={(e) =>
                                  handleCopyCredentials(`${cred.email} | ${cred.pass}`, keyId, e)
                                }
                                className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 text-left transition-colors flex items-center justify-between group/cred"
                                title="Click to copy email & password"
                              >
                                <div className="overflow-hidden">
                                  <div className="text-[10px] font-bold text-indigo-400">{cred.role}</div>
                                  <div className="text-[10px] text-slate-400 font-mono truncate">{cred.email}</div>
                                </div>
                                {copiedKey === keyId ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                                ) : (
                                  <Copy className="w-3 h-3 text-slate-500 group-hover/cred:text-slate-300 shrink-0 ml-1" />
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:scale-105 active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>

                      {project.clientRepo && (
                        <a
                          href={project.clientRepo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-slate-500 transition-all hover:scale-105"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Client</span>
                        </a>
                      )}

                      {project.serverRepo && (
                        <a
                          href={project.serverRepo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-slate-500 transition-all hover:scale-105"
                        >
                          <Terminal className="w-3.5 h-3.5 text-purple-400" />
                          <span>Server</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 font-semibold text-xs sm:text-sm border border-indigo-500/30 transition-all ml-auto hover:scale-105 cursor-pointer"
                      >
                        <Info className="w-4 h-4" />
                        <span>Details</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
