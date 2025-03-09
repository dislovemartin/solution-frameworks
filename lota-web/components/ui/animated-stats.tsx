"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from 'react-intersection-observer';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: "primary" | "secondary" | "accent" | "default";
  duration?: number; // Animation duration in ms
}

interface AnimatedStatsProps {
  stats: Stat[];
  title?: string;
  description?: string;
  layout?: "grid" | "row";
  className?: string;
}

export function AnimatedStats({
  stats,
  title,
  description,
  layout = "grid",
  className,
}: AnimatedStatsProps) {
  // Reference for intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "bg-card rounded-xl p-8 shadow-sm border border-border",
        className
      )}
    >
      {/* Header content */}
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h3 className="text-2xl font-medium mb-2">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      {/* Stats */}
      <div 
        className={cn(
          layout === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
            : "flex flex-wrap justify-around gap-8"
        )}
      >
        {stats.map((stat, index) => (
          <AnimatedStat 
            key={`${stat.label}-${index}`}
            stat={stat} 
            animate={inView} 
            delay={index * 150} 
          />
        ))}
      </div>
    </div>
  );
}

// Individual stat component with animation
function AnimatedStat({ 
  stat, 
  animate, 
  delay = 0 
}: { 
  stat: Stat; 
  animate: boolean;
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  // Default color variant classes
  const colorVariants = {
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    accent: "text-accent",
    default: "text-foreground",
  };
  
  // Animation duration
  const duration = stat.duration || 2000; // Default 2 seconds
  
  // Animation function using requestAnimationFrame
  const animateValue = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smoother animation (easeOutExpo)
    const easeOutExpo = (t: number) => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t);
    const easedProgress = easeOutExpo(progress);
    
    // Calculate current value
    const currentValue = Math.floor(easedProgress * stat.value);
    setDisplayValue(currentValue);
    
    // Continue animation if not complete
    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animateValue);
    }
  };
  
  // Start or reset animation when animate prop changes
  useEffect(() => {
    if (animate) {
      // Add delay before starting animation
      const timeoutId = setTimeout(() => {
        startTimeRef.current = null;
        animationRef.current = requestAnimationFrame(animateValue);
      }, delay);
      
      return () => {
        clearTimeout(timeoutId);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      setDisplayValue(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [animate, delay]);
  
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center p-4 transition-all duration-300 opacity-0 transform translate-y-4",
        animate && "opacity-100 transform-none",
        `transition-delay-${delay}`
      )}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      <div className={cn("text-4xl md:text-5xl font-bold mb-2 font-serif", colorVariants[stat.color || "default"])}>
        {stat.prefix}{displayValue.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-muted-foreground">{stat.label}</div>
    </div>
  );
}