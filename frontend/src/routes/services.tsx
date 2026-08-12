import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BookingDialog } from "@/components/site/BookingDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services — Iroquois Dental" },
      { name: "description", content: "Explore our full range of family, cosmetic, restorative and emergency dental services in Iroquois, Ontario." },
      { property: "og:title", content: "Dental Services — Iroquois Dental" },
      { property: "og:description", content: "Complete family and cosmetic dental care in Iroquois, Ontario." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/40 to-background pb-16 pt-32 md:pt-40">
        <div className="container-page max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Complete dental care for every smile.
          </h1>
          <p className="mt-4 text-muted-foreground">
            From routine cleanings to advanced cosmetic and restorative dentistry — everything your family needs, in one welcoming place.
          </p>
          <div className="mt-6">
            <BookingDialog trigger={<Button size="lg" className="rounded-full">Book Appointment</Button>} />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
    </>
  );
}