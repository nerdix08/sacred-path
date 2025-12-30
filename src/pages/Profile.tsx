import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Settings, Moon, Sun, Globe, Bell, 
  BookOpen, Trophy, Flame, ChevronRight,
  HelpCircle, Bookmark, Volume2, Trash2,
  RotateCcw, Info, Shield
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useStreak } from "@/hooks/useStreak";
import { useSavedVerses } from "@/hooks/useSavedVerses";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const languages = [
  { code: "te", name: "తెలుగు", label: "Telugu" },
  { code: "hi", name: "हिंदी", label: "Hindi" },
  { code: "en", name: "English", label: "English" },
  { code: "ta", name: "தமிழ்", label: "Tamil" },
  { code: "kn", name: "ಕನ್ನಡ", label: "Kannada" },
  { code: "sa", name: "संस्कृतम्", label: "Sanskrit" },
];

const Profile = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const { 
    currentStreak, 
    longestStreak, 
    totalVersesRead, 
    chaptersCompleted,
    versesReadToday,
    dailyGoal,
    resetStats 
  } = useStreak();
  
  const { savedVerses, removeVerse, clearAll } = useSavedVerses();

  useEffect(() => {
    const storedLang = localStorage.getItem("vidya_language");
    if (storedLang) setSelectedLanguage(storedLang);
    
    const storedTheme = localStorage.getItem("vidya_theme");
    setIsDark(storedTheme !== "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("vidya_theme", newTheme);
    document.documentElement.classList.toggle("light", !isDark);
  };

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    localStorage.setItem("vidya_language", code);
    setShowLanguage(false);
  };

  const progressPercent = (totalVersesRead / 700) * 100;
  const chapterProgress = (chaptersCompleted / 18) * 100;

  const currentLang = languages.find(l => l.code === selectedLanguage);

  return (
    <AppLayout title="Settings" showStreak={false}>
      <div className="space-y-6 py-4">
        {/* Stats Cards */}
        <div className="px-4 animate-fade-in">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/20 mx-auto mb-2 flex items-center justify-center pulse-glow">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{currentStreak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-gold/20 mx-auto mb-2 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gold" />
              </div>
              <p className="text-xl font-bold text-foreground">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">Best Streak</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-accent/30 mx-auto mb-2 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{totalVersesRead}</p>
              <p className="text-xs text-muted-foreground">Verses Read</p>
            </div>
          </div>
        </div>

        {/* Today's Progress */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground">Today's Progress</h3>
              <span className="text-xs text-primary font-medium">
                {versesReadToday}/{dailyGoal} verses
              </span>
            </div>
            <Progress value={(versesReadToday / dailyGoal) * 100} className="h-2" />
            {versesReadToday >= dailyGoal && (
              <p className="text-xs text-primary mt-2">🎉 Daily goal complete!</p>
            )}
          </div>
        </div>

        {/* Gita Progress Card */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-medium text-foreground mb-3">Gita Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Verses</span>
                  <span className="text-foreground font-medium">{totalVersesRead}/700</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Chapters</span>
                  <span className="text-foreground font-medium">{chaptersCompleted}/18</span>
                </div>
                <Progress value={chapterProgress} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Saved Verses */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.12s" }}>
          <button
            onClick={() => setShowSaved(true)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Bookmark className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Saved Verses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary font-medium">{savedVerses.length}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>
        </div>

        {/* Settings List */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Preferences
          </h3>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
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
            onClick={() => setShowLanguage(true)}
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
              <span className="text-sm text-muted-foreground">{currentLang?.label || "English"}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>

          {/* Notifications */}
          <button
            onClick={() => setShowNotifications(true)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{notificationsEnabled ? "On" : "Off"}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>

          {/* Text to Speech */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Text to Speech</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Support Section */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Support
          </h3>

          {/* Help */}
          <button
            onClick={() => setShowHelp(true)}
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

          {/* About */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">About Vidya</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Privacy */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">Privacy Policy</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Reset Progress */}
          <button
            onClick={resetStats}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-destructive/10 border border-destructive/20",
              "hover:bg-destructive/20 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-destructive" />
              <span className="text-sm text-destructive">Reset Progress</span>
            </div>
          </button>
        </div>

        {/* Version */}
        <div className="px-4 text-center animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <p className="text-xs text-muted-foreground">Vidya v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">Made with 🙏 for seekers of wisdom</p>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />

        {/* Language Dialog */}
        <Dialog open={showLanguage} onOpenChange={setShowLanguage}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Choose Language</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Select your preferred language for reading scriptures.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 mt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl border transition-all",
                    selectedLanguage === lang.code
                      ? "bg-primary/10 border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  )}
                >
                  <div className="text-left">
                    <p className={cn(
                      "font-medium",
                      selectedLanguage === lang.code ? "text-primary" : "text-foreground"
                    )}>
                      {lang.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{lang.label}</p>
                  </div>
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    selectedLanguage === lang.code
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  )}>
                    {selectedLanguage === lang.code && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Saved Verses Dialog */}
        <Dialog open={showSaved} onOpenChange={setShowSaved}>
          <DialogContent className="bg-card border-border max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-foreground flex items-center justify-between">
                Saved Verses
                {savedVerses.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearAll}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3 mt-4">
              {savedVerses.length === 0 ? (
                <div className="text-center py-8">
                  <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">No saved verses yet</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Save verses while reading to find them here
                  </p>
                </div>
              ) : (
                savedVerses.map((verse) => (
                  <div 
                    key={verse.id}
                    className="p-3 rounded-xl bg-background border border-border"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-primary font-medium">
                        Chapter {verse.chapter}, Verse {verse.verse}
                      </span>
                      <button
                        onClick={() => removeVerse(verse.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {verse.sanskrit && (
                      <p className="sanskrit-text text-sm mb-2">{verse.sanskrit}</p>
                    )}
                    <p className="text-sm text-foreground">{verse.translation}</p>
                  </div>
                ))
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Notifications Dialog */}
        <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Notifications</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Manage your notification preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-background border border-border"
              >
                <div>
                  <p className="text-sm text-foreground">Daily Verse Reminder</p>
                  <p className="text-xs text-muted-foreground">Get a verse notification each morning</p>
                </div>
                <div className={cn(
                  "w-10 h-6 rounded-full transition-colors flex items-center px-1",
                  notificationsEnabled ? "bg-primary" : "bg-muted"
                )}>
                  <div className={cn(
                    "w-4 h-4 rounded-full bg-white transition-transform",
                    notificationsEnabled ? "translate-x-4" : "translate-x-0"
                  )} />
                </div>
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Help Dialog */}
        <Dialog open={showHelp} onOpenChange={setShowHelp}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Help & Support</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl bg-background border border-border">
                <h4 className="text-sm font-medium text-foreground mb-2">How to use Vidya</h4>
                <ul className="text-xs text-muted-foreground space-y-2">
                  <li>• Read daily verses on the home screen</li>
                  <li>• Explore all 18 chapters of the Gita</li>
                  <li>• Save your favorite verses for later</li>
                  <li>• Ask Vidya AI any spiritual questions</li>
                  <li>• Read stories from Ramayana & Mahabharata</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border">
                <h4 className="text-sm font-medium text-foreground mb-2">Contact Us</h4>
                <p className="text-xs text-muted-foreground">
                  For support or feedback, email us at support@vidya.app
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default Profile;
