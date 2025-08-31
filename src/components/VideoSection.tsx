import { useState } from "react";
import { Play, X } from "lucide-react";
import davidychVideoThumb from "@/assets/davidych-video-thumb.jpg";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Видеообращение от{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Давидыча
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Эрик Давидыч записал эксклюзивное видео для посетителей Auto-Desk. 
            Узнайте из первых уст, почему он рекомендует нашу компанию!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-elegant animate-scale-in"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src={davidychVideoThumb}
              alt="Видео от Давидыча"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-glow">
                <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4">
                <img
                  src={davidychVideoThumb}
                  alt="Давидыч"
                  className="w-16 h-16 rounded-full border-4 border-primary"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    Эксклюзивное интервью
                  </h3>
                  <p className="text-muted-foreground">
                    Давидыч делится личным опытом и дает ценные советы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-lg animate-fade-in">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-6xl mx-4">
              <div className="aspect-video bg-card rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Видео от Давидыча"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}