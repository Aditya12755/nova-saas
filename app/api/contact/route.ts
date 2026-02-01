import { NextResponse } from "next/server";

export function GET() {
  console.log("✅ API GET HIT");
  return NextResponse.json({
    status: "ok",
    message: "Contact API working",
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log("🔥 API POST HIT");
  console.log(body);

  return NextResponse.json({ success: true });
}
