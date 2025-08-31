import { 
  PiggyBank, 
  Crown, 
  Zap, 
  Palette, 
  Building2, 
  UserCheck 
} from "lucide-react";

const audiences = [
  {
    icon: PiggyBank,
    title: "Экономные покупатели",
    description: "Сэкономьте до 40% по сравнению с ценами на российском рынке. Подберем оптимальный аукционный лот и привезем без переплат - выгодно даже с учетом доставки и всех сборов.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Экономия до 40%", "Оптимальные лоты", "Прозрачные цены"]
  },
  {
    icon: Crown,
    title: "Премиум и эксклюзив",
    description: "Подбираем премиальные авто из ОАЭ, США, Японии и Европы. Редкие модели, лимитированные версии и эксклюзивные комплектации в идеальном состоянии.",
    gradient: "from-accent to-accent-glow",
    features: ["Редкие модели", "Лимитированные версии", "Идеальное состояние"]
  },
  {
    icon: Zap,
    title: "Электромобили и экология",
    description: "Доставляем Tesla, BYD, Nissan Leaf и другие гибриды. Разбираемся в EV-технологиях: поможем с выбором, сертификатами и адаптацией под российские реалии.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Tesla и гибриды", "Сертификация", "Адаптация под РФ"]
  },
  {
    icon: Palette,
    title: "Коллекционеры и кастом",
    description: "Найдем авто с историей для энтузиастов. Ретрокары, раритеты, тюнинг-проекты – привезем тщательно и бережно с полной гарантией сохранности.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Ретрокары", "Раритеты", "Тюнинг-проекты"]
  },
  {
    icon: Building2,
    title: "Дилеры и автосалоны",
    description: "Особые условия для бизнеса. Оптовые поставки под заказ, доступ к закрытым аукционам и спецлотам, лизинговые программы и кредитование.",
    gradient: "from-primary to-primary-glow",
    features: ["Оптовые скидки", "Закрытые аукционы", "Лизинг и кредит"]
  },
  {
    icon: UserCheck,
    title: "Новички",
    description: "Впервые заказываете авто из-за рубежа? Проведем шаг за шагом: поможем с выбором, проверим историю, оформим документы. Персональный менеджер на связи 24/7.",
    gradient: "from-orange-500 to-amber-500",
    features: ["Полное сопровождение", "Менеджер 24/7", "Без сложностей"]
  }
];

export default function AudiencesSection() {
  return (
    <section id="audiences" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Для каждого своя выгода с{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Auto-Desk
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Найдем идеальное решение для ваших целей и бюджета
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {audience.description}
              </p>
              {audience.features && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {audience.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}