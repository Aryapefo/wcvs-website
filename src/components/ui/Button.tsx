import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium no-underline transition " +
  "focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid: "bg-black text-white hover:bg-zinc-800",
  outline: "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50",
};

export function Button({
  asChild,
  href,
  className,
  variant = "solid",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  variant?: Variant;
}) {
  const classes = cn(base, variants[variant], className);

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
