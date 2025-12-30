import { useParams, Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Users, ChevronRight, 
  Volume2, VolumeX, Pause, Play 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ramayanaKandas, ramayanaCharacters, getRamayanaKandaById } from "@/data/ramayanaData";
import { mahabharataParvas, mahabharataCharacters, getMahabharataParvaById } from "@/data/mahabharataData";
import { useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";

const StoryDetail = () => {
  const { storyId, sectionId } = useParams();
  const [activeTab, setActiveTab] = useState<'story' | 'characters'>('story');
  const { speak, stop, isSpeaking, pause, resume, isPaused, isSupported } = useTextToSpeech();

  const isRamayana = storyId === 'ramayana';
  const sections = isRamayana ? ramayanaKandas : mahabharataParvas;
  const characters = isRamayana ? ramayanaCharacters : mahabharataCharacters;
  const sectionLabel = isRamayana ? 'Kanda' : 'Parva';

  const currentSection = sectionId 
    ? (isRamayana ? getRamayanaKandaById(sectionId) : getMahabharataParvaById(sectionId))
    : null;

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text);
    }
  };

  // Section detail view
  if (currentSection) {
    const fullText = currentSection.fullContent.join(' ');
    
    return (
      <AppLayout title={currentSection.name} showStreak={false}>
        <div className="min-h-screen">
          {/* Header Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={currentSection.imageUrl} 
              alt={currentSection.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <Link 
              to={`/stories/${storyId}`}
              className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
          </div>

          <div className="px-4 -mt-12 relative z-10 pb-8 space-y-6">
            {/* Title */}
            <div className="animate-fade-in">
              <p className="text-sm text-primary font-medium">{sectionLabel} {currentSection.number}</p>
              <h1 className="text-2xl font-bold text-foreground">{currentSection.name}</h1>
              <p className="text-lg font-sanskrit text-muted-foreground">{currentSection.nameSanskrit}</p>
              <p className="text-sm text-muted-foreground mt-1">{currentSection.meaning}</p>
            </div>

            {/* TTS Controls */}
            {isSupported && (
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.05s' }}>
                <Button
                  variant="saffron-outline"
                  size="sm"
                  onClick={() => handleSpeak(fullText)}
                  className="gap-2"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {isSpeaking ? 'Stop' : 'Listen'}
                </Button>
                {isSpeaking && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isPaused ? resume() : pause()}
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </Button>
                )}
              </div>
            )}

            {/* Full Content */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {currentSection.fullContent.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Events */}
            <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3">Key Events</h3>
              <div className="space-y-2">
                {currentSection.keyEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moral Takeaways */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3">🙏 Moral Takeaways</h3>
              <div className="space-y-2">
                {currentSection.moralTakeaways.map((moral, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">• {moral}</p>
                ))}
              </div>
            </div>

            {/* Related Gita Verses */}
            {currentSection.relatedGitaVerses.length > 0 && (
              <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.25s' }}>
                <h3 className="text-sm font-semibold text-foreground mb-3">📖 Related Bhagavad Gita Verses</h3>
                <div className="space-y-3">
                  {currentSection.relatedGitaVerses.map((ref, idx) => (
                    <Link 
                      key={idx}
                      to={`/gita/chapter/${ref.chapter}/verse/${ref.verse}`}
                      className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <p className="text-sm font-medium text-primary">Chapter {ref.chapter}, Verse {ref.verse}</p>
                      <p className="text-xs text-muted-foreground mt-1">{ref.connection}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Image Attribution */}
            <p className="text-xs text-muted-foreground/60 text-center">
              Image: {currentSection.imageAttribution}
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Main story overview
  return (
    <AppLayout title={isRamayana ? "Ramayana" : "Mahabharata"} showStreak={false}>
      <div className="min-h-screen">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <Link to="/stories" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {isRamayana ? "Ramayana" : "Mahabharata"}
          </h1>
          <p className="text-lg font-sanskrit text-muted-foreground">
            {isRamayana ? "रामायणम्" : "महाभारतम्"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('story')}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === 'story' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground"
            )}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            {isRamayana ? '7 Kandas' : '18 Parvas'}
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === 'characters' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground"
            )}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Characters
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3">
          {activeTab === 'story' ? (
            sections.map((section, idx) => (
              <Link
                key={section.id}
                to={`/stories/${storyId}/${section.id}`}
                className="block animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all active:scale-[0.99]">
                  <img 
                    src={section.imageUrl} 
                    alt={section.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-primary font-medium">{sectionLabel} {section.number}</p>
                    <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                    <p className="text-sm font-sanskrit text-muted-foreground">{section.nameSanskrit}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{section.summary}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 self-center" />
                </div>
              </Link>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {characters.map((char, idx) => (
                <div
                  key={char.id}
                  className="p-3 rounded-xl bg-card border border-border animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <img 
                    src={char.imageUrl} 
                    alt={char.name}
                    className="w-full h-28 rounded-lg object-cover mb-2"
                  />
                  <h3 className="text-sm font-semibold text-foreground">{char.name}</h3>
                  <p className="text-xs font-sanskrit text-muted-foreground">{char.nameSanskrit}</p>
                  <p className="text-xs text-primary mt-1">{char.role}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-20" />
      </div>
    </AppLayout>
  );
};

export default StoryDetail;
