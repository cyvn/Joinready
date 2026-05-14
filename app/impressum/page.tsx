import Link from "next/link";
import { AnimatedPage } from "@/src/components/AnimatedPage";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <AnimatedPage>
      <div className="relative z-10">
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-xl px-6 space-y-7">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A9A5B]">Legal</p>
              <h1 className="font-display text-2xl font-bold text-[#F4F1E8] tracking-tight">Impressum</h1>
            </div>

            <div className="space-y-4 text-[13px] text-[#A7AD9A] leading-relaxed">
              <p>
                <span className="text-[#F4F1E8] font-medium">Join Ready</span> is an independent
                educational resource. It is not affiliated with any government, military branch,
                or recruiting organisation.
              </p>
              <p>
                Contact:{" "}
                <a
                  href="mailto:join-ready@outlook.com"
                  className="text-[#8A9A5B] hover:text-[#C2B280] transition-colors"
                >
                  join-ready@outlook.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://join-ready.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A9A5B] hover:text-[#C2B280] transition-colors"
                >
                  join-ready.com
                </a>
              </p>
              <p className="text-[12px] text-slate-600 pt-2 border-t border-white/[0.05]">
                Always verify requirements with official government and military sources.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex text-[12px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              ← Back
            </Link>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
