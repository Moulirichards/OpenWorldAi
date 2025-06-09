
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// AI Assistant pages
import Assistant from "./pages/ai/Assistant";
import AskQuestion from "./pages/ai/AskQuestion";
import ChatBot from "./pages/ai/ChatBot";
import VoiceAssistant from "./pages/ai/VoiceAssistant";
import SmartRecommendations from "./pages/ai/SmartRecommendations";

// Profile pages
import UserProfile from "./pages/profile/UserProfile";
import Settings from "./pages/profile/Settings";
import LearningProgress from "./pages/profile/LearningProgress";
import Achievements from "./pages/profile/Achievements";

// Support pages
import HelpCenter from "./pages/support/HelpCenter";
import LiveChat from "./pages/support/LiveChat";
import Tutorials from "./pages/support/Tutorials";
import FAQ from "./pages/support/FAQ";

// Language pages
import LanguageSettings from "./pages/language/LanguageSettings";
import TranslationServices from "./pages/language/TranslationServices";
import LanguageLearning from "./pages/language/LanguageLearning";

// Community pages
import Forum from "./pages/community/Forum";
import Events from "./pages/community/Events";

// Resource pages
import Downloads from "./pages/resources/Downloads";
import Links from "./pages/resources/Links";

// Tool pages
import Calculator from "./pages/tools/Calculator";
import Calendar from "./pages/tools/Calendar";
import Notes from "./pages/tools/Notes";
import VideoChat from "./pages/tools/VideoChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* AI Assistant routes */}
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/ai/chatbot" element={<ChatBot />} />
            <Route path="/ai/voice-assistant" element={<VoiceAssistant />} />
            <Route path="/ai/recommendations" element={<SmartRecommendations />} />
            
            {/* Profile routes */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/profile/progress" element={<LearningProgress />} />
            <Route path="/profile/achievements" element={<Achievements />} />
            
            {/* Support routes */}
            <Route path="/support" element={<HelpCenter />} />
            <Route path="/support/live-chat" element={<LiveChat />} />
            <Route path="/support/tutorials" element={<Tutorials />} />
            <Route path="/support/faq" element={<FAQ />} />
            
            {/* Language routes */}
            <Route path="/language" element={<LanguageSettings />} />
            <Route path="/language/translation" element={<TranslationServices />} />
            <Route path="/language/learning" element={<LanguageLearning />} />
            
            {/* Community routes */}
            <Route path="/community/forum" element={<Forum />} />
            <Route path="/community/events" element={<Events />} />
            
            {/* Resource routes */}
            <Route path="/resources/downloads" element={<Downloads />} />
            <Route path="/resources/links" element={<Links />} />
            
            {/* Tool routes */}
            <Route path="/tools/calculator" element={<Calculator />} />
            <Route path="/tools/calendar" element={<Calendar />} />
            <Route path="/tools/notes" element={<Notes />} />
            <Route path="/tools/video-chat" element={<VideoChat />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
