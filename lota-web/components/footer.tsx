import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Knowledge", href: "/knowledge" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "Mentorship Program", href: "/programs/mentorship" },
    { name: "Leadership Workshop Series", href: "/programs/workshops" },
    { name: "Community Engagement", href: "/programs/community" },
    { name: "Executive Mentorship", href: "/programs/executive-mentorship" },
  ],
  knowledge: [
    { name: "Articles", href: "/knowledge" },
    { name: "Research", href: "/knowledge/research" },
    { name: "Resources", href: "/knowledge/resources" },
    { name: "Case Studies", href: "/knowledge/case-studies" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide mx-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <span className="sr-only">LOTA - Leaders of Tomorrow Association</span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lota%20logo%202x2%20transparent%20background-Dw3JA9RWXP7FFu8azCE58kA9jVmnoe.png"
                alt="LOTA"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              Fostering professional growth and leadership development across Canada.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">123 Leadership Avenue, Vancouver, BC V6B 1A9</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+1 (604) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@lotacanada.org</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Knowledge</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.knowledge.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Subscribe</h3>
                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  Stay updated with our latest news and events.
                </p>
                <form className="mt-6 flex max-w-md gap-x-4">
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Leaders of Tomorrow Association. All rights reserved.
            </p>
            <ul role="list" className="flex flex-wrap gap-x-8">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xs leading-5 text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

