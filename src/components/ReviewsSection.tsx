import { Star, Quote } from "lucide-react";
import davidychPhoto from "@/assets/davidych.jpg";
import bulkinPhoto from "@/assets/bulkin.jpg";
import gordeyPhoto from "@/assets/gordey.jpg";
import academegPhoto from "@/assets/academeg.jpg";
import habibPhoto from "@/assets/habib.jpg";

const reviews = [
  {
    name: "Эрик Давидыч",
    role: "Автоэксперт и блогер",
    photo: davidychPhoto,
    quote: "Я лично убедился: Auto-Desk довозит тачки в идеале и без переплат. Ребята делают всё по красоте, им можно доверять!",
    rating: 5,
    highlight: true
  },
  {
    name: "Булкин",
    role: "Популярный автоблогер",
    photo: bulkinPhoto,
    quote: "Привезти тачку мечты из США без нервов? С Auto-Desk это реально – я проверил на себе! Теперь советую их всем своим подписчикам.",
    rating: 5
  },
  {
    name: "Гордей",
    role: "Автоблогер, дрифт-пилот",
    photo: gordeyPhoto,
    quote: "Нашёл через них редкий спорткар, о котором мечтал с детства. Auto-Desk – вы лучшие! Теперь за тачками – только к ним.",
    rating: 5
  },
  {
    name: "Академег",
    role: "Ведущий YouTube-канала AcademeG",
    photo: academegPhoto,
    quote: "Прозрачность на каждом шагу – фото, видео, трекинг... Я чувствовал, что контролирую процесс вместе с Auto-Desk.",
    rating: 5
  },
  {
    name: "Хабиб Нурмагомедов",
    role: "Чемпион UFC и автолюбитель",
    photo: habibPhoto,
    quote: "Мне важна надежность и честность. Auto-Desk работает четко, без обмана – за это их уважаю. Ребята держат слово!",
    rating: 5
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Нас рекомендуют{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              автоблогеры и знаменитости
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Нам доверяют лидеры мнений, доверьтесь и вы!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group bg-card p-8 rounded-2xl border ${
                review.highlight 
                  ? 'border-accent shadow-accent-glow' 
                  : 'border-border hover:border-primary/50'
              } transition-all duration-300 hover:shadow-glow animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {review.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-accent-glow text-background text-xs font-bold px-4 py-2 rounded-full">
                    ⭐ РЕКОМЕНДУЕТ
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {review.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {review.role}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <blockquote className="relative text-muted-foreground italic pl-6">
                  {review.quote}
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="text-xs text-muted-foreground">
                  Проверенный отзыв
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}