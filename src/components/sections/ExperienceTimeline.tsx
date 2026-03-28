"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechVault Inc.",
    period: "2023 — Present",
    location: "Remote · Full-time",
    description:
      "Lead frontend development for a Series B SaaS product used by 50,000+ users. Architected a component library used across 3 product lines, reducing UI development time by 40%. Mentored 2 junior engineers.",
    tags: ["Next.js", "TypeScript", "Design Systems", "Mentorship"],
    current: true,
  },
  {
    role: "Full-Stack Developer",
    company: "BuildLabs Agency",
    period: "2022 — 2023",
    location: "Hybrid · Full-time",
    description:
      "Built and shipped 8 client projects ranging from e-commerce platforms to internal dashboards. Owned the full stack — from database schema design to CI/CD pipeline configuration.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    current: false,
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    period: "2021 — 2022",
    location: "On-site · Full-time",
    description:
      "First professional role. Built features for a B2C fintech app with 20,000+ MAU. Wrote a lot of tests, broke a few things in production, and learned fast.",
    tags: ["React", "Python", "Django", "Testing"],
    current: false,
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2020 — 2021",
    location: "Remote · Contract",
    description:
      "Worked with 10+ clients building websites, landing pages, and small web apps. Got very good at estimating scope, very fast.",
    tags: ["HTML/CSS", "JavaScript", "WordPress", "Client work"],
    current: false,
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "National Institute of Technology",
    period: "2017 — 2021",
    description: "Graduated with distinction. Final year project: an ML-based code review assistant.",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="py-24 bg-card/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <SectionHeader
              eyebrow="Career"
              title="Experience"
              align="left"
              className="mb-10"
            />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <AnimatedSection key={exp.company} delay={0.1 + i * 0.1}>
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center ${exp.current ? "border-purple-500 bg-purple-500/20" : "border-border bg-card"}`}>
                        <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-purple-400" : "bg-muted-foreground"}`} />
                      </div>

                      <div className="p-5 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-foreground">{exp.role}</h3>
                            <p className="text-sm text-purple-400 font-medium">{exp.company}</p>
                          </div>
                          {exp.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span>{exp.period}</span>
                          <span>·</span>
                          <span>{exp.location}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="default">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionHeader
              eyebrow="Background"
              title="Education"
              align="left"
              className="mb-10"
            />

            {education.map((edu, i) => (
              <AnimatedSection key={edu.institution} delay={0.1 + i * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-purple-500/20 transition-colors">
                  <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-sm text-purple-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </AnimatedSection>
            ))}

            {/* Values section */}
            <div className="mt-10">
              <SectionHeader
                eyebrow="Philosophy"
                title="What I believe"
                align="left"
                className="mb-8"
              />
              <div className="space-y-4">
                {[
                  {
                    title: "Clarity over cleverness",
                    desc: "Code is read far more than it&apos;s written. I optimize for the next developer, not the compiler.",
                  },
                  {
                    title: "Ship, then perfect",
                    desc: "A good product in users' hands beats a perfect product on a whiteboard every time.",
                  },
                  {
                    title: "Performance is a feature",
                    desc: "Every millisecond matters. I treat performance as a first-class requirement, not an afterthought.",
                  },
                ].map((value, i) => (
                  <AnimatedSection key={value.title} delay={0.2 + i * 0.1}>
                    <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-purple-500/20 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-xs text-purple-400 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">{value.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.desc }} />
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
