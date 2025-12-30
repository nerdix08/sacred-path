import { useParams, Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, BookOpen, Users, ChevronRight, 
  Volume2, VolumeX, Pause, Play, Sparkles, Heart, Sword
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ramayanaKandas, ramayanaCharacters, getRamayanaKandaById } from "@/data/ramayanaData";
import { mahabharataParvas, mahabharataCharacters, getMahabharataParvaById } from "@/data/mahabharataData";
import { useState } from "react";
import { useTextToSpeech } from "@/hooks/useTextToSpeech";
import { useLanguage } from "@/hooks/useLanguage";

// Scene images - using Unsplash and Pexels for reliable loading
const sceneImages: Record<string, string[]> = {
  "bala-kanda": [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", // Temple/Palace
    "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=800&q=80", // Sad king
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Sacred fire
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80", // Divine light
    "https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=800&q=80", // Royal princes
    "https://images.unsplash.com/photo-1545406130-b5c7cb67da19?w=800&q=80", // Sage
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", // Forest
    "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80", // Bow/Archery
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", // Wedding
  ],
  "ayodhya-kanda": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", // Palace celebration
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", // Dark plotting
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Terrible boons
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", // Forest exile
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Mountain journey
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", // Deep forest
  ],
  "aranya-kanda": [
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80", // Deep forest
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80", // Hermitage
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80", // Sacred grove
    "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80", // Dark forest
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80", // Golden deer
  ],
  "kishkindha-kanda": [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Mountains
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", // Peak
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80", // Sunrise mountain
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80", // Alliance
  ],
  "sundara-kanda": [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", // Ocean
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80", // Leap across sea
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", // Island
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80", // Garden
  ],
  "yuddha-kanda": [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80", // Battle preparation
    "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80", // Bridge
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", // War
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Victory fire
  ],
  "uttara-kanda": [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", // Return to Ayodhya
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", // Coronation
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", // Final journey
  ],
  "adi-parva": [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", // Origins
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80", // Forest training
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Fire ceremony
  ],
  "sabha-parva": [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80", // Grand hall
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", // Dice game
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80", // Exile begins
  ],
  "bhishma-parva": [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80", // War begins
    "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80", // Arrows
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // Gita discourse
  ],
};

