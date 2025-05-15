"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Lock, User, HelpCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // TODO: Replace with actual authentication logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, always succeed
      // In production, verify credentials with your backend
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center -ml-3">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="tel:91-265-6161200">
                Need Help? Call 91-265-6161200
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container flex items-center justify-center py-16 md:py-24">
        <Card className="w-full max-w-md p-6 md:p-8 shadow-lg bg-card">
          <div className="text-center mb-8">
            <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Client Portal Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Access your investment portfolio and reports
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="clientId" className="text-sm font-medium">
                Client ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="clientId"
                  placeholder="Enter your Client ID"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login to Dashboard"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center justify-between pt-4">
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/forgot-password">Forgot Password?</Link>
              </Button>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/help" className="flex items-center gap-1">
                  <HelpCircle className="h-4 w-4" />
                  Help
                </Link>
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium">Secure Access</h3>
                  <p className="text-xs text-muted-foreground">
                    Your connection is encrypted and your data is protected
                  </p>
                </div>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                <p>
                  By logging in, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="container py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Jhaveri Securities. All rights
            reserved.
          </p>
          <p className="mt-1">
            SEBI Registration No: INZ000186937 | BSE EQ/FO/CD/DEBT: 6619
          </p>
        </div>
      </footer>
    </div>
  )
} 