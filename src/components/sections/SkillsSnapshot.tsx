"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "Prisma", "REST APIs"],
  },
  {
    category: "Infrastructure",
    skills: ["Vercel", "AWS", "Docker", "GitHub Actions", "Supabase", "Cloudflare"],
  },
  {
    category: "Tooling",
    skills: ["Git", "VS Code", "Figma", "Postman", "Linear", "Notion"],
  },
];

const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "20+", label: "Projects shipped" },
  { value: "5k+", label: "GitHub contributions" },
  { value: "10+", label: "Happy clients" },
];

export function SkillsSnapshot() {
  return (
    <section className="py-24 bg-card/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Toolkit"
          title="Technologies I work with"
          description="A curated stack — not just technologies I know, but tools I've used to ship production software."
          className="mb-16"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-colors">
                <p className="text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={0.1 + i * 0.1}>
              <div className="p-5 rounded-2xl bg-card border border-border h-full hover:border-purple-500/20 transition-all duration-200 group">
                <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-lg hover:text-foreground hover:bg-muted/80 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
