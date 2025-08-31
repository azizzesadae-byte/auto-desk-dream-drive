import { Crown, Users, Calendar, Shield, Gem, Gift, Car, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const clubTiers = [
  {
    name: "Silver",
    price: "Бесплатно",
    color: "border-gray-400",
    benefits: [
      "Доступ к закрытому чату владельцев",
      "База проверенных СТО",
      "Скидка 5% на запчасти",
      "Приглашения на встречи клуба"
    ]
  },
  {
    name: "Gold",
    price: "9,900₽/мес",
    color: "border-yellow-500",
    popular: true,
    benefits: [
      "Все преимущества Silver",
      "Персональный менеджер по запчастям",
      "Скидка 15% на запчасти",
      "Приоритетная поддержка 24/7",
      "Бесплатная диагностика 2 раза в год",
      "Участие в тест-драйвах"
    ]
  },
  {
    name: "Platinum",
    price: "29,900₽/мес",
    color: "border-purple-500",
    benefits: [
      "Все преимущества Gold",
      "Консьерж-сервис 24/7",
      "Скидка 25% на запчасти",
      "Бесплатное ТО раз в год",
      "VIP-встречи с экспертами",
      "Временный подменный автомобиль",
      "Гарантия выкупа 85%"
    ]
  }
];

const clubFeatures = [
  {
    icon: Users,
    title: "2,500+ участников",
    description: "Активное сообщество владельцев импортных авто"
  },
  {
    icon: Wrench,
    title: "150+ СТО партнеров",
    description: "Проверенные сервисы по всей России"
  },
  {
    icon: Calendar,
    title: "Ежемесячные встречи",
    description: "Автопробеги, трек-дни, мастер-классы"
  },
  {
    icon: Shield,
    title: "Пожизненная поддержка",
    description: "Помощь на всех этапах владения"
  }
];

export default function OwnersClubSection() {
  return (
    <section id="owners-club" className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <Crown className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Клуб владельцев "Инсайдер"</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Превратите владение в привилегию
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Покупка автомобиля — это начало долгосрочных отношений. 
            Мы заботимся о вас на протяжении всего срока владения
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clubFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {clubTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card rounded-2xl p-8 border-2 ${tier.color} ${
                tier.popular ? 'scale-105 shadow-glow' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1">
                    Популярный выбор
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-primary">{tier.price}</div>
                {tier.price !== "Бесплатно" && (
                  <p className="text-sm text-muted-foreground mt-1">при покупке авто</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Gem className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.popular
                    ? 'bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow'
                    : 'bg-primary/10 hover:bg-primary/20'
                }`}
                variant={tier.popular ? 'default' : 'outline'}
              >
                {tier.price === "Бесплатно" ? "Вступить бесплатно" : "Выбрать план"}
              </Button>
            </div>
          ))}
        </div>

        {/* Special Programs */}
        <div className="bg-card rounded-2xl p-8 border border-primary/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                Программа "Вечный Актив"
              </h3>
              <p className="text-muted-foreground mb-4">
                Гарантированный обратный выкуп вашего автомобиля через 3, 5 или 7 лет 
                по заранее известной формуле. Превратите автомобиль из пассива в инвестицию.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">85% от стоимости через 1 год</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">75% от стоимости через 3 года</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">65% от стоимости через 5 лет</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-primary" />
                Программа "Гараж Мечты"
              </h3>
              <p className="text-muted-foreground mb-4">
                Меняйте автомобили каждые 1-2 года по специальной программе trade-in 
                с минимальными потерями. Всегда на пике технологий!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Фиксированная формула trade-in</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Приоритет на новые модели</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Накопительные бонусы до 10%</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow"
              onClick={() => document.getElementById('quiz-trigger')?.click()}
            >
              Вступить в клуб с первой покупкой
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}