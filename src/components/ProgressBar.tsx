import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Gift, Trophy, Sparkles, ChevronDown, Zap, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [phone, setPhone] = useState("");
  const [hasClaimedBonus, setHasClaimedBonus] = useState(() => {
    return localStorage.getItem("bonusClaimed") === "true";
  });
  const [isVisible, setIsVisible] = useState(true);
  const [hasShownPopup, setHasShownPopup] = useState(false);

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
      
      // Show bonus popup only once when reaching 99% for the first time
      if (progress >= 99 && !hasClaimedBonus && !hasShownPopup && !localStorage.getItem("bonusClaimed")) {
        setShowBonus(true);
        setHasShownPopup(true);
      }
      
      ticking = false;
    };
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
  }, [hasClaimedBonus, hasShownPopup]);

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
      {/* Progress bar with enhanced visibility */}
      <div className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Enhanced progress bar */}
        <div className="h-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-500 relative"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
          {/* Pulsing end indicator */}
          {scrollProgress > 0 && scrollProgress < 100 && (
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white/50 animate-pulse shadow-glow"
              style={{ left: `${scrollProgress}%`, transform: 'translateX(-50%)' }}
            />
          )}
        </div>
        
        {/* Enhanced info bar */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary-glow/10 backdrop-blur-md border-b-2 border-primary/30 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full animate-pulse-glow">
                  <span className="text-sm font-bold text-primary">ПРОГРЕСС:</span>
                  <span className="text-lg font-black text-primary bg-white/90 px-2 rounded">{Math.round(scrollProgress)}%</span>
                </div>
              </div>
              
              {scrollProgress < 99 ? (
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary animate-bounce" />
                  <span className="text-sm font-medium text-foreground">
                    Изучите весь сайт → <span className="font-bold text-primary">бонус 100,000₽</span>
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-1 rounded-full animate-pulse">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-base font-black text-yellow-600">
                    БОНУС 100,000₽ РАЗБЛОКИРОВАН!
                  </span>
                  <Sparkles className="w-5 h-5 text-yellow-500 animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showBonus} onOpenChange={(open) => {
        // Allow closing the dialog but don't show it again
        if (!open) {
          setShowBonus(false);
        }
      }}>
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto">
          <DialogHeader className="pr-10">
            <DialogTitle className="flex items-center gap-2 text-xl md:text-2xl">
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