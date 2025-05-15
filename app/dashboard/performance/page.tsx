"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  Calendar,
  Download,
  LineChart,
} from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Performance Analytics</h1>
          <p className="text-muted-foreground">Track and analyze your investment performance</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="1Y">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">1 Month</SelectItem>
              <SelectItem value="3M">3 Months</SelectItem>
              <SelectItem value="6M">6 Months</SelectItem>
              <SelectItem value="1Y">1 Year</SelectItem>
              <SelectItem value="3Y">3 Years</SelectItem>
              <SelectItem value="5Y">5 Years</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Returns
            </h3>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">+32.5%</span>
            <span className="text-sm text-green-600 ml-2">
              <TrendingUp className="h-4 w-4 inline" />
              +2.1%
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">vs. benchmark +28.3%</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              XIRR
            </h3>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">18.4%</span>
            <span className="text-sm text-green-600 ml-2">Above Target</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Target: 15%</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Risk-Adjusted Returns
            </h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">1.45</span>
            <span className="text-sm text-green-600 ml-2">Sharpe Ratio</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Good risk-adjusted performance</div>
        </Card>
      </div>

      {/* Fund Performance */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Fund-wise Performance</h2>
        <div className="space-y-4">
          {[
            {
              name: "Jhaveri Multi-Cap Growth Fund",
              type: "PMS",
              returns: {
                current: "+28.5%",
                benchmark: "+24.2%",
              },
              alpha: "+4.3%",
              positive: true,
            },
            {
              name: "India Technology Leaders AIF",
              type: "AIF III",
              returns: {
                current: "+42.1%",
                benchmark: "+38.5%",
              },
              alpha: "+3.6%",
              positive: true,
            },
            {
              name: "GIFT City Global Opportunities Fund",
              type: "SIF",
              returns: {
                current: "-2.8%",
                benchmark: "-4.2%",
              },
              alpha: "+1.4%",
              positive: false,
            },
          ].map((fund) => (
            <div
              key={fund.name}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div>
                <h3 className="font-medium">{fund.name}</h3>
                <p className="text-sm text-muted-foreground">{fund.type}</p>
              </div>
              <div className="text-right space-y-1">
                <div className="font-medium">
                  Returns: {fund.returns.current}
                  <span className="text-sm text-muted-foreground ml-2">
                    vs. {fund.returns.benchmark}
                  </span>
                </div>
                <div
                  className={`text-sm ${
                    fund.positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {fund.positive ? (
                    <TrendingUp className="h-4 w-4 inline mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 inline mr-1" />
                  )}
                  Alpha: {fund.alpha}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Risk Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Risk Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Beta</span>
              <span className="font-medium">0.85</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Standard Deviation</span>
              <span className="font-medium">12.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Maximum Drawdown</span>
              <span className="font-medium">-15.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Information Ratio</span>
              <span className="font-medium">1.28</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Asset Allocation Impact</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Equity</span>
              <span className="font-medium text-green-600">+18.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fixed Income</span>
              <span className="font-medium text-green-600">+8.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">International</span>
              <span className="font-medium text-red-600">-2.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Alternative</span>
              <span className="font-medium text-green-600">+12.4%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 