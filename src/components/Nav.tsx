import Link from "next/link";
import { NavLink } from "@/components/ui/NavLink";

export function Nav() {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <NavLink href="/about">About</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/faq">FAQ</NavLink>
    </nav>
  );
}
