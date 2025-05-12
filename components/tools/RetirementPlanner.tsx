'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Clock, Wallet, TrendingUp, Calculator } from 'lucide-react'

interface RetirementPlan {
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  currentSavings: number
  monthlyContribution: number
  expectedReturn: number
  inflationRate: number
  monthlyExpenses: number
}

export function RetirementPlanner() {
  const [plan, setPlan] = useState<RetirementPlan>({
    currentAge: 30,
    retirementAge: 60,
    lifeExpectancy: 85,
    currentSavings: 1000000,
    monthlyContribution: 50000,
    expectedReturn: 12,
    inflationRate: 6,
    monthlyExpenses: 100000
  })

  const [results, setResults] = useState<{
    requiredCorpus: number
    monthlyInvestmentNeeded: number
    currentTrajectory: number
    gap: number
  } | null>(null)

  const calculateRetirementNeeds = () => {
    const yearsToRetirement = plan.retirementAge - plan.currentAge
    const retirementDuration = plan.lifeExpectancy - plan.retirementAge
    
    // Calculate future monthly expenses considering inflation
    const futureMonthlyExpenses = plan.monthlyExpenses * 
      Math.pow(1 + plan.inflationRate / 100, yearsToRetirement)
    
    // Calculate required retirement corpus
    const requiredCorpus = futureMonthlyExpenses * 12 * 
      ((1 - Math.pow(1 + (plan.expectedReturn - plan.inflationRate) / 100, -retirementDuration)) / 
      ((plan.expectedReturn - plan.inflationRate) / 100))
    
    // Calculate future value of current savings
    const futureSavings = plan.currentSavings * 
      Math.pow(1 + plan.expectedReturn / 100, yearsToRetirement)
    
    // Calculate future value of monthly contributions
    const futureContributions = plan.monthlyContribution * 12 * 
      ((Math.pow(1 + plan.expectedReturn / 100, yearsToRetirement) - 1) / 
      (plan.expectedReturn / 100))
    
    const currentTrajectory = futureSavings + futureContributions
    
    // Calculate required monthly investment
    const monthlyInvestmentNeeded = 
      (requiredCorpus - futureSavings) / 
      ((Math.pow(1 + plan.expectedReturn / 100, yearsToRetirement) - 1) / 
      (plan.expectedReturn / 100)) / 12
    
    setResults({
      requiredCorpus,
      monthlyInvestmentNeeded,
      currentTrajectory,
      gap: requiredCorpus - currentTrajectory
    })
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Age and Timeline */}
          <Card className="p-4 space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Timeline
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Current Age</Label>
                <Input
                  type="number"
                  value={plan.currentAge}
                  onChange={(e) => setPlan({ ...plan, currentAge: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label>Retirement Age</Label>
                <Input
                  type="number"
                  value={plan.retirementAge}
                  onChange={(e) => setPlan({ ...plan, retirementAge: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label>Life Expectancy</Label>
                <Input
                  type="number"
                  value={plan.lifeExpectancy}
                  onChange={(e) => setPlan({ ...plan, lifeExpectancy: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
          </Card>

          {/* Financial Information */}
          <Card className="p-4 space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <Wallet className="w-4 h-4 text-primary" />
              Finances
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Current Savings (₹)</Label>
                <Input
                  type="number"
                  value={plan.currentSavings}
                  onChange={(e) => setPlan({ ...plan, currentSavings: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label>Monthly Contribution (₹)</Label>
                <Input
                  type="number"
                  value={plan.monthlyContribution}
                  onChange={(e) => setPlan({ ...plan, monthlyContribution: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="space-y-2">
                <Label>Monthly Expenses (₹)</Label>
                <Input
                  type="number"
                  value={plan.monthlyExpenses}
                  onChange={(e) => setPlan({ ...plan, monthlyExpenses: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Returns and Inflation */}
        <Card className="p-4 space-y-4">
          <h3 className="font-medium flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Returns & Inflation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label>Expected Return (%): {plan.expectedReturn}%</Label>
              <Slider
                value={[plan.expectedReturn]}
                onValueChange={(value) => setPlan({ ...plan, expectedReturn: value[0] })}
                min={4}
                max={20}
                step={0.5}
              />
            </div>

            <div className="space-y-4">
              <Label>Inflation Rate (%): {plan.inflationRate}%</Label>
              <Slider
                value={[plan.inflationRate]}
                onValueChange={(value) => setPlan({ ...plan, inflationRate: value[0] })}
                min={2}
                max={10}
                step={0.5}
              />
            </div>
          </div>
        </Card>

        <Button onClick={calculateRetirementNeeds} className="w-full">
          <Calculator className="w-4 h-4 mr-2" />
          Calculate Retirement Plan
        </Button>

        {results && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h4 className="font-medium mb-2">Required Retirement Corpus</h4>
              <p className="text-2xl font-bold text-primary">
                ₹{results.requiredCorpus.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Total amount needed at retirement
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-medium mb-2">Monthly Investment Needed</h4>
              <p className="text-2xl font-bold text-primary">
                ₹{results.monthlyInvestmentNeeded.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Required monthly investment
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-medium mb-2">Current Trajectory</h4>
              <p className="text-2xl font-bold text-primary">
                ₹{results.currentTrajectory.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Expected corpus with current savings plan
              </p>
            </Card>

            <Card className="p-4">
              <h4 className="font-medium mb-2">Shortfall/Surplus</h4>
              <p className={`text-2xl font-bold ${results.gap >= 0 ? 'text-red-500' : 'text-green-500'}`}>
                ₹{Math.abs(results.gap).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {results.gap >= 0 ? 'Additional corpus needed' : 'Surplus amount'}
              </p>
            </Card>
          </div>
        )}

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Note: This calculator provides estimates based on the given inputs and assumptions. 
            Actual results may vary based on market conditions, tax implications, and other factors. 
            Please consult with our financial advisors for a detailed retirement plan.
          </p>
        </div>
      </div>
    </Card>
  )
} 