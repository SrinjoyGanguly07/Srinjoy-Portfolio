"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, BookOpen, Code } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const interests = [
  { icon: Code, label: "Open source contributor" },
  { icon: Coffee, label: "Coffee-driven developer" },
  { icon: BookOpen, label: "Technical writer" },
  { icon: MapPin, label: "Based in India" },
];

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <AnimatedSection delay={0}>
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-4">
              About Me
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              I build things that{" "}
              <span className="text-gradient">matter</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hey — I&apos;m Srinjoy. I&apos;m a full-stack developer who has spent the last three years
                obsessing over the craft of building software. Not just software that works, but
                software that <span className="text-foreground font-medium">feels right</span>.
              </p>
              <p>
                I grew up in India, fell in love with programming at 16, and haven&apos;t stopped since.
                My sweet spot is the frontend-backend boundary — the place where design
                decisions meet engineering constraints, and where the difference between
                good and great is often invisible to the user but deeply felt.
              </p>
              <p>
                When I&apos;m not shipping code, I&apos;m writing about it. I maintain a newsletter
                where I share what I&apos;m learning, what I&apos;m building, and occasional strong
                opinions about TypeScript.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-8 flex flex-wrap gap-2">
            {interests.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted border border-border text-sm text-muted-foreground"
              >
                <Icon size={14} className="text-purple-400" />
                {label}
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* Avatar / visual */}
        <AnimatedSection delay={0.2} direction="left">
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Avatar placeholder */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-muted border border-purple-500/20 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl font-bold text-gradient mb-2">SG</div>
                  <p className="text-sm text-muted-foreground">Srinjoy Ganguly</p>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-foreground">3+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-8 bg-card border border-border rounded-xl px-4 py-2 shadow-lg"
              >
                <p className="text-xs font-semibold text-foreground">20+ Projects</p>
                <p className="text-xs text-muted-foreground">Shipped</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
