import { motion } from 'framer-motion'

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle cyber grid and dot matrix background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-dot-matrix opacity-20" />

      {/* Top Left Electric Indigo & Cyan Orb */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.22, 0.38, 0.22],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[12%] -left-[10%] w-[550px] md:w-[750px] h-[550px] md:h-[750px] bg-gradient-to-br from-indigo-600/30 to-cyan-500/20 rounded-full blur-[140px]"
      />

      {/* Center Right Cyber Purple & Pink Orb */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.18, 0.35, 0.18],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[30%] -right-[12%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-purple-600/25 via-pink-600/20 to-indigo-600/20 rounded-full blur-[150px]"
      />

      {/* Bottom Center Violet Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[10%] left-[25%] w-[600px] h-[600px] bg-gradient-to-t from-indigo-700/25 to-pink-700/20 rounded-full blur-[160px]"
      />

      {/* Subtle vignettes at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050711]/40 to-[#050711] pointer-events-none" />
    </div>
  )
}
