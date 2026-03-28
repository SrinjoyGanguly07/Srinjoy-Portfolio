"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";

const socialLinks = [
  { href: "https://github.com/srinjoyganguly07", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/srinjoyganguly", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com/srinjoyganguly", icon: TwitterIcon, label: "Twitter" },
  { href: "mailto:hello@srinjoyganguly.dev", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-sm text-foreground">Srinjoy Ganguly</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building digital products that sit at the intersection of great design and clean engineering.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group w-fit"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 border border-border hover:border-purple-500/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Open to interesting opportunities
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Srinjoy Ganguly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-purple-400">Next.js</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
