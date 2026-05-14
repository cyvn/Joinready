"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe2, Layers, RotateCcw } from "lucide-react";
import { allCountries } from "@/src/data/countries";
import { getBranchesForCountry } from "@/src/data/military-data";
import { CountryCombobox } from "@/src/components/ui/country-combobox";
import { PremiumSelect } from "@/src/components/ui/premium-select";

interface Props {
  country: string;
  branch: string;
  onCountryChange: (c: string) => void;
  onBranchChange: (b: string) => void;
  onReset: () => void;
}

const countryOptions = allCountries.map((c) => ({ value: c.code, label: c.name }));

export function CountryBranchSelector({
  country,
  branch,
  onCountryChange,
  onBranchChange,
  onReset,
}: Props) {
  const branches = country ? getBranchesForCountry(country) : [];
  const branchOptions = branches.map((b) => ({ value: b.id, label: b.displayName ?? b.name }));
  const countryName = allCountries.find((c) => c.code === country)?.name ?? "";

  return (
    <div className="space-y-3.5">
      {/* Country */}
      <div className="space-y-2">
        <label className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
          <Globe2 className="h-3 w-3" />
          Where do you want to join?
        </label>
        <CountryCombobox
          value={country}
          onValueChange={(v) => {
            onCountryChange(v);
            onBranchChange("");
          }}
          options={countryOptions}
          placeholder="Select a country…"
        />
      </div>

      {/* Branch */}
      <AnimatePresence>
        {country && (
          <motion.div
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-visible space-y-2"
          >
            <label className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
              <Layers className="h-3 w-3" />
              Which branch?
            </label>
            <PremiumSelect
              value={branch}
              onValueChange={onBranchChange}
              options={branchOptions}
              placeholder={`Select a branch in ${countryName}…`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reset */}
      <AnimatePresence>
        {(country || branch) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-500 transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              Reset selection
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
