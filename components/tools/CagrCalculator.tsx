'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function CagrCalculator() {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [finalValue, setFinalValue] = useState('')
  const [timePeriod, setTimePeriod] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateCAGR = () => {
    const initial = parseFloat(initialInvestment)
    const final = parseFloat(finalValue)
    const time = parseFloat(timePeriod)

    if (initial && final && time) {
      const cagr = (Math.pow(final / initial, 1 / time) - 1) * 100
      setResult(parseFloat(cagr.toFixed(2)))
    }
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="initial">Initial Investment (₹)</Label>
          <Input
            id="initial"
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            placeholder="e.g. 100000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="final">Final Value (₹)</Label>
          <Input
            id="final"
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            placeholder="e.g. 150000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Time Period (Years)</Label>
          <Input
            id="time"
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="e.g. 5"
          />
        </div>

        <Button onClick={calculateCAGR} className="w-full">Calculate CAGR</Button>

        {result !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-bold text-primary">CAGR: {result}%</p>
            <p className="text-sm text-muted-foreground mt-1">
              Your investment has grown at a compound annual rate of {result}%
            </p>
          </div>
        )}
      </div>
    </Card>
  )
} 