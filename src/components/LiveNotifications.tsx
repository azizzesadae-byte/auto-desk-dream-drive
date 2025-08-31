import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  Calculator, 
  FileSearch, 
  Phone, 
  Trophy, 
  TrendingUp, 
  Users, 
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Gift,
  Shield,
  Zap
} from "lucide-react";
import { toast } from "sonner";

interface Notification {
  id: string;
  type: "order" | "calculation" | "quiz" | "call" | "review" | "bonus" | "referral";
  message: string;
  location?: string;
  icon: React.ElementType;
  color: string;
  time: string;
}

const LiveNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  // Разнообразные уведомления для создания активности
  const notifications: Notification[] = [
    {
      id: "1",
      type: "order",
      message: "Александр из Москвы заказал BMW X5 из Японии",
      location: "Москва",
      icon: Car,
      color: "text-primary",
      time: "только что"
    },
    {
      id: "2",
      type: "calculation",
      message: "Мария рассчитала стоимость Tesla Model 3",
      location: "Санкт-Петербург",
      icon: Calculator,
      color: "text-blue-500",
      time: "1 мин назад"
    },
    {
      id: "3",
      type: "quiz",
      message: "Дмитрий получил персональную подборку авто",
      location: "Екатеринбург",
      icon: Trophy,
      color: "text-yellow-500",
      time: "2 мин назад"
    },
    {
      id: "4",
      type: "order",
      message: "Елена оформила заявку на Mercedes GLE из ОАЭ",
      location: "Новосибирск",
      icon: Car,
      color: "text-primary",
      time: "3 мин назад"
    },
    {
      id: "5",
      type: "call",
      message: "Игорь заказал обратный звонок менеджера",
      location: "Казань",
      icon: Phone,
      color: "text-green-500",
      time: "только что"
    },
    {
      id: "6",
      type: "review",
      message: "Сергей оставил 5★ отзыв о доставке Lexus RX",
      location: "Ростов-на-Дону",
      icon: Star,
      color: "text-yellow-500",
      time: "4 мин назад"
    },
    {
      id: "7",
      type: "bonus",
      message: "Анна активировала бонус 100,000₽ на первый заказ",
      location: "Краснодар",
      icon: Gift,
      color: "text-purple-500",
      time: "1 мин назад"
    },
    {
      id: "8",
      type: "order",
      message: "Павел заказал Porsche Cayenne из Европы",
      location: "Сочи",
      icon: Car,
      color: "text-primary",
      time: "только что"
    },
    {
      id: "9",
      type: "referral",
      message: "Ольга пригласила друга и получила 50,000₽",
      location: "Самара",
      icon: Users,
      color: "text-indigo-500",
      time: "2 мин назад"
    },
    {
      id: "10",
      type: "order",
      message: "Михаил забронировал Toyota Land Cruiser из Японии",
      location: "Уфа",
      icon: Car,
      color: "text-primary",
      time: "только что"
    },
    {
      id: "11",
      type: "calculation",
      message: "Виктория узнала экономию на Audi Q7 - 850,000₽",
      location: "Пермь",
      icon: TrendingUp,
      color: "text-green-500",
      time: "3 мин назад"
    },
    {
      id: "12",
      type: "quiz",
      message: "Андрей прошел тест и выбрал электромобиль",
      location: "Воронеж",
      icon: Zap,
      color: "text-blue-500",
      time: "1 мин назад"
    },
    {
      id: "13",
      type: "order",
      message: "Наталья оформила заказ на Range Rover из ОАЭ",
      location: "Челябинск",
      icon: Car,
      color: "text-primary",
      time: "только что"
    },
    {
      id: "14",
      type: "review",
      message: "Владимир: «Сэкономил 1.2 млн на Mercedes S-Class!»",
      location: "Омск",
      icon: CheckCircle,
      color: "text-green-500",
      time: "5 мин назад"
    },
    {
      id: "15",
      type: "bonus",
      message: "Екатерина использовала скидку для постоянных клиентов",
      location: "Тюмень",
      icon: Shield,
      color: "text-indigo-500",
      time: "2 мин назад"
    }
  ];

  useEffect(() => {
    // Начальная задержка перед показом первого уведомления
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setCurrentNotification(notifications[0]);
    }, 8000); // Первое уведомление через 8 секунд

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      // Скрываем текущее уведомление
      setCurrentNotification(null);
      
      // Через небольшую паузу показываем следующее
      setTimeout(() => {
        const nextIndex = (notificationIndex + 1) % notifications.length;
        setNotificationIndex(nextIndex);
        setCurrentNotification(notifications[nextIndex]);
      }, 500);
    }, 12000); // Показываем каждое уведомление 12 секунд

    return () => clearInterval(interval);
  }, [isVisible, notificationIndex]);

  // Не показываем уведомления на мобильных устройствах с маленьким экраном
  const isMobile = window.innerWidth < 640;
  if (isMobile) return null;

  return (
    <AnimatePresence>
      {currentNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 z-40 max-w-sm"
        >
          <div className="bg-card/95 backdrop-blur-lg border border-border rounded-lg shadow-2xl p-4 cursor-pointer hover:scale-105 transition-transform"
               onClick={() => {
                 // При клике можно показать соответствующую секцию
                 if (currentNotification.type === "order" || currentNotification.type === "calculation") {
                   document.getElementById('calculator-trigger')?.click();
                 } else if (currentNotification.type === "quiz") {
                   document.getElementById('quiz-trigger')?.click();
                 }
               }}>
            <div className="flex items-start gap-3">
              {/* Иконка с анимацией */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className={`relative w-10 h-10 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center ${currentNotification.color}`}>
                  <currentNotification.icon className="w-5 h-5" />
                </div>
              </div>
              
              {/* Контент */}
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground leading-tight">
                  {currentNotification.message}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  {currentNotification.location && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {currentNotification.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {currentNotification.time}
                  </span>
                </div>
              </div>

              {/* Индикатор активности */}
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Прогресс бар для оставшегося времени */}
            <div className="mt-3 h-0.5 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 11, ease: "linear" }}
                className="h-full bg-primary/50"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiveNotifications;