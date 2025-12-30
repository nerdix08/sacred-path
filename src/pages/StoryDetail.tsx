import { useParams, Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Users, ChevronRight, 
  Volume2, VolumeX, Pause, Play, ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ramayanaKandas, ramayanaCharacters, getRamayanaKandaById } from "@/data/ramayanaData";
import { mahabharataParvas, mahabharataCharacters, getMahabharataParvaById } from "@/data/mahabharataData";
import { useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useLanguage } from "@/hooks/useLanguage";

// Inline images for story sections - fetched from public domain sources
const storyImages: Record<string, string[]> = {
  // Ramayana Kandas
  "bala-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rama_and_Hanuman.jpg/440px-Rama_and_Hanuman.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rama_breaking_the_bow.jpg/600px-Rama_breaking_the_bow.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sita_-_Ravivarma.jpg/440px-Sita_-_Ravivarma.jpg",
  ],
  "ayodhya-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rama%27s_exile_from_Ayodhya.jpg/600px-Rama%27s_exile_from_Ayodhya.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bharata_Rama.jpg/440px-Bharata_Rama.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Dashratha_-_Raja_Ravi_Varma.jpg/440px-Dashratha_-_Raja_Ravi_Varma.jpg",
  ],
  "aranya-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ravana_%28ca._1920%29.jpg/440px-Ravana_%28ca._1920%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sita_-_Ravivarma.jpg/440px-Sita_-_Ravivarma.jpg",
  ],
  "kishkindha-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hanuman_in_Terra_Cotta.jpg/440px-Hanuman_in_Terra_Cotta.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sugriva_meets_Rama.jpg/440px-Sugriva_meets_Rama.jpg",
  ],
  "sundara-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hanuman_in_Terra_Cotta.jpg/440px-Hanuman_in_Terra_Cotta.jpg",
  ],
  "yuddha-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rama_and_Hanuman.jpg/440px-Rama_and_Hanuman.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ravana_%28ca._1920%29.jpg/440px-Ravana_%28ca._1920%29.jpg",
  ],
  "uttara-kanda": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rama_and_Hanuman.jpg/440px-Rama_and_Hanuman.jpg",
  ],
  // Mahabharata Parvas
  "adi-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kurukshetra.jpg/600px-Kurukshetra.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bhisma.jpg/440px-Bhisma.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Karna.jpg/440px-Karna.jpg",
  ],
  "sabha-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Draupadi_humiliated.jpg/600px-Draupadi_humiliated.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Draupadi_and_Pandavas.jpg/440px-Draupadi_and_Pandavas.jpg",
  ],
  "bhishma-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg/600px-Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bhisma.jpg/440px-Bhisma.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Prince_Arjuna.jpg/440px-Prince_Arjuna.jpg",
  ],
  "drona-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Prince_Arjuna.jpg/440px-Prince_Arjuna.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Karna.jpg/440px-Karna.jpg",
  ],
  "karna-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Karna.jpg/440px-Karna.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Prince_Arjuna.jpg/440px-Prince_Arjuna.jpg",
  ],
  "shalya-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bhima_LACMA_M.2012.75.2.jpg/440px-Bhima_LACMA_M.2012.75.2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Duryodhana.jpg/440px-Duryodhana.jpg",
  ],
  "stri-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Draupadi_and_Pandavas.jpg/440px-Draupadi_and_Pandavas.jpg",
  ],
  "shanti-parva": [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bhisma.jpg/440px-Bhisma.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Yudhishthira.jpg/440px-Yudhishthira.jpg",
  ],
};

// Image captions for context
const imageCaptions: Record<string, string[]> = {
  "bala-kanda": [
    "Lord Rama with Hanuman - the divine prince destined for greatness",
    "Rama breaking Shiva's bow at Sita's swayamvara",
    "Goddess Sita - the embodiment of virtue and devotion",
  ],
  "ayodhya-kanda": [
    "Rama's departure from Ayodhya into exile",
    "Bharata pleading with Rama to return",
    "King Dasharatha - the righteous ruler bound by his word",
  ],
  "aranya-kanda": [
    "Ravana - the ten-headed demon king of Lanka",
    "Sita in captivity, steadfast in her devotion",
  ],
  "kishkindha-kanda": [
    "Lord Hanuman - the mighty devotee of Rama",
    "Sugriva meeting Rama and forming their alliance",
  ],
  "sundara-kanda": [
    "Hanuman's heroic leap to Lanka",
  ],
  "yuddha-kanda": [
    "Rama and Hanuman in the great battle",
    "The defeat of Ravana",
  ],
  "uttara-kanda": [
    "Lord Rama's return to Ayodhya",
  ],
  "adi-parva": [
    "The battlefield of Kurukshetra",
    "Bhishma - the grand patriarch",
    "Karna - the tragic hero",
  ],
  "sabha-parva": [
    "The humiliation of Draupadi in the court",
    "Draupadi with the Pandavas",
  ],
  "bhishma-parva": [
    "Krishna revealing the Bhagavad Gita to Arjuna",
    "Bhishma on the battlefield",
    "Arjuna - the greatest archer",
  ],
  "drona-parva": [
    "Arjuna in battle",
    "Karna preparing for combat",
  ],
  "karna-parva": [
    "Karna - bound by loyalty",
    "The epic duel between Karna and Arjuna",
  ],
  "shalya-parva": [
    "Bhima - the mighty warrior",
    "Duryodhana's final stand",
  ],
  "stri-parva": [
    "The grief of the women after the war",
  ],
  "shanti-parva": [
    "Bhishma teaching from his bed of arrows",
    "Yudhishthira seeking wisdom",
  ],
};

