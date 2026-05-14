"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface GetStartedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
}

export function GetStartedButton({
  children,
  onClick,
  className,
  variant = "primary",
  href,
}: GetStartedButtonProps) {
  const cls = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm transition-all duration-200 cursor-pointer",
    variant === "primary"
      ? "bg-[#6F8F3E] text-white hover:bg-[#8A9A5B] shadow-lg shadow-[#6F8F3E]/20"
      : "border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 bg-slate-800/50",
    className
  );

  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );

  if (href) return <Link href={href} className={cls}>{inner}</Link>;

  return (
    <motion.button whileTap={{ scale: 0.97 }} onClick={onClick} className={cls}>
      {inner}
    </motion.button>
  );
}
