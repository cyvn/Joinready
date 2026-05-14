export type PdfType = "module" | "full-guide" | "checklist";

export function getPdfUrl(params: {
  type: PdfType;
  country: string;
  branch: string;
  moduleSlug?: string;
  checklistType?: string;
}): string {
  const { type, country, branch, moduleSlug, checklistType } = params;
  const base = `/api/pdf`;
  const query = new URLSearchParams({ country, branch });
  if (type === "full-guide") return `${base}/full-guide?${query}`;
  if (type === "module" && moduleSlug) {
    query.set("module", moduleSlug);
    return `${base}/module?${query}`;
  }
  if (type === "checklist" && checklistType) {
    query.set("type", checklistType);
    return `${base}/checklist?${query}`;
  }
  return `${base}/full-guide?${query}`;
}
