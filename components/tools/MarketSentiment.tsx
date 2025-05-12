'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, TrendingUp, TrendingDown, AlertTriangle, BarChart2 } from 'lucide-react'

interface MarketIndicator {
  name: string
  value: number
  change: number
  status: 'positive' | 'negative' | 'neutral'
}

interface SentimentData {
  fearGreedIndex: number
  marketVolatility: number
  putCallRatio: number
  marketBreadth: number
}

export function MarketSentiment() {
  const [activeTab, setActiveTab] = useState('overview')
  const [sentimentData, setSentimentData] = useState<SentimentData>({
    fearGreedIndex: 65,
    marketVolatility: 18.5,
    putCallRatio: 0.85,
    marketBreadth: 1.2
  })

  const marketIndicators: MarketIndicator[] = [
    {
      name: 'Nifty 50',
      value: 22450,
      change: 0.75,
      status: 'positive'
    },
    {
      name: 'Bank Nifty',
      value: 47800,
      change: -0.25,
      status: 'negative'
    },
    {
      name: 'India VIX',
      value: sentimentData.marketVolatility,
      change: -2.1,
      status: 'positive'
    },
    {
      name: 'USD/INR',
      value: 82.85,
      change: -0.15,
      status: 'positive'
    }
  ]

  const getSentimentLevel = (value: number) => {
    if (value >= 75) return 'Extreme Greed'
    if (value >= 60) return 'Greed'
    if (value >= 40) return 'Neutral'
    if (value >= 25) return 'Fear'
    return 'Extreme Fear'
  }

  const getMarketOutlook = () => {
    const { fearGreedIndex, marketVolatility, putCallRatio, marketBreadth } = sentimentData
    
    if (fearGreedIndex > 70 && putCallRatio < 0.7) {
      return {
        status: 'Caution',
        description: 'Market showing signs of excessive optimism. Consider reducing risk exposure.',
        icon: AlertTriangle
      }
    } else if (fearGreedIndex < 30 && putCallRatio > 1.2) {
      return {
        status: 'Opportunity',
        description: 'Market fear levels elevated. Potential buying opportunities emerging.',
        icon: TrendingUp
      }
    } else {
      return {
        status: 'Neutral',
        description: 'Market sentiment balanced. Maintain regular investment strategy.',
        icon: Activity
      }
    }
  }

  const MarketOutlookIcon = getMarketOutlook().icon

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full mb-6">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {marketIndicators.map((indicator) => (
                <Card key={indicator.name} className="p-4">
                  <p className="text-sm text-muted-foreground">{indicator.name}</p>
                  <p className="text-xl font-bold">{indicator.value.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {indicator.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={indicator.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {Math.abs(indicator.change)}%
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <MarketOutlookIcon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-medium">{getMarketOutlook().status}</h3>
                  <p className="text-sm text-muted-foreground">{getMarketOutlook().description}</p>
                </div>
              </div>
              <Button className="w-full">View Detailed Analysis</Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-medium mb-4">Fear & Greed Index</h3>
                <div className="relative h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full mb-4">
                  <div
                    className="absolute top-0 transform -translate-x-1/2 -translate-y-full"
                    style={{ left: `${sentimentData.fearGreedIndex}%` }}
                  >
                    <div className="w-3 h-3 bg-primary transform rotate-45 mb-1" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{sentimentData.fearGreedIndex}</p>
                  <p className="text-sm text-muted-foreground">
                    {getSentimentLevel(sentimentData.fearGreedIndex)}
                  </p>
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-medium mb-4">Market Indicators</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Volatility (VIX)</span>
                      <span>{sentimentData.marketVolatility}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(sentimentData.marketVolatility / 40) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Put/Call Ratio</span>
                      <span>{sentimentData.putCallRatio}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(sentimentData.putCallRatio / 2) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Breadth</span>
                      <span>{sentimentData.marketBreadth}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(sentimentData.marketBreadth / 2) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Market Insights</h3>
                <BarChart2 className="w-5 h-5 text-primary" />
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Strong institutional buying in large-cap stocks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  Mid-cap valuations approaching historical highs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Elevated volatility in global markets
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4">
                Download Full Report
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
} 