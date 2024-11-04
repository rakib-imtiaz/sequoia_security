import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-gray-300" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
} 