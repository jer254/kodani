"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    client: "Retail Client",
    category: "UI/UX Design",
    challenge: "Create a seamless shopping experience that increases conversion rates and reduces cart abandonment.",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    client: "Tech Startup",
    category: "Software Development",
    challenge: "Build a complex analytics dashboard that presents data clearly without overwhelming users.",
    tools: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    client: "Fintech Company",
    category: "Digital Branding",
    challenge: "Establish a professional brand identity that conveys trust and innovation.",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=450&fit=crop",
  },
  {
    id: "mobile-app",
    title: "Mobile App Redesign",
    client: "Health & Wellness",
    category: "UI/UX Design",
    challenge: "Improve user engagement and retention through a complete app redesign.",
    tools: ["Figma", "Protopie", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
  },
  {
    id: "corporate-website",
    title: "Corporate Website",
    client: "Professional Services",
    category: "Software Development",
    challenge: "Create a modern website that effectively communicates the company's expertise and services.",
    tools: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop",
  },
  {
    id: "product-mvp",
    title: "Product MVP",
    client: "Startup Founder",
    category: "Product & Consulting",
    challenge: "Transform a product idea into a functional MVP ready for user testing and investor demos.",
    tools: ["Figma", "Next.js", "Supabase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
  },
];

export default function WorkContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className="gradient-text">Work</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A collection of projects and concept designs demonstrating our design process, technical execution, and problem-solving approach.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-7xl relative z-10">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ScaleOnHover>
                  <Card className="group overflow-hidden transition-all duration-300 hover:border-accent/50 hover:glow h-full">
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
                      <p className="text-sm font-medium text-accent">{project.category}</p>
                      <CardTitle className="flex items-center gap-2">
                        {project.title}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.challenge}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium transition-colors group-hover:bg-accent/20"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Study Structure Info */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        <div className="mx-auto max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Case Study Structure</h2>
            <p className="mt-4 text-muted-foreground">
              Each project follows a structured approach to ensure clarity and measurable outcomes.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-8 space-y-6">
            {[
              { num: 1, title: "Challenge", desc: "What problem needed solving" },
              { num: 2, title: "Solution", desc: "How KODANI approached it" },
              { num: 3, title: "Process", desc: "Design & development steps" },
              { num: 4, title: "Outcome", desc: "Final results and impact" },
            ].map((item) => (
              <StaggerItem key={item.num}>
                <div className="flex gap-4 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent glow transition-transform group-hover:scale-110">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a project in <span className="gradient-text">mind</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="glow animate-shimmer group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
