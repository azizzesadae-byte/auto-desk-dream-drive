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
import Footer from "@/components/Footer";

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
      <Header />
      <main>
        <HeroSection />
        <AudiencesSection />
        <AdvantagesSection />
        <ProcessSection />
        <GuaranteesSection />
        <ReviewsSection />
        <VideoSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
