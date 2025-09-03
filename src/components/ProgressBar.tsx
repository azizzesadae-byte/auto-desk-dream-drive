import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Gift, Trophy, Sparkles, CheckCircle2, Circle } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

const ProgressBar = () => {
  const location = useLocation();
  const [pageProgress, setPageProgress] = useState(0);
  const [visitedPages, setVisitedPages] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('visitedPages') || '[]');
  });
  const [showBonus, setShowBonus] = useState(false);
  const [phone, setPhone] = useState("");
  const [hasClaimedBonus, setHasClaimedBonus] = useState(() => {
    return localStorage.getItem("bonusClaimed") === "true";
  });
  const [hasShownPopup, setHasShownPopup] = useState(false);
  
  const totalPages = 5; // home, services, cases, about, contacts
  const pages = [
    { id: 'home', name: 'Главная', path: '/' },
    { id: 'services', name: 'Услуги', path: '/services' },
    { id: 'cases', name: 'Кейсы', path: '/cases' },
    { id: 'about', name: 'О компании', path: '/about' },
    { id: 'contacts', name: 'Контакты', path: '/contacts' },
  ];

  // Update progress based on visited pages
  useEffect(() => {
    const handlePageVisited = () => {
      const updatedVisitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
      setVisitedPages(updatedVisitedPages);
      const progress = (updatedVisitedPages.length / totalPages) * 100;
      setPageProgress(progress);
      
      // Show bonus when all pages are visited
      if (progress === 100 && !hasClaimedBonus && !hasShownPopup) {
        setShowBonus(true);
        setHasShownPopup(true);
      }
    };
    
    // Initial calculation
    handlePageVisited();
    
    // Listen for page visit events
    window.addEventListener('pageVisited', handlePageVisited);
    
    return () => window.removeEventListener('pageVisited', handlePageVisited);
  }, [hasClaimedBonus, hasShownPopup]);

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
      {/* Progress bar with page tracking */}
      <div className="fixed top-0 left-0 right-0 z-[70] transition-all duration-300">
        {/* Progress bar */}
        <div className="h-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary transition-all duration-500 relative"
            style={{ width: `${pageProgress}%` }}
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
        
        {/* Info bar with page indicators */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary-glow/10 backdrop-blur-md border-b-2 border-primary/30 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Progress indicator */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-primary">ПРОГРЕСС:</span>
                  <span className="text-lg font-black text-primary bg-white/90 px-2 rounded">{Math.round(pageProgress)}%</span>
                </div>
                
                {/* Page indicators */}
                <div className="hidden md:flex items-center gap-2">
                  {pages.map((page) => (
                    <div key={page.id} className="flex items-center gap-1">
                      {visitedPages.includes(page.id) ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground" />
                      )}
                      <span className={`text-xs ${visitedPages.includes(page.id) ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {page.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bonus indicator */}
              {pageProgress < 100 ? (
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary animate-bounce" />
                  <span className="text-sm font-medium text-foreground">
                    Изучите все разделы → <span className="font-bold text-primary">бонус 100,000₽</span>
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
              Вы изучили все разделы сайта и получаете эксклюзивный бонус <span className="font-bold text-primary">100,000₽</span> на покупку автомобиля. 
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