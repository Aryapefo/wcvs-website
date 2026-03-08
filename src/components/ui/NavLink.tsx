import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-zinc-700 no-underline hover:bg-zinc-100 hover:text-zinc-900 transition",
        className
      )}
    >
      {children}
    </Link>
  );
}
