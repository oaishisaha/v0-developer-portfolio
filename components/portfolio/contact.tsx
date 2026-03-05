"use client"

import { useState, type FormEvent } from "react"
import {
  Mail,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:oaishi@example.com", icon: Mail },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-pastel-pink/40 px-4 py-1 text-xs font-bold text-rose-deep uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl text-balance">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg mx-auto">
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
                  className="group flex items-center justify-between rounded-3xl border-2 border-pastel-pink bg-card p-5 card-cute"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pastel-pink/40">
                      <Icon className="h-5 w-5 text-rose" />
                    </div>
                    <span className="text-sm font-bold text-foreground group-hover:text-rose transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-rose transition-colors" />
                </a>
              )
            })}

            {/* Note card */}
            <div className="rounded-3xl border-2 border-pastel-pink bg-card p-5">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-rose shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I&apos;m currently open to{" "}
                  <span className="text-rose font-bold">collaborative projects</span>{" "}
                  and{" "}
                  <span className="text-rose font-bold">research opportunities</span>{" "}
                  in AI/ML. Let&apos;s build something amazing together.
                </p>
              </div>
            </div>
          </div>

          {/* Email form */}
          <div className="rounded-3xl border-2 border-pastel-pink bg-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pastel-pink/40 mb-4">
                  <Send className="h-6 w-6 text-rose" />
                </div>
                <p className="text-foreground font-bold">Message Sent!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-foreground mb-1.5 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border-2 border-pastel-pink bg-blush px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-foreground mb-1.5 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border-2 border-pastel-pink bg-blush px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-foreground mb-1.5 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-2xl border-2 border-pastel-pink bg-blush px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bouncy inline-flex items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-rose/25"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
