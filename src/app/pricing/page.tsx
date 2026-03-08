      import { Container } from "@/components/Container";

      export default function Page() {
        return (
          <Container className="py-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
              <p className="mt-3 text-zinc-700 text-lg">Straightforward pricing that makes sense for groups.</p>
              <div className="mt-8 space-y-4 text-zinc-800 leading-relaxed">
                <div className="rounded-2xl border p-6">
  <p className="text-sm text-zinc-600">Typical 1-day booking</p>
  <p className="mt-2 text-3xl font-semibold">$400<span className="text-base font-normal text-zinc-600">/day</span></p>
  <p className="mt-2 text-zinc-700">
    When split across a group (often 5–8 riders), the cost per person becomes highly accessible.
  </p>
</div>

<h2 className="text-xl font-semibold">What’s included</h2>
<ul className="list-disc list-inside text-zinc-700 space-y-2">
  <li>Van configured for safe, secure bike transport (via partner fleet)</li>
  <li>Simple group logistics for trips, races, and club rides</li>
  <li>Clear coordination and handoff to the partner for final confirmation</li>
</ul>

<h2 className="text-xl font-semibold">How payment works</h2>
<p className="text-zinc-700">
  You submit a request through WCVS. We connect you with an available partner van and confirm the details.
  Final rental terms, payment, and liability are handled by the rental partner.
</p>

<p className="text-sm text-zinc-600">
  Pricing may vary by city, dates, and availability. Requesting a van does not guarantee availability until confirmed.
</p>

              </div>
            </div>
          </Container>
        );
      }
