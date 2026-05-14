"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface CountryComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder: string;
}

export function CountryCombobox({ value, onValueChange, options, placeholder }: CountryComboboxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);
  const filtered = search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  const handleOpen = useCallback(() => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSearch("");
  }, []);

  const handleSelect = useCallback((opt: Option) => {
    onValueChange(opt.value);
    handleClose();
  }, [onValueChange, handleClose]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [open, handleClose]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open, handleClose]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => open ? handleClose() : handleOpen()}
        className={cn(
          "w-full flex items-center justify-between gap-2 rounded-xl px-4 h-[50px] text-sm cursor-pointer text-left transition-all duration-200",
          "bg-[#0C1509] focus:outline-none",
          open
            ? "border border-[#8A9A5B]/45 ring-2 ring-[#8A9A5B]/15"
            : "border border-[rgba(194,178,128,0.09)] hover:border-[rgba(138,154,91,0.30)] hover:bg-[#0F1A0C]"
        )}
      >
        <span className={cn("truncate", selected ? "text-slate-100" : "text-slate-500")}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-500 flex-shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className={cn(
              "absolute left-0 right-0 top-[calc(100%+6px)] z-[200]",
              "rounded-xl border border-white/[0.12] overflow-hidden",
              "bg-[#0B0F0A] backdrop-blur-2xl shadow-2xl shadow-black/80"
            )}
          >
            {/* Search */}
            <div className="p-2 border-b border-white/[0.06]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-600 pointer-events-none" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full bg-white/[0.04] border border-white/[0.07] rounded-lg pl-8 pr-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#8A9A5B]/35 focus:bg-white/[0.06] transition-colors"
                />
              </div>
            </div>

            {/* List */}
            <div className="p-1.5 max-h-[228px] overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="text-xs text-slate-600 px-3 py-5 text-center">No countries found</p>
              ) : (
                filtered.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSelect(opt)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-left transition-colors duration-100 cursor-pointer",
                        isSelected
                          ? "text-[#C2B280] bg-[#8A9A5B]/[0.12]"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.07]"
                      )}
                    >
                      <span className="truncate">{opt.label}</span>
                      {isSelected && <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#8A9A5B]" />}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