// Extended story content with more details and images
const extendedContent: Record<string, { scenes: { title: string; content: string[]; theme: string; imageIndex?: number }[] }> = {
  "bala-kanda": {
    scenes: [
      {
        title: "The Kingdom of Ayodhya",
        theme: "🏰",
        imageIndex: 0,
        content: [
          "In the ancient land of Bharatavarsha, nestled along the banks of the sacred river Sarayu, stood the magnificent city of Ayodhya. Its towering walls, built of gleaming white marble, stretched for twelve yojanas in length. The city was renowned across all the three worlds for its prosperity, righteousness, and the wisdom of its rulers.",
          "The streets were paved with precious stones, and grand mansions lined every avenue. Learned Brahmins chanted Vedic hymns at every corner, while merchants traded silks and spices from distant lands. The sound of temple bells mingled with the laughter of children, creating a symphony of peace and happiness.",
          "At the heart of this paradise stood the royal palace of King Dasharatha, a descendant of the illustrious Solar dynasty (Suryavansha). The king was famed throughout the realm as 'Dasharatha' - he who could fight in ten directions simultaneously. No enemy had ever defeated him in battle, and his subjects loved him as a father loves his children."
        ]
      },
      {
        title: "The King's Sorrow",
        theme: "😢",
        imageIndex: 1,
        content: [
          "Despite his countless blessings, a deep sorrow gnawed at King Dasharatha's heart. Though he had three devoted queens - the gentle Kausalya, the spirited Kaikeyi who had saved his life in battle, and the beautiful Sumitra - none had blessed him with an heir.",
          "Night after night, the king would stand on his palace balcony, gazing at the stars and praying to his ancestors for a son. 'What use is this vast kingdom,' he would lament, 'if there is no one to inherit it? What purpose do my victories serve if the Solar dynasty ends with me?'",
          "His wise minister Sumantra, seeing the king's distress, approached him with news of hope. 'Your Majesty, there is a sage named Rishyashringa who possesses the power to invoke the gods themselves. It is said that wherever he goes, rain follows, and barren lands become fertile. Perhaps he can help fulfill your heart's desire.'"
        ]
      },
      {
        title: "The Sacred Yajna",
        theme: "🔥",
        imageIndex: 2,
        content: [
          "With renewed hope, Dasharatha invited the young sage Rishyashringa to Ayodhya. The preparations for the Ashwamedha Yajna (horse sacrifice) and the Putrakameshti Yajna (son-bestowing sacrifice) began in earnest. The entire kingdom was transformed into a vast ceremonial ground.",
          "For many days and nights, the sacred fires burned bright. Priests chanted mantras that had been passed down since the beginning of time. The fragrance of ghee, sandalwood, and sacred herbs filled the air, rising to the heavens like a prayer made visible.",
          "On the final day of the ceremony, as the flames leaped highest, a divine being emerged from the sacred fire. He was as bright as the sun, clad in robes of crimson and gold. In his hands, he carried a golden vessel filled with divine payasam (sacred pudding).",
          "'I am a messenger of Lord Vishnu,' the celestial being announced. 'The Supreme Lord has heard your prayers and seen your devotion. This divine offering, when consumed by your queens, will grant you sons of extraordinary virtue and power. Through them, a great purpose shall be fulfilled.'"
        ]
      },
      {
        title: "The Divine Birth",
        theme: "✨",
        imageIndex: 3,
        content: [
          "King Dasharatha distributed the sacred payasam among his three queens with trembling hands. To Kausalya, the eldest and most devoted, he gave half. To Kaikeyi, who had earned his eternal gratitude, he gave a quarter. And to the gentle Sumitra, he gave the remaining quarter, which she divided into two portions.",
          "The months that followed were filled with auspicious signs. Flowers bloomed out of season, rivers ran crystal clear, and celestial music was heard at dawn and dusk. The entire creation seemed to celebrate the coming of something divine.",
          "On the ninth day of the bright fortnight of the month of Chaitra, under the star Punarvasu, when five planets were in exaltation, Queen Kausalya gave birth to a son of extraordinary beauty. The baby's skin glowed with a bluish tint like the petals of a blue lotus, and his eyes sparkled like stars.",
          "The priests and sages who witnessed the birth felt a divine presence fill the room. 'This child,' whispered the great sage Vashishta, 'is no ordinary mortal. He is Dharma incarnate - righteousness itself born in human form. He shall be called Rama - he who brings joy to all.'"
        ]
      },
      {
        title: "The Four Princes",
        theme: "👑",
        imageIndex: 4,
        content: [
          "Shortly after Rama's birth, the other queens also delivered their precious sons. Kaikeyi gave birth to Bharata, a child of remarkable courage and loyalty. Sumitra was blessed with twins - Lakshmana and Shatrughna - born of her two portions of the sacred offering.",
          "From their earliest days, a mysterious bond connected the brothers. Lakshmana would not eat unless Rama had eaten first, would not sleep unless Rama slept beside him. It was as if they shared one soul in two bodies. Similarly, Shatrughna was inseparable from Bharata.",
          "The princes grew under the tutelage of the great sage Vashishta, learning the Vedas, the arts of war, the science of governance, and the subtle wisdom of dharma. Rama excelled in everything he undertook, yet remained humble and kind. His smile could calm the most troubled heart, and his words were always true and gentle.",
          "By the age of sixteen, Rama had mastered every weapon known to man, every scripture known to scholars, and had won the love of every citizen in Ayodhya. When he walked through the city streets, people would stop their work just to catch a glimpse of him, their eyes filling with tears of inexplicable joy."
        ]
      },
      {
        title: "The Arrival of Vishwamitra",
        theme: "🧙",
        imageIndex: 5,
        content: [
          "One fateful day, the sage Vishwamitra arrived at the gates of Ayodhya. He was one of the most powerful beings in creation - a king who had become a Brahmarshi through thousands of years of severe penance. Devas and Asuras alike trembled before his spiritual power.",
          "King Dasharatha received him with the highest honors, washing the sage's feet himself and offering him the finest hospitality. 'Great sage,' said the king, 'your presence sanctifies my kingdom. Ask for anything - gold, jewels, even half my realm - and it shall be yours.'",
          "Vishwamitra smiled mysteriously. 'O King, I have no need for worldly treasures. I am performing a sacred yajna in the forest, but two demons - Maricha and Subahu - repeatedly defile my offerings with blood and filth. I need a protector, and I have come to ask for your son Rama.'",
          "Dasharatha's heart nearly stopped. Send his beloved Rama, barely sixteen, to face demons that even the gods feared? He pleaded, he wept, he offered armies of warriors instead. But Vishwamitra was firm, and Sage Vashishta counseled the king to trust the sage's wisdom.",
          "With a breaking heart, Dasharatha allowed Rama and Lakshmana to accompany Vishwamitra into the dangerous Dandaka forest."
        ]
      },
      {
        title: "The Trials in the Forest",
        theme: "⚔️",
        imageIndex: 6,
        content: [
          "The journey into the forest was Rama's first test. As they entered the wilderness, the very air seemed to grow heavy with malevolence. This was the territory of Tataka, a powerful demoness who had laid waste to entire kingdoms.",
          "Vishwamitra turned to Rama. 'She approaches. This creature, once a beautiful yaksha woman, was cursed to become a monster. She has killed thousands. You must destroy her, Rama, for the protection of all living beings.'",
          "Rama hesitated - his noble heart recoiled at the thought of harming a woman, even a demoness. But Vishwamitra explained that when a being chooses evil, when they use their power to harm the innocent, their original nature becomes irrelevant. Dharma required their destruction.",
          "With a heavy heart but steady aim, Rama drew his bow. The arrow flew true, and Tataka was no more. The forest itself seemed to breathe a sigh of relief. Flowers bloomed where moments before only thorns had grown.",
          "Pleased with Rama's skill and righteousness, Vishwamitra bestowed upon him the knowledge of divine weapons - the Brahmastra, the Vayuastra, the Agneyastra, and many more. 'Use these wisely,' the sage counseled. 'Great power requires even greater responsibility.'"
        ]
      },
      {
        title: "The Swayamvara at Mithila",
        theme: "💕",
        imageIndex: 7,
        content: [
          "After successfully protecting Vishwamitra's yajna, the sage led the princes to the kingdom of Mithila, ruled by the philosopher-king Janaka. There, Rama's destiny awaited him in the form of a divine bow and a princess of unparalleled beauty.",
          "King Janaka possessed the Shiva Dhanus, Lord Shiva's own bow, which had been given to his ancestors by the god himself. The bow was so massive that three hundred men were needed just to move it. Janaka had declared that whoever could string this celestial weapon would win the hand of his daughter Sita.",
          "Sita was no ordinary princess. She had been found by Janaka while he was ploughing a field for a sacred ritual, emerging from the earth itself like a divine blessing. Hence her name - Sita, meaning 'furrow.' She was believed to be an incarnation of Goddess Lakshmi herself.",
          "Countless princes from across the world had tried and failed to even lift the bow. Some had injured themselves; others had left in shame. Janaka had begun to despair that his daughter would remain unmarried forever.",
          "When Rama entered the arena where the bow lay, a hush fell over the crowd. With the grace of a dancer and the strength of a god, he lifted the massive bow as easily as a child lifts a toy. As he bent it to string it, the divine weapon shattered with a sound that echoed across the three worlds.",
          "Sita, watching from behind a curtain, felt her heart recognize what her eyes had sought all her life. Without hesitation, she stepped forward and placed the wedding garland around Rama's neck. In that moment, two halves of one divine soul were united."
        ]
      },
      {
        title: "The Grand Wedding",
        theme: "💒",
        imageIndex: 8,
        content: [
          "The news of Rama's triumph reached Ayodhya, and King Dasharatha arrived with a grand procession for the wedding. It was decided that all four brothers would marry on the same auspicious day - Rama to Sita, Lakshmana to Sita's sister Urmila, Bharata to Mandavi, and Shatrughna to Shrutakirti.",
          "The wedding celebrations lasted for many days. The streets of Mithila were decorated with flowers and lights. Musicians played, dancers performed, and the air was filled with the fragrance of jasmine and rose. Even the gods descended from heaven to witness the union of Rama and Sita.",
          "As the sacred fire witnessed their seven steps together, as Rama tied the mangalsutra around Sita's neck, all of creation celebrated. This was not merely a royal wedding - it was the coming together of Dharma and Devotion, of the Protector and the Protected, of Vishnu and Lakshmi in mortal form.",
          "And so ended the Bala Kanda, the Book of Youth. Rama returned to Ayodhya with his bride, his brothers, and the love of an entire kingdom. But destiny had much more in store for the prince of Ayodhya. The seeds of future trials were already being sown, even as the wedding flowers still lay fresh upon the ground."
        ]
      }
    ]
  },
  "ayodhya-kanda": {
    scenes: [
      {
        title: "The Announcement of Coronation",
        theme: "📯",
        imageIndex: 0,
        content: [
          "Years of perfect happiness passed in Ayodhya. Rama and Sita's love grew deeper with each passing day, becoming a legend that poets sang about in distant lands. King Dasharatha, now advanced in years, felt the time had come to crown Rama as Yuvaraja - the heir apparent.",
          "The announcement sent waves of joy through the kingdom. Citizens prepared for the grandest coronation in history. Flowers were gathered, streets were decorated, and prayers of thanksgiving rose from every home.",
          "But fate, as it often does, had other plans..."
        ]
      },
      {
        title: "Manthara's Poison",
        theme: "🐍",
        imageIndex: 1,
        content: [
          "In Queen Kaikeyi's chambers, her aged maid Manthara watched the celebrations with bitter eyes. This hunchbacked woman had nursed a lifetime of resentments, and now she saw an opportunity to release her venom.",
          "'My lady,' she whispered to Kaikeyi, 'do you not see what is happening? When Rama becomes king, what will become of your son Bharata? He will be a servant in his own home. And you - you who saved the king's life in battle - you will bow before Kausalya like a common maid.'",
          "At first, Kaikeyi dismissed these words. She loved Rama as her own son. But Manthara persisted, day and night, dripping poison into her ears until doubt took root in Kaikeyi's heart."
        ]
      },
      {
        title: "The Terrible Boons",
        theme: "😱",
        imageIndex: 2,
        content: [
          "Kaikeyi remembered that long ago, after she had saved Dasharatha's life in battle, he had promised her any two boons of her choosing. She had kept them in reserve, never imagining she would use them for such a purpose.",
          "Now, corrupted by Manthara's words, she entered the sulking chamber and refused to see the king until he granted her demands. When Dasharatha finally came to her, eager to share his joy about Rama's coronation, he found her lying on the floor, her ornaments discarded, her hair disheveled.",
          "'What troubles you, my love?' he asked in alarm. 'Ask for anything - the sun, the moon, my very life - and I shall give it to you.'",
          "And so she asked: 'Let Bharata be crowned king instead of Rama. And let Rama be exiled to the forest for fourteen years.'"
        ]
      },
      {
        title: "Rama's Noble Departure",
        theme: "🚶",
        imageIndex: 3,
        content: [
          "When Rama heard of his stepmother's demands, he showed no anger, no disappointment. With a calm that astonished all who witnessed it, he said, 'If this is what will bring peace to my father's heart and honor to his word, then I go gladly.'",
          "Sita, upon hearing the news, insisted on accompanying her husband. 'Where you go, I go,' she declared. 'The forest that has you will be my palace; the palace without you would be a wilderness.'",
          "Lakshmana, his eyes burning with righteous fury, also chose to accompany his brother. 'Let them crown Bharata,' he said, 'but they cannot separate us. I will walk beside you through every trial, every danger.'",
          "King Dasharatha, bound by his word yet broken by grief, watched helplessly as his beloved son departed for the wilderness. As Rama's chariot disappeared beyond the city gates, the old king collapsed. Within days, unable to bear the separation, he breathed his last, calling out Rama's name."
        ]
      },
      {
        title: "The Crossing of Ganga",
        theme: "🌊",
        imageIndex: 4,
        content: [
          "Rama, Sita, and Lakshmana journeyed toward the forest, crossing the mighty Ganga with the help of the boatman Guha, who wept to see his prince in the garb of a hermit.",
          "On the banks of the sacred river, Rama performed the rituals for his departed father, whose death he learned of from the visiting Bharata. The waters of the Ganga seemed to shimmer with divine sorrow.",
          "At Chitrakoot, the exiled trio established their first hermitage. Here, Bharata came with the entire court, begging Rama to return. But Rama, ever faithful to his father's word, refused. Bharata, equally noble, vowed to rule only as Rama's regent, placing Rama's sandals on the throne as a symbol."
        ]
      },
      {
        title: "Into the Depths of Dandaka",
        theme: "🌲",
        imageIndex: 5,
        content: [
          "The years of exile began their slow passage. Rama, Sita, and Lakshmana moved deeper into the Dandaka forest, living among sages and protecting them from the demons that roamed these lands.",
          "Each hermitage they visited brought new adventures - battles with rakshasas, encounters with divine beings, and lessons in the ancient wisdom of the forest sages. Sita learned the ways of the forest, while Rama and Lakshmana honed their skills protecting the innocent.",
          "But the most dangerous trials lay ahead. Unknown to them, their presence in the forest had not gone unnoticed. In distant Lanka, a terrible power was awakening - one that would change the course of their exile and shake the very foundations of the world."
        ]
      }
    ]
  },
  "aranya-kanda": {
    scenes: [
      {
        title: "The Hermitage at Panchavati",
        theme: "🏡",
        imageIndex: 0,
        content: [
          "Deep in the Dandaka forest, Rama, Sita, and Lakshmana established their hermitage at Panchavati, a beautiful grove by the river Godavari. Here, surrounded by five sacred banyan trees, they built a humble dwelling.",
          "The peaceful days passed in divine contentment. Sita tended to the hermitage while Rama and Lakshmana protected the local sages from demonic threats. The forest seemed to welcome them as its own children."
        ]
      },
      {
        title: "Surpanakha's Desire",
        theme: "💔",
        imageIndex: 1,
        content: [
          "One day, a beautiful woman appeared at the hermitage - it was Surpanakha, sister of the demon king Ravana, who had disguised her monstrous form. She was instantly captivated by Rama's divine beauty.",
          "'Become my husband,' she demanded. 'I can give you pleasures beyond imagination.' But Rama gently refused, pointing to Sita as his devoted wife.",
          "Rejected and humiliated, Surpanakha's love turned to hatred. She attempted to attack Sita, but Lakshmana intervened, cutting off her nose and ears. Shrieking in pain and rage, she fled to her brothers."
        ]
      },
      {
        title: "The Demon Army Falls",
        theme: "⚔️",
        imageIndex: 2,
        content: [
          "Surpanakha's brothers - Khara and Dushana - attacked with an army of fourteen thousand demons. But Rama, armed with divine weapons, single-handedly destroyed them all.",
          "The news of this defeat reached Lanka, where Ravana, the ten-headed king of demons, heard of Rama's power and Sita's legendary beauty. A terrible plan began to form in his mind."
        ]
      },
      {
        title: "The Golden Deer",
        theme: "🦌",
        imageIndex: 3,
        content: [
          "Ravana's ally, the demon Maricha, took the form of a beautiful golden deer and appeared near the hermitage. Sita, enchanted by its beauty, begged Rama to capture it for her.",
          "Rama pursued the deer deep into the forest. As he struck it with his arrow, the dying Maricha cried out in Rama's voice: 'O Sita! O Lakshmana!' - a trick to lure Lakshmana away.",
          "Despite his misgivings, Lakshmana was forced to go search for Rama, leaving Sita alone. Before departing, he drew a protective circle around the hermitage, warning Sita not to step outside its boundary under any circumstances."
        ]
      },
      {
        title: "The Abduction of Sita",
        theme: "😭",
        imageIndex: 4,
        content: [
          "Ravana appeared, disguised as a wandering mendicant. When Sita crossed the protective line to offer him alms, he revealed his terrible true form and carried her away through the sky in his aerial chariot.",
          "The old vulture Jatayu, friend of Dasharatha, tried valiantly to rescue Sita. Though he fought with all his strength, Ravana cut off his wings. As Jatayu lay dying, he watched helplessly as Sita disappeared toward the southern horizon.",
          "When Rama and Lakshmana returned to find the hermitage empty, their anguish shook the very heavens. They found the dying Jatayu, who with his last breath told them the direction in which Ravana had fled. Rama performed his last rites with tears streaming down his face, calling him 'father.'"
        ]
      }
    ]
  },
  "kishkindha-kanda": {
    scenes: [
      {
        title: "Meeting Hanuman",
        theme: "🐒",
        imageIndex: 0,
        content: [
          "Searching desperately for Sita, Rama and Lakshmana came to the shores of Lake Pampa, where they encountered Hanuman, the mighty son of the Wind God, disguised as a brahmin.",
          "Hanuman had been sent by Sugriva, the exiled monkey king, to investigate these powerful warriors. The moment Hanuman saw Rama, his heart overflowed with devotion - a love that would become legendary.",
          "Hanuman revealed himself and carried the brothers on his shoulders to meet Sugriva, who was hiding on the mountain Rishyamukha, fearing his brother Vali who had usurped his throne."
        ]
      },
      {
        title: "The Alliance with Sugriva",
        theme: "🤝",
        imageIndex: 1,
        content: [
          "Rama and Sugriva formed an alliance of mutual aid. Rama would help Sugriva defeat Vali, and in return, Sugriva would mobilize his vast monkey army to search for Sita.",
          "Sugriva showed Rama the ornaments that Sita had dropped during her abduction, hoping they might reach her husband. Seeing them, Rama was overcome with grief and renewed determination."
        ]
      },
      {
        title: "The Fall of Vali",
        theme: "🏹",
        imageIndex: 2,
        content: [
          "In the battle between the two monkey brothers, Rama shot Vali from behind a tree while he fought Sugriva. When the dying Vali questioned this seemingly dishonorable act, Rama explained that as a king's representative, he was bound to punish those who had wronged others - Vali had stolen Sugriva's wife and kingdom.",
          "Vali's death restored Sugriva to his throne. His son Angada joined the monkey army, and preparations began for the great search for Sita."
        ]
      },
      {
        title: "The Great Search",
        theme: "🔍",
        imageIndex: 3,
        content: [
          "Armies of monkeys and bears spread across the four directions. The southern party, led by Angada and including Hanuman, received Rama's signet ring to give to Sita as proof of their mission.",
          "After many adventures and near failures, they reached the southern ocean. Before them lay the vast sea, and beyond it, the island of Lanka where Sita was held captive. Who among them could cross this impossible distance?"
        ]
      }
    ]
  },
  "sundara-kanda": {
    scenes: [
      {
        title: "Hanuman's Leap",
        theme: "🌊",
        imageIndex: 0,
        content: [
          "As the monkey army stood at the ocean's edge, Jambavan, the wise king of bears, reminded Hanuman of his forgotten powers. Born of the Wind God, Hanuman could grow to any size and fly across the sky.",
          "With a mighty roar, Hanuman expanded his body to mountainous proportions. He leaped from Mount Mahendra, soaring across the ocean toward Lanka. Sea monsters and demonesses tried to stop him, but nothing could halt his divine mission."
        ]
      },
      {
        title: "Lanka's Golden Glory",
        theme: "🏙️",
        imageIndex: 1,
        content: [
          "Hanuman reached Lanka and was astounded by its magnificence. The golden city glittered like a second sun. Its walls reached the clouds, its gardens bloomed with heavenly flowers, and its palaces housed untold riches.",
          "Shrinking to the size of a cat, Hanuman infiltrated the demon city, searching every corner for Sita. He witnessed Ravana's might, his vast armies, and his beautiful queens - but Sita was nowhere among them."
        ]
      },
      {
        title: "Finding Sita",
        theme: "💫",
        imageIndex: 2,
        content: [
          "At last, in the Ashoka grove, Hanuman found Sita - thin from fasting, dressed in the same garments she wore when abducted, surrounded by demon guards, yet radiating an inner light that poverty and captivity could not dim.",
          "He watched as Ravana himself came to tempt her with riches and power, threatening death if she continued to refuse him. But Sita stood firm: 'You may kill me, but I will never be yours. Rama will come, and you will face his wrath.'",
          "After Ravana left in frustration, Hanuman revealed himself to Sita, showing her Rama's ring. Her joy at hearing that Rama lived and was coming to rescue her brought tears to both their eyes."
        ]
      },
      {
        title: "Burning of Lanka",
        theme: "🔥",
        imageIndex: 3,
        content: [
          "After delivering Rama's message and Sita's reply - her hair ornament as proof of their meeting - Hanuman allowed himself to be captured deliberately. He wanted to assess Ravana's strength.",
          "When Ravana ordered Hanuman's tail set on fire as punishment, Hanuman used his powers to escape and leaped from building to building, setting all of Lanka ablaze. The golden city burned as the demon populace watched in terror.",
          "His mission accomplished, Hanuman returned across the ocean. The joyous news he brought - Sita was alive, Sita was faithful, and Lanka could be conquered - filled Rama's heart with hope for the first time since her abduction."
        ]
      }
    ]
  },
  "yuddha-kanda": {
    scenes: [
      {
        title: "The Bridge to Lanka",
        theme: "🌉",
        imageIndex: 0,
        content: [
          "The monkey army, led by Rama, Lakshmana, Sugriva, and Hanuman, marched to the ocean's edge. But how could such a vast army cross the sea?",
          "Rama prayed to the ocean god for passage. When the sea god granted permission, Nala, son of the divine architect, directed the construction of a miraculous bridge. Monkeys threw boulders that floated on the water, inscribed with Rama's name.",
          "In five days, the bridge to Lanka was complete - a path of faith stretching across the impossible distance. The army crossed, and the war for righteousness began."
        ]
      },
      {
        title: "The Great Battle",
        theme: "⚔️",
        imageIndex: 1,
        content: [
          "The war was fierce beyond description. Ravana's demon generals - Indrajit, Kumbhakarna, Atikaya - fell one by one to the arrows of Rama and Lakshmana, but not before causing terrible destruction.",
          "When Lakshmana was struck by Indrajit's serpent arrows and lay dying, Hanuman flew to the Himalayas and brought back an entire mountain containing the life-saving Sanjeevani herb. Such was the devotion of that great monkey warrior.",
          "The battlefield was covered with the bodies of demons and monkeys alike. Rivers of blood flowed. But Rama's army, fighting for dharma, never lost hope."
        ]
      },
      {
        title: "The Fall of Ravana",
        theme: "👑",
        imageIndex: 2,
        content: [
          "Finally, Rama faced Ravana himself. The ten-headed demon king, wielding powers gained from Brahma himself, was a formidable opponent. Their battle shook all three worlds.",
          "Each time Rama cut off one of Ravana's heads, it grew back. The sage Agastya appeared and taught Rama the Aditya Hridayam, a hymn to the Sun God. Empowered by this divine mantra, Rama fired the Brahmastra at Ravana's heart - the source of his power.",
          "The great demon king fell, and all of creation rejoiced. Even the gods showered flowers from heaven. Dharma had triumphed over adharma, light over darkness, love over greed."
        ]
      },
      {
        title: "Reunion and Return",
        theme: "❤️",
        imageIndex: 3,
        content: [
          "Sita was freed at last. The couple's reunion, after months of separation and the horror of war, was bittersweet. To prove her purity during captivity, Sita walked through fire, emerging unharmed as Agni himself testified to her chastity.",
          "Mounting the Pushpaka Vimana - Ravana's aerial chariot now claimed by Vibhishana, the righteous brother who had joined Rama - the victorious party flew north to Ayodhya.",
          "The fourteen years of exile were complete. As the Vimana approached Ayodhya, the entire city lit lamps to welcome their beloved prince home. This day of homecoming is celebrated to this day as Diwali - the festival of lights."
        ]
      }
    ]
  },
  "uttara-kanda": {
    scenes: [
      {
        title: "The Golden Reign",
        theme: "👑",
        imageIndex: 0,
        content: [
          "Rama was crowned king of Ayodhya, and his reign came to be known as Rama Rajya - the ideal kingdom. Justice prevailed, rains came on time, crops flourished, and no one suffered from disease or poverty.",
          "The four brothers ruled together in perfect harmony. Sita's presence brought grace and prosperity to all. Poets sang of the perfect king, the perfect queen, and the perfect kingdom."
        ]
      },
      {
        title: "The Final Trial",
        theme: "💔",
        imageIndex: 1,
        content: [
          "Yet even paradise must face its tests. Whispers spread among the people about Sita's time in Lanka. Though Rama knew her purity, as king he felt bound to address his people's doubts.",
          "In the most tragic decision of his life, Rama sent the pregnant Sita to the forest. She found refuge in Sage Valmiki's hermitage, where she gave birth to twins - Lava and Kusha - and raised them in the wisdom of the Vedas.",
          "Years later, the twins came to Ayodhya and sang the story of Rama before the king himself - the very Ramayana we tell today. When Rama recognized his sons and called for Sita, she chose instead to return to her mother, the Earth, from whom she had been born."
        ]
      },
      {
        title: "Ascension to Heaven",
        theme: "✨",
        imageIndex: 2,
        content: [
          "Having ruled for many thousands of years, Rama knew his earthly mission was complete. He walked into the river Sarayu, and his brothers followed, each returning to their divine origins.",
          "Brahma, Vishnu, Shiva, and all the gods appeared to welcome them home. Rama resumed his form as Lord Vishnu, the preserver of the universe, his avatar's purpose fulfilled.",
          "But the story of Rama - his righteousness, his love, his sacrifice - continues to guide humanity. Whenever dharma declines, the Lord promises to return. And in every heart that remembers Rama, he lives on, eternal and unchanged."
        ]
      }
    ]
  }
};

