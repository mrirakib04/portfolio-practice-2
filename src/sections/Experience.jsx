import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  ShoppingBag,
  Code2,
  Sparkles,
  ArrowRight,
  Info,
  Layers,
  Users,
  CheckCircle2,
} from 'lucide-react'
import { experiencesData } from '../data/portfolioData'
import ExperienceModal from '../components/ExperienceModal'

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> CAREER JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Commercial agency and engineering experience crafting high-impact Shopify storefronts, bespoke Liquid architecture, and modern full-stack web solutions.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Timeline Guide Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-indigo-500 to-slate-800 opacity-40 pointer-events-none" />

          <div className="space-y-8 sm:space-y-10">
            {experiencesData.map((exp, index) => {
              const isCurrentRole = exp.isCurrent

              return (
                <div
                  key={exp.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="relative md:pl-20 group"
                >
                  {/* Timeline Node Point (Desktop) - Centered precisely on the vertical line */}
                  <div
                    className={`hidden md:flex absolute left-8 top-10 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#050711] border-2 items-center justify-center z-20 transition-transform duration-300 group-hover:scale-125 ${
                      isCurrentRole
                        ? 'border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : 'border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    }`}
                  >
                    {isCurrentRole ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    )}
                  </div>

                  {/* Clean Minimalist Experience Card */}
                  <div
                    onClick={() => setSelectedExperience(exp)}
                    className={`p-6 sm:p-8 rounded-3xl bg-[#090e23]/85 border backdrop-blur-xl shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer ${
                      isCurrentRole
                        ? 'border-emerald-500/30 hover:border-emerald-500/60 shadow-[0_10px_35px_rgba(16,185,129,0.08)]'
                        : 'border-white/[0.08] hover:border-indigo-500/40'
                    }`}
                  >
                    {/* Background Glow */}
                    <div
                      className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
                        isCurrentRole
                          ? 'bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-indigo-500/10'
                          : 'bg-indigo-600/10'
                      }`}
                    />

                    {/* Top Row: Company Info & Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] relative z-10">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 shadow-inner ${
                            isCurrentRole
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                              : 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400'
                          }`}
                        >
                          {isCurrentRole ? (
                            <ShoppingBag className="w-6 h-6" />
                          ) : (
                            <Code2 className="w-6 h-6" />
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="font-heading text-lg sm:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                              {exp.company}
                            </h3>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                isCurrentRole
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                              }`}
                            >
                              {exp.employmentType}
                            </span>
                          </div>

                          <div className="text-xs sm:text-sm font-semibold text-indigo-300 pt-0.5 flex items-center gap-2">
                            <span>{exp.role}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Date & Status */}
                      <div className="flex flex-wrap items-center gap-2.5 sm:self-start">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{exp.period}</span>
                        </div>

                        {isCurrentRole && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>CURRENT</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Middle: Short Summary & Highlights */}
                    <div className="py-4 space-y-4 relative z-10">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {exp.shortSummary || exp.summary}
                      </p>

                      {/* Key Highlights Metrics Strip */}
                      {exp.metrics && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                          {exp.metrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="px-3.5 py-2.5 rounded-xl bg-[#060a1a]/90 border border-white/[0.06] flex items-center justify-between sm:flex-col sm:items-start"
                            >
                              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                                {m.label}
                              </span>
                              <span className="text-xs font-bold text-white truncate">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Top Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.technicalSkills.slice(0, 5).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${
                              isCurrentRole
                                ? 'bg-emerald-950/30 text-emerald-200 border-emerald-500/20'
                                : 'bg-slate-900/90 text-slate-300 border-slate-800'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.interpersonalSkills && exp.interpersonalSkills[0] && (
                          <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-950/40 text-indigo-300 border border-indigo-500/25">
                            {exp.interpersonalSkills[0]}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Footer: Location & "Read More" Trigger */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 text-xs relative z-10">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedExperience(exp)
                        }}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-md ${
                          isCurrentRole
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-emerald-500/20'
                            : 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30'
                        }`}
                      >
                        <span>View Details & Key Work</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Experience Deep-Dive Modal */}
      <ExperienceModal
        experience={selectedExperience}
        isOpen={Boolean(selectedExperience)}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  )
}
