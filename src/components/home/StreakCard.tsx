import { Flame, Trophy, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface StreakCardProps {
  currentStreak: number;
  longestStreak: number;
  todayProgress: number;
  dailyGoal: number;
}

export function StreakCard({ 
  currentStreak = 7, 
  longestStreak = 21,
  todayProgress = 2,
  dailyGoal = 3
}: StreakCardProps) {
  const progressPercent = Math.min((todayProgress / dailyGoal) * 100, 100);
  const isComplete = todayProgress >= dailyGoal;

  return (
    <div className="mx-4 rounded-2xl bg-card card-elevated overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="p-5">
        {/* Streak Stats Row */}
        <div className="flex items-center justify-between mb-5">
          {/* Current Streak */}
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isComplete ? 'bg-primary/20 pulse-glow' : 'bg-secondary'}`}>
              <Flame className={`w-6 h-6 ${isComplete ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{currentStreak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-lg font-semibold text-foreground">{longestStreak}</p>
              <p className="text-xs text-muted-foreground">Best Streak</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gold-muted/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-gold" />
            </div>
          </div>
        </div>

        {/* Daily Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Today's Progress</span>
            </div>
            <span className="text-sm font-medium text-foreground">
              {todayProgress}/{dailyGoal} verses
            </span>
          </div>
          
          <div className="relative">
            <Progress value={progressPercent} className="h-2" />
            {isComplete && (
              <div className="absolute -right-1 -top-1">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground">✓</span>
                </div>
              </div>
            )}
          </div>

          {isComplete ? (
            <p className="text-xs text-primary text-center font-medium">
              🎉 Daily goal complete! Keep your streak alive.
            </p>
          ) : (
            <p className="text-xs text-muted-foreground text-center">
              Read {dailyGoal - todayProgress} more verse{dailyGoal - todayProgress > 1 ? 's' : ''} to maintain your streak
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
