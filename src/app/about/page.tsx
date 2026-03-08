      import { Container } from "@/components/Container";

      export default function Page() {
        return (
          <Container className="py-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight">About WCVS</h1>
              <p className="mt-3 text-zinc-700 text-lg">Van support for cyclists across the West Coast—starting in LA.</p>
              <div className="mt-8 space-y-4 text-zinc-800 leading-relaxed">
                <p>
  WCVS exists for one simple reason: cyclists need vans—most don’t have them.
  “Van support” is the behind-the-scenes MVP that hauls bikes, carries the crew,
  and turns complicated logistics into a smooth day.
</p>
<div className="grid gap-4 sm:grid-cols-2">
  <div className="rounded-2xl border p-5">
    <p className="font-semibold">Isaac Chowdhury · CEO</p>
    <p className="mt-2 text-zinc-700">Leads strategy and operations with experience building and operating a van rental company.</p>
  </div>
  <div className="rounded-2xl border p-5">
    <p className="font-semibold">Aiden Cannella · CFO</p>
    <p className="mt-2 text-zinc-700">Leads accounting, legal structure, and financial strategy—grounded in cycling community needs.</p>
  </div>
  <div className="rounded-2xl border p-5 sm:col-span-2">
    <p className="font-semibold">Lucie Gimenez · Head of Marketing</p>
    <p className="mt-2 text-zinc-700">Leads marketing, website design, and brand positioning.</p>
  </div>
</div>
<p className="text-zinc-700">
  We operate a partner-first model: we generate demand and coordinate requests; rental partners handle the vehicle logistics and liability.
</p>

              </div>
            </div>
          </Container>
        );
      }
