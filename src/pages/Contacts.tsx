import { useEffect } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ReferralSection from "@/components/ReferralSection";
import { Button } from "@/components/ui/button";
import { Home, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Contacts = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Контакты и FAQ | Auto-Desk";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Свяжитесь с Auto-Desk для консультации по подбору автомобиля. Ответы на часто задаваемые вопросы.');
    }
    
    // Track page visit for progress
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    if (!visitedPages.includes('contacts')) {
      visitedPages.push('contacts');
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
            <span className="text-foreground font-medium">Контакты</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Мы всегда на связи и готовы ответить на все ваши вопросы о подборе автомобиля
          </p>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <a href="tel:+79999999999" className="text-primary hover:underline">+7 (999) 999-99-99</a>
              <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@auto-desk.ru" className="text-primary hover:underline">info@auto-desk.ru</a>
              <p className="text-sm text-muted-foreground mt-1">Ответим в течение 2 часов</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
              <MessageCircle className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Мессенджеры</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">WhatsApp</Button>
                <Button size="sm" variant="outline">Telegram</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Онлайн 24/7</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Офис</h3>
              <p className="text-sm">Москва, ул. Примерная, 123</p>
              <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 10:00-19:00</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <FAQSection />
      <ReferralSection />
      
      {/* Navigation Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Изучите наш сайт полностью</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/services" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Услуги</h3>
                <p className="text-sm text-muted-foreground">Как мы работаем</p>
              </div>
            </Link>
            <Link to="/cases" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Кейсы</h3>
                <p className="text-sm text-muted-foreground">Успешные поставки</p>
              </div>
            </Link>
            <Link to="/about" className="group">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">О компании</h3>
                <p className="text-sm text-muted-foreground">Наша команда и миссия</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacts;