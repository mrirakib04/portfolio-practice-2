import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  Send,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPos = window.scrollY + 220

      for (const sec of sections) {
        const el = document.getElementById(sec)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050711]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 lg:gap-3 text-white focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-300 shrink-0">
            <span className="font-mono font-extrabold text-base lg:text-lg text-white tracking-tight">
              R
            </span>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#050711] shadow-[0_0_8px_#34d399]" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-base lg:text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {personalInfo.logoText}
            </div>
            <div className="text-[9px] lg:text-[10px] text-slate-400 font-mono tracking-wider uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Full Stack Dev
            </div>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 px-1.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-[#0d142c]/70 border border-white/[0.08] backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase()
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-2.5 lg:px-4 py-1 lg:py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Right CTA Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hidden min-[1200px]:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500/40 transition-all text-xs font-semibold"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden min-[1200px]:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-sky-500/40 transition-all text-xs font-semibold"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href="#contact"
            className="relative group overflow-hidden flex items-center gap-1 lg:gap-1.5 px-2.5 lg:px-4 py-1.5 lg:py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-[11px] lg:text-xs font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
            <span>Hire Me</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050711]/98 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    activeSection === link.name.toLowerCase()
                      ? 'bg-indigo-600/25 text-indigo-300 border border-indigo-500/40 shadow-md'
                      : 'text-slate-300 hover:bg-slate-900/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-sm font-semibold"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-sm font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white text-sm font-bold shadow-lg"
              >
                <Sparkles className="w-4 h-4" /> Hire Me / Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
