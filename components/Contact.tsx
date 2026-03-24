"use client";

import { useState } from "react";

const FORMSPREE_ID = "xeerylgb";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-14 md:py-24 border-t border-ink-200 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">

          <div>
            <p className="section-label">Contact</p>
            <h2 className="font-display text-3xl md:text-display-md text-ink-900 mb-4 md:mb-6 leading-tight">
              Let&apos;s build something
            </h2>
            <p className="text-ink-500 text-sm leading-relaxed mb-8 md:mb-10 max-w-sm">
              I&apos;m open to full-time roles, freelance projects, and consulting
              engagements. If you have a project in mind or a position to fill, reach out.
            </p>

            <div className="space-y-4">
              <ContactLink label="Email" value="obanovwejoseph@gmail.com" href="mailto:obanovwejoseph@gmail.com" />
              <ContactLink label="Phone" value="+234 816 137 5240" href="tel:+2348161375240" />
              <ContactLink label="GitHub" value="github.com/joekaro" href="https://github.com/joekaro" external={true} />
              <ContactLink label="LinkedIn" value="linkedin.com/in/joseph-obanovwe" href="https://linkedin.com" external={true} />
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="p-6 md:p-8 bg-green-50 border border-green-200 rounded text-center">
                <p className="font-display text-xl text-ink-900 mb-2">Message received</p>
                <p className="text-ink-500 text-sm">
                  Thanks for reaching out. I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                {status === "error" && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
                    <p className="text-red-700 text-sm font-medium">Something went wrong.</p>
                    <p className="text-red-500 text-xs mt-1">
                      Email me directly at obanovwejoseph@gmail.com
                    </p>
                    <button onClick={() => setStatus("idle")} className="mt-2 font-mono text-xs text-red-500 underline">
                      Try again
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-ink-500 mb-2 uppercase tracking-wide-sm">
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full border border-ink-200 rounded px-4 py-3 text-sm text-ink-900 bg-ink-50 focus:outline-none focus:border-amber transition-colors placeholder:text-ink-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-ink-500 mb-2 uppercase tracking-wide-sm">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className="w-full border border-ink-200 rounded px-4 py-3 text-sm text-ink-900 bg-ink-50 focus:outline-none focus:border-amber transition-colors placeholder:text-ink-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-ink-500 mb-2 uppercase tracking-wide-sm">
                      Message
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project or role..."
                      className="w-full border border-ink-200 rounded px-4 py-3 text-sm text-ink-900 bg-ink-50 focus:outline-none focus:border-amber transition-colors placeholder:text-ink-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit" disabled={status === "sending"}
                    className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-ink-400 text-xs text-center">
                    Or email directly:{" "}
                    <a href="mailto:obanovwejoseph@gmail.com" className="text-amber">
                      obanovwejoseph@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactLink({ label, value, href, external }: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 group"
    >
      <span className="font-mono text-xs text-ink-400 w-14 pt-0.5 shrink-0">{label}</span>
      <span className="text-sm text-ink-700 group-hover:text-amber transition-colors">{value}</span>
    </a>
  );
}
