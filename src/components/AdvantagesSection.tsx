import { 
  Shield, 
  Camera, 
  Globe, 
  Bot, 
  Users, 
  CheckCircle2, 
  Clock,
  Building2,
  TrendingUp,
  Lock,
  Handshake,
  Award
} from "lucide-react";

const advantages = [
  {
    icon: Building2,
    title: "Официальные партнерства",
    description: "Прямые договоры с аукционами Copart, IAAI и Manheim. Собственные офисы в странах-источниках для личного осмотра автомобилей перед покупкой.",
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: Shield,
    title: "Price-Lock 30 с курсовым хеджем",
    description: "Финальная цена фиксируется на 30 дней, включая все сборы/СБКТС/ЭПТС. Мы хеджируем валютные риски - любой перерасход за наш счёт.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Camera,
    title: "Live-трансляция из контейнера",
    description: "В каждый контейнер устанавливается 4G-модем с HD-камерой. Смотрите свой автомобиль в режиме реального времени, GPS-трекинг и показатели датчиков.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Сеть партнерских оценщиков",
    description: "Собственная логистическая сеть и проверенные оценщики во всех регионах. Параллельный импорт позволяет официально ввозить 45+ брендов.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Lock,
    title: "LegalShield 360 + Escrow",
    description: "Полное сопровождение СБКТС/ЭПТС, страховка отказа регистрации. Расчёт через эскроу-счёт в рублях с поэтапным высвобождением средств.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Гарантия выкупа Buy-Back",
    description: "Выкупим привезенный автомобиль обратно в течение 12 месяцев по фиксированной цене 85% от стоимости 'под ключ'. Ваша инвестиция защищена.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: CheckCircle2,
    title: "Double-check 240",
    description: "Двойная проверка авто: локальный эксперт + независимый сервис на подъёмнике. Видео-акт и право отказа без потерь при расхождении.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Clock,
    title: "SLA-компенсация сроков",
    description: "+1% скидки за каждую просроченную неделю от заявленного ETA. Честный риск-шеринг - мы материально отвечаем за соблюдение сроков.",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Users,
    title: "Клуб владельцев 'Инсайдер'",
    description: "Пожизненная поддержка: консьерж по запчастям, сеть проверенных СТО со скидками, закрытые мероприятия и трек-дни для членов клуба.",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Handshake,
    title: "50/50 на сторгованной сумме",
    description: "Уникальная схема: делим пополам всю сумму, которую удалось сторговать на аукционе. Мы заинтересованы в максимальном торге больше вас!",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    title: "Lifestyle-подбор 'Архитектор'",
    description: "Не просто ищем модель, а проводим глубокое интервью о вашем образе жизни. Предложим 2-3 идеальных варианта с анализом стоимости владения.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Bot,
    title: "AI-консультант 24/7",
    description: "Умный автобот Auto-Desk AI ответит на вопросы круглосуточно. Мгновенно предложит оптимальные модели под ваш бюджет и требования.",
    gradient: "from-violet-500 to-purple-500"
  }
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Уникальные условия и гарантии, которые делают нас лидерами рынка
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <advantage.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="text-4xl font-bold text-primary mb-2">$105M+</div>
            <p className="text-muted-foreground">Сэкономлено клиентам по всему миру</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "700ms" }}>
            <div className="text-4xl font-bold text-primary mb-2">45+</div>
            <p className="text-muted-foreground">Брендов доступно через параллельный импорт</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Поддержка и консультации круглосуточно</p>
          </div>
        </div>
      </div>
    </section>
  );
}