import type React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  title: string
  testimonial: string
  avatarSrc?: string
  avatarFallback?: string
  rating?: number
  variant?: "default" | "elevated" | "bordered" | "minimal"
  isHighlighted?: boolean
}

export function TestimonialCard({
  name,
  title,
  testimonial,
  avatarSrc,
  avatarFallback,
  rating,
  variant = "default",
  isHighlighted = false,
  className,
  ...props
}: TestimonialCardProps) {
  // Variant classes
  const variantClasses = {
    default: "bg-card",
    elevated: "elevated-section",
    bordered: "border-2 bg-card border-primary/10 hover:border-primary/20 transition-colors",
    minimal: "bg-transparent border-none shadow-none",
  };
  
  return (
    <Card 
      className={cn(
        "relative h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]", 
        variantClasses[variant],
        isHighlighted && "bg-secondary",
        className
      )} 
      {...props}
    >
      {/* Large quote mark in background */}
      <div className="absolute top-4 right-4 text-accent">
        <QuoteIcon size={48} strokeWidth={1} />
      </div>
      
      <CardHeader className="relative">
        {rating && (
          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < rating ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-4 w-4", i < rating ? "text-accent fill-accent" : "text-muted-foreground")}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        )}
        <blockquote className="text-lg italic leading-relaxed relative text-foreground">
          "{testimonial}"
        </blockquote>
      </CardHeader>
      
      <CardFooter className="flex items-center gap-4 pt-6 mt-4 border-t">
        <Avatar className="w-12 h-12 border-2 border-accent/20">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground">{avatarFallback || name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-primary text-lg">{name}</p>
          <p className="text-sm text-accent font-medium">{title}</p>
        </div>
      </CardFooter>
      
      {/* Highlight indicator */}
      {isHighlighted && (
        <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-md"></div>
      )}
    </Card>
  )
}

