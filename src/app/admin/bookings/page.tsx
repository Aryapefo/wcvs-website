import { Container } from "@/components/Container";
import { BookingTable } from "@/components/BookingTable";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AdminBookingsPage() {
  const bookings = await db.bookingRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <Container className="py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Booking requests</h1>
          <p className="mt-2 text-zinc-700">
            Latest intake from the request form.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <BookingTable bookings={bookings} />
      </div>
    </Container>
  );
}
