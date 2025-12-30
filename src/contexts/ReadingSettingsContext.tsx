import React, { createContext, useContext, ReactNode } from "react";
import { useReadingSettings } from "@/hooks/useReadingSettings";

type ReadingSettingsContextType = ReturnType<typeof useReadingSettings>;

const ReadingSettingsContext = createContext<ReadingSettingsContextType | null>(null);

export function ReadingSettingsProvider({ children }: { children: ReactNode }) {
  const settings = useReadingSettings();
  
  return (
    <ReadingSettingsContext.Provider value={settings}>
      {children}
    </ReadingSettingsContext.Provider>
  );
}

export function useReadingSettingsContext() {
  const context = useContext(ReadingSettingsContext);
  if (!context) {
    throw new Error("useReadingSettingsContext must be used within ReadingSettingsProvider");
  }
  return context;
}

// Font color styles mapping
export const fontColorStyles: Record<string, string> = {
  default: "hsl(40, 10%, 92%)",
  warm: "hsl(35, 85%, 70%)",
  cool: "hsl(200, 60%, 75%)",
  sepia: "hsl(30, 50%, 75%)",
};

export function getFontColorStyle(colorId: string): string {
  return fontColorStyles[colorId] || fontColorStyles.default;
}
