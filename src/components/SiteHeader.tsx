import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur">
      <Container className="py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo.svg" alt="WCVS" width={120} height={28} priority />
        </Link>
        <div className="flex items-center gap-4">
          <Nav />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/request">Request a van</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
