import Logo from "@/components/Logo";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Привозим автомобили из-за границы под ключ. 
              На 20-40% дешевле, чем в России.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#audiences" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Для кого
                </a>
              </li>
              <li>
                <a href="#advantages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Возможности
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +7 (999) 999-99-99
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                info@auto-desk.ru
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                @autodesk
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Москва, Россия
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Режим работы</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <span className="text-sm text-foreground font-medium">Работаем 24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Менеджеры на связи круглосуточно
              </p>
              <p className="text-sm text-muted-foreground">
                Консультации в любое время
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Auto-Desk. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}