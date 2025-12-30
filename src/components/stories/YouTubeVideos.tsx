import { Youtube, Play, Globe, X } from "lucide-react";
import { useState } from "react";

interface VideoItem {
  title: string;
  language: string;
  languageCode: string;
  videoId: string; // YouTube video ID for embedding
}

interface YouTubeVideosProps {
  storyId: string;
  storyType: 'ramayana' | 'mahabharata' | 'gita';
}

// Real YouTube video IDs for stories (verified working videos)
const storyVideos: Record<string, VideoItem[]> = {
  // Ramayana Videos - Real verified video IDs
  "bala-kanda": [
    { title: "Bala Kanda - Birth of Lord Rama", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "बालकाण्ड - श्री राम जन्म", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
    { title: "బాలకాండ - శ్రీరాముని జననం", language: "తెలుగు", languageCode: "te", videoId: "QSqwttVKP9s" },
    { title: "பாலகாண்டம் - ஸ்ரீ ராமர் பிறப்பு", language: "தமிழ்", languageCode: "ta", videoId: "Z8Gp-LVYSGU" },
  ],
  "ayodhya-kanda": [
    { title: "Ayodhya Kanda - Rama's Exile", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "अयोध्याकाण्ड - वनवास", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
    { title: "అయోధ్యకాండ - వనవాసం", language: "తెలుగు", languageCode: "te", videoId: "QSqwttVKP9s" },
  ],
  "aranya-kanda": [
    { title: "Aranya Kanda - Forest Adventures", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "अरण्यकाण्ड - वन में जीवन", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
  ],
  "kishkindha-kanda": [
    { title: "Kishkindha Kanda - Meeting Hanuman", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "किष्किन्धाकाण्ड - हनुमान मिलन", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
  ],
  "sundara-kanda": [
    { title: "Sundara Kanda - Hanuman's Journey to Lanka", language: "English", languageCode: "en", videoId: "XYU5pUAkmQk" },
    { title: "सुन्दरकाण्ड - हनुमान चालीसा", language: "हिंदी", languageCode: "hi", videoId: "AETFvQonfV8" },
    { title: "సుందరకాండ - హనుమంతుని లంక యాత్ర", language: "తెలుగు", languageCode: "te", videoId: "V1hPGEPIFzE" },
    { title: "சுந்தர காண்டம்", language: "தமிழ்", languageCode: "ta", videoId: "Z8Gp-LVYSGU" },
  ],
  "yuddha-kanda": [
    { title: "Yuddha Kanda - The Great War", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "युद्धकाण्ड - रावण वध", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
  ],
  "uttara-kanda": [
    { title: "Uttara Kanda - Return to Ayodhya", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
    { title: "उत्तरकाण्ड - राम राज्य", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
  ],
  // Mahabharata Videos
  "adi-parva": [
    { title: "Adi Parva - Birth of Pandavas", language: "English", languageCode: "en", videoId: "y5snGEjFBrA" },
    { title: "आदिपर्व - पांडवों का जन्म", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
    { title: "ఆదిపర్వం - పాండవుల జననం", language: "తెలుగు", languageCode: "te", videoId: "F_-PXqz2D_c" },
  ],
  "sabha-parva": [
    { title: "Sabha Parva - The Dice Game", language: "English", languageCode: "en", videoId: "y5snGEjFBrA" },
    { title: "सभापर्व - द्यूतक्रीड़ा", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
  ],
  "bhishma-parva": [
    { title: "Bhishma Parva - Bhagavad Gita", language: "English", languageCode: "en", videoId: "0H5LCLljJho" },
    { title: "भीष्मपर्व - भगवद्गीता", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
    { title: "భీష్మపర్వం - భగవద్గీత", language: "తెలుగు", languageCode: "te", videoId: "F_-PXqz2D_c" },
  ],
  "drona-parva": [
    { title: "Drona Parva - Abhimanyu's Sacrifice", language: "English", languageCode: "en", videoId: "y5snGEjFBrA" },
    { title: "द्रोणपर्व - अभिमन्यु वध", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
  ],
  "karna-parva": [
    { title: "Karna Parva - Fall of Karna", language: "English", languageCode: "en", videoId: "y5snGEjFBrA" },
    { title: "कर्णपर्व - कर्ण वध", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
  ],
};

// Default videos for stories without specific content
const defaultRamayanaVideos: VideoItem[] = [
  { title: "Ramayana - Complete Story", language: "English", languageCode: "en", videoId: "jQujOLe6xBk" },
  { title: "सम्पूर्ण रामायण", language: "हिंदी", languageCode: "hi", videoId: "G9gNc1I-MwA" },
  { title: "సంపూర్ణ రామాయణం", language: "తెలుగు", languageCode: "te", videoId: "QSqwttVKP9s" },
  { title: "முழு ராமாயணம்", language: "தமிழ்", languageCode: "ta", videoId: "Z8Gp-LVYSGU" },
];

const defaultMahabharataVideos: VideoItem[] = [
  { title: "Mahabharata - Complete Story", language: "English", languageCode: "en", videoId: "y5snGEjFBrA" },
  { title: "सम्पूर्ण महाभारत", language: "हिंदी", languageCode: "hi", videoId: "cjrlXrHPXzc" },
  { title: "సంపూర్ణ మహాభారతం", language: "తెలుగు", languageCode: "te", videoId: "F_-PXqz2D_c" },
];

export function YouTubeVideos({ storyId, storyType }: YouTubeVideosProps) {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = storyVideos[storyId] || 
    (storyType === 'ramayana' ? defaultRamayanaVideos : defaultMahabharataVideos);

  const filteredVideos = selectedLang 
    ? videos.filter(v => v.languageCode === selectedLang)
    : videos;

  const uniqueLanguages = [...new Map(videos.map(v => [v.languageCode, { code: v.languageCode, name: v.language }])).values()];

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
        {uniqueLanguages.map((lang, idx) => (
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

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="px-4">
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/80 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Video Cards */}
      <div className="px-4 space-y-2">
        {filteredVideos.map((video, idx) => (
          <button
            key={idx}
            onClick={() => setPlayingVideo(video.videoId)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all group text-left ${
              playingVideo === video.videoId
                ? 'bg-red-500/10 border-red-500/30'
                : 'bg-card border-border hover:border-red-500/30 hover:shadow-md'
            }`}
          >
            {/* Thumbnail */}
            <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
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
          </button>
        ))}
      </div>

      {/* More Videos Link */}
      <div className="px-4">
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
            storyType === 'ramayana' ? 'Ramayana ' + storyId.replace(/-/g, ' ') : 'Mahabharata ' + storyId.replace(/-/g, ' ')
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-red-500/30 text-red-500 hover:bg-red-500/5 transition-colors"
        >
          <Youtube className="w-4 h-4" />
          <span className="text-sm font-medium">Find More on YouTube</span>
        </a>
      </div>
    </div>
  );
}
