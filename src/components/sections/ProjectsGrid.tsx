"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const allProjects = [
  {
    title: "Nexus — AI Productivity Suite",
    description:
      "A full-stack SaaS platform using AI to help teams manage tasks, summarise meetings, and automate workflows. Processes 10,000+ tasks/day for 500+ active users.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    category: "SaaS",
    github: "https://github.com/srinjoyganguly07/nexus",
    live: "https://nexus-app.vercel.app",
    featured: true,
    gradient: "from-purple-500/20 to-violet-500/5",
  },
  {
    title: "Pulse — Privacy-First Analytics",
    description:
      "Lightweight analytics dashboard replacing Google Analytics with real-time, privacy-respecting insights. No cookies. No third-party tracking. Open source.",
    tags: ["React", "ClickHouse", "WebSockets", "Rust"],
    category: "Open Source",
    github: "https://github.com/srinjoyganguly07/pulse",
    live: "https://pulse-analytics.io",
    featured: true,
    gradient: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "Forge — Dev Scaffolding CLI",
    description:
      "TypeScript-first CLI toolkit that scaffolds production-ready Next.js apps with testing, CI/CD, and Docker configured out of the box. 800+ npm downloads.",
    tags: ["Node.js", "TypeScript", "CLI", "Docker"],
    category: "Open Source",
    github: "https://github.com/srinjoyganguly07/forge-cli",
    live: "https://www.npmjs.com/package/forge-cli",
    featured: false,
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Canvas — Collaborative Whiteboard",
    description:
      "Real-time collaborative whiteboard application with WebRTC for peer-to-peer connections. Supports infinite canvas, shapes, text, and live cursors.",
    tags: ["React", "WebRTC", "WebSockets", "Canvas API"],
    category: "App",
    github: "https://github.com/srinjoyganguly07/canvas",
    live: "#",
    featured: false,
    gradient: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "Lexicon — Personal Knowledge Base",
    description:
      "A minimal, Notion-inspired note-taking app with full-text search, backlinks, and a graph view. Built on top of ProseMirror for rich text editing.",
    tags: ["Next.js", "ProseMirror", "SQLite", "TypeScript"],
    category: "App",
    github: "https://github.com/srinjoyganguly07/lexicon",
    live: "#",
    featured: false,
    gradient: "from-rose-500/20 to-pink-500/5",
  },
  {
    title: "Orbit — Personal Finance Tracker",
    description:
      "A privacy-first personal finance tracker that imports bank statements via CSV and generates smart insights and budget breakdowns. Zero external API calls.",
    tags: ["Next.js", "Recharts", "SQLite", "TypeScript"],
    category: "App",
    github: "https://github.com/srinjoyganguly07/orbit",
    live: "#",
    featured: false,
    gradient: "from-sky-500/20 to-blue-500/5",
  },
];

const categories = ["All", "SaaS", "Open Source", "App"];

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Projects"
        title="Things I&apos;ve built"
        description="A selection of side projects, client work, and open-source contributions. Everything is either live or open source — no vaporware."
        className="mb-12"
      />

      {/* Filter tabs */}
      <AnimatedSection delay={0.2} className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border"
            )}
          >
            {cat}
          </button>
        ))}
      </AnimatedSection>

      {/* Projects grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <motion.article
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/5",
                  project.featured ? "ring-1 ring-purple-500/20" : ""
                )}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none opacity-60`} />

                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative p-6 flex flex-col h-full">
                  <div className="mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="purple">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GithubIcon size={14} />
                      Source
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
