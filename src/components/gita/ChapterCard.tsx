import { ChevronRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  number: number;
  titleSanskrit: string;
  titleEnglish: string;
  versesCount: number;
  progress?: number;
  isCompleted?: boolean;
}

export function ChapterCard({
  number,
  titleSanskrit,
  titleEnglish,
  versesCount,
  progress = 0,
  isCompleted = false,
}: ChapterCardProps) {
  return (
    <Link
      to={`/gita/chapter/${number}`}
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl bg-card border border-border",
        "hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
        "active:scale-[0.99]"
      )}
    >
      {/* Chapter Number */}
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
        isCompleted ? "bg-primary/20" : "bg-secondary"
      )}>
        <span className={cn(
          "text-lg font-bold",
          isCompleted ? "text-primary" : "text-foreground"
        )}>
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-foreground truncate">
          {titleEnglish}
        </h3>
        <p className="text-xs font-sanskrit text-muted-foreground truncate">
          {titleSanskrit}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <BookOpen className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{versesCount} verses</span>
          {progress > 0 && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-xs text-primary">{progress}% read</span>
            </>
          )}
        </div>
      </div>

      {/* Arrow */}
      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
    </Link>
  );
}
