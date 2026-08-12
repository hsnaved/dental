import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";
import { BookingDialog } from "@/components/site/BookingDialog";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Iroquois Dental — Iroquois, ON" },
      { name: "description", content: "Contact Iroquois Dental at 2 Miller St, Iroquois, ON. Call (613) 655-2042 or book your appointment online." },
      { property: "og:title", content: "Contact Iroquois Dental" },
      { property: "og:description", content: "Get in touch or book an appointment with Iroquois Dental." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const mapQuery = encodeURIComponent(clinic.address.full);
  return (
    <>
      <section className="bg-gradient-to-b from-mint/40 to-background pb-16 pt-32 md:pt-40">
        <div className="container-page max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            We'd love to see you smile.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Call, email or book online — our friendly team is here to help.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-4">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Address" body={clinic.address.full} />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              body={<a href={clinic.phoneHref} className="hover:text-primary">{clinic.phone}</a>}
            />
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              body={<a href={`mailto:${clinic.email}`} className="hover:text-primary">{clinic.email}</a>}
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Working Hours"
              body={
                <div className="space-y-1">
                  {clinic.hours.map((h) => (
                    <div key={h.day}>
                      <div className="font-medium text-foreground">{h.day}</div>
                      <div className="text-sm text-muted-foreground">{h.time}</div>
                    </div>
                  ))}
                </div>
              }
            />
            <BookingDialog
              trigger={<Button size="lg" className="w-full rounded-full">Book Appointment</Button>}
            />
          </div>
          <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-border/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)]">
            <iframe
              title="Iroquois Dental location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-mint-foreground">
        {icon}
      </div>
      <div>
        <div className="font-display font-semibold text-foreground">{title}</div>
        <div className="mt-1 text-sm text-foreground/80">{body}</div>
      </div>
    </div>
  );
}