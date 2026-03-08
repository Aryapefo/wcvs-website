import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="font-semibold">{site.name}</p>
            <p className="text-sm text-zinc-600">{site.description}</p>
            <p className="text-sm text-zinc-600">
              <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              {" · "}
              <a className="underline" href={`tel:${site.phonePlain}`}>{site.phone}</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="underline" href="/request">Request a van</Link>
            <Link className="underline" href="/faq">FAQ</Link>
            <Link className="underline" href="/admin/bookings">Admin</Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
