import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { GradientOrbs, DotPattern } from "@/components/ui/geometric-patterns";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="relative px-6 py-24 lg:px-8 lg:py-32 overflow-hidden">
        <GradientOrbs />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We respect your privacy and are committed to protecting the information you share with KODANI.
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
                <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
                <p className="mt-4 text-muted-foreground">
                  This Privacy Policy explains what data we collect, how we use it, and the choices you have.
                  By using our website or contacting us, you agree to the practices described here.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Information We Collect</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We may collect information you provide directly, such as your name, email address, company/organization,
                    budget range, and project details when you submit a message via our contact form.
                  </p>
                  <p>
                    We may also collect basic technical data (such as device/browser type and approximate location) through
                    analytics tools to understand site performance and improve user experience.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">How We Use Your Information</h2>
                <div className="mt-4 space-y-3 text-muted-foreground">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to enquiries and provide project estimates or proposals</li>
                    <li>Deliver services and communicate project updates</li>
                    <li>Improve our website, services, and user experience</li>
                    <li>Maintain security and prevent fraud/abuse</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Sharing of Information</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    We do not sell your personal information. We may share information with trusted service providers
                    (for example: email delivery, analytics, hosting) only as needed to operate our website and provide
                    services.
                  </p>
                  <p>
                    We may disclose information if required by law or to protect the rights, safety, and security of KODANI,
                    our users, or others.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Data Retention</h2>
                <p className="mt-4 text-muted-foreground">
                  We keep enquiry information only as long as necessary for communication, service delivery, legal compliance,
                  and legitimate business needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Your Choices</h2>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <p>
                    You may request access to, correction of, or deletion of your personal information by contacting us.
                    You can also ask us to stop contacting you at any time.
                  </p>
                  <p>
                    For analytics/cookies, your browser settings may allow you to block or delete cookies. Note that some
                    site functionality may be affected.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
                <p className="mt-4 text-muted-foreground">
                  For privacy questions or requests, contact us at{" "}
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
                  <Link href="/terms" className="text-accent hover:underline">
                    Terms of Service
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
