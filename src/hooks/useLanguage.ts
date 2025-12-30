import { useState, useEffect, createContext, useContext } from "react";

export type LanguageCode = "en" | "hi" | "te" | "ta" | "kn" | "sa";

interface Translations {
  // Navigation
  home: string;
  gita: string;
  stories: string;
  search: string;
  profile: string;
  settings: string;
  
  // Greetings
  goodMorning: string;
  goodAfternoon: string;
  goodEvening: string;
  beginLearning: string;
  
  // Home
  dailyVerse: string;
  readMore: string;
  playAudio: string;
  
  // Gita
  chapters: string;
  verses: string;
  chapter: string;
  verse: string;
  
  // Stories
  sacredStories: string;
  ancientWisdom: string;
  beginReading: string;
  theRamayana: string;
  theMahabharata: string;
  
  // Settings
  appearance: string;
  language: string;
  notifications: string;
  textToSpeech: string;
  helpSupport: string;
  aboutVidya: string;
  privacyPolicy: string;
  resetProgress: string;
  preferences: string;
  support: string;
  savedVerses: string;
  gitaProgress: string;
  todaysProgress: string;
  dayStreak: string;
  bestStreak: string;
  versesRead: string;
  
  // Reading Settings
  readingExperience: string;
  fontSize: string;
  fontColor: string;
  showSanskrit: string;
  showTransliteration: string;
  dailyShloka: string;
  offlineLibrary: string;
  downloadFavorites: string;
  storageUsed: string;
  clearCache: string;
  dark: string;
  light: string;
  on: string;
  off: string;
  
  // Common
  continue: string;
  cancel: string;
  save: string;
  close: string;
  chooseLanguage: string;
  selectLanguage: string;
}

