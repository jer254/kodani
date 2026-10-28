import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              KODANI
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">Tech Solutions</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Secure, dependable software for institutions that keep records that matter.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/#products" className="text-muted-foreground transition-colors hover:text-foreground">Products</Link></li>
              <li><Link href="/#why" className="text-muted-foreground transition-colors hover:text-foreground">Why Kodani</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:enquiry.kodani@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  enquiry.kodani@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0743551170"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  0743551170
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm sm:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Kodani Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
