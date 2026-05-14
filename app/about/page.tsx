"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";
import { AnimatedPage } from "@/src/components/AnimatedPage";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.83a8.18 8.18 0 004.78 1.54V7a4.84 4.84 0 01-1.01-.31z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const CHIPS = ["Beginner-first", "Independent", "No pressure"];

const IDENTITY = [
  {
    title: "What We Are",
    copy: "An independent educational guide that helps users compare countries, branches, requirements, preparation topics, and next steps.",
  },
  {
    title: "What We Are Not",
    copy: "We are not recruiters, not a government website, and not an official military source.",
  },
  {
    title: "Our Purpose",
    copy: "To help people walk into the process informed, prepared, and able to ask better questions.",
  },
];

const SOCIALS = [
  { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@joinready" },
  { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/joinready" },
  { Icon: Mail, label: "Email", href: "mailto:join-ready@outlook.com" },
  { Icon: Globe, label: "Website", href: "https://join-ready.com" },
];

export default function AboutPage() {
  return (
    <AnimatedPage>
      <div className="relative overflow-hidden min-h-screen md:h-screen md:overflow-hidden">

        {/* Tactical grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(138%2C154%2C91%2C0.05)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
          aria-hidden
        />

        {/* Olive spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "700px",
            height: "360px",
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(138,154,91,0.08), transparent)",
            filter: "blur(52px)",
          }}
          aria-hidden
        />

        <section className="relative z-10 min-h-[calc(100vh-80px)] flex items-center py-8">
          <div className="mx-auto max-w-[1080px] px-6 w-full space-y-6">

            {/* ── Hero ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-2">
              <motion.p variants={fadeUp} className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A9A5B]">
                Independent Military Guidance
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-display text-[1.85rem] sm:text-[2.2rem] font-bold text-[#F4F1E8] tracking-tight leading-[1.1]"
              >
                Built to make joining easier to understand.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#A7AD9A] text-[13px] leading-relaxed max-w-lg">
                Join Ready organises country, branch, preparation, documents, and key questions so future applicants can research before making a commitment.
              </motion.p>
            </motion.div>

            {/* ── 2-col: mission card + identity text ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-5 gap-5"
            >
              {/* Left: mission panel */}
              <motion.div
                variants={fadeUp}
                className="md:col-span-2 rounded-2xl bg-[#10160F] p-4 space-y-3 relative overflow-hidden self-start"
                style={{ border: "1px solid rgba(163,177,138,0.15)" }}
              >
                <div
                  className="absolute -top-8 -right-8 w-36 h-36 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(138,154,91,0.12), transparent 70%)" }}
                  aria-hidden
                />
                <div className="relative space-y-3">
                  <div className="space-y-1.5">
                    <h2 className="font-display text-[15px] font-bold text-[#F4F1E8] tracking-tight">
                      Why Join Ready Exists
                    </h2>
                    <p className="text-[12px] text-[#A7AD9A] leading-relaxed">
                      Joining the military is a serious decision. The information is often scattered, confusing, or written for people who already know the system. Join Ready turns that information into a clear path, so beginners can understand their options before speaking with a recruiter.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="text-[10px] font-medium text-[#C2B280] px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(194,178,128,0.07)", border: "1px solid rgba(194,178,128,0.18)" }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: identity text sections */}
              <div className="md:col-span-3 divide-y divide-white/[0.05] self-start">
                {IDENTITY.map(({ title, copy }) => (
                  <motion.div key={title} variants={fadeUp} className="py-3 first:pt-0 last:pb-0">
                    <p className="font-display font-semibold text-[#F4F1E8] text-[13px] mb-1">{title}</p>
                    <p className="text-[12px] text-[#A7AD9A] leading-relaxed">{copy}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Social icon row ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-5 py-1"
            >
              {SOCIALS.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:text-[#8A9A5B] hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <Icon className="h-[16px] w-[16px]" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
