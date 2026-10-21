import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Send,
  Sparkles,
  Copy,
  Check,
  AlertCircle,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon } from '../components/Icons'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // 'sending', 'sent', 'error', null
  const [errorMessage, setErrorMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setFormStatus('sending')
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_API_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing: Ensure VITE_SERVICE_ID, VITE_TEMPLATE_ID, and VITE_PUBLIC_API_KEY are configured.')
      setFormStatus('error')
      setErrorMessage('Email configuration missing. Please verify environment settings.')
      setTimeout(() => {
        setFormStatus(null)
        setErrorMessage('')
      }, 6000)
      return
    }

    const templateParams = {
      from_name: formData.name,
      user_name: formData.name,
      name: formData.name,
      from_email: formData.email,
      user_email: formData.email,
      email: formData.email,
      reply_to: formData.email,
      message: formData.message,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setFormStatus('sent')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setFormStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS transmission error:', error)
      setFormStatus('error')
      setErrorMessage(error?.text || 'Message transmission failed. Please try again or email directly.')
      setTimeout(() => {
        setFormStatus(null)
        setErrorMessage('')
      }, 6000)
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> COMMUNICATION HUB
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, seeking a skilled MERN developer, or want to discuss architecture? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  <span>Direct Communication</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  I typically respond to inquiries within 24 hours. Feel free to copy my direct email or connect through LinkedIn & GitHub.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3.5">
                
                {/* 1-Click Copy Email Widget */}
                <div className="p-4 rounded-2xl bg-[#060a1a] border border-white/[0.08] flex items-center justify-between gap-3 hover:border-pink-500/40 transition-colors group">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-11 h-11 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-slate-500 font-mono">PRIMARY EMAIL</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-pink-400 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-pink-600/30 transition-colors shrink-0 border border-slate-800"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Channel */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#060a1a] border border-white/[0.08] flex items-center justify-between gap-3 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-mono">SOURCE CODE & PROJECTS</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                        github.com/mrirakib04
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#060a1a] border border-white/[0.08] flex items-center justify-between gap-3 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-mono">PROFESSIONAL NETWORK</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors">
                        linkedin.com/in/webdev-rakib
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Status and Timezone badges */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {personalInfo.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  UTC+6 Timezone
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatch Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#090e23]/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Send Direct Inquiry</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below and I'll receive your note right away.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#060a1a] border border-white/[0.08] text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Email Address <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#060a1a] border border-white/[0.08] text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Project Details / Message <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project scope, goals, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#060a1a] border border-white/[0.08] text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-xs sm:text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {formStatus === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : formStatus === 'sent' ? (
                    <span className="flex items-center gap-2 text-emerald-200">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span>Message Dispatched Successfully!</span>
                    </span>
                  ) : formStatus === 'error' ? (
                    <span className="flex items-center gap-2 text-rose-200">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      <span className="truncate">{errorMessage || 'Dispatch Failed. Please Retry.'}</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
