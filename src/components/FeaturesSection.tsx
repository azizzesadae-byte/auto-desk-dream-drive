import { 
  Radio,
  User,
  Bot,
  MessageSquare,
  Trophy,
  Gift,
  BookOpen,
  TrendingUp,
  Sparkles,
  Heart,
  Car,
  Plane,
  Users2,
  CreditCard,
  Clock
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Live-трансляция с HD-камерой",
    description: "В каждый контейнер устанавливается 4G-модем с HD-камерой. Смотрите свой автомобиль в реальном времени, GPS-трекинг, датчики температуры и влажности.",
    badge: "LIVE"
  },
  {
    icon: User,
    title: "Личный кабинет с полным контролем",
    description: "Статус заказа, все документы, карта перемещения. Публичный трекер можно шерить в соцсетях - получайте бонусы за рефералов!",
    badge: "24/7"
  },
  {
    icon: Bot,
    title: "AI-консультант 'Архитектор'",
    description: "Lifestyle-интервью о вашем образе жизни. Предложим 2-3 идеальных варианта с анализом стоимости владения и ликвидности.",
    badge: "AI"
  },
  {
    icon: MessageSquare,
    title: "Telegram-консьерж от Давидыча",
    description: "VIP-услуга: Эрик Давидыч - ваш личный авто-ассистент. Поможет с выбором, проверкой истории и торгами на аукционе.",
    badge: "VIP"
  },
  {
    icon: Trophy,
    title: "50/50 на сторгованной сумме",
    description: "Уникальная схема: делим пополам всю сумму, которую удалось сторговать. Мы заинтересованы в максимальном торге больше вас!",
    badge: "WIN"
  },
  {
    icon: Gift,
    title: "Поездка в Корею в подарок",
    description: "При заказе авто от $50,000 дарим поездку в Корею! Посетите наш автосалон, выберите машину лично и отдохните.",
    badge: "🎁"
  },
  {
    icon: Heart,
    title: "Благотворительность",
    description: "Часть выручки направляем на помощь детям с онкологическими заболеваниями. Покупая авто, вы помогаете нуждающимся.",
    badge: "❤️"
  },
  {
    icon: TrendingUp,
    title: "Блог 'Что выбрал бы Булкин?'",
    description: "Булкин еженедельно выбирает интересную машину на аукционах и рассказывает, почему именно её стоит привезти.",
    badge: "HOT"
  },
  {
    icon: Sparkles,
    title: "ТОП-10 авто месяца",
    description: "Рейтинг самых популярных запросов клиентов. Узнайте тренды и на чем можно сэкономить, привозя из-за рубежа.",
    badge: "TOP"
  }
];

const premiumPrograms = [
  {
    icon: Car,
    title: "Подписка 'Фиксированное владение'",
    description: "Ежемесячная плата покрывает всё: ТО, расширенная гарантия, КАСКО, ОСАГО, замена шин, детейлинг. Никаких неожиданных расходов!",
    highlight: "Car as a Service"
  },
  {
    icon: Clock,
    title: "Пожизненный консьерж",
    description: "Один номер для решения любых проблем: запись на ТО, помощь при ДТП, поиск запчастей, консультации по тюнингу, помощь при продаже.",
    highlight: "Lifetime Support"
  },
  {
    icon: Users2,
    title: "Дробное владение суперкарами",
    description: "Формируем пул из 2-4 клиентов для совместной покупки суперкара. Мечта становится в 4 раза доступнее! Мы берем на себя всё оформление.",
    highlight: "Fractional Ownership"
  },
  {
    icon: CreditCard,
    title: "Финансовый щит",
    description: "Изменилась финансовая ситуация? Поможем перепродать авто еще во время доставки. Возврат средств минус небольшая комиссия.",
    highlight: "Защита инвестиций"
  },
  {
    icon: Plane,
    title: "Клуб владельцев 'Инсайдер'",
    description: "Консьерж по запчастям, сеть СТО со скидками, закрытые мероприятия, трек-дни, автопробеги. Превращаем владение в lifestyle!",
    highlight: "Exclusive Club"
  }
];

export default function FeaturesSection() {
  return (
    <>
      <section id="features" className="py-24 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Уникальные фишки{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Auto-Desk
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы сделали процесс подбора авто не только выгодным, но и увлекательным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute -top-3 -right-3">
                  <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Programs Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Премиальные программы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Эксклюзивные условия для самых требовательных клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {premiumPrograms.map((program, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card via-card to-primary/5 p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 left-4">
                  <div className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {program.highlight}
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mt-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}