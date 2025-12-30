import { BookOpen, Scroll, Compass, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  description: string;
  path: string;
  color: string;
}

const actions: QuickAction[] = [
  {
    icon: BookOpen,
    label: "Bhagavad Gita",
    description: "18 Chapters",
    path: "/gita",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Scroll,
    label: "Ramayana",
    description: "7 Kandas",
    path: "/stories/ramayana",
    color: "bg-gold/15 text-gold",
  },
  {
    icon: Compass,
    label: "Mahabharata",
    description: "18 Parvas",
    path: "/stories/mahabharata",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: Sparkles,
    label: "Ask Vidya",
    description: "AI Guide",
    path: "/ask",
    color: "bg-primary/10 text-primary",
  },
];

export function QuickActions() {
  return (
    <div className="px-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 px-1">
        Explore
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.path}
            to={action.path}
            className={cn(
              "flex flex-col items-start gap-3 p-4 rounded-xl bg-card border border-border",
              "hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
              "active:scale-[0.98]"
            )}
          >
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", action.color)}>
              <action.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{action.label}</h3>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
