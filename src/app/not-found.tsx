import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-700">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-6">
        <Button asChild href="/">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </Container>
  );
}
