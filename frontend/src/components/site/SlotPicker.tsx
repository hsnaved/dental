import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// 9:00 AM -> 5:00 PM in 30 min steps
export const TIME_SLOTS = (() => {
  const out: string[] = [];
  for (let m = 9 * 60; m <= 17 * 60; m += 30) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    out.push(`${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
  }
  return out;
})();

export function getDays(count = 7) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });
}

export const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const startOfDay = (d: Date) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

/** Last selectable day: 2 months from today */
export function getMaxDate() {
  const d = startOfDay(new Date());
  d.setMonth(d.getMonth() + 2);
  return d;
}

/** First bookable day (skips closed Sundays) */
export function getFirstAvailableDate() {
  const d = startOfDay(new Date());
  while (d.getDay() === 0) d.setDate(d.getDate() + 1);
  return d;
}

// Deterministic pseudo-random "already booked" slots per date
function bookedSlotsFor(dateKey: string) {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) hash = (hash * 31 + dateKey.charCodeAt(i)) % 100000;
  const booked = new Set<string>();
  TIME_SLOTS.forEach((slot, idx) => {
    if ((hash + idx * 37) % 3 === 0) booked.add(slot);
  });
  return booked;
}

interface SlotPickerProps {
  selectedDate: string;
  onSelectDate: (d: string) => void;
  selectedTime: string;
  onSelectTime: (t: string) => void;
}

export function SlotPicker({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
}: SlotPickerProps) {
  const booked = useMemo(() => bookedSlotsFor(selectedDate), [selectedDate]);
  const today = useMemo(() => startOfDay(new Date()), []);
  const maxDate = useMemo(() => getMaxDate(), []);
  const [viewMonth, setViewMonth] = useState(() => {
    const [y, m] = selectedDate.split("-").map(Number);
    return new Date(y, (m || 1) - 1, 1);
  });

  const canPrev =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() && viewMonth.getMonth() > today.getMonth());
  const canNext =
    viewMonth.getFullYear() < maxDate.getFullYear() ||
    (viewMonth.getFullYear() === maxDate.getFullYear() && viewMonth.getMonth() < maxDate.getMonth());

  const cells = useMemo(() => {
    const first = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
    const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
    const out: (Date | null)[] = Array.from({ length: first.getDay() }, () => null);
    for (let i = 1; i <= daysInMonth; i++) {
      out.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), i));
    }
    return out;
  }, [viewMonth]);

  const shiftMonth = (delta: number) =>
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + delta, 1));

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-medium text-foreground">Choose a date</div>
          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              disabled={!canPrev}
              onClick={() => shiftMonth(-1)}
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[7.5rem] text-center text-sm font-semibold text-foreground">
              {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              disabled={!canNext}
              onClick={() => shiftMonth(1)}
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-muted-foreground">
          {DAY_LABELS.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            if (!d) return <div key={`e${i}`} />;
            const key = toKey(d);
            const active = key === selectedDate;
            const isSunday = d.getDay() === 0;
            const disabled = d < today || d > maxDate || isSunday;
            return (
              <button
                key={key}
                type="button"
                disabled={disabled}
                onClick={() => {
                  onSelectDate(key);
                  onSelectTime("");
                }}
                className={cn(
                  "rounded-lg border py-1.5 text-center text-sm transition-colors",
                  disabled
                    ? "cursor-not-allowed border-transparent text-muted-foreground/40"
                    : active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/50 hover:bg-mint/40"
                )}
              >
                {d.getDate()}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Booking available up to 2 months ahead. Sundays are closed.
        </p>
      </div>

      <div>
        <div className="mb-2 text-sm font-medium text-foreground">Available times</div>
        <div className="grid max-h-40 grid-cols-3 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-5">
          {TIME_SLOTS.map((slot) => {
            const isBooked = booked.has(slot);
            const active = slot === selectedTime;
            return (
              <button
                key={slot}
                type="button"
                disabled={isBooked}
                onClick={() => onSelectTime(slot)}
                className={cn(
                  "rounded-lg border py-1.5 text-sm transition-colors",
                  isBooked
                    ? "cursor-not-allowed border-border/50 bg-muted/50 text-muted-foreground line-through"
                    : active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/50 hover:bg-mint/40"
                )}
              >
                {slot}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Struck-through times are already booked.
        </p>
      </div>
    </div>
  );
}
