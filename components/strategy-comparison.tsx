"use client"

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const comparisonData = [
  {
    feature: 'Minimum Investment',
    mutualFunds: '500',
    pms: '50 Lakhs',
    aif: '1 Crore',
    sif: '10 Lakhs',
    tooltip: 'The minimum amount required to start investing in each product'
  },
  {
    feature: 'Risk Profile',
    mutualFunds: 'Low to High',
    pms: 'Moderate to High',
    aif: 'High',
    sif: 'Moderate to High',
    tooltip: 'The level of risk associated with each investment type'
  },
  {
    feature: 'Customization',
    mutualFunds: 'None',
    pms: 'High',
    aif: 'Moderate',
    sif: 'High',
    tooltip: 'Ability to customize investment strategy according to individual needs'
  },
  {
    feature: 'Transparency',
    mutualFunds: 'High',
    pms: 'Very High',
    aif: 'Moderate',
    sif: 'High',
    tooltip: 'Level of visibility into investment holdings and strategy'
  },
  {
    feature: 'Liquidity',
    mutualFunds: 'High',
    pms: 'Moderate',
    aif: 'Low',
    sif: 'Moderate',
    tooltip: 'Ease of converting investment to cash'
  },
  {
    feature: 'Tax Efficiency',
    mutualFunds: 'Moderate',
    pms: 'High',
    aif: 'High',
    sif: 'High',
    tooltip: 'Tax benefits and implications of each investment type'
  }
];

export function StrategyComparison() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (feature: string) => {
    if (expandedFeature === feature) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(feature);
    }
  };

  return (
    <div className="w-full space-y-6 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Investment Strategy Comparison</h2>
      
      {/* Mobile view - Card layout */}
      <div className="md:hidden space-y-4">
        {comparisonData.map((item) => (
          <div 
            key={item.feature}
            className={cn(
              "rounded-lg border overflow-hidden",
              expandedFeature === item.feature ? "bg-muted/50" : "bg-background"
            )}
          >
            <div 
              className="p-4 cursor-pointer"
              onClick={() => toggleFeature(item.feature)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="flex-1 min-w-[150px]">
                    <h3 className="font-semibold">{item.feature}</h3>
                  </div>
                  <div className="flex items-center justify-center w-6">
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="flex items-center justify-center w-6">
                  {expandedFeature === item.feature ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium">Mutual Funds:</span> {item.mutualFunds}
                </div>
                <div>
                  <span className="font-medium">PMS:</span> {item.pms}
                </div>
                <div>
                  <span className="font-medium">AIF:</span> {item.aif}
                </div>
                <div>
                  <span className="font-medium">SIF:</span> {item.sif}
                </div>
              </div>
            </div>
            {expandedFeature === item.feature && (
              <div className="px-4 pb-4 pt-2 bg-muted/30 border-t">
                <p className="text-sm text-muted-foreground">{item.tooltip}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop view - Table layout */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              <TableHead>Mutual Funds</TableHead>
              <TableHead>PMS</TableHead>
              <TableHead>AIF</TableHead>
              <TableHead>SIF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((item) => (
              <TableRow 
                key={item.feature}
                className={cn(
                  "cursor-pointer transition-colors",
                  activeFeature === item.feature ? "bg-muted" : ""
                )}
                onClick={() => setActiveFeature(item.feature)}
              >
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-[150px]">
                      {item.feature}
                    </div>
                    <div className="flex items-center justify-center w-6">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button 
                              className="p-1 hover:bg-muted rounded-full transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Info className="h-4 w-4 text-primary hover:text-primary/80" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="right" 
                            className="bg-primary text-primary-foreground p-3 text-sm max-w-[300px]"
                          >
                            {item.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.mutualFunds}</TableCell>
                <TableCell>{item.pms}</TableCell>
                <TableCell>{item.aif}</TableCell>
                <TableCell>{item.sif}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 