import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "UI/UX Design", href: "/services#uiux" },
    { name: "Frontend Development", href: "/services#frontend" },
    { name: "Digital Branding", href: "/services#branding" },
    { name: "Product Consulting", href: "/services#consulting" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              KODANI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Design-led digital solutions for modern businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@kodani.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  hello@kodani.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} KODANI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
