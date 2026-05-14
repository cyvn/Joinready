export type CartItem = {
  id: string;
  name: string;
  type: string;
  status: string;
  quantity: number;
};

const CART_KEY = "join-ready:cart";
const BADGE_KEY = "join-ready:badge-dismissed-at";
const BADGE_FIRST_SHOWN_KEY = "join-ready:badge-first-shown-at";
const BADGE_SHOW_DURATION_MS = 60 * 1000; // 1 minute show window
const BADGE_COOLDOWN_MS = 60 * 60 * 1000; // 1 hour after dismiss

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function markBadgeFirstSeen(): void {
  if (typeof window === "undefined") return;
  // Reset on every mount so the 1-minute window starts fresh each page load.
  // The dismiss cooldown in isBadgeVisible() still gates repeat appearances.
  localStorage.setItem(BADGE_FIRST_SHOWN_KEY, Date.now().toString());
}

export function isBadgeVisible(): boolean {
  if (typeof window === "undefined") return false;

  // Respect dismiss cooldown
  const dismissedAt = localStorage.getItem(BADGE_KEY);
  if (dismissedAt && Date.now() - parseInt(dismissedAt, 10) < BADGE_COOLDOWN_MS) {
    return false;
  }

  // Only show within the first minute after first page load
  const firstShownAt = localStorage.getItem(BADGE_FIRST_SHOWN_KEY);
  if (!firstShownAt) return false;

  return Date.now() - parseInt(firstShownAt, 10) < BADGE_SHOW_DURATION_MS;
}

export function dismissBadge(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(BADGE_KEY, Date.now().toString());
}

export const PHYSICAL_GUIDE_ITEM: Omit<CartItem, "quantity"> = {
  id: "join-ready-physical-guide",
  name: "Join Ready Physical Guide",
  type: "Physical copy",
  status: "Preorder interest",
};
