"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoTestimonialProps {
  name: string;
  title: string;
  thumbnailSrc: string;
  videoSrc: string;
  quote: string;
  className?: string;
}

export function VideoTestimonial({
  name,
  title,
  thumbnailSrc,
  videoSrc,
  quote,
  className,
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl bg-card border border-border shadow-md transition-all duration-300 animate-fade-in-up",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video container */}
      <div 
        className="relative aspect-video cursor-pointer"
        onClick={togglePlay}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={thumbnailSrc}
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
        />
        
        {/* Thumbnail overlay (shown when video is not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Image
              src={thumbnailSrc}
              alt={`${name} testimonial thumbnail`}
              fill
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Play button */}
            <button
              className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary transition-all duration-300 transform hover:scale-110"
              aria-label="Play video"
            >
              <Play size={24} fill="currentColor" />
            </button>
          </div>
        )}
        
        {/* Video controls */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
            showControls || isPlaying ? "opacity-100" : "opacity-0"
          )}
        >
          <button
            onClick={togglePlay}
            className="text-white hover:text-primary transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <button
            onClick={toggleMute}
            className="text-white hover:text-primary transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <blockquote className="font-serif italic text-lg mb-4 text-foreground/90">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image
              src={thumbnailSrc}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}