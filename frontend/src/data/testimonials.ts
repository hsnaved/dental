export interface Testimonial {
  name: string;
  initials: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    initials: "ER",
    quote:
      "The whole team made me feel so comfortable. I actually enjoy going to the dentist now — that's a first!",
    rating: 5,
  },
  {
    name: "Michael T.",
    initials: "MT",
    quote:
      "Modern clinic, kind staff and honest advice. Dr. Bennett explained every step of my treatment clearly.",
    rating: 5,
  },
  {
    name: "Amanda K.",
    initials: "AK",
    quote:
      "My kids love Dr. Nair. She makes their check-ups fun and stress-free. Highly recommend for families.",
    rating: 5,
  },
  {
    name: "David L.",
    initials: "DL",
    quote:
      "Same-day emergency appointment for a broken crown — professional, painless and reasonably priced.",
    rating: 5,
  },
];