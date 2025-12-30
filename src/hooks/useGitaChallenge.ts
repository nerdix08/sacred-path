import { useState, useEffect } from 'react';

interface ChallengeData {
  currentChallenge: number; // 18, 56, 108, 365
  daysCompleted: number;
  startDate: string | null;
  completedChallenges: number[];
}

const STORAGE_KEY = 'vidya_gita_challenge';

const challengeLevels = [
  { days: 18, name: '18-Day Gita Journey', description: 'Complete one chapter each day' },
  { days: 56, name: '56-Day Gita Deep Dive', description: 'Study 3 verses per chapter daily' },
  { days: 108, name: '108-Day Sacred Practice', description: 'Daily meditation with Gita wisdom' },
  { days: 365, name: '365-Day Spiritual Mastery', description: 'One year of daily Gita practice' },
];

const DEFAULT_DATA: ChallengeData = {
  currentChallenge: 18,
  daysCompleted: 0,
  startDate: null,
  completedChallenges: [],
};

export function useGitaChallenge() {
  const [challengeData, setChallengeData] = useState<ChallengeData>(DEFAULT_DATA);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setChallengeData(parsed);
        
        // Check if we need to auto-update days based on start date
        if (parsed.startDate) {
          const startDate = new Date(parsed.startDate);
          const today = new Date();
          const diffTime = Math.abs(today.getTime() - startDate.getTime());
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          
          // Update days completed if it's a new day
          if (diffDays > parsed.daysCompleted) {
            const newDaysCompleted = Math.min(diffDays, parsed.currentChallenge);
            const updated = { ...parsed, daysCompleted: newDaysCompleted };
            
            // Check if current challenge completed
            if (newDaysCompleted >= parsed.currentChallenge && 
                !parsed.completedChallenges.includes(parsed.currentChallenge)) {
              updated.completedChallenges = [...parsed.completedChallenges, parsed.currentChallenge];
              
              // Auto-progress to next challenge
              const currentIndex = challengeLevels.findIndex(c => c.days === parsed.currentChallenge);
              if (currentIndex < challengeLevels.length - 1) {
                updated.currentChallenge = challengeLevels[currentIndex + 1].days;
                updated.daysCompleted = 0;
                updated.startDate = null;
              }
            }
            
            setChallengeData(updated);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          }
        }
      } catch (e) {
        console.error('Error loading challenge data:', e);
      }
    }
  }, []);

  const joinChallenge = () => {
    const updated = {
      ...challengeData,
      startDate: new Date().toISOString(),
      daysCompleted: 1,
    };
    setChallengeData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const completeToday = () => {
    const updated = {
      ...challengeData,
      daysCompleted: Math.min(challengeData.daysCompleted + 1, challengeData.currentChallenge),
    };
    
    // Check if challenge completed
    if (updated.daysCompleted >= updated.currentChallenge && 
        !updated.completedChallenges.includes(updated.currentChallenge)) {
      updated.completedChallenges = [...updated.completedChallenges, updated.currentChallenge];
    }
    
    setChallengeData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const upgradeToNextChallenge = () => {
    const currentIndex = challengeLevels.findIndex(c => c.days === challengeData.currentChallenge);
    if (currentIndex < challengeLevels.length - 1) {
      const nextChallenge = challengeLevels[currentIndex + 1];
      const updated = {
        ...challengeData,
        currentChallenge: nextChallenge.days,
        daysCompleted: 0,
        startDate: null,
      };
      setChallengeData(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const resetChallenge = () => {
    setChallengeData(DEFAULT_DATA);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
  };

  const getCurrentChallengeInfo = () => {
    return challengeLevels.find(c => c.days === challengeData.currentChallenge) || challengeLevels[0];
  };

  const getNextChallengeInfo = () => {
    const currentIndex = challengeLevels.findIndex(c => c.days === challengeData.currentChallenge);
    if (currentIndex < challengeLevels.length - 1) {
      return challengeLevels[currentIndex + 1];
    }
    return null;
  };

  const isJoined = challengeData.startDate !== null;
  const isCurrentChallengeComplete = challengeData.daysCompleted >= challengeData.currentChallenge;
  const hasNextChallenge = getNextChallengeInfo() !== null;

  // Calculate estimated participants (simulated)
  const getParticipants = () => {
    const base = 2847;
    const multiplier = challengeLevels.findIndex(c => c.days === challengeData.currentChallenge);
    return Math.floor(base / (multiplier + 1));
  };

  return {
    ...challengeData,
    isJoined,
    isCurrentChallengeComplete,
    hasNextChallenge,
    currentChallengeInfo: getCurrentChallengeInfo(),
    nextChallengeInfo: getNextChallengeInfo(),
    participants: getParticipants(),
    challengeLevels,
    joinChallenge,
    completeToday,
    upgradeToNextChallenge,
    resetChallenge,
  };
}
