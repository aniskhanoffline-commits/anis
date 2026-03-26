import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CampaignsPage from "./pages/CampaignsPage.tsx";
import DonatePage from "./pages/DonatePage.tsx";
import ImpactPage from "./pages/ImpactPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import EducationArticle from "./pages/blog/EducationArticle.tsx";
import ReliefArticle from "./pages/blog/ReliefArticle.tsx";
import CultureArticle from "./pages/blog/CultureArticle.tsx";
import WelfareArticle from "./pages/blog/WelfareArticle.tsx";
import MediaArticle from "./pages/blog/MediaArticle.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { PrivacyPage, TermsPage, DisclaimerPage, RefundPolicyPage, DonationPolicyPage } from "./pages/PolicyPages.tsx";
import DonationSuccessPage from "./pages/DonationSuccessPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Chatbot from "./components/Chatbot.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/education-transforming-communities" element={<EducationArticle />} />
          <Route path="/blog/emergency-relief-2026-floods" element={<ReliefArticle />} />
          <Route path="/blog/preserving-nzema-culture" element={<CultureArticle />} />
          <Route path="/blog/community-welfare-support" element={<WelfareArticle />} />
          <Route path="/blog/media-awareness-campaign" element={<MediaArticle />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/donation-policy" element={<DonationPolicyPage />} />
          <Route path="/donation-success" element={<DonationSuccessPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
