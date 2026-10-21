import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
  Cpu,
  Layers,
  Code2,
} from 'lucide-react'
import { skillsData } from '../data/portfolioData'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAll, setShowAll] = useState(false)

  const categories = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'Database',
    'State Management',
    'E-Commerce',
    'Design & Tools',
  ]

  // Filter skills based on Category + Search Query
  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        activeCategory === 'All' ||
        skill.category.toLowerCase().includes(activeCategory.toLowerCase())

      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // For default 'All' without search, limit to initial 10 items unless showAll is true
  const isDefaultView = activeCategory === 'All' && searchQuery.trim() === ''
  const displayedSkills = isDefaultView && !showAll ? filteredSkills.slice(0, 10) : filteredSkills
  const hasMore = isDefaultView && filteredSkills.length > 10

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> TECH ARSENAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Technical Weaponry
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested stack spanning full-stack frameworks, database design, state management, and modern styling libraries.
          </p>
        </div>

        {/* Filter Bar & Search Input Container */}
        <div className="space-y-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          
          {/* Instant Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React, MongoDB, Next, Node)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#090e23]/90 border border-white/[0.08] text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded-md bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setShowAll(false)
                  }}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] scale-105'
                      : 'bg-[#090e23]/80 hover:bg-[#111a38] text-slate-400 hover:text-slate-200 border border-white/[0.08]'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Holographic Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.88, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 15 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.02 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-5 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] hover:border-indigo-500/50 backdrop-blur-xl shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Glowing Color Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Subtle Ambient Radial Glow on Card Hover */}
                <div
                  className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex flex-col items-center text-center space-y-3 pt-2 relative z-10">
                  {/* Brand Monogram Box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-extrabold text-lg border transition-all duration-300 group-hover:scale-110 shadow-inner"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      borderColor: `${skill.color}40`,
                      color: skill.color,
                    }}
                  >
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>

                  {/* Skill Info */}
                  <div className="space-y-1 w-full">
                    <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-indigo-300 transition-colors truncate">
                      {skill.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 pt-0.5">
                      <span className="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-800">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Level Badge */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 relative z-10">
                  <span className="text-slate-500 font-mono">Level:</span>
                  <span className="font-semibold text-slate-300 group-hover:text-indigo-300">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {displayedSkills.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-base">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 text-indigo-300 hover:text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* See More / Show Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#090e23] hover:bg-[#111a38] text-indigo-300 hover:text-white font-bold text-sm border border-indigo-500/30 hover:border-indigo-500/60 shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all hover:scale-105 active:scale-95"
            >
              <span>{showAll ? 'Show Compact View' : `View Full Arsenal (${filteredSkills.length - 10} more)`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}
