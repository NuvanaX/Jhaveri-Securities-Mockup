import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, ChevronDown, Globe, Shield, Star, Users, ArrowLeftRight, LineChart, Activity, Wallet, Clock, Phone, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { GreedFearIndex } from "@/components/greed-fear-index"
import { CagrCalculator } from "@/components/tools/CagrCalculator"
import { AnimatedGradient } from "@/components/animated-gradient"
import { Logo } from "@/components/logo"
import { StrategyComparison } from "@/components/strategy-comparison"
import { AssetClassMatrix } from "@/components/asset-class-matrix"
import { InvestmentComparison } from "@/components/tools/InvestmentComparison"
import { PortfolioTracker } from "@/components/tools/PortfolioTracker"
import { RiskAssessment } from "@/components/tools/RiskAssessment"
import { MarketSentiment } from "@/components/tools/MarketSentiment"
import { RetirementPlanner } from "@/components/tools/RetirementPlanner"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 md:h-16 items-center justify-between">
          <Link href="/" className="flex items-center -ml-3">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#comparison" className="text-sm font-medium hover:text-primary scroll-smooth transition-colors">
              Comparison
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-primary scroll-smooth transition-colors">
              Why Us
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary scroll-smooth transition-colors">
              Education
            </Link>
            <Link href="#insights" className="text-sm font-medium hover:text-primary scroll-smooth transition-colors">
              Insights
            </Link>
            <Link href="#tools" className="text-sm font-medium hover:text-primary scroll-smooth transition-colors">
              Financial Tools Suite
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button className="hidden md:flex">Schedule a Consultation</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <ChevronDown className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          <AnimatedGradient className="absolute inset-0 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background z-[1]" />
          <div className="container relative z-10 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium text-primary">Trusted by 2500+ Investors</span>
                </div>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground">
                Curated Financial Products for Visionary Investors
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
                PMS, AIF, and GIFT City investments—all in one place. Expert guidance for your wealth journey.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all border-primary/20 hover:border-primary/40"
                >
                  Download Investment Guide
                </Button>
              </div>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-primary">₹5000Cr+</div>
                  <div className="text-sm text-muted-foreground mt-1">Assets Managed</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Investment Experts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CTA Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="h-5 w-5 mr-2" />
            Talk to an Expert
          </Button>
        </div>

        {/* Value Proposition */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold">Expertly Curated PMS & AIFs</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  Handpicked portfolio management services and alternative investment funds for optimal returns.
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>

              <Card className="p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold">GIFT City Advantages</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  Access international markets with tax benefits through Gujarat International Finance Tec-City.
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>

              <Card className="p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold">Comparison Tools</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  Interactive tools to compare different investment products and strategies side by side.
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>

              <Card className="p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold">Dedicated Wealth Manager</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  Personal guidance from experienced professionals to help navigate your investment journey.
                </p>
                <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Comparison */}
        <section id="comparison" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-8 md:mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl">Investment Products Comparison</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                Compare different investment options to make informed decisions aligned with your financial goals.
              </p>
            </div>

            <StrategyComparison />
          </div>
        </section>

        {/* Asset Class Matrix */}
        <section id="matrix" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Asset Class Matrix</h2>
              <p className="mt-4 text-muted-foreground">
                Interactive comparison of different asset classes to help you understand their characteristics and make better investment decisions.
              </p>
            </div>

            <AssetClassMatrix />
          </div>
        </section>

        {/* Why Jhaveri Securities */}
        <section id="why-us" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl mb-6">
                  Why Jhaveri Securities
                </h2>
                <p className="text-muted-foreground mb-4">
                  With over 25 years of experience in the financial markets, Jhaveri Securities has established itself
                  as a trusted partner for investors seeking premium investment solutions.
                </p>
                <p className="text-muted-foreground mb-4">
                  We are a SEBI registered Portfolio Manager and Investment Advisor, committed to maintaining the
                  highest standards of integrity and transparency in all our dealings.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of experienced professionals works tirelessly to identify the best investment opportunities
                  and create tailored solutions for our clients.
                </p>
                <Button>Learn About Our Legacy</Button>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="SEBI Logo"
                    width={80}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="NSE Logo"
                    width={80}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="BSE Logo"
                    width={80}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=50&width=80"
                    alt="AMFI Logo"
                    width={80}
                    height={50}
                    className="h-12 w-auto"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <AnimatedCounter value={5000} prefix="₹" suffix="Cr+" className="font-serif text-3xl font-bold" />
                    <p className="text-sm text-muted-foreground mt-2">Assets Under Management</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={2500} suffix="+" className="font-serif text-3xl font-bold" />
                    <p className="text-sm text-muted-foreground mt-2">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={25} suffix="+" className="font-serif text-3xl font-bold" />
                    <p className="text-sm text-muted-foreground mt-2">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={50} suffix="+" className="font-serif text-3xl font-bold" />
                    <p className="text-sm text-muted-foreground mt-2">Investment Experts</p>
                  </div>
                </div>

                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-xl">
              <div className="text-center mb-8">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  Limited Time Offer
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                  Start Your Wealth Journey Today
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Schedule a consultation and receive our exclusive 2025 Investment Guide worth ₹5,000 for free!
                </p>
              </div>

              <Card className="p-6 shadow-lg bg-card">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" className="rounded-lg shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" className="rounded-lg shadow-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="rounded-lg shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="+91 98765 43210" className="rounded-lg shadow-sm" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="investment-interest" className="text-sm font-medium">
                      Investment Interest
                    </label>
                    <Select>
                      <SelectTrigger className="rounded-lg shadow-sm">
                        <SelectValue placeholder="Select your investment interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pms">Portfolio Management Services (Min ₹50L)</SelectItem>
                        <SelectItem value="aif">Alternative Investment Funds (Min ₹1Cr)</SelectItem>
                        <SelectItem value="gift">GIFT City Investments (Min $100K)</SelectItem>
                        <SelectItem value="all">Interested in All Options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="investment-guide" defaultChecked />
                    <label htmlFor="investment-guide" className="text-sm text-muted-foreground">
                      Yes, send me the free 2025 PMS & AIF Investment Guide (Worth ₹5,000)
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                    <br />Your information is secure and will not be shared.
                  </p>
                </form>
              </Card>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-serif text-2xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-primary">₹5000Cr+</div>
                  <div className="text-sm text-muted-foreground">Assets Managed</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-8 md:mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl">
                Understanding Investment Products
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                Compare different investment vehicles to make informed decisions about your financial future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <Card className="p-4 md:p-6 h-full overflow-hidden">
                <h3 className="font-serif text-lg md:text-xl font-bold mb-4">Mutual Funds vs PMS vs AIF vs SIF</h3>
                <div className="space-y-4 overflow-x-auto">
                  <div className="min-w-[500px] md:min-w-0">
                    <div className="grid grid-cols-5 gap-2 text-sm font-medium">
                      <div className="col-span-1"></div>
                      <div className="col-span-1 text-center">MF</div>
                      <div className="col-span-1 text-center">PMS</div>
                      <div className="col-span-1 text-center">AIF</div>
                      <div className="col-span-1 text-center">SIF</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Min. Investment</div>
                      <div className="col-span-1 text-center">₹500</div>
                      <div className="col-span-1 text-center">₹50L</div>
                      <div className="col-span-1 text-center">₹1Cr</div>
                      <div className="col-span-1 text-center">$100K</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Customization</div>
                      <div className="col-span-1 text-center">None</div>
                      <div className="col-span-1 text-center">High</div>
                      <div className="col-span-1 text-center">Medium</div>
                      <div className="col-span-1 text-center">Medium</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Taxation</div>
                      <div className="col-span-1 text-center">LTCG/STCG</div>
                      <div className="col-span-1 text-center">LTCG/STCG</div>
                      <div className="col-span-1 text-center">Pass-through</div>
                      <div className="col-span-1 text-center">Tax Adv.</div>
                    </div>

                    <div className="grid grid-cols-5 gap-2 text-sm mt-2">
                      <div className="col-span-1">Regulation</div>
                      <div className="col-span-1 text-center">SEBI</div>
                      <div className="col-span-1 text-center">SEBI</div>
                      <div className="col-span-1 text-center">SEBI</div>
                      <div className="col-span-1 text-center">IFSCA</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full text-sm">
                    Learn More
                  </Button>
                </div>
              </Card>

              <Card className="p-4 md:p-6 h-full overflow-hidden">
                <h3 className="font-serif text-lg md:text-xl font-bold mb-4">Active vs Passive Investing</h3>
                <div className="space-y-4 overflow-x-auto">
                  <div className="min-w-[400px] md:min-w-0">
                    <div className="grid grid-cols-3 gap-2 text-sm font-medium">
                      <div className="col-span-1"></div>
                      <div className="col-span-1 text-center">Active</div>
                      <div className="col-span-1 text-center">Passive</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Management Style</div>
                      <div className="col-span-1 text-center">Hands-on</div>
                      <div className="col-span-1 text-center">Index-based</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Fees</div>
                      <div className="col-span-1 text-center">Higher</div>
                      <div className="col-span-1 text-center">Lower</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2 mt-2">
                      <div className="col-span-1">Alpha Generation</div>
                      <div className="col-span-1 text-center">Possible</div>
                      <div className="col-span-1 text-center">Not Possible</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-sm mt-2">
                      <div className="col-span-1">Risk Management</div>
                      <div className="col-span-1 text-center">Customized</div>
                      <div className="col-span-1 text-center">Market Risk</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full text-sm">
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mx-auto max-w-3xl">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">CAGR Calculator</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate the Compound Annual Growth Rate of your investments to understand their performance over
                      time.
                    </p>
                    <Button className="w-full">Access Full Calculator</Button>
                  </div>
                  <div className="md:w-1/2 bg-muted p-6">
                    <CagrCalculator />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Look For Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl mb-6">
                  What We Look For in Fund Managers
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Consistent Track Record</h3>
                      <p className="text-sm text-muted-foreground">
                        We evaluate performance across market cycles, not just during bull markets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Risk Management Protocols</h3>
                      <p className="text-sm text-muted-foreground">
                        Strong downside protection measures and clear risk management frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Investment Philosophy</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear, consistent, and repeatable investment process that aligns with stated objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Team Stability & Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Experienced investment teams with low turnover and aligned incentives.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-6">Schedule a Consultation</Button>
              </div>

              <div>
                <Card className="p-6 bg-card">
                  <h3 className="font-serif text-xl font-bold mb-4">You May Consider Us If...</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You have investable assets of ₹50 lakhs or more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You're looking for personalized investment solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You value professional management of your portfolio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You're interested in alternative investment opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You want exposure to international markets through GIFT City</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>You're seeking tax-efficient investment structures</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="w-full mt-6">
                    Check Your Eligibility
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Market Pulse Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Market Pulse</h2>
              <p className="mt-4 text-muted-foreground">
                Stay informed about market sentiment and trends to make better investment decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Card className="p-6 h-full">
                <h3 className="font-serif text-xl font-bold mb-4">Greed & Fear Index</h3>
                <GreedFearIndex value={65} />
                <p className="text-sm text-muted-foreground mt-4">
                  The current market sentiment indicates moderate greed, suggesting caution while still presenting
                  opportunities in select sectors.
                </p>
                <Button variant="outline" className="w-full mt-4">
                  Subscribe to Market Insights
                </Button>
              </Card>

              <Card className="p-6 h-full">
                <h3 className="font-serif text-xl font-bold mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4 py-2">
                    <p className="italic text-sm">
                      "Jhaveri Securities has transformed my investment approach. Their PMS has consistently
                      outperformed my expectations, and their team is always available for guidance."
                    </p>
                    <p className="text-sm font-medium mt-2">— Entrepreneur, Mumbai</p>
                  </div>

                  <div className="border-l-4 border-primary/30 pl-4 py-2">
                    <p className="italic text-sm">
                      "The GIFT City investment opportunities they presented opened up a new dimension to my portfolio.
                      The tax advantages and global exposure have been significant benefits."
                    </p>
                    <p className="text-sm font-medium mt-2">— Senior Professional, Bangalore</p>
                  </div>

                  <div className="border-l-4 border-primary/30 pl-4 py-2">
                    <p className="italic text-sm">
                      "Their comparison tools helped me understand the differences between various investment vehicles.
                      The personalized advice I received was invaluable."
                    </p>
                    <p className="text-sm font-medium mt-2">— Business Owner, Delhi</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section id="insights" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Featured Insights</h2>
              <p className="mt-4 text-muted-foreground">
                Stay informed with our latest research, market analysis, and investment strategies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/insights/pms-funds.svg"
                    alt="Top performing PMS funds chart showing growth trends"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">Top PMS Funds in India (2025)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An in-depth analysis of the best performing Portfolio Management Services in India and what makes
                    them stand out.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/insights/gift-city.png"
                    alt="Aerial view of GIFT City financial district"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">Understanding GIFT City Investments</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive guide to investing through Gujarat International Finance Tec-City and its unique
                    advantages.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/insights/alternative-investments.png"
                    alt="Diverse alternative investment options visualization"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Rise of Alternative Investments</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Exploring how Alternative Investment Funds are becoming an essential component of high-net-worth
                    portfolios.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Hub Section */}
        <section id="tools" className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Financial Tools Suite
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional-grade tools to enhance your investment decisions
              </p>
            </div>

            <Tabs defaultValue="cagr" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-4 bg-transparent h-auto p-4">
                <TabsTrigger 
                  value="cagr" 
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <BarChart3 className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">CAGR Calculator</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Calculate growth</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="comparison"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <ArrowLeftRight className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">Investment Comparison</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Compare options</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="portfolio"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <LineChart className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">Portfolio Tracker</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Monitor investments</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="risk"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <Shield className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">Risk Assessment</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Evaluate risk</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="market"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <Activity className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">Market Sentiment</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Track markets</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="retirement"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors group"
                >
                  <Wallet className="h-5 w-5" />
                  <div className="text-center">
                    <div className="font-medium">Retirement Planner</div>
                    <div className="text-xs text-muted-foreground group-data-[state=active]:text-primary-foreground/80">Plan future</div>
                  </div>
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <Card className="border-none shadow-lg overflow-hidden">
                  <TabsContent value="cagr" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">CAGR Calculator</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate the Compound Annual Growth Rate to understand your investment's performance over time.
                      </p>
                    </div>
                    <div className="p-6">
                      <CagrCalculator />
                    </div>
                  </TabsContent>

                  <TabsContent value="comparison" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">Investment Comparison</h3>
                      <p className="text-sm text-muted-foreground">
                        Compare different investment options side by side to make informed portfolio decisions.
                      </p>
                    </div>
                    <div className="p-6">
                      <InvestmentComparison />
                    </div>
                  </TabsContent>

                  <TabsContent value="portfolio" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">Portfolio Tracker</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor and analyze your investment portfolio with our comprehensive tracking tools.
                      </p>
                    </div>
                    <div className="p-6">
                      <PortfolioTracker />
                    </div>
                  </TabsContent>

                  <TabsContent value="risk" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">Risk Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Evaluate your risk tolerance and receive personalized investment recommendations.
                      </p>
                    </div>
                    <div className="p-6">
                      <RiskAssessment />
                    </div>
                  </TabsContent>

                  <TabsContent value="market" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">Market Sentiment</h3>
                      <p className="text-sm text-muted-foreground">
                        Get real-time insights into market trends and sentiment indicators.
                      </p>
                    </div>
                    <div className="p-6">
                      <MarketSentiment />
                    </div>
                  </TabsContent>

                  <TabsContent value="retirement" className="m-0 focus-visible:outline-none focus-visible:ring-0">
                    <div className="p-6 border-b bg-muted/30">
                      <h3 className="font-serif text-2xl font-bold mb-2">Retirement Planner</h3>
                      <p className="text-sm text-muted-foreground">
                        Plan your retirement with our advanced calculator and get personalized insights.
                      </p>
                    </div>
                    <div className="p-6">
                      <RetirementPlanner />
                    </div>
                  </TabsContent>
                </Card>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm">
                  <div className="bg-muted/30 p-4 rounded-lg text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium mb-1">Need Expert Guidance?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get personalized assistance from our financial experts
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Book Your Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    Special Offer
                  </span>
                  <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl mb-4">
                    Ready to Transform Your Investment Strategy?
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    Book your consultation now and receive:
                  </p>
                  <ul className="mt-4 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Free 2025 Investment Guide (Worth ₹5,000)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Personalized Portfolio Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      Tax Optimization Strategy
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-background p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <Star className="h-8 w-8 text-yellow-500" />
                      <div>
                        <div className="font-medium">Excellent</div>
                        <div className="text-sm text-muted-foreground">Based on 500+ reviews</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary/30 pl-4 py-2">
                        <p className="italic text-sm">
                          "The consultation was eye-opening. Their expertise helped me restructure my portfolio for better returns."
                        </p>
                        <p className="text-sm font-medium mt-2">— Senior Professional, Mumbai</p>
                      </div>
                      <div className="border-l-4 border-primary/30 pl-4 py-2">
                        <p className="italic text-sm">
                          "Their GIFT City investment guidance has been invaluable. Highly recommend their services."
                        </p>
                        <p className="text-sm font-medium mt-2">— Business Owner, Bangalore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio Management Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Alternative Investment Funds
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    GIFT City Investments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Wealth Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@jhaveritrade.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    91-265-6161200/7161200
                  </Link>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground">
                    301/302 Payal Tower-II,Opp. M. S. University,
                    <br />
                    Sayajigunj, Vadodara 390020
                  </p>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Jhaveri Securities. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
                <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  SEBI Disclosures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