const StoryDetail = () => {
  const { storyId, sectionId } = useParams();
  const [activeTab, setActiveTab] = useState<'story' | 'characters'>('story');
  const { speak, stop, isSpeaking, pause, resume, isPaused, isSupported } = useTextToSpeech();
  const { t } = useLanguage();

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
  
  const sectionImages = sectionId ? storyImages[sectionId] || [] : [];
  const sectionCaptions = sectionId ? imageCaptions[sectionId] || [] : [];

  // Section detail view
  if (currentSection) {
    const fullText = currentSection.fullContent.join(' ');
    
    // Calculate where to insert images (spread throughout content)
    const contentWithImages = currentSection.fullContent.map((paragraph, idx) => {
      const imageIndex = Math.floor(idx / Math.ceil(currentSection.fullContent.length / Math.max(sectionImages.length, 1)));
      const shouldShowImage = sectionImages[imageIndex] && 
        idx > 0 && 
        idx % Math.ceil(currentSection.fullContent.length / Math.max(sectionImages.length, 1)) === 0;
      
      return {
        paragraph,
        showImage: shouldShowImage,
        imageUrl: sectionImages[imageIndex - 1],
        imageCaption: sectionCaptions[imageIndex - 1],
      };
    });
    
    return (
      <AppLayout title={currentSection.name} showStreak={false}>
        <div className="min-h-screen">
          {/* Header Image */}
          <div className="relative h-56 overflow-hidden">
            <img 
              src={currentSection.imageUrl} 
              alt={currentSection.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <Link 
              to={`/stories/${storyId}`}
              className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
          </div>

          <div className="px-4 -mt-16 relative z-10 pb-8 space-y-6">
            {/* Title Card */}
            <div className="p-4 rounded-2xl bg-card/95 backdrop-blur-sm border border-border animate-fade-in shadow-lg">
              <p className="text-sm text-primary font-medium">{sectionLabel} {currentSection.number}</p>
              <h1 className="text-2xl font-bold text-foreground">{currentSection.name}</h1>
              <p className="text-lg font-sanskrit text-gold">{currentSection.nameSanskrit}</p>
              <p className="text-sm text-muted-foreground mt-2">{currentSection.meaning}</p>
              
              {/* Chapter info */}
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs">{currentSection.chapters} Chapters</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-xs">{sectionImages.length} Illustrations</span>
                </div>
              </div>
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
                  {isSpeaking ? 'Stop' : 'Listen to Story'}
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

            {/* Summary Card */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.08s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-2">📜 Summary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentSection.summary}</p>
            </div>

            {/* Full Content with Inline Images */}
            <div className="space-y-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-foreground">The Complete Story</h3>
              
              {contentWithImages.map((item, idx) => (
                <div key={idx}>
                  {/* Show image before certain paragraphs */}
                  {item.showImage && item.imageUrl && (
                    <div className="my-6 animate-fade-in">
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={item.imageUrl} 
                          alt={item.imageCaption || `Illustration ${idx}`}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        {item.imageCaption && (
                          <p className="absolute bottom-3 left-3 right-3 text-xs text-foreground/90 font-medium">
                            {item.imageCaption}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-sm text-muted-foreground leading-relaxed first-letter:text-2xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2">
                    {item.paragraph}
                  </p>
                </div>
              ))}
              
              {/* Show remaining images at the end if not shown */}
              {sectionImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {sectionImages.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden shadow-md animate-fade-in" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                      <img 
                        src={img} 
                        alt={sectionCaptions[idx] || `Scene ${idx + 1}`}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                      {sectionCaptions[idx] && (
                        <p className="absolute bottom-2 left-2 right-2 text-[10px] text-foreground/80 line-clamp-2">
                          {sectionCaptions[idx]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Events */}
            <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3">⚔️ Key Events</h3>
              <div className="space-y-2">
                {currentSection.keyEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-primary font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moral Takeaways */}
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3">🙏 Moral Takeaways</h3>
              <div className="space-y-3">
                {currentSection.moralTakeaways.map((moral, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-gold">✦</span>
                    <p className="text-sm text-muted-foreground italic">{moral}</p>
                  </div>
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
                      className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <p className="text-sm font-medium text-primary">Chapter {ref.chapter}, Verse {ref.verse}</p>
                      <p className="text-xs text-muted-foreground mt-1">{ref.connection}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Image Attribution */}
            <p className="text-xs text-muted-foreground/60 text-center pt-4">
              Images: {currentSection.imageAttribution} • Wikimedia Commons, Public Domain
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Main story overview
  return (
    <AppLayout title={isRamayana ? t.theRamayana : t.theMahabharata} showStreak={false}>
      <div className="min-h-screen">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <Link to="/stories" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-3 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {isRamayana ? "Ramayana" : "Mahabharata"}
          </h1>
          <p className="text-lg font-sanskrit text-gold">
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
                : "text-muted-foreground hover:text-foreground"
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
                : "text-muted-foreground hover:text-foreground"
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
                <div className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all active:scale-[0.99]">
                  <img 
                    src={section.imageUrl} 
                    alt={section.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-primary font-medium">{sectionLabel} {section.number}</p>
                    <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                    <p className="text-sm font-sanskrit text-gold">{section.nameSanskrit}</p>
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
                  className="p-3 rounded-xl bg-card border border-border animate-fade-in hover:border-primary/30 hover:shadow-md transition-all"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <img 
                    src={char.imageUrl} 
                    alt={char.name}
                    className="w-full h-28 rounded-lg object-cover mb-2"
                  />
                  <h3 className="text-sm font-semibold text-foreground">{char.name}</h3>
                  <p className="text-xs font-sanskrit text-gold">{char.nameSanskrit}</p>
                  <p className="text-xs text-primary mt-1">{char.role}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{char.description.slice(0, 80)}...</p>
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
