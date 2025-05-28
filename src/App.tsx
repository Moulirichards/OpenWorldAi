
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

// AI Assistant pages
import Assistant from "./pages/ai/Assistant";
import AskQuestion from "./pages/ai/AskQuestion";

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
          
          {/* AI Assistant routes */}
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/ask" element={<AskQuestion />} />
          
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
