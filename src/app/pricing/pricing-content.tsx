"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import { CheckCircle, ArrowRight, RefreshCw, Puzzle } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    price: "KES 60,000",
    color: "bg-green-500",
    description: "Ideal for getting online quickly with a clean, credible presence",
    timeline: "2–3 weeks",
    features: [
      "Discovery call + content checklist",
      "Custom UI/UX design",
      "Up to 5 pages/sections",
      "Mobile-first responsive build",
      "Basic SEO + metadata setup",
      "Contact form + WhatsApp/Email link",
      "Google Analytics setup",
      "Deployment + 7 days post-launch support",
    ],
    popular: false,
  },
  {
    name: "Growth Package",
    price: "KES 150,000",
    color: "bg-blue-500",
    description: "For teams that need more pages, stronger UX, and performance polish",
    timeline: "4–6 weeks",
    features: [
      "Discovery workshop + user journey mapping",
      "Custom UI/UX design",
      "Up to 10 pages/sections",
      "Software development",
      "Advanced SEO-ready structure + performance optimization",
      "Integrations: forms, newsletter, Calendly, maps",
      "Cross-browser + device testing",
      "Deployment + 14 days post-launch support",
    ],
    popular: true,
  },
  {
    name: "Product Package",
    price: "KES 300,000",
    color: "bg-purple-500",
    description: "Best for startups and products—UX strategy, flows, and a scalable UI system",
    timeline: "6–8 weeks",
    features: [
      "Product discovery + requirements definition",
      "UX strategy, user flows, and wireframes",
      "MVP UI/UX design",
      "Design system: components, tokens, patterns",
      "Software development",
      "Usability review + iteration round",
      "Deployment + production readiness checklist",
      "30 days post-launch support",
    ],
    popular: false,
  },
];

const monthlySupport = {
  name: "Monthly Support & Maintenance",
  price: "From KES 20,000 / month",
  features: [
    "Content updates",
    "Minor UI improvements",
    "Bug fixes",
    "Performance monitoring",
    "Priority support",
  ],
};

const addOns = [
  { name: "Brand identity design", price: "From KES 40,000" },
  { name: "UI/UX audit", price: "From KES 30,000" },
  { name: "Landing page", price: "From KES 25,000" },
  { name: "Additional pages/sections", price: "From KES 5,000 each" },
  { name: "Training & workshops", price: "Custom pricing" },
];

export default function PricingContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="gradient-text">Pricing</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              All packages are starting prices. Final pricing may vary depending on scope, features, and timelines.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Packages */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-7xl relative z-10">
          <StaggerContainer className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <ScaleOnHover>
                  <Card
                    className={`relative flex flex-col h-full transition-all duration-300 hover:glow ${
                      pkg.popular ? "border-accent glow" : "hover:border-accent/50"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground animate-pulse-glow">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className={`h-3 w-3 rounded-full ${pkg.color}`} />
                        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      </div>
                      <p className="text-3xl font-bold gradient-text">{pkg.price}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                      <p className="mt-1 text-xs text-accent">Timeline: {pkg.timeline}</p>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <ul className="flex-1 space-y-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 group">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                            <span className="text-sm group-hover:text-accent transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link href="/contact">
                          <Button
                            className={`w-full group ${pkg.popular ? "glow" : ""}`}
                            variant={pkg.popular ? "primary" : "outline"}
                          >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Final pricing depends on scope and requirements. Contact us for a custom quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Monthly Support */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <FloatingShapes />
        <div className="mx-auto max-w-4xl relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <RefreshCw className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{monthlySupport.name}</h2>
              </div>
              <p className="text-2xl font-bold gradient-text">{monthlySupport.price}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="transition-all duration-300 hover:border-accent/50 hover:glow">
              <CardContent className="pt-6">
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {monthlySupport.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 group">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
                      <span className="text-sm group-hover:text-accent transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-4xl relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Puzzle className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Add-On Services</h2>
              </div>
              <p className="text-muted-foreground">Optional services to enhance your project</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <ScaleOnHover scale={1.02}>
                  <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-accent/50 hover:glow">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-sm text-accent font-semibold">{addon.price}</span>
                  </div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom Projects CTA */}
      <section className="relative border-t border-border bg-card px-6 py-24 lg:px-8 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need something <span className="gradient-text">custom</span>?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              Every project is unique. Let&apos;s discuss your specific requirements and create a tailored solution.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="glow animate-shimmer group">
                  Request a Quote
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
