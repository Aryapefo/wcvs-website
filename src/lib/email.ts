import type { BookingRequest } from "@prisma/client";

/**
 * Optional email notifications.
 * If SMTP_* or BOOKINGS_NOTIFY_TO are missing, this becomes a no-op.
 *
 * This is intentionally minimal. For production, consider a provider like Resend/Postmark,
 * or add DKIM/SPF and robust retries/queuing.
 */
export async function sendBookingNotificationEmail(_booking: BookingRequest) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.BOOKINGS_NOTIFY_TO;

  if (!host || !port || !user || !pass || !from || !to) return;

  // Lazy-import nodemailer only when configured, so it isn't required for local dev.
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });

  const subject = `New WCVS booking request: ${_booking.name}`;
  const text = [
    `New booking request received`,
    ``,
    `Name: ${_booking.name}`,
    `Email: ${_booking.email}`,
    `Phone: ${_booking.phone ?? "-"}`,
    `Dates: ${_booking.startDate.toISOString().slice(0,10)} → ${_booking.endDate.toISOString().slice(0,10)}`,
    `Pickup city: ${_booking.pickupCity ?? "-"}`,
    `Group size: ${_booking.groupSize ?? "-"}`,
    `Use case: ${_booking.useCase ?? "-"}`,
    `Notes: ${_booking.notes ?? "-"}`,
    ``,
    `Admin: /admin/bookings`,
  ].join("\n");

  await transporter.sendMail({ from, to, subject, text });
}
