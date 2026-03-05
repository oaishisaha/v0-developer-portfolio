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
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:alex@example.com",
    icon: Mail,
  },
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
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-5 w-5 text-neon" />
            <span className="text-sm font-mono text-neon uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-3 max-w-xl text-slate-400 leading-relaxed">
            Have a project in mind, or just want to chat? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Social & info */}
          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition-all hover:border-neon/50 hover:bg-slate-800/80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neon/10 border border-neon/20">
                          <Icon className="h-4 w-4 text-neon" />
                        </div>
                        <span className="text-sm font-medium text-slate-300 group-hover:text-foreground transition-colors">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-neon transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick note */}
            <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
              <p className="text-sm text-slate-400 leading-relaxed">
                I&apos;m currently open to{" "}
                <span className="text-neon-light font-medium">
                  internship opportunities
                </span>{" "}
                and{" "}
                <span className="text-neon-light font-medium">
                  collaborative research projects
                </span>{" "}
                in the AI/ML space. Let&apos;s build something amazing together.
              </p>
            </div>
          </div>

          {/* Email form */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon/10 border border-neon/20 mb-4">
                  <Send className="h-6 w-6 text-neon" />
                </div>
                <p className="text-foreground font-semibold">Message Sent!</p>
                <p className="mt-1 text-sm text-slate-400">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300 mb-1.5 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300 mb-1.5 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300 mb-1.5 block"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-foreground placeholder:text-slate-500 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neon/25 transition-all hover:bg-neon-light hover:shadow-neon/40"
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
