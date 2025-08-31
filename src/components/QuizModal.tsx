import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronLeft, Trophy } from "lucide-react";
import { toast } from "sonner";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "Какой тип автомобиля вас интересует?",
    options: ["Седан", "Внедорожник", "Спорткар", "Электромобиль", "Классика/Ретро"]
  },
  {
    id: 2,
    question: "Ваш бюджет на покупку?",
    options: ["До $30,000", "$30,000 - $50,000", "$50,000 - $100,000", "Более $100,000"]
  },
  {
    id: 3,
    question: "Из какой страны хотели бы привезти?",
    options: ["Япония", "США", "ОАЭ", "Европа", "Не имеет значения"]
  },
  {
    id: 4,
    question: "Когда планируете покупку?",
    options: ["В течение месяца", "1-3 месяца", "3-6 месяцев", "Просто интересуюсь"]
  },
  {
    id: 5,
    question: "Что для вас важнее всего?",
    options: ["Минимальная цена", "Быстрая доставка", "Идеальное состояние", "Редкая модель"]
  }
];

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [contactData, setContactData] = useState({ name: "", phone: "" });

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (!contactData.name || !contactData.phone) {
      toast.error("Пожалуйста, заполните контактные данные");
      return;
    }
    toast.success("Спасибо! Мы подготовим персональную подборку и свяжемся с вами в течение дня");
    onClose();
    // Reset state
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setContactData({ name: "", phone: "" });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {showResult ? "Получите персональную подборку" : "Подберите авто под себя"}
          </DialogTitle>
        </DialogHeader>

        {!showResult ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Вопрос {currentQuestion + 1} из {questions.length}
              </h3>
              <p className="text-lg text-foreground">
                {questions[currentQuestion].question}
              </p>
            </div>

            {/* Options */}
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="text-foreground cursor-pointer hover:text-primary transition-colors"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
              <Button
                variant="cta"
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? "Завершить" : "Далее"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-background" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Отлично! Ваши ответы сохранены
              </h3>
              <p className="text-muted-foreground">
                Оставьте контакты, и мы подготовим персональную подборку автомобилей
              </p>
              <p className="text-sm text-accent mt-2">
                + Вы участвуете в розыгрыше бесплатного подбора авто!
              </p>
            </div>

            <div className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
              />
              <Input
                placeholder="Телефон"
                type="tel"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
              />
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={handleSubmit}
            >
              Получить подборку
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}