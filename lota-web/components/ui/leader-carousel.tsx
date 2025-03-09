import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Leader {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

interface LeaderCarouselProps {
  leaders: Leader[];
  className?: string;
}

export function LeaderCarousel({ leaders, className }: LeaderCarouselProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="carousel-layout">
        {leaders.map((leader, index) => (
          <div key={leader.name} className="carousel-item">
            <div className={cn(
              "p-6 rounded-lg transition-all duration-300 hover:shadow-md", 
              index % 2 === 0 ? "bg-white" : "bg-muted"
            )}>
              <div className="circular-profile">
                <Image
                  src={leader.imageSrc}
                  alt={leader.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-primary text-center font-bold text-xl mb-1">{leader.name}</h4>
              <p className="text-center text-dark-gray text-sm mb-3">{leader.title}</p>
              <p className="text-center text-dark-gray/80 text-sm mb-4 line-clamp-3">{leader.bio}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/about/leaders" className="btn-primary">
          Meet the Leaders
        </Link>
      </div>
    </div>
  );
}