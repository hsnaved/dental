import doctor1 from "@/assets/doctor-1.png";
import doctor2 from "@/assets/doctor-2.png";
import doctor3 from "@/assets/doctor-3.jpg";

export interface Doctor {
  name: string;
  qualification: string;
  specialization: string;
  bio: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Mitchell",
    qualification: "DDS, University of Toronto",
    specialization: "General & Family Dentistry",
    bio: "Sarah has over 12 years of experience caring for families across Eastern Ontario, with a gentle chair-side manner patients love.",
    image: doctor1,
  },
  {
    name: "Dr. James Bennett",
    qualification: "DMD, McGill University",
    specialization: "Cosmetic & Restorative Dentistry",
    bio: "James focuses on smile makeovers, implants and full-mouth restorations using the latest digital dentistry techniques.",
    image: doctor2,
  },
  {
    name: "Dr. Priya Nair",
    qualification: "DDS, Western University",
    specialization: "Pediatric & Preventive Care",
    bio: "Priya helps kids feel right at home, turning every visit into a fun, positive experience they actually look forward to.",
    image: doctor3,
  },
];