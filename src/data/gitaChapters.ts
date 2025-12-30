export interface GitaChapter {
  number: number;
  titleSanskrit: string;
  titleEnglish: string;
  versesCount: number;
  summary: string;
}

export const gitaChapters: GitaChapter[] = [
  {
    number: 1,
    titleSanskrit: "अर्जुनविषादयोग",
    titleEnglish: "Arjuna's Dilemma",
    versesCount: 47,
    summary: "Arjuna's moral crisis on the battlefield of Kurukshetra as he faces his relatives and teachers in battle."
  },
  {
    number: 2,
    titleSanskrit: "सांख्ययोग",
    titleEnglish: "Transcendental Knowledge",
    versesCount: 72,
    summary: "Krishna introduces the immortal soul, Sankhya philosophy, and the path of selfless action."
  },
  {
    number: 3,
    titleSanskrit: "कर्मयोग",
    titleEnglish: "Path of Selfless Action",
    versesCount: 43,
    summary: "The importance of performing one's duty without attachment to results."
  },
  {
    number: 4,
    titleSanskrit: "ज्ञानकर्मसंन्यासयोग",
    titleEnglish: "Path of Knowledge",
    versesCount: 42,
    summary: "Divine knowledge and the purifying power of spiritual wisdom."
  },
  {
    number: 5,
    titleSanskrit: "कर्मसंन्यासयोग",
    titleEnglish: "Path of Renunciation",
    versesCount: 29,
    summary: "The harmony between selfless action and renunciation of action."
  },
  {
    number: 6,
    titleSanskrit: "आत्मसंयमयोग",
    titleEnglish: "Path of Meditation",
    versesCount: 47,
    summary: "The practice of meditation and self-control for attaining inner peace."
  },
  {
    number: 7,
    titleSanskrit: "ज्ञानविज्ञानयोग",
    titleEnglish: "Knowledge and Wisdom",
    versesCount: 30,
    summary: "Understanding the nature of the Divine and material existence."
  },
  {
    number: 8,
    titleSanskrit: "अक्षरब्रह्मयोग",
    titleEnglish: "Path to the Supreme",
    versesCount: 28,
    summary: "The imperishable Brahman and the journey of the soul at death."
  },
  {
    number: 9,
    titleSanskrit: "राजविद्याराजगुह्ययोग",
    titleEnglish: "Royal Knowledge",
    versesCount: 34,
    summary: "The most confidential knowledge of devotion to the Supreme."
  },
  {
    number: 10,
    titleSanskrit: "विभूतियोग",
    titleEnglish: "Divine Glories",
    versesCount: 42,
    summary: "The infinite manifestations and opulences of the Divine."
  },
  {
    number: 11,
    titleSanskrit: "विश्वरूपदर्शनयोग",
    titleEnglish: "Universal Form",
    versesCount: 55,
    summary: "Arjuna witnesses Krishna's cosmic form revealing the entire universe."
  },
  {
    number: 12,
    titleSanskrit: "भक्तियोग",
    titleEnglish: "Path of Devotion",
    versesCount: 20,
    summary: "The supreme path of loving devotion to the Divine."
  },
  {
    number: 13,
    titleSanskrit: "क्षेत्रक्षेत्रज्ञविभागयोग",
    titleEnglish: "Field and Knower",
    versesCount: 35,
    summary: "Distinction between the body (field) and the soul (knower of the field)."
  },
  {
    number: 14,
    titleSanskrit: "गुणत्रयविभागयोग",
    titleEnglish: "Three Qualities of Nature",
    versesCount: 27,
    summary: "Understanding the three gunas: sattva, rajas, and tamas."
  },
  {
    number: 15,
    titleSanskrit: "पुरुषोत्तमयोग",
    titleEnglish: "Supreme Person",
    versesCount: 20,
    summary: "The analogy of the cosmic tree and the nature of the Supreme Being."
  },
  {
    number: 16,
    titleSanskrit: "दैवासुरसम्पद्विभागयोग",
    titleEnglish: "Divine and Demonic Natures",
    versesCount: 24,
    summary: "Characteristics of divine and demonic qualities in humans."
  },
  {
    number: 17,
    titleSanskrit: "श्रद्धात्रयविभागयोग",
    titleEnglish: "Three Types of Faith",
    versesCount: 28,
    summary: "How the three gunas influence faith, food, worship, and charity."
  },
  {
    number: 18,
    titleSanskrit: "मोक्षसंन्यासयोग",
    titleEnglish: "Liberation Through Renunciation",
    versesCount: 78,
    summary: "The culmination: renunciation, surrender, and the path to liberation."
  }
];

export const totalVerses = gitaChapters.reduce((sum, ch) => sum + ch.versesCount, 0);
