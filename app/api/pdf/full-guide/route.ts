import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") ?? "unknown";
  const branch = searchParams.get("branch") ?? "unknown";

  return NextResponse.json(
    {
      message: "PDF generation coming soon",
      info: "Full guide PDF for download will be generated here.",
      country,
      branch,
    },
    { status: 200 }
  );
}
