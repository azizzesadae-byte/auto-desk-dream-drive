import { useEffect } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Услуги и процесс работы | Auto-Desk";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полный спектр услуг по подбору и доставке автомобилей из Кореи, ОАЭ и Китая. Узнайте о нашем процессе работы и преимуществах.');
    }
    
    // Track page visit for progress
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes('services')) {
      visitedPages.push('services');
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
            <span className="text-foreground font-medium">Услуги</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Наши услуги и процесс работы
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Комплексный подход к подбору и доставке автомобилей с гарантией качества на каждом этапе
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/cases">
              <Button size="lg" className="group">
                Посмотреть кейсы
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                О компании
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ProcessSection />
      <AdvantagesSection />
      <GuaranteesSection />
      
      {/* Navigation Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Изучите другие разделы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/cases" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Кейсы и отзывы</h3>
                <p className="text-sm text-muted-foreground">Реальные истории наших клиентов</p>
              </div>
            </Link>
            <Link to="/about" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">О компании</h3>
                <p className="text-sm text-muted-foreground">Наша команда и экспертность</p>
              </div>
            </Link>
            <Link to="/contacts" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Контакты</h3>
                <p className="text-sm text-muted-foreground">Свяжитесь с нами для консультации</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;