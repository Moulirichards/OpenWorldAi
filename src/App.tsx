import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

// Learn category pages
import BasicTechnology from "./pages/learn/BasicTechnology";
import HealthWellness from "./pages/learn/HealthWellness";
import FinancialLiteracy from "./pages/learn/FinancialLiteracy";
import JobSkills from "./pages/learn/JobSkills";
import EducationBasics from "./pages/learn/EducationBasics";
import Agriculture from "./pages/learn/Agriculture";

// Lesson pages
import SmartphoneBasics from "./pages/learn/lessons/SmartphoneBasics";
import InternetSafety from "./pages/learn/lessons/InternetSafety";
import ComputerBasics from "./pages/learn/lessons/ComputerBasics";
import EmailBasics from "./pages/learn/lessons/EmailBasics";
import SocialMediaBasics from "./pages/learn/lessons/SocialMediaBasics";
import DigitalBanking from "./pages/learn/lessons/DigitalBanking";
import HealthTracking from "./pages/learn/lessons/HealthTracking";
import JobApplications from "./pages/learn/lessons/JobApplications";
import OnlineLearning from "./pages/learn/lessons/OnlineLearning";
import SmartFarming from "./pages/learn/lessons/SmartFarming";

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import AIConsulting from "./pages/services/AIConsulting";
import MobileApps from "./pages/services/MobileApps";
import CloudServices from "./pages/services/CloudServices";
import DataAnalytics from "./pages/services/DataAnalytics";
import Cybersecurity from "./pages/services/Cybersecurity";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import ITSupport from "./pages/services/ITSupport";

// AI Assistant pages
import Assistant from "./pages/ai/Assistant";
import AskQuestion from "./pages/ai/AskQuestion";
import ChatBot from "./pages/ai/ChatBot";
import VoiceAssistant from "./pages/ai/VoiceAssistant";
import SmartRecommendations from "./pages/ai/SmartRecommendations";

// Career pages
import JobOpenings from "./pages/careers/JobOpenings";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Learn category routes */}
          <Route path="/learn/basic-technology" element={<BasicTechnology />} />
          <Route path="/learn/health-wellness" element={<HealthWellness />} />
          <Route path="/learn/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/learn/job-skills" element={<JobSkills />} />
          <Route path="/learn/education-basics" element={<EducationBasics />} />
          <Route path="/learn/agriculture" element={<Agriculture />} />
          
          {/* Lesson routes */}
          <Route path="/learn/lessons/smartphone-basics" element={<SmartphoneBasics />} />
          <Route path="/learn/lessons/internet-safety" element={<InternetSafety />} />
          <Route path="/learn/lessons/computer-basics" element={<ComputerBasics />} />
          <Route path="/learn/lessons/email-basics" element={<EmailBasics />} />
          <Route path="/learn/lessons/social-media-basics" element={<SocialMediaBasics />} />
          <Route path="/learn/lessons/digital-banking" element={<DigitalBanking />} />
          <Route path="/learn/lessons/health-tracking" element={<HealthTracking />} />
          <Route path="/learn/lessons/job-applications" element={<JobApplications />} />
          <Route path="/learn/lessons/online-learning" element={<OnlineLearning />} />
          <Route path="/learn/lessons/smart-farming" element={<SmartFarming />} />
          
          {/* Service routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          
          {/* AI Assistant routes */}
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/ai/chatbot" element={<ChatBot />} />
          <Route path="/ai/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/ai/recommendations" element={<SmartRecommendations />} />
          
          {/* Career routes */}
          <Route path="/careers/jobs" element={<JobOpenings />} />
          
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
