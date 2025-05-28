
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

// Service pages
import WebDevelopment from "./pages/services/WebDevelopment";
import AIConsulting from "./pages/services/AIConsulting";
import MobileApps from "./pages/services/MobileApps";
import CloudServices from "./pages/services/CloudServices";

// AI Assistant pages
import Assistant from "./pages/ai/Assistant";
import AskQuestion from "./pages/ai/AskQuestion";
import ChatBot from "./pages/ai/ChatBot";

// Career pages
import JobOpenings from "./pages/careers/JobOpenings";

// Profile pages
import UserProfile from "./pages/profile/UserProfile";

// Support pages
import HelpCenter from "./pages/support/HelpCenter";

// Language pages
import LanguageSettings from "./pages/language/LanguageSettings";

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
          
          {/* Service routes */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          
          {/* AI Assistant routes */}
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/ai/chatbot" element={<ChatBot />} />
          
          {/* Career routes */}
          <Route path="/careers/jobs" element={<JobOpenings />} />
          
          {/* Profile routes */}
          <Route path="/profile" element={<UserProfile />} />
          
          {/* Support routes */}
          <Route path="/support" element={<HelpCenter />} />
          
          {/* Language routes */}
          <Route path="/language" element={<LanguageSettings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
