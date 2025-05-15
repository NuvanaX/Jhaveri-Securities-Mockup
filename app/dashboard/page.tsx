"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  PieChart,
  BarChart3,
  Activity,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Portfolio Value
            </h3>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">₹1,25,00,000</span>
            <span className="text-sm text-green-600 ml-2">+2.5%</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Updated: 15 minutes ago
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Today's Gain/Loss
            </h3>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">₹75,000</span>
            <span className="text-sm text-green-600 ml-2">
              <TrendingUp className="h-4 w-4 inline" />
              +1.2%
            </span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Since market open
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Returns
            </h3>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">₹25,00,000</span>
            <span className="text-sm text-green-600 ml-2">+25%</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Since inception
          </div>
        </Card>
      </div>

      {/* Holdings Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Your Holdings</h2>
          <Button variant="outline" size="sm">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "Jhaveri Multi-Cap Growth Fund",
              type: "PMS",
              value: "₹50,00,000",
              change: "+3.2%",
              positive: true,
            },
            {
              name: "India Technology Leaders AIF",
              type: "AIF III",
              value: "₹35,00,000",
              change: "-0.8%",
              positive: false,
            },
            {
              name: "GIFT City Global Opportunities Fund",
              type: "SIF",
              value: "₹40,00,000",
              change: "+1.5%",
              positive: true,
            },
          ].map((holding) => (
            <div
              key={holding.name}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div>
                <h3 className="font-medium">{holding.name}</h3>
                <p className="text-sm text-muted-foreground">{holding.type}</p>
              </div>
              <div className="text-right">
                <div className="font-medium">{holding.value}</div>
                <div
                  className={`text-sm ${
                    holding.positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {holding.positive ? (
                    <TrendingUp className="h-4 w-4 inline mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 inline mr-1" />
                  )}
                  {holding.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {[
              {
                type: "Investment",
                fund: "Jhaveri Multi-Cap Growth Fund",
                amount: "₹10,00,000",
                date: "Mar 15, 2024",
              },
              {
                type: "Withdrawal",
                fund: "India Technology Leaders AIF",
                amount: "₹5,00,000",
                date: "Mar 10, 2024",
              },
            ].map((transaction) => (
              <div
                key={transaction.date}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-muted-foreground">{transaction.fund}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className="text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4">
            View All Transactions
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {[
              {
                title: "Portfolio Review Call",
                date: "Mar 20, 2024",
                time: "11:00 AM",
              },
              {
                title: "Q1 Performance Update",
                date: "Apr 05, 2024",
                time: "02:00 PM",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-muted-foreground">
                    {event.date} at {event.time}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4">
            View Calendar
          </Button>
        </Card>
      </div>
    </div>
  )
} 