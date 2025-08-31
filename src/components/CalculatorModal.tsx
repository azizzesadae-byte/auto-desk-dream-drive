import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingDown, Info } from "lucide-react";
import { toast } from "sonner";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  const [formData, setFormData] = useState({
    carPrice: "",
    country: "",
    engineVolume: "",
    engineType: "",
    carAge: "",
    contactName: "",
    contactPhone: ""
  });
  const [calculation, setCalculation] = useState<any>(null);

  const calculateCost = () => {
    if (!formData.carPrice || !formData.country) {
      toast.error("Заполните обязательные поля");
      return;
    }

    const basePrice = parseInt(formData.carPrice);
    const deliveryCost = formData.country === "japan" ? 3000 : formData.country === "usa" ? 4000 : 3500;
    const customsDuty = basePrice * 0.15;
    const vat = (basePrice + customsDuty) * 0.2;
    const recyclingFee = 3500;
    const brokerFee = 1500;
    
    const totalCost = basePrice + deliveryCost + customsDuty + vat + recyclingFee + brokerFee;
    const marketPrice = totalCost * 1.4; // Average market price in Russia
    const savings = marketPrice - totalCost;
    const savingsPercent = (savings / marketPrice * 100).toFixed(0);

    setCalculation({
      basePrice,
      deliveryCost,
      customsDuty,
      vat,
      recyclingFee,
      brokerFee,
      totalCost,
      marketPrice,
      savings,
      savingsPercent
    });
  };

  const handleSubmitRequest = () => {
    if (!formData.contactName || !formData.contactPhone) {
      toast.error("Пожалуйста, заполните контактные данные");
      return;
    }
    toast.success("Заявка отправлена! Мы подготовим точный расчет и свяжемся с вами");
    onClose();
    // Reset state
    setFormData({
      carPrice: "",
      country: "",
      engineVolume: "",
      engineType: "",
      carAge: "",
      contactName: "",
      contactPhone: ""
    });
    setCalculation(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border mx-4 sm:mx-auto">
        <DialogHeader className="pr-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            Калькулятор стоимости авто
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="carPrice">Стоимость авто на аукционе ($) *</Label>
              <Input
                id="carPrice"
                type="number"
                placeholder="Например: 25000"
                value={formData.carPrice}
                onChange={(e) => setFormData({ ...formData, carPrice: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Страна отправки *</Label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Выберите страну" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="japan">Япония</SelectItem>
                  <SelectItem value="usa">США</SelectItem>
                  <SelectItem value="uae">ОАЭ</SelectItem>
                  <SelectItem value="europe">Европа</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="engineVolume">Объем двигателя (л)</Label>
              <Input
                id="engineVolume"
                placeholder="Например: 2.0"
                value={formData.engineVolume}
                onChange={(e) => setFormData({ ...formData, engineVolume: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="engineType">Тип двигателя</Label>
              <Select
                value={formData.engineType}
                onValueChange={(value) => setFormData({ ...formData, engineType: value })}
              >
                <SelectTrigger id="engineType">
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Бензин</SelectItem>
                  <SelectItem value="diesel">Дизель</SelectItem>
                  <SelectItem value="hybrid">Гибрид</SelectItem>
                  <SelectItem value="electric">Электро</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="carAge">Возраст авто (лет)</Label>
              <Input
                id="carAge"
                type="number"
                placeholder="Например: 3"
                value={formData.carAge}
                onChange={(e) => setFormData({ ...formData, carAge: e.target.value })}
              />
            </div>

            <Button 
              variant="cta" 
              className="w-full"
              onClick={calculateCost}
            >
              Рассчитать стоимость
            </Button>
          </div>

          {/* Calculation Result */}
          <div className="space-y-4">
            {calculation ? (
              <>
                <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Предварительный расчет:
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Стоимость авто:</span>
                      <span className="font-medium text-foreground">${calculation.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка:</span>
                      <span className="font-medium text-foreground">${calculation.deliveryCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Таможенная пошлина:</span>
                      <span className="font-medium text-foreground">${calculation.customsDuty.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">НДС:</span>
                      <span className="font-medium text-foreground">${calculation.vat.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Утилизационный сбор:</span>
                      <span className="font-medium text-foreground">${calculation.recyclingFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Услуги брокера:</span>
                      <span className="font-medium text-foreground">${calculation.brokerFee}</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-foreground">Итого:</span>
                        <span className="text-primary">${calculation.totalCost.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-accent" />
                    <span className="font-bold text-foreground">Ваша экономия:</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">
                    ${calculation.savings.toFixed(0)} ({calculation.savingsPercent}%)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    По сравнению с ценой в РФ: ${calculation.marketPrice.toFixed(0)}
                  </p>
                </div>

                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex gap-2 mb-2">
                    <Info className="w-4 h-4 text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Это предварительный расчет. Для точной стоимости оставьте заявку:</p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-3">
                    <Input
                      placeholder="Ваше имя"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    />
                    <Button 
                      variant="premium" 
                      className="w-full"
                      onClick={handleSubmitRequest}
                    >
                      Получить точный расчет
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-card/50 p-8 rounded-xl border border-border flex flex-col items-center justify-center h-full">
                <Calculator className="w-16 h-16 text-primary/20 mb-4" />
                <p className="text-muted-foreground text-center">
                  Заполните данные слева и нажмите "Рассчитать стоимость", 
                  чтобы увидеть предварительную стоимость и вашу экономию
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}