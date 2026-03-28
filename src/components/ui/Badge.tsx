import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "purple";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "border border-border text-muted-foreground": variant === "outline",
          "bg-purple-500/10 text-purple-400 border border-purple-500/20": variant === "purple",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
