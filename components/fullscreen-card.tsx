"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Maximize2, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFullscreen } from "./fullscreen-provider"

interface FullscreenCardProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  headerClassName?: string
}

export function FullscreenCard({ id, title, children, className, headerClassName }: FullscreenCardProps) {
  const { fullscreenId, toggleFullscreen } = useFullscreen()
  const isFullscreen = fullscreenId === id

  return (
    <Card
      className={cn(
        "transition-all duration-300 ease-in-out overflow-hidden",
        isFullscreen
          ? "fixed inset-0 z-50 m-4 rounded-xl shadow-2xl border-2 border-blue-200 dark:border-blue-800"
          : "",
        className,
      )}
    >
      <CardHeader className={cn("flex flex-row items-center justify-between", headerClassName)}>
        <CardTitle>{title}</CardTitle>
        <button
          onClick={() => toggleFullscreen(id)}
          className="rounded-full p-1.5 hover:bg-muted transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Maximize2 className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </CardHeader>
      <CardContent className={cn(isFullscreen ? "overflow-auto max-h-[calc(100vh-8rem)]" : "")}>{children}</CardContent>
    </Card>
  )
}
