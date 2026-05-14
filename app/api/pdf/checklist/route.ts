import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") ?? "unknown";
  const branch = searchParams.get("branch") ?? "unknown";
  const type = searchParams.get("type") ?? "general";

  return NextResponse.json(
    {
      message: "Checklist PDF generation coming soon",
      country,
      branch,
      type,
    },
    { status: 200 }
  );
}
