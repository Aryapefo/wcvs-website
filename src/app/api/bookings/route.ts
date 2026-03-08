import { db } from "@/lib/db";
import { bookingRequestSchema } from "@/lib/validators";
import { sendBookingNotificationEmail } from "@/lib/email";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);

  const parsed = bookingRequestSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Invalid payload", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const created = await db.bookingRequest.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      pickupCity: data.pickupCity || null,
      groupSize: data.groupSize ?? null,
      useCase: data.useCase || null,
      notes: data.notes || null,
    },
  });

  // Best-effort notification (optional env-configured)
  try {
    await sendBookingNotificationEmail(created);
  } catch {
    // don't fail booking intake due to email config
  }

  return Response.json({ ok: true, id: created.id });
}
