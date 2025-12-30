import { useParams, useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { gitaChapters } from "@/data/gitaChapters";
import { sampleVerses, getVersesByChapter, getChapterInfo } from "@/data/sampleVerses";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, BookOpen, Volume2, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { YouTubeVideos } from "@/components/stories/YouTubeVideos";

const ChapterDetail = () => {
  const { chapterNum } = useParams();
  const navigate = useNavigate();
  const chapter = gitaChapters.find(c => c.number === Number(chapterNum));
  const chapterInfo = getChapterInfo(Number(chapterNum));
  
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

  // Get verses for this chapter from the data
  const chapterVerses = getVersesByChapter(chapter.number);
  
  // Generate verse list (we show actual verses + placeholders for remaining)
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
            <h1 className="text-2xl font-bold text-foreground">{chapterInfo?.name || chapter.titleEnglish}</h1>
            <p className="text-lg font-sanskrit text-primary">{chapterInfo?.nameSanskrit || chapter.titleSanskrit}</p>
            {chapterInfo?.meaning && (
              <p className="text-sm text-muted-foreground italic">"{chapterInfo.meaning}"</p>
            )}
          </div>
        </div>

        {/* Chapter Summary */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Overview
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {chapterInfo?.summary || chapter.summary}
            </p>
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

        {/* YouTube Videos for this Chapter */}
        <div className="py-4 border-t border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <YouTubeVideos 
            storyId={`gita-chapter-${chapter.number}`} 
            storyType="gita" 
          />
        </div>

        {/* Verses List */}
        <div className="px-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Verses ({chapter.versesCount})
          </h3>
          
          <div className="space-y-2">
            {allVerses.map((verse, idx) => (
              <button
                key={verse.verse}
                onClick={() => navigate(`/gita/chapter/${chapter.number}/verse/${verse.verse}`)}
                className={cn(
                  "w-full flex items-start gap-3 p-4 rounded-xl bg-card border border-border",
                  "hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
                  "text-left active:scale-[0.99]",
                  chapterVerses.find(v => v.verse === verse.verse) && "border-l-2 border-l-primary"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{verse.verse}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-sanskrit text-foreground line-clamp-1">
                    {verse.sanskrit}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {verse.translations?.english || "Loading..."}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 self-center" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-20" />
      </div>
    </AppLayout>
  );
};

export default ChapterDetail;
