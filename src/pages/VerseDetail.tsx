import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { gitaChapters } from "@/data/gitaChapters";
import { sampleVerses, getVerseById } from "@/data/sampleVerses";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Volume2, Bookmark, Share2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Language = "english" | "hindi" | "telugu" | "tamil" | "kannada";

const languageLabels: Record<Language, string> = {
  english: "English",
  hindi: "हिंदी",
  telugu: "తెలుగు",
  tamil: "தமிழ்",
  kannada: "ಕನ್ನಡ"
};

const VerseDetail = () => {
  const { chapterNum, verseNum } = useParams();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const [showExplanation, setShowExplanation] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const chapter = gitaChapters.find(c => c.number === Number(chapterNum));
  const verse = getVerseById(Number(chapterNum), Number(verseNum));
  
  const currentVerseNum = Number(verseNum);
  const hasNext = chapter && currentVerseNum < chapter.versesCount;
  const hasPrev = currentVerseNum > 1;

  if (!chapter) {
    return (
      <AppLayout title="Not Found">
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <p className="text-muted-foreground">Verse not found</p>
          <Button variant="saffron-outline" className="mt-4" onClick={() => navigate("/gita")}>
            Back to Gita
          </Button>
        </div>
      </AppLayout>
    );
  }

  // Fallback if verse not in our sample data
  const displayVerse = verse || {
    chapter: Number(chapterNum),
    verse: currentVerseNum,
    sanskrit: "श्लोक जल्द ही आ रहा है",
    transliteration: "shloka coming soon",
    translations: {
      english: "This verse content is being prepared. The complete Bhagavad Gita with all 700 verses will be available soon.",
      hindi: "यह श्लोक तैयार किया जा रहा है। सभी 700 श्लोकों के साथ पूर्ण भगवद्गीता जल्द उपलब्ध होगी।",
      telugu: "ఈ శ్లోకం సిద్ధం చేయబడుతోంది. అన్ని 700 శ్లోకాలతో పూర్తి భగవద్గీత త్వరలో అందుబాటులో ఉంటుంది.",
      tamil: "இந்த சுலோகம் தயாரிக்கப்படுகிறது. அனைத்து 700 சுலோகங்களுடன் முழு பகவத் கீதை விரைவில் கிடைக்கும்.",
      kannada: "ಈ ಶ್ಲೋಕವನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ. ಎಲ್ಲಾ 700 ಶ್ಲೋಕಗಳೊಂದಿಗೆ ಪೂರ್ಣ ಭಗವದ್ಗೀತೆ ಶೀಘ್ರದಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತದೆ."
    }
  };

  return (
    <AppLayout title={`${chapter.number}:${currentVerseNum}`} showStreak={false}>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border animate-fade-in">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              className="-ml-2 text-muted-foreground"
              onClick={() => navigate(`/gita/chapter/${chapter.number}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Chapter {chapter.number}
            </Button>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
                <Volume2 className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon-sm" 
                className={cn(isBookmarked ? "text-primary" : "text-muted-foreground")}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={cn("w-5 h-5", isBookmarked && "fill-current")} />
              </Button>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Verse Reference */}
        <div className="px-4 pt-6 pb-4 text-center animate-fade-in">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Chapter {chapter.number} • Verse {currentVerseNum}
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-sanskrit">
            {chapter.titleSanskrit}
          </p>
        </div>

        {/* Sanskrit Text */}
        <div className="px-6 py-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="sanskrit-text text-center text-2xl leading-loose text-foreground">
            {displayVerse.sanskrit}
          </p>
          {displayVerse.transliteration && (
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              {displayVerse.transliteration}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Language Selector */}
        <div className="px-4 py-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {(Object.keys(languageLabels) as Language[]).map((lang) => (
              <Button
                key={lang}
                variant={selectedLanguage === lang ? "saffron" : "secondary"}
                size="sm"
                className="flex-shrink-0"
                onClick={() => setSelectedLanguage(lang)}
              >
                {languageLabels[lang]}
              </Button>
            ))}
          </div>
        </div>

        {/* Translation */}
        <div className="px-6 py-4 flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="verse-text text-lg leading-relaxed text-foreground">
            {displayVerse.translations?.[selectedLanguage] || displayVerse.translations?.english}
          </p>
        </div>

        {/* Explanation (expandable) */}
        {displayVerse.explanation && (
          <div className="px-4 pb-4 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border"
            >
              <span className="text-sm font-medium text-foreground">Explanation</span>
              <ChevronDown className={cn(
                "w-5 h-5 text-muted-foreground transition-transform",
                showExplanation && "rotate-180"
              )} />
            </button>
            
            {showExplanation && (
              <div className="mt-2 p-4 rounded-xl bg-secondary/50 animate-fade-in">
                <p className="text-sm text-foreground leading-relaxed">
                  {displayVerse.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="px-4 pb-6 mt-auto">
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              className="flex-1"
              disabled={!hasPrev}
              onClick={() => navigate(`/gita/chapter/${chapter.number}/verse/${currentVerseNum - 1}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="saffron"
              className="flex-1"
              disabled={!hasNext}
              onClick={() => navigate(`/gita/chapter/${chapter.number}/verse/${currentVerseNum + 1}`)}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default VerseDetail;
