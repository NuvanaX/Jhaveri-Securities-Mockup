'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeftRight } from 'lucide-react'

interface InvestmentOption {
  type: string
  amount: string
  duration: string
  expectedReturn: string
}

export function InvestmentComparison() {
  const [optionA, setOptionA] = useState<InvestmentOption>({
    type: '',
    amount: '',
    duration: '',
    expectedReturn: ''
  })

  const [optionB, setOptionB] = useState<InvestmentOption>({
    type: '',
    amount: '',
    duration: '',
    expectedReturn: ''
  })

  const [comparison, setComparison] = useState<{
    futureValueA: number | null
    futureValueB: number | null
    difference: number | null
  }>({
    futureValueA: null,
    futureValueB: null,
    difference: null
  })

  const calculateFutureValue = (amount: string, return_rate: string, duration: string) => {
    const principal = parseFloat(amount)
    const rate = parseFloat(return_rate) / 100
    const time = parseFloat(duration)

    if (principal && rate && time) {
      return principal * Math.pow(1 + rate, time)
    }
    return null
  }

  const compareInvestments = () => {
    const futureValueA = calculateFutureValue(optionA.amount, optionA.expectedReturn, optionA.duration)
    const futureValueB = calculateFutureValue(optionB.amount, optionB.expectedReturn, optionB.duration)

    if (futureValueA && futureValueB) {
      setComparison({
        futureValueA,
        futureValueB,
        difference: futureValueB - futureValueA
      })
    }
  }

  const investmentTypes = [
    'Mutual Funds',
    'PMS',
    'AIF Category I',
    'AIF Category II',
    'AIF Category III',
    'GIFT City Funds'
  ]

  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Option A */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold">Investment Option A</h3>
          <div className="space-y-2">
            <Label>Investment Type</Label>
            <Select value={optionA.type} onValueChange={(value) => setOptionA({ ...optionA, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select investment type" />
              </SelectTrigger>
              <SelectContent>
                {investmentTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Investment Amount (₹)</Label>
            <Input
              type="number"
              value={optionA.amount}
              onChange={(e) => setOptionA({ ...optionA, amount: e.target.value })}
              placeholder="e.g. 1000000"
            />
          </div>

          <div className="space-y-2">
            <Label>Duration (Years)</Label>
            <Input
              type="number"
              value={optionA.duration}
              onChange={(e) => setOptionA({ ...optionA, duration: e.target.value })}
              placeholder="e.g. 5"
            />
          </div>

          <div className="space-y-2">
            <Label>Expected Return (%)</Label>
            <Input
              type="number"
              value={optionA.expectedReturn}
              onChange={(e) => setOptionA({ ...optionA, expectedReturn: e.target.value })}
              placeholder="e.g. 12"
            />
          </div>
        </div>

        {/* Option B */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold">Investment Option B</h3>
          <div className="space-y-2">
            <Label>Investment Type</Label>
            <Select value={optionB.type} onValueChange={(value) => setOptionB({ ...optionB, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select investment type" />
              </SelectTrigger>
              <SelectContent>
                {investmentTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Investment Amount (₹)</Label>
            <Input
              type="number"
              value={optionB.amount}
              onChange={(e) => setOptionB({ ...optionB, amount: e.target.value })}
              placeholder="e.g. 1000000"
            />
          </div>

          <div className="space-y-2">
            <Label>Duration (Years)</Label>
            <Input
              type="number"
              value={optionB.duration}
              onChange={(e) => setOptionB({ ...optionB, duration: e.target.value })}
              placeholder="e.g. 5"
            />
          </div>

          <div className="space-y-2">
            <Label>Expected Return (%)</Label>
            <Input
              type="number"
              value={optionB.expectedReturn}
              onChange={(e) => setOptionB({ ...optionB, expectedReturn: e.target.value })}
              placeholder="e.g. 15"
            />
          </div>
        </div>
      </div>

      <Button onClick={compareInvestments} className="w-full mt-8">
        <ArrowLeftRight className="w-4 h-4 mr-2" />
        Compare Investments
      </Button>

      {comparison.futureValueA !== null && comparison.futureValueB !== null && (
        <div className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-medium mb-2">{optionA.type}</h4>
              <p className="text-2xl font-bold text-primary">
                ₹{comparison.futureValueA.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground">Future Value</p>
            </Card>

            <Card className="p-4">
              <h4 className="font-medium mb-2">{optionB.type}</h4>
              <p className="text-2xl font-bold text-primary">
                ₹{comparison.futureValueB.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground">Future Value</p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">Difference in Future Value</p>
            <p className="text-2xl font-bold text-primary">
              ₹{comparison.difference !== null ? Math.abs(comparison.difference).toLocaleString('en-IN', { maximumFractionDigits: 0 }) : '0'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {comparison.difference !== null ? (comparison.difference >= 0 ? 'Additional corpus needed' : 'Surplus amount') : 'No difference calculated'}
            </p>
          </div>
        </div>
      )}
    </Card>
  )
} 