import Link from "next/link";
import { AnimatedPage } from "@/src/components/AnimatedPage";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <AnimatedPage>
      <div className="relative z-10">
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-xl px-6 space-y-7">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8A9A5B]">Legal</p>
              <h1 className="font-display text-2xl font-bold text-[#F4F1E8] tracking-tight">
                Terms of Service
              </h1>
            </div>

            <div className="space-y-5 text-[13px] text-[#A7AD9A] leading-relaxed">
              <div className="space-y-2">
                <p className="text-[#F4F1E8] font-medium text-[14px]">Educational use only</p>
                <p>
                  Join Ready is an independent educational resource. All content is provided for
                  general informational purposes only and does not constitute official military,
                  legal, or recruiting advice.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[#F4F1E8] font-medium text-[14px]">No affiliation</p>
                <p>
                  Join Ready is not affiliated with any government, military branch, or recruiting
                  organisation. Any branch names, logos, or terminology used are for
                  informational reference only.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[#F4F1E8] font-medium text-[14px]">Accuracy</p>
                <p>
                  Requirements, processes, and eligibility criteria change frequently. Always
                  verify current information with official government and military sources before
                  making any decisions.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-[#F4F1E8] font-medium text-[14px]">Changes</p>
                <p>
                  Content on Join Ready may be updated or removed without notice. Continued use of
                  the service constitutes acceptance of any updated terms.
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.05] space-y-1">
                <p className="text-[12px] text-slate-600">
                  Contact:{" "}
                  <a
                    href="mailto:join-ready@outlook.com"
                    className="text-[#8A9A5B] hover:text-[#C2B280] transition-colors"
                  >
                    join-ready@outlook.com
                  </a>
                </p>
              </div>
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
