import { Calendar, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ChallengeCardProps {
  title: string;
  description: string;
  daysCompleted: number;
  totalDays: number;
  participants?: number;
  onJoin?: () => void;
}

export function ChallengeCard({
  title = "18-Day Gita Challenge",
  description = "Read one chapter each day",
  daysCompleted = 5,
  totalDays = 18,
  participants = 2847,
  onJoin
}: ChallengeCardProps) {
  const progressPercent = (daysCompleted / totalDays) * 100;
  const isJoined = daysCompleted > 0;

  return (
    <div className="mx-4 rounded-2xl bg-card card-elevated overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {/* Gradient Header */}
      <div className="relative px-5 pt-5 pb-3">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-foreground">
            Day {daysCompleted} of {totalDays}
          </span>
        </div>
        <Progress value={progressPercent} className="h-2 mb-3" />
        
        {/* Participants */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="text-xs">{participants.toLocaleString()} readers participating</span>
        </div>
      </div>

      {/* Action */}
      <div className="px-5 pb-5">
        {isJoined ? (
          <Button variant="saffron" className="w-full justify-between" onClick={onJoin}>
            <span>Continue Today's Reading</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button variant="saffron-outline" className="w-full" onClick={onJoin}>
            Join Challenge
          </Button>
        )}
      </div>
    </div>
  );
}
