import { AppLayout } from "@/components/layout/AppLayout";
import { DailyVerse } from "@/components/home/DailyVerse";
import { StreakCard } from "@/components/home/StreakCard";
import { ChallengeCard } from "@/components/home/ChallengeCard";
import { QuickActions } from "@/components/home/QuickActions";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="Vidya" streak={7}>
      <div className="space-y-6 py-4">
        {/* Greeting */}
        <div className="px-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">Good morning</p>
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
          currentStreak={7}
          longestStreak={21}
          todayProgress={2}
          dailyGoal={3}
        />

        {/* Daily Challenge */}
        <ChallengeCard
          title="18-Day Gita Journey"
          description="Complete one chapter each day"
          daysCompleted={5}
          totalDays={18}
          participants={2847}
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
