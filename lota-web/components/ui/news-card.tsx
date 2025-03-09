import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  articleUrl: string;
  className?: string;
}

export function NewsCard({
  title,
  source,
  date,
  excerpt,
  category,
  imageUrl,
  articleUrl,
  className,
}: NewsCardProps) {
  return (
    <div className={cn("news-card group", className)}>
      <div className="mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={225}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <span className="elegant-caption">{category}</span>
        <div className="flex items-center text-dark-gray/60 text-xs">
          <Calendar size={12} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-dark-gray/80 text-sm mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-dark-gray/10">
        <span className="text-dark-gray/60 text-xs">Source: {source}</span>
        <Link 
          href={articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Read More <ExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
}