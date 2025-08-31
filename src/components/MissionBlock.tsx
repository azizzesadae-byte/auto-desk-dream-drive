import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Gift, Trophy, Star, Users, TrendingUp } from "lucide-react";

interface Mission {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  icon: React.ReactNode;
  completed: boolean;
}

const MissionBlock = () => {
  const missions: Mission[] = [
    {
      id: "first-client",
      title: "Первый клиент",
      description: "Приведите первого клиента",
      progress: 0,
      total: 1,
      reward: "+50,000₽ бонус",
      icon: <Target className="w-5 h-5" />,
      completed: false
    },
    {
      id: "five-clients",
      title: "Пять успехов",
      description: "Приведите 5 клиентов",
      progress: 0,
      total: 5,
      reward: "Статус Серебро",
      icon: <Users className="w-5 h-5" />,
      completed: false
    },
    {
      id: "monthly-goal",
      title: "Месячная цель",
      description: "10 клиентов за месяц",
      progress: 0,
      total: 10,
      reward: "+100,000₽ бонус",
      icon: <TrendingUp className="w-5 h-5" />,
      completed: false
    },
    {
      id: "premium-deal",
      title: "Премиум сделка",
      description: "Клиент от 5 млн ₽",
      progress: 0,
      total: 1,
      reward: "+5% к комиссии",
      icon: <Trophy className="w-5 h-5" />,
      completed: false
    }
  ];

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Gift className="w-5 h-5 text-primary" />
          Миссии и достижения
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {missions.map((mission) => (
          <div 
            key={mission.id} 
            className={`p-4 rounded-lg border ${
              mission.completed 
                ? 'bg-primary/10 border-primary/30' 
                : 'bg-card border-border'
            } transition-all hover:shadow-md`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  mission.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  {mission.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{mission.title}</h4>
                  <p className="text-xs text-muted-foreground">{mission.description}</p>
                </div>
              </div>
              <Badge variant={mission.completed ? "default" : "outline"} className="text-xs">
                {mission.reward}
              </Badge>
            </div>
            <div className="space-y-1">
              <Progress 
                value={(mission.progress / mission.total) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground text-right">
                {mission.progress} / {mission.total}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MissionBlock;