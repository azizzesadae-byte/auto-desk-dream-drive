import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudiencesSection from "@/components/AudiencesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CasesSection from "@/components/CasesSection";
import CharitySection from "@/components/CharitySection";
import ReferralSection from "@/components/ReferralSection";
import CTAMiniForm from "@/components/CTAMiniForm";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import OverlayManager from "@/components/OverlayManager";
import StatsSection from "@/components/StatsSection";
import TrustBadges from "@/components/TrustBadges";
import ScrollToTop from "@/components/ScrollToTop";
import ExpertsSection from "@/components/ExpertsSection";
import PublicDealsSection from "@/components/PublicDealsSection";
import OwnersClubSection from "@/components/OwnersClubSection";

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Auto-Desk – Авто из-за границы под ключ | До 40% дешевле";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Auto-Desk – привезем автомобиль вашей мечты из Японии, США, ОАЭ, Европы. На 20-40% дешевле, чем в России. Полная гарантия, прозрачность, поддержка 24/7.');
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Auto-Desk – Авто из-за границы под ключ');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Привезем автомобиль вашей мечты на 20-40% дешевле. Эксклюзив из ОАЭ и Японии, электрокары Tesla, ретро-авто.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <OverlayManager />
      <ScrollToTop />
      <Header />
      <main>
        <HeroSection />
        
        <TrustBadges />
        
        <PublicDealsSection />
        
        <CTAMiniForm 
          variant="quiz" 
          title="🎯 Не знаете, какой автомобиль выбрать?"
          description="Пройдите тест и получите персональную подборку"
        />
        
        <ExpertsSection />
        
        <AudiencesSection />
        
        <StatsSection />
        
        <CTAMiniForm 
          variant="calculator"
          title="💰 Рассчитайте вашу экономию"
          description="Точная стоимость с учетом всех расходов"
        />
        
        <AdvantagesSection />
        
        <OwnersClubSection />
        
        <CasesSection />
        
        <ProcessSection />
        
        <GuaranteesSection />
        
        <ReviewsSection />
        
        <VideoSection />
        
        <FAQSection />
        
        <FeaturesSection />
        
        <ReferralSection />
        
        <CharitySection />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
