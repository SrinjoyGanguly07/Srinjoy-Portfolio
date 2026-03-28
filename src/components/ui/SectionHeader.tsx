import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <AnimatedSection delay={0}>
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2}>
          <p className={cn(
            "mt-4 text-base text-muted-foreground leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}>
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
