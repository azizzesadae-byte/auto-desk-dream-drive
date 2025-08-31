import { useState } from "react";
import { Star, Trophy, CheckCircle, Calendar, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Expert {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  experience: string;
  carsDelivered: number;
  avgDiscount: string;
  rating: number;
  languages: string[];
  bio: string;
  achievements: string[];
}

const experts: Expert[] = [
  {
    id: "ivan-premium",
    name: "Иван Петров",
    photo: "https://i.pravatar.cc/300?img=12",
    specialization: "Немецкий премиум",
    experience: "12 лет",
    carsDelivered: 456,
    avgDiscount: "18%",
    rating: 4.9,
    languages: ["Русский", "Немецкий", "Английский"],
    bio: "Эксперт по BMW, Mercedes-Benz, Audi. Личные контакты с дилерами в Мюнхене.",
    achievements: ["Лучший специалист 2023", "456 довольных клиентов", "Средний торг 18%"]
  },
  {
    id: "akira-jdm",
    name: "Акира Танака",
    photo: "https://i.pravatar.cc/300?img=52",
    specialization: "JDM легенды",
    experience: "15 лет",
    carsDelivered: 389,
    avgDiscount: "22%",
    rating: 5.0,
    languages: ["Японский", "Английский", "Русский"],
    bio: "Представитель в Токио. Специализация на GTR, Supra, RX-7. Доступ к закрытым аукционам.",
    achievements: ["Прямой доступ к USS Tokyo", "Эксклюзивные лоты", "Редкие модели"]
  },
  {
    id: "john-muscle",
    name: "Джон Смит",
    photo: "https://i.pravatar.cc/300?img=33",
    specialization: "Американская классика",
    experience: "10 лет",
    carsDelivered: 278,
    avgDiscount: "15%",
    rating: 4.8,
    languages: ["Английский", "Русский"],
    bio: "Маслкары, пикапы, внедорожники. Партнерство с Copart и Manheim.",
    achievements: ["278 авто из США", "Специалист по Dodge/Ford", "VIP доступ Copart"]
  },
  {
    id: "lee-electric",
    name: "Ли Чжун",
    photo: "https://i.pravatar.cc/300?img=25",
    specialization: "Электромобили",
    experience: "8 лет",
    carsDelivered: 234,
    avgDiscount: "20%",
    rating: 4.9,
    languages: ["Китайский", "Корейский", "Русский", "Английский"],
    bio: "Tesla, BYD, Nio, Xpeng. Прямые поставки с заводов. Офис в Шанхае.",
    achievements: ["Официальный партнер BYD", "234 электрокара", "Гарантия на батареи"]
  }
];

export default function ExpertsSection() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <section id="experts" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Наши эксперты</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Выберите личного эксперта для вашей сделки
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работайте напрямую с профессионалом, чья репутация и специализация вам импонируют
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="relative mb-4">
                <img
                  src={expert.photo}
                  alt={expert.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-background shadow-lg"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {expert.rating} ★
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground text-center mb-1">{expert.name}</h3>
              <p className="text-sm text-primary text-center mb-3">{expert.specialization}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Опыт:</span>
                  <span className="font-medium">{expert.experience}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Доставлено:</span>
                  <span className="font-medium">{expert.carsDelivered} авто</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Средний торг:</span>
                  <span className="text-primary font-bold">{expert.avgDiscount}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {expert.languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{expert.bio}</p>

              <Button
                size="sm"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                variant="outline"
              >
                Выбрать эксперта
              </Button>
            </div>
          ))}
        </div>

        {/* Selected Expert Modal */}
        {selectedExpert && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl p-8 max-w-2xl w-full border border-primary/30 shadow-glow">
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={selectedExpert.photo}
                  alt={selectedExpert.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{selectedExpert.name}</h3>
                  <p className="text-primary mb-2">{selectedExpert.specialization}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      {selectedExpert.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      {selectedExpert.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      {selectedExpert.carsDelivered} авто
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{selectedExpert.bio}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Достижения:</h4>
                <div className="space-y-2">
                  {selectedExpert.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Языки общения:</h4>
                <div className="flex gap-2">
                  {selectedExpert.languages.map((lang) => (
                    <Badge key={lang} variant="outline">
                      <Globe className="w-3 h-3 mr-1" />
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                  onClick={() => {
                    setSelectedExpert(null);
                    document.getElementById('quiz-trigger')?.click();
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Начать работу с {selectedExpert.name.split(' ')[0]}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedExpert(null)}
                >
                  Закрыть
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}