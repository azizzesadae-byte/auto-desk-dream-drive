import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ChevronRight, Star, Sparkles, Check } from "lucide-react";
import davidychPhoto from "@/assets/davidych.jpg";
import QuizModal from "@/components/QuizModal";
import CalculatorModal from "@/components/CalculatorModal";

export default function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [showOffer, setShowOffer] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-luxury-cars-at-night-5659/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Popup Offer */}
      {showOffer && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-primary-glow p-4 rounded-lg shadow-glow flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
            <p className="text-primary-foreground font-medium">
              🔥 Экономьте до 40% – привезем авто дешевле, чем в РФ!
            </p>
            <Button
              variant="glass"
              size="sm"
              onClick={() => setIsQuizOpen(true)}
            >
              Узнать подробнее
            </Button>
            <button
              onClick={() => setShowOffer(false)}
              className="text-primary-foreground/70 hover:text-primary-foreground"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Premium Import Service</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Auto-Desk – авто из-за границы
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> под ключ</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              На 20–40% дешевле, чем в России. Эксклюзив из ОАЭ и Японии, 
              электрокары Tesla и ретро-авто – привезем любую машину вашей мечты. 
              Полная гарантия и никаких хлопот!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="cta"
                size="lg"
                className="group"
                onClick={() => setIsQuizOpen(true)}
              >
                <Sparkles className="w-5 h-5" />
                Подобрать авто под себя
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="group"
                onClick={() => setIsCalculatorOpen(true)}
              >
                <Calculator className="w-5 h-5" />
                Рассчитать стоимость
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                100% гарантия
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Без переплат
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Под ключ
              </div>
            </div>
          </div>

          {/* Right Content - Davidych Quote */}
          <div className="relative animate-slide-in-left">
            <div className="bg-card/80 backdrop-blur-md p-8 rounded-2xl border border-border shadow-elegant">
              <div className="flex items-start gap-6">
                <img
                  src={davidychPhoto}
                  alt="Эрик Давидыч"
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <Star className="w-5 h-5 text-accent fill-accent" />
                  </div>
                  <blockquote className="text-lg text-foreground mb-4 italic">
                    "Привезут тачку в идеале и без переплат! Ребята делают всё по красоте!"
                  </blockquote>
                  <div>
                    <p className="font-bold text-foreground">Эрик Давидыч</p>
                    <p className="text-sm text-muted-foreground">Автоэксперт и блогер</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent to-accent-glow rounded-full opacity-20 animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-primary-glow rounded-full opacity-10 animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Modals */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </section>
  );
}