import { useState } from "react";
import { TrendingUp, Eye, Share2, DollarSign, Calendar, MapPin, Shield, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Deal {
  id: string;
  client: string;
  car: string;
  photo: string;
  source: string;
  destination: string;
  startPrice: number;
  finalPrice: number;
  savings: number;
  savingsPercent: number;
  status: "searching" | "auction" | "shipping" | "customs" | "delivered";
  progress: number;
  deliveryDate: string;
  details: {
    carPrice: number;
    shipping: number;
    customs: number;
    commission: number;
    extras: number;
  };
  trackingUrl?: string;
}

const deals: Deal[] = [
  {
    id: "deal-001",
    client: "Александр М.",
    car: "Toyota Land Cruiser 300",
    photo: "https://images.unsplash.com/photo-1519641766812-476c14a91872?w=800",
    source: "ОАЭ, Дубай",
    destination: "Москва",
    startPrice: 8500000,
    finalPrice: 6200000,
    savings: 2300000,
    savingsPercent: 27,
    status: "shipping",
    progress: 65,
    deliveryDate: "15 января 2025",
    details: {
      carPrice: 4500000,
      shipping: 450000,
      customs: 850000,
      commission: 350000,
      extras: 50000
    },
    trackingUrl: "https://tracking.example.com/001"
  },
  {
    id: "deal-002",
    client: "Мария К.",
    car: "Tesla Model Y Performance",
    photo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
    source: "Китай, Шанхай",
    destination: "Санкт-Петербург",
    startPrice: 5500000,
    finalPrice: 3800000,
    savings: 1700000,
    savingsPercent: 31,
    status: "customs",
    progress: 80,
    deliveryDate: "10 января 2025",
    details: {
      carPrice: 2800000,
      shipping: 320000,
      customs: 450000,
      commission: 200000,
      extras: 30000
    }
  },
  {
    id: "deal-003",
    client: "Игорь В.",
    car: "BMW M5 Competition",
    photo: "https://images.unsplash.com/photo-1555215858-71e4e6c3c2de?w=800",
    source: "Германия, Мюнхен",
    destination: "Екатеринбург",
    startPrice: 12000000,
    finalPrice: 8900000,
    savings: 3100000,
    savingsPercent: 26,
    status: "delivered",
    progress: 100,
    deliveryDate: "25 декабря 2024",
    details: {
      carPrice: 6500000,
      shipping: 680000,
      customs: 1200000,
      commission: 480000,
      extras: 40000
    }
  }
];

const statusLabels = {
  searching: "Поиск",
  auction: "Аукцион",
  shipping: "Доставка",
  customs: "Таможня",
  delivered: "Доставлен"
};

const statusColors = {
  searching: "bg-blue-500",
  auction: "bg-yellow-500",
  shipping: "bg-purple-500",
  customs: "bg-orange-500",
  delivered: "bg-green-500"
};

export default function PublicDealsSection() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₽';
  };

  return (
    <section id="public-deals" className="py-16 md:py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Прозрачные сделки недели</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Публичные сделки в реальном времени
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полная прозрачность: смотрите реальные цены, сроки и экономию наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedDeal(deal)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.photo}
                  alt={deal.car}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${statusColors[deal.status]} text-white border-0`}>
                    {statusLabels[deal.status]}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  -{deal.savingsPercent}%
                </div>
                {deal.status === "shipping" && (
                  <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Live трекинг
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{deal.car}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {deal.source} → {deal.destination}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Цена в РФ:</span>
                    <span className="text-sm line-through text-muted-foreground/60">
                      {formatPrice(deal.startPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Наша цена:</span>
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(deal.finalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Экономия:</span>
                    <span className="text-sm font-bold text-green-500">
                      {formatPrice(deal.savings)}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Прогресс доставки</span>
                    <span className="text-xs font-medium">{deal.progress}%</span>
                  </div>
                  <Progress value={deal.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {deal.deliveryDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Клиент: {deal.client}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Deal Modal */}
        {selectedDeal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl p-8 max-w-3xl w-full border border-primary/30 shadow-glow max-h-[90vh] overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedDeal.car}</h3>
                <p className="text-muted-foreground">
                  {selectedDeal.source} → {selectedDeal.destination}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={selectedDeal.photo}
                  alt={selectedDeal.car}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3">Детализация стоимости:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Автомобиль:</span>
                        <span>{formatPrice(selectedDeal.details.carPrice)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Доставка:</span>
                        <span>{formatPrice(selectedDeal.details.shipping)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Таможня:</span>
                        <span>{formatPrice(selectedDeal.details.customs)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Комиссия:</span>
                        <span>{formatPrice(selectedDeal.details.commission)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Доп. услуги:</span>
                        <span>{formatPrice(selectedDeal.details.extras)}</span>
                      </div>
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Итого:</span>
                          <span className="text-primary">{formatPrice(selectedDeal.finalPrice)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Ваша экономия:</span>
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        -{selectedDeal.savingsPercent}%
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-green-500">
                      {formatPrice(selectedDeal.savings)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Статус доставки:</h4>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${statusColors[selectedDeal.status]} text-white border-0`}>
                      {statusLabels[selectedDeal.status]}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Доставка: {selectedDeal.deliveryDate}
                    </span>
                  </div>
                  <Progress value={selectedDeal.progress} className="h-3 mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Прогресс доставки: {selectedDeal.progress}%
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                {selectedDeal.trackingUrl && (
                  <Button
                    className="flex-1"
                    onClick={() => window.open(selectedDeal.trackingUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Отследить груз
                  </Button>
                )}
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                  onClick={() => {
                    setSelectedDeal(null);
                    document.getElementById('calculator-trigger')?.click();
                  }}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Рассчитать свою экономию
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDeal(null)}
                >
                  Закрыть
                </Button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Share2 className="w-4 h-4" />
                <span>Поделитесь этой сделкой и получите скидку 1%</span>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow"
            onClick={() => document.getElementById('calculator-trigger')?.click()}
          >
            Рассчитать свою экономию
          </Button>
        </div>
      </div>
    </section>
  );
}