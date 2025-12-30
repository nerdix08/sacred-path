import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

type Language = "english" | "hindi" | "telugu" | "tamil" | "kannada";

interface TranslationCache {
  [key: string]: string;
}

// Global cache to persist across component remounts
const globalCache: TranslationCache = {};

export function useTranslation(
  englishText: string,
  targetLanguage: Language,
  verseKey?: string
) {
  const [translation, setTranslation] = useState<string>(englishText);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If English, use original text
    if (targetLanguage === "english" || !englishText) {
      setTranslation(englishText);
      setIsLoading(false);
      return;
    }

    const cacheKey = `${verseKey || englishText.slice(0, 50)}_${targetLanguage}`;

    // Check cache first
    if (globalCache[cacheKey]) {
      setTranslation(globalCache[cacheKey]);
      setIsLoading(false);
      return;
    }

    // Fetch translation
    const fetchTranslation = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data, error: fetchError } = await supabase.functions.invoke(
          "translate-verse",
          {
            body: {
              text: englishText,
              targetLanguage,
              context: verseKey,
            },
          }
        );

        if (fetchError) {
          throw new Error(fetchError.message);
        }

        if (data?.translation) {
          globalCache[cacheKey] = data.translation;
          setTranslation(data.translation);
        } else {
          setTranslation(englishText);
        }
      } catch (err) {
        console.error("Translation error:", err);
        setError(err instanceof Error ? err.message : "Translation failed");
        setTranslation(englishText); // Fallback to English
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslation();
  }, [englishText, targetLanguage, verseKey]);

  return { translation, isLoading, error };
}
