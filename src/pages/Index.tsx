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
        
        <CTAMiniForm 
          variant="quiz" 
          title="🎯 Не знаете какой автомобиль выбрать?"
          description="Пройдите тест за 2 минуты и получите персональную подборку + скидку 50,000₽"
        />
        
        <AudiencesSection />
        
        <StatsSection />
        
        <CTAMiniForm 
          variant="calculator"
          title="💰 Узнайте точную экономию за 30 секунд"
          description="Рассчитаем полную стоимость с учетом всех расходов и покажем вашу выгоду"
        />
        
        <AdvantagesSection />
        
        <CTAMiniForm 
          variant="bonus"
          title="🔥 Горячее предложение дня!"
          description="Только сегодня: скидка 75,000₽ + бесплатная доставка для первых 10 клиентов"
        />
        
        <CasesSection />
        
        <CTAMiniForm 
          variant="callback"
          title="📞 Остались вопросы?"
          description="Эксперт перезвонит через 5 минут и расскажет все подробности"
        />
        
        <ProcessSection />
        
        <CTAMiniForm 
          variant="bonus"
          title="🎁 Специальный бонус для новых клиентов"
          description="Закажите подбор авто сейчас и получите год бесплатного обслуживания"
        />
        
        <GuaranteesSection />
        
        <CTAMiniForm 
          variant="quiz"
          title="🚗 Подберем идеальный автомобиль под ваш бюджет"
          description="Ответьте на 5 вопросов и получите 3 лучших варианта с расчетом экономии"
        />
        
        <ReviewsSection />
        
        <CTAMiniForm 
          variant="calculator"
          title="📊 Сравните цены: Россия vs Импорт"
          description="Покажем реальную разницу в ценах и сроки доставки"
        />
        
        <VideoSection />
        
        <CTAMiniForm 
          variant="bonus"
          title="⚡ Последнее предложение месяца"
          description="Успейте до конца декабря: скидка 100,000₽ + страховка в подарок"
        />
        
        <FAQSection />
        
        <CTAMiniForm 
          variant="callback"
          title="💬 Персональная консультация эксперта"
          description="Обсудим ваши пожелания и подберем оптимальное решение"
        />
        
        <FeaturesSection />
        
        <CTAMiniForm 
          variant="quiz"
          title="🏆 Узнайте, какая программа подходит именно вам"
          description="Тест поможет выбрать между стандартным подбором, VIP-сервисом или клубным членством"
        />
        
        <ReferralSection />
        
        <CTAMiniForm 
          variant="bonus"
          title="🤝 Приведите друга - получите 50,000₽"
          description="Рекомендуйте нас друзьям и получайте бонусы за каждого нового клиента"
        />
        
        <CharitySection />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
