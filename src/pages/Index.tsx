import { AppLayout } from "@/components/layout/AppLayout";
import { DailyVerse } from "@/components/home/DailyVerse";
import { StreakCard } from "@/components/home/StreakCard";
import { ChallengeCard } from "@/components/home/ChallengeCard";
import { QuickActions } from "@/components/home/QuickActions";
import { useNavigate } from "react-router-dom";
import { useStreak } from "@/hooks/useStreak";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const { currentStreak, longestStreak, versesReadToday, dailyGoal } = useStreak();

  // Check if onboarding completed
  useEffect(() => {
    const onboarded = localStorage.getItem("vidya_onboarded");
    if (!onboarded) {
      navigate("/onboarding");
    }
  }, [navigate]);

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <AppLayout title="Vidya">
      <div className="space-y-6 py-4">
        {/* Greeting */}
        <div className="px-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">{getGreeting()}</p>
          <h2 className="text-2xl font-semibold text-foreground">Begin your learning</h2>
        </div>

        {/* Daily Verse Card */}
        <DailyVerse 
          chapter={2}
          verse={47}
          sanskrit="कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"
          translation="You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
          onReadMore={() => navigate("/gita/chapter/2/verse/47")}
        />

        {/* Streak & Progress */}
        <StreakCard
          currentStreak={currentStreak}
          longestStreak={longestStreak}
          todayProgress={versesReadToday}
          dailyGoal={dailyGoal}
        />

        {/* Daily Challenge */}
        <ChallengeCard
          onJoin={() => navigate("/gita")}
        />

        {/* Quick Actions */}
        <QuickActions />

        {/* Bottom spacing for nav */}
        <div className="h-4" />
      </div>
    </AppLayout>
  );
};

export default Index;
