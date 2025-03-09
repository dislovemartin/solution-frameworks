import React from "react";
import { ArrowUpRight, ArrowDownRight, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketInfoCardProps {
  title: string;
  value: string;
  change: number;
  changePercent: number;
  lastUpdated?: string;
  industry?: string;
  className?: string;
}

export function MarketInfoCard({
  title,
  value,
  change,
  changePercent,
  lastUpdated,
  industry,
  className
}: MarketInfoCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className={cn("business-card", className)}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium text-dark-gray/80 uppercase tracking-wider">{title}</h4>
        {industry && (
          <span className="elegant-caption">{industry}</span>
        )}
      </div>
      
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-light text-charcoal">{value}</span>
        <div className={cn(
          "flex items-center text-sm",
          isPositive ? "text-green-600" : "text-red-600"
        )}>
          <span>{isPositive ? "+" : ""}{change.toFixed(2)}</span>
          <span className="mx-1">|</span>
          <span>{isPositive ? "+" : ""}{changePercent.toFixed(2)}%</span>
          {isPositive ? <TrendingUp size={16} className="ml-1" /> : <TrendingDown size={16} className="ml-1" />}
        </div>
      </div>
      
      {lastUpdated && (
        <div className="mt-4 pt-2 border-t border-dark-gray/10 text-dark-gray/60 text-xs">
          Last updated: {lastUpdated}
        </div>
      )}
    </div>
  );
}