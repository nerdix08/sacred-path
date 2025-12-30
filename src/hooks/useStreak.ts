import { useState, useEffect } from "react";

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastVisitDate: string;
  versesReadToday: number;
  totalVersesRead: number;
  chaptersCompleted: number;
  dailyGoal: number;
}

const DEFAULT_STREAK_DATA: StreakData = {
  currentStreak: 0,
  longestStreak: 0,
  lastVisitDate: "",
  versesReadToday: 0,
  totalVersesRead: 0,
  chaptersCompleted: 0,
  dailyGoal: 3,
};

export function useStreak() {
  const [streakData, setStreakData] = useState<StreakData>(DEFAULT_STREAK_DATA);

  useEffect(() => {
    loadStreakData();
  }, []);

  const loadStreakData = () => {
    const stored = localStorage.getItem("vidya_streak");
    if (stored) {
      const data: StreakData = JSON.parse(stored);
      const today = new Date().toDateString();
      const lastVisit = data.lastVisitDate;

      if (lastVisit === today) {
        // Same day, keep data as is
        setStreakData(data);
      } else if (isYesterday(lastVisit)) {
        // Yesterday, increment streak
        const newData = {
          ...data,
          currentStreak: data.currentStreak + 1,
          longestStreak: Math.max(data.longestStreak, data.currentStreak + 1),
          lastVisitDate: today,
          versesReadToday: 0,
        };
        saveStreakData(newData);
      } else if (lastVisit) {
        // Streak broken
        const newData = {
          ...data,
          currentStreak: 1,
          lastVisitDate: today,
          versesReadToday: 0,
        };
        saveStreakData(newData);
      } else {
        // First visit
        const newData = {
          ...DEFAULT_STREAK_DATA,
          currentStreak: 1,
          longestStreak: 1,
          lastVisitDate: today,
        };
        saveStreakData(newData);
      }
    } else {
      // First time user
      const today = new Date().toDateString();
      const newData = {
        ...DEFAULT_STREAK_DATA,
        currentStreak: 1,
        longestStreak: 1,
        lastVisitDate: today,
      };
      saveStreakData(newData);
    }
  };

  const isYesterday = (dateString: string): boolean => {
    if (!dateString) return false;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toDateString() === dateString;
  };

  const saveStreakData = (data: StreakData) => {
    localStorage.setItem("vidya_streak", JSON.stringify(data));
    setStreakData(data);
  };

  const incrementVersesRead = () => {
    const today = new Date().toDateString();
    const newData = {
      ...streakData,
      versesReadToday: streakData.versesReadToday + 1,
      totalVersesRead: streakData.totalVersesRead + 1,
      lastVisitDate: today,
    };
    saveStreakData(newData);
  };

  const completeChapter = () => {
    const newData = {
      ...streakData,
      chaptersCompleted: streakData.chaptersCompleted + 1,
    };
    saveStreakData(newData);
  };

  const setDailyGoal = (goal: number) => {
    const newData = {
      ...streakData,
      dailyGoal: goal,
    };
    saveStreakData(newData);
  };

  const resetStats = () => {
    saveStreakData(DEFAULT_STREAK_DATA);
  };

  return {
    ...streakData,
    incrementVersesRead,
    completeChapter,
    setDailyGoal,
    resetStats,
    isGoalComplete: streakData.versesReadToday >= streakData.dailyGoal,
  };
}
