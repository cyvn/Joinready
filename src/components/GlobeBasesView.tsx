"use client";

import { MapPin } from "lucide-react";
import { WireframeDottedGlobe } from "@/src/components/ui/wireframe-dotted-globe";
import type { MilitaryBase } from "@/src/types/military";

interface Props {
  bases: MilitaryBase[];
  branchName: string;
  countryName: string;
}

export function GlobeBasesView({ bases, branchName, countryName }: Props) {
  const visibleBases = bases.filter((b) => b.latitude !== 0 || b.longitude !== 0);

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-5 flex-wrap">
        <div className="flex-shrink-0">
          <WireframeDottedGlobe bases={visibleBases} size={160} />
        </div>

        <div className="flex-1 min-w-[160px] space-y-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Notable Locations
          </p>
          {bases.length === 0 ? (
            <p className="text-xs text-slate-500 leading-relaxed">
              Location data is being verified. Check official sources for current base assignments.
            </p>
          ) : (
            <ul className="space-y-2.5">
              {bases.slice(0, 5).map((base) => (
                <li key={base.id} className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-slate-200">{base.name}</p>
                    {(base.city || base.region) && (
                      <p className="text-xs text-slate-500">
                        {[base.city, base.region].filter(Boolean).join(", ")}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 mt-0.5">{base.branchRelevance}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