const translations: Record<LanguageCode, Translations> = {
  en: {
    home: "Home",
    gita: "Gita",
    stories: "Stories",
    search: "Search",
    profile: "Profile",
    settings: "Settings",
    goodMorning: "Good morning",
    goodAfternoon: "Good afternoon",
    goodEvening: "Good evening",
    beginLearning: "Begin your learning",
    dailyVerse: "Daily Verse",
    readMore: "Read More",
    playAudio: "Play Audio",
    chapters: "Chapters",
    verses: "Verses",
    chapter: "Chapter",
    verse: "Verse",
    sacredStories: "Sacred Stories",
    ancientWisdom: "Ancient wisdom through epic narratives",
    beginReading: "Begin Reading",
    theRamayana: "The Ramayana",
    theMahabharata: "The Mahabharata",
    appearance: "Appearance",
    language: "Language",
    notifications: "Notifications",
    textToSpeech: "Text to Speech",
    helpSupport: "Help & Support",
    aboutVidya: "About Vidya",
    privacyPolicy: "Privacy Policy",
    resetProgress: "Reset Progress",
    preferences: "Preferences",
    support: "Support",
    savedVerses: "Saved Verses",
    gitaProgress: "Gita Progress",
    todaysProgress: "Today's Progress",
    dayStreak: "Day Streak",
    bestStreak: "Best Streak",
    versesRead: "Verses Read",
    readingExperience: "Reading Experience",
    fontSize: "Font Size",
    fontColor: "Font Color",
    showSanskrit: "Show Sanskrit",
    showTransliteration: "Show Transliteration",
    dailyShloka: "Daily Shloka",
    offlineLibrary: "Offline Library",
    downloadFavorites: "Download Favorites",
    storageUsed: "Storage Used",
    clearCache: "Clear Cache",
    dark: "Dark",
    light: "Light",
    on: "On",
    off: "Off",
    continue: "Continue",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    chooseLanguage: "Choose Language",
    selectLanguage: "Select the language for reading scriptures.",
  },
  hi: {
    home: "होम",
    gita: "गीता",
    stories: "कथाएं",
    search: "खोजें",
    profile: "प्रोफ़ाइल",
    settings: "सेटिंग्स",
    goodMorning: "सुप्रभात",
    goodAfternoon: "नमस्कार",
    goodEvening: "शुभ संध्या",
    beginLearning: "अपना अध्ययन शुरू करें",
    dailyVerse: "आज का श्लोक",
    readMore: "और पढ़ें",
    playAudio: "ऑडियो चलाएं",
    chapters: "अध्याय",
    verses: "श्लोक",
    chapter: "अध्याय",
    verse: "श्लोक",
    sacredStories: "पवित्र कथाएं",
    ancientWisdom: "महाकाव्यों के माध्यम से प्राचीन ज्ञान",
    beginReading: "पढ़ना शुरू करें",
    theRamayana: "रामायण",
    theMahabharata: "महाभारत",
    appearance: "दिखावट",
    language: "भाषा",
    notifications: "सूचनाएं",
    textToSpeech: "टेक्स्ट टू स्पीच",
    helpSupport: "सहायता",
    aboutVidya: "विद्या के बारे में",
    privacyPolicy: "गोपनीयता नीति",
    resetProgress: "प्रगति रीसेट करें",
    preferences: "प्राथमिकताएं",
    support: "सहायता",
    savedVerses: "सहेजे गए श्लोक",
    gitaProgress: "गीता प्रगति",
    todaysProgress: "आज की प्रगति",
    dayStreak: "दिन स्ट्रीक",
    bestStreak: "सर्वश्रेष्ठ स्ट्रीक",
    versesRead: "पढ़े गए श्लोक",
    readingExperience: "पढ़ने का अनुभव",
    fontSize: "फ़ॉन्ट आकार",
    fontColor: "फ़ॉन्ट रंग",
    showSanskrit: "संस्कृत दिखाएं",
    showTransliteration: "लिप्यंतरण दिखाएं",
    dailyShloka: "दैनिक श्लोक",
    offlineLibrary: "ऑफ़लाइन लाइब्रेरी",
    downloadFavorites: "पसंदीदा डाउनलोड करें",
    storageUsed: "उपयोग किया गया स्थान",
    clearCache: "कैश साफ़ करें",
    dark: "डार्क",
    light: "लाइट",
    on: "चालू",
    off: "बंद",
    continue: "जारी रखें",
    cancel: "रद्द करें",
    save: "सहेजें",
    close: "बंद करें",
    chooseLanguage: "भाषा चुनें",
    selectLanguage: "शास्त्र पढ़ने के लिए भाषा चुनें।",
  },
  te: {
    home: "హోమ్",
    gita: "గీత",
    stories: "కథలు",
    search: "శోధన",
    profile: "ప్రొఫైల్",
    settings: "సెట్టింగ్స్",
    goodMorning: "శుభోదయం",
    goodAfternoon: "శుభ మధ్యాహ్నం",
    goodEvening: "శుభ సాయంత్రం",
    beginLearning: "మీ అధ్యయనం ప్రారంభించండి",
    dailyVerse: "నేటి శ్లోకం",
    readMore: "మరింత చదవండి",
    playAudio: "ఆడియో ప్లే చేయండి",
    chapters: "అధ్యాయాలు",
    verses: "శ్లోకాలు",
    chapter: "అధ్యాయం",
    verse: "శ్లోకం",
    sacredStories: "పవిత్ర కథలు",
    ancientWisdom: "మహాకావ్యాల ద్వారా ప్రాచీన జ్ఞానం",
    beginReading: "చదవడం ప్రారంభించండి",
    theRamayana: "రామాయణం",
    theMahabharata: "మహాభారతం",
    appearance: "రూపం",
    language: "భాష",
    notifications: "నోటిఫికేషన్లు",
    textToSpeech: "టెక్స్ట్ టు స్పీచ్",
    helpSupport: "సహాయం",
    aboutVidya: "విద్య గురించి",
    privacyPolicy: "గోప్యతా విధానం",
    resetProgress: "పురోగతి రీసెట్ చేయండి",
    preferences: "ప్రాధాన్యతలు",
    support: "సహాయం",
    savedVerses: "సేవ్ చేసిన శ్లోకాలు",
    gitaProgress: "గీత పురోగతి",
    todaysProgress: "నేటి పురోగతి",
    dayStreak: "రోజు స్ట్రీక్",
    bestStreak: "ఉత్తమ స్ట్రీక్",
    versesRead: "చదివిన శ్లోకాలు",
    readingExperience: "చదివే అనుభవం",
    fontSize: "ఫాంట్ సైజు",
    fontColor: "ఫాంట్ రంగు",
    showSanskrit: "సంస్కృతం చూపించు",
    showTransliteration: "లిప్యంతరణ చూపించు",
    dailyShloka: "రోజువారీ శ్లోకం",
    offlineLibrary: "ఆఫ్‌లైన్ లైబ్రరీ",
    downloadFavorites: "ఇష్టమైనవి డౌన్‌లోడ్ చేయండి",
    storageUsed: "ఉపయోగించిన నిల్వ",
    clearCache: "కాష్ క్లియర్ చేయండి",
    dark: "డార్క్",
    light: "లైట్",
    on: "ఆన్",
    off: "ఆఫ్",
    continue: "కొనసాగించు",
    cancel: "రద్దు",
    save: "సేవ్",
    close: "మూసివేయి",
    chooseLanguage: "భాష ఎంచుకోండి",
    selectLanguage: "శాస్త్రాలు చదవడానికి భాష ఎంచుకోండి.",
  },
  ta: {
    home: "முகப்பு",
    gita: "கீதை",
    stories: "கதைகள்",
    search: "தேடல்",
    profile: "சுயவிவரம்",
    settings: "அமைப்புகள்",
    goodMorning: "காலை வணக்கம்",
    goodAfternoon: "மதிய வணக்கம்",
    goodEvening: "மாலை வணக்கம்",
    beginLearning: "உங்கள் கற்றலைத் தொடங்குங்கள்",
    dailyVerse: "இன்றைய ஸ்லோகம்",
    readMore: "மேலும் படிக்க",
    playAudio: "ஆடியோ இயக்கு",
    chapters: "அத்தியாயங்கள்",
    verses: "ஸ்லோகங்கள்",
    chapter: "அத்தியாயம்",
    verse: "ஸ்லோகம்",
    sacredStories: "புனித கதைகள்",
    ancientWisdom: "காவியங்கள் மூலம் பண்டைய ஞானம்",
    beginReading: "படிக்கத் தொடங்கு",
    theRamayana: "ராமாயணம்",
    theMahabharata: "மகாபாரதம்",
    appearance: "தோற்றம்",
    language: "மொழி",
    notifications: "அறிவிப்புகள்",
    textToSpeech: "உரையிலிருந்து பேச்சு",
    helpSupport: "உதவி",
    aboutVidya: "வித்யா பற்றி",
    privacyPolicy: "தனியுரிமை கொள்கை",
    resetProgress: "முன்னேற்றத்தை மீட்டமை",
    preferences: "விருப்பங்கள்",
    support: "ஆதரவு",
    savedVerses: "சேமித்த ஸ்லோகங்கள்",
    gitaProgress: "கீதை முன்னேற்றம்",
    todaysProgress: "இன்றைய முன்னேற்றம்",
    dayStreak: "நாள் ஸ்ட்ரீக்",
    bestStreak: "சிறந்த ஸ்ட்ரீக்",
    versesRead: "படித்த ஸ்லோகங்கள்",
    readingExperience: "படிக்கும் அனுபவம்",
    fontSize: "எழுத்து அளவு",
    fontColor: "எழுத்து நிறம்",
    showSanskrit: "சமஸ்கிருதம் காட்டு",
    showTransliteration: "ஒலிபெயர்ப்பு காட்டு",
    dailyShloka: "தினசரி ஸ்லோகம்",
    offlineLibrary: "ஆஃப்லைன் நூலகம்",
    downloadFavorites: "பிடித்தவை பதிவிறக்கு",
    storageUsed: "பயன்படுத்திய சேமிப்பகம்",
    clearCache: "கேஷ் அழி",
    dark: "இருள்",
    light: "ஒளி",
    on: "ஆன்",
    off: "ஆஃப்",
    continue: "தொடர்",
    cancel: "ரத்து",
    save: "சேமி",
    close: "மூடு",
    chooseLanguage: "மொழி தேர்வு",
    selectLanguage: "வேதங்களைப் படிக்க மொழியைத் தேர்ந்தெடுக்கவும்.",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    gita: "ಗೀತೆ",
    stories: "ಕಥೆಗಳು",
    search: "ಹುಡುಕು",
    profile: "ಪ್ರೊಫೈಲ್",
    settings: "ಸೆಟ್ಟಿಂಗ್ಸ್",
    goodMorning: "ಶುಭೋದಯ",
    goodAfternoon: "ಶುಭ ಮಧ್ಯಾಹ್ನ",
    goodEvening: "ಶುಭ ಸಂಜೆ",
    beginLearning: "ನಿಮ್ಮ ಕಲಿಕೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    dailyVerse: "ಇಂದಿನ ಶ್ಲೋಕ",
    readMore: "ಇನ್ನಷ್ಟು ಓದಿ",
    playAudio: "ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ",
    chapters: "ಅಧ್ಯಾಯಗಳು",
    verses: "ಶ್ಲೋಕಗಳು",
    chapter: "ಅಧ್ಯಾಯ",
    verse: "ಶ್ಲೋಕ",
    sacredStories: "ಪವಿತ್ರ ಕಥೆಗಳು",
    ancientWisdom: "ಮಹಾಕಾವ್ಯಗಳ ಮೂಲಕ ಪ್ರಾಚೀನ ಜ್ಞಾನ",
    beginReading: "ಓದಲು ಪ್ರಾರಂಭಿಸಿ",
    theRamayana: "ರಾಮಾಯಣ",
    theMahabharata: "ಮಹಾಭಾರತ",
    appearance: "ನೋಟ",
    language: "ಭಾಷೆ",
    notifications: "ಅಧಿಸೂಚನೆಗಳು",
    textToSpeech: "ಪಠ್ಯದಿಂದ ಮಾತು",
    helpSupport: "ಸಹಾಯ",
    aboutVidya: "ವಿದ್ಯಾ ಬಗ್ಗೆ",
    privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    resetProgress: "ಪ್ರಗತಿ ಮರುಹೊಂದಿಸಿ",
    preferences: "ಆದ್ಯತೆಗಳು",
    support: "ಬೆಂಬಲ",
    savedVerses: "ಉಳಿಸಿದ ಶ್ಲೋಕಗಳು",
    gitaProgress: "ಗೀತೆ ಪ್ರಗತಿ",
    todaysProgress: "ಇಂದಿನ ಪ್ರಗತಿ",
    dayStreak: "ದಿನ ಸ್ಟ್ರೀಕ್",
    bestStreak: "ಅತ್ಯುತ್ತಮ ಸ್ಟ್ರೀಕ್",
    versesRead: "ಓದಿದ ಶ್ಲೋಕಗಳು",
    readingExperience: "ಓದುವ ಅನುಭವ",
    fontSize: "ಅಕ್ಷರ ಗಾತ್ರ",
    fontColor: "ಅಕ್ಷರ ಬಣ್ಣ",
    showSanskrit: "ಸಂಸ್ಕೃತ ತೋರಿಸು",
    showTransliteration: "ಲಿಪ್ಯಂತರ ತೋರಿಸು",
    dailyShloka: "ದೈನಿಕ ಶ್ಲೋಕ",
    offlineLibrary: "ಆಫ್‌ಲೈನ್ ಲೈಬ್ರರಿ",
    downloadFavorites: "ಮೆಚ್ಚಿನವು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    storageUsed: "ಬಳಸಿದ ಸಂಗ್ರಹಣೆ",
    clearCache: "ಕ್ಯಾಶ್ ತೆರವುಗೊಳಿಸಿ",
    dark: "ಡಾರ್ಕ್",
    light: "ಲೈಟ್",
    on: "ಆನ್",
    off: "ಆಫ್",
    continue: "ಮುಂದುವರಿಸು",
    cancel: "ರದ್ದು",
    save: "ಉಳಿಸು",
    close: "ಮುಚ್ಚು",
    chooseLanguage: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
    selectLanguage: "ಶಾಸ್ತ್ರಗಳನ್ನು ಓದಲು ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ.",
  },
  sa: {
    home: "गृहम्",
    gita: "गीता",
    stories: "कथाः",
    search: "अन्वेषणम्",
    profile: "परिचयः",
    settings: "विन्यासाः",
    goodMorning: "सुप्रभातम्",
    goodAfternoon: "नमस्कारः",
    goodEvening: "शुभसन्ध्या",
    beginLearning: "अध्ययनं प्रारभस्व",
    dailyVerse: "दैनिकश्लोकः",
    readMore: "अधिकं पठ",
    playAudio: "श्रवणं कुरु",
    chapters: "अध्यायाः",
    verses: "श्लोकाः",
    chapter: "अध्यायः",
    verse: "श्लोकः",
    sacredStories: "पवित्रकथाः",
    ancientWisdom: "महाकाव्यैः प्राचीनज्ञानम्",
    beginReading: "पठनं प्रारभस्व",
    theRamayana: "रामायणम्",
    theMahabharata: "महाभारतम्",
    appearance: "रूपम्",
    language: "भाषा",
    notifications: "सूचनाः",
    textToSpeech: "पाठवाचनम्",
    helpSupport: "सहायता",
    aboutVidya: "विद्यायाः विषये",
    privacyPolicy: "गोपनीयता",
    resetProgress: "प्रगतिं पुनःस्थापय",
    preferences: "अभिरुचयः",
    support: "सहायता",
    savedVerses: "संरक्षिताः श्लोकाः",
    gitaProgress: "गीताप्रगतिः",
    todaysProgress: "अद्य प्रगतिः",
    dayStreak: "दिनक्रमः",
    bestStreak: "श्रेष्ठक्रमः",
    versesRead: "पठिताः श्लोकाः",
    readingExperience: "पठनानुभवः",
    fontSize: "अक्षरमानम्",
    fontColor: "अक्षरवर्णः",
    showSanskrit: "संस्कृतं दर्शय",
    showTransliteration: "लिप्यन्तरणं दर्शय",
    dailyShloka: "दैनिकश्लोकः",
    offlineLibrary: "अनवलम्बपुस्तकालयः",
    downloadFavorites: "प्रियाणि अवतारय",
    storageUsed: "उपयुक्तसंग्रहणम्",
    clearCache: "स्मृतिं शोधय",
    dark: "अन्धकारः",
    light: "प्रकाशः",
    on: "चालु",
    off: "स्थगितम्",
    continue: "अनुवर्तय",
    cancel: "रद्द",
    save: "संरक्ष",
    close: "पिधत्स्व",
    chooseLanguage: "भाषां वृणु",
    selectLanguage: "शास्त्रपठनाय भाषां वृणु।",
  },
};

const LANGUAGE_KEY = "vidya_language";

export function useLanguage() {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_KEY) as LanguageCode;
    if (stored && translations[stored]) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem(LANGUAGE_KEY, code);
  };

  const t = translations[language];

  return {
    language,
    setLanguage,
    t,
    translations,
  };
}

// Language names for display
export const languageNames: Record<LanguageCode, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  hi: { native: "हिंदी", english: "Hindi" },
  te: { native: "తెలుగు", english: "Telugu" },
  ta: { native: "தமிழ்", english: "Tamil" },
  kn: { native: "ಕನ್ನಡ", english: "Kannada" },
  sa: { native: "संस्कृतम्", english: "Sanskrit" },
};
