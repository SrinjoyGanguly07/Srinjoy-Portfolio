import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "@/components/ui/MDXRemote";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post || !post.published) notFound();

  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="purple">{tag}</Badge>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6">{post.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </div>
          <span>by Srinjoy Ganguly</span>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Srinjoy Ganguly</p>
            <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
          >
            More articles
            <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </footer>
    </article>
  );
}
