"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent overflow-hidden p-12 text-center glow">
            {/* Background detail */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 mb-6 shadow-lg shadow-purple-500/30"
              >
                <Mail size={24} className="text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                I&apos;m always interested in challenging problems and meaningful work.
                Let&apos;s talk about what we can build together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]"
                >
                  Get in touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-muted/50 hover:bg-muted text-foreground font-semibold rounded-xl border border-border hover:border-purple-500/30 transition-all duration-200"
                >
                  See my work
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
