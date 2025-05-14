"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type FullscreenContextType = {
  fullscreenId: string | null
  setFullscreenId: (id: string | null) => void
  toggleFullscreen: (id: string) => void
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(undefined)

export function FullscreenProvider({ children }: { children: ReactNode }) {
  const [fullscreenId, setFullscreenId] = useState<string | null>(null)

  const toggleFullscreen = (id: string) => {
    setFullscreenId(fullscreenId === id ? null : id)
  }

  return (
    <FullscreenContext.Provider value={{ fullscreenId, setFullscreenId, toggleFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  )
}

export function useFullscreen() {
  const context = useContext(FullscreenContext)
  if (context === undefined) {
    throw new Error("useFullscreen must be used within a FullscreenProvider")
  }
  return context
}
