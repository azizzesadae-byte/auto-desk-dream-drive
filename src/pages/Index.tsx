import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AudiencesSection from "@/components/AudiencesSection";
import PublicDealsSection from "@/components/PublicDealsSection";
import CTAMiniForm from "@/components/CTAMiniForm";
import MissionBlock from "@/components/MissionBlock";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import OverlayManager from "@/components/OverlayManager";
import LiveNotifications from "@/components/LiveNotifications";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Award, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Auto-Desk – Авто из-за границы под ключ | До 40% дешевле";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Auto-Desk – привезем автомобиль вашей мечты из Японии, США, ОАЭ, Европы. На 20-40% дешевле, чем в России. Полная гарантия, прозрачность, поддержка 24/7.');
    }
    
    // Track page visit for progress
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes('home')) {
      visitedPages.push('home');
      localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
      window.dispatchEvent(new Event('pageVisited'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <OverlayManager />
      <LiveNotifications />
      <ScrollToTop />
      <Header />
      <main>
        <HeroSection />
        <AudiencesSection />
        <CTAMiniForm />
        <PublicDealsSection />
        <MissionBlock />
        
        {/* Quick Navigation Section */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Изучите все разделы сайта</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Посетите все страницы для получения полной информации о наших услугах. 
              Прогресс изучения отображается вверху экрана.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link to="/services" className="group">
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <Briefcase className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Услуги и процесс
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Узнайте как мы работаем, наши преимущества и гарантии качества
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Изучить услуги
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link to="/cases" className="group">
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Кейсы и отзывы
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Реальные истории клиентов и успешные поставки автомобилей
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Смотреть кейсы
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link to="/about" className="group">
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    О компании
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Наша команда экспертов, достижения и социальная миссия
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Узнать больше
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link to="/contacts" className="group">
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                  <Phone className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Контакты и FAQ
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Свяжитесь с нами и получите ответы на все вопросы
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Связаться
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Готовы начать? Получите бесплатную консультацию прямо сейчас
              </p>
              <Button size="lg" className="text-lg px-8">
                Получить консультацию
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
