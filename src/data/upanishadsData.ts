// Upanishads Data
export interface Upanishad {
  id: string;
  name: string;
  nameSanskrit: string;
  veda: string;
  verses: number;
  theme: string;
  summary: string;
  keyTeachings: string[];
  famousVerses: { sanskrit: string; translation: string }[];
}

export const upanishads: Upanishad[] = [
  {
    id: "isha-upanishad",
    name: "Isha Upanishad",
    nameSanskrit: "ईशोपनिषद्",
    veda: "Shukla Yajurveda",
    verses: 18,
    theme: "The Lord dwells in all beings",
    summary: "The shortest of the principal Upanishads, yet containing the complete essence of Vedantic philosophy. It teaches that the Divine pervades everything and true wisdom lies in seeing unity in diversity.",
    keyTeachings: [
      "Everything in the universe is pervaded by the Lord",
      "Renounce and enjoy - don't covet others' possessions",
      "Knowledge and ignorance both have their place",
      "The Self is everywhere, pure and unembodied"
    ],
    famousVerses: [
      { sanskrit: "ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्", translation: "All this, whatever moves in this moving world, is pervaded by the Lord" },
      { sanskrit: "कुर्वन्नेवेह कर्माणि जिजीविषेच्छतं समाः", translation: "By performing karma, one should wish to live a hundred years" }
    ]
  },
  {
    id: "kena-upanishad",
    name: "Kena Upanishad",
    nameSanskrit: "केनोपनिषद्",
    veda: "Samaveda",
    verses: 35,
    theme: "Who is the power behind all powers?",
    summary: "Named after its opening word 'Kena' (by whom), this Upanishad inquires into the ultimate reality behind all perception and action. It contains the beautiful story of Uma teaching the gods.",
    keyTeachings: [
      "Brahman is the power behind all senses and mind",
      "Brahman cannot be known as an object of knowledge",
      "The ego's pride is humbled before the Absolute",
      "Self-knowledge leads to immortality"
    ],
    famousVerses: [
      { sanskrit: "केनेषितं पतति प्रेषितं मनः", translation: "Directed by whom does the mind go towards its objects?" },
      { sanskrit: "यद्वाचानभ्युदितं येन वागभ्युद्यते", translation: "That which is not expressed by speech but by which speech is expressed" }
    ]
  },
  {
    id: "katha-upanishad",
    name: "Katha Upanishad",
    nameSanskrit: "कठोपनिषद्",
    veda: "Krishna Yajurveda",
    verses: 119,
    theme: "Nachiketa's dialogue with Death",
    summary: "The profound dialogue between the young Nachiketa and Yama, the Lord of Death. One of the most popular Upanishads, it presents deep philosophical truths through an engaging narrative.",
    keyTeachings: [
      "The Self is beyond death and rebirth",
      "The path of good (shreyas) vs the path of pleasure (preyas)",
      "The chariot metaphor for body, mind, and soul",
      "Om is the supreme syllable"
    ],
    famousVerses: [
      { sanskrit: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत", translation: "Arise! Awake! Approach the great masters and learn" },
      { sanskrit: "अणोरणीयान्महतो महीयान्", translation: "Subtler than the subtle, greater than the great" }
    ]
  },
  {
    id: "mundaka-upanishad",
    name: "Mundaka Upanishad",
    nameSanskrit: "मुण्डकोपनिषद्",
    veda: "Atharvaveda",
    verses: 64,
    theme: "Higher and lower knowledge",
    summary: "Distinguishes between lower knowledge (rituals, sciences) and higher knowledge (Self-realization). Contains the famous 'two birds' metaphor and teachings on Brahman.",
    keyTeachings: [
      "Para vidya (higher knowledge) vs Apara vidya (lower knowledge)",
      "Brahman alone is real, the world is its manifestation",
      "The knower of Brahman becomes Brahman",
      "Satyam eva jayate - Truth alone triumphs"
    ],
    famousVerses: [
      { sanskrit: "सत्यमेव जयते नानृतम्", translation: "Truth alone triumphs, not falsehood" },
      { sanskrit: "द्वा सुपर्णा सयुजा सखाया", translation: "Two birds, companions always united, cling to the same tree" }
    ]
  },
  {
    id: "mandukya-upanishad",
    name: "Mandukya Upanishad",
    nameSanskrit: "माण्डूक्योपनिषद्",
    veda: "Atharvaveda",
    verses: 12,
    theme: "The sacred syllable Om",
    summary: "The shortest Upanishad with just 12 verses, yet Shankaracharya said it alone is sufficient for liberation. It analyzes the four states of consciousness through Om.",
    keyTeachings: [
      "Om is all that is - past, present, and future",
      "The four states: waking, dream, deep sleep, and Turiya",
      "A-U-M represent the three states; silence is Turiya",
      "Turiya is the true Self - pure consciousness"
    ],
    famousVerses: [
      { sanskrit: "ॐ इत्येतदक्षरमिदं सर्वम्", translation: "Om - this syllable is all this" },
      { sanskrit: "अयमात्मा ब्रह्म", translation: "This Self is Brahman" }
    ]
  },
  {
    id: "taittiriya-upanishad",
    name: "Taittiriya Upanishad",
    nameSanskrit: "तैत्तिरीयोपनिषद्",
    veda: "Krishna Yajurveda",
    verses: 31,
    theme: "Five sheaths of existence",
    summary: "Presents the five koshas (sheaths) covering the Self and the famous convocation address. Contains the Bhrigu Valli describing Bhrigu's discovery of Brahman as Ananda (bliss).",
    keyTeachings: [
      "Five koshas: food, vital breath, mind, intellect, bliss",
      "Brahman is existence, consciousness, and infinite",
      "From bliss all beings are born and return to bliss",
      "Practical ethics: speak truth, practice dharma"
    ],
    famousVerses: [
      { sanskrit: "सत्यं वद। धर्मं चर।", translation: "Speak the truth. Practice dharma." },
      { sanskrit: "आनन्दो ब्रह्मेति व्यजानात्", translation: "He knew Bliss as Brahman" }
    ]
  },
  {
    id: "aitareya-upanishad",
    name: "Aitareya Upanishad",
    nameSanskrit: "ऐतरेयोपनिषद्",
    veda: "Rigveda",
    verses: 33,
    theme: "Creation and the Self",
    summary: "Describes the creation of the universe and the individual, showing how consciousness is the foundation of all existence. Contains the mahavakya 'Prajnanam Brahma'.",
    keyTeachings: [
      "The Self created the worlds from itself",
      "Consciousness (Prajna) is Brahman",
      "The Self entered creation as the individual soul",
      "All beings are guided by consciousness"
    ],
    famousVerses: [
      { sanskrit: "प्रज्ञानं ब्रह्म", translation: "Consciousness is Brahman" },
      { sanskrit: "आत्मा वा इदमेक एवाग्र आसीत्", translation: "In the beginning, the Self alone existed" }
    ]
  },
  {
    id: "chandogya-upanishad",
    name: "Chandogya Upanishad",
    nameSanskrit: "छान्दोग्योपनिषद्",
    veda: "Samaveda",
    verses: 627,
    theme: "Tat Tvam Asi - You are That",
    summary: "One of the oldest and largest Upanishads. Contains the famous teaching of Uddalaka to Shvetaketu, including the mahavakya 'Tat Tvam Asi' repeated nine times.",
    keyTeachings: [
      "Tat Tvam Asi - You are That (Brahman)",
      "The Self is the subtle essence of all",
      "Meditation on Om leads to realization",
      "The whole universe is Brahman"
    ],
    famousVerses: [
      { sanskrit: "तत्त्वमसि", translation: "You are That" },
      { sanskrit: "सर्वं खल्विदं ब्रह्म", translation: "All this is indeed Brahman" }
    ]
  },
  {
    id: "brihadaranyaka-upanishad",
    name: "Brihadaranyaka Upanishad",
    nameSanskrit: "बृहदारण्यकोपनिषद्",
    veda: "Shukla Yajurveda",
    verses: 435,
    theme: "The great forest of knowledge",
    summary: "The largest and one of the oldest Upanishads. Contains Yajnavalkya's teachings to Maitreyi, the famous 'neti neti' negation, and profound philosophical discussions.",
    keyTeachings: [
      "Aham Brahmasmi - I am Brahman",
      "Neti neti - not this, not this (method of negation)",
      "The Self is dear because it is the Self",
      "From the unreal lead me to the real"
    ],
    famousVerses: [
      { sanskrit: "अहं ब्रह्मास्मि", translation: "I am Brahman" },
      { sanskrit: "असतो मा सद्गमय", translation: "From the unreal lead me to the real" }
    ]
  },
  {
    id: "shvetashvatara-upanishad",
    name: "Shvetashvatara Upanishad",
    nameSanskrit: "श्वेताश्वतरोपनिषद्",
    veda: "Krishna Yajurveda",
    verses: 113,
    theme: "Personal God and liberation",
    summary: "Unique in presenting a personal God (Rudra/Shiva) while maintaining Vedantic philosophy. Bridges devotion and knowledge, theism and monism.",
    keyTeachings: [
      "God is both immanent and transcendent",
      "Through His maya, God creates the world",
      "Devotion and knowledge both lead to liberation",
      "The Lord dwells in the hearts of all beings"
    ],
    famousVerses: [
      { sanskrit: "तमेव विदित्वातिमृत्युमेति", translation: "Knowing Him alone, one goes beyond death" },
      { sanskrit: "यदा चर्मवदाकाशं वेष्टयिष्यन्ति मानवाः", translation: "When men can roll up the sky like a leather scroll" }
    ]
  }
];

// Stotras Data
export interface Stotra {
  id: string;
  name: string;
  nameSanskrit: string;
  deity: string;
  verses: number;
  author: string;
  benefits: string[];
  summary: string;
}

export const stotras: Stotra[] = [
  {
    id: "vishnu-sahasranama",
    name: "Vishnu Sahasranama",
    nameSanskrit: "विष्णुसहस्रनाम",
    deity: "Lord Vishnu",
    verses: 142,
    author: "Bhishma Pitamaha",
    benefits: ["Removes all sins", "Grants liberation", "Fulfills all desires", "Protection from evil"],
    summary: "The thousand names of Lord Vishnu, narrated by Bhishma to Yudhishthira on the battlefield. Contains 1000 divine names describing Vishnu's infinite qualities."
  },
  {
    id: "lalita-sahasranama",
    name: "Lalita Sahasranama",
    nameSanskrit: "ललितासहस्रनाम",
    deity: "Goddess Lalita",
    verses: 182,
    author: "Hayagriva to Agastya",
    benefits: ["Grants all auspiciousness", "Removes obstacles", "Spiritual upliftment", "Material prosperity"],
    summary: "The thousand names of the Divine Mother in Her beautiful form. Revealed by Lord Hayagriva, it describes the Goddess as Tripurasundari."
  },
  {
    id: "hanuman-chalisa",
    name: "Hanuman Chalisa",
    nameSanskrit: "हनुमान चालीसा",
    deity: "Lord Hanuman",
    verses: 40,
    author: "Tulsidas",
    benefits: ["Removes fear and obstacles", "Grants strength and courage", "Protection from evil", "Success in endeavors"],
    summary: "Forty verses in praise of Hanuman, composed by Saint Tulsidas. One of the most popular Hindu devotional hymns, recited daily by millions."
  },
  {
    id: "aditya-hridayam",
    name: "Aditya Hridayam",
    nameSanskrit: "आदित्यहृदयम्",
    deity: "Lord Surya",
    verses: 31,
    author: "Sage Agastya",
    benefits: ["Victory over enemies", "Good health", "Removes all sins", "Grants energy and vitality"],
    summary: "The 'Heart of Aditya' - taught by sage Agastya to Lord Rama before his battle with Ravana. A powerful hymn to the Sun God for victory and strength."
  },
  {
    id: "soundarya-lahari",
    name: "Soundarya Lahari",
    nameSanskrit: "सौन्दर्यलहरी",
    deity: "Goddess Tripurasundari",
    verses: 103,
    author: "Adi Shankaracharya",
    benefits: ["Fulfills all desires", "Tantric benefits", "Spiritual knowledge", "Divine grace"],
    summary: "The 'Waves of Beauty' - a tantric masterpiece by Shankaracharya describing the beauty of the Divine Mother. First 41 verses are especially sacred."
  },
  {
    id: "shiva-tandava-stotram",
    name: "Shiva Tandava Stotram",
    nameSanskrit: "शिवताण्डवस्तोत्रम्",
    deity: "Lord Shiva",
    verses: 16,
    author: "Ravana",
    benefits: ["Pleases Lord Shiva", "Grants fearlessness", "Destroys enemies", "Spiritual power"],
    summary: "Ravana's powerful hymn praising Shiva's cosmic dance of destruction. Known for its complex meter and intense devotional fervor."
  },
  {
    id: "durga-saptashati",
    name: "Durga Saptashati",
    nameSanskrit: "दुर्गासप्तशती",
    deity: "Goddess Durga",
    verses: 700,
    author: "Sage Markandeya",
    benefits: ["Destroys all evils", "Grants protection", "Fulfills desires", "Liberation"],
    summary: "Also known as Chandi or Devi Mahatmya - the 700 verses glorifying the Divine Mother's battles against demons and Her supreme power."
  },
  {
    id: "kanakadhara-stotram",
    name: "Kanakadhara Stotram",
    nameSanskrit: "कनकधारा स्तोत्रम्",
    deity: "Goddess Lakshmi",
    verses: 21,
    author: "Adi Shankaracharya",
    benefits: ["Removes poverty", "Grants wealth", "Material prosperity", "Divine blessings"],
    summary: "Composed by young Shankara when a poor woman gave him a dried gooseberry. Lakshmi showered golden gooseberries in response to these verses."
  }
];

// Helper functions
export const getUpanishadById = (id: string) => 
  upanishads.find(u => u.id === id);

export const getStotraById = (id: string) => 
  stotras.find(s => s.id === id);
