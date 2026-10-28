import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-chalk/10 bg-board-deep">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-14 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <p className="max-w-sm text-chalk-dim">
            Kodani Tech Solutions builds dependable software for institutions that keep records that matter.
          </p>
          <ul className="space-y-3">
            <li>
              <a href="mailto:enquiry.kodani@gmail.com" className="focus-ring flex items-center gap-2 rounded text-chalk-dim transition-colors hover:text-chalk">
                <Mail className="h-4 w-4" /> enquiry.kodani@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:0743551170" className="focus-ring flex items-center gap-2 rounded text-chalk-dim transition-colors hover:text-chalk">
                <Phone className="h-4 w-4" /> 0743551170
              </a>
            </li>
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-10 select-none text-center text-[22vw] font-extrabold leading-[0.8] tracking-tighter text-transparent md:text-[17vw]"
          style={{ WebkitTextStroke: "2px rgba(238,243,238,0.14)" }}
        >
          Kodani
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-chalk/10 pt-6 text-sm sm:flex-row">
          <p className="text-chalk-dim">© {new Date().getFullYear()} Kodani Tech Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="focus-ring rounded text-chalk-dim hover:text-chalk">Privacy Policy</Link>
            <Link href="/terms" className="focus-ring rounded text-chalk-dim hover:text-chalk">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
