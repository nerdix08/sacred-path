import { Youtube, Play, Globe } from "lucide-react";
import { useState } from "react";

interface VideoItem {
  title: string;
  language: string;
  languageCode: string;
  url: string;
  thumbnail?: string;
}

interface YouTubeVideosProps {
  storyId: string;
  storyType: 'ramayana' | 'mahabharata' | 'gita';
}

// YouTube video resources for stories
const storyVideos: Record<string, VideoItem[]> = {
  // Ramayana Videos
  "bala-kanda": [
    { title: "Bala Kanda - Complete Story", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
    { title: "बालकाण्ड - सम्पूर्ण कथा", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
    { title: "బాలకాండ - పూర్తి కథ", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
    { title: "பாலகாண்டம் - முழு கதை", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
  ],
  "ayodhya-kanda": [
    { title: "Ayodhya Kanda - The Exile", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=q5VoqM0bCLQ" },
    { title: "अयोध्याकाण्ड - वनवास", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=q5VoqM0bCLQ" },
    { title: "అయోధ్యకాండ - అరణ్యవాసం", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=q5VoqM0bCLQ" },
    { title: "அயோத்தியா காண்டம்", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=q5VoqM0bCLQ" },
  ],
  "aranya-kanda": [
    { title: "Aranya Kanda - Forest Life", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=1234567890" },
    { title: "अरण्यकाण्ड - वन जीवन", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=1234567890" },
    { title: "అరణ్యకాండ - అడవి జీవితం", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=1234567890" },
  ],
  "kishkindha-kanda": [
    { title: "Kishkindha Kanda - Meeting Hanuman", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=1234567891" },
    { title: "किष्किन्धाकाण्ड - हनुमान मिलन", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=1234567891" },
  ],
  "sundara-kanda": [
    { title: "Sundara Kanda - Hanuman's Journey", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=sundara123" },
    { title: "सुन्दरकाण्ड - हनुमान की यात्रा", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=sundara123" },
    { title: "సుందరకాండ - హనుమంతుని యాత్ర", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=sundara123" },
    { title: "சுந்தர காண்டம்", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=sundara123" },
  ],
  "yuddha-kanda": [
    { title: "Yuddha Kanda - The Great War", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=yuddha123" },
    { title: "युद्धकाण्ड - महायुद्ध", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=yuddha123" },
  ],
  "uttara-kanda": [
    { title: "Uttara Kanda - The Final Chapter", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=uttara123" },
    { title: "उत्तरकाण्ड - अंतिम अध्याय", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=uttara123" },
  ],
  // Mahabharata Videos
  "adi-parva": [
    { title: "Adi Parva - The Beginning", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=adi123" },
    { title: "आदिपर्व - प्रारम्भ", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=adi123" },
    { title: "ఆదిపర్వం - ప్రారంభం", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=adi123" },
  ],
  "sabha-parva": [
    { title: "Sabha Parva - The Dice Game", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=sabha123" },
    { title: "सभापर्व - द्यूतक्रीड़ा", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=sabha123" },
  ],
  "bhishma-parva": [
    { title: "Bhishma Parva & Bhagavad Gita", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=bhishma123" },
    { title: "भीष्मपर्व और भगवद्गीता", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=bhishma123" },
    { title: "భీష్మపర్వం మరియు భగవద్గీత", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=bhishma123" },
    { title: "பீஷ்ம பர்வம்", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=bhishma123" },
  ],
  "drona-parva": [
    { title: "Drona Parva - Abhimanyu's Tale", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=drona123" },
    { title: "द्रोणपर्व - अभिमन्यु की गाथा", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=drona123" },
  ],
  "karna-parva": [
    { title: "Karna Parva - The Tragic Hero", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=karna123" },
    { title: "कर्णपर्व - त्रासद नायक", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=karna123" },
  ],
};

// Default videos for stories without specific content
const defaultRamayanaVideos: VideoItem[] = [
  { title: "Ramayana - Complete Epic", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
  { title: "सम्पूर्ण रामायण", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
  { title: "సంపూర్ణ రామాయణం", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
  { title: "முழு ராமாயணம்", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=0Mz88r_Y_BM" },
];

const defaultMahabharataVideos: VideoItem[] = [
  { title: "Mahabharata - Complete Epic", language: "English", languageCode: "en", url: "https://www.youtube.com/watch?v=mahabharata" },
  { title: "सम्पूर्ण महाभारत", language: "हिंदी", languageCode: "hi", url: "https://www.youtube.com/watch?v=mahabharata" },
  { title: "సంపూర్ణ మహాభారతం", language: "తెలుగు", languageCode: "te", url: "https://www.youtube.com/watch?v=mahabharata" },
  { title: "முழு மகாபாரதம்", language: "தமிழ்", languageCode: "ta", url: "https://www.youtube.com/watch?v=mahabharata" },
];

export function YouTubeVideos({ storyId, storyType }: YouTubeVideosProps) {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  const videos = storyVideos[storyId] || 
    (storyType === 'ramayana' ? defaultRamayanaVideos : defaultMahabharataVideos);

  const filteredVideos = selectedLang 
    ? videos.filter(v => v.languageCode === selectedLang)
    : videos;

  const languages = [...new Set(videos.map(v => ({ code: v.languageCode, name: v.language })))];

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Youtube className="w-4 h-4 text-red-500" />
          Watch Videos
        </h3>
        <span className="text-xs text-muted-foreground">
          {videos.length} videos available
        </span>
      </div>

      {/* Language Filter */}
      <div className="px-4 flex gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedLang(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
            !selectedLang 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-muted-foreground hover:text-foreground'
          }`}
        >
          All Languages
        </button>
        {languages.map((lang, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedLang(lang.code)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedLang === lang.code 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {/* Video Cards */}
      <div className="px-4 space-y-2">
        {filteredVideos.map((video, idx) => (
          <a
            key={idx}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-red-500/30 hover:shadow-md transition-all group"
          >
            {/* Play Icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>

            {/* Video Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-red-500 transition-colors">
                {video.title}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <Globe className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{video.language}</span>
              </div>
            </div>

            {/* YouTube Icon */}
            <Youtube className="w-5 h-5 text-red-500 flex-shrink-0" />
          </a>
        ))}
      </div>

      {/* More Videos Link */}
      <div className="px-4">
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
            storyType === 'ramayana' ? 'Ramayana ' + storyId.replace('-', ' ') : 'Mahabharata ' + storyId.replace('-', ' ')
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-red-500/30 text-red-500 hover:bg-red-500/5 transition-colors"
        >
          <Youtube className="w-4 h-4" />
          <span className="text-sm font-medium">Find More Videos on YouTube</span>
        </a>
      </div>
    </div>
  );
}
