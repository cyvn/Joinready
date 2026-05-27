"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/src/lib/utils";

const SHOPIFY_STORE_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL ?? "https://join-ready.myshopify.com";

interface Props {
  type: "full-guide" | "checklist" | "module";
  country: string;
  branch: string;
  moduleSlug?: string;
  checklistType?: string;
  label?: string;
  className?: string;
  variant?: "outline" | "ghost";
}

export function PdfDownloadButton({
  type, label, className, variant = "outline",
}: Props) {
  // Module PDFs have been removed — render nothing for module type.
  if (type === "module") return null;

  const href = SHOPIFY_STORE_URL;
  const defaultLabel = "Get Complete Guide PDF";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-colors",
        variant === "outline"
          ? "border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600"
          : "text-slate-500 hover:text-slate-300",
        className
      )}
    >
      <ExternalLink className="h-3.5 w-3.5" />
      {label ?? defaultLabel}
    </a>
  );
}
