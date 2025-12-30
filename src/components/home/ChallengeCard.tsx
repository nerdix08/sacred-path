import { Calendar, ChevronRight, Users, Trophy, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useGitaChallenge } from "@/hooks/useGitaChallenge";

interface ChallengeCardProps {
  onJoin?: () => void;
}

export function ChallengeCard({ onJoin }: ChallengeCardProps) {
  const {
    daysCompleted,
    isJoined,
    isCurrentChallengeComplete,
    hasNextChallenge,
    currentChallengeInfo,
    nextChallengeInfo,
    participants,
    completedChallenges,
    joinChallenge,
    upgradeToNextChallenge,
  } = useGitaChallenge();

  const progressPercent = (daysCompleted / currentChallengeInfo.days) * 100;

  const handleJoin = () => {
    joinChallenge();
    onJoin?.();
  };

  const handleUpgrade = () => {
    upgradeToNextChallenge();
  };

  return (
    <div className="mx-4 rounded-2xl bg-card card-elevated overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {/* Gradient Header */}
      <div className="relative px-5 pt-5 pb-3">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center relative">
              <Calendar className="w-6 h-6 text-primary" />
              {completedChallenges.length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-[10px] font-bold text-background">{completedChallenges.length}</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">{currentChallengeInfo.name}</h3>
              <p className="text-xs text-muted-foreground">{currentChallengeInfo.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Badges */}
      {completedChallenges.length > 0 && (
        <div className="px-5 py-2 flex gap-2 overflow-x-auto">
          {completedChallenges.map((days) => (
            <div
              key={days}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-gold/20 text-gold text-[10px] font-medium whitespace-nowrap"
            >
              <Trophy className="w-3 h-3" />
              {days}-Day ✓
            </div>
          ))}
        </div>
      )}

      {/* Progress Section */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-foreground">
            Day {daysCompleted} of {currentChallengeInfo.days}
          </span>
        </div>
        <Progress value={progressPercent} className="h-2 mb-3" />
        
        {/* Participants */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="text-xs">{participants.toLocaleString()} readers participating</span>
        </div>
      </div>

      {/* Challenge Complete - Show Next Level */}
      {isCurrentChallengeComplete && hasNextChallenge && (
        <div className="mx-5 mb-3 p-3 rounded-xl bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold">Challenge Complete! 🎉</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Ready for the next level? Start the {nextChallengeInfo?.name}!
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="w-3 h-3 text-gold" />
            <span>{nextChallengeInfo?.description}</span>
          </div>
        </div>
      )}

      {/* Action */}
      <div className="px-5 pb-5">
        {isCurrentChallengeComplete && hasNextChallenge ? (
          <Button variant="saffron" className="w-full justify-between" onClick={handleUpgrade}>
            <span>Start {nextChallengeInfo?.days}-Day Challenge</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : isJoined ? (
          <Button variant="saffron" className="w-full justify-between" onClick={onJoin}>
            <span>Continue Today's Reading</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="saffron-outline" className="w-full" onClick={handleJoin}>
            Join {currentChallengeInfo.days}-Day Challenge
          </Button>
        )}
      </div>

      {/* Challenge Levels Preview */}
      {!isJoined && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-[10px] text-muted-foreground text-center">
            Complete 18 days → Unlock 56 days → 108 days → 365 days 🏆
          </p>
        </div>
      )}
    </div>
  );
}
