import { AppLayout } from "@/components/layout/AppLayout";
import { ChapterCard } from "@/components/gita/ChapterCard";
import { gitaChapters, totalVerses } from "@/data/gitaChapters";
import { BookOpen } from "lucide-react";

const Gita = () => {
  // Simulated progress data
  const userProgress: Record<number, number> = {
    1: 100,
    2: 65,
    3: 30,
    4: 0,
  };

  return (
    <AppLayout title="Bhagavad Gita">
      <div className="space-y-4 py-4">
        {/* Header Stats */}
        <div className="px-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Bhagavad Gita</h2>
              <p className="text-sm text-muted-foreground">
                18 Chapters • {totalVerses} Verses
              </p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            The eternal wisdom of Lord Krishna's teachings to Arjuna on the battlefield of Kurukshetra. 
            A timeless guide to life, duty, and self-realization.
          </p>
        </div>

        {/* Chapters List */}
        <div className="px-4 space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Chapters
          </h3>
          
          <div className="space-y-2">
            {gitaChapters.map((chapter) => (
              <ChapterCard
                key={chapter.number}
                number={chapter.number}
                titleSanskrit={chapter.titleSanskrit}
                titleEnglish={chapter.titleEnglish}
                versesCount={chapter.versesCount}
                progress={userProgress[chapter.number] || 0}
                isCompleted={userProgress[chapter.number] === 100}
              />
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Gita;
