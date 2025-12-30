import { useParams, Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Users, ChevronRight, 
  Volume2, VolumeX, Pause, Play, Sparkles, Heart, Sword
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ramayanaKandas, ramayanaCharacters, getRamayanaKandaById } from "@/data/ramayanaData";
import { mahabharataParvas, mahabharataCharacters, getMahabharataParvaById } from "@/data/mahabharataData";
import { useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useLanguage } from "@/hooks/useLanguage";

// Extended story content with more details
const extendedContent: Record<string, { scenes: { title: string; content: string[]; theme: string }[] }> = {
  "bala-kanda": {
    scenes: [
      {
        title: "The Kingdom of Ayodhya",
        theme: "🏰",
        content: [
          "In the ancient land of Bharatavarsha, nestled along the banks of the sacred river Sarayu, stood the magnificent city of Ayodhya. Its towering walls, built of gleaming white marble, stretched for twelve yojanas in length. The city was renowned across all the three worlds for its prosperity, righteousness, and the wisdom of its rulers.",
          "The streets were paved with precious stones, and grand mansions lined every avenue. Learned Brahmins chanted Vedic hymns at every corner, while merchants traded silks and spices from distant lands. The sound of temple bells mingled with the laughter of children, creating a symphony of peace and happiness.",
          "At the heart of this paradise stood the royal palace of King Dasharatha, a descendant of the illustrious Solar dynasty (Suryavansha). The king was famed throughout the realm as 'Dasharatha' - he who could fight in ten directions simultaneously. No enemy had ever defeated him in battle, and his subjects loved him as a father loves his children."
        ]
      },
      {
        title: "The King's Sorrow",
        theme: "😢",
        content: [
          "Despite his countless blessings, a deep sorrow gnawed at King Dasharatha's heart. Though he had three devoted queens - the gentle Kausalya, the spirited Kaikeyi who had saved his life in battle, and the beautiful Sumitra - none had blessed him with an heir.",
          "Night after night, the king would stand on his palace balcony, gazing at the stars and praying to his ancestors for a son. 'What use is this vast kingdom,' he would lament, 'if there is no one to inherit it? What purpose do my victories serve if the Solar dynasty ends with me?'",
          "His wise minister Sumantra, seeing the king's distress, approached him with news of hope. 'Your Majesty, there is a sage named Rishyashringa who possesses the power to invoke the gods themselves. It is said that wherever he goes, rain follows, and barren lands become fertile. Perhaps he can help fulfill your heart's desire.'"
        ]
      },
      {
        title: "The Sacred Yajna",
        theme: "🔥",
        content: [
          "With renewed hope, Dasharatha invited the young sage Rishyashringa to Ayodhya. The preparations for the Ashwamedha Yajna (horse sacrifice) and the Putrakameshti Yajna (son-bestowing sacrifice) began in earnest. The entire kingdom was transformed into a vast ceremonial ground.",
          "For many days and nights, the sacred fires burned bright. Priests chanted mantras that had been passed down since the beginning of time. The fragrance of ghee, sandalwood, and sacred herbs filled the air, rising to the heavens like a prayer made visible.",
          "On the final day of the ceremony, as the flames leaped highest, a divine being emerged from the sacred fire. He was as bright as the sun, clad in robes of crimson and gold. In his hands, he carried a golden vessel filled with divine payasam (sacred pudding).",
          "'I am a messenger of Lord Vishnu,' the celestial being announced. 'The Supreme Lord has heard your prayers and seen your devotion. This divine offering, when consumed by your queens, will grant you sons of extraordinary virtue and power. Through them, a great purpose shall be fulfilled.'"
        ]
      },
      {
        title: "The Divine Birth",
        theme: "✨",
        content: [
          "King Dasharatha distributed the sacred payasam among his three queens with trembling hands. To Kausalya, the eldest and most devoted, he gave half. To Kaikeyi, who had earned his eternal gratitude, he gave a quarter. And to the gentle Sumitra, he gave the remaining quarter, which she divided into two portions.",
          "The months that followed were filled with auspicious signs. Flowers bloomed out of season, rivers ran crystal clear, and celestial music was heard at dawn and dusk. The entire creation seemed to celebrate the coming of something divine.",
          "On the ninth day of the bright fortnight of the month of Chaitra, under the star Punarvasu, when five planets were in exaltation, Queen Kausalya gave birth to a son of extraordinary beauty. The baby's skin glowed with a bluish tint like the petals of a blue lotus, and his eyes sparkled like stars.",
          "The priests and sages who witnessed the birth felt a divine presence fill the room. 'This child,' whispered the great sage Vashishta, 'is no ordinary mortal. He is Dharma incarnate - righteousness itself born in human form. He shall be called Rama - he who brings joy to all.'"
        ]
      },
      {
        title: "The Four Princes",
        theme: "👑",
        content: [
          "Shortly after Rama's birth, the other queens also delivered their precious sons. Kaikeyi gave birth to Bharata, a child of remarkable courage and loyalty. Sumitra was blessed with twins - Lakshmana and Shatrughna - born of her two portions of the sacred offering.",
          "From their earliest days, a mysterious bond connected the brothers. Lakshmana would not eat unless Rama had eaten first, would not sleep unless Rama slept beside him. It was as if they shared one soul in two bodies. Similarly, Shatrughna was inseparable from Bharata.",
          "The princes grew under the tutelage of the great sage Vashishta, learning the Vedas, the arts of war, the science of governance, and the subtle wisdom of dharma. Rama excelled in everything he undertook, yet remained humble and kind. His smile could calm the most troubled heart, and his words were always true and gentle.",
          "By the age of sixteen, Rama had mastered every weapon known to man, every scripture known to scholars, and had won the love of every citizen in Ayodhya. When he walked through the city streets, people would stop their work just to catch a glimpse of him, their eyes filling with tears of inexplicable joy."
        ]
      },
      {
        title: "The Arrival of Vishwamitra",
        theme: "🧙",
        content: [
          "One fateful day, the sage Vishwamitra arrived at the gates of Ayodhya. He was one of the most powerful beings in creation - a king who had become a Brahmarshi through thousands of years of severe penance. Devas and Asuras alike trembled before his spiritual power.",
          "King Dasharatha received him with the highest honors, washing the sage's feet himself and offering him the finest hospitality. 'Great sage,' said the king, 'your presence sanctifies my kingdom. Ask for anything - gold, jewels, even half my realm - and it shall be yours.'",
          "Vishwamitra smiled mysteriously. 'O King, I have no need for worldly treasures. I am performing a sacred yajna in the forest, but two demons - Maricha and Subahu - repeatedly defile my offerings with blood and filth. I need a protector, and I have come to ask for your son Rama.'",
          "Dasharatha's heart nearly stopped. Send his beloved Rama, barely sixteen, to face demons that even the gods feared? He pleaded, he wept, he offered armies of warriors instead. But Vishwamitra was firm, and Sage Vashishta counseled the king to trust the sage's wisdom.",
          "With a breaking heart, Dasharatha allowed Rama and Lakshmana to accompany Vishwamitra into the dangerous Dandaka forest."
        ]
      },
      {
        title: "The Trials in the Forest",
        theme: "⚔️",
        content: [
          "The journey into the forest was Rama's first test. As they entered the wilderness, the very air seemed to grow heavy with malevolence. This was the territory of Tataka, a powerful demoness who had laid waste to entire kingdoms.",
          "Vishwamitra turned to Rama. 'She approaches. This creature, once a beautiful yaksha woman, was cursed to become a monster. She has killed thousands. You must destroy her, Rama, for the protection of all living beings.'",
          "Rama hesitated - his noble heart recoiled at the thought of harming a woman, even a demoness. But Vishwamitra explained that when a being chooses evil, when they use their power to harm the innocent, their original nature becomes irrelevant. Dharma required their destruction.",
          "With a heavy heart but steady aim, Rama drew his bow. The arrow flew true, and Tataka was no more. The forest itself seemed to breathe a sigh of relief. Flowers bloomed where moments before only thorns had grown.",
          "Pleased with Rama's skill and righteousness, Vishwamitra bestowed upon him the knowledge of divine weapons - the Brahmastra, the Vayuastra, the Agneyastra, and many more. 'Use these wisely,' the sage counseled. 'Great power requires even greater responsibility.'"
        ]
      },
      {
        title: "The Swayamvara at Mithila",
        theme: "💕",
        content: [
          "After successfully protecting Vishwamitra's yajna, the sage led the princes to the kingdom of Mithila, ruled by the philosopher-king Janaka. There, Rama's destiny awaited him in the form of a divine bow and a princess of unparalleled beauty.",
          "King Janaka possessed the Shiva Dhanus, Lord Shiva's own bow, which had been given to his ancestors by the god himself. The bow was so massive that three hundred men were needed just to move it. Janaka had declared that whoever could string this celestial weapon would win the hand of his daughter Sita.",
          "Sita was no ordinary princess. She had been found by Janaka while he was ploughing a field for a sacred ritual, emerging from the earth itself like a divine blessing. Hence her name - Sita, meaning 'furrow.' She was believed to be an incarnation of Goddess Lakshmi herself.",
          "Countless princes from across the world had tried and failed to even lift the bow. Some had injured themselves; others had left in shame. Janaka had begun to despair that his daughter would remain unmarried forever.",
          "When Rama entered the arena where the bow lay, a hush fell over the crowd. With the grace of a dancer and the strength of a god, he lifted the massive bow as easily as a child lifts a toy. As he bent it to string it, the divine weapon shattered with a sound that echoed across the three worlds.",
          "Sita, watching from behind a curtain, felt her heart recognize what her eyes had sought all her life. Without hesitation, she stepped forward and placed the wedding garland around Rama's neck. In that moment, two halves of one divine soul were united."
        ]
      },
      {
        title: "The Grand Wedding",
        theme: "💒",
        content: [
          "The news of Rama's triumph reached Ayodhya, and King Dasharatha arrived with a grand procession for the wedding. It was decided that all four brothers would marry on the same auspicious day - Rama to Sita, Lakshmana to Sita's sister Urmila, Bharata to Mandavi, and Shatrughna to Shrutakirti.",
          "The wedding celebrations lasted for many days. The streets of Mithila were decorated with flowers and lights. Musicians played, dancers performed, and the air was filled with the fragrance of jasmine and rose. Even the gods descended from heaven to witness the union of Rama and Sita.",
          "As the sacred fire witnessed their seven steps together, as Rama tied the mangalsutra around Sita's neck, all of creation celebrated. This was not merely a royal wedding - it was the coming together of Dharma and Devotion, of the Protector and the Protected, of Vishnu and Lakshmi in mortal form.",
          "And so ended the Bala Kanda, the Book of Youth. Rama returned to Ayodhya with his bride, his brothers, and the love of an entire kingdom. But destiny had much more in store for the prince of Ayodhya. The seeds of future trials were already being sown, even as the wedding flowers still lay fresh upon the ground."
        ]
      }
    ]
  },
  "ayodhya-kanda": {
    scenes: [
      {
        title: "The Announcement",
        theme: "📯",
        content: [
          "Years of perfect happiness passed in Ayodhya. Rama and Sita's love grew deeper with each passing day, becoming a legend that poets sang about in distant lands. King Dasharatha, now advanced in years, felt the time had come to crown Rama as Yuvaraja - the heir apparent.",
          "The announcement sent waves of joy through the kingdom. Citizens prepared for the grandest coronation in history. Flowers were gathered, streets were decorated, and prayers of thanksgiving rose from every home.",
          "But fate, as it often does, had other plans..."
        ]
      },
      {
        title: "Manthara's Poison",
        theme: "🐍",
        content: [
          "In Queen Kaikeyi's chambers, her aged maid Manthara watched the celebrations with bitter eyes. This hunchbacked woman had nursed a lifetime of resentments, and now she saw an opportunity to release her venom.",
          "'My lady,' she whispered to Kaikeyi, 'do you not see what is happening? When Rama becomes king, what will become of your son Bharata? He will be a servant in his own home. And you - you who saved the king's life in battle - you will bow before Kausalya like a common maid.'",
          "At first, Kaikeyi dismissed these words. She loved Rama as her own son. But Manthara persisted, day and night, dripping poison into her ears until doubt took root in Kaikeyi's heart."
        ]
      },
      {
        title: "The Terrible Boons",
        theme: "😱",
        content: [
          "Kaikeyi remembered that long ago, after she had saved Dasharatha's life in battle, he had promised her any two boons of her choosing. She had kept them in reserve, never imagining she would use them for such a purpose.",
          "Now, corrupted by Manthara's words, she entered the sulking chamber and refused to see the king until he granted her demands. When Dasharatha finally came to her, eager to share his joy about Rama's coronation, he found her lying on the floor, her ornaments discarded, her hair disheveled.",
          "'What troubles you, my love?' he asked in alarm. 'Ask for anything - the sun, the moon, my very life - and I shall give it to you.'",
          "And so she asked: 'Let Bharata be crowned king instead of Rama. And let Rama be exiled to the forest for fourteen years.'"
        ]
      }
    ]
  }
};

