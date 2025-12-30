import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Scroll, ChevronRight, BookOpen, Users, Star, Clock } from "lucide-react";
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
}

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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rama_breaking_the_bow.jpg/600px-Rama_breaking_the_bow.jpg",
    color: "from-amber-500/30 to-orange-600/20",
    gradient: "bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-red-900/40",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg/600px-Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg",
    color: "from-primary/30 to-purple-600/20",
    gradient: "bg-gradient-to-br from-primary/40 via-purple-800/30 to-indigo-900/40",
  },
];

const comingSoonStories = [
  {
    title: "Bhagavata Purana",
    titleSanskrit: "भागवत पुराण",
    description: "The life and teachings of Lord Krishna",
  },
  {
    title: "Shiva Purana",
    titleSanskrit: "शिव पुराण",
    description: "Stories of Lord Shiva and cosmic wisdom",
  },
  {
    title: "Devi Mahatmya",
    titleSanskrit: "देवी माहात्म्य",
    description: "The glory of the Divine Mother",
  },
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

        {/* Featured Story Cards */}
        <div className="px-4 space-y-5">
          {stories.map((story, idx) => (
            <Link
              key={story.id}
              to={`/stories/${story.id}`}
              className="block animate-fade-in"
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
                  />
                  <div className={cn("absolute inset-0", story.gradient)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>
                
                <div className="relative p-5 pt-32">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{story.title}</h3>
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
                  <Button variant="saffron" className="w-full justify-between">
                    <span>{t.beginReading}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="px-4 space-y-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Coming Soon
          </h3>
          
          <div className="space-y-2">
            {comingSoonStories.map((story, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Scroll className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground">{story.title}</h4>
                  <p className="text-xs text-muted-foreground truncate">{story.description}</p>
                </div>
                <span className="text-xs text-primary font-medium">Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Stories;
