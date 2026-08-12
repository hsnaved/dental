import type { Doctor } from "@/data/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_4px_20px_-16px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(47,128,237,0.25)]">
      <div className="aspect-[4/5] overflow-hidden bg-mint/40">
        <img
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{doctor.specialization}</p>
        <p className="mt-1 text-xs text-muted-foreground">{doctor.qualification}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
      </div>
    </div>
  );
}