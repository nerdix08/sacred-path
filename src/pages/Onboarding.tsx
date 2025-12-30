import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const languages = [
  { code: "te", name: "తెలుగు", label: "Telugu" },
  { code: "hi", name: "हिंदी", label: "Hindi" },
  { code: "en", name: "English", label: "English" },
  { code: "ta", name: "தமிழ்", label: "Tamil" },
  { code: "kn", name: "ಕನ್ನಡ", label: "Kannada" },
  { code: "sa", name: "संस्कृतम्", label: "Sanskrit" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"welcome" | "language">("welcome");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleBeginExploration = () => {
    setStep("language");
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      localStorage.setItem("vidya_language", selectedLanguage);
      localStorage.setItem("vidya_onboarded", "true");
      navigate("/");
    }
  };

  const handleLogin = () => {
    // Future: implement login
    navigate("/");
  };

  if (step === "welcome") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6 safe-top safe-bottom">
        {/* Top spacer */}
        <div className="w-full h-6" />

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-gold/10 border border-primary/30 flex items-center justify-center mb-8 saffron-glow">
            <svg 
              viewBox="0 0 100 100" 
              className="w-12 h-12"
              fill="none"
            >
              {/* Lotus flower */}
              <ellipse cx="50" cy="70" rx="25" ry="8" fill="hsl(35, 85%, 52%)" opacity="0.3"/>
              <path d="M50 25 C45 40, 35 50, 30 60 Q40 55, 50 50 Q60 55, 70 60 C65 50, 55 40, 50 25" fill="hsl(35, 85%, 52%)"/>
              <path d="M35 35 C30 45, 22 55, 20 65 Q30 58, 40 55" fill="hsl(42, 80%, 55%)" opacity="0.8"/>
              <path d="M65 35 C70 45, 78 55, 80 65 Q70 58, 60 55" fill="hsl(42, 80%, 55%)" opacity="0.8"/>
              {/* Om symbol simplified */}
              <text x="50" y="52" textAnchor="middle" fill="hsl(220, 20%, 6%)" fontSize="16" fontWeight="bold">ॐ</text>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-foreground mb-3 font-sanskrit">
            Vidya
          </h1>

          {/* Tagline */}
          <p className="text-lg text-foreground/80 mb-2">
            Timeless wisdom from the Gita and Epics.
          </p>
          <p className="text-sm text-muted-foreground">
            Discover the stillness within the scriptures.
          </p>
        </div>

        {/* Bottom content */}
        <div className="w-full space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button 
            onClick={handleBeginExploration}
            className="w-full h-14 text-base font-medium rounded-2xl bg-gradient-to-r from-primary to-gold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Begin Exploration
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col p-6 safe-top safe-bottom">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
          <Globe className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Choose Language
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          Select the language for reading scriptures.
        </p>
      </div>

      {/* Language list */}
      <div className="flex-1 space-y-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={cn(
              "w-full flex items-center justify-between p-4 rounded-xl border transition-all",
              selectedLanguage === lang.code
                ? "bg-primary/10 border-primary"
                : "bg-card border-border hover:border-primary/50"
            )}
          >
            <div className="text-left">
              <p className={cn(
                "text-lg font-medium",
                selectedLanguage === lang.code ? "text-primary" : "text-foreground"
              )}>
                {lang.name}
              </p>
              <p className="text-sm text-muted-foreground">{lang.label}</p>
            </div>
            <div className={cn(
              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
              selectedLanguage === lang.code
                ? "border-primary bg-primary"
                : "border-muted-foreground"
            )}>
              {selectedLanguage === lang.code && (
                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Continue button */}
      <div className="mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <Button 
          onClick={handleContinue}
          disabled={!selectedLanguage}
          className={cn(
            "w-full h-14 text-base font-medium rounded-2xl transition-all",
            selectedLanguage
              ? "bg-gradient-to-r from-primary to-gold text-primary-foreground hover:opacity-90"
              : "bg-muted text-muted-foreground"
          )}
        >
          Continue
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
