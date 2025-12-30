import { useState, useEffect } from 'react';

export interface SavedVerse {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  translation: string;
  savedAt: string;
}

const STORAGE_KEY = 'vidya_saved_verses';

export function useSavedVerses() {
  const [savedVerses, setSavedVerses] = useState<SavedVerse[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedVerses(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading saved verses:', error);
    }
  }, []);

  // Save to localStorage whenever savedVerses changes
  const saveToStorage = (verses: SavedVerse[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(verses));
      setSavedVerses(verses);
    } catch (error) {
      console.error('Error saving verses:', error);
    }
  };

  const addVerse = (verse: Omit<SavedVerse, 'id' | 'savedAt'>) => {
    const exists = savedVerses.some(
      v => v.chapter === verse.chapter && v.verse === verse.verse
    );
    
    if (!exists) {
      const newVerse: SavedVerse = {
        ...verse,
        id: `${verse.chapter}-${verse.verse}-${Date.now()}`,
        savedAt: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric',
          year: 'numeric'
        })
      };
      saveToStorage([newVerse, ...savedVerses]);
      return true;
    }
    return false;
  };

  const removeVerse = (chapter: number, verse: number) => {
    const updated = savedVerses.filter(
      v => !(v.chapter === chapter && v.verse === verse)
    );
    saveToStorage(updated);
  };

  const isVerseSaved = (chapter: number, verse: number) => {
    return savedVerses.some(
      v => v.chapter === chapter && v.verse === verse
    );
  };

  const toggleVerse = (verse: Omit<SavedVerse, 'id' | 'savedAt'>) => {
    if (isVerseSaved(verse.chapter, verse.verse)) {
      removeVerse(verse.chapter, verse.verse);
      return false;
    } else {
      addVerse(verse);
      return true;
    }
  };

  return {
    savedVerses,
    addVerse,
    removeVerse,
    isVerseSaved,
    toggleVerse,
    count: savedVerses.length
  };
}
