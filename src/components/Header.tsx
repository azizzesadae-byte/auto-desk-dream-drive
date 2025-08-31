import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Globe, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"RU" | "EN">("RU");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#audiences" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Для кого
            </a>
            <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Преимущества
            </a>
            <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Кейсы
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Как работаем
            </a>
            <a href="#guarantees" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Гарантии
            </a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Отзывы
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              FAQ
            </a>
            <a href="#referral" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Партнерам
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Контакты
            </a>
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
              <a href="#audiences" className="text-muted-foreground hover:text-foreground transition-colors">
                Для кого
              </a>
              <a href="#advantages" className="text-muted-foreground hover:text-foreground transition-colors">
                Преимущества
              </a>
              <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors">
                Кейсы
              </a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                Как работаем
              </a>
              <a href="#guarantees" className="text-muted-foreground hover:text-foreground transition-colors">
                Гарантии
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#referral" className="text-muted-foreground hover:text-foreground transition-colors">
                Партнерам
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
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