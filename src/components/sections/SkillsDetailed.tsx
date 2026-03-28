"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillsWithLevel = [
  { name: "TypeScript / JavaScript", level: 95, category: "Language" },
  { name: "React & Next.js", level: 95, category: "Framework" },
  { name: "Node.js & Express", level: 85, category: "Backend" },
  { name: "PostgreSQL & Prisma", level: 80, category: "Database" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "Docker & DevOps", level: 70, category: "Infrastructure" },
  { name: "Python & Django", level: 65, category: "Backend" },
  { name: "GraphQL", level: 75, category: "API" },
];

export function SkillsDetailed() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Skills"
        title="What I bring to the table"
        description="Honest self-assessment — not a marketing exercise. These are the technologies where I'm genuinely strong."
        className="mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {skillsWithLevel.map((skill, i) => (
          <AnimatedSection key={skill.name} delay={0.1 + i * 0.06}>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground">· {skill.category}</span>
                </div>
                <span className="text-sm font-bold text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
