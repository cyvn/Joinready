"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface PremiumSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: Option[];
  disabled?: boolean;
}

export function PremiumSelect({ value, onValueChange, placeholder, options, disabled }: PremiumSelectProps) {
  return (
    <Select.Root value={value || undefined} onValueChange={onValueChange} disabled={disabled}>
      <Select.Trigger
        className={cn(
          "w-full flex items-center justify-between gap-2 rounded-xl px-4 h-[50px] text-sm cursor-pointer text-left transition-all duration-200",
          "bg-[#0C1509] focus:outline-none",
          "border border-[rgba(194,178,128,0.09)] hover:border-[rgba(138,154,91,0.30)] hover:bg-[#0F1A0C]",
          "data-[state=open]:border-[#8A9A5B]/45 data-[state=open]:ring-2 data-[state=open]:ring-[#8A9A5B]/15",
          "data-[placeholder]:text-slate-500 text-slate-100",
          disabled && "opacity-40 cursor-not-allowed pointer-events-none"
        )}
      >
        <Select.Value placeholder={<span className="text-slate-500">{placeholder}</span>} />
        <Select.Icon asChild>
          <ChevronDown className="h-4 w-4 text-slate-500 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={6}
          className={cn(
            "relative z-[200] w-[var(--radix-select-trigger-width)]",
            "rounded-xl border border-white/[0.12] overflow-hidden",
            "bg-[#0B0F0A] backdrop-blur-2xl shadow-2xl shadow-black/80",
            "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 duration-150"
          )}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-7 bg-[#0B0F0A] text-slate-600 border-b border-white/[0.05]">
            <ChevronDown className="h-3.5 w-3.5 rotate-180" />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1.5 max-h-[228px]">
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className={cn(
                  "relative flex items-center justify-between px-3 py-2 rounded-lg text-sm",
                  "cursor-pointer select-none outline-none transition-colors duration-100",
                  "text-slate-400",
                  "data-[highlighted]:bg-white/[0.07] data-[highlighted]:text-white",
                  "data-[state=checked]:text-[#C2B280] data-[state=checked]:bg-[#8A9A5B]/[0.12]"
                )}
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check className="h-3.5 w-3.5 text-[#8A9A5B]" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center h-7 bg-[#0B0F0A] text-slate-600 border-t border-white/[0.05]">
            <ChevronDown className="h-3.5 w-3.5" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
