import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects built by Srinjoy Ganguly — from SaaS applications to open-source tools and developer utilities.",
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
