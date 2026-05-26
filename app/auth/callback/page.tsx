"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { createClient } from "@/src/lib/supabase/client";

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
        </div>
      }
    >
      <CallbackHandler />
    </Suspense>
  );
}

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const code = searchParams.get("code");
    const next = searchParams.get("next") || "/";
    const oauthError = searchParams.get("error");
    const oauthErrorDescription = searchParams.get("error_description");

    if (oauthError) {
      const message = encodeURIComponent(oauthErrorDescription || oauthError || "OAuth sign in failed");
      router.replace(`/login?error=${message}`);
      return;
    }

    if (!code) {
      const message = encodeURIComponent("OAuth callback did not include a code.");
      router.replace(`/login?error=${message}`);
      return;
    }

    const supabase = createClient();
    supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
      if (error) {
        const message = encodeURIComponent(error.message || "Auth callback failed");
        router.replace(`/login?error=${message}`);
        return;
      }
      const safeNext = next.startsWith("/") ? next : "/";
      router.replace(safeNext);
    });
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
    </div>
  );
}
