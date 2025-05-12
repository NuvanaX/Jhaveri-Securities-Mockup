"use client"

import { useState, useEffect } from "react"

interface GreedFearIndexProps {
  value: number
}

export function GreedFearIndex({ value }: GreedFearIndexProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue((prev) => {
        if (prev < value) {
          return Math.min(prev + 1, value)
        }
        return prev
      })
    }, 20)

    return () => clearInterval(interval)
  }, [value])

  const getColor = (val: number) => {
    if (val < 25) return "bg-red-500"
    if (val < 45) return "bg-orange-500"
    if (val < 55) return "bg-yellow-500"
    if (val < 75) return "bg-lime-500"
    return "bg-green-500"
  }

  const getLabel = (val: number) => {
    if (val < 25) return "Extreme Fear"
    if (val < 45) return "Fear"
    if (val < 55) return "Neutral"
    if (val < 75) return "Greed"
    return "Extreme Greed"
  }

  return (
    <div className="space-y-4">
      <div className="h-6 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor(animatedValue)} transition-all duration-300`}
          style={{ width: `${animatedValue}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Extreme Fear</span>
        <span>Fear</span>
        <span>Neutral</span>
        <span>Greed</span>
        <span>Extreme Greed</span>
      </div>

      <div className="text-center">
        <span className="text-2xl font-bold">{animatedValue}</span>
        <p className="text-sm font-medium">{getLabel(animatedValue)}</p>
      </div>
    </div>
  )
}
