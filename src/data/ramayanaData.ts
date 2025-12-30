// Complete Ramayana Data - All 7 Kandas with full content
// Sources: Sacred-Texts Hindu Section, Valmiki Ramayana public domain translations

export interface RamayanaCharacter {
  id: string;
  name: string;
  nameSanskrit: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAttribution: string;
}

export interface RamayanaKanda {
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
export const ramayanaCharacters: RamayanaCharacter[] = [
  {
    id: "rama",
    name: "Lord Rama",
    nameSanskrit: "श्री राम",
    role: "Protagonist, Prince of Ayodhya",
    description: "The seventh avatar of Lord Vishnu, Rama is the embodiment of dharma (righteousness). Born as the eldest son of King Dasharatha, he is renowned for his unwavering commitment to truth, duty, and moral conduct. His life exemplifies the ideal qualities of a son, husband, brother, and king.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Rama_and_Hanuman.jpg/440px-Rama_and_Hanuman.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "sita",
    name: "Goddess Sita",
    nameSanskrit: "सीता देवी",
    role: "Consort of Rama, Daughter of Earth",
    description: "Daughter of King Janaka and an incarnation of Goddess Lakshmi, Sita represents the ideal of womanly virtue, purity, and devotion. Found in a furrow while her father was ploughing, she is named Sita meaning 'furrow'. Her unwavering devotion to Rama and her patient endurance during captivity make her the embodiment of feminine strength.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sita_-_Ravivarma.jpg/440px-Sita_-_Ravivarma.jpg",
    imageAttribution: "Raja Ravi Varma, Wikimedia Commons, Public Domain"
  },
  {
    id: "hanuman",
    name: "Lord Hanuman",
    nameSanskrit: "हनुमान",
    role: "Divine Devotee, Son of Vayu",
    description: "The mighty Vanara (monkey) god, son of the wind god Vayu. Hanuman is the epitome of selfless devotion (bhakti), strength, and humility. His extraordinary powers, gained through divine blessings, are used solely in service to Lord Rama. He is celebrated as the ideal devotee and servant.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hanuman_in_Terra_Cotta.jpg/440px-Hanuman_in_Terra_Cotta.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "lakshmana",
    name: "Lakshmana",
    nameSanskrit: "लक्ष्मण",
    role: "Brother of Rama, Avatar of Shesha",
    description: "The loyal younger brother of Rama and an incarnation of the divine serpent Shesha upon whom Lord Vishnu rests. Lakshmana's dedication to Rama is legendary—he accompanied Rama into exile, remaining awake for 14 years to guard his brother and sister-in-law. He represents the ideal of brotherly love and loyalty.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lakshmana.jpg/440px-Lakshmana.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "ravana",
    name: "Ravana",
    nameSanskrit: "रावण",
    role: "King of Lanka, Primary Antagonist",
    description: "The ten-headed demon king of Lanka, Ravana is one of the most powerful beings ever. A great scholar, musician, and devotee of Lord Shiva, his immense knowledge and power were corrupted by ego and desire. His abduction of Sita leads to his eventual destruction, teaching that even the mightiest fall when driven by adharma.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ravana_%28ca._1920%29.jpg/440px-Ravana_%28ca._1920%29.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "dasharatha",
    name: "King Dasharatha",
    nameSanskrit: "दशरथ",
    role: "King of Ayodhya, Father of Rama",
    description: "The noble king of Ayodhya and father of Rama, Bharata, Lakshmana, and Shatrughna. A righteous ruler loved by his subjects, Dasharatha's life takes a tragic turn when bound by a promise to his wife Kaikeyi, he must exile his beloved son Rama. He dies of heartbreak, unable to bear the separation.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Dashratha_-_Raja_Ravi_Varma.jpg/440px-Dashratha_-_Raja_Ravi_Varma.jpg",
    imageAttribution: "Raja Ravi Varma, Wikimedia Commons, Public Domain"
  },
  {
    id: "bharata",
    name: "Bharata",
    nameSanskrit: "भरत",
    role: "Brother of Rama, Prince of Ayodhya",
    description: "The second son of Dasharatha and Kaikeyi. Despite his mother's machinations that led to Rama's exile, Bharata refuses to accept the throne. He rules as Rama's regent, placing Rama's sandals on the throne as a symbol of rightful kingship, exemplifying selfless devotion and righteousness.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bharata_Rama.jpg/440px-Bharata_Rama.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "sugriva",
    name: "Sugriva",
    nameSanskrit: "सुग्रीव",
    role: "King of Vanaras",
    description: "The king of the Vanaras (monkey people) of Kishkindha. After being exiled by his brother Vali, Sugriva forms an alliance with Rama. With Rama's help, he defeats Vali and in return, leads his Vanara army to help rescue Sita. His friendship with Rama exemplifies mutual trust and honor.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sugriva_meets_Rama.jpg/440px-Sugriva_meets_Rama.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  }
];

// All 7 Kandas with comprehensive content
export const ramayanaKandas: RamayanaKanda[] = [
  {
    id: "bala-kanda",
    number: 1,
    name: "Bala Kanda",
    nameSanskrit: "बालकाण्ड",
    meaning: "Book of Youth",
    chapters: 77,
    summary: "The Bala Kanda narrates the birth and childhood of Lord Rama. It begins with the sage Valmiki learning about Rama's story from Narada and composing the epic. King Dasharatha of Ayodhya, longing for sons, performs the Putrakameshti Yajna. From the sacred fire emerges divine payasam (pudding) that his three queens consume, leading to the birth of four princes: Rama to Kausalya, Bharata to Kaikeyi, and twins Lakshmana and Shatrughna to Sumitra.",
    fullContent: [
      "In the prosperous kingdom of Kosala lay the magnificent city of Ayodhya, ruled by the righteous King Dasharatha of the Solar dynasty. Though blessed with wealth, power, and the love of his people, the king's heart remained heavy, for he had no heir to continue his noble lineage.",
      "Acting on the counsel of his wise ministers and the sage Vashishta, Dasharatha performed the Ashwamedha Yajna followed by the Putrakameshti Yajna, a sacred ritual for obtaining sons. The devas, pleased by his devotion, sent the god of fire Agni with a golden vessel containing divine payasam.",
      "Dasharatha distributed this sacred pudding among his three queens. Queen Kausalya received half, Queen Sumitra received a quarter, and Queen Kaikeyi received the remaining quarter. In due course, Kausalya gave birth to Rama, Kaikeyi to Bharata, and Sumitra to the twins Lakshmana and Shatrughna.",
      "The princes grew up learning the arts of warfare, governance, and Vedic knowledge under the guidance of sage Vashishta. Rama and Lakshmana developed an inseparable bond, as did Bharata and Shatrughna.",
      "When Rama was sixteen, the great sage Vishwamitra arrived at Ayodhya seeking help. Demons Maricha and Subahu were disrupting his sacred rituals. Though heartbroken at the thought of sending his young sons to battle demons, Dasharatha, bound by dharma, allowed Rama and Lakshmana to accompany the sage.",
      "Under Vishwamitra's tutelage, Rama received divine weapons and mantras. He destroyed the demoness Tataka and protected the sage's yajna by vanquishing Maricha and Subahu. The sage then led them to Mithila, the kingdom of the wise King Janaka.",
      "In Mithila stood the divine bow of Lord Shiva, which no mortal could even move. King Janaka had declared that whoever could string this bow would marry his daughter Sita, herself found miraculously in a furrow while the king was ploughing a field for a yajna.",
      "With effortless grace, Rama not only lifted the mighty bow but broke it while attempting to string it. The sound reverberated across the three worlds. Sita, watching with bated breath, placed the wedding garland around Rama's neck. The divine couple was married with great celebration, and Rama's brothers were also wed to Sita's sister and cousins."
    ],
    keyEvents: [
      "King Dasharatha performs Putrakameshti Yajna",
      "Birth of Rama, Bharata, Lakshmana, and Shatrughna",
      "Sage Vishwamitra takes Rama and Lakshmana",
      "Rama kills demoness Tataka",
      "Rama breaks Shiva's bow",
      "Marriage of Rama and Sita"
    ],
    moralTakeaways: [
      "Patience and devotion are eventually rewarded",
      "A true guru guides disciples through challenges to reveal their potential",
      "Dharma (righteous duty) must guide all decisions",
      "Divine purpose manifests through ordinary actions"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 47, connection: "Performing duty without attachment to results - as Rama followed Vishwamitra without questioning" },
      { chapter: 4, verse: 7, connection: "Divine incarnation to establish dharma" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Rama_breaking_the_bow.jpg/600px-Rama_breaking_the_bow.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "ayodhya-kanda",
    number: 2,
    name: "Ayodhya Kanda",
    nameSanskrit: "अयोध्याकाण्ड",
    meaning: "Book of Ayodhya",
    chapters: 119,
    summary: "The Ayodhya Kanda describes the events leading to Rama's exile. King Dasharatha decides to crown Rama as the heir apparent. However, Queen Kaikeyi, influenced by her maid Manthara, invokes two boons previously granted to her by the king: that Bharata be crowned king and Rama be exiled to the forest for fourteen years. Bound by his word, Dasharatha orders the exile. Rama accepts the decree without protest, accompanied by Sita and Lakshmana.",
    fullContent: [
      "Years passed, and Rama's virtues shone ever brighter. King Dasharatha, feeling the weight of his years, decided to crown Rama as Yuvaraja (crown prince). The entire kingdom rejoiced at the announcement, and preparations began for the grand coronation.",
      "However, fate had other plans. Manthara, the hunchbacked maid of Queen Kaikeyi, poisoned her mistress's mind with jealousy and fear. She convinced Kaikeyi that Rama's coronation would reduce Bharata's status and that Kaikeyi herself would become a mere servant to Queen Kausalya.",
      "Overcome by misguided maternal instinct, Kaikeyi entered the sulking chamber and demanded that Dasharatha fulfill two boons he had promised her long ago on the battlefield when she saved his life. With a heavy heart, she demanded that Bharata be crowned king and Rama be exiled to the Dandaka forest for fourteen years.",
      "Dasharatha was shattered. He pleaded, begged, and offered his kingdom, his life, anything but this cruel demand. But Kaikeyi remained unmoved, citing his duty to honor his word. The king, bound by his promise and the sacred vow of a Kshatriya, had no choice but to comply.",
      "When Rama learned of the decree, he accepted it with complete equanimity. Without a trace of anger or disappointment, he prepared to leave for the forest. His only concern was for his aged father's well-being and his people's sorrow.",
      "Sita, the embodiment of wifely devotion, insisted on accompanying Rama. 'A wife's place is beside her husband,' she declared. 'The forest with you is heaven; a palace without you is hell.' Lakshmana too refused to stay behind, choosing to serve his brother in the wilderness.",
      "The departure from Ayodhya was heart-wrenching. Citizens wept openly, many following the chariot until exhaustion overcame them. Dasharatha collapsed repeatedly, calling out for his beloved son. The city that had prepared for a celebration now drowned in grief.",
      "Unable to bear the separation, King Dasharatha died of a broken heart, calling out Rama's name with his last breath. Meanwhile, Bharata, who was away at his maternal grandfather's home, returned to find his father dead and his beloved brother exiled—all because of his own mother's treachery.",
      "Enraged and heartbroken, Bharata renounced his mother and set out for the forest to bring Rama back. At Chitrakoot, he fell at Rama's feet, begging him to return. But Rama gently refused, explaining that fulfilling their father's word was their highest duty.",
      "Accepting Rama's decision but refusing to rule in his own name, Bharata requested Rama's sandals. He placed these sacred paduka on the throne of Ayodhya and ruled as regent for fourteen years, living as an ascetic at Nandigram, awaiting his brother's return."
    ],
    keyEvents: [
      "Dasharatha announces Rama's coronation",
      "Manthara poisons Kaikeyi's mind",
      "Kaikeyi demands two boons",
      "Rama accepts exile gracefully",
      "Sita and Lakshmana accompany Rama",
      "Dasharatha dies of grief",
      "Bharata's devotion - rules with Rama's sandals"
    ],
    moralTakeaways: [
      "True character is revealed in times of adversity",
      "Honoring one's word is paramount",
      "Jealousy and bad counsel can destroy families",
      "Acceptance of fate with grace is the mark of wisdom",
      "Devotion to duty transcends personal desires"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 14, connection: "Accepting pleasure and pain with equanimity, as Rama accepted exile" },
      { chapter: 2, verse: 38, connection: "Treating success and failure equally" },
      { chapter: 3, verse: 35, connection: "Following one's own dharma, however imperfect" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Rama%27s_exile_from_Ayodhya.jpg/600px-Rama%27s_exile_from_Ayodhya.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "aranya-kanda",
    number: 3,
    name: "Aranya Kanda",
    nameSanskrit: "अरण्यकाण्ड",
    meaning: "Book of the Forest",
    chapters: 75,
    summary: "The Aranya Kanda chronicles Rama, Sita, and Lakshmana's life in the Dandaka forest. They encounter sages, establish an ashram at Panchavati, and Rama protects the forest-dwelling sages by destroying demons. The demoness Shurpanakha's advances toward Rama are rejected, leading to her mutilation by Lakshmana. She seeks revenge through her brother Ravana, who becomes obsessed with Sita. Using the golden deer Maricha as a decoy, Ravana abducts Sita, setting the stage for the epic war.",
    fullContent: [
      "Rama, Sita, and Lakshmana entered the Dandaka forest, a vast wilderness inhabited by sages and demons alike. They visited the ashrams of various rishis who blessed them and sought protection from the rakshasas who disrupted their penances.",
      "At the ashram of Sage Agastya, Rama received divine weapons including the bow of Vishnu and inexhaustible quivers. The sage directed them to the beautiful region of Panchavati on the banks of the Godavari river, where they built a humble but lovely ashram.",
      "Life in the forest was peaceful and spiritual. Sita tended to flowers, Lakshmana served his brother with devotion, and Rama protected the sages from demon attacks. Their fame as protectors spread throughout the forest.",
      "One fateful day, the demoness Shurpanakha, sister of Ravana, wandered into their clearing. Struck by Rama's divine beauty, she proposed marriage. When gently refused and told that Rama was devoted solely to Sita, she turned her attention to Lakshmana, who also rejected her.",
      "In a fit of jealous rage, Shurpanakha attempted to attack Sita. Swift as lightning, Lakshmana drew his sword and cut off her nose and ears. Howling in pain and humiliation, she fled to her brothers Khara and Dushana, demon commanders who ruled portions of the forest.",
      "Khara and Dushana attacked with an army of fourteen thousand rakshasas. In a display of divine prowess, Rama single-handedly destroyed the entire demon army within an hour, including their commanders. The gods showered flowers from heaven in celebration.",
      "Shurpanakha, now disfigured and defeated, flew to Lanka to her brother Ravana, the mighty ten-headed demon king. She described Sita's unparalleled beauty and planted seeds of desire in Ravana's heart while inflaming his ego with tales of his commanders' defeat.",
      "Ravana, despite warnings from his wise brother Vibhishana, became obsessed with possessing Sita. He devised a plan with his uncle Maricha, a demon who could assume any form. Maricha, though initially reluctant and warning of doom, was threatened into compliance.",
      "Maricha transformed into a beautiful golden deer with silver spots and pranced near Sita's ashram. Enchanted, Sita begged Rama to capture it for her. Against his better judgment, Rama pursued the deer deep into the forest, leaving Lakshmana to guard Sita.",
      "When struck by Rama's arrow, Maricha cried out 'O Lakshmana! O Sita!' in Rama's voice. Hearing this cry, Sita panicked and forced Lakshmana to go to Rama's aid. Before leaving, Lakshmana drew a protective circle around the ashram, warning Sita never to cross it.",
      "In the guise of a holy mendicant, Ravana appeared before Sita seeking alms. When she offered food from within the protective line, he revealed his true form and demanded she become his queen. When she refused, he seized her and flew away in his aerial chariot Pushpaka.",
      "Jatayu, the noble vulture king and friend of Dasharatha, saw the abduction and attacked Ravana despite his old age. A fierce battle ensued, but Ravana cut off Jatayu's wings, leaving him mortally wounded. Sita dropped her ornaments as markers along the way.",
      "Ravana imprisoned Sita in the Ashoka grove of Lanka, guarded by fearsome demonesses. Despite threats and temptations, Sita remained steadfast in her devotion to Rama, refusing even to look at Ravana."
    ],
    keyEvents: [
      "Rama receives divine weapons from Sage Agastya",
      "Ashram established at Panchavati",
      "Shurpanakha's advances and mutilation",
      "Rama destroys 14,000 demons single-handedly",
      "Golden deer (Maricha) appears",
      "Sita's abduction by Ravana",
      "Jatayu's heroic fight and death"
    ],
    moralTakeaways: [
      "Desire and attachment lead to downfall",
      "Evil actions, however powerful the perpetrator, eventually face consequences",
      "True devotion remains unshaken in adversity",
      "Courage in fighting injustice, regardless of the odds"
    ],
    relatedGitaVerses: [
      { chapter: 2, verse: 62, connection: "Contemplation of sense objects leads to attachment, then desire, then destruction" },
      { chapter: 3, verse: 37, connection: "Kama (desire) as the enemy that consumes wisdom" },
      { chapter: 16, verse: 21, connection: "Three gates to hell: lust, anger, greed - Ravana exemplifies all three" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ravana_kidnaps_Sita.jpg/600px-Ravana_kidnaps_Sita.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "kishkindha-kanda",
    number: 4,
    name: "Kishkindha Kanda",
    nameSanskrit: "किष्किन्धाकाण्ड",
    meaning: "Book of Kishkindha",
    chapters: 67,
    summary: "The Kishkindha Kanda describes Rama's alliance with the Vanara (monkey) kingdom. Searching for Sita, Rama and Lakshmana reach the Rishyamukha mountain where they meet Hanuman, who becomes Rama's greatest devotee. Through him, they ally with Sugriva, the exiled Vanara king. Rama helps Sugriva regain his kingdom by slaying his brother Vali. In return, Sugriva sends monkey armies in all directions to search for Sita.",
    fullContent: [
      "Rama and Lakshmana, grief-stricken by Sita's abduction, wandered through the forest searching for clues. They found the dying Jatayu, who with his last breath revealed that Ravana had taken Sita southward. Rama performed funeral rites for the noble bird, honoring him as his own father.",
      "Continuing south, the brothers destroyed the demon Kabandha, whose spirit, freed from a curse, advised them to seek the help of Sugriva, the exiled king of the Vanaras living on Rishyamukha mountain.",
      "Near Lake Pampa, they encountered the aged woman Shabari, a devotee whose guru had promised that Rama would visit her ashram. With tears of joy, she offered Rama berries, first tasting each one to ensure it was sweet. Her pure devotion moved Rama deeply, and he granted her liberation.",
      "At Rishyamukha, Sugriva saw the two warriors approaching and, fearing they were sent by his brother Vali to kill him, sent his minister Hanuman to investigate. Disguised as a mendicant, Hanuman approached the brothers.",
      "The moment Hanuman heard Rama speak, he recognized the divine incarnation. Revealing his true form, he fell at Rama's feet in complete surrender. This was the beginning of the greatest devotee-deity relationship in Hindu tradition.",
      "Hanuman carried the brothers to Sugriva, who shared his own tale of woe. His brother Vali had usurped his kingdom and wife after a misunderstanding. Sugriva had been living in exile, as Vali could not enter Rishyamukha due to a curse.",
      "Rama and Sugriva formed an alliance: Rama would help Sugriva regain his kingdom, and Sugriva would help find Sita. To demonstrate his power, Rama shot an arrow that pierced seven sala trees and entered the earth.",
      "Sugriva challenged Vali to combat. During the fight, Rama shot Vali from behind a tree. When the dying Vali questioned this apparently unchivalrous act, Rama explained that as a protector of dharma, he was duty-bound to punish Vali for usurping his brother's wife and kingdom. Vali, realizing his errors, died reconciled.",
      "Sugriva was crowned king and promised to send search parties immediately. However, intoxicated by his regained kingdom, he forgot his promise for months. When the rainy season passed and no action was taken, Lakshmana, sent by Rama, arrived at Kishkindha in fury.",
      "Reminded of his debt and duty, Sugriva mobilized millions of Vanaras under various commanders, sending them in all four directions. The southern search party, led by Angada with Hanuman, Jambavan, and others, was deemed most likely to succeed.",
      "After weeks of searching, the southern party reached the ocean shore, despairing. There they met Sampati, Jatayu's brother, who despite losing his wings had divine vision. He revealed that Sita was imprisoned in Lanka, across the vast ocean."
    ],
    keyEvents: [
      "Jatayu reveals Ravana took Sita south",
      "Meeting with Shabari",
      "First meeting with Hanuman",
      "Alliance with Sugriva",
      "Rama slays Vali",
      "Vanara armies sent in four directions",
      "Sampati reveals Sita's location"
    ],
    moralTakeaways: [
      "True friendship involves mutual sacrifice and help",
      "Justice must be served regardless of power",
      "Pure devotion (like Shabari's) transcends caste and circumstance",
      "Promises must be honored",
      "Never underestimate unlikely allies"
    ],
    relatedGitaVerses: [
      { chapter: 9, verse: 26, connection: "Krishna accepts offerings given with devotion - Shabari's berries to Rama" },
      { chapter: 4, verse: 11, connection: "The Lord reciprocates with devotees as they approach Him - Hanuman's devotion" },
      { chapter: 18, verse: 65, connection: "Complete surrender to the Divine" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hanuman_meets_Rama.jpg/600px-Hanuman_meets_Rama.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "sundara-kanda",
    number: 5,
    name: "Sundara Kanda",
    nameSanskrit: "सुन्दरकाण्ड",
    meaning: "Book of Beauty",
    chapters: 68,
    summary: "The Sundara Kanda, named for Hanuman's beautiful deeds, is considered the heart of the Ramayana. Hanuman leaps across the ocean to Lanka, overcoming various obstacles. He finds Sita in the Ashoka grove, delivers Rama's ring as proof of identity, and offers to carry her back. Sita refuses, wanting Rama to rescue her with honor. Hanuman allows himself to be captured, sets Lanka on fire, and returns with news of Sita's location.",
    fullContent: [
      "At the ocean shore, the Vanaras faced an impossible challenge: the sea stretched a hundred yojanas (approximately 800 miles) to Lanka. Who among them could make such a leap? Jambavan, the wise bear, turned to Hanuman.",
      "'Son of Vayu, do you not know your own power? As a child, you leapt toward the sun thinking it a fruit. You were cursed to forget your powers until reminded at the right moment. That moment is now. You are the only one who can save Sita.'",
      "Hanuman's dormant powers awakened. Growing to an enormous size, he climbed Mount Mahendra. With a mighty roar, he leapt into the sky, his passage creating turbulence in the ocean below.",
      "The ocean, honoring the Solar dynasty to which Rama belonged, sent the mountain Mainaka to rise from its depths as a resting place. Hanuman gratefully touched it but did not rest, for his mission was urgent.",
      "Surasa, mother of the Nagas, blocked his path, demanding he enter her mouth. Through cleverness, Hanuman became tiny, entered and exited her mouth instantly, satisfying the letter of her boon. She blessed him for his wisdom.",
      "The demoness Simhika tried to grasp his shadow and devour him, but Hanuman expanded, then contracted, and slew her. Finally, he reached Lanka's shores as the sun set.",
      "Shrinking to the size of a cat, Hanuman entered the golden city at night. Lanka was magnificent beyond imagination, with crystal palaces and gardens. He searched Ravana's enormous palace, observing the sleeping demon king in his grandeur.",
      "Finally, guided by intuition, he found the Ashoka grove. There, under a tree, surrounded by demonesses, sat Sita—thin, disheveled, but radiantly pure. Her only adornment was her unwavering devotion to Rama.",
      "Hanuman watched as Ravana visited at dawn, alternating between sweet words and threats. Sita, showing him a blade of grass to indicate his insignificance compared to Rama, rejected him utterly. Furious, Ravana gave her two months to submit or die.",
      "After the demons departed, Hanuman approached carefully. Sitting in the tree above, he softly chanted Rama's glory. When Sita looked up hopefully, he revealed himself and presented Rama's ring. Sita's joy knew no bounds.",
      "Hanuman offered to carry Sita back immediately, but she refused: 'Only Rama should rescue me. He must defeat Ravana and reclaim me with honor, or my captivity would diminish his glory.' She gave Hanuman her crest-jewel to take to Rama.",
      "Before leaving, Hanuman decided to assess Lanka's strength. He destroyed the Ashoka grove and challenged Ravana's forces. After defeating many warriors, including Ravana's son Akshaya Kumara, he allowed himself to be captured by Indrajit's Brahmastra.",
      "Brought before Ravana, Hanuman delivered Rama's message demanding Sita's return. Enraged, Ravana ordered Hanuman's tail set on fire as punishment. But Sita prayed for Hanuman's safety, and the fire could not harm him.",
      "Using his burning tail, Hanuman leapt from building to building, setting all of Lanka ablaze. He then cooled himself in the ocean and returned to his anxious friends with the glorious news of Sita's discovery."
    ],
    keyEvents: [
      "Hanuman's leap across the ocean",
      "Overcoming Surasa and Simhika",
      "Finding Sita in Ashoka grove",
      "Delivery of Rama's ring",
      "Destruction of Ashoka grove",
      "Capture and audience with Ravana",
      "Burning of Lanka",
      "Return with Sita's crest-jewel"
    ],
    moralTakeaways: [
      "Faith and devotion can accomplish the impossible",
      "We often underestimate our own divine potential",
      "True strength lies in service to a higher cause",
      "Honor is more important than convenience",
      "Cleverness combined with strength achieves success"
    ],
    relatedGitaVerses: [
      { chapter: 6, verse: 5, connection: "Elevate yourself by yourself - Hanuman discovering his powers" },
      { chapter: 18, verse: 58, connection: "By devotion to Me, you shall overcome all obstacles" },
      { chapter: 11, verse: 33, connection: "Being an instrument of the divine will" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hanuman_fetches_the_Sanjivani.jpg/600px-Hanuman_fetches_the_Sanjivani.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "yuddha-kanda",
    number: 6,
    name: "Yuddha Kanda",
    nameSanskrit: "युद्धकाण्ड",
    meaning: "Book of War",
    chapters: 128,
    summary: "The Yuddha Kanda narrates the great war between Rama and Ravana. With Sugriva's Vanara army and Vibhishana (Ravana's righteous brother who defects), Rama marches to Lanka. The sea god helps build a bridge. The battle is fierce and prolonged, with great warriors falling on both sides. Finally, Rama slays Ravana with the Brahmastra. Sita undergoes the fire ordeal to prove her purity, and the victorious party returns to Ayodhya for Rama's coronation.",
    fullContent: [
      "Hanuman's return with news of Sita filled the Vanara army with joy and determination. Rama, examining Sita's crest-jewel, was moved to tears of both sorrow and hope. The time for action had come.",
      "Millions of Vanaras and bears marched southward under Sugriva's command, their passage shaking the earth. At the ocean shore, they faced the challenge of crossing to Lanka.",
      "Rama meditated and prayed to Varuna, the ocean god, for passage. When no response came for three days, Rama, in rare anger, prepared to dry up the ocean with divine weapons. Varuna appeared, apologizing for the delay, and suggested that Nala, son of Vishwakarma, could build a bridge.",
      "Nala directed the construction. Vanaras brought enormous rocks and trees, and by Nala's divine engineering, they floated. In five days, the magnificent Rama Setu (Ram's Bridge) stretched across the ocean, a monument to devotion and divine grace.",
      "As the army crossed, Vibhishana, Ravana's righteous brother, arrived seeking refuge. Though some suspected treachery, Rama accepted him: 'Even if he is false, I have the power to protect. But he who seeks shelter deserves protection.' Rama crowned Vibhishana king of Lanka even before the battle.",
      "The siege of Lanka began. Wave after wave of demons attacked and were repulsed. Great warriors fell: Prahasta, Ravana's commander; Kumbhakarna, the giant who slept six months at a time; Ravana's sons Narantaka and Devantaka.",
      "Indrajit, Ravana's most powerful son, was the greatest threat. His mastery of maya (illusion) and the Brahmastra wounded many including Rama and Lakshmana. When Lakshmana lay dying from a poisoned weapon, Hanuman flew to the Himalayas for the Sanjeevani herb. Unable to identify it, he uprooted the entire Dronagiri mountain and returned before dawn.",
      "Lakshmana recovered and slew Indrajit in a fierce duel, breaking Ravana's heart. Mad with grief and rage, Ravana entered the battlefield himself. The final confrontation had begun.",
      "The battle between Rama and Ravana shook the three worlds. Each time Rama severed Ravana's heads, new ones grew. Finally, remembering Sage Agastya's teachings, Rama invoked the Brahmastra given to him by the sage. The divine weapon, empowered by all the elements, struck Ravana's heart, the source of his power. The tyrant fell.",
      "Vibhishana performed Ravana's last rites with honor, as befitting a warrior king. Sita was freed and brought before Rama. But Rama, mindful of worldly opinion, asked Sita to prove her purity through the fire ordeal (Agni Pariksha).",
      "Sita, though heartbroken at the request, walked into the flames without hesitation. Agni, the fire god, rose from the flames carrying Sita unharmed, proclaiming her absolute purity. The gods themselves appeared, revealing Rama's divinity and praising Sita's virtue.",
      "Fourteen years having passed exactly, the party prepared to return to Ayodhya. They traveled in the aerial chariot Pushpaka, Rama pointing out landmarks of their journey to Sita. Hanuman flew ahead to inform Bharata of their arrival."
    ],
    keyEvents: [
      "Building of Rama Setu (Adam's Bridge)",
      "Vibhishana joins Rama",
      "Great battles and fall of demon warriors",
      "Kumbhakarna's death",
      "Lakshmana kills Indrajit",
      "Hanuman brings Sanjeevani mountain",
      "Rama slays Ravana",
      "Sita's Agni Pariksha (fire ordeal)"
    ],
    moralTakeaways: [
      "Good ultimately triumphs over evil",
      "Those who seek righteousness, even from enemy camps, deserve protection",
      "True power comes from dharma, not mere strength",
      "Victory requires sacrifice and perseverance",
      "Virtue can be tested but never destroyed"
    ],
    relatedGitaVerses: [
      { chapter: 4, verse: 8, connection: "Protection of the good, destruction of evil-doers" },
      { chapter: 11, verse: 32, connection: "Time as the destroyer of worlds - Ravana's inevitable fall" },
      { chapter: 18, verse: 78, connection: "Where there is dharma and devoted service, there is victory" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Battle_at_Lanka%2C_Ramayana%2C_Udaipur%2C_1649-53.jpg/600px-Battle_at_Lanka%2C_Ramayana%2C_Udaipur%2C_1649-53.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  },
  {
    id: "uttara-kanda",
    number: 7,
    name: "Uttara Kanda",
    nameSanskrit: "उत्तरकाण्ड",
    meaning: "Book of the Conclusion",
    chapters: 111,
    summary: "The Uttara Kanda describes Rama's reign in Ayodhya (Rama Rajya) and the events that followed. It includes Ravana's backstory, explaining how he became so powerful. Though Rama and Sita rule blissfully, rumors about Sita's purity during captivity spread. To uphold dharma and public confidence in the throne, Rama reluctantly sends the pregnant Sita to Sage Valmiki's ashram. There she gives birth to Lava and Kusha, who learn the Ramayana. Years later, during Rama's Ashwamedha Yajna, Sita returns to her mother Earth. The epic concludes with Rama ascending to his divine form.",
    fullContent: [
      "The return to Ayodhya was triumphant beyond measure. Bharata, who had lived as an ascetic for fourteen years, rushed to meet his beloved brother. The reunion of the four brothers moved all of heaven and earth. The entire kingdom erupted in celebration.",
      "Rama's coronation was attended by gods, sages, and beings from all realms. Crowned by Sage Vashishta, with Sita by his side and his brothers around him, Rama began a reign that became the gold standard for governance—Rama Rajya.",
      "Under Rama's rule, there was no premature death, no disease, no poverty, no injustice. Rain fell on time, crops flourished, and all beings lived in harmony. Dharma was upheld in every aspect of society.",
      "Yet the shadow of past events lingered. Despite the gods' testimony of Sita's purity, some citizens whispered doubts. A washerman, quarreling with his wife, refused to accept her back after she stayed in another man's house, citing 'I am not Rama' as his reason.",
      "When Rama learned of these rumors, he was torn between his love for Sita and his duty as king. As a ruler, his subjects' faith in the queen affected their faith in the throne. With a bleeding heart, he ordered Lakshmana to take Sita, now pregnant, to the forest near Sage Valmiki's ashram.",
      "Sita, though devastated, understood Rama's position. She blessed him for always placing dharma above personal happiness. At Valmiki's ashram, she gave birth to twin sons, Lava and Kusha, who grew up learning the Vedas and martial arts.",
      "Valmiki composed the Ramayana and taught it to the twins. When Rama performed the Ashwamedha Yajna years later, the twins came and sang the epic before the assembled court, not knowing Rama was their father. Their beauty and the story's power moved everyone to tears.",
      "Rama recognized his sons and sent for Sita. Before the great assembly, Sita was asked one final time to prove her purity. Sita, having endured enough, prayed to her mother: 'O Earth, if I have been true to Rama in thought, word, and deed, receive me.'",
      "The earth split open. A divine throne rose, upon which sat Bhumi Devi, the Earth goddess. She took Sita onto her lap and descended back into the earth. Sita had returned to her source, leaving Rama bereft forever.",
      "Rama spent his remaining years ruling perfectly but joylessly. Lava and Kusha were recognized as heirs. Finally, when Time personified came to announce that Rama's earthly mission was complete, Rama walked into the Sarayu River and ascended to Vaikuntha, resuming his form as Lord Vishnu.",
      "The Ramayana concludes with the assertion that those who read or hear this epic with devotion will be freed from all sins and attain liberation. Rama's story continues to guide millions in the path of dharma, devotion, and righteous living."
    ],
    keyEvents: [
      "Rama's coronation and establishment of Rama Rajya",
      "Rumors about Sita's purity",
      "Sita's exile to Valmiki's ashram",
      "Birth of Lava and Kusha",
      "Twins sing Ramayana before Rama",
      "Sita's return to Earth",
      "Rama's ascension to Vaikuntha"
    ],
    moralTakeaways: [
      "A king's duty to his people may transcend personal happiness",
      "Injustice and doubt, once sown, have far-reaching consequences",
      "Truth cannot be permanently suppressed",
      "Every soul eventually returns to its divine source",
      "Dharma sometimes demands the ultimate sacrifice"
    ],
    relatedGitaVerses: [
      { chapter: 3, verse: 21, connection: "Whatever a great person does, common people follow - Rama's adherence to duty" },
      { chapter: 2, verse: 22, connection: "As one casts off worn-out garments - the body is temporary, the soul eternal" },
      { chapter: 8, verse: 15, connection: "After attaining Me, great souls never return to this temporary world of suffering" }
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sita_Entrusted_to_the_Earth.jpg/600px-Sita_Entrusted_to_the_Earth.jpg",
    imageAttribution: "Wikimedia Commons, Public Domain"
  }
];

// Helper functions
export const getRamayanaKandaById = (id: string): RamayanaKanda | undefined => {
  return ramayanaKandas.find(kanda => kanda.id === id);
};

export const getRamayanaCharacterById = (id: string): RamayanaCharacter | undefined => {
  return ramayanaCharacters.find(char => char.id === id);
};

export const searchRamayana = (query: string): { kandas: RamayanaKanda[]; characters: RamayanaCharacter[] } => {
  const lowerQuery = query.toLowerCase();
  
  const kandas = ramayanaKandas.filter(kanda =>
    kanda.name.toLowerCase().includes(lowerQuery) ||
    kanda.summary.toLowerCase().includes(lowerQuery) ||
    kanda.fullContent.some(p => p.toLowerCase().includes(lowerQuery)) ||
    kanda.keyEvents.some(e => e.toLowerCase().includes(lowerQuery)) ||
    kanda.moralTakeaways.some(m => m.toLowerCase().includes(lowerQuery))
  );
  
  const characters = ramayanaCharacters.filter(char =>
    char.name.toLowerCase().includes(lowerQuery) ||
    char.role.toLowerCase().includes(lowerQuery) ||
    char.description.toLowerCase().includes(lowerQuery)
  );
  
  return { kandas, characters };
};
