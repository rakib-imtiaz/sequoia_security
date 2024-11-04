import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"
  
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        // Add your variant styles here
        variant === "default" && "bg-[#00A19B] text-white hover:bg-[#00A19B]/90",
        variant === "outline" && "border border-[#00A19B] text-[#00A19B] hover:bg-[#00A19B]/10",
        // Add your size styles here
        size === "default" && "h-10 py-2 px-4",
        size === "sm" && "h-9 px-3",
        size === "lg" && "h-11 px-8",
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button } 