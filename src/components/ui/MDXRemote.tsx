"use client";

import { useEffect, useState } from "react";

// Simple MDX renderer using compile on server
// For production, use @next/mdx or next-mdx-remote properly configured
interface Props {
  source: string;
}

export function MDXRemote({ source }: Props) {
  // Render markdown-like content as HTML
  const html = parseMarkdown(source);
  return (
    <div
      className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function parseMarkdown(md: string): string {
  return md
    // Headers
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    // Blockquotes
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Unordered lists (basic)
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    // Horizontal rule
    .replace(/^---$/gm, "<hr />")
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Paragraphs (double newline)
    .replace(/\n\n(?!<)/g, "</p><p>")
    // Wrap in paragraph
    .replace(/^(?!<)(.+)$/gm, (match) => {
      if (match.startsWith("<")) return match;
      return match;
    });
}
