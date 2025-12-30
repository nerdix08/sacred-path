import { Bell, Settings, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopNavProps {
  title?: string;
  streak?: number;
  showStreak?: boolean;
}

export function TopNav({ title = "Vidya", streak = 0, showStreak = true }: TopNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border safe-top">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Logo / Title */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-sanskrit text-lg">ॐ</span>
          </div>
          <h1 className="text-lg font-semibold text-foreground font-body">{title}</h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Streak Counter */}
          {showStreak && streak > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{streak}</span>
            </div>
          )}

          {/* Notifications */}
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-5 h-5" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
