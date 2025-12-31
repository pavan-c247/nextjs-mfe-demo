import { NextResponse } from "next/server";

export default function proxy(req) {
  const session = req.cookies.get("session");
  const pathname = req.nextUrl.pathname;

  const isItemsRoute = pathname.startsWith("/dashboard/items");

  if (!session && isItemsRoute) {
    console.log("Item MFE is protected by Proxy");
    
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  return NextResponse.next();
}
