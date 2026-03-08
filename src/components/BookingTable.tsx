import { BookingStatus, type BookingRequest } from "@prisma/client";

function fmt(d: Date) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(d);
}

function statusBadge(s: BookingStatus) {
  const map: Record<BookingStatus, string> = {
    REQUESTED: "border-zinc-200 bg-zinc-50 text-zinc-800",
    CONFIRMED: "border-blue-200 bg-blue-50 text-blue-900",
    COMPLETED: "border-emerald-200 bg-emerald-50 text-emerald-900",
    CANCELLED: "border-rose-200 bg-rose-50 text-rose-900",
  };
  return map[s] ?? map.REQUESTED;
}

export function BookingTable({ bookings }: { bookings: BookingRequest[] }) {
  if (!bookings.length) {
    return <p className="text-zinc-700">No booking requests yet.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="min-w-[900px] w-full text-sm">
        <thead className="bg-zinc-50 text-left">
          <tr>
            <th className="px-4 py-3 font-semibold">Submitted</th>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Email</th>
            <th className="px-4 py-3 font-semibold">Dates</th>
            <th className="px-4 py-3 font-semibold">City</th>
            <th className="px-4 py-3 font-semibold">Group</th>
            <th className="px-4 py-3 font-semibold">Use case</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="px-4 py-3 whitespace-nowrap text-zinc-600">{fmt(b.createdAt)}</td>
              <td className="px-4 py-3 whitespace-nowrap">{b.name}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <a className="underline" href={`mailto:${b.email}`}>{b.email}</a>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {fmt(b.startDate)} → {fmt(b.endDate)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{b.pickupCity ?? "—"}</td>
              <td className="px-4 py-3 whitespace-nowrap">{b.groupSize ?? "—"}</td>
              <td className="px-4 py-3 whitespace-nowrap">{b.useCase ?? "—"}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={"inline-flex rounded-full border px-2 py-1 text-xs font-medium " + statusBadge(b.status)}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
