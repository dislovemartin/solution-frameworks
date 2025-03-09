import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Users, ArrowRight, Calendar } from "lucide-react";

interface Program3DCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  category?: string;
  startDate?: string;
  capacity?: number;
  enrolled?: number;
  featured?: boolean;
  className?: string;
}

export function Program3DCard({
  title,
  description,
  imageSrc,
  href,
  category,
  startDate,
  capacity,
  enrolled,
  featured = false,
  className,
}: Program3DCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Card 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    // Max rotation is 5 degrees
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((y - centerY) / centerY) * -5;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative h-full perspective-1000 transition-all duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        resetRotation();
      }}
    >
      <Link href={href}>
        <div 
          className={cn(
            "relative h-full rounded-xl overflow-hidden bg-card border-border transform-gpu transition-all duration-300",
            featured ? "border-2 border-primary/20" : "border", 
            hovering ? "shadow-xl" : "shadow-md"
          )}
          style={{ 
            transform: hovering 
              ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)` 
              : "rotateX(0deg) rotateY(0deg) scale(1)"
          }}
        >
          {/* Featured badge */}
          {featured && (
            <div className="absolute z-20 top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
              Featured
            </div>
          )}
          
          {/* Image */}
          <div className="aspect-[16/9] relative">
            <Image 
              src={imageSrc} 
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Category badge */}
            {category && (
              <div className="absolute z-10 bottom-4 left-4 bg-background/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded">
                {category}
              </div>
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2 line-clamp-2">{title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
            
            {/* Program Details */}
            <div className="space-y-2 mb-4">
              {startDate && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span>Starts {startDate}</span>
                </div>
              )}
              
              {(capacity && enrolled) && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>{enrolled} enrolled</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{capacity - enrolled} spots left</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full" 
                      style={{width: `${(enrolled / capacity) * 100}%`}}
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA */}
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight 
                size={16} 
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
          
          {/* Shine effect on hover */}
          <div 
            className={cn(
              "absolute inset-0 pointer-events-none transition-opacity duration-500",
              hovering ? "opacity-40" : "opacity-0"
            )}
            style={{
              background: "linear-gradient(45deg, transparent 25%, rgba(255, 255, 255, 0.1) 50%, transparent 75%)",
              backgroundSize: "200% 200%",
              animation: hovering ? "shine 1.5s ease-in-out infinite" : "none"
            }}
          />
        </div>
      </Link>
      
      {/* Reflection */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 h-20 transition-opacity duration-300 pointer-events-none",
          hovering ? "opacity-30" : "opacity-0"
        )}
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)",
          transform: "rotateX(180deg) translateY(20px) scale(0.9, 0.5)"
        }}
      />
      
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}