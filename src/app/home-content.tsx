import { Hero } from "@/components/home/hero";
import { Showcase } from "@/components/home/showcase";
import { Why } from "@/components/home/why";
import { ContactForm } from "@/components/home/contact-form";
import { Mail, Phone } from "lucide-react";

const timetable = [
  { slot: "In use", name: "SMIS", note: "School management for the CBC", live: true },
  { slot: "Next", name: "In the works", note: "Our second product", live: false },
  { slot: "Later", name: "Still being drawn up", note: "More tools for institutions", live: false },
];

export default function HomeContent() {
  return (
    <>
      <Hero />

      <section id="products" className="scroll-mt-16 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold leading-[0.98] tracking-tighter sm:text-6xl">
              SMIS runs the whole school year
            </h2>
            <p className="mt-5 text-lg leading-8 text-chalk-dim">
              School Management Information System: admissions, academics, fees and parent communication in one
              place, built around Kenya&apos;s Competency Based Curriculum. Pilot schools are welcome.
            </p>
          </div>
          <div className="mt-14">
            <Showcase />
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-extrabold tracking-tight">On our timetable</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {timetable.map((t, i) => (
                <div
                  key={t.slot}
                  className={`chalk-box p-6 ${t.live ? "bg-chalk/[0.06]" : ""} ${i === 1 ? "sm:rotate-1" : i === 2 ? "sm:-rotate-1" : ""}`}
                >
                  <p className={`hand text-2xl leading-none ${t.live ? "!text-accent" : "!text-chalk-dim"}`}>{t.slot}</p>
                  <p className="mt-3 text-2xl font-extrabold tracking-tight">{t.name}</p>
                  <p className="mt-1 text-chalk-dim">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="paper scroll-mt-16 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Why />
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-extrabold leading-[0.98] tracking-tighter sm:text-6xl">
              Let&apos;s talk about your school
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-chalk-dim">
              Ask for a demo of SMIS, or tell us what your institution needs next. We reply within 24 hours.
            </p>
            <ul className="mt-8 space-y-4 text-lg">
              <li>
                <a href="mailto:enquiry.kodani@gmail.com" className="focus-ring inline-flex items-center gap-3 rounded hover:text-accent">
                  <Mail className="h-5 w-5 text-accent" /> enquiry.kodani@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0743551170" className="focus-ring inline-flex items-center gap-3 rounded hover:text-accent">
                  <Phone className="h-5 w-5 text-accent" /> 0743551170 (calls and WhatsApp)
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
