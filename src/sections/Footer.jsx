import {
  ArrowUp,
  Mail,
  Heart,
  Sparkles,
  Code2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#04060e]/95 backdrop-blur-2xl pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-mono font-extrabold text-lg shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                R
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white block">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Full Stack Developer
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering high-performance, aesthetic web applications with modern architecture, responsive UI design, and scalable backend services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-400">
              <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About Story</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Tech Arsenal</a>
              <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Works</a>
              <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Hub</a>
              <a
                href={personalInfo.cvUrl}
                download="Md Rakibul Islam Rakib_Resume.pdf"
                className="hover:text-indigo-400 transition-colors font-semibold text-indigo-300"
              >
                Download CV ↗
              </a>
            </div>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Connect Across Web
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-slate-800 shadow-md transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 shadow-md transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500/40 hover:bg-slate-800 shadow-md transition-all hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] text-slate-500 font-mono pt-1">
              Available for remote & freelance roles
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">{personalInfo.name}</span>. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-1.5 text-slate-400">
            <span>Crafted with passion using</span>
            <span className="font-semibold text-indigo-300">React 19, Tailwind CSS & Motion</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all cursor-pointer shadow-sm group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
