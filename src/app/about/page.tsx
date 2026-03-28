import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsDetailed } from "@/components/sections/SkillsDetailed";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Srinjoy Ganguly — a full-stack developer passionate about building excellent software with React, Next.js, and TypeScript.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ExperienceTimeline />
      <SkillsDetailed />
    </>
  );
}
