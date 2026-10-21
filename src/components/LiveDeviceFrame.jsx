import { useState, useRef, useEffect } from 'react'
import {
  Monitor,
  Smartphone,
  RotateCw,
  Globe,
} from 'lucide-react'

export default function LiveDeviceFrame({ project }) {
  const [deviceMode, setDeviceMode] = useState('desktop') // 'desktop' | 'mobile'
  const [loading, setLoading] = useState(true)
  const [reloadKey, setReloadKey] = useState(0)
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 540, height: 320 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  const handleReload = (e) => {
    e.stopPropagation()
    setLoading(true)
    setReloadKey((prev) => prev + 1)
  }

  // Native resolutions
  const desktopWidth = 1280
  const desktopHeight = 800
  const mobileWidth = 375
  const mobileHeight = 667

  const isDesktop = deviceMode === 'desktop'

  // Dynamic scale calculation to guarantee zero clipping
  const desktopScale = dimensions.width > 0 ? dimensions.width / desktopWidth : 0.42
  
  // Mobile scale fits both width and height with padding
  const mobileScale = dimensions.height > 0 && dimensions.width > 0
    ? Math.min((dimensions.width - 24) / mobileWidth, (dimensions.height - 20) / mobileHeight)
    : 0.38

  return (
    <div className="relative w-full h-full flex flex-col bg-[#04060e] overflow-hidden select-none">
      
      {/* Top Device Header Bar */}
      <div className="shrink-0 flex items-center justify-between px-3 sm:px-4 py-2 bg-[#080d20]/95 backdrop-blur-md border-b border-white/[0.08] z-20">
        
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Live URL Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-black/60 border border-white/[0.06] text-[10px] sm:text-[11px] text-slate-300 font-mono truncate max-w-[150px] sm:max-w-[220px]">
          <Globe className="w-3 h-3 text-indigo-400 shrink-0" />
          <span className="truncate">{project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
        </div>

        {/* Device Switcher (Desktop 💻 vs Mobile 📱) & Reload */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="flex items-center p-0.5 rounded-md bg-slate-900 border border-white/[0.08]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setDeviceMode('desktop')
              }}
              className={`p-1 rounded text-xs transition-colors flex items-center gap-1 ${
                isDesktop
                  ? 'bg-indigo-600 text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View (1280px Native Resolution)"
            >
              <Monitor className="w-3 h-3" />
              <span className="hidden sm:inline text-[10px]">Desktop</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setDeviceMode('mobile')
              }}
              className={`p-1 rounded text-xs transition-colors flex items-center gap-1 ${
                !isDesktop
                  ? 'bg-purple-600 text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View (375px Fitted Device)"
            >
              <Smartphone className="w-3 h-3" />
              <span className="hidden sm:inline text-[10px]">Mobile</span>
            </button>
          </div>

          <button
            onClick={handleReload}
            className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-transparent hover:border-slate-700"
            title="Reload live preview"
          >
            <RotateCw className={`w-3 h-3 ${loading ? 'animate-spin text-indigo-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Frame Body with Scaled Iframe */}
      <div
        ref={containerRef}
        className="relative flex-1 w-full h-full overflow-hidden bg-slate-950 flex items-center justify-center p-1"
      >
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070b1c] space-y-2 pointer-events-none">
            <div className="w-7 h-7 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin shadow-lg" />
            <span className="text-[11px] text-slate-300 font-mono">
              Loading {isDesktop ? 'Desktop (1280px)' : 'Mobile (375px)'} View...
            </span>
          </div>
        )}

        {/* Scaled Desktop Iframe */}
        {isDesktop ? (
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              width: `${desktopWidth}px`,
              height: `${desktopHeight}px`,
              transform: `scale(${desktopScale})`,
              transformOrigin: '0 0',
            }}
          >
            <iframe
              key={`desktop-${reloadKey}`}
              src={project.liveUrl}
              title={`${project.title} desktop preview`}
              className="w-full h-full border-0 bg-white shadow-2xl"
              onLoad={() => setLoading(false)}
              loading="eager"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        ) : (
          /* Scaled Mobile Smartphone Frame - Perfectly Scaled to Fit Height with Zero Clipping */
          <div
            className="flex items-center justify-center"
            style={{
              transform: `scale(${mobileScale})`,
              transformOrigin: 'center center',
            }}
          >
            <div
              className="relative rounded-[36px] border-[5px] border-slate-700/90 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
              style={{
                width: `${mobileWidth}px`,
                height: `${mobileHeight}px`,
              }}
            >
              {/* Phone Top Notch Bar */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 z-20 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-3 rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-950/80 mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                </div>
              </div>

              {/* Phone Screen Iframe */}
              <iframe
                key={`mobile-${reloadKey}`}
                src={project.liveUrl}
                title={`${project.title} mobile preview`}
                className="w-full h-full border-0 bg-white pt-6"
                onLoad={() => setLoading(false)}
                loading="eager"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
