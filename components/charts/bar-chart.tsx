"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BarChart({ className, ...props }: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = 40

    // Sample data
    const data = [35, 55, 40, 60, 50, 70, 65, 75, 70, 80, 75, 90]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Calculate scales
    const maxValue = Math.max(...data) * 1.1
    const barWidth = ((width - padding * 2) / data.length) * 0.7
    const barSpacing = (width - padding * 2) / data.length
    const yScale = (height - padding * 2) / maxValue

    // Draw grid lines
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = height - padding - (i * (height - padding * 2)) / 5
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Draw axes labels
    ctx.fillStyle = "#9ca3af"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    // X-axis labels
    labels.forEach((label, i) => {
      const x = padding + i * barSpacing + barWidth / 2
      ctx.fillText(label, x, height - padding / 2)
    })

    // Y-axis labels
    for (let i = 0; i <= 5; i++) {
      const value = Math.round((maxValue * i) / 5)
      const y = height - padding - (i * (height - padding * 2)) / 5
      ctx.textAlign = "right"
      ctx.fillText(value.toString(), padding - 10, y + 3)
    }

    // Draw bars
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * barSpacing
      const barHeight = data[i] * yScale
      const y = height - padding - barHeight

      // Create gradient for each bar
      const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
      gradient.addColorStop(0, "#3b82f6")
      gradient.addColorStop(1, "#93c5fd")

      ctx.fillStyle = gradient

      // Draw rounded rectangle
      const radius = 4
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + barWidth - radius, y)
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth, y + radius)
      ctx.lineTo(x + barWidth, height - padding)
      ctx.lineTo(x, height - padding)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
      ctx.fill()
    }
  }, [])

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
