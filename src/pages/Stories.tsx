import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Scroll, ChevronRight, BookOpen, Users, Star, Clock, Sparkles, Flame, Moon, Sun, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

interface StoryCard {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  chapters: number;
  chapterLabel: string;
  verses: string;
  readTime: string;
  imageUrl: string;
  color: string;
  gradient: string;
  available: boolean;
}

// Import local story images
import ramaSitaWedding from "@/assets/stories/rama-sita-wedding.jpg";
import gitaDiscourse from "@/assets/stories/gita-discourse.jpg";
import fourPrinces from "@/assets/stories/four-princes.jpg";
import sacredYajna from "@/assets/stories/sacred-yajna.jpg";
import draupadiBirth from "@/assets/stories/draupadi-birth.jpg";
import ramaCoronation from "@/assets/stories/rama-coronation.jpg";

const stories: StoryCard[] = [
  {
    id: "ramayana",
    title: "Ramayana",
    titleSanskrit: "रामायणम्",
    description: "The timeless epic of Lord Rama, embodiment of dharma. Follow his journey from prince to exile, the abduction of Sita, and the great war against Ravana. A tale of duty, devotion, and the triumph of good over evil.",
    chapters: 7,
    chapterLabel: "Kandas",
    verses: "24,000",
    readTime: "40+ hours",
    imageUrl: ramaSitaWedding,
    color: "from-amber-500/30 to-orange-600/20",
    gradient: "bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/40",
    available: true,
  },
  {
    id: "mahabharata",
    title: "Mahabharata",
    titleSanskrit: "महाभारतम्",
    description: "The greatest epic ever told. Witness the cosmic struggle between the Pandavas and Kauravas, featuring the divine Bhagavad Gita. Explore themes of dharma, karma, and the eternal battle between righteousness and adharma.",
    chapters: 18,
    chapterLabel: "Parvas",
    verses: "100,000",
    readTime: "200+ hours",
    imageUrl: gitaDiscourse,
    color: "from-primary/30 to-purple-600/20",
    gradient: "bg-gradient-to-br from-primary/40 via-purple-800/30 to-indigo-900/40",
    available: true,
  },
  {
    id: "bhagavata-purana",
    title: "Bhagavata Purana",
    titleSanskrit: "भागवत पुराण",
    description: "The life and divine leelas of Lord Krishna from birth in Mathura to His role as the supreme guide. Contains the essence of Vedantic philosophy and the path of pure devotion (Bhakti).",
    chapters: 12,
    chapterLabel: "Skandhas",
    verses: "18,000",
    readTime: "50+ hours",
    imageUrl: fourPrinces,
    color: "from-blue-500/30 to-purple-600/20",
    gradient: "bg-gradient-to-br from-blue-900/40 via-purple-800/30 to-pink-900/40",
    available: true,
  },
  {
    id: "shiva-purana",
    title: "Shiva Purana",
    titleSanskrit: "शिव पुराण",
    description: "The glory of Lord Shiva - the destroyer and transformer. Stories of Shiva's marriages, cosmic dance, battle with demons, and profound teachings on consciousness and liberation.",
    chapters: 7,
    chapterLabel: "Samhitas",
    verses: "24,000",
    readTime: "45+ hours",
    imageUrl: sacredYajna,
    color: "from-slate-500/30 to-blue-600/20",
    gradient: "bg-gradient-to-br from-slate-900/40 via-blue-800/30 to-indigo-900/40",
    available: true,
  },
  {
    id: "devi-mahatmya",
    title: "Devi Mahatmya",
    titleSanskrit: "देवी माहात्म्य",
    description: "The glory of the Divine Mother - Goddess Durga, Lakshmi, and Saraswati. The epic battle against demons Mahishasura and Raktabija, and the supreme shakti that protects the universe.",
    chapters: 13,
    chapterLabel: "Chapters",
    verses: "700",
    readTime: "8+ hours",
    imageUrl: draupadiBirth,
    color: "from-red-500/30 to-pink-600/20",
    gradient: "bg-gradient-to-br from-red-900/40 via-pink-800/30 to-purple-900/40",
    available: true,
  },
  {
    id: "vishnu-purana",
    title: "Vishnu Purana",
    titleSanskrit: "विष्णु पुराण",
    description: "The creation of the universe, the ten avatars of Lord Vishnu, and the cosmic cycles of time. Essential reading for understanding Vaishnavism and the preservation aspect of the divine.",
    chapters: 6,
    chapterLabel: "Amshas",
    verses: "23,000",
    readTime: "40+ hours",
    imageUrl: ramaCoronation,
    color: "from-blue-500/30 to-cyan-600/20",
    gradient: "bg-gradient-to-br from-blue-900/40 via-cyan-800/30 to-teal-900/40",
    available: true,
  },
];

