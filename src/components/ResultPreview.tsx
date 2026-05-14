"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, CheckCircle, Briefcase, AlertTriangle, ChevronRight, ArrowRight } from "lucide-react";
import { GlobeBasesView } from "@/src/components/GlobeBasesView";
import { getBranchData, getCountryMilitaryData } from "@/src/data/military-data";
import { allCountries } from "@/src/data/countries";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  accent: string;
  children: React.ReactNode;
}

function InfoCard({ icon, title, accent, children }: CardProps) {
  return (
    <div className={`rounded-xl bg-slate-900 border ${accent} p-5 h-full space-y-3`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

interface Props {
  countryCode: string;
  branchId: string;
}

export function ResultPreview({ countryCode, branchId }: Props) {
  const branch = getBranchData(countryCode, branchId);
  const countryName = allCountries.find((c) => c.code === countryCode)?.name ?? countryCode;

  if (!branch) return null;

  const guideUrl = `/guide?country=${countryCode}&branch=${branchId}`;

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="w-full space-y-5">
      {/* Header row */}
      <motion.div variants={item} className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-white">
            {countryName} · {branch.name}
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">Your personalized overview</p>
        </div>
        <Link
          href={guideUrl}
          className="inline-flex items-center gap-2 bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
        >
          Open My Guide
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Overview */}
        <motion.div variants={item}>
          <InfoCard
            icon={<BookOpen className="h-4 w-4 text-[#8A9A5B]" />}
            title="Branch Overview"
            accent="border-[#8A9A5B]/20"
          >
            <p className="text-sm text-slate-400 leading-relaxed">{branch.overview}</p>
          </InfoCard>
        </motion.div>

        {/* Eligibility */}
        <motion.div variants={item}>
          <InfoCard
            icon={<CheckCircle className="h-4 w-4 text-emerald-400" />}
            title="Eligibility & Requirements"
            accent="border-emerald-500/20"
          >
            <p className="text-sm text-slate-400 leading-relaxed">{branch.eligibilitySummary}</p>
            <div className="flex items-start gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2.5 mt-1">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-400/90">
                Requirements can change. Always verify with official sources before committing.
              </p>
            </div>
          </InfoCard>
        </motion.div>

        {/* Training */}
        <motion.div variants={item}>
          <InfoCard
            icon={<ChevronRight className="h-4 w-4 text-violet-400" />}
            title="Training"
            accent="border-violet-500/20"
          >
            <p className="text-sm text-slate-400 leading-relaxed">{branch.trainingSummary}</p>
          </InfoCard>
        </motion.div>

        {/* Career paths */}
        <motion.div variants={item}>
          <InfoCard
            icon={<Briefcase className="h-4 w-4 text-amber-400" />}
            title="Career Paths"
            accent="border-amber-500/20"
          >
            <div className="flex flex-wrap gap-1.5">
              {branch.careerPaths.map((p) => (
                <span
                  key={p}
                  className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </InfoCard>
        </motion.div>

        {/* Considerations */}
        <motion.div variants={item}>
          <InfoCard
            icon={<AlertTriangle className="h-4 w-4 text-rose-400" />}
            title="Things to Consider"
            accent="border-rose-500/20"
          >
            <ul className="space-y-1.5">
              {branch.considerations.map((c) => (
                <li key={c} className="text-xs text-slate-400 flex items-start gap-1.5">
                  <span className="text-slate-600 mt-1 flex-shrink-0">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </InfoCard>
        </motion.div>

        {/* Globe */}
        <motion.div variants={item}>
          <div className="rounded-xl bg-slate-900 border border-slate-700/40 p-5 h-full">
            <h3 className="text-sm font-semibold text-white mb-4">Bases & Locations</h3>
            <GlobeBasesView
              bases={branch.bases}
              branchName={branch.name}
              countryName={countryName}
            />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div variants={item} className="flex justify-center pt-2">
        <Link
          href={guideUrl}
          className="inline-flex items-center gap-2 bg-[#6F8F3E] hover:bg-[#8A9A5B] text-white font-semibold px-8 py-3.5 rounded-2xl text-base transition-colors shadow-lg shadow-[#6F8F3E]/20"
        >
          Open My Full Interactive Guide
          <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
