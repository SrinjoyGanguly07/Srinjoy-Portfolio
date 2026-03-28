import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsSnapshot } from "@/components/sections/SkillsSnapshot";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Srinjoy Ganguly — Developer & Creator",
  description:
    "Full-stack developer crafting fast, accessible, and beautifully designed digital experiences with React, Next.js, and TypeScript.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSnapshot />
      <LatestPosts />
      <CTASection />
    </>
  );
}
