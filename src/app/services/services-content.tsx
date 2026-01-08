"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import {
  Palette,
  Code,
  Brush,
  Lightbulb,
  Search,
  Layout,
  Smartphone,
  RefreshCw,
  Globe,
  Monitor,
  Settings,
  Zap,
  PenTool,
  Image as ImageIcon,
  Layers,
  Presentation,
  Rocket,
  Target,
  Wrench,
  Headphones,
  ArrowRight,
} from "lucide-react";

const serviceImages = [
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
];

const services = [
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Clear, intuitive experiences that improve usability and engagement.",
    features: [
      { icon: Search, text: "User research & analysis" },
      { icon: Layout, text: "Wireframing & prototyping" },
      { icon: Smartphone, text: "Web & app interface design" },
      { icon: RefreshCw, text: "UX audits & redesigns" },
    ],
  },
  {
    id: "frontend",
    icon: Code,
    title: "Frontend Development",
    description: "Fast, scalable, and user-friendly interfaces built with modern technologies.",
    features: [
      { icon: Globe, text: "Responsive websites" },
      { icon: Monitor, text: "Web application interfaces" },
      { icon: Settings, text: "Admin dashboards & portals" },
      { icon: Zap, text: "Performance optimization" },
    ],
  },
  {
    id: "branding",
    icon: Brush,
    title: "Digital Branding & Graphics",
    description: "Visual consistency that builds trust and recognition.",
    features: [
      { icon: PenTool, text: "Brand identity design" },
      { icon: ImageIcon, text: "Digital marketing visuals" },
      { icon: Layers, text: "UI assets & iconography" },
      { icon: Presentation, text: "Presentation & pitch decks" },
    ],
  },
  {
    id: "consulting",
    icon: Lightbulb,
    title: "Product & Consulting",
    description: "Practical solutions that help ideas move from concept to reality.",
    features: [
      { icon: Rocket, text: "MVP design & development" },
      { icon: Target, text: "Product strategy support" },
      { icon: Wrench, text: "System UI implementation" },
      { icon: Headphones, text: "Ongoing maintenance" },
    ],
  },
];

export default function ServicesContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className="gradient-text">Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer flexible, design-led digital services tailored to your goals, industry, and users.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/30 bg-accent/5">
                        <service.icon className="h-7 w-7 text-accent" />
                      </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight">{service.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
                    
                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        What We Do
                      </h3>
                      <StaggerContainer className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <StaggerItem key={feature.text}>
                            <div className="flex items-center gap-3 group">
                              <feature.icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                              <span className="group-hover:text-accent transition-colors">{feature.text}</span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn direction={index % 2 === 0 ? "right" : "left"} delay={0.2} className={`flex items-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-full rounded-2xl overflow-hidden border border-border bg-card">
                    <NextImage
                      src={serviceImages[index]}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </FadeIn>
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
              Ready to get <span className="gradient-text">started</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s discuss your project and find the right solution for your needs.
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
