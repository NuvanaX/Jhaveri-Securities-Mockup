'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react'

interface Question {
  id: number
  text: string
  options: {
    text: string
    score: number
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is your primary investment goal?",
    options: [
      { text: "Preserving my wealth and avoiding losses", score: 1 },
      { text: "Generating steady income with moderate growth", score: 2 },
      { text: "Growing my wealth over the long term", score: 3 },
      { text: "Maximizing returns with aggressive growth", score: 4 }
    ]
  },
  {
    id: 2,
    text: "How would you react if your investment portfolio lost 20% in a month?",
    options: [
      { text: "Sell everything immediately to prevent further losses", score: 1 },
      { text: "Sell some investments to reduce risk", score: 2 },
      { text: "Hold steady and wait for recovery", score: 3 },
      { text: "Buy more to take advantage of lower prices", score: 4 }
    ]
  },
  {
    id: 3,
    text: "What is your investment time horizon?",
    options: [
      { text: "Less than 3 years", score: 1 },
      { text: "3-5 years", score: 2 },
      { text: "5-10 years", score: 3 },
      { text: "More than 10 years", score: 4 }
    ]
  },
  {
    id: 4,
    text: "What percentage of your monthly income can you comfortably invest?",
    options: [
      { text: "Less than 10%", score: 1 },
      { text: "10-25%", score: 2 },
      { text: "25-40%", score: 3 },
      { text: "More than 40%", score: 4 }
    ]
  },
  {
    id: 5,
    text: "How experienced are you with investing?",
    options: [
      { text: "No experience", score: 1 },
      { text: "Some basic knowledge", score: 2 },
      { text: "Good understanding of markets", score: 3 },
      { text: "Very experienced investor", score: 4 }
    ]
  }
]

export function RiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateRiskProfile = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    const percentage = (totalScore / maxScore) * 100

    if (percentage <= 25) {
      return {
        profile: "Conservative",
        description: "You prefer stability and are most comfortable with low-risk investments.",
        recommendations: [
          "Fixed Deposits",
          "Government Bonds",
          "Debt Mutual Funds",
          "Blue-chip Stocks (small allocation)"
        ]
      }
    } else if (percentage <= 50) {
      return {
        profile: "Moderate",
        description: "You seek a balance between growth and stability in your investments.",
        recommendations: [
          "Balanced Mutual Funds",
          "Corporate Bonds",
          "Large-cap Stocks",
          "REITs"
        ]
      }
    } else if (percentage <= 75) {
      return {
        profile: "Growth",
        description: "You're comfortable with market volatility for potential higher returns.",
        recommendations: [
          "Mid-cap Stocks",
          "PMS Strategies",
          "Category II AIFs",
          "International Funds"
        ]
      }
    } else {
      return {
        profile: "Aggressive",
        description: "You seek maximum growth and can tolerate significant market fluctuations.",
        recommendations: [
          "Small-cap Stocks",
          "Category III AIFs",
          "GIFT City Funds",
          "Sector-specific Investments"
        ]
      }
    }
  }

  const restartAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="p-6">
      {!showResults ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-bold">Risk Tolerance Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium">{questions[currentQuestion].text}</p>
            <RadioGroup className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.score.toString()}
                    id={`option-${index}`}
                    onClick={() => handleAnswer(option.score)}
                  />
                  <Label htmlFor={`option-${index}`}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-2">
              Your Risk Profile: {calculateRiskProfile().profile}
            </h3>
            <p className="text-muted-foreground">
              {calculateRiskProfile().description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Recommended Investment Options:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calculateRiskProfile().recommendations.map((recommendation, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <p>{recommendation}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2 bg-yellow-50 dark:bg-yellow-950/50 p-4 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  This assessment is for educational purposes only. Please consult with our financial advisors
                  for personalized investment advice.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={restartAssessment} variant="outline" className="w-full">
                Retake Assessment
              </Button>
              <Button className="w-full">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
} 