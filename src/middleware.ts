import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_USER = process.env.ADMIN_USER || "";
const ADMIN_PASS = process.env.ADMIN_PASS || "";

function unauthorized(req: NextRequest) {
  const res = NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  res.headers.set("WWW-Authenticate", 'Basic realm="WCVS Admin", charset="UTF-8"');
  return res;
}

export function middleware(req: NextRequest) {
  // Only protect /admin when credentials are set
  if (!ADMIN_USER || !ADMIN_PASS) return NextResponse.next();

  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return unauthorized(req);

  const b64 = authHeader.slice("Basic ".length);
  let decoded = "";
  try {
    decoded = atob(b64);
  } catch {
    return unauthorized(req);
  }

  const [user, pass] = decoded.split(":");
  if (user !== ADMIN_USER || pass !== ADMIN_PASS) return unauthorized(req);

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
