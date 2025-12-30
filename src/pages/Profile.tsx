import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, Settings, Moon, Sun, Globe, Bell, 
  BookOpen, Trophy, Flame, ChevronRight,
  LogOut, HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Profile = () => {
  const [isDark, setIsDark] = useState(true);

  const stats = {
    versesRead: 127,
    totalVerses: 700,
    chaptersCompleted: 3,
    totalChapters: 18,
    currentStreak: 7,
    longestStreak: 21,
  };

  const progressPercent = (stats.versesRead / stats.totalVerses) * 100;

  return (
    <AppLayout title="Profile" showStreak={false}>
      <div className="space-y-6 py-4">
        {/* Profile Header */}
        <div className="px-4 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Seeker</h2>
              <p className="text-sm text-muted-foreground">On the path of wisdom</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{stats.currentStreak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-gold/20 mx-auto mb-2 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gold" />
              </div>
              <p className="text-xl font-bold text-foreground">{stats.longestStreak}</p>
              <p className="text-xs text-muted-foreground">Best Streak</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-accent/30 mx-auto mb-2 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground">{stats.versesRead}</p>
              <p className="text-xs text-muted-foreground">Verses Read</p>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-medium text-foreground mb-3">Gita Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Verses</span>
                  <span className="text-foreground font-medium">{stats.versesRead}/{stats.totalVerses}</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Chapters</span>
                  <span className="text-foreground font-medium">{stats.chaptersCompleted}/{stats.totalChapters}</span>
                </div>
                <Progress value={(stats.chaptersCompleted / stats.totalChapters) * 100} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Settings List */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Settings
          </h3>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              {isDark ? <Moon className="w-5 h-5 text-muted-foreground" /> : <Sun className="w-5 h-5 text-muted-foreground" />}
              <span className="text-sm text-foreground">Appearance</span>
            </div>
            <span className="text-sm text-muted-foreground">{isDark ? "Dark" : "Light"}</span>
          </button>

          {/* Language */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Language</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">English</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>

          {/* Notifications */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Notifications</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Help */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Help & Support</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Version */}
        <div className="px-4 text-center animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <p className="text-xs text-muted-foreground">Vidya v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">Made with 🙏 for seekers of wisdom</p>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Profile;
