import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/BookingDialog";
import { ServiceCard } from "@/components/site/ServiceCard";
import { DoctorCard } from "@/components/site/DoctorCard";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import heroImage from "@/assets/hero-family.jpg";
import clinicImage from "@/assets/clinic-interior.jpg";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Heart,
  Users,
  Clock,
  Siren,
  DollarSign,
  Baby,
  Wrench,
  CalendarClock,
  MapPin,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iroquois Dental — Healthy Smiles Begin Here" },
      { name: "description", content: "Family, cosmetic and emergency dentistry in Iroquois, Ontario. Book your appointment with our friendly, modern dental team today." },
      { property: "og:title", content: "Iroquois Dental — Healthy Smiles Begin Here" },
      { property: "og:description", content: "Family, cosmetic and emergency dentistry in Iroquois, Ontario. Book your appointment with our friendly, modern dental team today." },
    ],
  }),
  component: Index,
});

const TRUST_BADGES = [
  "Experienced Dentists",
  "Modern Equipment",
  "Personalized Care",
  "Comfortable Environment",
];

const WHY_US = [
  { icon: Users, title: "Experienced Team", desc: "Skilled dentists with decades of combined experience." },
  { icon: Wrench, title: "Modern Equipment", desc: "Digital X-rays, intraoral cameras and gentle tools." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Evening and Saturday hours to fit your life." },
  { icon: Heart, title: "Patient Comfort", desc: "A calm, welcoming space designed to ease anxiety." },
  { icon: Siren, title: "Emergency Care", desc: "Same-day appointments when you need us most." },
  { icon: DollarSign, title: "Affordable Treatments", desc: "Transparent pricing and insurance-friendly." },
  { icon: Baby, title: "Family Friendly", desc: "Care for every age, from toddlers to grandparents." },
  { icon: ShieldCheck, title: "Safe & Sterile", desc: "Strict infection control and modern safety standards." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 overflow-hidden bg-gradient-to-b from-mint/40 via-background to-background pt-24 md:pt-32">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-page relative grid gap-12 pb-16 md:grid-cols-2 md:items-center md:pb-24">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Welcoming new patients in Iroquois, ON
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-foreground md:text-5xl">
              Healthy Smiles <br />
              <span className="text-primary">Begin Here.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {clinic.tagline === "Healthy Smiles Begin Here" && "Compassionate, modern dental care for patients of all ages in Iroquois, Ontario. From routine cleanings to complete smile makeovers."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingDialog
                trigger={
                  <Button size="lg" className="rounded-full px-6 shadow-lg shadow-primary/25">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 px-6 text-primary hover:bg-mint/40 hover:text-primary">
                <a href={clinic.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-foreground/80">
              {TRUST_BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in-up relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-mint/60 shadow-[0_30px_60px_-30px_rgba(47,128,237,0.35)]">
              <img
                src={heroImage}
                alt="Happy patient smiling at Iroquois Dental"
                width={1400}
                height={1200}
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border/60 bg-background p-4 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                  <Heart className="h-5 w-5 text-mint-foreground" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">2,500+</div>
                  <div className="text-xs text-muted-foreground">Happy patients</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 hidden rounded-2xl border border-border/60 bg-background p-4 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">15+ yrs</div>
                  <div className="text-xs text-muted-foreground">Trusted care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[color:var(--surface)] py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Complete care under one roof.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From preventive checkups to advanced cosmetic and restorative dentistry,
              we offer the treatments your family needs — all in a comfortable setting.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services">
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Meet the Team</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Dentists you'll love seeing.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our friendly, experienced doctors take the time to listen and explain every step.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => <DoctorCard key={d.name} doctor={d} />)}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[color:var(--surface)] py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Care that puts you first.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(47,128,237,0.2)]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-mint-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)]">
              <img
                src={clinicImage}
                alt="Modern Iroquois Dental clinic interior"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              A modern dental home for the whole family.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              At Iroquois Dental we combine friendly, patient-first care with modern
              technology to make every visit calm, comfortable and clear. Whether it's
              your child's first checkup or a full smile makeover, our team is here
              to help you feel at home.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-primary">15+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years serving Iroquois families</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">2,500+</div>
                <div className="mt-1 text-sm text-muted-foreground">Happy patients &amp; counting</div>
              </div>
            </div>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/about">
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Patient Stories</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Loved by families in Iroquois.
            </h2>
          </div>
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CONTACT + CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/80 p-10 text-primary-foreground shadow-[0_30px_60px_-30px_rgba(47,128,237,0.5)] md:grid-cols-2 md:p-14">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Ready for a healthier smile?
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">
              Book online in under a minute or give us a call. New patients always welcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookingDialog
                trigger={
                  <Button size="lg" variant="secondary" className="rounded-full bg-background text-primary hover:bg-mint">
                    Book Appointment
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href={clinic.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </Button>
            </div>
          </div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{clinic.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0" />
              <a href={clinic.phoneHref} className="hover:underline">{clinic.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0" />
              <a href={`mailto:${clinic.email}`} className="hover:underline">{clinic.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                {clinic.hours.map((h) => (
                  <div key={h.day}><span className="font-medium">{h.day}:</span> {h.time}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
