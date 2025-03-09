import React from "react";
import Image from "next/image";
import { MapPin, Home, ArrowRight, Ruler, BedDouble } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface RealEstateCardProps {
  title: string;
  location: string;
  price: string;
  priceChange?: string;
  type: "residential" | "commercial" | "investment";
  size?: string;
  bedrooms?: number;
  imageUrl: string;
  listingUrl: string;
  isNew?: boolean;
  className?: string;
}

export function RealEstateCard({
  title,
  location,
  price,
  priceChange,
  type,
  size,
  bedrooms,
  imageUrl,
  listingUrl,
  isNew = false,
  className
}: RealEstateCardProps) {
  return (
    <div className={cn("luxury-card group", className)}>
      <div className="relative mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs uppercase tracking-wider font-medium">
            New
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-charcoal text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="flex items-center text-dark-gray/70 text-sm mb-2">
        <MapPin size={14} className="mr-1" />
        <span>{location}</span>
      </div>
      
      <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          {size && (
            <div className="flex items-center text-dark-gray/70 text-sm">
              <Ruler size={14} className="mr-1" />
              <span>{size}</span>
            </div>
          )}
          {bedrooms && (
            <div className="flex items-center text-dark-gray/70 text-sm">
              <BedDouble size={14} className="mr-1" />
              <span>{bedrooms} BD</span>
            </div>
          )}
        </div>
        <div className="elegant-caption">{type}</div>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-dark-gray/10">
        {priceChange && (
          <div className="text-sm text-dark-gray/70">
            <span className={priceChange.startsWith("+") ? "text-green-600" : "text-red-600"}>
              {priceChange}
            </span> from last month
          </div>
        )}
        <Link
          href={listingUrl}
          className="btn-link"
        >
          View Details <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}