import bhagavadGitaData from "./bhagavad_gita.json";
import gitaData from "./gitaData.json";

export interface Verse {
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  wordByWord?: string;
  translations: {
    english: string;
    hindi?: string;
    telugu?: string;
    tamil?: string;
    kannada?: string;
  };
  explanation?: string;
  audio?: string;
  images?: string[];
}

type GitaDataVerse = {
  chapter: number;
  verse: number;
  translations: {
    english: string;
    hindi?: string;
    telugu?: string;
    tamil?: string;
    kannada?: string;
  };
};

const gitaTranslationsByRef = new Map<string, GitaDataVerse["translations"]>();
const gitaVerses = (gitaData as { verses?: GitaDataVerse[] }).verses;

gitaVerses?.forEach((v) => {
  gitaTranslationsByRef.set(`${v.chapter}:${v.verse}`, v.translations);
});

// Import all verses from bhagavad_gita.json
export const sampleVerses: Verse[] = bhagavadGitaData.map((v) => {
  const refKey = `${v.chapter}:${v.verse}`;
  const t = gitaTranslationsByRef.get(refKey);
  const english = t?.english || v.translations.en;

  return {
    chapter: v.chapter,
    verse: v.verse,
    sanskrit: v.sanskrit_text,
    transliteration: v.transliteration,
    wordByWord: v.word_meanings || undefined,
    translations: {
      english,
      hindi: t?.hindi || english,
      telugu: t?.telugu || english,
      tamil: t?.tamil || english,
      kannada: t?.kannada || english,
    },
    explanation: v.commentary || undefined,
    audio: v.audio,
    images: v.images,
  };
});

// Get chapter info from the data
export const gitaChapterData = Array.from({ length: 18 }, (_, i) => {
  const chapterNum = i + 1;
  const chapterVerses = bhagavadGitaData.filter(v => v.chapter === chapterNum);
  return {
    number: chapterNum,
    name: getChapterName(chapterNum),
    nameSanskrit: getChapterNameSanskrit(chapterNum),
    meaning: getChapterMeaning(chapterNum),
    verseCount: chapterVerses.length,
    summary: getChapterSummary(chapterNum),
  };
});

function getChapterName(num: number): string {
  const names: Record<number, string> = {
    1: "Arjuna Vishada Yoga",
    2: "Sankhya Yoga",
    3: "Karma Yoga",
    4: "Jnana Karma Sanyasa Yoga",
    5: "Karma Sanyasa Yoga",
    6: "Dhyana Yoga",
    7: "Jnana Vijnana Yoga",
    8: "Aksara Brahma Yoga",
    9: "Raja Vidya Raja Guhya Yoga",
    10: "Vibhuti Yoga",
    11: "Vishvarupa Darshana Yoga",
    12: "Bhakti Yoga",
    13: "Kshetra Kshetrajna Vibhaga Yoga",
    14: "Gunatraya Vibhaga Yoga",
    15: "Purushottama Yoga",
    16: "Daivasura Sampad Vibhaga Yoga",
    17: "Shraddhatraya Vibhaga Yoga",
    18: "Moksha Sanyasa Yoga",
  };
  return names[num] || `Chapter ${num}`;
}

function getChapterNameSanskrit(num: number): string {
  const names: Record<number, string> = {
    1: "अर्जुनविषादयोग",
    2: "सांख्ययोग",
    3: "कर्मयोग",
    4: "ज्ञानकर्मसंन्यासयोग",
    5: "कर्मसंन्यासयोग",
    6: "ध्यानयोग",
    7: "ज्ञानविज्ञानयोग",
    8: "अक्षरब्रह्मयोग",
    9: "राजविद्याराजगुह्ययोग",
    10: "विभूतियोग",
    11: "विश्वरूपदर्शनयोग",
    12: "भक्तियोग",
    13: "क्षेत्रक्षेत्रज्ञविभागयोग",
    14: "गुणत्रयविभागयोग",
    15: "पुरुषोत्तमयोग",
    16: "दैवासुरसम्पद्विभागयोग",
    17: "श्रद्धात्रयविभागयोग",
    18: "मोक्षसंन्यासयोग",
  };
  return names[num] || `अध्याय ${num}`;
}

