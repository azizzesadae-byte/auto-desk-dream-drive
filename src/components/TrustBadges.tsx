import React from "react";
import { Shield, Award, CheckCircle, Star, Lock, Zap } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: <Shield className="w-6 h-6" />, text: "Эскроу-счет в РФ", detail: "Безопасная оплата" },
    { icon: <Award className="w-6 h-6" />, text: "Price-Lock 30 дней", detail: "Фиксация цены" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Double-check 240", detail: "2 эксперта" },
    { icon: <Star className="w-6 h-6" />, text: "Возврат 85%", detail: "Через 12 месяцев" },
    { icon: <Lock className="w-6 h-6" />, text: "LegalShield 360", detail: "Юр. защита" },
    { icon: <Zap className="w-6 h-6" />, text: "SLA +1%", detail: "За каждую неделю" }
  ];

  return (
    <div className="py-4 md:py-8 bg-gradient-to-r from-primary/5 via-background to-primary-glow/5">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {React.cloneElement(badge.icon, { className: "w-4 h-4 md:w-5 md:h-5" })}
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-semibold">{badge.text}</span>
                {badge.detail && (
                  <span className="text-[10px] md:text-xs text-muted-foreground">{badge.detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;