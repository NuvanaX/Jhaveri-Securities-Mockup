"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "Jhaveri Securities has transformed my investment approach with their expertly curated PMS offerings.",
    author: "Senior Executive, Mumbai",
  },
  {
    quote:
      "Their GIFT City investment opportunities opened up a new dimension to my portfolio with significant tax advantages.",
    author: "Business Owner, Ahmedabad",
  },
  {
    quote:
      "The personalized service and attention to detail sets Jhaveri Securities apart from other wealth management firms.",
    author: "Retired Professional, Delhi",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <Card className="p-6 relative">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 20C10 15.5817 13.5817 12 18 12V16C15.7909 16 14 17.7909 14 20H18V32H6V20H10Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
            <path
              d="M26 20C26 15.5817 29.5817 12 34 12V16C31.7909 16 30 17.7909 30 20H34V32H22V20H26Z"
              fill="currentColor"
              fillOpacity="0.2"
            />
          </svg>
        </div>

        <p className="italic mb-4">"{testimonials[current].quote}"</p>

        <p className="font-medium text-sm">— {testimonials[current].author}</p>

        <div className="flex gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === current ? "bg-primary" : "bg-muted-foreground/30"}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 shadow-sm hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 shadow-sm hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </button>
    </Card>
  )
}
