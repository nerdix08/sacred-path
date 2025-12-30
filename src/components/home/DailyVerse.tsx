import { BookOpen, Volume2, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DailyVerseProps {
  chapter: number;
  verse: number;
  sanskrit: string;
  translation: string;
  onReadMore?: () => void;
}

export function DailyVerse({ 
  chapter = 2, 
  verse = 47, 
  sanskrit = "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
  translation = "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
  onReadMore 
}: DailyVerseProps) {
  return (
    <div className="mx-4 rounded-2xl bg-card card-elevated overflow-hidden animate-fade-in">
      {/* Header with glow effect */}
      <div className="relative px-5 pt-5 pb-3">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Daily Verse</p>
              <p className="text-sm font-medium text-foreground">Chapter {chapter}, Verse {verse}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
              <Volume2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Sanskrit Text */}
      <div className="px-5 py-4">
        <p className="sanskrit-text text-center text-xl leading-loose">
          {sanskrit}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Translation */}
      <div className="px-5 py-4">
        <p className="verse-text text-center text-muted-foreground">
          {translation}
        </p>
      </div>

      {/* Action */}
      <div className="px-5 pb-5">
        <Button 
          variant="saffron-outline" 
          className="w-full justify-between"
          onClick={onReadMore}
        >
          <span>Read Full Explanation</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
