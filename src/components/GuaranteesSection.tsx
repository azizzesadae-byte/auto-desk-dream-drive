import { 
  Shield,
  Clock,
  DollarSign,
  FileCheck,
  TrendingUp,
  RefreshCw,
  Lock,
  Award,
  Car,
  CreditCard
} from "lucide-react";

const guarantees = [
  {
    icon: DollarSign,
    title: "Гарантия лучшей цены",
    description: "Средняя экономия $12,969 на каждом авто. До 50% выгоднее вторичного рынка РФ. Если найдете дешевле - вернем разницу.",
    highlight: true
  },
  {
    icon: Shield,
    title: "Техническая гарантия",
    description: "6 месяцев на двигатель и КПП. Гарантия 5000 км на все системы автомобиля. При обнаружении проблем - полный возврат средств.",
  },
  {
    icon: RefreshCw,
    title: "Обратный выкуп Buy-Back",
    description: "Выкупим автомобиль обратно в течение 12 месяцев по цене 85% от стоимости 'под ключ'. Ваши деньги защищены!",
  },
  {
    icon: Clock,
    title: "SLA по срокам доставки",
    description: "Гарантированные сроки с компенсацией. +1% скидки за каждую неделю просрочки. Честный риск-шеринг.",
  },
  {
    icon: FileCheck,
    title: "Юридическая чистота",
    description: "100% легальность через параллельный импорт. СБКТС/ЭПТС включены. Страховка отказа регистрации в ГИБДД.",
  },
  {
    icon: Lock,
    title: "Escrow-счета",
    description: "Безопасные расчеты через эскроу в российских банках. Поэтапное высвобождение средств по мере выполнения обязательств.",
  },
  {
    icon: TrendingUp,
    title: "Price-Lock 30",
    description: "Фиксация цены на 30 дней с защитой от курсовых колебаний. Любой перерасход берем на себя.",
  },
  {
    icon: Award,
    title: "Double-Check 240",
    description: "Двойная проверка по 240+ параметрам. Локальный эксперт + независимый сервис. Видео-акт осмотра.",
  },
  {
    icon: Car,
    title: "Финансовый щит",
    description: "Изменилась ситуация? Поможем перепродать авто даже во время доставки. Возврат средств минус минимальная комиссия.",
  },
  {
    icon: CreditCard,
    title: "Гибкая оплата",
    description: "Предоплата от 5%. Поэтапная оплата. Криптовалюта для обхода санкций. Лизинг для физлиц и ИП.",
  }
];

export default function GuaranteesSection() {
  return (
    <section id="guarantees" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Железные гарантии
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Защищаем вашу покупку на каждом этапе - от выбора до владения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className={`group relative bg-card p-6 rounded-xl border ${
                guarantee.highlight 
                  ? 'border-primary bg-gradient-to-br from-card via-card to-primary/10' 
                  : 'border-border hover:border-primary/50'
              } transition-all duration-300 hover:shadow-glow animate-scale-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {guarantee.highlight && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    ЛУЧШЕЕ
                  </div>
                </div>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <guarantee.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {guarantee.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Доставим любой автомобиль, несмотря на санкции
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Продолжаем поставлять авто стоимостью более $50,000. 
              Официальный параллельный импорт позволяет ввозить 45+ брендов без согласия производителей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('quiz-trigger')?.click()}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold rounded-xl hover:shadow-glow transition-all duration-300"
              >
                Подобрать авто под себя
              </button>
              <button
                onClick={() => document.getElementById('calculator-trigger')?.click()}
                className="px-8 py-4 bg-card border-2 border-primary text-foreground font-bold rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                Рассчитать экономию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}