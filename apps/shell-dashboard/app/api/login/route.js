import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("session", "demo-session-token", {
    httpOnly: true,
    path: "/",
  });

  return response;
}
