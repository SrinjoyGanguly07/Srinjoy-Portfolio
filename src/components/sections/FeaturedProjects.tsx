"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "Nexus — AI Productivity Suite",
    description:
      "A full-stack SaaS platform that uses AI to help teams manage tasks, summarise meetings, and automate workflows. Processes 10,000+ tasks/day for 500+ active users.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    github: "https://github.com/srinjoyganguly07/nexus",
    live: "https://nexus-app.vercel.app",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    featured: true,
  },
  {
    title: "Pulse — Real-Time Analytics",
    description:
      "A lightweight analytics dashboard that replaces Google Analytics with privacy-first, real-time insights. No cookies. No tracking. Just clean data.",
    tags: ["React", "ClickHouse", "WebSockets", "Rust"],
    github: "https://github.com/srinjoyganguly07/pulse",
    live: "https://pulse-analytics.io",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    featured: true,
  },
  {
    title: "Forge — Dev Tool CLI",
    description:
      "A TypeScript-first CLI toolkit that scaffolds production-ready Next.js apps with opinionated defaults — testing, CI/CD, and Docker included out of the box.",
    tags: ["Node.js", "TypeScript", "CLI", "Docker"],
    github: "https://github.com/srinjoyganguly07/forge-cli",
    live: "https://www.npmjs.com/package/forge-cli",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    featured: false,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects I'm proud of"
        description="A handful of things I've built — each one a chance to solve a real problem with clean code and thoughtful design."
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured large card */}
        <AnimatedSection delay={0.1} className="lg:row-span-2">
          <ProjectCard project={projects[0]} size="large" />
        </AnimatedSection>
        {projects.slice(1).map((project, i) => (
          <AnimatedSection key={project.title} delay={0.2 + i * 0.1}>
            <ProjectCard project={project} size="small" />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all projects
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedSection>
    </section>
  );
}

function ProjectCard({
  project,
  size,
}: {
  project: (typeof projects)[0];
  size: "large" | "small";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/5 hover:border-purple-500/20 ${size === "large" ? "min-h-[360px]" : "min-h-[180px]"}`}
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

      <div className={`relative p-6 flex flex-col h-full ${size === "large" ? "p-8" : "p-6"}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`font-bold text-foreground mb-2 ${size === "large" ? "text-2xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <p className={`text-muted-foreground leading-relaxed ${size === "large" ? "text-base" : "text-sm"}`}>
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="purple">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <GithubIcon size={14} />
            Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ExternalLink size={14} />
            Live demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
