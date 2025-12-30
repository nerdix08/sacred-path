import { useState, useEffect } from "react";

interface ReadingSettings {
  fontSize: number;
  fontColor: string;
  showSanskrit: boolean;
  showTransliteration: boolean;
  dailyShlokaEnabled: boolean;
  offlineFavorites: boolean;
}

const DEFAULT_SETTINGS: ReadingSettings = {
  fontSize: 18,
  fontColor: "default",
  showSanskrit: true,
  showTransliteration: true,
  dailyShlokaEnabled: true,
  offlineFavorites: false,
};

const STORAGE_KEY = "vidya_reading_settings";

export function useReadingSettings() {
  const [settings, setSettings] = useState<ReadingSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(stored) });
    }
  }, []);

  const updateSettings = (updates: Partial<ReadingSettings>) => {
    const newSettings = { ...settings, ...updates };
    setSettings(newSettings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
  };

  const setFontSize = (size: number) => updateSettings({ fontSize: size });
  const setFontColor = (color: string) => updateSettings({ fontColor: color });
  const toggleSanskrit = () => updateSettings({ showSanskrit: !settings.showSanskrit });
  const toggleTransliteration = () => updateSettings({ showTransliteration: !settings.showTransliteration });
  const toggleDailyShloka = () => updateSettings({ dailyShlokaEnabled: !settings.dailyShlokaEnabled });
  const toggleOfflineFavorites = () => updateSettings({ offlineFavorites: !settings.offlineFavorites });

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
  };

  return {
    ...settings,
    setFontSize,
    setFontColor,
    toggleSanskrit,
    toggleTransliteration,
    toggleDailyShloka,
    toggleOfflineFavorites,
    resetSettings,
  };
}
