"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search, Filter, ChevronDown, X } from "lucide-react";
import { Program3DCard } from "./program-card-3d";

// Define program type
interface Program {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  category: string;
  format: string;
  level: string;
  startDate?: string;
  duration?: string;
  capacity?: number;
  enrolled?: number;
  featured?: boolean;
  tags: string[];
}

interface ProgramFinderProps {
  programs: Program[];
  className?: string;
}

export function ProgramFinder({ programs, className }: ProgramFinderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    category: [],
    format: [],
    level: [],
  });
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(programs);
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["category"]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Extract all possible filter options from programs
  const filterOptions = {
    category: Array.from(new Set(programs.map(p => p.category))),
    format: Array.from(new Set(programs.map(p => p.format))),
    level: Array.from(new Set(programs.map(p => p.level))),
  };
  
  // Toggle filter expansion
  const toggleFilterExpansion = (filterType: string) => {
    setExpandedFilters(prev => 
      prev.includes(filterType) 
        ? prev.filter(f => f !== filterType) 
        : [...prev, filterType]
    );
  };
  
  // Toggle a filter value
  const toggleFilter = (filterType: string, value: string) => {
    setActiveFilters(prev => {
      const updatedFilters = { ...prev };
      
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(v => v !== value);
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }
      
      return updatedFilters;
    });
  };
  
  // Clear a specific filter type
  const clearFilterType = (filterType: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: [],
    }));
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setActiveFilters({
      category: [],
      format: [],
      level: [],
    });
    setSearchTerm("");
  };
  
  // Count active filters
  const countActiveFilters = () => {
    return Object.values(activeFilters).reduce(
      (count, filterValues) => count + filterValues.length, 
      0
    );
  };
  
  // Apply filters and search
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate a short delay for loading state
    const timeoutId = setTimeout(() => {
      let filtered = [...programs];
      
      // Apply search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(program => 
          program.title.toLowerCase().includes(term) ||
          program.description.toLowerCase().includes(term) ||
          program.tags.some(tag => tag.toLowerCase().includes(term))
        );
      }
      
      // Apply filters
      Object.entries(activeFilters).forEach(([filterType, values]) => {
        if (values.length > 0) {
          filtered = filtered.filter(program => 
            values.includes(program[filterType as keyof Program] as string)
          );
        }
      });
      
      setFilteredPrograms(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm, activeFilters, programs]);
  
  return (
    <div className={cn("space-y-8", className)}>
      {/* Search and filter section */}
      <div className="space-y-4">
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="search"
            className="block w-full pl-10 pr-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/30 focus:outline-none transition-shadow"
            placeholder="Search programs by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Filter section */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filters</span>
              {countActiveFilters() > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {countActiveFilters()}
                </span>
              )}
            </div>
            
            {countActiveFilters() > 0 && (
              <button
                className="text-sm text-primary hover:underline"
                onClick={clearAllFilters}
              >
                Clear all
              </button>
            )}
          </div>
          
          <div className="space-y-2">
            {/* Category filter */}
            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div key={filterType} className="border-b border-border pb-2">
                <button
                  className="flex items-center justify-between w-full text-left py-1"
                  onClick={() => toggleFilterExpansion(filterType)}
                >
                  <div className="flex items-center gap-2">
                    <span className="capitalize">{filterType}</span>
                    {activeFilters[filterType].length > 0 && (
                      <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {activeFilters[filterType].length}
                      </span>
                    )}
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform", 
                      expandedFilters.includes(filterType) ? "transform rotate-180" : ""
                    )} 
                  />
                </button>
                
                {expandedFilters.includes(filterType) && (
                  <div className="pl-2 pt-2 space-y-1">
                    {options.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded text-primary focus:ring-primary/30"
                          checked={activeFilters[filterType].includes(option)}
                          onChange={() => toggleFilter(filterType, option)}
                        />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Active filters display */}
        {countActiveFilters() > 0 && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([filterType, values]) =>
              values.map(value => (
                <div 
                  key={`${filterType}-${value}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium"
                >
                  <span className="capitalize">{filterType}:</span> {value}
                  <button
                    className="ml-1 text-muted-foreground hover:text-foreground"
                    onClick={() => toggleFilter(filterType, value)}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      
      {/* Results section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">
            {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'} found
          </h3>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm">Sort by:</label>
            <select
              id="sort"
              className="text-sm border border-border rounded-md bg-background px-2 py-1"
            >
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        
        {/* Loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div 
                key={i} 
                className="rounded-xl overflow-hidden animate-pulse"
              >
                <div className="aspect-[16/9] bg-muted"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="h-4 bg-muted rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredPrograms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <Program3DCard
                    key={program.id}
                    title={program.title}
                    description={program.description}
                    imageSrc={program.imageSrc}
                    href={program.href}
                    category={program.category}
                    startDate={program.startDate}
                    capacity={program.capacity}
                    enrolled={program.enrolled}
                    featured={program.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-medium mb-2">No programs found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search terms</p>
                <button
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  onClick={clearAllFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}