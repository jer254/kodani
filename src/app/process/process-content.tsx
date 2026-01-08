"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import {
  Search,
  Target,
  PenTool,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description: "Understanding goals, users, and constraints",
    details: [
      "Stakeholder interviews and requirements gathering",
      "User research and persona development",
      "Competitive analysis and market research",
      "Technical constraints assessment",
      "Project scope and timeline definition",
    ],
  },
  {
    step: 2,
    icon: Target,
    title: "Strategy & UX",
    description: "Defining structure, flows, and design direction",
    details: [
      "Information architecture planning",
      "User journey mapping",
      "Wireframing and low-fidelity prototypes",
      "Content strategy development",
      "Feature prioritization",
    ],
  },
  {
    step: 3,
    icon: PenTool,
    title: "Design",
    description: "Crafting intuitive, accessible interfaces",
    details: [
      "Visual design and UI creation",
      "Design system development",
      "High-fidelity prototypes",
      "Interaction design and micro-animations",
      "Accessibility compliance (WCAG)",
    ],
  },
  {
    step: 4,
    icon: Code,
    title: "Development",
    description: "Building clean, responsive frontend solutions",
    details: [
      "Component-based architecture",
      "Responsive implementation",
      "Performance optimization",
      "API integration",
      "Code review and documentation",
    ],
  },
  {
    step: 5,
    icon: TestTube,
    title: "Testing",
    description: "Ensuring performance, usability, and quality",
    details: [
      "Cross-browser and device testing",
      "Usability testing with real users",
      "Performance and load testing",
      "Accessibility auditing",
      "Bug fixing and refinement",
    ],
  },
  {
    step: 6,
    icon: Rocket,
    title: "Launch & Support",
    description: "Deployment, monitoring, and ongoing improvement",
    details: [
      "Production deployment",
      "Performance monitoring setup",
      "Analytics implementation",
      "Post-launch optimization",
      "Ongoing maintenance and updates",
    ],
  },
];

export default function ProcessContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How We <span className="gradient-text">Work</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our process is designed to be collaborative, transparent, and efficient.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="space-y-16">
            {processSteps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 h-[calc(100%+4rem)] w-px bg-gradient-to-b from-accent via-purple-500 to-accent lg:left-1/2 lg:-translate-x-1/2" />
                )}
                
                <div className={`grid gap-8 lg:grid-cols-2 lg:gap-16`}>
                  <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-start gap-4">
                      <ScaleOnHover scale={1.1}>
                        <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background glow">
                          <item.icon className="h-7 w-7 text-accent" />
                        </div>
                      </ScaleOnHover>
                      <div>
                        <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          Step {item.step}
                        </div>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight">{item.title}</h2>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn direction={index % 2 === 0 ? "right" : "left"} delay={0.2} className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Card className="transition-all duration-300 hover:border-accent/50 hover:glow">
                      <CardContent className="pt-6">
                        <StaggerContainer className="space-y-3">
                          {item.details.map((detail) => (
                            <StaggerItem key={detail}>
                              <div className="flex items-start gap-3 group">
                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                                <span className="text-sm group-hover:text-accent transition-colors">{detail}</span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start your <span className="gradient-text">project</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s work together to bring your vision to life.
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
