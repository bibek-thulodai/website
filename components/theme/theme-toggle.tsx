"use client"
import { Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // Since we're forcing light mode, this component is now just for display
  // You could also choose to not render this component at all in your Header
  return (
    <Button variant="outline" size="icon" className="rounded-full" disabled>
      <Sun className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Light mode enabled</span>
    </Button>
  )
}
