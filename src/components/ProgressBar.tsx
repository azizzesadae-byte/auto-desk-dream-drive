import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Gift, Trophy, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBonus, setShowBonus] = useState(false);
  const [phone, setPhone] = useState("");
  const [hasClaimedBonus, setHasClaimedBonus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / documentHeight) * 100, 100);
      
      setScrollProgress(progress);
      
      if (progress >= 99 && !hasClaimedBonus) {
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium">
                  Изучите сайт на 100% и получите бонус 100,000₽
                </span>
                <span className="text-xs font-bold text-primary">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 relative"
                  style={{ width: `${scrollProgress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
            {scrollProgress >= 99 && (
              <div className="animate-bounce">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showBonus} onOpenChange={setShowBonus}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Gift className="w-6 h-6 text-primary animate-pulse" />
              Поздравляем! Вы изучили 100% сайта!
            </DialogTitle>
            <DialogDescription>
              Вы получаете эксклюзивный бонус 100,000₽ на покупку автомобиля. 
              Оставьте свой номер телефона, чтобы активировать бонус.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleClaimBonus} className="space-y-4">
            <Input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" size="lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Получить бонус 100,000₽
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProgressBar;