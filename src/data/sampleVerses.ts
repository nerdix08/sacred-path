import gitaData from './gitaData.json';

export interface Verse {
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  wordByWord?: string;
  translations: {
    english: string;
    hindi: string;
    telugu: string;
    tamil: string;
    kannada: string;
  };
  explanation?: string;
}

// Import verses from gitaData.json
export const sampleVerses: Verse[] = gitaData.verses.map(v => ({
  chapter: v.chapter,
  verse: v.verse,
  sanskrit: v.sanskrit,
  transliteration: v.transliteration,
  wordByWord: v.wordByWord,
  translations: v.translations,
  explanation: v.explanation
}));

// Export chapter data for more detailed information
export const gitaChapterData = gitaData.chapters;

export const getVerseById = (chapter: number, verse: number): Verse | undefined => {
  return sampleVerses.find(v => v.chapter === chapter && v.verse === verse);
};

// Get all verses for a chapter
export const getVersesByChapter = (chapter: number): Verse[] => {
  return sampleVerses.filter(v => v.chapter === chapter);
};

// Get chapter info
export const getChapterInfo = (chapter: number) => {
  return gitaData.chapters.find(c => c.number === chapter);
};