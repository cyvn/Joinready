"use client";

import { useState } from "react";
import { createClient } from "@/src/lib/supabase/client";

export default function AuthDebugPage() {
  const [healthResult, setHealthResult] = useState<string | null>(null);
  const [healthStatus, setHealthStatus] = useState<number | null>(null);
  const [sessionResult, setSessionResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<"health" | "session" | null>(null);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "(not set)";

  async function testHealth() {
    setLoading("health");
    setHealthResult(null);
    setHealthStatus(null);
    try {
      const res = await fetch(`${supabaseUrl}/auth/v1/health`, {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
        },
      });
      setHealthStatus(res.status);
      const text = await res.text();
      setHealthResult(text);
    } catch (err) {
      setHealthResult(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(null);
    }
  }

  async function getSession() {
    setLoading("session");
    setSessionResult(null);
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setSessionResult(`Error: ${error.message}`);
      } else if (data.session) {
        setSessionResult(
          `Session active — user: ${data.session.user.email ?? data.session.user.id}`
        );
      } else {
        setSessionResult("No active session.");
      }
    } catch (err) {
      setSessionResult(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F0A] text-slate-200 p-8 font-mono text-sm">
      <h1 className="text-lg font-bold text-white mb-6">Auth Debug</h1>

      <div className="space-y-4 mb-8">
        <div>
          <span className="text-slate-500">window.location.origin: </span>
          <span className="text-[#C2B280]">
            {typeof window !== "undefined" ? window.location.origin : "(server)"}
          </span>
        </div>
        <div>
          <span className="text-slate-500">NEXT_PUBLIC_SUPABASE_URL: </span>
          <span className="text-[#8A9A5B]">{supabaseUrl}</span>
        </div>
        <div>
          <span className="text-slate-500">NEXT_PUBLIC_SUPABASE_ANON_KEY: </span>
          <span className="text-slate-400">
            {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "(present — not shown)" : "(not set)"}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <button
            onClick={testHealth}
            disabled={loading !== null}
            className="px-4 py-2 rounded-lg bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white font-semibold disabled:opacity-50 transition-colors"
          >
            {loading === "health" ? "Fetching…" : "Test Supabase Health"}
          </button>
          {healthStatus !== null && (
            <p className="text-slate-400">Status: <span className={healthStatus === 200 ? "text-[#8A9A5B]" : "text-rose-400"}>{healthStatus}</span></p>
          )}
          {healthResult !== null && (
            <pre className="bg-[#111] border border-white/10 rounded p-3 text-xs text-slate-300 whitespace-pre-wrap break-all">
              {healthResult}
            </pre>
          )}
        </div>

        <div className="space-y-2">
          <button
            onClick={getSession}
            disabled={loading !== null}
            className="px-4 py-2 rounded-lg bg-[#3d4a28] hover:bg-[#4a5a30] text-white font-semibold disabled:opacity-50 transition-colors"
          >
            {loading === "session" ? "Checking…" : "Get Current Session"}
          </button>
          {sessionResult !== null && (
            <pre className="bg-[#111] border border-white/10 rounded p-3 text-xs text-slate-300 whitespace-pre-wrap">
              {sessionResult}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
