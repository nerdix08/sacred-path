import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ListOrdered, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoryNavigationProps {
  currentIndex: number;
  totalChapters: number;
  storyType: 'ramayana' | 'mahabharata';
  currentId: string;
  chapters: { id: string; name: string; number: number }[];
  onShowAllChapters?: () => void;
}

export function StoryNavigation({
  currentIndex,
  totalChapters,
  storyType,
  currentId,
  chapters,
  onShowAllChapters
}: StoryNavigationProps) {
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < totalChapters - 1 ? chapters[currentIndex + 1] : null;

  const sectionLabel = storyType === 'ramayana' ? 'Kanda' : 'Parva';

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Navigation Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-primary" />
          Continue Reading
        </h3>
        <span className="text-xs text-muted-foreground">
          {sectionLabel} {currentIndex + 1} of {totalChapters}
        </span>
      </div>

      {/* Previous/Next Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {/* Previous Chapter */}
        {prevChapter ? (
          <Link
            to={`/stories/${storyType}/${prevChapter.id}`}
            className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <ChevronLeft className="w-3 h-3" />
              Previous {sectionLabel}
            </div>
            <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {prevChapter.name}
            </p>
          </Link>
        ) : (
          <div className="p-3 rounded-xl bg-secondary/30 border border-border/50 opacity-50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <ChevronLeft className="w-3 h-3" />
              Previous {sectionLabel}
            </div>
            <p className="text-sm text-muted-foreground">Start of story</p>
          </div>
        )}

        {/* Next Chapter */}
        {nextChapter ? (
          <Link
            to={`/stories/${storyType}/${nextChapter.id}`}
            className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 hover:border-primary/40 transition-all group"
          >
            <div className="flex items-center justify-end gap-2 text-xs text-primary mb-1">
              Next {sectionLabel}
              <ChevronRight className="w-3 h-3" />
            </div>
            <p className="text-sm font-medium text-foreground text-right line-clamp-1 group-hover:text-primary transition-colors">
              {nextChapter.name}
            </p>
          </Link>
        ) : (
          <div className="p-3 rounded-xl bg-secondary/30 border border-border/50 opacity-50">
            <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-1">
              Next {sectionLabel}
              <ChevronRight className="w-3 h-3" />
            </div>
            <p className="text-sm text-muted-foreground text-right">End of story</p>
          </div>
        )}
      </div>

      {/* All Chapters Button */}
      <div className="px-4">
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={onShowAllChapters}
        >
          <ListOrdered className="w-4 h-4" />
          View All {totalChapters} {sectionLabel}s
        </Button>
      </div>
    </div>
  );
}
