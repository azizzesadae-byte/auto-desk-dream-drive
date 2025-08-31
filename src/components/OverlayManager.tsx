import { useEffect, useState } from "react";
import { X, Gift, Star, Percent, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface OverlayItem {
  id: string;
  content: React.ReactNode;
  priority: number;
  delay: number;
  duration?: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
}

const OverlayManager = () => {
  const [activeOverlays, setActiveOverlays] = useState<string[]>([]);
  const [dismissedOverlays, setDismissedOverlays] = useState<string[]>(() => {
    const stored = localStorage.getItem("dismissedOverlays");
    return stored ? JSON.parse(stored) : [];
  });

  const overlays: OverlayItem[] = [
    {
      id: "promo",
      priority: 1,
      delay: 3000,
      position: "top-left",
      content: (
        <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground p-4 rounded-lg shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="w-5 h-5" />
            <span className="font-bold">Только сегодня!</span>
          </div>
          <p className="text-sm mb-3">Скидка 100,000₽ на первый заказ</p>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={() => {
              const ctaButton = document.querySelector('[data-cta-trigger]') as HTMLElement;
              if (ctaButton) ctaButton.click();
              handleDismiss("promo");
            }}
          >
            Получить скидку
          </Button>
        </div>
      ),
    },
    {
      id: "video-review",
      priority: 2,
      delay: 15000,
      position: "bottom-right",
      content: (
        <div className="bg-card border border-border p-4 rounded-lg shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Video className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Видеоотзыв = скидка!</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Снимите видеоотзыв и получите 50,000₽ скидку
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => {
                toast.info("📹 Инструкции отправлены вам на WhatsApp!");
                handleDismiss("video-review");
              }}
            >
              Подробнее
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: "live-notification",
      priority: 3,
      delay: 8000,
      duration: 5000,
      position: "bottom-left",
      content: (
        <div className="bg-card/95 border border-border p-3 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Михаил из Москвы только что заказал Audi Q7
            </span>
          </div>
        </div>
      ),
    },
  ];

  const handleDismiss = (id: string) => {
    setActiveOverlays(prev => prev.filter(item => item !== id));
    const newDismissed = [...dismissedOverlays, id];
    setDismissedOverlays(newDismissed);
    localStorage.setItem("dismissedOverlays", JSON.stringify(newDismissed));
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    overlays
      .filter(overlay => !dismissedOverlays.includes(overlay.id))
      .sort((a, b) => a.priority - b.priority)
      .forEach((overlay, index) => {
        const adjustedDelay = overlay.delay + (index * 2000); // Stagger overlays
        
        const showTimer = setTimeout(() => {
          setActiveOverlays(prev => {
            if (prev.length >= 2) return prev; // Max 2 overlays at once
            return [...prev, overlay.id];
          });

          if (overlay.duration) {
            const hideTimer = setTimeout(() => {
              setActiveOverlays(prev => prev.filter(id => id !== overlay.id));
            }, overlay.duration);
            timers.push(hideTimer);
          }
        }, adjustedDelay);
        
        timers.push(showTimer);
      });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [dismissedOverlays]);

  const getPositionClasses = (position: OverlayItem["position"]) => {
    const base = "fixed z-[60] m-4 animate-fade-in";
    switch (position) {
      case "top-left": return `${base} top-20 left-0`;
      case "top-right": return `${base} top-20 right-0`;
      case "bottom-left": return `${base} bottom-24 md:bottom-4 left-0`;
      case "bottom-right": return `${base} bottom-24 md:bottom-4 right-0`;
      case "center": return `${base} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`;
    }
  };

  return (
    <>
      {overlays.map(overlay => 
        activeOverlays.includes(overlay.id) && (
          <div key={overlay.id} className={getPositionClasses(overlay.position)}>
            <div className="relative max-w-sm">
              {overlay.priority <= 2 && (
                <button
                  onClick={() => handleDismiss(overlay.id)}
                  className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-background/80 rounded-full flex items-center justify-center border border-border hover:bg-background transition-colors"
                  aria-label="Закрыть"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
              {overlay.content}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default OverlayManager;