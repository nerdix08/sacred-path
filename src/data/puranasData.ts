// Bhagavata Purana Data
export interface BhagavataSkandhа {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  chapters: number;
  summary: string;
  keyStories: string[];
  teachings: string[];
}

export const bhagavataSkandhas: BhagavataSkandhа[] = [
  {
    id: "skandha-1",
    number: 1,
    name: "Creation",
    nameSanskrit: "प्रथम स्कन्ध",
    chapters: 19,
    summary: "The creation of the universe, the purpose of the Bhagavata, and the story of Parikshit preparing to hear the divine narrative before his death.",
    keyStories: ["Vyasa's dissatisfaction and Narada's guidance", "Birth of Parikshit", "Kali Yuga begins"],
    teachings: ["The purpose of life is to inquire about the Absolute Truth", "Hearing about Krishna purifies the heart"]
  },
  {
    id: "skandha-2",
    number: 2,
    name: "Cosmic Manifestation",
    nameSanskrit: "द्वितीय स्कन्ध",
    chapters: 10,
    summary: "The process of creation, the universal form of the Lord, and instructions on meditation and liberation.",
    keyStories: ["Universal form meditation", "Process of creation from Vishnu"],
    teachings: ["Meditation on the cosmic form", "The path of knowledge and devotion"]
  },
  {
    id: "skandha-3",
    number: 3,
    name: "Status Quo",
    nameSanskrit: "तृतीय स्कन्ध",
    chapters: 33,
    summary: "Detailed creation account, Kapila's teachings to Devahuti on Sankhya philosophy and devotional service.",
    keyStories: ["Vidura's pilgrimage", "Kapila teaches Devahuti", "Creation of the universe"],
    teachings: ["Sankhya philosophy", "Devotional service is the highest path"]
  },
  {
    id: "skandha-4",
    number: 4,
    name: "Fourth Canto",
    nameSanskrit: "चतुर्थ स्कन्ध",
    chapters: 31,
    summary: "Stories of great devotees including Dhruva and Prahlada, demonstrating unwavering faith in the Lord.",
    keyStories: ["Dhruva's penance and vision of Vishnu", "Story of King Prithu", "Pracetas and their devotion"],
    teachings: ["Even a child can attain God through sincere devotion", "The Lord protects His devotees"]
  },
  {
    id: "skandha-5",
    number: 5,
    name: "Creative Impetus",
    nameSanskrit: "पञ्चम स्कन्ध",
    chapters: 26,
    summary: "Cosmography of the universe, description of the planetary systems, and the story of King Bharata.",
    keyStories: ["King Bharata becomes a deer", "Description of Jambudvipa", "Hellish and heavenly planets"],
    teachings: ["Attachment even to good things can bind us", "Understanding cosmic structure"]
  },
  {
    id: "skandha-6",
    number: 6,
    name: "Prescribed Duties",
    nameSanskrit: "षष्ठ स्कन्ध",
    chapters: 19,
    summary: "Stories of Ajamila, Chitraketu, and the battle between demigods and demons. Power of the holy name.",
    keyStories: ["Ajamila saved by chanting Narayana", "King Chitraketu's transformation", "Vritrasura's devotion"],
    teachings: ["The holy name of God has unlimited power", "Even a sinner can be saved through devotion"]
  },
  {
    id: "skandha-7",
    number: 7,
    name: "Science of God",
    nameSanskrit: "सप्तम स्कन्ध",
    chapters: 15,
    summary: "The famous story of Prahlada and Narasimha. Instructions on dharma and the nature of the Supreme.",
    keyStories: ["Birth of Prahlada", "Hiranyakashipu's tyranny", "Narasimha avatar appears"],
    teachings: ["God protects His devotees even in impossible situations", "Devotion cannot be destroyed by material power"]
  },
  {
    id: "skandha-8",
    number: 8,
    name: "Withdrawal",
    nameSanskrit: "अष्टम स्कन्ध",
    chapters: 24,
    summary: "Stories of Gajendra, churning of the ocean, Vamana avatar, and the fish incarnation.",
    keyStories: ["Gajendra's prayers and liberation", "Samudra Manthan - Churning of Ocean", "Vamana and Bali", "Matsya Avatar"],
    teachings: ["Surrender in crisis brings divine intervention", "The Lord takes various forms for His devotees"]
  },
  {
    id: "skandha-9",
    number: 9,
    name: "Liberation",
    nameSanskrit: "नवम स्कन्ध",
    chapters: 24,
    summary: "Dynasties of kings, stories of Rama, and genealogies leading to Krishna's appearance.",
    keyStories: ["Story of Ambarisha", "Parashurama avatar", "Rama's story summary", "Dynasty of the Sun and Moon"],
    teachings: ["Devotion to Vishnu protects from all calamities", "Great kings were devoted to dharma"]
  },
  {
    id: "skandha-10",
    number: 10,
    name: "The Summum Bonum",
    nameSanskrit: "दशम स्कन्ध",
    chapters: 90,
    summary: "The crown jewel of Bhagavatam - complete life of Lord Krishna from birth to His return to Vaikuntha.",
    keyStories: ["Birth of Krishna", "Killing of Putana", "Lifting Govardhan", "Rasa Lila", "Killing of Kamsa", "Rukmini marriage", "Kurukshetra"],
    teachings: ["Krishna is the Supreme Personality of Godhead", "Pure love for Krishna is life's ultimate goal"]
  },
  {
    id: "skandha-11",
    number: 11,
    name: "General History",
    nameSanskrit: "एकादश स्कन्ध",
    chapters: 31,
    summary: "Krishna's final teachings to Uddhava - the Uddhava Gita. Destruction of the Yadu dynasty.",
    keyStories: ["Uddhava Gita - Krishna's final teachings", "Curse of the Yadavas", "Krishna's departure"],
    teachings: ["Complete renunciation and devotion", "Everything material is temporary"]
  },
  {
    id: "skandha-12",
    number: 12,
    name: "Age of Deterioration",
    nameSanskrit: "द्वादश स्कन्ध",
    chapters: 13,
    summary: "Future kings, the nature of Kali Yuga, and the ultimate conclusion glorifying the Bhagavatam.",
    keyStories: ["Signs of Kali Yuga", "Future incarnation Kalki", "Summary and glory of Bhagavatam"],
    teachings: ["In Kali Yuga, chanting is the only way", "The Bhagavatam is the essence of all scriptures"]
  }
];

