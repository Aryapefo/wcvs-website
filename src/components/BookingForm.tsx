"use client";

import { useMemo, useState } from "react";
import { bookingRequestSchema } from "@/lib/validators";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  startDate: string;
  endDate: string;
  pickupCity: string;
  groupSize: string;
  useCase: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  startDate: "",
  endDate: "",
  pickupCity: "",
  groupSize: "",
  useCase: "",
  notes: "",
};

function toISODate(dateStr: string) {
  // keep user's date; server will parse as Date
  return dateStr;
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  const payload = useMemo(() => ({
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim() || undefined,
    startDate: toISODate(form.startDate),
    endDate: toISODate(form.endDate),
    pickupCity: form.pickupCity.trim() || undefined,
    groupSize: form.groupSize ? Number(form.groupSize) : undefined,
    useCase: form.useCase.trim() || undefined,
    notes: form.notes.trim() || undefined,
  }), [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    const parsed = bookingRequestSchema.safeParse(payload);
    if (!parsed.success) {
      setResult({ ok: false, message: "Please check the form fields and try again." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setResult({ ok: false, message: "Something went wrong. Please try again." });
        return;
      }

      setResult({ ok: true, message: "Request received! We’ll contact you shortly." });
      setForm(initial);
    } catch {
      setResult({ ok: false, message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none " +
    "focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name *</span>
          <input
            className={inputBase}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email *</span>
          <input
            className={inputBase}
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Phone</span>
          <input
            className={inputBase}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            autoComplete="tel"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Pickup city</span>
          <input
            className={inputBase}
            value={form.pickupCity}
            onChange={(e) => setForm({ ...form, pickupCity: e.target.value })}
            placeholder="e.g., Los Angeles"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Start date *</span>
          <input
            className={inputBase}
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">End date *</span>
          <input
            className={inputBase}
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            required
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Group size</span>
          <input
            className={inputBase}
            type="number"
            min={1}
            max={30}
            value={form.groupSize}
            onChange={(e) => setForm({ ...form, groupSize: e.target.value })}
            placeholder="e.g., 6"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Use case</span>
          <select
            className={inputBase}
            value={form.useCase}
            onChange={(e) => setForm({ ...form, useCase: e.target.value })}
          >
            <option value="">Select…</option>
            <option value="Race weekend & event">Race weekend & event</option>
            <option value="Cycling club ride">Cycling club ride</option>
            <option value="Bike trip">Bike trip</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">Notes</span>
        <textarea
          className={inputBase}
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Anything we should know (routes, bikes, special needs, timing, etc.)"
        />
      </label>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Submit request"}
        </Button>
        <p className="text-xs text-zinc-500">
          By submitting, you agree we can contact you about availability.
        </p>
      </div>

      {result && (
        <div
          className={
            "rounded-xl border p-3 text-sm " +
            (result.ok ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-rose-200 bg-rose-50 text-rose-900")
          }
          role="status"
          aria-live="polite"
        >
          {result.message}
        </div>
      )}
    </form>
  );
}
