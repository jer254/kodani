"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { GradientOrbs, DotPattern } from "@/components/ui/geometric-patterns";
import {
  GraduationCap,
  BookOpenCheck,
  Wallet,
  MessagesSquare,
  ShieldCheck,
  History,
  Lock,
  MapPin,
  Palette,
  Mail,
  Phone,
  Send,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const smisFeatures = [
  { icon: BookOpenCheck, title: "CBC assessment & report forms", text: "Marks, grading, rankings and printable report forms." },
  { icon: Wallet, title: "Fees & payments", text: "Fee structures, invoices and payments with a full audit trail." },
  { icon: MessagesSquare, title: "Parent portal & SMS", text: "Parents see only their own children's results and balances." },
  { icon: History, title: "Permanent student history", text: "Admission to graduation, kept as an unbroken record." },
];

const reasons = [
  { icon: History, title: "Records you can trust", text: "Results and fees are never silently overwritten. Corrections are recorded, not erased." },
  { icon: Lock, title: "Secure by design", text: "Each institution's data is kept separate, and access follows the role of the user." },
  { icon: MapPin, title: "Built for Kenya", text: "Made around the CBC, local payment habits and the way schools actually work." },
  { icon: Palette, title: "Design-led", text: "Clear, simple screens that busy staff and parents can use without training." },
];

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const emptyForm = { name: "", email: "", company: "", message: "" };

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all";

export default function HomeContent() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "loading" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.error || "Failed to send message.");
      setStatus({ state: "success", message: "Thanks for reaching out! We'll get back to you shortly." });
      setForm(emptyForm);
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-24 lg:px-8">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">Kodani Tech Solutions</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Software that keeps{" "}
              <span className="gradient-text">institutions running</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              We build secure, dependable software for Kenyan organisations. Our first product, SMIS,
              runs a school from admission to graduation.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <a href="#products">
                <Button size="lg" className="w-full glow sm:w-auto">Explore SMIS</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Request a demo</Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative scroll-mt-16 overflow-hidden border-t border-border px-6 py-24 lg:px-8">
        <DotPattern className="opacity-40" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our products</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                One product today, more on the way.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 rounded-2xl border border-accent/40 bg-card p-8 glow lg:p-12">
              <div className="grid gap-10 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-bold tracking-tight">SMIS</h3>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Pilot schools welcome
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">School Management Information System</p>
                  <p className="mt-4 text-muted-foreground">
                    One system for admissions, academics, fees and parent communication, built around
                    Kenya&apos;s Competency Based Curriculum.
                  </p>
                  <a href="#contact" className="mt-6 inline-block">
                    <Button>
                      Request a demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
                  {smisFeatures.map((f) => (
                    <div key={f.title} className="rounded-xl border border-border bg-background p-5">
                      <f.icon className="h-5 w-5 text-accent" />
                      <h4 className="mt-3 font-semibold">{f.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-dashed border-border p-6">
              <Sparkles className="h-6 w-6 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">More products coming soon</h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;re building more tools for institutions. Get in touch to hear first.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Kodani */}
      <section id="why" className="relative scroll-mt-16 overflow-hidden border-t border-border bg-card px-6 py-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why <span className="gradient-text">Kodani</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Institutions run on records. We build software that treats them that way.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <r.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-border px-6 py-24 lg:px-8">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-5xl">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Want a demo of SMIS, or to hear about what we build next? Send us a message.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-12 lg:grid-cols-5">
            <FadeIn className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium">School / Organisation</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder="Optional" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className={inputClass} placeholder="How can we help?" />
                </div>

                {status.state === "success" || status.state === "error" ? (
                  <p role="status" className={`text-sm ${status.state === "error" ? "text-red-400" : "text-emerald-500"}`}>
                    {status.message}
                  </p>
                ) : null}

                <Button type="submit" size="lg" disabled={status.state === "loading"} className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  {status.state === "loading" ? "Sending..." : "Send message"}
                </Button>
              </form>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                <a href="mailto:enquiry.kodani@gmail.com" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-muted-foreground transition-colors group-hover:text-accent">enquiry.kodani@gmail.com</p>
                  </div>
                </a>
                <a href="tel:0743551170" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone / WhatsApp</p>
                    <p className="text-muted-foreground transition-colors group-hover:text-accent">0743551170</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Response time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
