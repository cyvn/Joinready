"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { createClient, supabaseEnvConfigured } from "@/src/lib/supabase/client";

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

    const oauthError = searchParams.get("error");
    if (oauthError) {
      const msg = searchParams.get("error_description") || oauthError;
      router.replace(`/login?error=${encodeURIComponent(msg)}`);
      return;
    }

    if (!supabaseEnvConfigured()) {
      router.replace(`/login?error=${encodeURIComponent("Auth service not configured.")}`);
      return;
    }

    const next = searchParams.get("next") || "/";
    const safeNext = next.startsWith("/") ? next : "/";

    const supabase = createClient();

    // Implicit flow: Supabase auto-detects tokens from URL hash via detectSessionInUrl.
    // Check immediately in case the session is already established.
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace(safeNext);
        return;
      }

      // Not ready yet — listen for the SIGNED_IN event.
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, sess) => {
        if (event === "SIGNED_IN" && sess) {
          subscription.unsubscribe();
          router.replace(safeNext);
        }
      });

      const timeout = setTimeout(() => {
        subscription.unsubscribe();
        router.replace(`/login?error=${encodeURIComponent("Sign in timed out. Please try again.")}`);
      }, 10000);

      return () => {
        subscription.unsubscribe();
        clearTimeout(timeout);
      };
    });
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-5 w-5 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
    </div>
  );
}
