"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LineChart({ className, ...props }: LineChartProps) {
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
    const data = [25, 40, 30, 50, 45, 60, 70, 65, 80, 75, 85, 90]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Calculate scales
    const maxValue = Math.max(...data) * 1.1
    const xStep = (width - padding * 2) / (data.length - 1)
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
      const x = padding + i * xStep
      ctx.fillText(label, x, height - padding / 2)
    })

    // Y-axis labels
    for (let i = 0; i <= 5; i++) {
      const value = Math.round((maxValue * i) / 5)
      const y = height - padding - (i * (height - padding * 2)) / 5
      ctx.textAlign = "right"
      ctx.fillText(value.toString(), padding - 10, y + 3)
    }

    // Draw line
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - data[0] * yScale)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * xStep
      const y = height - padding - data[i] * yScale
      ctx.lineTo(x, y)
    }

    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw gradient area under the line
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)")
    gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

    ctx.beginPath()
    ctx.moveTo(padding, height - padding - data[0] * yScale)

    for (let i = 1; i < data.length; i++) {
      const x = padding + i * xStep
      const y = height - padding - data[i] * yScale
      ctx.lineTo(x, y)
    }

    ctx.lineTo(padding + (data.length - 1) * xStep, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()

    ctx.fillStyle = gradient
    ctx.fill()

    // Draw points
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * xStep
      const y = height - padding - data[i] * yScale

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()
    }
  }, [])

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
