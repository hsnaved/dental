import type { Service } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="group relative flex flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[0_4px_20px_-16px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-20px_rgba(47,128,237,0.25)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-mint-foreground transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Button variant="ghost" size="sm" className="mt-4 -ml-3 w-fit text-primary hover:bg-mint/40 hover:text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </div>
  );
}