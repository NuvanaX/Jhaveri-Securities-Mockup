"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const increment = Math.min(progress / duration, 1) * value

      countRef.current = Math.floor(increment)
      setCount(countRef.current)

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`counter-${value}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
    }
  }, [value, duration])

  return (
    <div id={`counter-${value}`} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
