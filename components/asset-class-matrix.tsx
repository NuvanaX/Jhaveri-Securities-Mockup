"use client"

import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface AssetClass {
  name: string;
  risk: number;
  return: number;
  liquidity: number;
  volatility: number;
  minInvestment: string;
  description: string;
  timeHorizon: string;
  suitableFor: string[];
}

const assetClasses: AssetClass[] = [
  {
    name: 'Equity',
    risk: 4,
    return: 5,
    liquidity: 5,
    volatility: 5,
    minInvestment: '₹500',
    description: 'Direct investment in company shares through stock markets',
    timeHorizon: 'Long Term (5+ years)',
    suitableFor: ['Growth Investors', 'Risk Tolerant', 'Long-term Investors']
  },
  {
    name: 'Fixed Income',
    risk: 2,
    return: 2,
    liquidity: 3,
    volatility: 1,
    minInvestment: '₹1,000',
    description: 'Debt instruments like bonds and fixed deposits',
    timeHorizon: 'Short to Medium Term (1-3 years)',
    suitableFor: ['Conservative Investors', 'Income Seekers', 'Retirees']
  },
  {
    name: 'Real Estate',
    risk: 3,
    return: 4,
    liquidity: 1,
    volatility: 2,
    minInvestment: '₹10,00,000',
    description: 'Physical property or REITs investments',
    timeHorizon: 'Long Term (7+ years)',
    suitableFor: ['Value Investors', 'Income Seekers', 'Portfolio Diversifiers']
  },
  {
    name: 'Gold',
    risk: 2,
    return: 3,
    liquidity: 4,
    volatility: 3,
    minInvestment: '₹1,000',
    description: 'Investment in physical gold, gold ETFs, or sovereign gold bonds',
    timeHorizon: 'Medium to Long Term (3-5 years)',
    suitableFor: ['Risk-Averse Investors', 'Hedge Seekers', 'Portfolio Diversifiers']
  },
  {
    name: 'Alternative Investments',
    risk: 5,
    return: 5,
    liquidity: 1,
    volatility: 4,
    minInvestment: '₹1,00,00,000',
    description: 'Private equity, hedge funds, venture capital, and other sophisticated investment vehicles',
    timeHorizon: 'Long Term (7-10 years)',
    suitableFor: ['Sophisticated Investors', 'High Net Worth Individuals', 'Risk Seekers']
  }
];

const parameters = [
  { name: 'Risk', key: 'risk' as const },
  { name: 'Return Potential', key: 'return' as const },
  { name: 'Liquidity', key: 'liquidity' as const },
  { name: 'Volatility', key: 'volatility' as const },
];

