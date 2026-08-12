import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        solid
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-15px_rgba(15,23,42,0.2)]"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold shadow-sm transition-transform group-hover:scale-105">
            iD
          </span>
          <span className="font-display text-xl font-bold text-foreground md:text-2xl">
            {clinic.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-foreground/80">
            <a href={clinic.phoneHref}>
              <Phone className="h-4 w-4" />
              {clinic.phone}
            </a>
          </Button>
          <BookingDialog
            trigger={<Button size="lg" className="rounded-full">Book Appointment</Button>}
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="font-display">{clinic.name}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                  activeProps={{ className: "bg-mint/40 text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 px-4">
              <Button asChild variant="outline" className="w-full">
                <a href={clinic.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </Button>
              <BookingDialog
                trigger={
                  <Button className="w-full" size="lg" onClick={() => setOpen(false)}>
                    Book Appointment
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}