// Decorative patterns for visual interest
const SceneDecorator = ({ theme }: { theme: string }) => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
    <span className="text-2xl">{theme}</span>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
  </div>
);

const StoryDetail = () => {
  const { storyId, sectionId } = useParams();
  const [activeTab, setActiveTab] = useState<'story' | 'characters'>('story');
  const [expandedScene, setExpandedScene] = useState<number | null>(null);
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
  
  const extended = sectionId ? extendedContent[sectionId] : null;

  // Section detail view
  if (currentSection) {
    const fullText = currentSection.fullContent.join(' ');
    
    return (
      <AppLayout title={currentSection.name} showStreak={false}>
        <div className="min-h-screen">
          {/* Hero Header with gradient */}
          <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 via-gold/10 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,183,77,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,111,0,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            <Link 
              to={`/stories/${storyId}`}
              className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 text-6xl opacity-20">🕉️</div>
            <div className="absolute bottom-20 left-8 text-4xl opacity-10">✨</div>
          </div>

          <div className="px-4 -mt-20 relative z-10 pb-8 space-y-6">
            {/* Title Card */}
            <div className="p-5 rounded-2xl bg-card/95 backdrop-blur-sm border border-border shadow-xl animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">📖</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-primary font-medium">{sectionLabel} {currentSection.number}</p>
                  <h1 className="text-2xl font-bold text-foreground">{currentSection.name}</h1>
                  <p className="text-lg font-sanskrit text-gold">{currentSection.nameSanskrit}</p>
                  <p className="text-sm text-muted-foreground mt-1">{currentSection.meaning}</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs">{currentSection.chapters} Chapters</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs">{extended?.scenes.length || 0} Detailed Scenes</span>
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
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.08s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-lg">📜</span> Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentSection.summary}</p>
            </div>

            {/* Extended Detailed Scenes */}
            {extended && extended.scenes.length > 0 && (
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  The Complete Story
                </h3>
                
                {extended.scenes.map((scene, idx) => (
                  <div 
                    key={idx}
                    className="rounded-xl bg-card border border-border overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
                  >
                    <button
                      onClick={() => setExpandedScene(expandedScene === idx ? null : idx)}
                      className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{scene.theme}</span>
                        <div className="text-left">
                          <span className="text-xs text-primary font-medium">Scene {idx + 1}</span>
                          <h4 className="text-sm font-semibold text-foreground">{scene.title}</h4>
                        </div>
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        expandedScene === idx && "rotate-90"
                      )} />
                    </button>
                    
                    {expandedScene === idx && (
                      <div className="px-4 pb-4 space-y-4 border-t border-border/50 pt-4">
                        <SceneDecorator theme={scene.theme} />
                        {scene.content.map((para, pIdx) => (
                          <p 
                            key={pIdx} 
                            className="text-sm text-muted-foreground leading-relaxed first-letter:text-xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-1.5"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Original Content (fallback if no extended content) */}
            {(!extended || extended.scenes.length === 0) && (
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold text-foreground">The Story</h3>
                {currentSection.fullContent.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-sm text-muted-foreground leading-relaxed first-letter:text-xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-1.5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Key Events */}
            <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sword className="w-4 h-4 text-primary" /> Key Events
              </h3>
              <div className="space-y-2">
                {currentSection.keyEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <span className="text-xs text-white font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moral Takeaways */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold" /> Moral Takeaways
              </h3>
              <div className="space-y-3">
                {currentSection.moralTakeaways.map((moral, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-gold text-lg">✦</span>
                    <p className="text-sm text-muted-foreground italic">{moral}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Gita Verses */}
            {currentSection.relatedGitaVerses.length > 0 && (
              <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
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

            {/* Attribution */}
            <p className="text-xs text-muted-foreground/60 text-center pt-4">
              Content sourced from Valmiki Ramayana • Public Domain
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
        <div className="relative px-4 py-6 border-b border-border bg-gradient-to-br from-primary/10 via-gold/5 to-transparent">
          <Link to="/stories" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-3 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg">
              <span className="text-3xl">{isRamayana ? '🏹' : '⚔️'}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {isRamayana ? "Ramayana" : "Mahabharata"}
              </h1>
              <p className="text-lg font-sanskrit text-gold">
                {isRamayana ? "रामायणम्" : "महाभारतम्"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {isRamayana ? "24,000 verses • 7 Kandas" : "100,000 verses • 18 Parvas"}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border sticky top-0 bg-background z-10">
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
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all active:scale-[0.99]">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{section.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-primary font-medium">{sectionLabel} {section.number}</p>
                        {extendedContent[section.id] && (
                          <span className="px-1.5 py-0.5 rounded-full bg-gold/20 text-[10px] text-gold font-medium">
                            Detailed
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                      <p className="text-sm font-sanskrit text-gold">{section.nameSanskrit}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{section.summary}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 self-center" />
                  </div>
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
                  <div className="w-full h-20 rounded-lg bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center mb-2">
                    <span className="text-3xl">{char.role.includes('Lord') || char.role.includes('God') ? '🙏' : '👤'}</span>
                  </div>
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
