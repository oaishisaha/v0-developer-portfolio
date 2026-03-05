"use client"

import { useState, type FormEvent } from "react"
import {
  Mail,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageSquare,
  Heart,
  Sparkles,
} from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github, accent: "bg-pastel-pink/40" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, accent: "bg-rose/10" },
  { label: "Email", href: "mailto:oaishi@example.com", icon: Mail, accent: "bg-soft-gold/30" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute top-10 left-10 h-48 w-48 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1DC 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #FDFD96 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pastel-pink/50 border-2 border-pastel-pink px-5 py-2 text-xs font-extrabold text-rose-deep uppercase tracking-widest mb-4 shadow-sm shadow-rose/10">
            <Heart className="h-3.5 w-3.5 text-rose fill-rose/50" />
            Contact
            <Heart className="h-3.5 w-3.5 text-rose fill-rose/50" />
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            {"Let's "}
            <span className="text-rose-deep">Connect</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Have a project in mind, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Social links */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border-2 border-pastel-pink bg-card p-5 card-cute shadow-md shadow-rose/5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${link.accent} border-2 border-pastel-pink/60 shadow-sm`}>
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <div>
                      <span className="text-base font-extrabold text-foreground group-hover:text-rose transition-colors block">
                        {link.label}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {link.label === "Email" ? "Drop me a line" : `View my ${link.label}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pastel-pink/30 group-hover:bg-rose/20 transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-rose transition-colors" />
                  </div>
                </a>
              )
            })}

            {/* Note card */}
            <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6 shadow-md shadow-rose/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-pastel-pink/20 blur-xl" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-pastel-pink/40 border border-pastel-pink">
                  <MessageSquare className="h-5 w-5 text-rose" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {"I'm currently open to "}
                  <span className="text-rose font-extrabold">collaborative projects</span>
                  {" and "}
                  <span className="text-rose font-extrabold">research opportunities</span>
                  {" in AI/ML. Let's build something amazing together."}
                </p>
              </div>
            </div>
          </div>

          {/* Email form */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-8 shadow-lg shadow-rose/5 relative overflow-hidden">
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-soft-gold/15 blur-2xl" aria-hidden="true" />
            <Sparkles className="absolute top-5 right-5 h-5 w-5 text-rose/15" aria-hidden="true" />

            <h3 className="text-xl font-extrabold text-foreground mb-8 flex items-center gap-2">
              <Send className="h-5 w-5 text-rose" />
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel-pink/40 border-2 border-pastel-pink mb-5 heart-glow">
                  <Heart className="h-7 w-7 text-rose fill-rose/30" />
                </div>
                <p className="text-lg text-foreground font-extrabold">Message Sent!</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-extrabold text-foreground mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border-2 border-pastel-pink bg-blush px-5 py-3.5 text-sm font-semibold text-foreground placeholder:text-muted-foreground/50 focus:border-rose focus:outline-none focus:ring-3 focus:ring-rose/15 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-extrabold text-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border-2 border-pastel-pink bg-blush px-5 py-3.5 text-sm font-semibold text-foreground placeholder:text-muted-foreground/50 focus:border-rose focus:outline-none focus:ring-3 focus:ring-rose/15 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-extrabold text-foreground mb-2 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-2xl border-2 border-pastel-pink bg-blush px-5 py-3.5 text-sm font-semibold text-foreground placeholder:text-muted-foreground/50 focus:border-rose focus:outline-none focus:ring-3 focus:ring-rose/15 transition-all shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="bouncy inline-flex items-center justify-center gap-3 rounded-full bg-rose px-8 py-4 text-base font-extrabold text-primary-foreground shadow-xl shadow-rose/25 hover:shadow-2xl hover:shadow-rose/35 transition-shadow"
                >
                  <Heart className="h-4 w-4 fill-current" />
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
