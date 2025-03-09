import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, Calendar, MapPin, Users, Award, Lightbulb, Network,
  BarChart3, Building, DollarSign, TrendingUp, Globe, Newspaper,
  BarChart2, Home, Building2, LineChart, Briefcase, Mail, TrendingDown
} from "lucide-react"

// Import custom components
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { HeroSection } from "@/components/ui/hero-section"
import { FeatureCard } from "@/components/ui/feature-card"
import { NewsCard } from "@/components/ui/news-card"
import { MarketInfoCard } from "@/components/ui/market-info-card"
import { RealEstateCard } from "@/components/ui/real-estate-card"
import { TechInsightCard } from "@/components/ui/tech-insight-card"

export default function NewsPage() {
  return (
    <div className="blur-load">
      {/* Hero Section */}
      <HeroSection
        title="Canadian Business News"
        description="Your source for the latest business news, market updates, and industry insights across Canada, delivered through our automated AI-powered analytics platform."
        ctaLabel="Latest Updates"
        ctaHref="/news/latest"
        secondaryCtaLabel="Industry Reports"
        secondaryCtaHref="/news/reports"
        imageSrc="/placeholder.svg?height=1080&width=1920"
        imageAlt="Modern news concept"
        height="large"
        align="left"
        hasPattern={true}
        isAnimated={true}
      />

      {/* Business Indicators Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-xl mb-16 animate-fade-in-up">
            <div className="luxury-title mb-2">Auto-Updating Data</div>
            <h2 className="mb-6">Industry <span className="gold-text">Indicators</span></h2>
            <p className="text-lg text-dark-gray">
              Real-time updates on key business indicators across Canadian industries,
              with AI-powered analysis of economic trends affecting our members.
            </p>
            <div className="gold-underline ml-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketInfoCard
              title="Business Sentiment"
              value="72.6"
              change={4.3}
              changePercent={6.2}
              lastUpdated="Auto-Updated Today"
              className="animate-fade-in-up animate-delay-100"
            />
            <MarketInfoCard
              title="Job Creation Index"
              value="18,403"
              change={1250}
              changePercent={7.3}
              lastUpdated="Auto-Updated Today"
              className="animate-fade-in-up animate-delay-200"
            />
            <MarketInfoCard
              title="SME Growth Rate"
              value="3.7%"
              change={0.4}
              changePercent={12.1}
              lastUpdated="Auto-Updated Today"
              className="animate-fade-in-up animate-delay-300"
            />
            <MarketInfoCard
              title="Digital Adoption"
              value="86.5%"
              change={5.2}
              changePercent={6.4}
              lastUpdated="Auto-Updated Today"
              className="animate-fade-in-up animate-delay-400"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/industry-indicators" className="btn-primary">
              Full Industry Report <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry & Business News Section */}
      <section className="section-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="luxury-title mb-2">Auto-Updated Headlines</div>
            <h2 className="mb-6">Industry <span className="gold-text">Insights</span></h2>
            <div className="thin-gold-underline mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Canadian Energy Sector Transformation: Key Investment Opportunities Emerging"
              source="Financial Post"
              date="Auto-updated Today"
              excerpt="Recent policy shifts and technological advancements are creating new investment landscapes in Canada's evolving energy sector, with renewable projects attracting significant capital."
              category="ENERGY INDUSTRY"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-100"
            />
            <NewsCard
              title="AI Technology Adoption Accelerates Across Canadian Financial Institutions"
              source="The Globe and Mail"
              date="Auto-updated Today"
              excerpt="Major Canadian banks are rapidly implementing advanced AI solutions for fraud detection, personalized services, and operational efficiency, creating new standards for the industry."
              category="FINTECH"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-200"
            />
            <NewsCard
              title="Commercial Real Estate Trends: Toronto Office Space Demand Shifting to Mixed-Use Developments"
              source="Canadian Real Estate News"
              date="Auto-updated Today"
              excerpt="Post-pandemic workplace evolution continues to reshape Toronto's commercial property landscape, with hybrid work models driving demand for flexible, technology-enhanced spaces."
              category="COMMERCIAL PROPERTY"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-300"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/industry-insights" className="btn-primary">
              More Industry Insights <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Real Estate Insights */}
      <section className="py-24 bg-white relative">
        <div className="container-wide relative">
          <div className="max-w-xl mb-16">
            <div className="luxury-title mb-2">Property Market</div>
            <h2 className="mb-6">Real Estate <span className="gold-text">Insights</span></h2>
            <p className="text-lg text-dark-gray">
              Premium analysis of residential and commercial real estate trends across major Canadian and US markets,
              with forecasts and investment opportunities.
            </p>
            <div className="gold-underline ml-0"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            <div className="grid grid-cols-1 gap-8">
              <RealEstateCard
                title="Luxury Waterfront Condominium in Downtown Toronto"
                location="Toronto, ON"
                price="$2,950,000"
                priceChange="+3.5%"
                type="residential"
                size="2,150 sq ft"
                bedrooms={3}
                imageUrl="/placeholder.svg?height=600&width=800"
                listingUrl="#"
                isNew={true}
                className="animate-fade-in-up animate-delay-100"
              />
              <RealEstateCard
                title="Commercial Office Space in Vancouver Financial District"
                location="Vancouver, BC"
                price="$8,200,000"
                priceChange="+1.2%"
                type="commercial"
                size="12,500 sq ft"
                imageUrl="/placeholder.svg?height=600&width=800"
                listingUrl="#"
                className="animate-fade-in-up animate-delay-200"
              />
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="bg-secondary p-8 animate-fade-in-right animate-delay-300">
                <h3 className="mb-4">Market <span className="gold-text">Trends</span></h3>
                <p className="mb-6 text-dark-gray">
                  Canadian residential real estate prices have shown consistent growth in Q1 2025, with metropolitan areas seeing an average 4.3% increase. Commercial properties, particularly in the technology and healthcare sectors, continue to outperform other segments.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between border-b border-dark-gray/10 pb-2">
                    <span className="text-dark-gray">Toronto Residential</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={16} className="mr-1" /> 
                      <span>+4.7%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-dark-gray/10 pb-2">
                    <span className="text-dark-gray">Vancouver Residential</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={16} className="mr-1" /> 
                      <span>+3.9%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-dark-gray/10 pb-2">
                    <span className="text-dark-gray">Montreal Commercial</span>
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={16} className="mr-1" /> 
                      <span>+2.1%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-dark-gray/10 pb-2">
                    <span className="text-dark-gray">Calgary Office Space</span>
                    <div className="flex items-center text-red-600">
                      <TrendingDown size={16} className="mr-1" /> 
                      <span>-1.3%</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href="/real-estate/trends"
                  className="btn-primary"
                >
                  View Full Report
                </Link>
              </div>
              
              <div className="border-l-2 border-accent pl-6 py-3 animate-fade-in-up animate-delay-400">
                <h4 className="text-xl mb-2">Forecasted Growth Areas</h4>
                <p className="text-dark-gray mb-4">
                  Our analysis indicates substantial growth potential in these emerging markets over the next 24 months:
                </p>
                <ul className="space-y-2 text-dark-gray">
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-accent mr-2" /> Ottawa-Gatineau Technology Corridor
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-accent mr-2" /> Kitchener-Waterloo Residential
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-accent mr-2" /> Halifax Mixed-Use Developments
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-accent mr-2" /> Victoria Luxury Market
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/real-estate" className="btn-primary">
              Explore Real Estate Market <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Feed */}
      <section className="section-cream py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="luxury-title mb-2">Auto-Generated Analysis</div>
            <h2 className="mb-6">Technology <span className="gold-text">Trends</span></h2>
            <p className="text-lg max-w-2xl mx-auto text-dark-gray">
              Real-time analysis of emerging technologies, digital transformation, and innovation insights generated by our AI from leading tech publications and research papers
            </p>
            <div className="thin-gold-underline mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <TechInsightCard
              title="Emerging Web3 Regulatory Framework: Implications for Canadian Tech Companies"
              category="BLOCKCHAIN & REGULATION"
              summary="Analysis of how the evolving regulatory landscape for Web3 technologies is creating both challenges and opportunities for Canadian technology companies operating in the digital asset space."
              imageUrl="/placeholder.svg?height=400&width=600"
              readTime="Real-time"
              tags={["Web3", "Blockchain", "Regulation", "Digital Assets", "Compliance"]}
              articleUrl="#"
              className="animate-fade-in-up animate-delay-100"
            />
            
            <TechInsightCard
              title="5G Network Expansion Accelerates Across Canada: Infrastructure and Investment Analysis"
              category="TELECOMMUNICATIONS"
              summary="Comprehensive look at how the accelerated deployment of 5G networks is transforming Canadian telecommunications infrastructure and opening new avenues for tech innovation and investment."
              imageUrl="/placeholder.svg?height=400&width=600"
              readTime="Real-time"
              tags={["5G", "Telecommunications", "Infrastructure", "IoT", "Connectivity"]}
              articleUrl="#"
              className="animate-fade-in-up animate-delay-200"
            />
            
            <TechInsightCard
              title="AI Governance Models: How Canadian Tech Leaders Are Navigating Ethical Implementation"
              category="AI ETHICS"
              summary="Deep dive into how Canadian technology companies are developing governance frameworks for responsible AI development and deployment while balancing innovation with ethical considerations."
              imageUrl="/placeholder.svg?height=400&width=600"
              readTime="Real-time"
              tags={["AI Governance", "Ethics", "Responsible AI", "Tech Policy", "Innovation"]}
              articleUrl="#"
              className="animate-fade-in-up animate-delay-300"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/technology-trends" className="btn-primary">
              Explore Technology Analysis <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* North American Finance Feed */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="max-w-xl mb-16">
            <div className="luxury-title mb-2">24/7 Updates</div>
            <h2 className="mb-6">Financial <span className="gold-text">Intelligence</span></h2>
            <p className="text-lg text-dark-gray">
              Our AI continuously monitors and analyzes North American financial markets, producing real-time insights and forecasts from thousands of trusted sources.
            </p>
            <div className="gold-underline ml-0"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <NewsCard
              title="Interest Rate Trajectory Analysis: Impact on Cross-Border Investment Flows"
              source="AI-Generated from Multiple Sources"
              date="Updated Hourly"
              excerpt="In-depth analysis of how diverging monetary policies between the Federal Reserve and Bank of Canada are influencing investment capital flows across the US-Canadian border."
              category="MONETARY POLICY"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-100"
            />
            <NewsCard
              title="Technology Sector Valuation Metrics: Current Assessment and Forward Outlook"
              source="AI-Generated from Multiple Sources"
              date="Updated Hourly"
              excerpt="Comprehensive valuation analysis of North American technology companies, examining current multiples against historical trends and identifying potential market inefficiencies."
              category="EQUITIES ANALYSIS"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-200"
            />
            <NewsCard
              title="Cross-Border Real Estate Investment Trends: Institutional Capital Movements"
              source="AI-Generated from Multiple Sources"
              date="Updated Hourly"
              excerpt="Tracking patterns of institutional investment across North American real estate markets, with focus on evolving strategies of pension funds, REITs, and private equity."
              category="INVESTMENT FLOWS"
              imageUrl="/placeholder.svg?height=400&width=600"
              articleUrl="#"
              className="animate-fade-in-up animate-delay-300"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/financial-intelligence" className="btn-primary">
              Full Financial Intelligence <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}