"use client"

import type React from "react"
import { createContext, useContext } from "react"

type ThemeContextType = {
  primaryColor: string
  secondaryColor: string
  accentColor: string
}

// Define consistent colors
const themeColors = {
  primaryColor: "#017489",
  secondaryColor: "#006955",
  accentColor: "#013A87",
}

const ThemeContext = createContext<ThemeContextType>(themeColors)

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  // Use consistent colors
  const value = {
    ...themeColors,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
