"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import { Lightbulb, Award, Heart, Target, TrendingUp, User } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Clarity", description: "Simple, intuitive solutions" },
  { icon: Award, title: "Craft", description: "Attention to detail in design and code" },
  { icon: Heart, title: "Integrity", description: "Honest communication and transparency" },
  { icon: Target, title: "Impact", description: "Work that delivers measurable value" },
  { icon: TrendingUp, title: "Growth", description: "Continuous learning and improvement" },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="gradient-text">KODANI</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              KODANI is a design-led technology company focused on creating intuitive digital experiences. We work at the intersection of design, development, and strategy to help organizations build products that people actually enjoy using.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Approach</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  We believe great digital products are built when design and technology work together. Every project begins with understanding users, defining clarity, and delivering solutions that are scalable and purposeful.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Our methodology combines strategic thinking with hands-on execution, ensuring that every solution we deliver is not just visually appealing but also technically sound and user-focused.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="flex items-center justify-center">
                <ScaleOnHover>
                  <div className="aspect-square w-full max-w-md relative rounded-2xl overflow-hidden glow">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                      alt="Team collaboration"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </ScaleOnHover>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="right" className="flex items-center justify-center lg:order-2">
              <div className="relative">
                <ScaleOnHover>
                  <div className="aspect-square w-64 rounded-2xl overflow-hidden relative glow">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                      alt="Founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScaleOnHover>
                <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-accent/50 bg-background glow animate-pulse-glow">
                  <User className="h-8 w-8 text-accent" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="lg:order-1">
              <p className="text-sm font-medium text-accent">Leadership</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Founder & Lead Consultant</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                KODANI was founded by a computer science graduate and IT trainer with hands-on experience in frontend development, UI/UX design, and graphic design.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                With a background in education and real-world system development, KODANI brings clarity, structure, and professionalism to every project.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <ScaleOnHover>
                  <Card className="text-center transition-all duration-300 hover:border-accent/50 hover:glow h-full">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="mt-4">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
