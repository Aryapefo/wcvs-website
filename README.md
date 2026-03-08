# WCVS Website (Next.js + Prisma)

Marketing site + booking-request intake for **West Coast Van Support (WCVS)**.

## What’s included
- Next.js App Router + TypeScript + Tailwind
- Marketing pages: Home, About, Pricing, FAQ
- Booking request form → API route → SQLite (via Prisma)
- Admin bookings table (protected via Basic Auth middleware)

## Quick start
1. Copy `.env.example` to `.env` and adjust values.
2. Install deps: `npm install`
3. Create DB/migrations: `npm run db:migrate`
4. Run locally: `npm run dev`

Open http://localhost:3000

## Optional: email notifications
If you want emails when a booking comes in:
1. `npm i nodemailer`
2. Fill in `SMTP_*` and `BOOKINGS_NOTIFY_TO` in `.env`

## Admin access
- Visit `/admin/bookings`
- Browser will prompt for Basic Auth
- Credentials come from `ADMIN_USER` / `ADMIN_PASS` in `.env`
