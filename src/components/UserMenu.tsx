"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { User } from "@supabase/supabase-js";
import { ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getAvatarUrl(user: User): string | null {
  const m = user.user_metadata;
  return m?.avatar_url ?? m?.picture ?? null;
}

type KnownProvider = "google" | "github" | "discord" | "apple" | "account";

const PROVIDER_LABELS: Record<KnownProvider, string> = {
  github: "GitHub",
  google: "Google",
  discord: "Discord",
  apple: "Apple",
  account: "Account",
};

function normalizeProvider(value: string | null | undefined): KnownProvider {
  if (value === "google") return "google";
  if (value === "github") return "github";
  if (value === "discord") return "discord";
  if (value === "apple") return "apple";
  return "account";
}

export function getProviderLabel(user: User): string {
  // Prefer the provider the user actually clicked — stored before the OAuth redirect.
  const lastOAuthProvider =
    typeof window !== "undefined"
      ? localStorage.getItem("joinready:last_oauth_provider")
      : null;

  const provider = normalizeProvider(
    lastOAuthProvider ||
      user.app_metadata?.provider ||
      user.identities?.find((i) => i.provider === lastOAuthProvider)?.provider ||
      user.identities?.[0]?.provider
  );

  const label = PROVIDER_LABELS[provider];
  const m = user.user_metadata;

  if (process.env.NODE_ENV === "development") {
    console.log("[Auth/dropdown-provider]", {
      lastOAuthProvider,
      appProvider: user.app_metadata?.provider,
      identities: user.identities?.map((i) => i.provider),
      finalProvider: provider,
      providerLabel: label,
    });
  }

  const rawUsername =
    m?.user_name ?? m?.preferred_username ?? m?.full_name ?? m?.name ?? user.email ?? "User";

  const displayUsername = rawUsername.startsWith("@") ? rawUsername : `@${rawUsername}`;

  const showHandle = provider === "github" || provider === "discord";

  return showHandle ? `${label}: ${displayUsername}` : `${label}: ${rawUsername}`;
}

export function DefaultAvatar({
  email,
  size = 34,
}: {
  email?: string;
  size?: number;
}) {
  const initial = email ? email[0].toUpperCase() : "U";
  return (
    <span
      className="rounded-full bg-[#1e2a14] border border-[#8A9A5B]/30 flex items-center justify-center text-[#C2B280] font-semibold select-none flex-shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initial}
    </span>
  );
}

// ─── Avatar image with fallback ─────────────────────────────────────────────

function Avatar({ user, size = 34 }: { user: User; size?: number }) {
  const [err, setErr] = useState(false);
  const url = getAvatarUrl(user);

  if (url && !err) {
    return (
      <img
        src={url}
        alt="Profile"
        className="rounded-full object-cover border border-white/10 flex-shrink-0"
        style={{ width: size, height: size }}
        onError={() => setErr(true)}
      />
    );
  }
  return <DefaultAvatar email={user.email} size={size} />;
}

// ─── Desktop dropdown ────────────────────────────────────────────────────────

interface UserMenuProps {
  user: User;
  onSignOut: () => void;
}

export function UserMenu({ user, onSignOut }: UserMenuProps) {
  const providerLabel = getProviderLabel(user);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-1 rounded-full outline-none focus-visible:ring-1 focus-visible:ring-[#8A9A5B]/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
          aria-label="Account menu"
        >
          <Avatar user={user} size={34} />
          <ChevronDown className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          avoidCollisions
          className="z-[200] min-w-[200px] max-w-[260px] rounded-2xl border border-[#8A9A5B]/20 bg-[#0B0F0A]/95 backdrop-blur-xl shadow-2xl shadow-black/70 p-1.5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {/* Provider info */}
          <div className="px-3 py-2.5">
            <p className="text-[11px] text-slate-500 font-medium truncate leading-snug">
              {providerLabel}
            </p>
          </div>

          <DropdownMenu.Separator className="h-px bg-white/[0.06] mx-1 my-0.5" />

          {/* Sign Out */}
          <DropdownMenu.Item
            onSelect={onSignOut}
            className="flex items-center gap-2 mx-0.5 px-3 py-2 rounded-xl text-[13px] font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] focus:bg-white/[0.06] focus:text-white cursor-pointer outline-none transition-colors"
          >
            <LogOut className="h-3.5 w-3.5 flex-shrink-0" />
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

// ─── Mobile inline account section ──────────────────────────────────────────

export function MobileUserSection({
  user,
  onSignOut,
}: UserMenuProps) {
  const providerLabel = getProviderLabel(user);

  return (
    <div className="border-t border-white/[0.06] mt-1 pt-2 flex flex-col gap-1">
      {/* Provider row */}
      <div className="flex items-center gap-3 px-4 py-2.5">
        <Avatar user={user} size={32} />
        <p className="text-[12px] text-slate-500 font-medium truncate">
          {providerLabel}
        </p>
      </div>

      {/* Sign Out button */}
      <button
        onClick={onSignOut}
        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent transition-colors w-full text-left"
      >
        <LogOut className="h-4 w-4 flex-shrink-0" />
        Sign Out
      </button>
    </div>
  );
}
