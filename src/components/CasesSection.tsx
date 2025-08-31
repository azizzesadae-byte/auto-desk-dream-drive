import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Car, Users, Briefcase, Heart, Globe } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      icon: <Car className="w-8 h-8" />,
      category: "Молодая семья",
      title: "Mazda CX-5 из Японии",
      savings: "780,000₽",
      percent: "35%",
      description: "Семья из Москвы сэкономила на покупке кроссовера для поездок на дачу",
      benefits: ["Низкий пробег 15,000 км", "Полный привод", "Максимальная комплектация"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      category: "Предприниматель",
      title: "Mercedes S-Class из ОАЭ",
      savings: "2,100,000₽",
      percent: "40%",
      description: "Бизнесмен получил представительский седан с пробегом 8,000 км",
      benefits: ["Обслуживался у дилера", "Ceramic Pro покрытие", "Массажные кресла"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      category: "Коллекционер",
      title: "Toyota Supra 1998 из Японии",
      savings: "450,000₽",
      percent: "25%",
      description: "Найден редкий экземпляр с документированной историей",
      benefits: ["Оригинальный пробег", "Вся история обслуживания", "Заводской тюнинг"],
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      category: "IT-специалист",
      title: "Tesla Model 3 из Кореи",
      savings: "1,350,000₽",
      percent: "38%",
      description: "Программист переехал на электромобиль и экономит на топливе",
      benefits: ["Автопилот включен", "Белый салон Premium", "Гарантия на батарею"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      category: "Автопарк такси",
      title: "10 Camry из ОАЭ",
      savings: "4,500,000₽",
      percent: "32%",
      description: "Таксопарк обновил флот с огромной экономией",
      benefits: ["Оптовая скидка 5%", "Единая логистика", "Лизинг под 8%"],
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      category: "Блогер",
      title: "Lamborghini Huracan",
      savings: "8,200,000₽",
      percent: "30%",
      description: "Совместное владение с 3 партнерами через наш клуб",
      benefits: ["Стоимость разделена на 4", "График использования", "Обслуживание включено"],
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section id="cases" className="relative py-20 overflow-hidden">
      {/* Background with car silhouette */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-5">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=1920')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <TrendingDown className="w-3 h-3 mr-1" />
            Реальные кейсы экономии
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Истории успеха наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый месяц помогаем сотням клиентов экономить миллионы рублей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((case_, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${case_.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-background/50 backdrop-blur-sm text-primary">
                    {case_.icon}
                  </div>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    -{case_.percent}
                  </Badge>
                </div>

                <Badge variant="outline" className="mb-2">
                  {case_.category}
                </Badge>
                
                <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                <p className="text-3xl font-bold text-primary mb-3">
                  Экономия {case_.savings}
                </p>
                <p className="text-muted-foreground mb-4">{case_.description}</p>
                
                <div className="space-y-2">
                  {case_.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-2">
            Общая экономия клиентов за 2024 год
          </p>
          <p className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            ₽487,350,000+
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;