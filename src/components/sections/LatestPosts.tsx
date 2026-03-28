"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const posts = [
  {
    slug: "why-i-switched-to-nextjs-app-router",
    title: "Why I Switched to the Next.js App Router (And Never Looked Back)",
    excerpt:
      "After a year of production use, here's my honest take on the App Router — the good, the rough edges, and why it's changed how I think about React.",
    date: "2024-03-10",
    readTime: "8 min read",
    tag: "Engineering",
  },
  {
    slug: "design-tokens-at-scale",
    title: "Design Tokens at Scale: A Developer's Survival Guide",
    excerpt:
      "How to build a design system that designers love and developers don't hate — with real examples from production codebases.",
    date: "2024-02-18",
    readTime: "6 min read",
    tag: "Design",
  },
  {
    slug: "typescript-patterns-i-actually-use",
    title: "TypeScript Patterns I Actually Use in Every Project",
    excerpt:
      "Not a list of obscure type-level magic. These are the patterns I reach for every single day that have made my code more maintainable.",
    date: "2024-01-30",
    readTime: "10 min read",
    tag: "TypeScript",
  },
];

export function LatestPosts() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Writing"
        title="Thoughts worth reading"
        description="I write about software engineering, design systems, and building things people actually want to use."
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={0.1 + i * 0.1}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <article className="h-full p-6 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="purple">{post.tag}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-purple-300 transition-colors leading-snug mb-3 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <time className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <span className="text-xs text-purple-400 group-hover:text-purple-300 flex items-center gap-1 transition-colors">
                    Read more
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          Read all articles
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </AnimatedSection>
    </section>
  );
}
