import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, Calendar, MapPin, Users, Award, Lightbulb, Network,
  BarChart3, Building, Globe, Briefcase, Mail, HandshakeIcon, 
  GraduationCap, Users2, UserPlus2, FileText, BookOpen
} from "lucide-react"

// Import custom components
import { HeroSection } from "@/components/ui/hero-section"
import { FeatureCard } from "@/components/ui/feature-card"
import { NewsCard } from "@/components/ui/news-card"

export default function Home() {
  return (
    <div className="blur-load">
      {/* Hero Section */}
      <HeroSection
        title="League of Toronto Armenians"
        description="Uniting and empowering the Armenian community in Toronto through cultural preservation, professional development, and community engagement."
        ctaLabel="Become a Member"
        ctaHref="/membership"
        secondaryCtaLabel="Upcoming Events"
        secondaryCtaHref="/events"
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Toronto Armenian community gathering"
        height="large"
        align="center"
        hasPattern={true}
        isAnimated={true}
      />

      {/* About Us Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in-up">
            <div className="luxury-title mb-2">About LOTA</div>
            <h2 className="mb-6">Our <span className="gold-text">Mission</span></h2>
            <p className="text-lg text-dark-gray">
              The League of Toronto Armenians (LOTA) is a non-profit organization dedicated to preserving Armenian cultural heritage, 
              fostering professional connections, and creating a strong support network for Armenians in the Greater Toronto Area.
            </p>
            <div className="thin-gold-underline"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover-card animate-fade-in-up animate-delay-100">
              <div className="text-accent mb-6">
                <Globe size={36} />
              </div>
              <h3 className="text-xl mb-4">Cultural Preservation</h3>
              <p className="mb-6 text-dark-gray">
                We organize events and programs that celebrate Armenian heritage, language, arts, and traditions to ensure our cultural identity remains vibrant for future generations.
              </p>
              <Link href="/cultural-programs" className="btn-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="hover-card animate-fade-in-up animate-delay-200">
              <div className="text-accent mb-6">
                <Network size={36} />
              </div>
              <h3 className="text-xl mb-4">Professional Networking</h3>
              <p className="mb-6 text-dark-gray">
                Our business network connects Armenian professionals across industries, creating opportunities for mentorship, career advancement, and business development.
              </p>
              <Link href="/networking" className="btn-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="hover-card animate-fade-in-up animate-delay-300">
              <div className="text-accent mb-6">
                <Users size={36} />
              </div>
              <h3 className="text-xl mb-4">Community Support</h3>
              <p className="mb-6 text-dark-gray">
                We provide resources, assistance, and a sense of belonging to Armenian newcomers and established community members, fostering unity and mutual support.
              </p>
              <Link href="/community" className="btn-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="luxury-title mb-2">Join Us</div>
            <h2 className="mb-6">Upcoming <span className="gold-text">Events</span></h2>
            <div className="thin-gold-underline mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="business-card animate-fade-in-up animate-delay-100">
              <div className="text-accent mb-4">
                <Calendar size={24} />
              </div>
              <p className="elegant-caption mb-2">JUNE 15, 2025 • 6:30 PM</p>
              <h3 className="text-xl mb-3">Annual Armenian Heritage Gala</h3>
              <p className="mb-4 text-dark-gray">
                Join us for an evening celebrating Armenian culture with traditional cuisine, music, dance performances, and networking opportunities.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-accent" />
                <span className="text-dark-gray">Four Seasons Hotel, Toronto</span>
              </div>
              <Link href="/events/heritage-gala" className="btn-primary">
                Register <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="business-card animate-fade-in-up animate-delay-200">
              <div className="text-accent mb-4">
                <Calendar size={24} />
              </div>
              <p className="elegant-caption mb-2">JULY 8, 2025 • 7:00 PM</p>
              <h3 className="text-xl mb-3">Professional Networking Mixer</h3>
              <p className="mb-4 text-dark-gray">
                Connect with Armenian professionals from various industries for an evening of meaningful conversations and new business relationships.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-accent" />
                <span className="text-dark-gray">The Globe and Mail Centre</span>
              </div>
              <Link href="/events/networking-mixer" className="btn-primary">
                Register <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="business-card animate-fade-in-up animate-delay-300">
              <div className="text-accent mb-4">
                <Calendar size={24} />
              </div>
              <p className="elegant-caption mb-2">AUGUST 20, 2025 • 11:00 AM</p>
              <h3 className="text-xl mb-3">Armenian Family Picnic</h3>
              <p className="mb-4 text-dark-gray">
                A day of fun for the whole family with traditional games, music, food, and community building activities in a beautiful outdoor setting.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-accent" />
                <span className="text-dark-gray">High Park, Toronto</span>
              </div>
              <Link href="/events/family-picnic" className="btn-primary">
                Register <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/events" className="btn-primary">
              View All Events <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Membership Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="luxury-title mb-2">Join Our Community</div>
            <h2 className="mb-6">Membership <span className="gold-text">Benefits</span></h2>
            <p className="text-lg text-dark-gray max-w-2xl mx-auto">
              Become a member of LOTA to connect with the Armenian community, access exclusive events, and contribute to our cultural legacy.
            </p>
            <div className="thin-gold-underline mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up animate-delay-100">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <Users2 size={24} className="text-white" />
              </div>
              <h3 className="text-lg mb-3">Community Access</h3>
              <p className="text-dark-gray">
                Connect with a vibrant network of Armenian professionals, families, and community leaders.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="text-lg mb-3">Exclusive Events</h3>
              <p className="text-dark-gray">
                Priority access and discounted rates for cultural celebrations, workshops, and networking events.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-300">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-lg mb-3">Educational Resources</h3>
              <p className="text-dark-gray">
                Access to Armenian language classes, cultural workshops, and professional development programs.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <UserPlus2 size={24} className="text-white" />
              </div>
              <h3 className="text-lg mb-3">Mentorship</h3>
              <p className="text-dark-gray">
                Participate in our mentorship program connecting experienced professionals with newcomers and students.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/membership" className="btn-primary">
              Become a Member <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-cream py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="luxury-title mb-2">Stay Informed</div>
            <h2 className="mb-6">Latest <span className="gold-text">News</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-dark-gray">
              Keep up with the latest updates from our community, events, and Armenian news from around the world.
            </p>
            <div className="thin-gold-underline mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <NewsCard
              title="LOTA Scholarship Program Announces 2025 Recipients"
              source="LOTA News"
              date="May 15, 2025"
              excerpt="Five outstanding Armenian-Canadian students have been awarded scholarships to pursue their education in fields ranging from engineering to arts."
              category="EDUCATION"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="/news/scholarship-recipients-2025"
              className="animate-fade-in-up animate-delay-100"
            />
            
            <NewsCard
              title="Toronto Armenian Business Directory Now Available Online"
              source="LOTA Business Network"
              date="May 8, 2025"
              excerpt="Our comprehensive directory of Armenian-owned businesses in the GTA is now available online, making it easier to support our community entrepreneurs."
              category="BUSINESS"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="/news/business-directory-launch"
              className="animate-fade-in-up animate-delay-200"
            />
            
            <NewsCard
              title="Armenian Heritage Month Celebrations Announced for September"
              source="LOTA Cultural Committee"
              date="May 3, 2025"
              excerpt="A full calendar of events celebrating Armenian culture, history, and achievements has been announced for Armenian Heritage Month."
              category="CULTURE"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="/news/heritage-month-2025"
              className="animate-fade-in-up animate-delay-300"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/news" className="btn-primary">
              Read All News <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
          </svg>
        </div>
        
        <div className="container-wide relative">
          <div className="text-center mb-16">
            <div className="luxury-title mb-2 text-white/80">Community Participation</div>
            <h2 className="mb-6 text-white">Get <span className="gold-text">Involved</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              There are many ways to contribute to our community and make a positive impact while connecting with fellow Armenians.
            </p>
            <div className="thin-gold-underline mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-accent/30 p-8 bg-charcoal/50 animate-fade-in-up animate-delay-100">
              <div className="text-accent mb-6">
                <Briefcase size={36} />
              </div>
              <h3 className="text-white text-xl mb-4">Volunteer Opportunities</h3>
              <p className="text-white/70 mb-6">
                Share your time and skills with our community. We have volunteer opportunities for event planning, cultural programs, youth mentorship, and more.
              </p>
              <Link href="/volunteer" className="btn-accent">
                Volunteer <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="border border-accent/30 p-8 bg-charcoal/50 animate-fade-in-up animate-delay-200">
              <div className="text-accent mb-6">
                <BookOpen size={36} />
              </div>
              <h3 className="text-white text-xl mb-4">Educational Programs</h3>
              <p className="text-white/70 mb-6">
                Participate in or lead workshops on Armenian language, culture, history, and professional development topics for community members of all ages.
              </p>
              <Link href="/education" className="btn-accent">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="border border-accent/30 p-8 bg-charcoal/50 animate-fade-in-up animate-delay-300">
              <div className="text-accent mb-6">
                <FileText size={36} />
              </div>
              <h3 className="text-white text-xl mb-4">Committees & Leadership</h3>
              <p className="text-white/70 mb-6">
                Join one of our committees focused on cultural events, business networking, youth engagement, or community outreach to help shape our organization's future.
              </p>
              <Link href="/committees" className="btn-accent">
                Join a Committee <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white/70 hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/events" className="text-white/70 hover:text-accent transition-colors">Events</Link></li>
                <li><Link href="/news" className="text-white/70 hover:text-accent transition-colors">News</Link></li>
                <li><Link href="/about" className="text-white/70 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/cultural-programs" className="text-white/70 hover:text-accent transition-colors">Cultural Programs</Link></li>
                <li><Link href="/business-network" className="text-white/70 hover:text-accent transition-colors">Business Network</Link></li>
                <li><Link href="/youth-programs" className="text-white/70 hover:text-accent transition-colors">Youth Programs</Link></li>
                <li><Link href="/language-classes" className="text-white/70 hover:text-accent transition-colors">Language Classes</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/membership" className="text-white/70 hover:text-accent transition-colors">Membership</Link></li>
                <li><Link href="/business-directory" className="text-white/70 hover:text-accent transition-colors">Business Directory</Link></li>
                <li><Link href="/community-resources" className="text-white/70 hover:text-accent transition-colors">Community Resources</Link></li>
                <li><Link href="/donate" className="text-white/70 hover:text-accent transition-colors">Donate</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-white/70">Toronto, ON M2N 6K8</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-white/70">info@lotacanada.org</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">© 2025 League of Toronto Armenians. A non-profit organization supporting the Armenian community in the GTA.</p>
          </div>
        </div>
      </section>
    </div>
  )
}