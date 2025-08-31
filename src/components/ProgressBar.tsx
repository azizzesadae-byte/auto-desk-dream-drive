import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Gift, Trophy, Sparkles, ChevronDown, Zap } from "lucide-react";
import { toast } from "sonner";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [phone, setPhone] = useState("");
  const [hasClaimedBonus, setHasClaimedBonus] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / documentHeight) * 100, 100);
      
      setScrollProgress(progress);
      
      // Show/hide based on scroll position
      setIsVisible(scrollTop < 100 || scrollTop > documentHeight - 100);
      
      if (progress >= 99 && !hasClaimedBonus && !localStorage.getItem("bonusClaimed")) {
        setShowBonus(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClaimedBonus]);

  const handleClaimBonus = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      toast.success("🎉 Поздравляем! Ваш бонус 100,000₽ активирован! Менеджер свяжется с вами в течение 5 минут.");
      setHasClaimedBonus(true);
      setShowBonus(false);
      localStorage.setItem("bonusClaimed", "true");
    }
  };

  return (
    <>
      <div className={`fixed top-20 left-0 right-0 z-45 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-gradient-to-r from-primary/90 via-primary-glow/90 to-primary/90 backdrop-blur-md shadow-lg border-b border-primary/30">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center gap-4">
              {/* Progress info */}
              <div className="hidden md:flex items-center gap-2">
                <Zap className="w-5 h-5 animate-pulse text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground whitespace-nowrap">
                  Изучите 100% сайта
                </span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-primary-foreground/90">
                    Прогресс изучения
                  </span>
                  <span className="text-sm font-bold text-primary-foreground">
                    {Math.round(scrollProgress)}%
                  </span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden border border-white/30">
                  <div 
                    className="h-full bg-gradient-to-r from-white to-primary-glow transition-all duration-300 relative"
                    style={{ width: `${scrollProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                    {scrollProgress > 10 && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full animate-ping" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-primary-foreground/70">Начало</span>
                  <span className="text-[10px] text-primary-foreground/70 font-bold">
                    Бонус 100,000₽ 🎁
                  </span>
                </div>
              </div>
              
              <div className={`transition-all duration-500 ${scrollProgress >= 99 ? 'scale-125 animate-bounce' : 'scale-100'}`}>
                <div className="relative">
                  <Trophy className={`w-8 h-8 ${scrollProgress >= 99 ? 'text-yellow-400' : 'text-primary-foreground/50'}`} />
                  {scrollProgress >= 99 && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                      <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hint arrow */}
        {scrollProgress < 10 && (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-primary animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </div>
        )}
      </div>

      <Dialog open={showBonus} onOpenChange={setShowBonus}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Trophy className="w-8 h-8 text-yellow-500 animate-pulse" />
              Поздравляем! Вы изучили 100% сайта!
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Вы получаете эксклюзивный бонус <span className="font-bold text-primary">100,000₽</span> на покупку автомобиля. 
              Это предложение действует только сегодня!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleClaimBonus} className="space-y-4 pt-4">
            <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-primary" />
                <span className="font-bold">Ваши бонусы:</span>
              </div>
              <ul className="space-y-1 text-sm">
                <li>✓ Скидка 100,000₽ на любой автомобиль</li>
                <li>✓ Бесплатная доставка до вашего города</li>
                <li>✓ VIP-статус в программе лояльности</li>
                <li>✓ Персональный менеджер 24/7</li>
              </ul>
            </div>
            <Input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="text-lg h-12"
            />
            <Button type="submit" className="w-full h-12 text-lg" size="lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Получить бонус 100,000₽
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с условиями акции
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProgressBar;