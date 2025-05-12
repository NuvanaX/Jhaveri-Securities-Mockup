import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle, Phone } from "lucide-react"

interface ProductCardProps {
  title: string
  manager: string
  cagr: string
  lockInPeriod: string
  minInvestment: string
  taxDetails: string
  risk: string
}

export function ProductCard({ title, manager, cagr, lockInPeriod, minInvestment, taxDetails, risk }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{manager}</p>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm">CAGR</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[200px]">
                      Compound Annual Growth Rate - The mean annual growth rate over a specified period longer than one
                      year
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span className="font-medium">{cagr}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Lock-in Period</span>
            <span className="font-medium">{lockInPeriod}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Min. Investment</span>
            <span className="font-medium">{minInvestment}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Tax Details</span>
            <span className="font-medium">{taxDetails}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Risk Level</span>
            <span className="font-medium">{risk}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Button variant="outline" size="sm" className="w-full">
            Request More Info
          </Button>
          <Button variant="ghost" size="sm" className="w-full flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Call My Advisor</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
