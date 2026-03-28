import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Srinjoy Ganguly writes about React, Next.js, TypeScript, and building great software. Technical writing for developers who care about quality.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Writing"
        title="The blog"
        description="I write about software engineering, design patterns, and the craft of building things people love. Usually practical. Sometimes opinionated. Always honest."
        className="mb-16"
      />

      {posts.length === 0 ? (
        <AnimatedSection delay={0.2} className="text-center py-20">
          <p className="text-muted-foreground text-lg">Articles coming soon...</p>
          <p className="text-sm text-muted-foreground mt-2">
            Check back shortly or{" "}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300">
              subscribe to updates
            </Link>
            .
          </p>
        </AnimatedSection>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={0.1 + i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="p-6 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="purple">{tag}</Badge>
                    ))}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-purple-300 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <span className="text-xs text-purple-400 group-hover:text-purple-300 flex items-center gap-1 transition-colors">
                      Read article
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      )}
    </section>
  );
}
