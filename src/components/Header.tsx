import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Globe, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"RU" | "EN">("RU");
  const location = useLocation();

  return (
    <header className="fixed top-[76px] left-0 right-0 z-[65] bg-card/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={`text-muted-foreground hover:text-foreground transition-colors text-sm ${location.pathname === '/' ? 'text-foreground font-medium' : ''}`}>
              Главная
            </Link>
            <Link to="/services" className={`text-muted-foreground hover:text-foreground transition-colors text-sm ${location.pathname === '/services' ? 'text-foreground font-medium' : ''}`}>
              Услуги
            </Link>
            <Link to="/cases" className={`text-muted-foreground hover:text-foreground transition-colors text-sm ${location.pathname === '/cases' ? 'text-foreground font-medium' : ''}`}>
              Кейсы
            </Link>
            <Link to="/about" className={`text-muted-foreground hover:text-foreground transition-colors text-sm ${location.pathname === '/about' ? 'text-foreground font-medium' : ''}`}>
              О компании
            </Link>
            <Link to="/contacts" className={`text-muted-foreground hover:text-foreground transition-colors text-sm ${location.pathname === '/contacts' ? 'text-foreground font-medium' : ''}`}>
              Контакты
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open("https://t.me/autodesk", "_blank")}
            >
              <MessageCircle className="w-4 h-4" />
              Telegram
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open("https://wa.me/79999999999", "_blank")}
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
            >
              <Globe className="w-4 h-4" />
              {language}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/' ? 'text-foreground font-medium' : ''}`}>
                Главная
              </Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/services' ? 'text-foreground font-medium' : ''}`}>
                Услуги
              </Link>
              <Link to="/cases" onClick={() => setIsMenuOpen(false)} className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/cases' ? 'text-foreground font-medium' : ''}`}>
                Кейсы
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/about' ? 'text-foreground font-medium' : ''}`}>
                О компании
              </Link>
              <Link to="/contacts" onClick={() => setIsMenuOpen(false)} className={`text-muted-foreground hover:text-foreground transition-colors ${location.pathname === '/contacts' ? 'text-foreground font-medium' : ''}`}>
                Контакты
              </Link>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open("https://t.me/autodesk", "_blank")}
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open("https://wa.me/79999999999", "_blank")}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
                >
                  <Globe className="w-4 h-4" />
                  {language}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}