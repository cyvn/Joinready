import { notFound } from "next/navigation";
import Link from "next/link";
import { roleRequirementsByCountry } from "@/src/data/roleRequirements";
import { PrintButton } from "./PrintButton";

export function generateStaticParams() {
  return Object.keys(roleRequirementsByCountry).map((slug) => ({ country: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = roleRequirementsByCountry[country];
  return {
    title: data ? `${data.title} | Join Ready` : "Role Requirements | Join Ready",
  };
}

export default async function RoleRequirementsPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const data = roleRequirementsByCountry[country];
  if (!data) notFound();

  const isSubjectGrades = data.tableType === "subject-grades";

  return (
    <>
      <style>{`
        @media print {
          .print\\:hidden { display: none !important; }
          body { background: #fff !important; color: #111 !important; }
          .print-page { background: #fff !important; color: #111 !important; max-width: 100% !important; padding: 0 !important; }
          .print-card { box-shadow: none !important; border: none !important; background: #fff !important; padding: 0 !important; }
          table { page-break-inside: avoid; width: 100% !important; font-size: 9pt !important; }
          tr { page-break-inside: avoid; }
          th { background: #e5e7eb !important; color: #111 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          tr:nth-child(even) td { background: #f9fafb !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print-footer { color: #555 !important; font-size: 8pt !important; }
          .disclaimer-box { border: 1px solid #ccc !important; background: #f5f5f5 !important; color: #555 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="print-page min-h-screen bg-[#070A08] text-[#F4F1E8] px-4 py-8 sm:py-12">
        <div className="print-card max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4 print:hidden">
              <Link
                href="/guide"
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Guide
              </Link>
              <PrintButton />
            </div>

            <p className="text-xs font-semibold tracking-widest uppercase text-[#6F8F3E] mb-1">Join Ready</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {data.title}
            </h1>
            <p className="text-slate-400 text-sm mt-1">{data.subtitle}</p>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer-box rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 mb-6 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Planning reference only. </span>
            {data.disclaimer}
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-900/40">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800/80">
                  {data.columns.map((col) => (
                    <th
                      key={col}
                      className="px-3 py-2.5 text-left text-xs font-semibold text-slate-300 uppercase tracking-wide border-b border-slate-700/60 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, i) => {
                  const isEven = i % 2 === 0;
                  const rowBg = isEven ? "bg-transparent" : "bg-slate-800/30";
                  return (
                    <tr key={i} className={`${rowBg} border-b border-slate-700/30 last:border-0`}>
                      {isSubjectGrades ? (
                        <>
                          <td className="px-3 py-2 font-medium text-slate-200">{row.role}</td>
                          <GradeBadgeCell value={row.maths} />
                          <GradeBadgeCell value={row.english} />
                          <GradeBadgeCell value={row.science} />
                          <td className="px-3 py-2 text-slate-400 text-xs whitespace-normal break-words leading-relaxed">{row.notes}</td>
                        </>
                      ) : (
                        <>
                          <td className="px-3 py-2 font-medium text-slate-200">{row.role}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs">{row.branch}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs">{row.education}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs">{row.aptitude}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs">{row.fitness}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs">{row.medical}</td>
                          <td className="px-3 py-2 text-slate-400 text-xs whitespace-normal break-words leading-relaxed">{row.notes}</td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Print-only header row for mobile context */}
          <div className="hidden print:block mt-4 text-xs text-gray-500">
            <p>{data.sourceNote}</p>
          </div>

          {/* Footer */}
          <div className="print-footer mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <p>{data.sourceNote}</p>
            <p className="shrink-0">Free reference sheet · <span className="text-[#6F8F3E]">join-ready.com</span></p>
          </div>

          {/* Bottom buttons (screen only) */}
          <div className="print:hidden mt-6 flex items-center gap-3">
            <Link
              href="/guide"
              className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-colors border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Guide
            </Link>
            <PrintButton />
          </div>

        </div>
      </div>
    </>
  );
}

function GradeBadgeCell({ value }: { value?: string }) {
  const gradeColor: Record<string, string> = {
    "N/A": "text-slate-500",
    E: "text-amber-400",
    D: "text-amber-300",
    C: "text-green-400",
    G: "text-sky-400",
  };
  const color = gradeColor[value ?? "N/A"] ?? "text-slate-400";
  return (
    <td className="px-3 py-2 text-center">
      <span className={`font-semibold text-sm ${color}`}>{value ?? "N/A"}</span>
    </td>
  );
}
