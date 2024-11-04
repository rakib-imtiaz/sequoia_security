import { useEffect, useRef } from 'react'

export function Particles({ count = 80, color = "#00A19B" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    // Canvas setup
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create particles with more controlled parameters
    let particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5, // Smaller size range
      speedX: (Math.random() - 0.5) * 0.5, // Reduced speed
      speedY: (Math.random() - 0.5) * 0.5, // Reduced speed
      glitchOffset: 0,
      glitchIntensity: 0,
      baseX: 0,
      baseY: 0
    }))

    // Store initial positions
    particles.forEach(particle => {
      particle.baseX = particle.x
      particle.baseY = particle.y
    })

    // Controlled glitch effect
    const updateGlitch = () => {
      if (Math.random() < 0.03) { // Reduced frequency
        const glitchDuration = 100 + Math.random() * 200
        const affectedParticles = particles.filter(() => Math.random() < 0.3)

        affectedParticles.forEach(particle => {
          particle.glitchIntensity = Math.random() * 5 // Reduced intensity
          particle.glitchOffset = (Math.random() - 0.5) * 20 // Reduced offset
        })

        setTimeout(() => {
          affectedParticles.forEach(particle => {
            particle.glitchIntensity = 0
            particle.glitchOffset = 0
          })
        }, glitchDuration)
      }
    }

    // Animation loop
    const animate = () => {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update glitch effects
      updateGlitch()

      // Update and draw particles
      particles.forEach(particle => {
        // Smooth movement with sine wave
        particle.x += Math.sin(time * 0.02 + particle.baseX) * 0.1 + particle.speedX
        particle.y += Math.cos(time * 0.02 + particle.baseY) * 0.1 + particle.speedY

        // Add glitch offset if active
        if (particle.glitchIntensity > 0) {
          particle.x += particle.glitchOffset
          particle.y += particle.glitchOffset
        }

        // Gentle edge wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with optional glow
        ctx.beginPath()
        if (particle.glitchIntensity > 0) {
          ctx.shadowColor = color
          ctx.shadowBlur = particle.glitchIntensity
        } else {
          ctx.shadowBlur = 0
        }
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Draw connections
        particles.forEach(other => {
          const dx = other.x - particle.x
          const dy = other.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance && distance > 0) {
            // Smooth opacity transition
            const opacity = (1 - distance / maxDistance) * 0.3 // Reduced opacity
            ctx.beginPath()
            ctx.strokeStyle = `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`
            ctx.lineWidth = 0.5 // Thinner lines

            if (particle.glitchIntensity > 0) {
              const offset = (Math.random() - 0.5) * particle.glitchIntensity * 0.5
              ctx.moveTo(particle.x + offset, particle.y + offset)
              ctx.lineTo(other.x + offset, other.y + offset)
            } else {
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
            }
            
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [count, color])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent',
        opacity: 0.8 // Slightly reduced overall opacity
      }}
    />
  )
}
