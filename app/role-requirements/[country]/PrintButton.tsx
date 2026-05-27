"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-colors bg-[#1a2a12] border border-[#6F8F3E] text-[#8A9A5B] hover:bg-[#223318] hover:text-[#a0b46a] print:hidden"
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M9 22h6v-6H9v6z" />
      </svg>
      Print / Save as PDF
    </button>
  );
}
