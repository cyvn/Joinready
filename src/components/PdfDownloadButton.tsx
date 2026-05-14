"use client";

import { Download } from "lucide-react";
import { getPdfUrl, type PdfType } from "@/src/lib/pdf";
import { cn } from "@/src/lib/utils";

interface Props {
  type: PdfType;
  country: string;
  branch: string;
  moduleSlug?: string;
  checklistType?: string;
  label?: string;
  className?: string;
  variant?: "outline" | "ghost";
}

export function PdfDownloadButton({
  type, country, branch, moduleSlug, checklistType, label, className, variant = "outline",
}: Props) {
  const url = getPdfUrl({ type, country, branch, moduleSlug, checklistType });
  const defaultLabel =
    type === "full-guide" ? "Download Complete Guide PDF" :
    type === "checklist" ? "Download Checklist PDF" : "Download Module PDF";

  return (
    <a
      href={url}
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
      <Download className="h-3.5 w-3.5" />
      {label ?? defaultLabel}
    </a>
  );
}
