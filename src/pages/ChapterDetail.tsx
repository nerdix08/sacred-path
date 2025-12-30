import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { gitaChapters } from "@/data/gitaChapters";
import { sampleVerses } from "@/data/sampleVerses";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const ChapterDetail = () => {
  const { chapterNum } = useParams();
  const navigate = useNavigate();
  const chapter = gitaChapters.find(c => c.number === Number(chapterNum));
  
  if (!chapter) {
    return (
      <AppLayout title="Chapter Not Found">
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <p className="text-muted-foreground">Chapter not found</p>
          <Button variant="saffron-outline" className="mt-4" onClick={() => navigate("/gita")}>
            Back to Gita
          </Button>
        </div>
      </AppLayout>
    );
  }

  // Get verses for this chapter from sample data
  const chapterVerses = sampleVerses.filter(v => v.chapter === chapter.number);
  
  // Generate verse list (we show sample verses + placeholders)
  const allVerses = Array.from({ length: chapter.versesCount }, (_, i) => {
    const existingVerse = chapterVerses.find(v => v.verse === i + 1);
    return existingVerse || { 
      chapter: chapter.number, 
      verse: i + 1,
      sanskrit: "श्लोक आ रहा है...",
      translations: { english: "Verse content coming soon..." }
    };
  });

  return (
    <AppLayout title={`Chapter ${chapter.number}`}>
      <div className="space-y-4 py-4">
        {/* Back Button & Header */}
        <div className="px-4 animate-fade-in">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-3 -ml-2 text-muted-foreground"
            onClick={() => navigate("/gita")}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All Chapters
          </Button>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary font-medium">Chapter {chapter.number}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{chapter.versesCount} verses</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">{chapter.titleEnglish}</h1>
            <p className="text-lg font-sanskrit text-muted-foreground">{chapter.titleSanskrit}</p>
          </div>
        </div>

        {/* Chapter Summary */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Overview</h3>
            <p className="text-sm text-foreground leading-relaxed">{chapter.summary}</p>
          </div>
        </div>

        {/* Start Reading Button */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <Button 
            variant="saffron" 
            className="w-full"
            onClick={() => navigate(`/gita/chapter/${chapter.number}/verse/1`)}
          >
            <Play className="w-4 h-4 mr-2" />
            Start Reading Chapter {chapter.number}
          </Button>
        </div>

        {/* Verses List */}
        <div className="px-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Verses
          </h3>
          
          <div className="space-y-2">
            {allVerses.slice(0, 10).map((verse, idx) => (
              <button
                key={verse.verse}
                onClick={() => navigate(`/gita/chapter/${chapter.number}/verse/${verse.verse}`)}
                className={cn(
                  "w-full flex items-start gap-3 p-4 rounded-xl bg-card border border-border",
                  "hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
                  "text-left active:scale-[0.99]"
                )}
              >
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-foreground">{verse.verse}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-sanskrit text-muted-foreground truncate">
                    {verse.sanskrit}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {verse.translations?.english || "Loading..."}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {chapter.versesCount > 10 && (
            <p className="text-sm text-center text-muted-foreground py-4">
              + {chapter.versesCount - 10} more verses
            </p>
          )}
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default ChapterDetail;