function MatrixCell({ value, assetClass, parameter }: { 
  value: number; 
  assetClass: AssetClass; 
  parameter: { name: string; key: keyof Pick<AssetClass, 'risk' | 'return' | 'liquidity' | 'volatility'> };
}) {
  const getDescription = () => {
    const level = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'][value - 1];
    return `${level} ${parameter.name}: ${getParameterDescription(parameter.key, value)}`;
  };

  const getParameterDescription = (param: typeof parameter.key, value: number) => {
    const descriptions: Record<typeof parameter.key, string[]> = {
      risk: [
        'Minimal risk of capital loss',
        'Low risk with stable returns',
        'Balanced risk-return profile',
        'Significant risk with potential for higher returns',
        'High risk with potential for substantial returns'
      ],
      return: [
        'Returns comparable to savings accounts',
        'Slightly better than inflation',
        'Moderate returns above inflation',
        'Potentially high returns',
        'Possibility of exceptional returns'
      ],
      liquidity: [
        'Very difficult to convert to cash',
        'Takes time to liquidate',
        'Can be liquidated with some notice',
        'Easily convertible to cash',
        'Highly liquid with immediate access'
      ],
      volatility: [
        'Very stable value',
        'Minor price fluctuations',
        'Moderate price movements',
        'Significant price swings',
        'Large and frequent price movements'
      ]
    };
    return descriptions[param][value - 1];
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative p-2 group">
            <div 
              className={cn(
                "w-12 h-12 rounded-xl cursor-pointer transition-all duration-300",
                "flex items-center justify-center relative overflow-hidden",
                "before:absolute before:inset-0 before:opacity-20 before:transition-opacity",
                "hover:scale-105 hover:shadow-lg",
                value === 1 && "bg-gradient-to-br from-emerald-50 to-emerald-200 shadow-emerald-100/50",
                value === 2 && "bg-gradient-to-br from-green-50 to-green-200 shadow-green-100/50",
                value === 3 && "bg-gradient-to-br from-amber-50 to-amber-200 shadow-amber-100/50",
                value === 4 && "bg-gradient-to-br from-orange-50 to-orange-200 shadow-orange-100/50",
                value === 5 && "bg-gradient-to-br from-rose-50 to-rose-200 shadow-rose-100/50"
              )}
            >
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                "bg-gradient-to-t from-black/5 to-transparent"
              )} />
              <div className="relative z-10 flex flex-col items-center">
                <span className={cn(
                  "text-lg font-semibold",
                  value === 1 && "text-emerald-700",
                  value === 2 && "text-green-700",
                  value === 3 && "text-amber-700",
                  value === 4 && "text-orange-700",
                  value === 5 && "text-rose-700"
                )}>{value}</span>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="right" 
          className="max-w-xs bg-white/95 backdrop-blur-sm border-none shadow-2xl rounded-xl p-4"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={cn(
                "w-2 h-2 rounded-full",
                value === 1 && "bg-emerald-500",
                value === 2 && "bg-green-500",
                value === 3 && "bg-amber-500",
                value === 4 && "bg-orange-500",
                value === 5 && "bg-rose-500"
              )} />
              <h4 className="font-medium">{assetClass.name} - {parameter.name}</h4>
            </div>
            <p className="text-sm text-gray-600">{getDescription()}</p>
            <div className="pt-2 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Min Investment</p>
                  <p className="font-medium text-gray-900">{assetClass.minInvestment}</p>
                </div>
                <div>
                  <p className="text-gray-500">Time Horizon</p>
                  <p className="font-medium text-gray-900">{assetClass.timeHorizon}</p>
                </div>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AssetClassMatrix() {
  const [hoveredAsset, setHoveredAsset] = useState<string | null>(null);

  return (
    <div className="w-full space-y-8">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] bg-white rounded-2xl shadow-xl p-8">
          {/* Matrix Header */}
          <div className="grid grid-cols-[280px,1fr] gap-8">
            <div className="font-semibold text-xl text-gray-900">Asset Class</div>
            <div className="grid grid-cols-4 gap-8">
              {parameters.map((param) => (
                <div key={param.name} className="font-medium text-center text-gray-700">
                  {param.name}
                </div>
              ))}
            </div>
          </div>

          {/* Matrix Body */}
          <div className="mt-8 space-y-6">
            {assetClasses.map((assetClass) => (
              <div
                key={assetClass.name}
                className={cn(
                  "grid grid-cols-[280px,1fr] gap-8 items-center p-4 rounded-xl transition-all duration-300",
                  hoveredAsset === assetClass.name 
                    ? "bg-gray-50 shadow-md transform scale-[1.02]" 
                    : "hover:bg-gray-50/50",
                )}
                onMouseEnter={() => setHoveredAsset(assetClass.name)}
                onMouseLeave={() => setHoveredAsset(null)}
              >
                <div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            assetClass.risk >= 4 && "bg-rose-500",
                            assetClass.risk === 3 && "bg-amber-500",
                            assetClass.risk <= 2 && "bg-emerald-500"
                          )} />
                          <span className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
                            {assetClass.name}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs bg-white/95 backdrop-blur-sm border-none shadow-2xl rounded-xl p-4">
                        <div className="space-y-3">
                          <h4 className="font-medium text-gray-900">{assetClass.name}</h4>
                          <p className="text-sm text-gray-600">{assetClass.description}</p>
                          <div className="pt-3 border-t border-gray-100">
                            <p className="font-medium text-gray-900 mb-2">Suitable for:</p>
                            <ul className="space-y-1">
                              {assetClass.suitableFor.map((investor) => (
                                <li key={investor} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                                  {investor}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  {parameters.map((param) => (
                    <div key={param.key} className="flex justify-center">
                      <MatrixCell
                        value={assetClass[param.key]}
                        assetClass={assetClass}
                        parameter={param}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <p className="font-medium text-gray-900 mb-4">Risk Level Indicators</p>
        <div className="flex flex-wrap gap-6">
          {[1, 2, 3, 4, 5].map((value) => (
            <div key={value} className="flex items-center gap-3">
              <div
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden",
                  value === 1 && "bg-gradient-to-br from-emerald-50 to-emerald-200",
                  value === 2 && "bg-gradient-to-br from-green-50 to-green-200",
                  value === 3 && "bg-gradient-to-br from-amber-50 to-amber-200",
                  value === 4 && "bg-gradient-to-br from-orange-50 to-orange-200",
                  value === 5 && "bg-gradient-to-br from-rose-50 to-rose-200"
                )}
              >
                <span className={cn(
                  "text-sm font-medium",
                  value === 1 && "text-emerald-700",
                  value === 2 && "text-green-700",
                  value === 3 && "text-amber-700",
                  value === 4 && "text-orange-700",
                  value === 5 && "text-rose-700"
                )}>{value}</span>
              </div>
              <span className="text-sm text-gray-600">
                {['Very Low', 'Low', 'Moderate', 'High', 'Very High'][value - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 