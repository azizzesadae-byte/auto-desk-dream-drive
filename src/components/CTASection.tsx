import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Bot, 
  Clock,
  Send,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    carBrand: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в течение 5 минут");
    setFormData({
      name: "",
      phone: "",
      message: "",
      carBrand: "",
      budget: ""
    });
  };

  const handleCallback = () => {
    const phone = prompt("Введите ваш номер телефона:");
    if (phone) {
      toast.success("Мы перезвоним вам в течение 5 минут!");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Готовы найти свой{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              идеальный авто?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы готовы приступить к поиску прямо сейчас. Выберите удобный способ связи!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Quick Form */}
          <div className="bg-card p-8 rounded-2xl border border-border animate-slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Быстрая заявка за 5 минут
                </h3>
                <p className="text-sm text-muted-foreground">
                  Получите предложение с вариантами уже сегодня
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50"
              />
              <Input
                placeholder="Телефон"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background/50"
              />
              <Input
                placeholder="Марка авто (необязательно)"
                value={formData.carBrand}
                onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                className="bg-background/50"
              />
              <Input
                placeholder="Бюджет (необязательно)"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="bg-background/50"
              />
              <Textarea
                placeholder="Дополнительные пожелания (необязательно)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 min-h-[100px]"
              />
              <Button type="submit" variant="cta" size="lg" className="w-full group">
                <Send className="w-5 h-5" />
                Отправить заявку
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Options */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Messengers */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Мессенджеры онлайн
              </h3>
              <p className="text-muted-foreground mb-4">
                Напишите нам в чат – ответим мгновенно!
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open("https://t.me/autodesk", "_blank")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open("https://wa.me/79999999999", "_blank")}
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Telegram Bot */}
            <div className="bg-gradient-to-br from-card to-primary/10 p-6 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Telegram-бот Auto-Desk
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Запустите нашего бота и получите консультацию в автоматическом режиме. 
                    Отслеживайте статус заказа 24/7.
                  </p>
                  <Button
                    variant="cta"
                    size="sm"
                    onClick={() => window.open("https://t.me/autodesk_bot", "_blank")}
                  >
                    Запустить бота
                  </Button>
                </div>
              </div>
            </div>

            {/* Callback */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Обратный звонок
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Оставьте свой номер – перезвоним в течение 5 минут (даже ночью, сервис 24/7)
                  </p>
                  <Button
                    variant="premium"
                    size="sm"
                    onClick={handleCallback}
                  >
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}