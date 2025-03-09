import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  overlayOpacity?: string;
  className?: string;
  height?: "full" | "large" | "medium" | "small";
  align?: "left" | "center" | "right";
  titleClassName?: string;
  textColor?: "light" | "dark";
  hasPattern?: boolean;
  isAnimated?: boolean;
}

export function HeroSection({
  title,
  description,
  ctaLabel,
  ctaHref = "/",
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt,
  overlayOpacity = "bg-black/40",
  className,
  height = "large",
  align = "left",
  titleClassName,
  textColor = "light",
  hasPattern = false,
  isAnimated = true,
}: HeroSectionProps) {
  // Height variants
  const heightVariants = {
    full: "h-screen",
    large: "h-[90vh]",
    medium: "h-[70vh]",
    small: "h-[50vh]",
  };

  // Alignment variants
  const alignVariants = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  // Text color variants
  const textVariants = {
    light: "text-white",
    dark: "text-foreground",
  };

  return (
    <section
      className={cn(
        "relative flex items-center",
        heightVariants[height],
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            "object-cover",
            isAnimated && "transition-transform duration-[20s] hover:scale-110"
          )}
          priority
        />

        {/* Overlay - using blue to transparent gradient */}
        <div className={cn("absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50", overlayOpacity)} />

        {/* Optional pattern overlay */}
        {hasPattern && (
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "container-wide relative z-10 flex flex-col",
          alignVariants[align],
          textVariants[textColor]
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          {isAnimated ? (
            <>
              <h1 
                className={cn(
                  "animate-fade-in-up animate-delay-100 text-white text-5xl lg:text-[48px] font-bold uppercase tracking-wide",
                  titleClassName
                )}
              >
                {title}
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-fade-in-up animate-delay-300 opacity-90 text-white font-sans">
                {description}
              </p>
              {(ctaLabel || secondaryCtaLabel) && (
                <div className={cn(
                  "flex gap-4 animate-fade-in-up animate-delay-500",
                  align === "center" && "justify-center",
                  align === "right" && "justify-end"
                )}>
                  {ctaLabel && (
                    <Link
                      href={ctaHref}
                      className="btn-accent btn-animated inline-flex items-center"
                    >
                      {ctaLabel}
                    </Link>
                  )}
                  {secondaryCtaLabel && (
                    <Link
                      href={secondaryCtaHref || "/"}
                      className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
                    >
                      {secondaryCtaLabel}
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <h1 className={cn("text-white text-5xl lg:text-[48px] font-bold uppercase tracking-wide", titleClassName)}>{title}</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
                {description}
              </p>
              {(ctaLabel || secondaryCtaLabel) && (
                <div className={cn(
                  "flex gap-4",
                  align === "center" && "justify-center",
                  align === "right" && "justify-end"
                )}>
                  {ctaLabel && (
                    <Link
                      href={ctaHref}
                      className="btn-accent inline-flex items-center"
                    >
                      {ctaLabel}
                    </Link>
                  )}
                  {secondaryCtaLabel && (
                    <Link
                      href={secondaryCtaHref || "/"}
                      className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
                    >
                      {secondaryCtaLabel}
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Bottom gradient for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent z-[1]"></div>
    </section>
  );
}