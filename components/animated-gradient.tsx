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
    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      canvas.style.width = `${canvas.offsetWidth}px`
      canvas.style.height = `${canvas.offsetHeight}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const numParticles = Math.floor((canvas.width * canvas.height) / 20000)
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        })
      }
    }

    const drawParticle = (particle: typeof particles[0]) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 114, 188, ${particle.opacity})`
      ctx.fill()
    }

    const connectParticles = () => {
      const maxDistance = 100
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 114, 188, ${opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create base gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(0, 114, 188, 0.1)")
      gradient.addColorStop(1, "rgba(227, 30, 36, 0.05)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        drawParticle(particle)
      })

      // Connect particles
      connectParticles()

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