// Shiva Purana Data
export interface ShivaSamhita {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  chapters: number;
  summary: string;
  keyStories: string[];
}

export const shivaSamhitas: ShivaSamhita[] = [
  {
    id: "vidyeshvara-samhita",
    number: 1,
    name: "Vidyeshvara Samhita",
    nameSanskrit: "विद्येश्वर संहिता",
    chapters: 25,
    summary: "Introduction to Shiva worship, importance of Shiva Linga, and methods of devotion.",
    keyStories: ["Origin of Shiva Linga", "Story of Shiva and Vishnu", "Importance of Shiva worship"]
  },
  {
    id: "rudra-samhita",
    number: 2,
    name: "Rudra Samhita",
    nameSanskrit: "रुद्र संहिता",
    chapters: 43,
    summary: "Birth and life of Lord Shiva, marriage with Sati and Parvati, and birth of Kartikeya and Ganesha.",
    keyStories: ["Shiva-Sati love story", "Sati's self-immolation", "Shiva's marriage to Parvati", "Birth of Ganesha", "Birth of Kartikeya"]
  },
  {
    id: "shatarudra-samhita",
    number: 3,
    name: "Shatarudra Samhita",
    nameSanskrit: "शतरुद्र संहिता",
    chapters: 42,
    summary: "The hundred forms of Rudra, stories of Shiva's devotees, and miraculous events.",
    keyStories: ["The twelve Jyotirlingas", "Story of Kannappa", "Story of Markandeya"]
  },
  {
    id: "kotirudra-samhita",
    number: 4,
    name: "Kotirudra Samhita",
    nameSanskrit: "कोटिरुद्र संहिता",
    chapters: 43,
    summary: "Ten million forms of Rudra, sacred places, and methods of liberation.",
    keyStories: ["Sacred pilgrimage sites", "Power of Shiva's names", "Liberation through Shiva worship"]
  },
  {
    id: "uma-samhita",
    number: 5,
    name: "Uma Samhita",
    nameSanskrit: "उमा संहिता",
    chapters: 51,
    summary: "The glory of Goddess Parvati (Uma), her previous births, and her role as Shakti.",
    keyStories: ["Parvati's penance for Shiva", "Stories of the Divine Mother", "Union of Shiva and Shakti"]
  },
  {
    id: "kailasa-samhita",
    number: 6,
    name: "Kailasa Samhita",
    nameSanskrit: "कैलास संहिता",
    chapters: 23,
    summary: "Description of Mount Kailasa, Shiva's abode, and instructions on yoga and meditation.",
    keyStories: ["Description of Kailasa", "Shiva as the supreme yogi", "Path of liberation"]
  },
  {
    id: "vayaviya-samhita",
    number: 7,
    name: "Vayaviya Samhita",
    nameSanskrit: "वायवीय संहिता",
    chapters: 30,
    summary: "Philosophical teachings on Shiva as the Supreme Reality, nature of consciousness.",
    keyStories: ["Shiva as Brahman", "Creation and dissolution", "Ultimate reality"]
  }
];

// Devi Mahatmya Data
export interface DeviChapter {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  summary: string;
  deity: string;
  keyEvents: string[];
}

