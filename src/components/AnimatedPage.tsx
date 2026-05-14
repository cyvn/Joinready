"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedPage({ children, className, delay = 0 }: AnimatedPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
