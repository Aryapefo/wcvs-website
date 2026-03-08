export const site = {
  name: "West Coast Van Support",
  description: "Group van rentals for cyclists—built for clubs, race weekends, and trips.",
  url: "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@wcvs.example",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(555) 555-5555",
  phonePlain: (process.env.NEXT_PUBLIC_PHONE ?? "(555) 555-5555").replace(/[^0-9+]/g, ""),
};
