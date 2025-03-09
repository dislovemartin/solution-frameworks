import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Lightbulb, Network, Clock, Calendar, Globe } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { AnimatedStats } from "@/components/ui/animated-stats";
import { ProgramFinder } from "@/components/ui/program-finder";
import { VideoTestimonial } from "@/components/ui/video-testimonial";

export default function ProgramsPage() {
  return (
    <div className="blur-load">
      {/* Hero Section */}
      <HeroSection
        title="Leadership Development Programs"
        description="Comprehensive programs designed to nurture leadership skills, professional growth, and community engagement for the leaders of tomorrow."
        ctaLabel="Explore Programs"
        ctaHref="#programs"
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="#how-it-works"
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Leadership program participants"
        height="medium"
        align="center"
        hasPattern={true}
        isAnimated={true}
        overlayOpacity="bg-black/50"
      />

      {/* Stats section */}
      <section className="py-24 bg-muted/30">
        <div className="container-wide">
          <AnimatedStats
            title="Our Impact"
            description="Driving leadership excellence across Canada"
            stats={[
              { value: 3500, label: "Program Participants", suffix: "+", color: "primary" },
              { value: 150, label: "Corporate Partners", suffix: "+", color: "secondary" },
              { value: 98, label: "Satisfaction Rate", suffix: "%", color: "accent" },
              { value: 12, label: "Years of Excellence", color: "default" },
            ]}
          />
        </div>
      </section>

      {/* How it works section */}
      <section id="how-it-works" className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="text-sm text-primary font-medium uppercase tracking-wider mb-2">The Process</div>
            <h2 className="mb-6">How Our Programs Work</h2>
            <p className="text-lg">
              Our leadership development framework is designed to provide a comprehensive and transformative experience
              through a structured yet flexible approach.
            </p>
            <div className="fancy-divider"></div>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                <div className="md:text-right animate-fade-in-right">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span>Step 1</span>
                  </div>
                  <h3 className="text-2xl mb-4">Assessment & Matching</h3>
                  <p className="text-muted-foreground mb-6">
                    We begin with a comprehensive assessment of your skills, goals, and career aspirations to match you with
                    the most suitable program and mentors.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Personalized skill assessment</span>
                      <Lightbulb size={16} className="text-primary md:order-first" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Career goal alignment</span>
                      <Lightbulb size={16} className="text-primary md:order-first" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Mentor matching algorithm</span>
                      <Lightbulb size={16} className="text-primary md:order-first" />
                    </li>
                  </ul>
                </div>
                
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl hidden md:flex">
                  1
                </div>
                
                <div className="mt-6 md:mt-0 animate-fade-in-left">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/placeholder.svg?height=600&width=800" 
                      alt="Assessment process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                <div className="order-last md:order-first mt-6 md:mt-0 animate-fade-in-right">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/placeholder.svg?height=600&width=800" 
                      alt="Structured learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl hidden md:flex">
                  2
                </div>
                
                <div className="animate-fade-in-left">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span>Step 2</span>
                  </div>
                  <h3 className="text-2xl mb-4">Structured Learning</h3>
                  <p className="text-muted-foreground mb-6">
                    Participate in our curriculum of workshops, seminars, and hands-on activities designed to develop
                    specific leadership competencies and skills.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>Interactive group workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>Expert-led skill sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>Practical application exercises</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                <div className="md:text-right animate-fade-in-right">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span>Step 3</span>
                  </div>
                  <h3 className="text-2xl mb-4">Mentorship & Networking</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with experienced industry leaders who provide guidance, insights, and valuable connections
                    to help accelerate your leadership journey.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center md:justify-end gap-2">
                      <span>One-on-one mentorship</span>
                      <Network size={16} className="text-primary md:order-first" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Industry networking events</span>
                      <Network size={16} className="text-primary md:order-first" />
                    </li>
                    <li className="flex items-center md:justify-end gap-2">
                      <span>Peer collaboration opportunities</span>
                      <Network size={16} className="text-primary md:order-first" />
                    </li>
                  </ul>
                </div>
                
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl hidden md:flex">
                  3
                </div>
                
                <div className="mt-6 md:mt-0 animate-fade-in-left">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/placeholder.svg?height=600&width=800" 
                      alt="Mentorship and networking"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                <div className="order-last md:order-first mt-6 md:mt-0 animate-fade-in-right">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src="/placeholder.svg?height=600&width=800" 
                      alt="Practical application"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Circle connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl hidden md:flex">
                  4
                </div>
                
                <div className="animate-fade-in-left">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <span>Step 4</span>
                  </div>
                  <h3 className="text-2xl mb-4">Practical Application</h3>
                  <p className="text-muted-foreground mb-6">
                    Apply your new skills through real-world projects, community initiatives, and leadership challenges
                    designed to cement learning through practical experience.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>Real-world case studies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>Community service projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>Leadership challenge simulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs section */}
      <section id="programs" className="py-24 bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="text-sm text-primary font-medium uppercase tracking-wider mb-2">Our Offerings</div>
            <h2 className="mb-6">Explore Our Programs</h2>
            <p className="text-lg">
              Find the perfect program to match your leadership goals and career aspirations. From mentorship to workshops,
              we offer a variety of formats to suit your learning style and schedule.
            </p>
            <div className="fancy-divider"></div>
          </div>

          <ProgramFinder programs={demoPrograms} />
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="text-sm text-primary font-medium uppercase tracking-wider mb-2">Success Stories</div>
            <h2 className="mb-6">Hear From Our Members</h2>
            <p className="text-lg">
              Our members have experienced significant professional growth and career advancement through our programs.
              Here are some of their stories.
            </p>
            <div className="fancy-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VideoTestimonial
              name="Sarah Chen"
              title="Program Participant, 2023"
              thumbnailSrc="/placeholder.svg?height=400&width=600"
              videoSrc="#"
              quote="The mentorship and networking opportunities provided by LOTA have been instrumental in my professional development. The connections I've made and the skills I've gained have truly transformed my career trajectory."
            />
            
            <VideoTestimonial
              name="Michael Zhang"
              title="Marketing Director, Tech Innovations Inc."
              thumbnailSrc="/placeholder.svg?height=400&width=600"
              videoSrc="#"
              quote="The Executive Mentorship Program provided me with invaluable guidance at a critical point in my career. My mentor helped me navigate complex challenges and identify opportunities for growth."
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroPattern)" />
          </svg>
        </div>
        
        <div className="container-wide relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Start Your Leadership Journey?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Apply now to join our upcoming cohort of future leaders and take the first step toward accelerating your
              professional development and career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center px-6 py-3 bg-background text-foreground hover:bg-background/90 transition-colors rounded-md"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-colors rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Demo data for program finder
