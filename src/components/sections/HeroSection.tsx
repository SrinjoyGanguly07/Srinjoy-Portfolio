"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";

const socialLinks = [
  { href: "https://github.com/srinjoyganguly07", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/srinjoyganguly", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/srinjoyganguly", icon: TwitterIcon, label: "Twitter" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(263 70% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(263 70% 65%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Availability badge */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm text-muted-foreground mb-8 group hover:border-purple-500/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for new projects
              <Sparkles size={14} className="text-purple-400" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4"
          >
            Srinjoy{" "}
            <span className="text-gradient">Ganguly</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 tracking-tight"
          >
            Full-Stack Developer & Digital Craftsman
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-10"
          >
            I build{" "}
            <span className="text-foreground font-medium">fast, accessible, and visually precise</span>{" "}
            web applications. From pixel-perfect UIs to scalable backend systems — I care deeply about the
            details that make software feel{" "}
            <span className="text-gradient font-medium">genuinely great</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl border border-border hover:border-purple-500/30 transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 border border-border hover:border-purple-500/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <div className="h-4 w-px bg-border mx-1" />
            <span className="text-xs text-muted-foreground">@srinjoyganguly07</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
