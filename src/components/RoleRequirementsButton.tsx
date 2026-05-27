"use client";

import { FileText } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { buildPdfKey } from "@/src/data/branchRoleRequirements";

interface Props {
  country: string;
  branch: string;
  className?: string;
  variant?: "outline" | "ghost";
}

export function RoleRequirementsButton({ country, branch, className, variant = "outline" }: Props) {
  const key  = buildPdfKey(country, branch);
  const href = `/role-requirements/${key}.pdf`;

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
      <FileText className="h-3.5 w-3.5" />
      Role Requirements PDF
    </a>
  );
}
