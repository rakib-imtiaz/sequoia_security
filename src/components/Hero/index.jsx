import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import ParticlesBg from 'particles-bg'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()
  
  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  // Glitch effect for text
  const glitchVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  useEffect(() => {
    // GSAP Animation Timeline
    const tl = gsap.timeline()
    
    // Drone-like aerial view animation
    tl.fromTo('.hero-overlay', 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    )
    
    // Animate geometric shapes
    tl.fromTo('.geometric-shape',
      { scale: 0, rotation: -45 },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "back.out(1.7)"
      },
      "-=1"
    )
    
    // Text reveal animation
    tl.fromTo('.hero-text',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      "-=0.5"
    )
  }, [])

  return (
    <motion.section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* Particle Effects Background */}
      <ParticlesBg
        type="cobweb"
        bg={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          background: "transparent"
        }}
        color="#00A19B"
        num={100}
      />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-50"
        >
          <source src="/videos/security-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="geometric-shape absolute"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              border: '2px solid rgba(0, 161, 155, 0.2)',
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative container mx-auto px-4 h-full flex items-center"
        style={{ y }}
      >
        <div className="max-w-3xl">
          {/* Glitch Text Effect */}
          <motion.h1
            className="hero-text text-6xl font-bold text-white mb-6 glitch-text"
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
            data-text="Making the World Safer"
          >
            Making the World Safer
          </motion.h1>

          <motion.p
            className="hero-text text-xl text-gray-300 mb-8"
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Professional Security Solutions for a Secure Tomorrow
          </motion.p>

          <motion.div
            className="hero-text"
            variants={glitchVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <button className="bg-[#00A19B] hover:bg-[#00A19B]/90 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero