import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Gift, Sparkles, Calculator, Brain, Phone } from "lucide-react";
import { toast } from "sonner";
import QuizModal from "./QuizModal";
import CalculatorModal from "./CalculatorModal";

interface CTAMiniFormProps {
  variant?: "quiz" | "calculator" | "bonus" | "callback";
  title?: string;
  description?: string;
}

const CTAMiniForm = ({ variant = "bonus", title, description }: CTAMiniFormProps) => {
  const [phone, setPhone] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 2) return phoneNumber;
    if (phoneNumberLength < 5) {
      return `+7 (${phoneNumber.slice(1)}`;
    }
    if (phoneNumberLength < 8) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
    if (phoneNumberLength < 10) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    }
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length >= 11) {
      toast.success(
        variant === "bonus" 
          ? "🎉 Отлично! Ваш бонус активирован. Менеджер свяжется с вами в течение 5 минут!"
          : "✅ Спасибо! Мы перезвоним вам в течение 5 минут!"
      );
      setPhone("");
    } else {
      toast.error("Пожалуйста, введите корректный номер телефона");
    }
  };

  const variants = {
    quiz: {
      icon: <Brain className="w-8 h-8" />,
      defaultTitle: "Не знаете, какой автомобиль выбрать?",
      defaultDescription: "Пройдите квиз за 2 минуты и получите персональную подборку + скидку 50,000₽",
      buttonText: "Пройти квиз",
      color: "from-purple-500/20 to-blue-500/20",
      action: () => setShowQuiz(true)
    },
    calculator: {
      icon: <Calculator className="w-8 h-8" />,
      defaultTitle: "Рассчитайте экономию за 30 секунд",
      defaultDescription: "Узнайте точную стоимость с учетом всех расходов и вашу выгоду",
      buttonText: "Рассчитать",
      color: "from-green-500/20 to-emerald-500/20",
      action: () => setShowCalculator(true)
    },
    bonus: {
      icon: <Gift className="w-8 h-8" />,
      defaultTitle: "Специальное предложение только сегодня!",
      defaultDescription: "Оставьте заявку сейчас и получите скидку 75,000₽ + бесплатную доставку",
      buttonText: "Получить скидку",
      color: "from-red-500/20 to-orange-500/20",
      action: handleSubmit
    },
    callback: {
      icon: <Phone className="w-8 h-8" />,
      defaultTitle: "Есть вопросы? Мы перезвоним!",
      defaultDescription: "Оставьте номер, и эксперт проконсультирует вас за 5 минут",
      buttonText: "Жду звонка",
      color: "from-blue-500/20 to-purple-500/20",
      action: handleSubmit
    }
  };

  const currentVariant = variants[variant];

  if (variant === "quiz" || variant === "calculator") {
    return (
    <>
      <div className="relative py-12 my-12">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary-glow/5 to-primary/5 animate-pulse" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30" />
        </div>
          <div className="container mx-auto px-4 relative z-10">
            <Card className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.color} opacity-20`} />
              
              <div className="relative p-6">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="p-3 rounded-2xl bg-background/90 backdrop-blur-sm text-primary">
                    {currentVariant.icon}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                      {title || currentVariant.defaultTitle}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {description || currentVariant.defaultDescription}
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    onClick={currentVariant.action}
                    className="min-w-[180px] font-semibold"
                    data-variant={variant}
                    data-analytics="cta-mini-form"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {currentVariant.buttonText}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
        <CalculatorModal isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
      </>
    );
  }

  return (
    <div className="relative py-6 md:py-12 my-6 md:my-12">
      {/* Dynamic background based on variant */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${currentVariant.color} animate-pulse opacity-20`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzIxMjEyMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-50" />
      </div>
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <Card className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.color} opacity-30`} />
          
          <form onSubmit={handleSubmit} className="relative p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-3 rounded-2xl bg-background/90 backdrop-blur-sm text-primary">
                {currentVariant.icon}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                  {title || currentVariant.defaultTitle}
                </h3>
                <p className="text-base text-muted-foreground">
                  {description || currentVariant.defaultDescription}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="min-w-[200px] h-12"
                  required
                  maxLength={18}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="min-w-[150px] h-12 font-semibold"
                  data-cta-trigger={variant === "callback"}
                  data-variant={variant}
                  data-analytics="cta-mini-form"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {currentVariant.buttonText}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CTAMiniForm;