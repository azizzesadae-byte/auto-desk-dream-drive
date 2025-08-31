import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  TrendingUp, 
  Calculator, 
  Trophy, 
  Gift, 
  Sparkles,
  Crown,
  Medal,
  Target,
  Rocket,
  DollarSign,
  UserPlus,
  Share2,
  ArrowUpRight
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ReferralSection = () => {
  // Calculator state
  const [directClients, setDirectClients] = useState([5]);
  const [agentClients, setAgentClients] = useState([10]);
  const [partnerClients, setPartnerClients] = useState([20]);
  const [avgDeal, setAvgDeal] = useState([100000]);
  
  // Form state
  const [phone, setPhone] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  // Calculate earnings
  const calculateEarnings = () => {
    const profit = avgDeal[0] * 0.2; // 20% profit margin
    const level1 = directClients[0] * profit * 0.10; // 10% commission
    const level2 = agentClients[0] * profit * 0.05; // 5% commission
    const level3 = partnerClients[0] * profit * 0.03; // 3% commission
    return {
      level1,
      level2,
      level3,
      total: level1 + level2 + level3,
      monthly: (level1 + level2 + level3),
      yearly: (level1 + level2 + level3) * 12
    };
  };

  const earnings = calculateEarnings();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      toast({
        title: "🎉 Поздравляем!",
        description: "Вы зарегистрированы в реферальной программе. Менеджер свяжется для активации."
      });
      setPhone("");
    }
  };

  const leaderboard = [
    { rank: 1, name: "Александр М.", clients: 247, earnings: "₽2,470,000", badge: "💎 Diamond" },
    { rank: 2, name: "Елена К.", clients: 189, earnings: "₽1,890,000", badge: "🏆 Platinum" },
    { rank: 3, name: "Дмитрий С.", clients: 156, earnings: "₽1,560,000", badge: "🥇 Gold" },
    { rank: 4, name: "Марина В.", clients: 134, earnings: "₽1,340,000", badge: "🥈 Silver" },
    { rank: 5, name: "Игорь П.", clients: 98, earnings: "₽980,000", badge: "🥉 Bronze" }
  ];

  const levels = [
    {
      title: "Агент",
      icon: <UserPlus className="w-8 h-8" />,
      commission: "10%",
      description: "Привлекайте клиентов напрямую",
      benefits: [
        "Персональная реферальная ссылка",
        "10% с каждой сделки клиента",
        "Маркетинговые материалы",
        "Обучение и поддержка 24/7"
      ],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Мастер-агент",
      icon: <Users className="w-8 h-8" />,
      commission: "5%",
      description: "Стройте команду агентов",
      benefits: [
        "5% с продаж вашей команды",
        "Пассивный доход от сети",
        "Приоритетная поддержка",
        "Доступ к эксклюзивным акциям"
      ],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Партнер",
      icon: <Crown className="w-8 h-8" />,
      commission: "3%",
      description: "Управляйте сетью партнеров",
      benefits: [
        "3% со всей структуры",
        "Максимальный пассивный доход",
        "VIP-статус и привилегии",
        "Участие в управлении программой"
      ],
      color: "from-amber-500/20 to-orange-600/20"
    }
  ];

  return (
    <section id="referral" className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          <Share2 className="w-3 h-3 mr-1" />
          Реферальный клуб "Инсайдер"
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Зарабатывайте вместе с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Трехуровневая реферальная система с доходом до ₽500,000 в месяц
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold">до 18%</p>
            <p className="text-sm text-muted-foreground">Общая комиссия</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold">3 уровня</p>
            <p className="text-sm text-muted-foreground">Глубина сети</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold">₽2M+</p>
            <p className="text-sm text-muted-foreground">Топ партнер/год</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all">
            <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold">850+</p>
            <p className="text-sm text-muted-foreground">Активных партнеров</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="levels" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="levels">Уровни</TabsTrigger>
            <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
            <TabsTrigger value="leaderboard">Лидеры</TabsTrigger>
            <TabsTrigger value="how">Как работает</TabsTrigger>
          </TabsList>

          {/* Levels Tab */}
          <TabsContent value="levels" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-30`} />
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-background/80 backdrop-blur-sm text-primary">
                        {level.icon}
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {level.commission}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                    <p className="text-muted-foreground mb-4">{level.description}</p>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Рассчитайте ваш потенциальный доход
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Прямых клиентов (1-й уровень): {directClients[0]}
                    </label>
                    <Slider
                      value={directClients}
                      onValueChange={setDirectClients}
                      max={50}
                      step={1}
                      className="mb-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Клиентов от агентов (2-й уровень): {agentClients[0]}
                    </label>
                    <Slider
                      value={agentClients}
                      onValueChange={setAgentClients}
                      max={100}
                      step={5}
                      className="mb-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Клиентов партнеров (3-й уровень): {partnerClients[0]}
                    </label>
                    <Slider
                      value={partnerClients}
                      onValueChange={setPartnerClients}
                      max={200}
                      step={10}
                      className="mb-2"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Средний чек сделки: ₽{avgDeal[0].toLocaleString()}
                    </label>
                    <Slider
                      value={avgDeal}
                      onValueChange={setAvgDeal}
                      min={50000}
                      max={500000}
                      step={10000}
                      className="mb-2"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-xl p-6">
                  <h4 className="font-bold mb-4">Ваш прогнозируемый доход:</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">1-й уровень (10%):</span>
                      <span className="font-bold">₽{Math.round(earnings.level1).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">2-й уровень (5%):</span>
                      <span className="font-bold">₽{Math.round(earnings.level2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">3-й уровень (3%):</span>
                      <span className="font-bold">₽{Math.round(earnings.level3).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-lg">
                      <span className="font-medium">В месяц:</span>
                      <span className="font-bold text-primary">₽{Math.round(earnings.monthly).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xl">
                      <span className="font-medium">В год:</span>
                      <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                        ₽{Math.round(earnings.yearly).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Топ партнеров месяца
                </h3>
                <Badge variant="secondary">Декабрь 2024</Badge>
              </div>
              
              <div className="space-y-4">
                {leaderboard.map((leader) => (
                  <div 
                    key={leader.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      leader.rank === 1 ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20' :
                      leader.rank === 2 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20' :
                      leader.rank === 3 ? 'bg-gradient-to-r from-orange-600/20 to-orange-700/20' :
                      'bg-muted/50'
                    } hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl font-bold ${
                        leader.rank === 1 ? 'text-yellow-500' :
                        leader.rank === 2 ? 'text-gray-400' :
                        leader.rank === 3 ? 'text-orange-600' :
                        'text-muted-foreground'
                      }`}>
                        #{leader.rank}
                      </div>
                      <div>
                        <p className="font-bold">{leader.name}</p>
                        <p className="text-sm text-muted-foreground">{leader.clients} клиентов</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{leader.earnings}</p>
                      <Badge variant="outline" className="text-xs">
                        {leader.badge}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-2">Призовой фонд месяца</p>
                <p className="text-3xl font-bold text-primary">₽500,000</p>
                <p className="text-xs text-muted-foreground mt-1">+ iPhone 15 Pro для победителя</p>
              </div>
            </Card>
          </TabsContent>

          {/* How It Works Tab */}
          <TabsContent value="how" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Как начать зарабатывать
                </h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="font-medium">Регистрация в программе</p>
                      <p className="text-sm text-muted-foreground">Получите личный кабинет и реферальную ссылку</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="font-medium">Привлекайте клиентов</p>
                      <p className="text-sm text-muted-foreground">Делитесь ссылкой и получайте 10% с каждой сделки</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="font-medium">Стройте команду</p>
                      <p className="text-sm text-muted-foreground">Приглашайте агентов и получайте % с их продаж</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <p className="font-medium">Масштабируйте доход</p>
                      <p className="text-sm text-muted-foreground">Развивайте сеть и выходите на пассивный доход</p>
                    </div>
                  </li>
                </ol>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Бонусы и привилегии
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Medal className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Статусная система</p>
                      <p className="text-sm text-muted-foreground">Bronze → Silver → Gold → Platinum → Diamond</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Ежемесячные конкурсы</p>
                      <p className="text-sm text-muted-foreground">Ценные призы для лучших партнеров</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">VIP-мероприятия</p>
                      <p className="text-sm text-muted-foreground">Закрытые встречи и обучение от экспертов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowUpRight className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Карьерный рост</p>
                      <p className="text-sm text-muted-foreground">Возможность стать региональным представителем</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 rounded-3xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-4">
              Начните зарабатывать уже сегодня!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде успешных партнеров и получите доступ к лучшей реферальной программе на рынке
            </p>
          </div>
          
          <form onSubmit={handleJoin} className="max-w-md mx-auto flex gap-3">
            <Input
              type="tel"
              placeholder="+7 (999) 999-99-99"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              <UserPlus className="w-4 h-4 mr-2" />
              Стать партнером
            </Button>
          </form>
          
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">850+</p>
              <p className="text-sm text-muted-foreground">Активных партнеров</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₽127M</p>
              <p className="text-sm text-muted-foreground">Выплачено за 2024</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Поддержка партнеров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;