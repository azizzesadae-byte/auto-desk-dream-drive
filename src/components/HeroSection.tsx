import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Play, ChevronRight, Shield, TrendingDown, Clock, Star, Car, Gift, DollarSign, Zap } from "lucide-react";
import davidych from "@/assets/davidych.jpg";
import QuizModal from "@/components/QuizModal";
import CalculatorModal from "@/components/CalculatorModal";
import CountdownTimer from "@/components/CountdownTimer";

export default function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "$105,969,750", label: "сэкономлено клиентам по всему миру", icon: DollarSign },
    { value: "50/50", label: "делим сторгованное пополам", icon: Gift },
    { value: "85%", label: "гарантированный выкуп через год", icon: TrendingDown },
    { value: "45+", label: "брендов несмотря на санкции", icon: Shield }
  ];


  return (
    <section className="relative min-h-screen md:min-h-screen min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 md:pt-24">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2019/11/18/29544-374055843_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            {/* Special Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-pulse-glow">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-sm font-medium">
                Работаем несмотря на санкции ЕС
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-foreground mb-6 leading-tight">
              Price-Lock 30:{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                фиксируем цену и курс
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
              Перерасход = за наш счёт • SLA +1% за каждую неделю
            </p>

            {/* Top 3 Killer Features Only */}
            <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="flex items-center gap-3 bg-primary/10 border-primary/30 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border">
                <Shield className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground font-medium">
                  Эскроу-счет в РФ: полная защита средств
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 border-primary/30 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border">
                <TrendingDown className="w-5 md:w-6 h-5 md:h-6 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground font-medium">
                  Возврат 85% через год: гарантированный выкуп
                </span>
              </div>
              <div className="flex items-center gap-3 bg-card/50 border-border/50 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border">
                <Gift className="w-5 md:w-6 h-5 md:h-6 text-muted-foreground flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground">
                  50/50: делим сторгованное пополам
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                onClick={() => setIsQuizOpen(true)}
              >
                <span className="hidden sm:inline">Получить 5 вариантов за 60 минут</span>
                <span className="sm:hidden">Получить 5 вариантов</span>
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
                onClick={() => setIsCalculatorOpen(true)}
              >
                <span className="hidden sm:inline">Узнать финальную цену под ключ</span>
                <span className="sm:hidden">Узнать цену под ключ</span>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="flex items-center gap-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center animate-pulse-glow">
                  {(() => {
                    const IconComponent = stats[currentStat].icon;
                    return <IconComponent className="w-7 h-7 text-primary" />;
                  })()}
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stats[currentStat].value}</div>
                  <div className="text-xs text-muted-foreground">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Davidych Card */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="bg-card/90 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-primary/30 shadow-glow">
              <div className="flex items-start gap-4">
                <img
                  src={davidych}
                  alt="Эрик Давидыч"
                  className="w-24 h-24 rounded-full border-4 border-primary object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-foreground">Эрик Давидыч</span>
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                      Рекомендует
                    </span>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Привезут тачку в идеале и без переплат! Ребята делают всё по красоте, им можно доверять!"
                  </p>
                  <button
                    onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-3 flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Смотреть видео</span>
                  </button>
                </div>
              </div>

              {/* Special Offers */}
              <div className="mt-4 p-3 md:p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-foreground">Эксклюзивные условия:</span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full animate-pulse">
                    Только сегодня
                  </span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Бесплатная проверка по VIN
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Видеоотчет с аукциона
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Telegram-консьерж от Давидыча
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-card/60 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Возврат депозита</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold text-primary">6 мес</div>
                <div className="text-xs text-muted-foreground">Гарантия</div>
              </div>
              <div className="bg-card/60 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                <div className="text-lg font-bold text-primary">45-60</div>
                <div className="text-xs text-muted-foreground">Дней доставка</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed popup offer to prevent overlapping */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Листайте вниз</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Hidden triggers for modals */}
      <button id="quiz-trigger" className="hidden" onClick={() => setIsQuizOpen(true)} />
      <button id="calculator-trigger" className="hidden" onClick={() => setIsCalculatorOpen(true)} />

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </section>
  );
}