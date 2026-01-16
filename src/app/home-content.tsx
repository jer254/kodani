"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import {
  Palette,
  Code,
  Brush,
  Users,
  Building2,
  GraduationCap,
  User,
  Lightbulb,
  Target,
  MessageSquare,
  Award,
  TrendingUp,
  Search,
  PenTool,
  Rocket,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "We design user-centered interfaces that are intuitive, accessible, and aligned with your business goals.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "We build fast, responsive, and scalable software experiences using modern technologies.",
  },
  {
    icon: Brush,
    title: "Digital Branding & Graphics",
    description: "We create visual identities and digital assets that communicate clearly and build trust.",
  },
];

const clients = [
  { icon: Building2, name: "Small & Medium Businesses" },
  { icon: Rocket, name: "Startups & Founders" },
  { icon: Users, name: "NGOs & Organizations" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: User, name: "Personal Brands" },
];

const whyKodani = [
  { icon: Lightbulb, title: "Design-Driven Approach", description: "We start with users, not just features" },
  { icon: Code, title: "Technical Expertise", description: "Built by a team with strong engineering foundations" },
  { icon: MessageSquare, title: "Clear Communication", description: "No jargon, no confusion" },
  { icon: Award, title: "Quality Craftsmanship", description: "Clean design, clean code" },
  { icon: TrendingUp, title: "Real-World Experience", description: "Solutions informed by real business needs" },
];

const process = [
  { step: 1, icon: Search, title: "Discovery", description: "Understanding your goals, users, and challenges" },
  { step: 2, icon: Target, title: "Strategy & UX", description: "Defining structure, flows, and experience" },
  { step: 3, icon: PenTool, title: "Design", description: "Creating intuitive and visually appealing interfaces" },
  { step: 4, icon: Code, title: "Development", description: "Building responsive and performant software solutions" },
  { step: 5, icon: Rocket, title: "Launch & Support", description: "Deployment, testing, and ongoing improvements" },
];

const projects = [
  { title: "KODANI", category: "Website", image: "https://image.thum.io/get/width/1200/https://www.kodani.tech" },
  { title: "EcoWave Tours", category: "Website", image: "https://image.thum.io/get/width/1200/https://www.ecowavetours.com" },
  { title: "CohortSync", category: "Web App", image: "https://image.thum.io/get/width/1200/https://www.cohortsync.com" },
];

export default function HomeContent() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-24 lg:px-8 overflow-hidden">
        <AnimatedBackground />
        <GradientOrbs />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Design-led digital solutions for{" "}
              <span className="gradient-text">modern businesses</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We design and build polished websites and digital brands that feel great to use—and help you win trust, leads, and growth.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button size="lg" className="w-full glow animate-shimmer sm:w-auto">Start a Project</Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">View Our Work</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-50" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine design thinking, clean code, and strategic insight to build digital products that are both functional and beautiful.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ScaleOnHover>
                  <Card className="group transition-all duration-300 hover:border-accent/50 hover:glow h-full">
                    <CardHeader>
                      <div>
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                      <CardTitle className="mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Help */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Work With</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our solutions are designed for organizations that value clarity, usability, and long-term impact.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <StaggerItem key={client.name}>
                <ScaleOnHover scale={1.05}>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:border-accent/50 hover:glow">
                    <client.icon className="h-6 w-6 text-accent" />
                    <span className="font-medium">{client.name}</span>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why KODANI */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <GradientOrbs />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose <span className="gradient-text">KODANI</span></h2>
            </div>
          </FadeIn>
          
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyKodani.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex gap-4 group">
                  <div className="animate-pulse-glow">
                    <item.icon className="h-6 w-6 shrink-0 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
            </div>
          </FadeIn>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-accent via-purple-500 to-accent lg:left-1/2" />
              <div className="space-y-12">
                {process.map((item, index) => (
                  <FadeIn key={item.step} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <div
                      className={`relative flex items-start gap-6 ${
                        index % 2 === 0 ? "lg:flex-row lg:justify-end lg:pr-[calc(50%+2rem)]" : "lg:flex-row lg:justify-start lg:pl-[calc(50%+2rem)]"
                      }`}
                    >
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                        <ScaleOnHover scale={1.1}>
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background glow">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                        </ScaleOnHover>
                        <div>
                          <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                            Step {item.step}
                          </div>
                          <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                          <p className="mt-1 text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A selection of projects and concepts showcasing our approach to design and development.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <Link href="/work" className="group block">
                  <ScaleOnHover>
                    <Card className="overflow-hidden transition-all duration-300 hover:border-accent/50 hover:glow">
                      <div className="aspect-video relative bg-secondary overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardHeader>
                        <p className="text-sm text-accent">{project.category}</p>
                        <CardTitle className="flex items-center gap-2">
                          {project.title}
                          <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </ScaleOnHover>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/work">
                <Button variant="outline" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <GradientOrbs />
        
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something <span className="gradient-text">meaningful</span>?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss your project and see how we can help bring your vision to life.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="glow animate-shimmer">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
