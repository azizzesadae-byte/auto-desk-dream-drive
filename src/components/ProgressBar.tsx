import { useEffect, useState, useCallback } from "react";
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

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / documentHeight) * 100, 100);
      
      setScrollProgress(progress);
      setIsVisible(true);
      
      if (progress >= 99 && !hasClaimedBonus && !localStorage.getItem("bonusClaimed")) {
        setShowBonus(true);
      }
      
      ticking = false;
    };
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
  }, [hasClaimedBonus]);

  useEffect(() => {
    const scrollHandler = handleScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    scrollHandler(); // Initial call

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  const handleClaimBonus = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      toast.success("🎉 Поздравляем! Ваш бонус 100,000₽ активирован! Менеджер свяжется с вами в течение 5 минут.");
      setHasClaimedBonus(true);
      setShowBonus(false);
      localStorage.setItem("bonusClaimed", "true");
    }
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      {/* Progress bar with proper positioning */}
      <div className={`fixed top-16 left-0 right-0 z-[45] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-1 bg-primary/20">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Compact info bar */}
        <div className="bg-background/95 backdrop-blur-sm border-b border-border py-1">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Прогресс:</span>
                <span className="text-xs font-bold text-primary">{Math.round(scrollProgress)}%</span>
              </div>
              
              {scrollProgress < 99 ? (
                <span className="text-xs text-muted-foreground">
                  Изучите весь сайт и получите бонус 100,000₽
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500 animate-pulse" />
                  <span className="text-xs font-bold text-primary">
                    Бонус доступен!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
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