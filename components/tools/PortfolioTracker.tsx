'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Wallet, Plus, Trash2 } from 'lucide-react'

interface Investment {
  id: string
  type: string
  name: string
  amount: string
  purchaseDate: string
  currentValue: string
}

export function PortfolioTracker() {
  const [investments, setInvestments] = useState<Investment[]>([])
  const [newInvestment, setNewInvestment] = useState<Investment>({
    id: '',
    type: '',
    name: '',
    amount: '',
    purchaseDate: '',
    currentValue: ''
  })

  const investmentTypes = [
    'Equity',
    'Debt',
    'Real Estate',
    'Gold',
    'PMS',
    'AIF',
    'GIFT City Funds'
  ]

  const addInvestment = () => {
    if (newInvestment.type && newInvestment.name && newInvestment.amount) {
      setInvestments([
        ...investments,
        {
          ...newInvestment,
          id: Date.now().toString()
        }
      ])
      setNewInvestment({
        id: '',
        type: '',
        name: '',
        amount: '',
        purchaseDate: '',
        currentValue: ''
      })
    }
  }

  const removeInvestment = (id: string) => {
    setInvestments(investments.filter(inv => inv.id !== id))
  }

  const calculateTotalValue = () => {
    return investments.reduce((total, inv) => {
      const currentValue = parseFloat(inv.currentValue) || parseFloat(inv.amount)
      return total + (currentValue || 0)
    }, 0)
  }

  const calculateReturns = (investment: Investment) => {
    const initial = parseFloat(investment.amount)
    const current = parseFloat(investment.currentValue) || initial
    return ((current - initial) / initial * 100).toFixed(2)
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Add New Investment Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Investment Type</Label>
            <Select 
              value={newInvestment.type}
              onValueChange={(value) => setNewInvestment({ ...newInvestment, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {investmentTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Investment Name</Label>
            <Input
              value={newInvestment.name}
              onChange={(e) => setNewInvestment({ ...newInvestment, name: e.target.value })}
              placeholder="e.g. HDFC Mutual Fund"
            />
          </div>

          <div className="space-y-2">
            <Label>Amount (₹)</Label>
            <Input
              type="number"
              value={newInvestment.amount}
              onChange={(e) => setNewInvestment({ ...newInvestment, amount: e.target.value })}
              placeholder="e.g. 100000"
            />
          </div>

          <div className="space-y-2">
            <Label>Purchase Date</Label>
            <Input
              type="date"
              value={newInvestment.purchaseDate}
              onChange={(e) => setNewInvestment({ ...newInvestment, purchaseDate: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label>Current Value (₹)</Label>
            <Input
              type="number"
              value={newInvestment.currentValue}
              onChange={(e) => setNewInvestment({ ...newInvestment, currentValue: e.target.value })}
              placeholder="Leave blank if same as amount"
            />
          </div>

          <div className="flex items-end">
            <Button onClick={addInvestment} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Investment
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-4 h-4 text-primary" />
              <h4 className="font-medium">Total Portfolio Value</h4>
            </div>
            <p className="text-2xl font-bold text-primary">
              ₹{calculateTotalValue().toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <LineChart className="w-4 h-4 text-primary" />
              <h4 className="font-medium">Number of Investments</h4>
            </div>
            <p className="text-2xl font-bold text-primary">{investments.length}</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <LineChart className="w-4 h-4 text-primary" />
              <h4 className="font-medium">Asset Types</h4>
            </div>
            <p className="text-2xl font-bold text-primary">
              {new Set(investments.map(inv => inv.type)).size}
            </p>
          </Card>
        </div>

        {/* Investments List */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold">Your Investments</h3>
          <div className="space-y-2">
            {investments.map((investment) => (
              <Card key={investment.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{investment.name}</h4>
                    <p className="text-sm text-muted-foreground">{investment.type}</p>
                    <p className="text-sm">
                      Purchase Date: {new Date(investment.purchaseDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      ₹{parseFloat(investment.currentValue || investment.amount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </p>
                    <p className={`text-sm ${parseFloat(calculateReturns(investment)) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {calculateReturns(investment)}%
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeInvestment(investment.id)}
                      className="mt-2"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            {investments.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No investments added yet. Add your first investment above.
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
} 