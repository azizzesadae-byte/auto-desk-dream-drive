import { 
  Shield,
  Camera,
  Globe,
  MessageCircle,
  Users,
  FileCheck,
  UserCheck,
  RefreshCw
} from "lucide-react";

const advantages = [
  {
    icon: RefreshCw,
    title: "100% возврат депозита",
    description: "Не рискуете деньгами – если привезенный автомобиль вам не понравится, мы полностью вернем ваш депозит без лишних вопросов.",
    highlight: true
  },
  {
    icon: Camera,
    title: "Фото- и видеоотчёты",
    description: "Полная прозрачность процесса. Вы будете получать фото и видео на каждом этапе – от покупки на аукционе до прибытия авто.",
  },
  {
    icon: Globe,
    title: "Доступ к мировым аукционам",
    description: "Прямой доступ к торгам в Японии, США, Корее, ОАЭ, Европе. Тысячи лотов каждую неделю.",
  },
  {
    icon: MessageCircle,
    title: "Трекинг через Telegram-бота",
    description: "Специальный Telegram-бот следит за вашей машиной 24/7. Мгновенные уведомления о каждом этапе доставки.",
  },
  {
    icon: Users,
    title: "Свой штат логистов и брокеров",
    description: "Опытные логисты и таможенные брокеры в штате. Никаких сторонних посредников, все под контролем Auto-Desk.",
  },
  {
    icon: FileCheck,
    title: "Без посредников – юридически чисто",
    description: "Работаем напрямую и прозрачно. Все документы оформляются на вас, 100% гарантия юридической чистоты.",
  },
  {
    icon: UserCheck,
    title: "Персональный менеджер 24/7",
    description: "За вами закреплен личный менеджер, который на связи круглосуточно. Звоните или пишите в любое время.",
  },
  {
    icon: Shield,
    title: "Полная гарантия качества",
    description: "Тщательная проверка каждого автомобиля перед покупкой. Гарантия на техническое состояние и документы.",
  }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Делаем процесс покупки авто из-за границы простым и безопасным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-card p-6 rounded-xl border ${
                advantage.highlight 
                  ? 'border-primary bg-gradient-to-br from-card via-card to-primary/10' 
                  : 'border-border hover:border-primary/50'
              } transition-all duration-300 hover:shadow-glow animate-scale-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {advantage.highlight && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    ГАРАНТИЯ
                  </div>
                </div>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {advantage.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}