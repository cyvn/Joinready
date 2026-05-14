"use client";

import { usePathname } from "next/navigation";

export function NonHomeBackground() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <>
      {/* Tactical grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(138%2C154%2C91%2C0.04)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />
      {/* Animated olive spotlight — top-center */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: 0,
          left: "50%",
          width: "700px",
          height: "320px",
          background: "radial-gradient(ellipse 60% 52% at 50% 0%, rgba(138,154,91,0.075), transparent)",
          filter: "blur(52px)",
          animation: "orb-a 14s ease-in-out infinite",
        }}
        aria-hidden
      />
      {/* Animated secondary orb — bottom-right */}
      <div
        className="fixed bottom-0 right-0 pointer-events-none z-0"
        style={{
          width: "420px",
          height: "320px",
          background: "radial-gradient(ellipse 65% 60% at 85% 100%, rgba(111,143,62,0.045), transparent)",
          filter: "blur(68px)",
          animation: "orb-b 20s ease-in-out infinite",
        }}
        aria-hidden
      />
    </>
  );
}
