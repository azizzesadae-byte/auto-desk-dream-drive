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
    description: "Сэкономьте до 40% по сравнению с ценами на российском рынке. Мы подберем оптимальный аукционный лот и привезем без переплат.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Crown,
    title: "Премиум и эксклюзив",
    description: "Подбираем премиальные авто из ОАЭ, США, Японии. Редкие модели и лимитированные версии, которых нет в РФ.",
    gradient: "from-accent to-accent-glow"
  },
  {
    icon: Zap,
    title: "Электромобили и экология",
    description: "Доставляем Tesla, BYD, Nissan Leaf. Поможем с выбором, сертификатами и адаптацией под российские реалии.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Коллекционеры и кастом",
    description: "Найдем авто с историей. Ретрокары, раритеты, тюнинг-проекты – привезем бережно с полной гарантией.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Building2,
    title: "Дилеры и автосалоны",
    description: "Оптовые поставки, доступ к закрытым аукционам. Поможем наполнить автосалон актуальными моделями.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: UserCheck,
    title: "Новички",
    description: "Первый заказ? Проведем шаг за шагом: поможем с выбором, проверим историю, оформим документы.",
    gradient: "from-orange-500 to-amber-500"
  }
];

export default function AudiencesSection() {
  return (
    <section id="audiences" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
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
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}