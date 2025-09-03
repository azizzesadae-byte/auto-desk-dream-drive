import { useEffect } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import CasesSection from "@/components/CasesSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Кейсы и отзывы клиентов | Auto-Desk";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Реальные истории успеха наших клиентов. Отзывы о покупке автомобилей из Кореи, ОАЭ и Китая через Auto-Desk.');
    }
    
    // Track page visit for progress
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes('cases')) {
      visitedPages.push('cases');
      localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
      window.dispatchEvent(new Event('pageVisited'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              Главная
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Кейсы и отзывы</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Истории успеха наших клиентов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Более 5000 довольных клиентов уже получили свои автомобили мечты
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <Button size="lg" className="group">
                О компании
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Наши услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />
      <CasesSection />
      <VideoSection />
      <ReviewsSection />
      
      {/* Navigation Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Продолжить изучение</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/services" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Услуги</h3>
                <p className="text-sm text-muted-foreground">Полный спектр наших услуг</p>
              </div>
            </Link>
            <Link to="/about" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">О компании</h3>
                <p className="text-sm text-muted-foreground">Познакомьтесь с нашей командой</p>
              </div>
            </Link>
            <Link to="/contacts" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Контакты и FAQ</h3>
                <p className="text-sm text-muted-foreground">Ответы на все вопросы</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cases;