import Link from "next/link";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-4xl px-6 py-3 flex items-center justify-center gap-2">
        <Link
          href="/impressum"
          className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors px-2 py-1"
        >
          Impressum
        </Link>
        <span className="text-slate-700 text-[10px] select-none">·</span>
        <Link
          href="/about"
          className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors px-2 py-1"
        >
          About
        </Link>
        <span className="text-slate-700 text-[10px] select-none">·</span>
        <Link
          href="/terms"
          className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors px-2 py-1"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
