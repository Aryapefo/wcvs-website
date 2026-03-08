import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="border-b">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm text-zinc-600">West Coast Van Support</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Simple group van rentals for cyclists—so the ride is the easy part.
              </h1>
              <p className="text-zinc-700 text-lg leading-relaxed">
                Affordable, straightforward vans equipped for safe bike transport. Perfect for race weekends,
                club rides, and weekend trips—without everyone needing a truck, racks, and a headache.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/request">Request a van</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>

              <div className="pt-4 text-sm text-zinc-600">
                <p>
                  We generate demand and coordinate bookings; rental partners handle vehicle logistics and liability.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <h2 className="text-lg font-semibold">Use cases</h2>
                <ul className="mt-3 space-y-2 text-zinc-700">
                  <li><span className="font-medium">Race weekends & events:</span> one van for bikes + gear + crew.</li>
                  <li><span className="font-medium">Cycling clubs:</span> shuttles for climbs, point-to-point rides, and big days.</li>
                  <li><span className="font-medium">Trips:</span> friends/family adventures without complicated logistics.</li>
                </ul>
              </Card>

              <Card>
                <h2 className="text-lg font-semibold">How it works</h2>
                <ol className="mt-3 space-y-2 text-zinc-700 list-decimal list-inside">
                  <li>Tell us your dates, group size, and where you’re riding.</li>
                  <li>We match you with an available partner van.</li>
                  <li>You confirm with the partner and roll out.</li>
                </ol>
              </Card>

              <Card>
                <h2 className="text-lg font-semibold">Quick contact</h2>
                <p className="mt-2 text-zinc-700">
                  Email: <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
                  <br />
                  Phone: <a className="underline" href={`tel:${site.phonePlain}`}>{site.phone}</a>
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold">Convenient</h3>
              <p className="mt-2 text-zinc-700">
                One booking for the whole crew—less planning, more riding.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Safe transport</h3>
              <p className="mt-2 text-zinc-700">
                Vans set up for secure bike storage so your gear arrives ready.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Group-friendly</h3>
              <p className="mt-2 text-zinc-700">
                Typical daily pricing is approachable when split across 5–8 riders.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
