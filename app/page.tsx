import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, ChevronDown, Globe, Shield, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { GreedFearIndex } from "@/components/greed-fear-index"
import { CagrCalculator } from "@/components/cagr-calculator"
import { AnimatedGradient } from "@/components/animated-gradient"
import { Logo } from "@/components/logo"
import { StrategyComparison } from "@/components/strategy-comparison"
import { AssetClassMatrix } from "@/components/asset-class-matrix"

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
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="#comparison" className="text-sm font-medium hover:text-primary">
              Comparison
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:text-primary">
              Why Us
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </Link>
            <Link href="#insights" className="text-sm font-medium hover:text-primary">
              Insights
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
        <section className="relative overflow-hidden">
          <AnimatedGradient className="absolute inset-0 z-0" />
          <div className="container relative z-10 py-20 md:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Curated Financial Products for Visionary Investors
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                PMS, AIF, and GIFT City investments—all in one place
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto backdrop-blur-sm bg-primary/90 hover:bg-primary/80 transition-all shadow-lg"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto backdrop-blur-sm bg-background/50 hover:bg-background/70 transition-all"
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold">Expertly Curated PMS & AIFs</h3>
                <p className="mt-2 text-muted-foreground">
                  Handpicked portfolio management services and alternative investment funds for optimal returns.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold">GIFT City Advantages</h3>
                <p className="mt-2 text-muted-foreground">
                  Access international markets with tax benefits through Gujarat International Finance Tec-City.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold">Comparison Tools</h3>
                <p className="mt-2 text-muted-foreground">
                  Interactive tools to compare different investment products and strategies side by side.
                </p>
              </Card>

              <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-card">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold">Dedicated Wealth Manager</h3>
                <p className="mt-2 text-muted-foreground">
                  Personal guidance from experienced professionals to help navigate your investment journey.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Comparison */}
        <section id="comparison" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Investment Products Comparison</h2>
              <p className="mt-4 text-muted-foreground">
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
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                  Let's Start Your Wealth Journey
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Connect with our expert advisors to explore investment opportunities tailored to your financial goals.
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
                        <SelectItem value="pms">Portfolio Management Services</SelectItem>
                        <SelectItem value="aif">Alternative Investment Funds</SelectItem>
                        <SelectItem value="gift">GIFT City Investments</SelectItem>
                        <SelectItem value="all">All of the above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="investment-guide" />
                    <label htmlFor="investment-guide" className="text-sm text-muted-foreground">
                      Send me the 2025 PMS & AIF Investment Guide (PDF)
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
                  >
                    Connect with Advisor
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section id="education" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
                Understanding Investment Products
              </h2>
              <p className="mt-4 text-muted-foreground">
                Compare different investment vehicles to make informed decisions about your financial future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 h-full">
                <h3 className="font-serif text-xl font-bold mb-4">Mutual Funds vs PMS vs AIF vs SIF</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-2 text-sm font-medium">
                    <div className="col-span-1"></div>
                    <div className="col-span-1 text-center">MF</div>
                    <div className="col-span-1 text-center">PMS</div>
                    <div className="col-span-1 text-center">AIF</div>
                    <div className="col-span-1 text-center">SIF</div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Min. Investment</div>
                    <div className="col-span-1 text-center">₹500</div>
                    <div className="col-span-1 text-center">₹50L</div>
                    <div className="col-span-1 text-center">₹1Cr</div>
                    <div className="col-span-1 text-center">$100K</div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Customization</div>
                    <div className="col-span-1 text-center">None</div>
                    <div className="col-span-1 text-center">High</div>
                    <div className="col-span-1 text-center">Medium</div>
                    <div className="col-span-1 text-center">Medium</div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Taxation</div>
                    <div className="col-span-1 text-center">LTCG/STCG</div>
                    <div className="col-span-1 text-center">LTCG/STCG</div>
                    <div className="col-span-1 text-center">Pass-through</div>
                    <div className="col-span-1 text-center">Tax Adv.</div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="col-span-1">Regulation</div>
                    <div className="col-span-1 text-center">SEBI</div>
                    <div className="col-span-1 text-center">SEBI</div>
                    <div className="col-span-1 text-center">SEBI</div>
                    <div className="col-span-1 text-center">IFSCA</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </Card>

              <Card className="p-6 h-full">
                <h3 className="font-serif text-xl font-bold mb-4">Active vs Passive Investing</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-sm font-medium">
                    <div className="col-span-1"></div>
                    <div className="col-span-1 text-center">Active</div>
                    <div className="col-span-1 text-center">Passive</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Management Style</div>
                    <div className="col-span-1 text-center">Hands-on</div>
                    <div className="col-span-1 text-center">Index-based</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Fees</div>
                    <div className="col-span-1 text-center">Higher</div>
                    <div className="col-span-1 text-center">Lower</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm border-b pb-2">
                    <div className="col-span-1">Alpha Generation</div>
                    <div className="col-span-1 text-center">Possible</div>
                    <div className="col-span-1 text-center">Not Possible</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="col-span-1">Risk Management</div>
                    <div className="col-span-1 text-center">Customized</div>
                    <div className="col-span-1 text-center">Market Risk</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
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
                    <CagrCalculator preview={true} />
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
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Top PMS Funds"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Top PMS Funds in India (2025)</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An in-depth analysis of the best performing Portfolio Management Services in India and what makes
                    them stand out.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="GIFT City Investments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Understanding GIFT City Investments</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive guide to investing through Gujarat International Finance Tec-City and its unique
                    advantages.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Alternative Investments"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">The Rise of Alternative Investments</h3>
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

        {/* Final CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Card className="p-8 md:p-12 bg-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl mb-4">
                    Ready to Elevate Your Investment Strategy?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation with our expert advisors to explore investment opportunities tailored to
                    your financial goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
                    >
                      Schedule a Consultation
                    </Button>
                    <Button size="lg" variant="outline">
                      Download Investment Guide
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <form className="space-y-4">
                    <Input placeholder="Your Name" className="rounded-lg shadow-sm" />
                    <Input placeholder="Your Email" type="email" className="rounded-lg shadow-sm" />
                    <Input placeholder="Your Phone" className="rounded-lg shadow-sm" />
                    <Button type="submit" className="w-full">
                      Connect with Advisor
                    </Button>
                  </form>
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
                    info@jhaverisecurities.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +91 22 1234 5678
                  </Link>
                </li>
                <li>
                  <p className="text-sm text-muted-foreground">
                    Jhaveri Tower, Financial District,
                    <br />
                    Mumbai 400051, India
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