// Additional spiritual content categories
const upanishads = [
  { name: "Isha Upanishad", sanskrit: "ईशोपनिषद्", verses: 18, theme: "The Lord dwells in all beings" },
  { name: "Kena Upanishad", sanskrit: "केनोपनिषद्", verses: 35, theme: "Who is the power behind all powers?" },
  { name: "Katha Upanishad", sanskrit: "कठोपनिषद्", verses: 119, theme: "Nachiketa's dialogue with Death" },
  { name: "Mundaka Upanishad", sanskrit: "मुण्डकोपनिषद्", verses: 64, theme: "Higher and lower knowledge" },
  { name: "Mandukya Upanishad", sanskrit: "माण्डूक्योपनिषद्", verses: 12, theme: "The sacred syllable Om" },
  { name: "Taittiriya Upanishad", sanskrit: "तैत्तिरीयोपनिषद्", verses: 31, theme: "Five sheaths of existence" },
  { name: "Aitareya Upanishad", sanskrit: "ऐतरेयोपनिषद्", verses: 33, theme: "Creation and the Self" },
  { name: "Chandogya Upanishad", sanskrit: "छान्दोग्योपनिषद्", verses: 627, theme: "Tat Tvam Asi - You are That" },
  { name: "Brihadaranyaka Upanishad", sanskrit: "बृहदारण्यकोपनिषद्", verses: 435, theme: "The great forest of knowledge" },
  { name: "Shvetashvatara Upanishad", sanskrit: "श्वेताश्वतरोपनिषद्", verses: 113, theme: "Personal God and liberation" },
];

const stotraCollection = [
  { name: "Vishnu Sahasranama", sanskrit: "विष्णुसहस्रनाम", verses: 1000, deity: "Vishnu" },
  { name: "Lalita Sahasranama", sanskrit: "ललितासहस्रनाम", verses: 1000, deity: "Devi" },
  { name: "Shiva Sahasranama", sanskrit: "शिवसहस्रनाम", verses: 1000, deity: "Shiva" },
  { name: "Hanuman Chalisa", sanskrit: "हनुमान चालीसा", verses: 40, deity: "Hanuman" },
  { name: "Sundara Kanda", sanskrit: "सुन्दरकाण्ड", verses: 2885, deity: "Hanuman" },
  { name: "Aditya Hridayam", sanskrit: "आदित्यहृदयम्", verses: 31, deity: "Surya" },
  { name: "Durga Saptashati", sanskrit: "दुर्गासप्तशती", verses: 700, deity: "Durga" },
  { name: "Soundarya Lahari", sanskrit: "सौन्दर्यलहरी", verses: 103, deity: "Devi" },
];

const Stories = () => {
  const { t } = useLanguage();
  
  return (
    <AppLayout title={t.stories}>
      <div className="space-y-6 py-4">
        {/* Header */}
        <div className="px-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
              <Scroll className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{t.sacredStories}</h2>
              <p className="text-sm text-muted-foreground">
                {t.ancientWisdom}
              </p>
            </div>
          </div>
        </div>

        {/* Epic Stories Section */}
        <div className="px-4">
          <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4" />
            Itihasas & Puranas
          </h3>
        </div>

        {/* Featured Story Cards */}
        <div className="px-4 space-y-5">
          {stories.map((story, idx) => (
            <Link
              key={story.id}
              to={story.available ? `/stories/${story.id}` : '#'}
              className={cn(
                "block animate-fade-in",
                !story.available && "pointer-events-none opacity-70"
              )}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl",
                "hover:scale-[1.01] transition-all duration-300",
                "active:scale-[0.99]",
                "shadow-lg"
              )}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className={cn("absolute inset-0", story.gradient)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                
                <div className="relative p-5 pt-32">
                  {/* Title */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-foreground">{story.title}</h3>
                      {!story.available && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-sanskrit text-primary">{story.titleSanskrit}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {story.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs text-foreground font-medium">{story.chapters} {story.chapterLabel}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs text-foreground font-medium">{story.verses} Verses</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs text-foreground font-medium">{story.readTime}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={story.available ? "saffron" : "outline"} 
                    className="w-full justify-between"
                    disabled={!story.available}
                  >
                    <span>{story.available ? t.beginReading : "Coming Soon"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Upanishads Section */}
        <div className="px-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-sm font-medium text-primary uppercase tracking-wider flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Principal Upanishads
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            The philosophical essence of the Vedas - highest spiritual wisdom
          </p>
          
          <div className="space-y-2">
            {upanishads.map((upanishad, idx) => (
              <Link
                key={idx}
                to={`/stories/upanishads/${upanishad.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🕉️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground">{upanishad.name}</h4>
                  <p className="text-xs font-sanskrit text-gold">{upanishad.sanskrit}</p>
                  <p className="text-[10px] text-muted-foreground truncate mt-0.5">{upanishad.theme}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-primary font-medium">{upanishad.verses}</span>
                  <p className="text-[10px] text-muted-foreground">verses</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Stotras & Hymns Section */}
        <div className="px-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-sm font-medium text-primary uppercase tracking-wider flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Sacred Stotras & Hymns
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Devotional hymns for daily practice and spiritual upliftment
          </p>
          
          <div className="grid grid-cols-2 gap-2">
            {stotraCollection.map((stotra, idx) => (
              <Link
                key={idx}
                to={`/stories/stotras/${stotra.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center mb-2">
                  <span className="text-sm">🙏</span>
                </div>
                <h4 className="text-xs font-medium text-foreground line-clamp-1">{stotra.name}</h4>
                <p className="text-[10px] font-sanskrit text-gold truncate">{stotra.sanskrit}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-muted-foreground">{stotra.verses} verses</span>
                  <span className="text-[10px] text-primary">• {stotra.deity}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* More Coming Section */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">More Stories Coming</h3>
                <p className="text-xs text-muted-foreground">
                  Garuda Purana, Markandeya Purana, Brahma Purana, Yoga Vasishtha, and many more...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Stories;
