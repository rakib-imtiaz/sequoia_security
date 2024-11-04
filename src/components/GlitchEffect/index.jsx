import { useEffect, useState } from 'react'

export function GlitchEffect({ children, intensity = 1 }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const startGlitch = () => {
      if (Math.random() < 0.1 * intensity) {
        setIsGlitching(true)
        
        setTimeout(() => {
          setIsGlitching(false)
        }, 50 + Math.random() * 100)
      }
    }

    const glitchInterval = setInterval(startGlitch, 3000)
    return () => clearInterval(glitchInterval)
  }, [intensity])

  return (
    <div className="relative">
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle section glitch effect */}
      {isGlitching && (
        <>
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              left: '2px',
              opacity: 0.05,
              backgroundColor: '#00ff00',
              mixBlendMode: 'screen'
            }}
          />
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              left: '-2px',
              opacity: 0.05,
              backgroundColor: '#ff0000',
              mixBlendMode: 'screen'
            }}
          />
        </>
      )}
    </div>
  )
} 