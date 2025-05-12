"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CagrCalculatorProps {
  preview?: boolean
}

export function CagrCalculator({ preview = false }: CagrCalculatorProps) {
  const [initialInvestment, setInitialInvestment] = useState(100000)
  const [finalValue, setFinalValue] = useState(180000)
  const [years, setYears] = useState(5)
  const [cagr, setCagr] = useState<number | null>(null)

  const calculateCagr = () => {
    if (initialInvestment <= 0 || finalValue <= 0 || years <= 0) {
      setCagr(null)
      return
    }

    const result = (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100
    setCagr(Number.parseFloat(result.toFixed(2)))
  }

  if (preview) {
    return (
      <div className="text-center">
        <div className="text-3xl font-bold mb-2">12.5%</div>
        <p className="text-sm text-muted-foreground">Sample CAGR for ₹1L to ₹1.8L over 5 years</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="initial">Initial Investment (₹)</Label>
        <Input
          id="initial"
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="final">Final Value (₹)</Label>
        <Input id="final" type="number" value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="years">Time Period (Years)</Label>
        <Input id="years" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
      </div>

      <Button onClick={calculateCagr} className="w-full">
        Calculate CAGR
      </Button>

      {cagr !== null && (
        <div className="text-center p-4 bg-muted rounded-lg">
          <div className="text-3xl font-bold mb-2">{cagr}%</div>
          <p className="text-sm text-muted-foreground">Compound Annual Growth Rate</p>
        </div>
      )}
    </div>
  )
}
