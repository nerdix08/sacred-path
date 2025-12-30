import { useState, useEffect } from "react";

type Language = "english" | "hindi" | "telugu" | "tamil" | "kannada";

interface Translations {
  english?: string;
  hindi?: string;
  telugu?: string;
  tamil?: string;
  kannada?: string;
}

export function useTranslation(
  translations: Translations | undefined,
  targetLanguage: Language
) {
  const [translation, setTranslation] = useState<string>("");

  useEffect(() => {
    if (!translations) {
      setTranslation("");
      return;
    }

    // Get translation for selected language, fallback to English
    const text = translations[targetLanguage] || translations.english || "";
    setTranslation(text);
  }, [translations, targetLanguage]);

  return { translation, isLoading: false };
}
