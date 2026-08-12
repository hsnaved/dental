import { createFileRoute } from "@tanstack/react-router";
import clinicImage from "@/assets/clinic-interior.jpg";
import { CheckCircle2, Heart, Users, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Iroquois Dental — Family Dentistry in Iroquois, ON" },
      { name: "description", content: "Learn about Iroquois Dental — a family-first dental practice offering modern, comfortable care in Iroquois, Ontario." },
      { property: "og:title", content: "About Iroquois Dental" },
      { property: "og:description", content: "A family-first dental practice in Iroquois, Ontario." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Patient-first approach", desc: "Every plan starts with what's right for you." },
  { icon: Users, title: "Friendly, caring staff", desc: "A warm welcome from the moment you walk in." },
  { icon: ShieldCheck, title: "Modern technology", desc: "Digital tools for faster, more comfortable care." },
  { icon: CheckCircle2, title: "Family dental care", desc: "Trusted care for every age, in one place." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/40 to-background pb-16 pt-32 md:pt-40">
        <div className="container-page max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Modern dentistry with a personal touch.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Iroquois Dental has been proudly caring for families in Iroquois and the surrounding
            community with compassionate, comfortable and modern dentistry.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.3)]">
            <img
              src={clinicImage}
              alt="Iroquois Dental clinic"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Our story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We built Iroquois Dental to be the kind of place we'd want to bring
              our own families — friendly, unhurried and genuinely focused on
              long-term dental health. Our team combines years of clinical experience
              with modern digital tools so care is faster, gentler and more precise.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-4xl font-bold text-primary">15+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years of experience</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary">2,500+</div>
                <div className="mt-1 text-sm text-muted-foreground">Happy patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold">What we stand for</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-mint-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}