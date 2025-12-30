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

export const sampleVerses: Verse[] = [
  {
    chapter: 1,
    verse: 1,
    sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
    transliteration: "dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",
    translations: {
      english: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
      hindi: "धृतराष्ट्र बोले — हे संजय! धर्मभूमि कुरुक्षेत्र में एकत्र हुए, युद्ध की इच्छा वाले, मेरे और पाण्डु के पुत्रों ने क्या किया?",
      telugu: "ధృతరాష్ట్రుడు పలికెను - ఓ సంజయా! ధర్మక్షేత్రమైన కురుక్షేత్రమున యుద్ధము చేయవలెనని సమావేశమైన నా కుమారులును పాండవులును ఏమి చేసిరి?",
      tamil: "திருதராஷ்டிரன் கூறினான்: சஞ்சயனே! தர்மபூமியான குருக்ஷேத்திரத்தில் போர் செய்ய ஒன்று கூடிய என் மக்களும் பாண்டவர்களும் என்ன செய்தார்கள்?",
      kannada: "ಧೃತರಾಷ್ಟ್ರನು ಹೇಳಿದನು - ಸಂಜಯ! ಧರ್ಮಕ್ಷೇತ್ರವಾದ ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಯುದ್ಧ ಮಾಡಲು ಸೇರಿದ ನನ್ನ ಮಕ್ಕಳು ಮತ್ತು ಪಾಂಡವರು ಏನು ಮಾಡಿದರು?"
    },
    explanation: "This opening verse sets the scene for the entire Bhagavad Gita. King Dhritarashtra, being blind, asks his minister Sanjaya about the events at Kurukshetra. The term 'dharma-kshetra' (field of dharma) is significant as it foreshadows the spiritual teachings that will unfold on this battlefield."
  },
  {
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translations: {
      english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
      hindi: "कर्म करने में ही तेरा अधिकार है, फल में कभी नहीं। कर्मफल का हेतु मत बन और अकर्म में भी तेरी आसक्ति न हो।",
      telugu: "నీకు కర్మ చేయుటయందే అధికారము కలదు. కర్మఫలమునందు ఎప్పుడును లేదు. కర్మఫలమునకు హేతువు కావలదు. అకర్మయందు ఆసక్తి కూడదు.",
      tamil: "செயலில் மட்டுமே உனக்கு உரிமை உண்டு, பலனில் ஒருபோதும் இல்லை. செயலின் பலனுக்குக் காரணமாக இருக்காதே, செயலின்மையிலும் பற்று கொள்ளாதே.",
      kannada: "ಕರ್ಮದಲ್ಲಿ ಮಾತ್ರ ನಿನಗೆ ಅಧಿಕಾರವಿದೆ, ಫಲದಲ್ಲಿ ಎಂದಿಗೂ ಇಲ್ಲ. ಕರ್ಮಫಲಕ್ಕೆ ಕಾರಣನಾಗಬೇಡ, ಅಕರ್ಮದಲ್ಲಿ ನಿನಗೆ ಆಸಕ್ತಿ ಇರಬಾರದು."
    },
    explanation: "This is one of the most important verses in the Gita, establishing the principle of Nishkama Karma (selfless action). Krishna teaches that we should focus on our duties with full dedication, but without attachment to outcomes. This doesn't mean we shouldn't work toward goals, but that our sense of fulfillment should come from the quality of our effort, not just results."
  },
  {
    chapter: 2,
    verse: 48,
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate",
    translations: {
      english: "Perform your duties established in yoga, O Arjuna, abandoning attachment, and be balanced in success and failure. This evenness of mind is called yoga.",
      hindi: "हे धनञ्जय! योग में स्थित होकर कर्म कर, आसक्ति को त्यागकर, सिद्धि-असिद्धि में समान भाव रखते हुए। यह समता ही योग कहलाता है।",
      telugu: "ఓ ధనంజయా! ఆసక్తిని విడిచి, సిద్ధి అసిద్ధులయందు సమత్వమును పొంది, యోగమునందు స్థితుడవై కర్మలను చేయుము. సమత్వమే యోగమని చెప్పబడును.",
      tamil: "பற்றை விட்டு, வெற்றி தோல்வியில் சமமாக இருந்து, யோகத்தில் நிலைத்து கர்மங்களைச் செய். இந்த சமநிலையே யோகம் எனப்படும்.",
      kannada: "ಓ ಧನಂಜಯ! ಆಸಕ್ತಿಯನ್ನು ತ್ಯಜಿಸಿ, ಯೋಗದಲ್ಲಿ ಸ್ಥಿತನಾಗಿ ಕರ್ಮಗಳನ್ನು ಮಾಡು. ಸಿದ್ಧಿ-ಅಸಿದ್ಧಿಗಳಲ್ಲಿ ಸಮನಾಗು. ಈ ಸಮತ್ವವೇ ಯೋಗ ಎನ್ನಲಾಗುತ್ತದೆ."
    },
    explanation: "Krishna defines yoga as equanimity - maintaining balance of mind regardless of success or failure. True yoga is not just physical postures, but a mental state of steadiness and detachment while performing one's duties."
  },
  {
    chapter: 3,
    verse: 19,
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara asakto hy ācaran karma param āpnoti pūruṣaḥ",
    translations: {
      english: "Therefore, without attachment, always perform the work that has to be done; for by performing action without attachment, one attains the Supreme.",
      hindi: "इसलिए तू निरंतर आसक्ति रहित होकर कर्तव्य कर्म का अच्छी तरह आचरण कर; क्योंकि आसक्ति रहित होकर कर्म करता हुआ मनुष्य परम पुरुष को प्राप्त होता है।",
      telugu: "అందువల్ల ఆసక్తి లేకుండా ఎల్లప్పుడు చేయవలసిన కర్మను చేయుము. ఆసక్తి లేకుండా కర్మ చేయు పురుషుడు పరమాత్మను పొందును.",
      tamil: "ஆகவே, பற்றின்றி எப்போதும் செய்ய வேண்டிய கர்மத்தைச் செய். பற்றின்றி கர்மம் செய்வதால் மனிதன் பரமபதத்தை அடைகிறான்.",
      kannada: "ಆದ್ದರಿಂದ ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಯಾವಾಗಲೂ ಮಾಡಬೇಕಾದ ಕರ್ಮವನ್ನು ಮಾಡು. ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಕರ್ಮವನ್ನು ಮಾಡುವ ಮನುಷ್ಯ ಪರಮಾತ್ಮನನ್ನು ಪಡೆಯುತ್ತಾನೆ."
    },
    explanation: "This verse reinforces the central teaching of Karma Yoga. Detachment doesn't mean indifference or lack of effort, but freedom from obsessive concern about results. Working with this attitude purifies the mind and leads to spiritual growth."
  },
  {
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    translations: {
      english: "Whenever there is a decline of dharma, O Arjuna, and a rise of adharma, at that time I manifest Myself.",
      hindi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।",
      telugu: "ఓ భారతా! ఎప్పుడెప్పుడు ధర్మము క్షీణించి అధర్మము అభివృద్ధి చెందునో అప్పుడప్పుడు నేను నన్ను సృష్టించుకొందును.",
      tamil: "பாரதா! எப்போதெல்லாம் தர்மம் தளர்ச்சியடைகிறதோ, அதர்மம் எழுச்சி பெறுகிறதோ, அப்போதெல்லாம் நான் என்னைத் தோற்றுவிக்கிறேன்.",
      kannada: "ಭಾರತ! ಯಾವಾಗ ಧರ್ಮದ ಹಾನಿಯೂ ಅಧರ್ಮದ ಅಭ್ಯುದಯವೂ ಆಗುತ್ತದೆಯೋ ಆಗ ನಾನು ನನ್ನನ್ನು ಸೃಷ್ಟಿಸಿಕೊಳ್ಳುತ್ತೇನೆ."
    },
    explanation: "This famous verse speaks of divine intervention. When righteousness declines and unrighteousness rises, the Divine manifests to restore balance. This is the philosophical basis for the concept of avatars in Hindu tradition."
  }
];

export const getVerseById = (chapter: number, verse: number): Verse | undefined => {
  return sampleVerses.find(v => v.chapter === chapter && v.verse === verse);
};
