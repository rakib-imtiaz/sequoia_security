import { useEffect, useState } from 'react'

export function GlitchText({ 
  text, 
  className = "", 
  color = "#00A19B",
  intensity = 1 
}) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchCharacters = '!<>-_\\/[]{}—=+*^?#________'
    let intervalId
    let timeoutId

    const startGlitch = () => {
      if (Math.random() < 0.1 * intensity) {
        setIsGlitching(true)
        
        // Text distortion
        intervalId = setInterval(() => {
          const distortedText = text
            .split('')
            .map(char => 
              Math.random() < 0.3 ? 
                glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] 
                : char
            )
            .join('')
          
          setGlitchText(distortedText)
        }, 50)

        // End glitch effect after a short duration
        timeoutId = setTimeout(() => {
          setIsGlitching(false)
          setGlitchText(text)
          clearInterval(intervalId)
        }, 150 + Math.random() * 200)
      }
    }

    const glitchLoop = setInterval(startGlitch, 2000)

    return () => {
      clearInterval(glitchLoop)
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [text, intensity])

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">
        {glitchText}
      </span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 z-[-1]"
            style={{
              transform: 'translate(-2px, 2px)',
              color: color,
              opacity: 0.7,
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
            }}
          >
            {glitchText}
          </span>
          <span
            className="absolute top-0 left-0 z-[-2]"
            style={{
              transform: 'translate(2px, -2px)',
              color: 'rgba(255, 0, 0, 0.5)',
              opacity: 0.7,
              clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)'
            }}
          >
            {glitchText}
          </span>
        </>
      )}
    </div>
  )
}
