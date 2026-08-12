import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Sparkles,
  Smile,
  Shield,
  Crown,
  Activity,
  Bone,
  Siren,
  Baby,
  AlignHorizontalDistributeCenter,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    description: "Comprehensive checkups and preventive care to keep your smile healthy for life.",
    icon: Stethoscope,
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning",
    description: "Gentle professional cleanings that remove plaque and brighten your smile.",
    icon: Sparkles,
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    description: "Safe, effective whitening treatments for a noticeably brighter smile.",
    icon: Smile,
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    description: "Tooth-coloured fillings that restore your teeth and blend in naturally.",
    icon: Shield,
  },
  {
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    description: "Custom restorations that rebuild strength, function and appearance.",
    icon: Crown,
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    description: "Comfortable, modern root canal therapy to save damaged teeth.",
    icon: Activity,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    description: "Long-lasting tooth replacements that look, feel and function naturally.",
    icon: Bone,
  },
  {
    slug: "emergency-care",
    name: "Emergency Dental Care",
    description: "Same-day appointments when you're in pain and need help fast.",
    icon: Siren,
  },
  {
    slug: "childrens-dentistry",
    name: "Children's Dentistry",
    description: "Friendly, gentle care that helps kids build healthy habits early.",
    icon: Baby,
  },
  {
    slug: "invisalign",
    name: "Invisalign Consultation",
    description: "Straighten your smile discreetly with clear, custom-made aligners.",
    icon: AlignHorizontalDistributeCenter,
  },
];