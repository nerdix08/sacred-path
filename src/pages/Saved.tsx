import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Bookmark, BookOpen, ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SavedVerse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  translation: string;
  savedAt: string;
}

const savedVerses: SavedVerse[] = [
  {
    id: "1",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    savedAt: "2 days ago"
  },
  {
    id: "2",
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    translation: "Whenever there is a decline of dharma and rise of adharma, I manifest Myself.",
    savedAt: "1 week ago"
  },
  {
    id: "3",
    chapter: 2,
    verse: 48,
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
    translation: "Perform your duties established in yoga, abandoning attachment, and be balanced in success and failure.",
    savedAt: "2 weeks ago"
  },
];

const Saved = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="Saved">
      <div className="space-y-4 py-4">
        {/* Header */}
        <div className="px-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Bookmark className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Saved Verses</h2>
              <p className="text-sm text-muted-foreground">
                {savedVerses.length} verses bookmarked
              </p>
            </div>
          </div>
        </div>

        {/* Empty State (conditional) */}
        {savedVerses.length === 0 ? (
          <div className="px-4 py-12 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No saved verses yet</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Bookmark verses while reading to save them here for quick access.
            </p>
            <Button variant="saffron" onClick={() => navigate("/gita")}>
              <BookOpen className="w-4 h-4 mr-2" />
              Start Reading
            </Button>
          </div>
        ) : (
          /* Saved Verses List */
          <div className="px-4 space-y-3">
            {savedVerses.map((verse, idx) => (
              <div
                key={verse.id}
                className={cn(
                  "relative rounded-xl bg-card border border-border overflow-hidden",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() => navigate(`/gita/chapter/${verse.chapter}/verse/${verse.verse}`)}
                  className="w-full p-4 text-left hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Reference */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">
                          Chapter {verse.chapter}, Verse {verse.verse}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{verse.savedAt}</span>
                      </div>
                      
                      {/* Sanskrit */}
                      <p className="text-sm font-sanskrit text-foreground mb-2 line-clamp-1">
                        {verse.sanskrit}
                      </p>
                      
                      {/* Translation */}
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {verse.translation}
                      </p>
                    </div>
                    
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                </button>
                
                {/* Quick Actions */}
                <div className="flex items-center justify-end gap-2 px-4 pb-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Saved;