function getChapterMeaning(num: number): string {
  const meanings: Record<number, string> = {
    1: "The Yoga of Arjuna's Dejection",
    2: "The Yoga of Knowledge",
    3: "The Yoga of Action",
    4: "The Yoga of Knowledge and Renunciation of Action",
    5: "The Yoga of Renunciation of Action",
    6: "The Yoga of Meditation",
    7: "The Yoga of Wisdom and Realization",
    8: "The Yoga of the Imperishable Absolute",
    9: "The Yoga of Royal Knowledge and Royal Secret",
    10: "The Yoga of Divine Glories",
    11: "The Yoga of the Vision of the Universal Form",
    12: "The Yoga of Devotion",
    13: "The Yoga of Distinction between Field and Knower",
    14: "The Yoga of Classification of Three Gunas",
    15: "The Yoga of the Supreme Person",
    16: "The Yoga of Division between Divine and Demonic",
    17: "The Yoga of Classification of Threefold Faith",
    18: "The Yoga of Liberation through Renunciation",
  };
  return meanings[num] || "";
}

function getChapterSummary(num: number): string {
  const summaries: Record<number, string> = {
    1: "Arjuna observes the armies on the battlefield of Kurukshetra and becomes overwhelmed with grief at the thought of fighting his relatives and teachers.",
    2: "Krishna begins his teachings, explaining the immortality of the soul, the importance of duty, and introducing the concepts of Karma and Jnana Yoga.",
    3: "Krishna explains Karma Yoga - the path of selfless action without attachment to results, and why action is superior to inaction.",
    4: "Krishna reveals the ancient wisdom, explains how divine knowledge destroys karma, and discusses the nature of action and inaction.",
    5: "The relationship between renunciation and selfless action is explained, showing how both paths lead to liberation.",
    6: "Krishna describes meditation practices, the importance of self-discipline, and the characteristics of a true yogi.",
    7: "Krishna reveals knowledge of both the manifest and unmanifest aspects of divinity, explaining the nature of material and spiritual energies.",
    8: "The nature of the imperishable Brahman, the process of attaining it, and what happens at the time of death are explained.",
    9: "Krishna shares the most confidential knowledge about devotion and how to worship the Supreme with love.",
    10: "Krishna describes his divine manifestations and how he pervades all existence through his divine glories.",
    11: "Arjuna is granted divine vision to see Krishna's cosmic universal form containing all of creation.",
    12: "The path of devotion is explained as the easiest and most direct way to reach God.",
    13: "Krishna distinguishes between the body (field) and the soul (knower of the field), explaining material nature and consciousness.",
    14: "The three modes of material nature - sattva, rajas, and tamas - and their influence on beings are explained.",
    15: "Using the metaphor of an eternal banyan tree, Krishna explains the material world and the path to the supreme abode.",
    16: "Divine and demonic qualities are contrasted, encouraging cultivation of divine virtues.",
    17: "Three types of faith, food, sacrifice, austerity, and charity corresponding to the three gunas are described.",
    18: "The conclusion summarizes all teachings, emphasizing surrender to God and the eternal message of the Gita.",
  };
  return summaries[num] || "";
}

export const getVerseById = (chapter: number, verse: number): Verse | undefined => {
  return sampleVerses.find(v => v.chapter === chapter && v.verse === verse);
};

// Get all verses for a chapter
export const getVersesByChapter = (chapter: number): Verse[] => {
  return sampleVerses.filter(v => v.chapter === chapter);
};

// Get chapter info
export const getChapterInfo = (chapter: number) => {
  return gitaChapterData.find(c => c.number === chapter);
};

// Get total verse count for a chapter
export const getChapterVerseCount = (chapter: number): number => {
  return sampleVerses.filter(v => v.chapter === chapter).length;
};
