import { Container } from "@/components/Container";
import { BookingForm } from "@/components/BookingForm";

export default function RequestPage() {
  return (
    <Container className="py-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold tracking-tight">Request a van</h1>
          <p className="mt-3 text-zinc-700 text-lg">
            Tell us what you need and we’ll match you with an available partner van.
          </p>
          <div className="mt-8 space-y-4 text-zinc-700 leading-relaxed">
            <p>
              This form is a booking request, not a final confirmation. Once we receive it, we’ll reach out with availability and next steps.
            </p>
            <p className="text-sm text-zinc-600">
              Partners handle final rental terms, contracts, payment, and liability.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <BookingForm />
        </div>
      </div>
    </Container>
  );
}
