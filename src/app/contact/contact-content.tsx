"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion-wrapper";
import { GradientOrbs, FloatingShapes, DotPattern } from "@/components/ui/geometric-patterns";
import { Mail, Phone, Clock, Send, Linkedin, Twitter, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kodani.com",
    href: "mailto:hello@kodani.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

type FormStatus =
  | { state: "idle"; message?: string }
  | { state: "loading"; message?: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        state: "success",
        message: "Thanks for reaching out! We'll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have a project in mind or need help improving your digital presence? Let&apos;s talk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative border-t border-border px-6 py-24 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Start a Project</h2>
                <p className="mt-2 text-muted-foreground">
                  Tell us about your project, goals, and timeline.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium group-focus-within:text-accent transition-colors">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium group-focus-within:text-accent transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium group-focus-within:text-accent transition-colors">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="budget" className="block text-sm font-medium group-focus-within:text-accent transition-colors">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                      >
                        <option value="">Select a range</option>
                        <option value="< $5,000">Less than $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium group-focus-within:text-accent transition-colors">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  {status.state !== "loading" && status.message ? (
                    <p
                      className={`text-sm ${
                        status.state === "error"
                          ? "text-destructive"
                          : "text-emerald-500"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status.state === "loading"}
                    className="w-full sm:w-auto glow animate-shimmer group"
                  >
                    <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {status.state === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">
                  Prefer to reach out directly? Here&apos;s how you can contact us.
                </p>

                <StaggerContainer className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <StaggerItem key={item.label}>
                      <ScaleOnHover scale={1.02}>
                        <div className="flex items-start gap-4 group">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 glow transition-transform group-hover:scale-110">
                            <item.icon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.label}</p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-muted-foreground transition-colors hover:text-accent"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-12">
                  <h3 className="text-sm font-semibold">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    {socialLinks.map((social) => (
                      <ScaleOnHover key={social.label} scale={1.1}>
                        <a
                          href={social.href}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-all hover:border-accent hover:bg-accent/10 hover:glow"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </ScaleOnHover>
                    ))}
                  </div>
                </div>

                {/* FAQ Card */}
                <FadeIn delay={0.4}>
                  <Card className="mt-12 transition-all duration-300 hover:border-accent/50 hover:glow">
                    <CardHeader>
                      <CardTitle>Frequently Asked</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="group">
                        <h4 className="font-medium group-hover:text-accent transition-colors">What&apos;s your typical project timeline?</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Most projects take 4-12 weeks depending on scope and complexity.
                        </p>
                      </div>
                      <div className="group">
                        <h4 className="font-medium group-hover:text-accent transition-colors">Do you work with international clients?</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Yes, we work with clients globally and accommodate different time zones.
                        </p>
                      </div>
                      <div className="group">
                        <h4 className="font-medium group-hover:text-accent transition-colors">What happens after the project is complete?</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          We offer ongoing support and maintenance packages to ensure your product continues to perform.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
