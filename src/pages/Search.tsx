import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Sparkles, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const popularSearches = [
  "karma yoga",
  "dharma",
  "detachment",
  "self-realization",
  "duty",
  "peace of mind",
];

const recentSearches = [
  "Chapter 2 Verse 47",
  "What is yoga?",
  "Lord Krishna teachings",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (searchQuery: string) => {
    // For now, just set the query - AI search would be implemented with backend
    setQuery(searchQuery);
  };

  return (
    <AppLayout title="Search">
      <div className="space-y-6 py-4">
        {/* Search Input */}
        <div className="px-4 animate-fade-in">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search verses, concepts, or ask a question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={cn(
                "w-full h-12 pl-12 pr-4 rounded-xl",
                "bg-card border border-border",
                "text-foreground placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                "transition-all duration-200"
              )}
            />
          </div>
        </div>

        {/* Ask Vidya AI */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Button 
            variant="saffron" 
            className="w-full justify-start gap-3 h-14"
            onClick={() => navigate("/ask")}
          >
            <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Ask Vidya AI</p>
              <p className="text-xs opacity-80">Get explanations from scripture</p>
            </div>
          </Button>
        </div>

        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="px-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-muted-foreground">Recent</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search) => (
                <Button
                  key={search}
                  variant="secondary"
                  size="sm"
                  onClick={() => handleSearch(search)}
                >
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Popular Topics */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">Popular Topics</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search) => (
              <Button
                key={search}
                variant="outline"
                size="sm"
                onClick={() => handleSearch(search)}
              >
                {search}
              </Button>
            ))}
          </div>
        </div>

        {/* Search by Theme */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Browse by Theme</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Karma & Action", icon: "⚡" },
              { label: "Dharma & Duty", icon: "⚖️" },
              { label: "Mind & Peace", icon: "🧘" },
              { label: "Knowledge", icon: "📚" },
              { label: "Devotion", icon: "🙏" },
              { label: "Liberation", icon: "✨" },
            ].map((theme) => (
              <button
                key={theme.label}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl bg-card border border-border",
                  "hover:border-primary/30 hover:bg-card/80 transition-all duration-200",
                  "active:scale-[0.98] text-left"
                )}
              >
                <span className="text-xl">{theme.icon}</span>
                <span className="text-sm font-medium text-foreground">{theme.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Search;
