import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechInsightCardProps {
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
  articleUrl: string;
  className?: string;
}

export function TechInsightCard({
  title,
  category,
  summary,
  imageUrl,
  readTime,
  tags,
  articleUrl,
  className
}: TechInsightCardProps) {
  return (
    <div className={cn("luxury-card group", className)}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="sm:w-1/3 mb-4 sm:mb-0">
          <div className="relative overflow-hidden w-full h-36 sm:h-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="sm:w-2/3">
          <div className="flex items-center justify-between mb-3">
            <span className="elegant-caption">{category}</span>
            <span className="text-xs text-dark-gray/60">{readTime} read</span>
          </div>
          
          <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-dark-gray/80 text-sm mb-4 line-clamp-2">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs bg-secondary px-2 py-0.5 text-dark-gray/80"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-3 border-t border-dark-gray/10">
            <div className="flex gap-2">
              <button className="text-dark-gray/60 hover:text-primary transition-colors">
                <Bookmark size={16} />
              </button>
              <button className="text-dark-gray/60 hover:text-primary transition-colors">
                <Share2 size={16} />
              </button>
            </div>
            
            <Link
              href={articleUrl}
              className="btn-link"
            >
              Read Article <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}