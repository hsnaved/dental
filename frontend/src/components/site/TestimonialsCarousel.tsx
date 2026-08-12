import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function TestimonialsCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-5xl">
      <CarouselContent className="-ml-4">
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="pl-4 md:basis-1/2">
            <div className="h-full rounded-3xl border border-border/60 bg-card p-8 shadow-[0_4px_20px_-16px_rgba(15,23,42,0.2)]">
              <div className="flex gap-0.5 text-secondary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint font-display font-semibold text-mint-foreground">
                  {t.initials}
                </span>
                <div>
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Verified patient</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}