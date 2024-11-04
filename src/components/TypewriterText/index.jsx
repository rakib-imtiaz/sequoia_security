import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function TypewriterText({ text, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  useEffect(() => {
    let timeoutId
    let intervalId

    const typeText = () => {
      let index = 0
      setIsTyping(true)

      intervalId = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(intervalId)
          setIsTyping(false)
        }
      }, 100) // Slower typing speed (100ms per character)
    }

    const eraseText = () => {
      let index = text.length
      setIsTyping(true)

      intervalId = setInterval(() => {
        if (index >= 0) {
          setDisplayText(text.slice(0, index))
          index--
        } else {
          clearInterval(intervalId)
          setIsTyping(false)
        }
      }, 50) // Faster erasing speed (50ms per character)
    }

    if (inView) {
      timeoutId = setTimeout(() => {
        typeText()
      }, delay)
    } else {
      timeoutId = setTimeout(() => {
        eraseText()
      }, delay)
    }

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, delay, inView])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span>{displayText}</span>
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute -right-4"
        >
          |
        </motion.span>
      )}
    </div>
  )
} 