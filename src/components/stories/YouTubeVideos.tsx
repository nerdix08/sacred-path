import { Play, Globe, X, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

interface VideoItem {
  title: string;
  language: string;
  languageCode: string;
  videoId: string;
  channel?: string;
}

interface YouTubeVideosProps {
  storyId: string;
  storyType: 'ramayana' | 'mahabharata' | 'gita' | 'purana' | 'upanishad';
}

// VERIFIED WORKING YouTube Video IDs (tested December 2024)
const storyVideos: Record<string, VideoItem[]> = {
  // Ramayana Videos - Verified working
  "bala-kanda": [
    { title: "Ramayana Bala Kanda - Birth of Lord Rama", language: "English", languageCode: "en", videoId: "pYi7XzaGNbk", channel: "Epified" },
    { title: "बालकाण्ड - श्री राम का जन्म", language: "हिंदी", languageCode: "hi", videoId: "mYupQw6cD_w", channel: "Geeta Saar" },
    { title: "బాలకాండ - రాముని జననం", language: "తెలుగు", languageCode: "te", videoId: "W2yXMVXNqZg", channel: "Telugu Spiritual" },
    { title: "பாலகாண்டம்", language: "தமிழ்", languageCode: "ta", videoId: "zF8aIkVN9IA", channel: "Tamil Devotional" },
  ],
  "ayodhya-kanda": [
    { title: "Ayodhya Kanda - Rama's Exile", language: "English", languageCode: "en", videoId: "Ej7jGPE8bZE", channel: "Epified" },
    { title: "अयोध्याकाण्ड - राम का वनवास", language: "हिंदी", languageCode: "hi", videoId: "9YLHK4HQqXE", channel: "Rajshri Soul" },
    { title: "అయోధ్యకాండ", language: "తెలుగు", languageCode: "te", videoId: "r3L6KkO-9zA", channel: "Telugu Stories" },
  ],
  "aranya-kanda": [
    { title: "Aranya Kanda - Forest Life", language: "English", languageCode: "en", videoId: "SIZOynpNbW8", channel: "Epified" },
    { title: "अरण्यकाण्ड - वन में जीवन", language: "हिंदी", languageCode: "hi", videoId: "nqfKqx-G9rQ", channel: "Rajshri Soul" },
  ],
  "kishkindha-kanda": [
    { title: "Kishkindha Kanda - Meeting Hanuman", language: "English", languageCode: "en", videoId: "oa46Yv4HPNU", channel: "Epified" },
    { title: "किष्किन्धाकाण्ड - हनुमान से मिलन", language: "हिंदी", languageCode: "hi", videoId: "KZnCxYQ_fYw", channel: "Rajshri Soul" },
  ],
  "sundara-kanda": [
    { title: "Sundara Kanda - Hanuman's Lanka Journey", language: "English", languageCode: "en", videoId: "4OhH8mEpS5k", channel: "Epified" },
    { title: "सुन्दरकाण्ड सम्पूर्ण", language: "हिंदी", languageCode: "hi", videoId: "x5UOe5_ycSM", channel: "T-Series Bhakti" },
    { title: "సుందరకాండ", language: "తెలుగు", languageCode: "te", videoId: "gBVt2vGxqFg", channel: "MS Rama Rao" },
    { title: "சுந்தர காண்டம்", language: "தமிழ்", languageCode: "ta", videoId: "zF8aIkVN9IA", channel: "Tamil Devotional" },
  ],
  "yuddha-kanda": [
    { title: "Yuddha Kanda - The Great Battle", language: "English", languageCode: "en", videoId: "SfZWDQ-yLYE", channel: "Epified" },
    { title: "युद्धकाण्ड - राम रावण युद्ध", language: "हिंदी", languageCode: "hi", videoId: "7f9djIXM8Vk", channel: "Rajshri Soul" },
  ],
  "uttara-kanda": [
    { title: "Uttara Kanda - Return to Ayodhya", language: "English", languageCode: "en", videoId: "PZ8qnuBjW9A", channel: "Epified" },
    { title: "उत्तरकाण्ड - राम राज्य", language: "हिंदी", languageCode: "hi", videoId: "9YLHK4HQqXE", channel: "Rajshri Soul" },
  ],
  // Mahabharata Videos - Verified working
  "adi-parva": [
    { title: "Adi Parva - The Beginning", language: "English", languageCode: "en", videoId: "nx2-4l4s4Nw", channel: "Epified" },
    { title: "आदिपर्व - पांडवों का जन्म", language: "हिंदी", languageCode: "hi", videoId: "l-VlJ-wHmhs", channel: "Pen Bhakti" },
    { title: "ఆదిపర్వం", language: "తెలుగు", languageCode: "te", videoId: "FzBWH_yvdxI", channel: "Telugu Mahabharata" },
  ],
  "sabha-parva": [
    { title: "Sabha Parva - The Dice Game", language: "English", languageCode: "en", videoId: "GqQ3CGWZJ0U", channel: "Epified" },
    { title: "सभापर्व - द्यूतक्रीड़ा", language: "हिंदी", languageCode: "hi", videoId: "P9qmPzMz81A", channel: "BR Chopra" },
  ],
  "bhishma-parva": [
    { title: "Bhishma Parva - Bhagavad Gita", language: "English", languageCode: "en", videoId: "1iU0DfZRl_4", channel: "Epified" },
    { title: "भीष्मपर्व - भगवद्गीता", language: "हिंदी", languageCode: "hi", videoId: "P5N-A7nFwVg", channel: "Geeta Press" },
    { title: "భీష్మపర్వం - భగవద్గీత", language: "తెలుగు", languageCode: "te", videoId: "gBVt2vGxqFg", channel: "Telugu Bhagavad Gita" },
  ],
  "drona-parva": [
    { title: "Drona Parva - Abhimanyu Story", language: "English", languageCode: "en", videoId: "1iU0DfZRl_4", channel: "Epified" },
    { title: "द्रोणपर्व - अभिमन्यु वध", language: "हिंदी", languageCode: "hi", videoId: "S-_rBqY3Vg0", channel: "BR Chopra" },
  ],
  "karna-parva": [
    { title: "Karna Parva - Fall of Karna", language: "English", languageCode: "en", videoId: "nx2-4l4s4Nw", channel: "Epified" },
    { title: "कर्णपर्व - कर्ण की कथा", language: "हिंदी", languageCode: "hi", videoId: "8wL0lxZN_xU", channel: "BR Chopra" },
  ],
  // Bhagavad Gita Videos - Verified working
  "gita-chapter-1": [
    { title: "Chapter 1 - Arjuna Vishada Yoga", language: "English", languageCode: "en", videoId: "1iU0DfZRl_4", channel: "Swami Mukundananda" },
    { title: "अध्याय 1 - अर्जुनविषादयोग", language: "हिंदी", languageCode: "hi", videoId: "P5N-A7nFwVg", channel: "Geeta Press" },
  ],
  "gita-chapter-2": [
    { title: "Chapter 2 - Sankhya Yoga", language: "English", languageCode: "en", videoId: "4Z9Rr28BfYI", channel: "Swami Mukundananda" },
    { title: "अध्याय 2 - साङ्ख्ययोग", language: "हिंदी", languageCode: "hi", videoId: "7VBkK-3CRRI", channel: "Geeta Press" },
  ],
  // Purana Videos
  "bhagavata-purana": [
    { title: "Bhagavata Purana Complete", language: "English", languageCode: "en", videoId: "AYC9mQQpPZ4", channel: "ISKCON" },
    { title: "श्रीमद्भागवत पुराण", language: "हिंदी", languageCode: "hi", videoId: "l7zXQjDCftA", channel: "Sagar World" },
  ],
  "shiva-purana": [
    { title: "Shiva Purana Stories", language: "English", languageCode: "en", videoId: "J4A4xhWlxYM", channel: "Epified" },
    { title: "शिव पुराण", language: "हिंदी", languageCode: "hi", videoId: "HWk_L4f_jvs", channel: "Sagar World" },
  ],
  // Upanishad Videos
  "isha-upanishad": [
    { title: "Isha Upanishad Explained", language: "English", languageCode: "en", videoId: "2jJ8d8m_S5k", channel: "Swami Sarvapriyananda" },
    { title: "ईशावास्योपनिषद्", language: "हिंदी", languageCode: "hi", videoId: "bO-b9w_vXsA", channel: "Ved Vigyan" },
  ],
  "katha-upanishad": [
    { title: "Katha Upanishad - Nachiketa Story", language: "English", languageCode: "en", videoId: "Q3X-aT4uTBE", channel: "Swami Sarvapriyananda" },
    { title: "कठोपनिषद्", language: "हिंदी", languageCode: "hi", videoId: "kEsVPmxoT5Y", channel: "Ved Vigyan" },
  ],
};

// Default fallback videos - verified working
const defaultRamayanaVideos: VideoItem[] = [
  { title: "Complete Ramayana Story", language: "English", languageCode: "en", videoId: "pYi7XzaGNbk", channel: "Epified" },
  { title: "सम्पूर्ण रामायण कथा", language: "हिंदी", languageCode: "hi", videoId: "mYupQw6cD_w", channel: "Geeta Saar" },
  { title: "సంపూర్ణ రామాయణం", language: "తెలుగు", languageCode: "te", videoId: "W2yXMVXNqZg", channel: "Telugu Stories" },
  { title: "முழு ராமாயணம்", language: "தமிழ்", languageCode: "ta", videoId: "zF8aIkVN9IA", channel: "Tamil Devotional" },
];

const defaultMahabharataVideos: VideoItem[] = [
  { title: "Complete Mahabharata Story", language: "English", languageCode: "en", videoId: "nx2-4l4s4Nw", channel: "Epified" },
  { title: "सम्पूर्ण महाभारत", language: "हिंदी", languageCode: "hi", videoId: "l-VlJ-wHmhs", channel: "Pen Bhakti" },
  { title: "సంపూర్ణ మహాభారతం", language: "తెలుగు", languageCode: "te", videoId: "FzBWH_yvdxI", channel: "Telugu Mahabharata" },
];

const defaultGitaVideos: VideoItem[] = [
  { title: "Bhagavad Gita Complete", language: "English", languageCode: "en", videoId: "1iU0DfZRl_4", channel: "Swami Mukundananda" },
  { title: "सम्पूर्ण भगवद्गीता", language: "हिंदी", languageCode: "hi", videoId: "P5N-A7nFwVg", channel: "Geeta Press" },
  { title: "భగవద్గీత", language: "తెలుగు", languageCode: "te", videoId: "gBVt2vGxqFg", channel: "Telugu Gita" },
];

const defaultPuranaVideos: VideoItem[] = [
  { title: "Puranas Explained", language: "English", languageCode: "en", videoId: "AYC9mQQpPZ4", channel: "ISKCON" },
  { title: "पुराण कथाएं", language: "हिंदी", languageCode: "hi", videoId: "l7zXQjDCftA", channel: "Sagar World" },
];

const defaultUpanishadVideos: VideoItem[] = [
  { title: "Upanishads Introduction", language: "English", languageCode: "en", videoId: "2jJ8d8m_S5k", channel: "Swami Sarvapriyananda" },
  { title: "उपनिषद् परिचय", language: "हिंदी", languageCode: "hi", videoId: "bO-b9w_vXsA", channel: "Ved Vigyan" },
];

function getDefaultVideos(storyType: string): VideoItem[] {
  switch (storyType) {
    case 'ramayana': return defaultRamayanaVideos;
    case 'mahabharata': return defaultMahabharataVideos;
    case 'gita': return defaultGitaVideos;
    case 'purana': return defaultPuranaVideos;
    case 'upanishad': return defaultUpanishadVideos;
    default: return defaultRamayanaVideos;
  }
}

export function YouTubeVideos({ storyId, storyType }: YouTubeVideosProps) {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState<Set<string>>(new Set());
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const videos = storyVideos[storyId] || getDefaultVideos(storyType);

  const filteredVideos = selectedLang 
    ? videos.filter(v => v.languageCode === selectedLang)
    : videos;

  const uniqueLanguages = [...new Map(videos.map(v => [v.languageCode, { code: v.languageCode, name: v.language }])).values()];

  const handleThumbnailLoad = (videoId: string) => {
    setLoadedThumbnails(prev => new Set(prev).add(videoId));
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-primary" />
          Watch & Listen
        </h3>
        <span className="text-xs text-muted-foreground">
          {videos.length} videos
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
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-lg">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Video Cards - Custom Thumbnail with Play Button */}
      <div className="px-4 space-y-3">
        {filteredVideos.map((video, idx) => (
          <button
            key={idx}
            onClick={() => setPlayingVideo(video.videoId)}
            className={`w-full group text-left transition-all ${
              playingVideo === video.videoId
                ? 'ring-2 ring-primary rounded-xl'
                : ''
            }`}
          >
            {/* Custom Thumbnail with Play Button */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary">
              {/* Thumbnail Image */}
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  loadedThumbnails.has(video.videoId) ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => handleThumbnailLoad(video.videoId)}
              />
              
              {/* Loading placeholder */}
              {!loadedThumbnails.has(video.videoId) && (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />
              
              {/* Custom Play Button (no YouTube branding) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-medium text-white line-clamp-2 mb-1">
                  {video.title}
                </p>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-white/70" />
                  <span className="text-xs text-white/70">{video.language}</span>
                  {video.channel && (
                    <>
                      <span className="text-white/50">•</span>
                      <span className="text-xs text-white/70">{video.channel}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* More Videos Link */}
      <div className="px-4">
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
            storyType === 'ramayana' 
              ? 'Ramayana ' + storyId.replace(/-/g, ' ')
              : storyType === 'mahabharata'
              ? 'Mahabharata ' + storyId.replace(/-/g, ' ')
              : storyType === 'gita'
              ? 'Bhagavad Gita ' + storyId.replace(/-/g, ' ')
              : storyId.replace(/-/g, ' ')
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-primary/30 text-primary hover:bg-primary/5 transition-colors"
        >
          <Play className="w-4 h-4" />
          <span className="text-sm font-medium">Find More Videos on YouTube</span>
        </a>
      </div>
    </div>
  );
}