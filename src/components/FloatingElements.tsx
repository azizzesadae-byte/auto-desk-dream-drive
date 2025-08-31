import { useEffect, useState } from "react";
import { X, Gift, Users, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FloatingElements = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    { name: "Александр из Москвы", action: "заказал Toyota Camry", time: "2 минуты назад" },
    { name: "Елена из СПб", action: "получила скидку 75,000₽", time: "5 минут назад" },
    { name: "Дмитрий из Казани", action: "забронировал Mercedes E-Class", time: "8 минут назад" },
    { name: "Марина из Сочи", action: "заказала подбор Tesla Model 3", time: "12 минут назад" },
    { name: "Игорь из Екатеринбурга", action: "получил консультацию", time: "15 минут назад" }
  ];

  useEffect(() => {
    // Show promo after 10 seconds
    const promoTimer = setTimeout(() => {
      setShowPromo(true);
    }, 10000);

    // Show notifications periodically
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
      }, 5000);
    }, 15000);

    return () => {
      clearTimeout(promoTimer);
      clearInterval(notificationInterval);
    };
  }, []);

  return (
    <>
      {/* Floating Promo Badge */}
      {showPromo && (
        <div className="fixed bottom-24 right-4 z-40 animate-bounce">
          <div className="relative">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-3 rounded-lg shadow-2xl max-w-xs">
              <button
                onClick={() => setShowPromo(false)}
                className="absolute -top-2 -right-2 bg-white text-gray-700 rounded-full p-1 shadow-lg hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 animate-pulse" />
                <div>
                  <p className="font-bold text-sm">Только сегодня!</p>
                  <p className="text-xs">Скидка 100,000₽ на первый заказ</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 right-4 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rotate-45" />
          </div>
        </div>
      )}

      {/* Live Notifications */}
      {showNotification && (
        <div className="fixed bottom-4 left-4 z-40 animate-slide-in-left">
          <div className="bg-white/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl p-4 max-w-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {notifications[currentNotification].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {notifications[currentNotification].action}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  {notifications[currentNotification].time}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-background/95 backdrop-blur-lg border-t">
        <div className="p-3 flex gap-2">
          <button
            onClick={() => {
              const phoneNumber = prompt("Введите ваш номер телефона:");
              if (phoneNumber) {
                toast({
                  title: "Отлично!",
                  description: "Менеджер свяжется с вами через 5 минут"
                });
              }
            }}
            className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Получить консультацию
          </button>
          <button
            onClick={() => document.getElementById('calculator-trigger')?.click()}
            className="flex-1 bg-primary-glow/20 text-primary py-3 px-4 rounded-lg font-medium text-sm hover:bg-primary-glow/30 transition-colors"
          >
            Рассчитать стоимость
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingElements;