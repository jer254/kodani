import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { GradientOrbs, DotPattern } from "@/components/ui/geometric-patterns";

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="gradient-text">Terms of Service</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These terms outline how you can use our website and how we work with clients on projects.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative border-t border-border px-6 py-16 lg:px-8 overflow-hidden">
        <DotPattern className="opacity-30" />
        <div className="mx-auto max-w-3xl relative z-10">
          <div className="space-y-10">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">1. Acceptance of Terms</h2>
                <p className="mt-4 text-muted-foreground">
                  By accessing or using the KODANI website, you agree to these Terms of Service. If you do not agree,
                  please do not use the website.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">2. Services & Project Engagements</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Information on this website is for general guidance. Project work typically starts after we agree on
                    scope, deliverables, timeline, and pricing (often documented in a proposal, statement of work, or invoice).
                  </p>
                  <p>
                    Any timelines shown on our pricing page are estimates and may change depending on feedback cycles,
                    project complexity, and client readiness (content availability, approvals, third‑party access, etc.).
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">3. Client Responsibilities</h2>
                <div className="mt-4 space-y-3 text-muted-foreground">
                  <p>To keep a project on track, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information and required assets/content on time</li>
                    <li>Review deliverables and provide feedback within agreed timelines</li>
                    <li>Ensure you have rights to any content you supply (images, text, trademarks, etc.)</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">4. Payments</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Unless otherwise agreed in writing, projects may require an upfront deposit before work begins.
                    Remaining payments may be milestone-based or due on delivery.
                  </p>
                  <p>
                    Late payments may pause work until the account is brought up to date.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">5. Intellectual Property</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    Unless otherwise agreed, you retain ownership of your brand assets and content. For project deliverables,
                    ownership and usage rights are typically transferred after full payment.
                  </p>
                  <p>
                    We may reuse general, non-confidential know-how, frameworks, or techniques developed during work.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">6. Website Use</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    You agree not to misuse this website (for example: attempting to break security, scrape data, or
                    disrupt service).
                  </p>
                  <p>
                    We may modify or discontinue parts of the website at any time.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">7. Limitation of Liability</h2>
                <p className="mt-4 text-muted-foreground">
                  To the maximum extent permitted by law, KODANI will not be liable for indirect, incidental, or
                  consequential damages resulting from your use of the website or services.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">8. Contact</h2>
                <p className="mt-4 text-muted-foreground">
                  Questions about these terms? Email{" "}
                  <a href="mailto:enquiry.kodani@gmail.com" className="text-accent hover:underline">
                    enquiry.kodani@gmail.com
                  </a>
                  {" "}or call{" "}
                  <a href="tel:0743551170" className="text-accent hover:underline">
                    0743551170
                  </a>
                  .
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  You can also review our{" "}
                  <Link href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
