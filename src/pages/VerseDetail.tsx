import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { gitaChapters } from "@/data/gitaChapters";
import { getVerseById } from "@/data/sampleVerses";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bookmark, Share2, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReadingSettingsContext, getFontColorStyle } from "@/contexts/ReadingSettingsContext";
import { useSavedVerses } from "@/hooks/useSavedVerses";
import { useToast } from "@/hooks/use-toast";
import { useStreak } from "@/hooks/useStreak";
import { CompactAudioPlayer } from "@/components/audio/CompactAudioPlayer";
import { useTranslation } from "@/hooks/useTranslation";

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
  
  const { fontSize, fontColor, showSanskrit, showTransliteration } = useReadingSettingsContext();
  const { isVerseSaved, toggleVerse } = useSavedVerses();
  const { toast } = useToast();
  const { incrementVersesRead } = useStreak();

  const chapter = gitaChapters.find(c => c.number === Number(chapterNum));
  const verse = getVerseById(Number(chapterNum), Number(verseNum));
  
  const currentVerseNum = Number(verseNum);
  const hasNext = chapter && currentVerseNum < chapter.versesCount;
  const hasPrev = currentVerseNum > 1;
  
  const isBookmarked = isVerseSaved(Number(chapterNum), currentVerseNum);

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
    },
    audio: undefined as string | undefined,
    images: undefined as string[] | undefined,
  };

  // Use local translations from the verse data
  const { translation, isLoading: isTranslating } = useTranslation(
    displayVerse.translations,
    selectedLanguage
  );

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

  const handleBookmark = () => {
    const wasSaved = toggleVerse({
      chapter: Number(chapterNum),
      verse: currentVerseNum,
      sanskrit: displayVerse.sanskrit,
      translation: displayVerse.translations?.english || "",
    });
    
    toast({
      title: wasSaved ? "Verse Saved" : "Verse Removed",
      description: wasSaved 
        ? `Chapter ${chapterNum}, Verse ${currentVerseNum} saved to your collection`
        : "Removed from saved verses",
    });
  };
  
  const handleNextVerse = () => {
    incrementVersesRead();
    navigate(`/gita/chapter/${chapter.number}/verse/${currentVerseNum + 1}`);
  };
  
  const fontColorValue = getFontColorStyle(fontColor);

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
              <Button 
                variant="ghost" 
                size="icon-sm" 
                className={cn(isBookmarked ? "text-primary" : "text-muted-foreground")}
                onClick={handleBookmark}
              >
                <Bookmark className={cn("w-5 h-5", isBookmarked && "fill-current")} />
              </Button>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Verse Image */}
        {displayVerse.images?.[0] && (
          <div className="px-4 animate-fade-in">
            <div className="rounded-xl overflow-hidden border border-border">
              <img 
                src={displayVerse.images[0]} 
                alt={`Chapter ${chapter.number} Verse ${currentVerseNum}`}
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        )}

        {/* Audio Player - Compact Design */}
        {displayVerse.audio && (
          <div className="px-4 animate-fade-in">
            <CompactAudioPlayer audioUrl={displayVerse.audio} />
          </div>
        )}
        {/* Verse Reference */}
        <div className="px-4 pt-4 pb-2 text-center animate-fade-in">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Chapter {chapter.number} • Verse {currentVerseNum}
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-sanskrit">
            {chapter.titleSanskrit}
          </p>
        </div>
        {showSanskrit && (
          <div className="px-6 py-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p 
              className="sanskrit-text text-center leading-loose"
              style={{ fontSize: `${fontSize + 4}px`, color: fontColorValue }}
            >
              {displayVerse.sanskrit}
            </p>
            {showTransliteration && displayVerse.transliteration && (
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                {displayVerse.transliteration}
              </p>
            )}
          </div>
        )}

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
          {isTranslating ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">Translating to {languageLabels[selectedLanguage]}...</span>
            </div>
          ) : (
            <p 
              className="verse-text leading-relaxed"
              style={{ fontSize: `${fontSize}px`, color: fontColorValue }}
            >
              {translation}
            </p>
          )}
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
              onClick={handleNextVerse}
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
