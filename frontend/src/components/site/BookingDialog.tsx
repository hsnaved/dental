import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SlotPicker, getFirstAvailableDate, toKey } from "./SlotPicker";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

interface BookingDialogProps {
  trigger: ReactNode;
}

export function BookingDialog({ trigger }: BookingDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>(() => toKey(getFirstAvailableDate()));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!time) {
      toast.error("Please select a time slot");
      return;
    }
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      date,
      time,
      reason: form.get("reason"),
    };
    // Backend-ready: log the payload; hook this up to an API later.
    console.log("[booking-request]", payload);
    setSubmitted(true);
    toast.success("Appointment request received", {
      description: "Our team will contact you shortly to confirm.",
    });
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // Reset after close animation
      setTimeout(() => {
        setSubmitted(false);
        setTime("");
        setDate(toKey(getFirstAvailableDate()));
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint">
              <CheckCircle2 className="h-8 w-8 text-mint-foreground" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
              Thank you!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your appointment request has been received. Our team will contact
              you shortly to confirm your appointment.
            </p>
            <Button className="mt-6" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">
                Book an Appointment
              </DialogTitle>
              <DialogDescription>
                Fill in a few details and we'll get back to you to confirm.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="(613) 555-0100" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-[color:var(--surface)] p-4">
                <SlotPicker
                  selectedDate={date}
                  onSelectDate={setDate}
                  selectedTime={time}
                  onSelectTime={setTime}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reason">Reason for Visit (optional)</Label>
                <Textarea id="reason" name="reason" rows={3} placeholder="Cleaning, checkup, sensitive tooth..." />
              </div>
              <DialogFooter>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Book Appointment
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}