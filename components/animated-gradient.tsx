"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientProps {
  className?: string
}

export function AnimatedGradient({ className = "" }: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const animate = () => {
      time += 0.005

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.4 * Math.sin(time)),
        0,
        canvas.width * (0.5 + 0.4 * Math.cos(time)),
        canvas.height,
      )

      // Add colors
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)")
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)")
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.2)")

      // Fill canvas
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
