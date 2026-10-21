import { useState, useEffect } from 'react'

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only activate on devices with mouse pointer
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.07), transparent 80%)`,
      }}
    />
  )
}
