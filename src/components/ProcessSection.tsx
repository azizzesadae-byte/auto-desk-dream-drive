import { 
  Search,
  CheckCircle,
  Truck,
  FileText,
  Key,
  HeartHandshake
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Подбор и проверка",
    description: "Lifestyle-интервью о вашем образе жизни. Подбираем 2-3 идеальных варианта с полным анализом стоимости владения.",
    features: ["Персональный подбор", "Проверка по 240+ параметрам", "История владения"]
  },
  {
    icon: CheckCircle,
    title: "Покупка на аукционе",
    description: "Торгуемся за вас и делим сэкономленную сумму 50/50. Live-трансляция торгов прямо на сайте.",
    features: ["Максимальный торг", "Фиксация цены на 30 дней", "Видео с аукциона"]
  },
  {
    icon: Truck,
    title: "Доставка с трекингом",
    description: "HD-камера в контейнере, GPS-трекинг 24/7. Смотрите свой автомобиль в режиме реального времени.",
    features: ["Live-видео из контейнера", "Telegram-уведомления", "Страховка груза"]
  },
  {
    icon: FileText,
    title: "Таможенное оформление",
    description: "Полное оформление СБКТС/ЭПТС. Параллельный импорт 45+ брендов официально.",
    features: ["Все документы включены", "Юридическая гарантия", "Без задержек"]
  },
  {
    icon: Key,
    title: "Передача автомобиля",
    description: "Постановка на учет в ГИБДД без вашего участия. Доставка в любой город России.",
    features: ["Регистрация под ключ", "Доставка до двери", "Гарантия 6 месяцев"]
  },
  {
    icon: HeartHandshake,
    title: "Пожизненная поддержка",
    description: "Членство в клубе 'Инсайдер'. Консьерж по запчастям, сеть СТО, помощь при продаже.",
    features: ["Клуб владельцев", "Поиск запчастей", "Buy-Back гарантия"]
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный цикл от подбора до пожизненной поддержки - всё под контролем
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-primary-glow"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {step.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Number and Icon */}
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-glow">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Empty Space for Layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-2xl text-muted-foreground mb-8">
            Средний срок доставки:{" "}
            <span className="text-primary font-bold">45-60 дней</span>
          </p>
          <button
            onClick={() => document.getElementById('quiz-trigger')?.click()}
            className="px-10 py-5 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold text-lg rounded-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Начать подбор автомобиля
          </button>
        </div>
      </div>
    </section>
  );
}