const demoPrograms = [
  {
    id: "1",
    title: "Executive Mentorship Program",
    description: "One-on-one mentorship with experienced industry leaders to accelerate your professional development and career growth.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/executive-mentorship",
    category: "Mentorship",
    format: "Hybrid",
    level: "Experienced",
    startDate: "April 15, 2025",
    duration: "6 months",
    capacity: 50,
    enrolled: 32,
    featured: true,
    tags: ["mentorship", "executive", "career development"]
  },
  {
    id: "2",
    title: "Leadership Workshop Series",
    description: "Develop essential leadership skills through interactive workshops led by industry experts and thought leaders.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/leadership-workshops",
    category: "Workshop",
    format: "In-person",
    level: "Intermediate",
    startDate: "May 10, 2025",
    duration: "8 weeks",
    capacity: 30,
    enrolled: 18,
    featured: false,
    tags: ["workshops", "leadership skills", "professional development"]
  },
  {
    id: "3",
    title: "Community Engagement Projects",
    description: "Participate in community service projects that make a positive impact while building valuable leadership experience.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/community-engagement",
    category: "Community Service",
    format: "In-person",
    level: "Beginner",
    startDate: "June 1, 2025",
    duration: "3 months",
    capacity: 100,
    enrolled: 67,
    featured: false,
    tags: ["community service", "leadership experience", "teamwork"]
  },
  {
    id: "4",
    title: "Digital Leadership Certification",
    description: "Comprehensive training in digital leadership skills, from data-driven decision making to leading virtual teams.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/digital-leadership",
    category: "Certification",
    format: "Online",
    level: "Advanced",
    startDate: "May 5, 2025",
    duration: "12 weeks",
    capacity: 200,
    enrolled: 124,
    featured: true,
    tags: ["digital leadership", "certification", "virtual teams"]
  },
  {
    id: "5",
    title: "Women in Leadership Summit",
    description: "Connect with successful women leaders and learn strategies for overcoming gender-specific challenges in the workplace.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/women-in-leadership",
    category: "Conference",
    format: "In-person",
    level: "All Levels",
    startDate: "July 15-17, 2025",
    duration: "3 days",
    capacity: 300,
    enrolled: 210,
    featured: false,
    tags: ["women", "diversity", "leadership summit"]
  },
  {
    id: "6",
    title: "Early Career Leadership Program",
    description: "Designed specifically for new professionals to develop foundational leadership skills early in their careers.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/early-career",
    category: "Mentorship",
    format: "Hybrid",
    level: "Beginner",
    startDate: "August 1, 2025",
    duration: "4 months",
    capacity: 75,
    enrolled: 42,
    featured: false,
    tags: ["early career", "foundation", "professional development"]
  },
  {
    id: "7",
    title: "Global Leadership Exchange",
    description: "International exchange program connecting leaders across cultures to develop global leadership competencies.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/global-exchange",
    category: "Exchange",
    format: "In-person",
    level: "Advanced",
    startDate: "September 5, 2025",
    duration: "2 weeks",
    capacity: 40,
    enrolled: 28,
    featured: true,
    tags: ["global", "international", "cultural exchange"]
  },
  {
    id: "8",
    title: "Entrepreneurial Leadership Bootcamp",
    description: "Intensive training in the leadership skills needed to successfully launch and grow entrepreneurial ventures.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    href: "/programs/entrepreneurial-bootcamp",
    category: "Workshop",
    format: "In-person",
    level: "Intermediate",
    startDate: "October 10, 2025",
    duration: "5 days",
    capacity: 60,
    enrolled: 48,
    featured: false,
    tags: ["entrepreneurship", "startup", "innovation"]
  }
];