// Decorative patterns for visual interest
const SceneDecorator = ({ theme }: { theme: string }) => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
    <span className="text-2xl">{theme}</span>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
  </div>
);

const StoryDetail = () => {
  const { storyId, sectionId } = useParams();
  const [activeTab, setActiveTab] = useState<'story' | 'characters'>('story');
  const [expandedScene, setExpandedScene] = useState<number | null>(null);
  const { speak, stop, isSpeaking, pause, resume, isPaused, isSupported } = useTextToSpeech();
  const { t } = useLanguage();

  const isRamayana = storyId === 'ramayana';
  const sections = isRamayana ? ramayanaKandas : mahabharataParvas;
  const characters = isRamayana ? ramayanaCharacters : mahabharataCharacters;
  const sectionLabel = isRamayana ? 'Kanda' : 'Parva';

  const currentSection = sectionId 
    ? (isRamayana ? getRamayanaKandaById(sectionId) : getMahabharataParvaById(sectionId))
    : null;

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text);
    }
  };
  
  const extended = sectionId ? extendedContent[sectionId] : null;

  // Section detail view
  if (currentSection) {
    const fullText = currentSection.fullContent.join(' ');
    
    return (
      <AppLayout title={currentSection.name} showStreak={false}>
        <div className="min-h-screen">
          {/* Hero Header with gradient */}
          <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 via-gold/10 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,183,77,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,111,0,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            <Link 
              to={`/stories/${storyId}`}
              className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors z-10"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 text-6xl opacity-20">🕉️</div>
            <div className="absolute bottom-20 left-8 text-4xl opacity-10">✨</div>
          </div>

          <div className="px-4 -mt-20 relative z-10 pb-8 space-y-6">
            {/* Title Card */}
            <div className="p-5 rounded-2xl bg-card/95 backdrop-blur-sm border border-border shadow-xl animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">📖</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-primary font-medium">{sectionLabel} {currentSection.number}</p>
                  <h1 className="text-2xl font-bold text-foreground">{currentSection.name}</h1>
                  <p className="text-lg font-sanskrit text-gold">{currentSection.nameSanskrit}</p>
                  <p className="text-sm text-muted-foreground mt-1">{currentSection.meaning}</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs">{currentSection.chapters} Chapters</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs">{extended?.scenes.length || 0} Detailed Scenes</span>
                </div>
              </div>
            </div>

            {/* TTS Controls */}
            {isSupported && (
              <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.05s' }}>
                <Button
                  variant="saffron-outline"
                  size="sm"
                  onClick={() => handleSpeak(fullText)}
                  className="gap-2"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  {isSpeaking ? 'Stop' : 'Listen to Story'}
                </Button>
                {isSpeaking && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isPaused ? resume() : pause()}
                  >
                    {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </Button>
                )}
              </div>
            )}

            {/* Summary Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 animate-fade-in" style={{ animationDelay: '0.08s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-lg">📜</span> Summary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{currentSection.summary}</p>
            </div>

            {/* Extended Detailed Scenes */}
            {extended && extended.scenes.length > 0 && (
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  The Complete Story
                </h3>
                
                {extended.scenes.map((scene, idx) => (
                  <div 
                    key={idx}
                    className="rounded-xl bg-card border border-border overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
                  >
                    <button
                      onClick={() => setExpandedScene(expandedScene === idx ? null : idx)}
                      className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{scene.theme}</span>
                        <div className="text-left">
                          <span className="text-xs text-primary font-medium">Scene {idx + 1}</span>
                          <h4 className="text-sm font-semibold text-foreground">{scene.title}</h4>
                        </div>
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        expandedScene === idx && "rotate-90"
                      )} />
                    </button>
                    
                    {expandedScene === idx && (
                      <div className="px-4 pb-4 space-y-4 border-t border-border/50 pt-4">
                        {/* Scene Image */}
                        {sectionId && sceneImages[sectionId] && scene.imageIndex !== undefined && sceneImages[sectionId][scene.imageIndex] && (
                          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                            <img 
                              src={sceneImages[sectionId][scene.imageIndex]} 
                              alt={scene.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-medium">{scene.title}</p>
                          </div>
                        )}
                        <SceneDecorator theme={scene.theme} />
                        {scene.content.map((para, pIdx) => (
                          <p 
                            key={pIdx} 
                            className="text-sm text-muted-foreground leading-relaxed first-letter:text-xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-1.5"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Original Content (fallback if no extended content) */}
            {(!extended || extended.scenes.length === 0) && (
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold text-foreground">The Story</h3>
                {currentSection.fullContent.map((paragraph, idx) => (
                  <p 
                    key={idx} 
                    className="text-sm text-muted-foreground leading-relaxed first-letter:text-xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-1.5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Key Events */}
            <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sword className="w-4 h-4 text-primary" /> Key Events
              </h3>
              <div className="space-y-2">
                {currentSection.keyEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <span className="text-xs text-white font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moral Takeaways */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold/20 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold" /> Moral Takeaways
              </h3>
              <div className="space-y-3">
                {currentSection.moralTakeaways.map((moral, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-gold text-lg">✦</span>
                    <p className="text-sm text-muted-foreground italic">{moral}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Gita Verses */}
            {currentSection.relatedGitaVerses.length > 0 && (
              <div className="p-4 rounded-xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-sm font-semibold text-foreground mb-3">📖 Related Bhagavad Gita Verses</h3>
                <div className="space-y-3">
                  {currentSection.relatedGitaVerses.map((ref, idx) => (
                    <Link 
                      key={idx}
                      to={`/gita/chapter/${ref.chapter}/verse/${ref.verse}`}
                      className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <p className="text-sm font-medium text-primary">Chapter {ref.chapter}, Verse {ref.verse}</p>
                      <p className="text-xs text-muted-foreground mt-1">{ref.connection}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Attribution */}
            <p className="text-xs text-muted-foreground/60 text-center pt-4">
              Content sourced from Valmiki Ramayana • Public Domain
            </p>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Main story overview
  return (
    <AppLayout title={isRamayana ? t.theRamayana : t.theMahabharata} showStreak={false}>
      <div className="min-h-screen">
        {/* Header */}
        <div className="relative px-4 py-6 border-b border-border bg-gradient-to-br from-primary/10 via-gold/5 to-transparent">
          <Link to="/stories" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-3 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Stories
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg">
              <span className="text-3xl">{isRamayana ? '🏹' : '⚔️'}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {isRamayana ? "Ramayana" : "Mahabharata"}
              </h1>
              <p className="text-lg font-sanskrit text-gold">
                {isRamayana ? "रामायणम्" : "महाभारतम्"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {isRamayana ? "24,000 verses • 7 Kandas" : "100,000 verses • 18 Parvas"}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border sticky top-0 bg-background z-10">
          <button
            onClick={() => setActiveTab('story')}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === 'story' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            {isRamayana ? '7 Kandas' : '18 Parvas'}
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors",
              activeTab === 'characters' 
                ? "text-primary border-b-2 border-primary" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Characters
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4 space-y-3">
          {activeTab === 'story' ? (
            sections.map((section, idx) => (
              <Link
                key={section.id}
                to={`/stories/${storyId}/${section.id}`}
                className="block animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all active:scale-[0.99]">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{section.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-primary font-medium">{sectionLabel} {section.number}</p>
                        {extendedContent[section.id] && (
                          <span className="px-1.5 py-0.5 rounded-full bg-gold/20 text-[10px] text-gold font-medium">
                            Detailed
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                      <p className="text-sm font-sanskrit text-gold">{section.nameSanskrit}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{section.summary}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 self-center" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {characters.map((char, idx) => (
                <div
                  key={char.id}
                  className="p-3 rounded-xl bg-card border border-border animate-fade-in hover:border-primary/30 hover:shadow-md transition-all"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-full h-20 rounded-lg bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center mb-2">
                    <span className="text-3xl">{char.role.includes('Lord') || char.role.includes('God') ? '🙏' : '👤'}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{char.name}</h3>
                  <p className="text-xs font-sanskrit text-gold">{char.nameSanskrit}</p>
                  <p className="text-xs text-primary mt-1">{char.role}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{char.description.slice(0, 80)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-20" />
      </div>
    </AppLayout>
  );
};

export default StoryDetail;
