import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Scroll, ChevronRight, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface StoryCard {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  chapters: number;
  image?: string;
  color: string;
}

const stories: StoryCard[] = [
  {
    id: "ramayana",
    title: "Ramayana",
    titleSanskrit: "रामायणम्",
    description: "The epic journey of Lord Rama, an embodiment of dharma, righteousness, and virtue.",
    chapters: 7,
    color: "from-amber-500/20 to-orange-600/10",
  },
  {
    id: "mahabharata",
    title: "Mahabharata",
    titleSanskrit: "महाभारतम्",
    description: "The greatest epic of dharma, duty, and the eternal struggle between good and evil.",
    chapters: 18,
    color: "from-primary/20 to-primary/5",
  },
];

const Stories = () => {
  return (
    <AppLayout title="Stories">
      <div className="space-y-6 py-4">
        {/* Header */}
        <div className="px-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
              <Scroll className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Sacred Stories</h2>
              <p className="text-sm text-muted-foreground">
                Ancient wisdom through epic narratives
              </p>
            </div>
          </div>
        </div>

        {/* Story Cards */}
        <div className="px-4 space-y-4">
          {stories.map((story, idx) => (
            <Link
              key={story.id}
              to={`/stories/${story.id}`}
              className="block animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl bg-card border border-border",
                "hover:border-primary/30 transition-all duration-200",
                "active:scale-[0.99]"
              )}>
                {/* Gradient Background */}
                <div className={cn("absolute inset-0 bg-gradient-to-br", story.color)} />
                
                <div className="relative p-5">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
                    <p className="text-base font-sanskrit text-muted-foreground">{story.titleSanskrit}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {story.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-xs">{story.chapters} {story.id === "ramayana" ? "Kandas" : "Parvas"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">Key Characters</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="saffron-outline" className="w-full justify-between">
                    <span>Begin Reading</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <p className="text-sm text-muted-foreground text-center">
              📚 Complete story content with illustrations and character details coming soon
            </p>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Stories;
