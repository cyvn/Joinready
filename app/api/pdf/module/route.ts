import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") ?? "unknown";
  const branch = searchParams.get("branch") ?? "unknown";
  const module = searchParams.get("module") ?? "unknown";

  return NextResponse.json(
    {
      message: "Module PDF generation coming soon",
      country,
      branch,
      module,
    },
    { status: 200 }
  );
}
