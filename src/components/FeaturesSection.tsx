import { 
  Radio,
  User,
  Bot,
  MessageSquare,
  Trophy,
  Gift,
  BookOpen,
  TrendingUp,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Прямая трансляция аукционов",
    description: "Смотрите live-трансляции с автоаукционов в Японии и США. Почувствуйте азарт торгов в реальном времени!",
    badge: "LIVE"
  },
  {
    icon: User,
    title: "Личный кабинет и трекинг авто",
    description: "Полный статус заказа, этапы доставки, все документы и карта с перемещением вашей машины в пути.",
    badge: "24/7"
  },
  {
    icon: Bot,
    title: "AI-консультант по подбору",
    description: "Умный авто-бот Auto-Desk AI ответит на вопросы 24/7 и предложит оптимальные модели под ваш бюджет.",
    badge: "AI"
  },
  {
    icon: MessageSquare,
    title: "Персональный Telegram-консьерж от Давидыча",
    description: "Эксклюзивная VIP-услуга. Эрик Давидыч может стать вашим личным авто-ассистентом в Telegram!",
    badge: "VIP"
  },
  {
    icon: Trophy,
    title: "Квиз с розыгрышем бесплатного подбора",
    description: "Пройдите квиз и станьте участником розыгрыша! Каждый месяц дарим бесплатную услугу подбора авто.",
    badge: "🎁"
  },
  {
    icon: Gift,
    title: "Колесо удачи за подписку",
    description: "Подпишитесь на наш Telegram-канал и крутаните колесо фортуны. Приз или скидка гарантированы!",
    badge: "FUN"
  },
  {
    icon: BookOpen,
    title: "Рубрика «Провал недели»",
    description: "Каждую неделю разбор забавного провального кейса покупки авто. Учитесь на чужих ошибках!",
    badge: "NEW"
  },
  {
    icon: TrendingUp,
    title: "Блог «Что выбрал бы Булкин?»",
    description: "Булкин выбирает интересную машину на аукционах и рассказывает, почему именно ее он бы привез.",
    badge: "HOT"
  },
  {
    icon: Sparkles,
    title: "ТОП-10 авто месяца",
    description: "Ежемесячный рейтинг самых популярных запросов наших клиентов. Узнайте, какие машины в тренде!",
    badge: "TOP"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
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
  );
}