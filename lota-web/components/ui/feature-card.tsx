import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  badge?: string;
  icon?: React.ReactNode;
  variant?: "default" | "elevated" | "bordered" | "minimal";
  aspectRatio?: "square" | "video" | "wide" | "portrait";
  className?: string;
  imagePosition?: "top" | "background";
  isAnimated?: boolean;
}

export function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  badge,
  icon,
  variant = "default",
  aspectRatio = "video",
  className,
  imagePosition = "top",
  isAnimated = true,
}: FeatureCardProps) {
  
  // Aspect ratio variants
  const aspectRatioVariants = {
    square: "aspect-square",
    video: "aspect-video", 
    wide: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
  };
  
  // Variant classes
  const variantClasses = {
    default: "hover-card hover:shadow-lg",
    elevated: "elevated-section shadow-md hover:shadow-xl",
    bordered: "border border-border rounded-lg p-5 hover:border-accent/50 transition-colors",
    minimal: "bg-transparent",
  };
  
  const imagePositionClasses = {
    top: "mb-5",
    background: "absolute inset-0 z-0",
  };
  
  return (
    <Link
      href={href}
      className={cn(
        "block group relative",
        variantClasses[variant],
        className,
        isAnimated && "animate-fade-in-up"
      )}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden rounded-md", 
        aspectRatioVariants[aspectRatio],
        imagePositionClasses[imagePosition]
      )}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className={cn(
            "object-cover transition-all duration-500", 
            isAnimated && "group-hover:scale-105",
            variant === "minimal" && "rounded-md"
          )}
        />
        
        {/* Overlay for background image variant */}
        {imagePosition === "background" && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        )}
        
        {/* Badge if provided */}
        {badge && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
            {badge}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className={cn(
        "flex flex-col",
        imagePosition === "background" && "relative z-10 h-full flex justify-end p-5 text-white"
      )}>
        {/* Icon if provided */}
        {icon && (
          <div className="text-accent mb-4">
            {icon}
          </div>
        )}
        
        <h3 className={cn(
          "text-xl font-bold mb-3 group-hover:text-accent transition-colors uppercase",
          imagePosition === "background" && "text-white group-hover:text-white"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "line-clamp-3 mb-4 text-foreground/70",
          imagePosition === "background" && "text-white/90"
        )}>
          {description}
        </p>
        
        <div className={cn(
          "mt-auto flex items-center text-sm font-medium text-primary",
          imagePosition === "background" && "text-white"
        )}>
          <span>View Article</span>
          <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}