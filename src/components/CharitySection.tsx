import { Card } from "@/components/ui/card";
import { Heart, Trees, Dog, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CharitySection = () => {
  const charityItems = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Помощь больным детям",
      amount: "15,000,000₽",
      description: "Ежегодно направляем на лечение детей с онкологическими заболеваниями",
      impact: "Помогли 150+ детям",
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Поддержка пожилых",
      amount: "8,000,000₽",
      description: "Обеспечиваем дома престарелых необходимым оборудованием",
      impact: "5 домов престарелых",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Dog className="w-12 h-12" />,
      title: "Приюты для животных",
      amount: "5,500,000₽",
      description: "Содержим 3 приюта для бездомных животных",
      impact: "2000+ спасенных животных",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Экология и природа",
      amount: "12,000,000₽",
      description: "Высаживаем деревья и очищаем водоемы",
      impact: "100,000+ деревьев",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="charity" className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Heart className="w-3 h-3 mr-1" />
            Социальная ответственность
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Мы делаем мир лучше вместе
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            С каждого проданного автомобиля мы направляем часть прибыли на благотворительность
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {charityItems.map((item, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-sm text-primary">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-2">{item.amount}</p>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <Badge variant="outline" className="text-sm">
                      {item.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 rounded-3xl p-12 text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold mb-4">
            Каждая покупка — это вклад в добро
          </h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Покупая автомобиль через Auto-Desk, вы автоматически помогаете тем, кто нуждается в помощи
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div>
              <p className="text-4xl font-bold text-primary">40.5М₽</p>
              <p className="text-muted-foreground">Собрано в 2024</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">2,350+</p>
              <p className="text-muted-foreground">Человек получили помощь</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">15</p>
              <p className="text-muted-foreground">Партнерских фондов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;