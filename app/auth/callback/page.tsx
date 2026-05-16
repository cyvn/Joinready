"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/src/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const next = params.get("next") ?? "/";

    if (code) {
      supabase.auth
        .exchangeCodeForSession(code)
        .then(() => {
          router.push(next.startsWith("/") ? next : "/");
        })
        .catch(() => {
          router.push("/login?error=Authentication%20failed");
        });
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#070A08] flex items-center justify-center">
      <div className="h-6 w-6 rounded-full border-2 border-[#8A9A5B] border-t-transparent animate-spin" />
    </div>
  );
}
