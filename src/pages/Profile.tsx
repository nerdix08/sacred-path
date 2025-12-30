import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Moon, Sun, Globe, Bell, 
  BookOpen, Trophy, Flame, ChevronRight,
  HelpCircle, Bookmark, Volume2, Trash2,
  RotateCcw, Info, Shield, Type, Palette,
  Download, Database, BellRing
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useStreak } from "@/hooks/useStreak";
import { useSavedVerses } from "@/hooks/useSavedVerses";
import { useLanguage, languageNames, LanguageCode } from "@/hooks/useLanguage";
import { useReadingSettings } from "@/hooks/useReadingSettings";
import { useNotifications } from "@/hooks/useNotifications";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const fontColors = [
  { id: "default", name: "Default", color: "hsl(40, 10%, 92%)" },
  { id: "warm", name: "Warm", color: "hsl(35, 85%, 70%)" },
  { id: "cool", name: "Cool", color: "hsl(200, 60%, 75%)" },
  { id: "sepia", name: "Sepia", color: "hsl(30, 50%, 75%)" },
];

const Profile = () => {
  const [isDark, setIsDark] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showFontSettings, setShowFontSettings] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();
  const {
    fontSize,
    fontColor,
    showSanskrit,
    dailyShlokaEnabled,
    offlineFavorites,
    setFontSize,
    setFontColor,
    toggleSanskrit,
    toggleDailyShloka,
    toggleOfflineFavorites,
    resetSettings,
  } = useReadingSettings();
  
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
  
  const {
    isSupported: notificationsSupported,
    isGranted: notificationsGranted,
    requestPermission,
    sendDailyShloka,
    scheduleDailyNotification,
  } = useNotifications();

  useEffect(() => {
    const storedTheme = localStorage.getItem("vidya_theme");
    setIsDark(storedTheme !== "light");
  }, []);
  
  useEffect(() => {
    // Schedule daily notifications if enabled
    if (dailyShlokaEnabled && notificationsGranted) {
      scheduleDailyNotification();
    }
  }, [dailyShlokaEnabled, notificationsGranted, scheduleDailyNotification]);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("vidya_theme", newTheme);
    document.documentElement.classList.toggle("light", !isDark);
  };
  
  const handleToggleDailyShloka = async () => {
    if (!dailyShlokaEnabled && notificationsSupported && !notificationsGranted) {
      const granted = await requestPermission();
      if (granted) {
        toggleDailyShloka();
        toast({
          title: "Notifications Enabled",
          description: "You'll receive daily shloka reminders at 7 AM",
        });
        // Send a test notification
        sendDailyShloka();
      } else {
        toast({
          title: "Permission Denied",
          description: "Please enable notifications in your browser settings",
          variant: "destructive",
        });
      }
    } else {
      toggleDailyShloka();
      if (!dailyShlokaEnabled) {
        toast({
          title: "Daily Shloka Enabled",
          description: "You'll receive daily verse reminders",
        });
      }
    }
  };

  const handleLanguageSelect = (code: LanguageCode) => {
    setLanguage(code);
    setShowLanguage(false);
  };

  const progressPercent = (totalVersesRead / 700) * 100;
  const chapterProgress = (chaptersCompleted / 18) * 100;

  const currentLang = languageNames[language];
  const currentFontColor = fontColors.find(f => f.id === fontColor) || fontColors[0];

  return (
    <AppLayout title={t.settings} showStreak={false}>
      <div className="space-y-6 py-4">
        {/* Stats Cards */}
        <div className="px-4 animate-fade-in">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/20 mx-auto mb-2 flex items-center justify-center pulse-glow">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{currentStreak}</p>
              <p className="text-xs text-muted-foreground">{t.dayStreak}</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-gold/20 mx-auto mb-2 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-gold" />
              </div>
              <p className="text-xl font-bold text-foreground">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">{t.bestStreak}</p>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <div className="w-10 h-10 rounded-lg bg-accent/30 mx-auto mb-2 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{totalVersesRead}</p>
              <p className="text-xs text-muted-foreground">{t.versesRead}</p>
            </div>
          </div>
        </div>

        {/* Today's Progress */}
        <div className="px-4 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground">{t.todaysProgress}</h3>
              <span className="text-xs text-primary font-medium">
                {versesReadToday}/{dailyGoal} {t.verses.toLowerCase()}
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
            <h3 className="text-sm font-medium text-foreground mb-3">{t.gitaProgress}</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{t.verses}</span>
                  <span className="text-foreground font-medium">{totalVersesRead}/700</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{t.chapters}</span>
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
              <span className="text-sm text-foreground">{t.savedVerses}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary font-medium">{savedVerses.length}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>
        </div>

        {/* Reading Experience */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.14s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            {t.readingExperience}
          </h3>

          {/* Font Size */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-foreground">{t.fontSize}</span>
              </div>
              <span className="text-sm text-primary font-medium">{fontSize}px</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Aa</span>
              <Slider
                value={[fontSize]}
                onValueChange={(val) => setFontSize(val[0])}
                min={14}
                max={28}
                step={2}
                className="flex-1"
              />
              <span className="text-lg text-muted-foreground">Aa</span>
            </div>
          </div>

          {/* Font Color */}
          <button
            onClick={() => setShowFontSettings(true)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">{t.fontColor}</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-5 h-5 rounded-full border border-border"
                style={{ backgroundColor: currentFontColor.color }}
              />
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
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
              <span className="text-sm text-foreground">{t.language}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {currentLang.native} & Sanskrit
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>
        </div>

        {/* Interface Settings */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.16s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Interface
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
              <div>
                <span className="text-sm text-foreground">{t.appearance}</span>
                <p className="text-xs text-muted-foreground">
                  {isDark ? "Reduces eye strain" : "Better visibility"}
                </p>
              </div>
            </div>
            <div className={cn(
              "w-12 h-7 rounded-full transition-colors flex items-center px-1",
              isDark ? "bg-primary" : "bg-muted"
            )}>
              <div className={cn(
                "w-5 h-5 rounded-full bg-white transition-transform",
                isDark ? "translate-x-5" : "translate-x-0"
              )} />
            </div>
          </button>

          {/* Daily Shloka */}
          <button
            onClick={handleToggleDailyShloka}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <BellRing className="w-5 h-5 text-muted-foreground" />
              <div>
                <span className="text-sm text-foreground">{t.dailyShloka}</span>
                <p className="text-xs text-muted-foreground">
                  {notificationsSupported 
                    ? (notificationsGranted ? "Notifications enabled" : "Tap to enable notifications")
                    : "Daily verse reminder"}
                </p>
              </div>
            </div>
            <div className={cn(
              "w-12 h-7 rounded-full transition-colors flex items-center px-1",
              dailyShlokaEnabled ? "bg-primary" : "bg-muted"
            )}>
              <div className={cn(
                "w-5 h-5 rounded-full bg-white transition-transform",
                dailyShlokaEnabled ? "translate-x-5" : "translate-x-0"
              )} />
            </div>
          </button>
        </div>

        {/* Offline Library */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.18s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            {t.offlineLibrary}
          </h3>

          {/* Download Favorites */}
          <button
            onClick={toggleOfflineFavorites}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-muted-foreground" />
              <div>
                <span className="text-sm text-foreground">{t.downloadFavorites}</span>
                <p className="text-xs text-muted-foreground">Auto-save for offline reading</p>
              </div>
            </div>
            <div className={cn(
              "w-12 h-7 rounded-full transition-colors flex items-center px-1",
              offlineFavorites ? "bg-primary" : "bg-muted"
            )}>
              <div className={cn(
                "w-5 h-5 rounded-full bg-white transition-transform",
                offlineFavorites ? "translate-x-5" : "translate-x-0"
              )} />
            </div>
          </button>

          {/* Storage Used */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-foreground">{t.storageUsed}</span>
              </div>
              <span className="text-sm text-muted-foreground">250 MB / 2 GB</span>
            </div>
            <Progress value={12.5} className="h-2 mb-2" />
            <button className="text-xs text-primary hover:underline">{t.clearCache}</button>
          </div>
        </div>

        {/* Support Section */}
        <div className="px-4 space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
            {t.support}
          </h3>

          {/* Text to Speech */}
          <button
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border",
              "hover:bg-card/80 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-foreground">{t.textToSpeech}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

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
              <span className="text-sm text-foreground">{t.helpSupport}</span>
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
              <span className="text-sm text-foreground">{t.aboutVidya}</span>
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
              <span className="text-sm text-foreground">{t.privacyPolicy}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Reset Progress */}
          <button
            onClick={() => {
              resetStats();
              resetSettings();
            }}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl bg-destructive/10 border border-destructive/20",
              "hover:bg-destructive/20 transition-colors"
            )}
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-destructive" />
              <span className="text-sm text-destructive">{t.resetProgress}</span>
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
              <DialogTitle className="text-foreground">{t.chooseLanguage}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {t.selectLanguage}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 mt-4">
              {(Object.keys(languageNames) as LanguageCode[]).map((code) => (
                <button
                  key={code}
                  onClick={() => handleLanguageSelect(code)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl border transition-all",
                    language === code
                      ? "bg-primary/10 border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  )}
                >
                  <div className="text-left">
                    <p className={cn(
                      "font-medium",
                      language === code ? "text-primary" : "text-foreground"
                    )}>
                      {languageNames[code].native}
                    </p>
                    <p className="text-xs text-muted-foreground">{languageNames[code].english}</p>
                  </div>
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    language === code
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  )}>
                    {language === code && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              📜 Sanskrit shlokas are shown in all languages
            </p>
          </DialogContent>
        </Dialog>

        {/* Font Color Dialog */}
        <Dialog open={showFontSettings} onOpenChange={setShowFontSettings}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">{t.fontColor}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Choose a color for reading text
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 mt-4">
              {fontColors.map((fc) => (
                <button
                  key={fc.id}
                  onClick={() => {
                    setFontColor(fc.id);
                    setShowFontSettings(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between p-3 rounded-xl border transition-all",
                    fontColor === fc.id
                      ? "bg-primary/10 border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full border border-border"
                      style={{ backgroundColor: fc.color }}
                    />
                    <span className={cn(
                      "font-medium",
                      fontColor === fc.id ? "text-primary" : "text-foreground"
                    )}>
                      {fc.name}
                    </span>
                  </div>
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    fontColor === fc.id
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  )}>
                    {fontColor === fc.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            {/* Preview */}
            <div className="mt-4 p-4 rounded-xl bg-background border border-border">
              <p className="text-xs text-muted-foreground mb-2">Preview:</p>
              <p 
                className="sanskrit-text"
                style={{ 
                  color: currentFontColor.color,
                  fontSize: `${fontSize}px`
                }}
              >
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {/* Saved Verses Dialog */}
        <Dialog open={showSaved} onOpenChange={setShowSaved}>
          <DialogContent className="bg-card border-border max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-foreground flex items-center justify-between">
                {t.savedVerses}
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
                        {t.chapter} {verse.chapter}, {t.verse} {verse.verse}
                      </span>
                      <button
                        onClick={() => removeVerse(verse.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {verse.sanskrit && (
                      <p 
                        className="sanskrit-text text-sm mb-2"
                        style={{ fontSize: `${fontSize}px` }}
                      >
                        {verse.sanskrit}
                      </p>
                    )}
                    <p className="text-sm text-foreground">{verse.translation}</p>
                  </div>
                ))
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Notifications info is now handled inline */}

        {/* Help Dialog */}
        <Dialog open={showHelp} onOpenChange={setShowHelp}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">{t.helpSupport}</DialogTitle>
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
