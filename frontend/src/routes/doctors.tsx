import { createFileRoute } from "@tanstack/react-router";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/site/DoctorCard";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Meet Our Dentists — Iroquois Dental" },
      { name: "description", content: "Meet the friendly, experienced dentists at Iroquois Dental serving families across Iroquois, Ontario." },
      { property: "og:title", content: "Meet Our Dentists — Iroquois Dental" },
      { property: "og:description", content: "Meet the caring team behind Iroquois Dental." },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mint/40 to-background pb-16 pt-32 md:pt-40">
        <div className="container-page max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Meet the Team</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Dentists you'll love seeing.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Our doctors take the time to listen, explain, and make every visit as comfortable as possible.
          </p>
        </div>
      </section>
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => <DoctorCard key={d.name} doctor={d} />)}
        </div>
      </section>
    </>
  );
}