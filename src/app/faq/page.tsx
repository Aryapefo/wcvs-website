      import { Container } from "@/components/Container";

      export default function Page() {
        return (
          <Container className="py-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
              <p className="mt-3 text-zinc-700 text-lg">Answers to the common questions we get from clubs and riders.</p>
              <div className="mt-8 space-y-4 text-zinc-800 leading-relaxed">
                <h2 className="text-xl font-semibold">Do you own the vans?</h2>
<p className="text-zinc-700">
  No. WCVS operates as a middleman model: we focus on targeted marketing and coordinating bookings.
  Our rental partners provide the vehicles and handle logistics and liability.
</p>

<h2 className="text-xl font-semibold">Who is this for?</h2>
<ul className="list-disc list-inside text-zinc-700 space-y-2">
  <li>Cycling clubs organizing shuttle rides or point-to-point routes</li>
  <li>Race weekends and events (bikes + gear + crew)</li>
  <li>Friends and family planning cycling trips</li>
</ul>

<h2 className="text-xl font-semibold">How far in advance should I request?</h2>
<p className="text-zinc-700">
  Earlier is better—especially for weekends and event dates. Submit a request and we’ll respond with availability.
</p>

<h2 className="text-xl font-semibold">What about insurance and liability?</h2>
<p className="text-zinc-700">
  Rental partners handle insurance terms, contracts, and liability—just like a normal vehicle rental.
</p>

<h2 className="text-xl font-semibold">Can I cancel?</h2>
<p className="text-zinc-700">
  Cancellation and refund policies are set by the rental partner. We’ll make sure you have the partner’s terms before you confirm.
</p>

              </div>
            </div>
          </Container>
        );
      }
