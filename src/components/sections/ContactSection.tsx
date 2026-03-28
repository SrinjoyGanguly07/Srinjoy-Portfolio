"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const socialLinks = [
  {
    href: "https://github.com/srinjoyganguly07",
    icon: GithubIcon,
    label: "GitHub",
    handle: "@srinjoyganguly07",
    description: "See what I'm building",
  },
  {
    href: "https://linkedin.com/in/srinjoyganguly",
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Srinjoy Ganguly",
    description: "Connect professionally",
  },
  {
    href: "https://twitter.com/srinjoyganguly",
    icon: TwitterIcon,
    label: "Twitter",
    handle: "@srinjoyganguly",
    description: "Follow my thoughts",
  },
  {
    href: "mailto:hello@srinjoyganguly.dev",
    icon: Mail,
    label: "Email",
    handle: "hello@srinjoyganguly.dev",
    description: "Best for project enquiries",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something"
        description="I'm currently available for freelance projects and open to discussing full-time opportunities. If you have something interesting, I'd love to hear about it."
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left column — info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">India · Available remotely worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Response time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24–48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Availability</p>
                  <p className="text-sm text-muted-foreground">Open to new projects & roles</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Social links */}
          <AnimatedSection delay={0.2}>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Find me elsewhere
              </p>
              <div className="space-y-3">
                {socialLinks.map(({ href, icon: Icon, label, handle, description }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-purple-500/20 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-muted-foreground group-hover:text-purple-400 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{handle}</p>
                      <p className="text-xs text-muted-foreground">{description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right column — form */}
        <AnimatedSection delay={0.2} direction="left" className="lg:col-span-3">
          <div className="p-8 rounded-2xl bg-card border border-border">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all appearance-none"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="freelance">Freelance project</option>
                    <option value="fulltime">Full-time opportunity</option>
                    <option value="collaboration">Open source collaboration</option>
                    <option value="consulting">Technical consulting</option>
                    <option value="other">Just saying hi</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and what you're hoping to build..."
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/50 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20"
                >
                  {status === "submitting" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  No spam, no newsletters. Just a conversation.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
