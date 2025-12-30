import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReadingSettingsProvider } from "@/contexts/ReadingSettingsContext";
import Index from "./pages/Index";
import Gita from "./pages/Gita";
import ChapterDetail from "./pages/ChapterDetail";
import VerseDetail from "./pages/VerseDetail";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import AskVidya from "./pages/AskVidya";
import Onboarding from "./pages/Onboarding";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ReadingSettingsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/" element={<Index />} />
            <Route path="/gita" element={<Gita />} />
            <Route path="/gita/chapter/:chapterNum" element={<ChapterDetail />} />
            <Route path="/gita/chapter/:chapterNum/verse/:verseNum" element={<VerseDetail />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:storyId" element={<StoryDetail />} />
            <Route path="/stories/:storyId/:sectionId" element={<StoryDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/ask" element={<AskVidya />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ReadingSettingsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
