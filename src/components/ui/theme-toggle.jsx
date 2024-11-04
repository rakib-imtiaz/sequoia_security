"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm
                 hover:bg-white/10 transition-all duration-300 shadow-lg"
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: theme === 'dark' ? 360 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 0 : 1,
          opacity: theme === 'dark' ? 0 : 1,
          rotate: theme === 'dark' ? -180 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5 text-white" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 180
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5 text-white" />
      </motion.div>

      {/* Invisible element to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <Sun className="h-5 w-5" />
      </div>

      {/* Optional: Add a subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2A8B8B]/20 to-white/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.button>
  )
} 