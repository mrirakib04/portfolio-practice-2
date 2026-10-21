import { motion } from 'framer-motion'
import {
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Building,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { educationData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" /> ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic milestones and business discipline studies shaping my analytical mindset and structured problem-solving approach.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => {
            const isHsc = edu.id === 'hsc-sataish'

            return (
              <div
                key={edu.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative p-7 sm:p-9 rounded-3xl bg-[#090e23]/85 border border-white/[0.08] hover:border-indigo-500/50 backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-opacity ${
                    isHsc
                      ? 'bg-gradient-to-br from-indigo-600/15 via-purple-600/10 to-transparent group-hover:opacity-100 opacity-60'
                      : 'bg-gradient-to-br from-emerald-600/15 via-teal-600/10 to-transparent group-hover:opacity-100 opacity-60'
                  }`}
                />

                <div className="space-y-6 relative z-10">
                  {/* Top Bar: Icon + Status Pill */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-inner ${
                        isHsc
                          ? 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400'
                          : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                      }`}
                    >
                      {isHsc ? (
                        <GraduationCap className="w-7 h-7" />
                      ) : (
                        <Award className="w-7 h-7" />
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-3 py-1 text-xs font-mono font-bold rounded-full border shadow-sm ${
                          isHsc
                            ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                            : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        }`}
                      >
                        {edu.group}
                      </span>

                      {edu.result && (
                        <span className="px-3 py-1 text-xs font-mono font-extrabold rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                          {edu.result}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{edu.badge}</span>
                      {edu.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          1st Year
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-200">
                      <Building className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Key Academic Focus:
                    </div>
                    <div className="space-y-1.5">
                      {edu.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isHsc ? 'text-indigo-400' : 'text-emerald-400'
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="font-mono text-indigo-300 font-semibold">
                    {edu.status}
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
