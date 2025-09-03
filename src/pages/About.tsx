import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExpertsSection from "@/components/ExpertsSection";
import OwnersClubSection from "@/components/OwnersClubSection";
import CharitySection from "@/components/CharitySection";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Award, Users, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "О компании Auto-Desk | Эксперты автомобильного рынка";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Auto-Desk - лидер в подборе и доставке автомобилей из Азии. Наша команда экспертов и социальная ответственность.');
    }
    
    // Track page visit for progress
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes('about')) {
      visitedPages.push('about');
      localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
      window.dispatchEvent(new Event('pageVisited'));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
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
            <span className="text-foreground font-medium">О компании</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            О компании Auto-Desk
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Более 10 лет опыта в подборе и доставке автомобилей премиум-класса из Азии
          </p>
          
          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <Award className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <Users className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">5000+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">15</div>
              <div className="text-sm text-muted-foreground">Стран поставки</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Гарантия качества</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contacts">
              <Button size="lg" className="group">
                Связаться с нами
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/cases">
              <Button variant="outline" size="lg">
                Наши кейсы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />
      <ExpertsSection />
      <OwnersClubSection />
      <CharitySection />
      
      {/* Navigation Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Узнайте больше</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/services" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Наши услуги</h3>
                <p className="text-sm text-muted-foreground">Процесс работы и гарантии</p>
              </div>
            </Link>
            <Link to="/cases" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Кейсы</h3>
                <p className="text-sm text-muted-foreground">Истории успешных сделок</p>
              </div>
            </Link>
            <Link to="/contacts" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Контакты</h3>
                <p className="text-sm text-muted-foreground">Начните сотрудничество</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;