export const deviChapters: DeviChapter[] = [
  {
    id: "devi-1",
    number: 1,
    name: "Madhu-Kaitabha Vadha",
    nameSanskrit: "मधुकैटभवध",
    summary: "The slaying of demons Madhu and Kaitabha by Maha Vishnu, awakened by Mahamaya.",
    deity: "Maha Kali (Tamas)",
    keyEvents: ["King Suratha's loss", "Vishnu awakened by Devi", "Demons slain"]
  },
  {
    id: "devi-2",
    number: 2,
    name: "Mahishasura Sainya Vadha",
    nameSanskrit: "महिषासुरसैन्यवध",
    summary: "The gods create Goddess Durga from their combined powers to fight Mahishasura.",
    deity: "Maha Lakshmi (Rajas)",
    keyEvents: ["Gods defeated by Mahishasura", "Creation of Durga", "Devi receives divine weapons"]
  },
  {
    id: "devi-3",
    number: 3,
    name: "Mahishasura Vadha",
    nameSanskrit: "महिषासुरवध",
    summary: "The great battle between Durga and Mahishasura, ending in his destruction.",
    deity: "Maha Lakshmi (Rajas)",
    keyEvents: ["Battle begins", "Mahishasura's transformations", "Devi slays Mahishasura"]
  },
  {
    id: "devi-4",
    number: 4,
    name: "Devi Stuti",
    nameSanskrit: "देवीस्तुति",
    summary: "The gods praise the Divine Mother with the famous 'Ya Devi Sarva Bhuteshu' hymn.",
    deity: "Maha Lakshmi (Rajas)",
    keyEvents: ["Gods hymn the Devi", "Ya Devi Sarva Bhuteshu", "Boons granted"]
  },
  {
    id: "devi-5",
    number: 5,
    name: "Devi Duta Samvada",
    nameSanskrit: "देवीदूतसंवाद",
    summary: "Shumbha and Nishumbha send messengers to the Goddess, who refuses to submit.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Rise of Shumbha-Nishumbha", "Devi appears on Himalayas", "Messenger rejected"]
  },
  {
    id: "devi-6",
    number: 6,
    name: "Dhumralochana Vadha",
    nameSanskrit: "धूम्रलोचनवध",
    summary: "The demon Dhumralochana is destroyed by a mere sound from the Goddess.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Dhumralochana sent", "Destroyed by 'Hum'"]
  },
  {
    id: "devi-7",
    number: 7,
    name: "Chanda Munda Vadha",
    nameSanskrit: "चण्डमुण्डवध",
    summary: "Kali emerges from Durga's forehead and slays Chanda and Munda. Devi becomes Chamunda.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Kali manifests", "Chanda-Munda destroyed", "Devi called Chamunda"]
  },
  {
    id: "devi-8",
    number: 8,
    name: "Raktabija Vadha",
    nameSanskrit: "रक्तबीजवध",
    summary: "The terrifying battle with Raktabija, whose blood creates new demons. Kali drinks all blood.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Seven Mothers appear", "Raktabija's power", "Kali drinks blood", "Demon destroyed"]
  },
  {
    id: "devi-9",
    number: 9,
    name: "Nishumbha Vadha",
    nameSanskrit: "निशुम्भवध",
    summary: "The destruction of the demon Nishumbha after a fierce battle.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Great battle", "Nishumbha's armies destroyed", "Nishumbha slain"]
  },
  {
    id: "devi-10",
    number: 10,
    name: "Shumbha Vadha",
    nameSanskrit: "शुम्भवध",
    summary: "Final battle with Shumbha. Devi reveals all powers are Her alone. Shumbha is destroyed.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["All Shaktis merge into Devi", "'I alone exist'", "Shumbha destroyed"]
  },
  {
    id: "devi-11",
    number: 11,
    name: "Narayani Stuti",
    nameSanskrit: "नारायणीस्तुति",
    summary: "The gods praise the Goddess with the beautiful Narayani Stuti hymn.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Hymn to Narayani", "Future appearances foretold", "Blessings granted"]
  },
  {
    id: "devi-12",
    number: 12,
    name: "Phala Stuti",
    nameSanskrit: "फलस्तुति",
    summary: "The benefits of reciting Devi Mahatmya. Goddess promises protection to devotees.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Benefits enumerated", "Protection promised", "Methods of worship"]
  },
  {
    id: "devi-13",
    number: 13,
    name: "Suratha Vaishya Varam",
    nameSanskrit: "सुरथवैश्यवरम्",
    summary: "King Suratha and Vaishya Samadhi receive boons from the Goddess.",
    deity: "Maha Saraswati (Sattva)",
    keyEvents: ["Three years of worship", "Devi appears", "Boons granted", "Liberation achieved"]
  }
];

// Helper functions
export const getBhagavataSkandhаById = (id: string) => 
  bhagavataSkandhas.find(s => s.id === id);

export const getShivaSamhitaById = (id: string) => 
  shivaSamhitas.find(s => s.id === id);

export const getDeviChapterById = (id: string) => 
  deviChapters.find(c => c.id === id);
