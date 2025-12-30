import { Play, Pause, Volume2, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CompactAudioPlayerProps {
  audioUrl: string;
  className?: string;
}

export function CompactAudioPlayer({ audioUrl, className }: CompactAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload audio metadata
    const audio = new Audio();
    audio.preload = "metadata";
    audio.src = audioUrl;
    
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
    
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };
    
    audio.onended = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.onwaiting = () => setIsLoading(true);
    audio.oncanplay = () => setIsLoading(false);
    
    audioRef.current = audio;
    
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    const newTime = (percentage / 100) * duration;
    
    audioRef.current.currentTime = newTime;
    setProgress(percentage);
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm",
      className
    )}>
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-foreground hover:text-primary transition-colors"
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5 ml-0.5" />
        )}
      </button>

      {/* Time Display */}
      <span className="text-xs text-muted-foreground font-mono min-w-[75px]">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>

      {/* Progress Bar */}
      <div
        ref={progressRef}
        onClick={handleProgressClick}
        className="flex-1 h-1 bg-muted rounded-full cursor-pointer group relative"
      >
        <div
          className="h-full bg-foreground rounded-full transition-all relative"
          style={{ width: `${progress}%` }}
        >
          {/* Progress Thumb */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" />
        </div>
      </div>

      {/* Volume Icon */}
      <button className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors">
        <Volume2 className="w-4 h-4" />
      </button>

      {/* More Options */}
      <button className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors">
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
}
