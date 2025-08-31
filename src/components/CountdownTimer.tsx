import { useState, useEffect } from "react";
import { Clock, AlertCircle } from "lucide-react";

interface CountdownTimerProps {
  deadline?: Date;
  onExpire?: () => void;
}

const CountdownTimer = ({ deadline, onExpire }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const endDate = deadline || new Date(new Date().setHours(23, 59, 59, 999));
    const difference = endDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      if (onExpire) onExpire();
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Make urgent when less than 1 hour
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes < 60) {
        setIsUrgent(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-lg ${
      isUrgent ? 'bg-red-500/20 border border-red-500/50' : 'bg-primary/10 border border-primary/30'
    }`}>
      <div className="flex items-center gap-2">
        <Clock className={`w-5 h-5 ${isUrgent ? 'text-red-500 animate-pulse' : 'text-primary'}`} />
        <span className="text-sm font-medium">Осталось:</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-center">
          <div className={`text-2xl font-bold ${isUrgent ? 'text-red-500' : 'text-foreground'}`}>
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">часов</div>
        </div>
        <span className={`text-xl font-bold ${isUrgent ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>:</span>
        <div className="text-center">
          <div className={`text-2xl font-bold ${isUrgent ? 'text-red-500' : 'text-foreground'}`}>
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">минут</div>
        </div>
        <span className={`text-xl font-bold ${isUrgent ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}>:</span>
        <div className="text-center">
          <div className={`text-2xl font-bold ${isUrgent ? 'text-red-500 animate-pulse' : 'text-foreground'}`}>
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs text-muted-foreground">секунд</div>
        </div>
      </div>
      
      {isUrgent && (
        <AlertCircle className="w-5 h-5 text-red-500 animate-bounce" />
      )}
    </div>
  );
};

export default CountdownTimer;