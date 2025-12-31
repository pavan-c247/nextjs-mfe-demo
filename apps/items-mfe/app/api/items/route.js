import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Keyboard", price: "$150" },
    { id: 3, name: "Mouse", price: "$80" },
  ]);
}
