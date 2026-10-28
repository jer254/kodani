"use client";

import { useState } from "react";

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const emptyForm = { name: "", email: "", company: "", message: "" };

const line =
  "mt-1 w-full border-0 border-b-2 border-biro/40 bg-transparent px-1 py-2 text-base text-ink placeholder:text-ink/40 focus:border-biro focus:outline-none";
const label = "hand text-[22px] leading-none";

export function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
    <form onSubmit={handleSubmit} className="space-y-6 rotate-1 rounded-sm bg-paper p-7 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={line} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Your email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={line} />
        </div>
      </div>
      <div>
        <label htmlFor="company" className={label}>School or organisation (optional)</label>
        <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={line} />
      </div>
      <div>
        <label htmlFor="message" className={label}>How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${line} resize-none leading-8`}
        />
      </div>

      {status.state === "success" || status.state === "error" ? (
        <p role="status" className={`text-sm font-medium ${status.state === "error" ? "text-stamp" : "text-emerald-700"}`}>
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status.state === "loading"}
        className="focus-ring rounded-full bg-ink px-8 py-3 text-base font-bold text-paper transition-transform hover:-rotate-2 disabled:opacity-60"
      >
        {status.state === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
