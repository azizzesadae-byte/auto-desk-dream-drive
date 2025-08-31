import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";
import { toast } from "sonner";

const FAQSection = () => {
  const [phone, setPhone] = useState("");

  const handleSendContract = () => {
    const phoneNumber = prompt("Введите номер WhatsApp для отправки шаблона договора:");
    if (phoneNumber && phoneNumber.length >= 10) {
      toast.success("Шаблон договора отправлен на WhatsApp!");
    }
  };

  const faqs = [
    {
      question: "Как работают санкции ЕС? Смогу ли я получить премиальное авто?",
      answer: "Да! Мы единственная компания с прямыми офисами в Японии, Корее и ОАЭ. Продолжаем поставлять авто стоимостью более $50,000 через альтернативные маршруты. Полная легальность через параллельный импорт."
    },
    {
      question: "Что такое обратный выкуп и как это работает?",
      answer: "Мы гарантируем выкуп вашего авто обратно через 1-7 лет по заранее известной формуле (до 85% от стоимости). Для членов клуба действуют специальные условия. Также возможен выкуп авто прямо во время доставки, если изменились обстоятельства."
    },
    {
      question: "Какие преимущества дает членство в клубе?",
      answer: "Временный обмен автомобилями с другими членами клуба, совместное владение премиум-авто, закрытые мероприятия и трек-дни, форум для общения, персональный консьерж 24/7, эксклюзивные цены на выкуп от отказавшихся клиентов."
    },
    {
      question: "Как работает гарантия Price-Lock 30?",
      answer: "Мы фиксируем финальную цену на 30 дней, включая все сборы и пошлины. Берем на себя все валютные риски. Если цена вырастет - это наши потери, вы платите зафиксированную сумму."
    },
    {
      question: "Что если авто повредят при доставке?",
      answer: "Полная страховка на всех этапах + live HD-камера в контейнере для вашего спокойствия. При любых повреждениях - полная компенсация или замена авто за наш счет."
    },
    {
      question: "Как быстро я получу автомобиль?",
      answer: "Япония/Корея: 45-60 дней. ОАЭ: 30-45 дней. Европа: 35-50 дней. При превышении сроков - компенсация 1% от стоимости за каждую неделю просрочки."
    },
    {
      question: "Могу ли я отказаться от покупки?",
      answer: "Да! Double-check 240: двойная проверка авто с правом отказа без потерь при расхождениях. Финансовый щит: помощь с перепродажей, если изменились обстоятельства."
    },
    {
      question: "Как работает совместное владение суперкарами?",
      answer: "Формируем пул из 2-4 проверенных клиентов для покупки Ferrari, Lamborghini, McLaren. Мечта становится в 4 раза доступнее. Мы берем на себя юрид. оформление и график использования."
    }
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Ответы на частые вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачность во всем - наш главный принцип
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border rounded-lg px-6 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Хотите изучить договор заранее?</h3>
            <p className="text-muted-foreground mb-6">
              Отправим шаблон договора и все документы на WhatsApp за 30 секунд
            </p>
            <Button size="lg" onClick={handleSendContract}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Получить шаблон договора
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;