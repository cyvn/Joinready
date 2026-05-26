import { NextResponse } from "next/server";
import { createClient } from "@/src/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/";
  const oauthError = requestUrl.searchParams.get("error");
  const oauthErrorDescription = requestUrl.searchParams.get("error_description");

  console.log("[Auth/callback] Received callback", {
    origin: requestUrl.origin,
    pathname: requestUrl.pathname,
    hasCode: Boolean(code),
    hasOAuthError: Boolean(oauthError),
    search: requestUrl.search,
  });

  if (oauthError) {
    console.error("[Auth/callback] OAuth provider error:", {
      oauthError,
      oauthErrorDescription,
    });

    const message = encodeURIComponent(
      oauthErrorDescription || oauthError || "OAuth sign in failed"
    );

    return NextResponse.redirect(`${requestUrl.origin}/login?error=${message}`);
  }

  if (!code) {
    console.error("[Auth/callback] Missing OAuth code. Full callback URL:", request.url);

    const message = encodeURIComponent(
      "OAuth callback did not include a code. Check that the Supabase browser client uses @supabase/ssr createBrowserClient (PKCE), and that the provider redirect URL is set to the Supabase callback URL, not localhost."
    );

    return NextResponse.redirect(`${requestUrl.origin}/login?error=${message}`);
  }

  const supabase = createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("[Auth/callback] exchangeCodeForSession error:", error);

    const message = encodeURIComponent(error.message || "Auth callback failed");

    return NextResponse.redirect(`${requestUrl.origin}/login?error=${message}`);
  }

  const safeNext = next.startsWith("/") ? next : "/";

  return NextResponse.redirect(`${requestUrl.origin}${safeNext}`);
}
