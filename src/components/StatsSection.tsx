import { useEffect, useState } from "react";
import { TrendingUp, Users, Car, Trophy } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span id={`counter-${end}`}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Car className="w-8 h-8" />,
      value: 2847,
      suffix: "+",
      label: "Автомобилей доставлено",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 1923,
      suffix: "",
      label: "Довольных клиентов",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 487,
      prefix: "₽",
      suffix: "М",
      label: "Сэкономлено клиентам",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: 98,
      suffix: "%",
      label: "Клиентов рекомендуют нас",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary-glow/5" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative bg-card/80 backdrop-blur-sm p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-background/50 text-primary mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;