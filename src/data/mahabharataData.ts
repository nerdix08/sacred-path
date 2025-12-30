// Mahabharata Data - Key Parvas (Books) with content
// Sources: Project Gutenberg, Wikisource (Ganguli translation), Sacred-Texts

export interface MahabharataCharacter {
  id: string;
  name: string;
  nameSanskrit: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAttribution: string;
}

export interface MahabharataParva {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  meaning: string;
  chapters: number;
  summary: string;
  fullContent: string[];
  keyEvents: string[];
  moralTakeaways: string[];
  relatedGitaVerses: { chapter: number; verse: number; connection: string }[];
  imageUrl: string;
  imageAttribution: string;
}

// Key Characters
export const mahabharataCharacters: MahabharataCharacter[] = [
  {
    id: "krishna",
    name: "Lord Krishna",
    nameSanskrit: "श्री कृष्ण",
    role: "Divine Guide, King of Dwaraka",
    description: "The eighth avatar of Lord Vishnu, Krishna is the central figure who guides the Pandavas through their struggles. As Arjuna's charioteer, he delivers the Bhagavad Gita on the battlefield. His divine wisdom, playful nature, and ultimate revelation of cosmic truth make him the heart of the Mahabharata.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg/440px-Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "arjuna",
    name: "Arjuna",
    nameSanskrit: "अर्जुन",
    role: "Third Pandava, Greatest Archer",
    description: "The son of Indra and Kunti, Arjuna is the greatest warrior of his age. His skill with the bow Gandiva is unmatched. His moment of doubt before the great battle leads to Krishna's discourse—the Bhagavad Gita. He represents the ideal devotee who surrenders to divine guidance.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Prince_Arjuna.jpg/440px-Prince_Arjuna.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "yudhishthira",
    name: "Yudhishthira",
    nameSanskrit: "युधिष्ठिर",
    role: "Eldest Pandava, King of Dharma",
    description: "Born of Dharma (the god of righteousness) and Kunti, Yudhishthira is known for his unwavering truthfulness. His one weakness—gambling—leads to the Pandavas' exile. Despite immense provocation, he remains committed to righteousness, earning him the epithet 'Dharmaraja.'",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Yudhishthira.jpg/440px-Yudhishthira.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "bhima",
    name: "Bhima",
    nameSanskrit: "भीम",
    role: "Second Pandava, Mighty Warrior",
    description: "Son of Vayu (the wind god) and Kunti, Bhima possesses the strength of ten thousand elephants. His mace is the most feared weapon on the battlefield. He fulfills his vow to kill all hundred Kauravas and avenge Draupadi's humiliation.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bhima_LACMA_M.2012.75.2.jpg/440px-Bhima_LACMA_M.2012.75.2.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "draupadi",
    name: "Draupadi",
    nameSanskrit: "द्रौपदी",
    role: "Queen of Pandavas",
    description: "Born from sacred fire, Draupadi is the common wife of the five Pandavas. Her humiliation in the Kaurava court—when Dushasana tried to disrobe her—becomes the pivotal event leading to war. Her devotion to Krishna and her fierce spirit make her one of the epic's most powerful figures.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Draupadi_and_Pandavas.jpg/440px-Draupadi_and_Pandavas.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "karna",
    name: "Karna",
    nameSanskrit: "कर्ण",
    role: "Tragic Hero, Friend of Duryodhana",
    description: "The secret firstborn of Kunti by the Sun god, abandoned at birth and raised by a charioteer. Despite his divine origin, he faces discrimination. His loyalty to Duryodhana, who accepted him when others rejected him, leads him to fight against his own brothers. He represents the tragedy of misplaced loyalty.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Karna.jpg/440px-Karna.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "duryodhana",
    name: "Duryodhana",
    nameSanskrit: "दुर्योधन",
    role: "Eldest Kaurava, Primary Antagonist",
    description: "The eldest of the hundred Kaurava brothers, Duryodhana's jealousy of his cousins the Pandavas drives the epic's conflict. Despite being a capable ruler and warrior, his pride, envy, and refusal to share even 'five villages' leads to the destruction of his entire clan.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Duryodhana.jpg/440px-Duryodhana.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "bhishma",
    name: "Bhishma",
    nameSanskrit: "भीष्म",
    role: "Grand Patriarch, Invincible Warrior",
    description: "Born Devavrata, he took a terrible vow of lifelong celibacy to enable his father's marriage, earning the name Bhishma ('he of the terrible vow'). Blessed with choosing the time of his death, he lies on a bed of arrows after the battle, teaching wisdom to Yudhishthira.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bhisma.jpg/440px-Bhisma.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  }
];

// Key Parvas (Books) - Focusing on major ones
export const mahabharataParvas: MahabharataParva[] = [
  {
    id: "adi-parva",
    number: 1,
    name: "Adi Parva",
    nameSanskrit: "आदिपर्व",
    meaning: "Book of the Beginning",
    chapters: 227,
    summary: "The Adi Parva introduces the lineage of the Kuru dynasty, the birth of the Pandavas and Kauravas, and their childhood. It includes the story of Shakuntala, the churning of the ocean, and establishes the foundations of the great conflict to come.",
    fullContent: [
      "Long ago, in the city of Hastinapura, the Kuru dynasty flourished under righteous kings. King Shantanu, the great-grandfather of both Pandavas and Kauravas, fell in love with the river goddess Ganga, who bore him a son destined for greatness—Devavrata, later known as Bhishma.",
      "Shantanu later wished to marry Satyavati, a fisherman's daughter. Her father demanded that her sons inherit the throne. Devavrata, to fulfill his father's desire, took a terrible vow: he would never marry and would serve whoever sat on the throne. The gods showered flowers at this sacrifice, and he became Bhishma.",
      "Satyavati's sons died young. Through Niyoga, the sage Vyasa fathered three children: Dhritarashtra, born blind; Pandu, born pale; and Vidura, born of wisdom. Dhritarashtra married Gandhari (who blindfolded herself in solidarity with her husband), while Pandu married Kunti and Madri.",
      "Due to a curse, Pandu could not have children naturally. Kunti had received a boon from sage Durvasa allowing her to invoke any god. She bore Yudhishthira (from Dharma), Bhima (from Vayu), and Arjuna (from Indra). She shared the mantra with Madri, who bore the twins Nakula and Sahadeva (from the Ashwini twins).",
      "Meanwhile, Gandhari gave birth to a ball of flesh that Vyasa divided into 101 pieces, which became the hundred Kauravas and their sister Dushala. The eldest was Duryodhana, born with ill omens.",
      "The children grew up together in Hastinapura. Bhima's strength made him the natural enemy of Duryodhana, who attempted to kill him multiple times. Drona, the great weapons master, became their guru, teaching them the arts of war.",
      "Arjuna emerged as Drona's favorite student, his dedication and skill surpassing all others. In a tournament to display their prowess, Karna appeared and challenged Arjuna. When asked his lineage, Duryodhana crowned him king of Anga, earning Karna's eternal friendship and loyalty."
    ],
    keyEvents: [
      "Bhishma's terrible vow",
      "Birth of Dhritarashtra, Pandu, and Vidura",
      "Birth of Pandavas through divine fathers",
      "Birth of 100 Kauravas",
      "Education under Drona",
      "Arjuna's emergence as greatest archer",
      "Karna's arrival and friendship with Duryodhana"
    ],
    moralTakeaways: [
      "Great sacrifices have profound consequences",
      "Jealousy sown in childhood bears bitter fruit",
      "One's birth does not determine one's worth",
      "Every choice shapes destiny"
    ],
    relatedGitaVerses: [
      { chapter: 1, verse: 1, connection: "The field of Dharma where these characters will clash" },
      { chapter: 2, verse: 31, connection: "The dharma of a warrior that all these princes were trained in" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kurukshetra.jpg/600px-Kurukshetra.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "sabha-parva",
    number: 2,
    name: "Sabha Parva",
    nameSanskrit: "सभापर्व",
    meaning: "Book of the Assembly Hall",
    chapters: 72,
    summary: "The Sabha Parva describes the building of the magnificent assembly hall at Indraprastha and the Rajasuya sacrifice that establishes Yudhishthira as emperor. It culminates in the fateful game of dice where Yudhishthira loses everything, including Draupadi, leading to her humiliation and the Pandavas' exile.",
    fullContent: [
      "After the Pandavas escaped the house of lac (a trap set by Duryodhana), they won Draupadi in her swayamvara and married her. Later, they built the magnificent city of Indraprastha on land given by Dhritarashtra.",
      "Maya, the divine architect, built them an assembly hall of unparalleled beauty and magical properties. Pools appeared as solid ground, solid ground appeared as pools. When Duryodhana visited, he fell into a pool, and Draupadi laughed, saying 'the blind son of a blind father.' This insult burned in Duryodhana's heart.",
      "Yudhishthira performed the Rajasuya sacrifice, establishing himself as emperor. Kings from all directions paid tribute. At the ceremony, Krishna was honored as the guest of highest merit, angering Shishupala, who was slain by Krishna after exceeding the limit of his pardoned offenses.",
      "Burning with jealousy at the Pandavas' glory, Duryodhana plotted with his uncle Shakuni, a master of dice. They invited Yudhishthira to a game of dice, knowing his weakness for gambling.",
      "The game began in the great assembly. Shakuni's enchanted dice always fell as he wished. Yudhishthira lost his wealth, his kingdom, his brothers, himself, and finally—in a moment of madness—he wagered Draupadi.",
      "When Yudhishthira lost, Duryodhana sent Dushasana to drag Draupadi into the assembly. She was in her monthly period, wearing a single garment. Dushasana seized her by the hair and brought her before the court.",
      "In the most horrific scene of the epic, Dushasana attempted to disrobe Draupadi in the open court while Duryodhana exposed his thigh, inviting her to sit there. Draupadi prayed to Krishna, who miraculously provided endless cloth, protecting her honor.",
      "Bhima swore two terrible oaths: to drink Dushasana's blood and to break Duryodhana's thighs. Draupadi left her hair unbound, vowing not to tie it until it was washed in Dushasana's blood.",
      "Seeing ill omens, Dhritarashtra granted Draupadi boons. She asked for the freedom of her husbands. The Pandavas were given back their kingdom, but Duryodhana insisted on another game. If they lost, they would go into exile for thirteen years, the final year incognito. Yudhishthira lost again."
    ],
    keyEvents: [
      "Building of Indraprastha",
      "Duryodhana's humiliation at Maya Sabha",
      "Rajasuya sacrifice",
      "The game of dice",
      "Draupadi wagered and lost",
      "Attempted disrobing of Draupadi",
      "Bhima's oaths",
      "Exile of Pandavas for 13 years"
    ],
    moralTakeaways: [
      "Gambling destroys even the greatest",
      "Insults have far-reaching consequences",
      "Divine protection comes to those who surrender",
      "Adharma in victory leads to ultimate defeat"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 62, connection: "Attachment leads to desire, desire to anger - Duryodhana's jealousy" },
      { chapter: 16, verse: 4, connection: "Pride, arrogance, and conceit - marks of the demonic nature" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Draupadi_humiliated.jpg/600px-Draupadi_humiliated.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "bhishma-parva",
    number: 6,
    name: "Bhishma Parva",
    nameSanskrit: "भीष्मपर्व",
    meaning: "Book of Bhishma",
    chapters: 117,
    summary: "The Bhishma Parva contains the Bhagavad Gita and describes the first ten days of the war when Bhishma commanded the Kaurava forces. It includes Arjuna's moral crisis, Krishna's divine teachings, and the fierce battles. It ends with Bhishma's fall when Arjuna, using Shikhandi as a shield, pierces him with countless arrows.",
    fullContent: [
      "After thirteen years of exile and the failure of peace negotiations, war became inevitable. Eleven akshauhinis (army divisions) assembled under Duryodhana; seven under the Pandavas. The armies faced each other on the field of Kurukshetra.",
      "Bhishma, the invincible patriarch, was appointed commander of the Kaurava forces. Though fighting for Duryodhana by his vow, his heart was with the Pandavas.",
      "As the conches blew and the war was about to begin, Arjuna asked Krishna to drive their chariot between the two armies. Seeing his teachers, grandfathers, uncles, and cousins arrayed for battle, Arjuna was overcome with grief and moral confusion.",
      "'I will not fight,' he declared, his bow slipping from his hands. 'What use is victory if it means killing those I love? Better that I become a beggar than rule a kingdom won through their blood.'",
      "Thus began the Bhagavad Gita—Krishna's divine discourse that addressed Arjuna's confusion and revealed the highest truths of existence. Krishna taught about the eternal nature of the soul, the importance of performing one's duty without attachment, and the various paths to liberation.",
      "The climax came when Krishna revealed His cosmic form—the Vishvarupa—showing that He is Time, the destroyer of all, and that the warriors assembled were already slain by destiny. Arjuna was merely an instrument.",
      "Strengthened by divine knowledge, Arjuna took up his bow. The war began. For ten days, Bhishma commanded the Kauravas, devastating the Pandava army. Each evening, the Pandavas begged Bhishma to reveal how he could be defeated.",
      "Finally, Bhishma revealed: 'I will not fight one who was born a woman or bears a woman's name.' Shikhandi, born as a woman but living as a man, had sworn to kill Bhishma from a previous life's enmity.",
      "On the tenth day, Arjuna positioned Shikhandi before him. Bhishma lowered his weapons. Arjuna's arrows pierced Bhishma until he fell, his body held aloft by the arrows themselves, forming a bed. Bhishma chose to wait for the auspicious moment of Uttarayana (sun's northward journey) to leave his body."
    ],
    keyEvents: [
      "Armies assemble at Kurukshetra",
      "Arjuna's moral crisis",
      "Krishna's teachings (Bhagavad Gita)",
      "Revelation of Vishvarupa",
      "Ten days of battle under Bhishma",
      "Shikhandi shields Arjuna",
      "Fall of Bhishma"
    ],
    moralTakeaways: [
      "Confusion can be the doorway to wisdom",
      "Duty must be performed regardless of personal attachment",
      "The soul is eternal; the body temporary",
      "Surrender to the divine will brings peace",
      "Even the greatest warriors must face their destiny"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 11, connection: "Krishna's first teaching: the wise grieve neither for the living nor the dead" },
      { chapter: 11, verse: 32, connection: "I am Time, destroyer of all" },
      { chapter: 18, verse: 66, connection: "Surrender unto Me alone" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg/600px-Bhagavad_Gita%2C_Krishna%2C_Arjuna.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "drona-parva",
    number: 7,
    name: "Drona Parva",
    nameSanskrit: "द्रोणपर्व",
    meaning: "Book of Drona",
    chapters: 170,
    summary: "After Bhishma's fall, Drona becomes the Kaurava commander. The war intensifies with the death of Abhimanyu (Arjuna's son) in the Chakravyuha formation. Arjuna kills Jayadratha in revenge. The parva ends with Drona's death through a deception about his son's death.",
    fullContent: [
      "With Bhishma lying on his arrow bed, Drona took command of the Kaurava army. Duryodhana demanded that Yudhishthira be captured alive. Drona formed complex battle formations to achieve this goal.",
      "The most devastating formation was the Chakravyuha (wheel formation), which only Arjuna and Krishna knew how to break. When Arjuna was lured away, Drona deployed this formation. Young Abhimanyu, Arjuna's sixteen-year-old son, knew how to enter but not exit.",
      "Abhimanyu entered alone, breaking through layer after layer. The Kaurava warriors, violating codes of combat, attacked him simultaneously. When his weapons broke, he fought with a chariot wheel. Finally, he was struck down by six warriors attacking together.",
      "Arjuna's grief and rage were terrible. He vowed to kill Jayadratha (who had blocked the other Pandavas from supporting Abhimanyu) by sunset of the next day, or enter fire.",
      "The battle that day was desperate. At sunset, Jayadratha seemed to have escaped. But Krishna covered the sun with his Sudarshana Chakra, creating an artificial eclipse. When Jayadratha emerged in relief, Arjuna beheaded him, sending the head flying to fall in Jayadratha's father's lap. The father, disturbed, dropped the head, and as he had cursed that whoever dropped his son's head would die, he himself perished.",
      "Drona continued his assault, destroying Pandava forces. To stop him, a plan was devised: since Drona was invincible while he held weapons, and would drop weapons only upon hearing of his beloved son Ashwatthama's death, an elephant named Ashwatthama was killed.",
      "Bhima proclaimed 'Ashwatthama is dead,' adding softly 'the elephant.' Drona turned to Yudhishthira, who never lied. For the first and only time, Yudhishthira uttered a half-truth: 'Ashwatthama is dead'—his chariot, which had always floated above ground, touched earth.",
      "Drona, believing his son dead, laid down his weapons and sat in meditation. Dhrishtadyumna, born specifically to kill Drona, beheaded him. Though this act was controversial, it ended Drona's command."
    ],
    keyEvents: [
      "Drona becomes commander",
      "Abhimanyu enters the Chakravyuha",
      "Death of Abhimanyu",
      "Arjuna's vow to kill Jayadratha",
      "Krishna's eclipse trick",
      "Jayadratha's death",
      "Deception about Ashwatthama",
      "Drona's death"
    ],
    moralTakeaways: [
      "Youth and valor cannot substitute for complete knowledge",
      "Even righteous people resort to deception in war",
      "Attachment (to son) becomes a fatal weakness",
      "War destroys the innocent along with the guilty"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 27, connection: "Death is certain for the born - Abhimanyu's fate" },
      { chapter: 18, verse: 17, connection: "One who is free from ego, whose intelligence is not entangled - Arjuna's clear purpose" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Abhimanyu.jpg/600px-Abhimanyu.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "karna-parva",
    number: 8,
    name: "Karna Parva",
    nameSanskrit: "कर्णपर्व",
    meaning: "Book of Karna",
    chapters: 69,
    summary: "Karna becomes the third commander of the Kaurava army. His prowess is fearsome, but the curses he accumulated throughout his life begin to take effect. The epic confrontation between Arjuna and Karna ends with Karna's death, but his nobility in defeat immortalizes him as one of the epic's most tragic heroes.",
    fullContent: [
      "Karna, whom Duryodhana trusted above all others, assumed command of the Kaurava army. The sun's son on the Kaurava side faced the thunderbolt's son (Arjuna, son of Indra) on the Pandava side.",
      "But Karna entered battle burdened by curses. Parashurama, his guru, had cursed him to forget crucial mantras when he needed them most (for hiding his caste). The earth goddess cursed him for accidentally killing a cow. A Brahmin cursed him when he killed his son by accident.",
      "The battle between Arjuna and Karna was the climax of the war. They were equals in every way—both divine-born, both supreme archers, both betrayed by circumstances. Karna had given away his divine armor and earrings (his birthright protection) to Indra.",
      "During their final confrontation, Karna's chariot wheel sank into the earth (the earth goddess's curse). As he struggled to free it, remembering Parashurama's curse, he forgot the mantras to invoke his celestial weapons.",
      "Karna appealed to Arjuna's sense of dharma, asking for time to free his chariot. Krishna reminded Arjuna of Abhimanyu's death, Draupadi's humiliation, the house of lac—all events where dharma was violated against the Pandavas. 'Where was Karna's dharma then?'",
      "Arjuna released his arrow. Karna's head fell. Even in death, a golden light rose from his body to the sun—the tragic hero returning to his father. After the battle, Kunti revealed that Karna was her firstborn, making him the eldest Pandava. Yudhishthira's grief was immeasurable."
    ],
    keyEvents: [
      "Karna becomes third commander",
      "Karna's curses take effect",
      "The great duel between Arjuna and Karna",
      "Karna's chariot sinks",
      "Krishna's reminder of past injustices",
      "Death of Karna",
      "Revelation of Karna's identity"
    ],
    moralTakeaways: [
      "Past actions (karma) inevitably bear fruit",
      "Loyalty to the wrong cause leads to tragedy",
      "Generosity is noble, but discrimination is wisdom",
      "Birth does not determine nobility—actions do"
    ],
    relatedGitaVerses: [
      { chapter: 3, verse: 35, connection: "Better one's own dharma, however imperfect - Karna's misplaced loyalty" },
      { chapter: 18, verse: 47, connection: "Better to die performing one's own duty - Karna's final stand" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Karna.jpg/600px-Karna.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "shalya-parva",
    number: 9,
    name: "Shalya Parva",
    nameSanskrit: "शल्यपर्व",
    meaning: "Book of Shalya",
    chapters: 64,
    summary: "Shalya, king of Madra and uncle of the Pandavas, becomes the final Kaurava commander. The war ends on the eighteenth day with Yudhishthira killing Shalya and Bhima fulfilling his oath by killing Duryodhana with a mace blow to the thighs.",
    fullContent: [
      "After Karna's fall, only Shalya remained of the great warriors. Though uncle to Nakula and Sahadeva through their mother Madri, he fought for the Kauravas due to Duryodhana's cunning hospitality during his journey to war.",
      "Shalya fought with honor and courage, but by the eighteenth day, the Kaurava army was decimated. Yudhishthira, rarely a front-line warrior, engaged Shalya in combat and killed him with a spear.",
      "With Shalya's death, the Kaurava army dissolved. Duryodhana, the last survivor of the hundred brothers, fled to hide in a lake, using his knowledge of magic to breathe underwater.",
      "The Pandavas discovered his hiding place. Taunted by Yudhishthira and challenged by Bhima, Duryodhana emerged. He offered to fight any Pandava in single combat, with the victor taking the kingdom.",
      "Bhima stepped forward with his mace. Though Balarama (Krishna's brother and Duryodhana's guru) had taught them both, Duryodhana was technically the superior fighter. The duel was fierce and prolonged.",
      "Krishna reminded Bhima of his oath—to break Duryodhana's thighs. When Bhima struck Duryodhana's thighs (an illegal blow in mace combat), Duryodhana fell. Though protesting the foul, Duryodhana lay dying.",
      "The war was over. Of millions who fought, only the five Pandavas, Krishna, and a handful of others survived. As Duryodhana lay dying, he declared that he had lived as a king and would die as one, going to heaven as a warrior. And he was right—his valor earned him paradise, though his jealousy had destroyed his world."
    ],
    keyEvents: [
      "Shalya becomes final commander",
      "Yudhishthira kills Shalya",
      "Duryodhana hides in the lake",
      "The mace duel between Bhima and Duryodhana",
      "Bhima's illegal blow to Duryodhana's thighs",
      "End of the war"
    ],
    moralTakeaways: [
      "Even victory in dharma involves moral compromises in war",
      "Valor does not excuse adharma",
      "All things, good or evil, eventually end",
      "Pride leads to destruction, but courage earns respect even in defeat"
    ],
    relatedGitaVerses: [
      { chapter: 11, verse: 33, connection: "Be an instrument - all are already slain by destiny" },
      { chapter: 18, verse: 78, connection: "Where there is Krishna and Arjuna, there is victory" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bhima_and_Duryodhana_mace_fight.jpg/600px-Bhima_and_Duryodhana_mace_fight.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  }
];

// Helper functions
export const getMahabharataParvaById = (id: string): MahabharataParva | undefined => {
  return mahabharataParvas.find(parva => parva.id === id);
};

export const getMahabharataCharacterById = (id: string): MahabharataCharacter | undefined => {
  return mahabharataCharacters.find(char => char.id === id);
};

export const searchMahabharata = (query: string): { parvas: MahabharataParva[]; characters: MahabharataCharacter[] } => {
  const lowerQuery = query.toLowerCase();
  
  const parvas = mahabharataParvas.filter(parva =>
    parva.name.toLowerCase().includes(lowerQuery) ||
    parva.summary.toLowerCase().includes(lowerQuery) ||
    parva.fullContent.some(p => p.toLowerCase().includes(lowerQuery)) ||
    parva.keyEvents.some(e => e.toLowerCase().includes(lowerQuery)) ||
    parva.moralTakeaways.some(m => m.toLowerCase().includes(lowerQuery))
  );
  
  const characters = mahabharataCharacters.filter(char =>
    char.name.toLowerCase().includes(lowerQuery) ||
    char.role.toLowerCase().includes(lowerQuery) ||
    char.description.toLowerCase().includes(lowerQuery)
  );
  
  return { parvas, characters };
};
