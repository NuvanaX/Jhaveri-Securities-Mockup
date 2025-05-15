"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react"

const funds = [
  {
    id: 1,
    name: "Jhaveri Multi-Cap Growth Fund",
    type: "PMS",
    category: "Equity",
    minInvestment: "₹50,00,000",
    returns: {
      oneYear: "+15.8%",
      threeYear: "+45.2%",
      fiveYear: "+85.6%",
    },
    risk: "Moderate",
    strategy: "Growth",
    description:
      "A diversified portfolio of high-quality companies across market capitalizations with a focus on sustainable growth.",
  },
  {
    id: 2,
    name: "India Technology Leaders AIF",
    type: "AIF III",
    category: "Sector",
    minInvestment: "₹1,00,00,000",
    returns: {
      oneYear: "+22.4%",
      threeYear: "+68.9%",
      fiveYear: "+120.3%",
    },
    risk: "High",
    strategy: "Sectoral",
    description:
      "Focused investment in technology companies poised to benefit from India's digital transformation.",
  },
  {
    id: 3,
    name: "GIFT City Global Opportunities Fund",
    type: "SIF",
    category: "International",
    minInvestment: "$100,000",
    returns: {
      oneYear: "+12.6%",
      threeYear: "+38.4%",
      fiveYear: "+72.1%",
    },
    risk: "Moderate-High",
    strategy: "Global",
    description:
      "Access to global markets through GIFT City with a focus on developed market opportunities.",
  },
]

export default function FundsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")

  const filteredFunds = funds.filter((fund) => {
    const matchesSearch = fund.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      categoryFilter === "all" || fund.category === categoryFilter
    const matchesType = typeFilter === "all" || fund.type === typeFilter
    const matchesRisk = riskFilter === "all" || fund.risk === riskFilter

    return matchesSearch && matchesCategory && matchesType && matchesRisk
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h1 className="text-2xl font-bold">Fund Finder</h1>
        <Button>
          Schedule Investment Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search funds..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Equity">Equity</SelectItem>
              <SelectItem value="Sector">Sector</SelectItem>
              <SelectItem value="International">International</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="PMS">PMS</SelectItem>
              <SelectItem value="AIF III">AIF III</SelectItem>
              <SelectItem value="SIF">SIF</SelectItem>
            </SelectContent>
          </Select>

          <Select value={riskFilter} onValueChange={setRiskFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Moderate">Moderate</SelectItem>
              <SelectItem value="Moderate-High">Moderate-High</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Fund List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredFunds.map((fund) => (
          <Card key={fund.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <h2 className="text-lg font-semibold">{fund.name}</h2>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {fund.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  {fund.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <span>
                    <span className="text-muted-foreground">Category:</span>{" "}
                    {fund.category}
                  </span>
                  <span>
                    <span className="text-muted-foreground">Risk:</span>{" "}
                    {fund.risk}
                  </span>
                  <span>
                    <span className="text-muted-foreground">Min Investment:</span>{" "}
                    {fund.minInvestment}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground">1Y Return</div>
                    <div className="text-lg font-semibold text-green-600">
                      {fund.returns.oneYear}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">3Y Return</div>
                    <div className="text-lg font-semibold text-green-600">
                      {fund.returns.threeYear}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">5Y Return</div>
                    <div className="text-lg font-semibold text-green-600">
                      {fund.returns.fiveYear}
                    </div>
                  </div>
                </div>
                <Button>View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 