/**
 * Build script — generates static PDF files for every supported country + branch combo.
 * Run via: npm run generate:role-pdfs (called automatically before next build)
 * Output:  public/role-requirements/<key>.pdf
 */

import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import {
  branchRoleRequirements,
  type BranchRoleRequirements,
  type BranchRoleRow,
} from "../src/data/branchRoleRequirements";

const OUT_DIR = path.resolve(process.cwd(), "public/role-requirements");

// ---------------------------------------------------------------------------
// Design constants
// ---------------------------------------------------------------------------
const ACCENT     = "#6F8F3E";
const HEADER_BG  = "#374151";
const HEADER_FG  = "#ffffff";
const EVEN_BG    = "#f9fafb";
const ODD_BG     = "#ffffff";
const BODY_FG    = "#1f2937";
const MUTED_FG   = "#6b7280";
const BORDER     = "#d1d5db";
const DISC_BG    = "#f3f4f6";

const MARGIN     = 36;
const PAD_X      = 5;
const PAD_Y      = 5;
const HDR_H      = 18;
const F_BODY     = 7;
const F_COL_HDR  = 6.5;

// ---------------------------------------------------------------------------
// Column layout — same for all branches (overview style)
// ---------------------------------------------------------------------------
type ColDef = { key: keyof BranchRoleRow; label: string; width: number; bold?: boolean };

function buildColumns(contentW: number): ColDef[] {
  // Role(100) + Category(80) + Education(100) + Aptitude(100) + Fitness(90) + Medical(75) + Notes = contentW
  const fixed = 100 + 80 + 100 + 100 + 90 + 75;
  return [
    { key: "role",      label: "Role",      width: 100, bold: true },
    { key: "category",  label: "Category",  width: 80  },
    { key: "education", label: "Education", width: 100 },
    { key: "aptitude",  label: "Aptitude",  width: 100 },
    { key: "fitness",   label: "Fitness",   width: 90  },
    { key: "medical",   label: "Medical",   width: 75  },
    { key: "notes",     label: "Notes",     width: contentW - fixed },
  ];
}

// ---------------------------------------------------------------------------
// PDF generator
// ---------------------------------------------------------------------------
function generatePdf(data: BranchRoleRequirements): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: "A4",
      layout: "landscape",
      margins: { top: MARGIN, bottom: MARGIN + 12, left: MARGIN, right: MARGIN },
      autoFirstPage: true,
      bufferPages: true,
    });

    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end",  ()         => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const PW       = doc.page.width;
    const PH       = doc.page.height;
    const CW       = PW - MARGIN * 2;
    const FOOTER_Y = PH - MARGIN - 8;
    const MAX_Y    = FOOTER_Y - 4;

    const cols  = buildColumns(CW);
    let pageNum = 1;

    // ---- helpers -----------------------------------------------------------

    function footer() {
      doc.font("Helvetica").fontSize(6).fillColor(MUTED_FG)
        .text(
          `Free Join Ready reference sheet — verify final requirements with official recruitment sources.  |  Page ${pageNum}`,
          MARGIN, FOOTER_Y, { width: CW, align: "center" }
        );
    }

    function newPage() {
      doc.addPage(); pageNum++;
      footer();
    }

    function tableHeader(y: number): number {
      doc.rect(MARGIN, y, CW, HDR_H).fill(HEADER_BG);
      let x = MARGIN;
      for (const col of cols) {
        doc.font("Helvetica-Bold").fontSize(F_COL_HDR).fillColor(HEADER_FG)
          .text(col.label.toUpperCase(), x + PAD_X, y + 5, {
            width: col.width - PAD_X * 2, lineBreak: false, ellipsis: false,
          });
        x += col.width;
      }
      doc.rect(MARGIN, y, CW, HDR_H).stroke(BORDER);
      return y + HDR_H;
    }

    function calcRowH(row: BranchRoleRow): number {
      doc.font("Helvetica").fontSize(F_BODY);
      let h = 14;
      for (const col of cols) {
        const val = String(row[col.key] ?? "");
        const cellH = doc.heightOfString(val, { width: col.width - PAD_X * 2 }) + PAD_Y * 2;
        if (cellH > h) h = cellH;
      }
      return h;
    }

    function drawRow(row: BranchRoleRow, idx: number, y: number, rh: number): number {
      doc.rect(MARGIN, y, CW, rh).fill(idx % 2 === 0 ? EVEN_BG : ODD_BG);
      let x = MARGIN;
      for (const col of cols) {
        const val = String(row[col.key] ?? "");
        doc.rect(x, y, col.width, rh).stroke(BORDER);
        doc.font(col.bold ? "Helvetica-Bold" : "Helvetica")
          .fontSize(F_BODY).fillColor(BODY_FG)
          .text(val, x + PAD_X, y + PAD_Y, {
            width: col.width - PAD_X * 2, lineBreak: true, align: "left",
          });
        x += col.width;
      }
      return y + rh;
    }

    // ---- page 1 header -----------------------------------------------------

    let y = MARGIN;

    doc.font("Helvetica-Bold").fontSize(7.5).fillColor(ACCENT)
      .text("JOIN READY", MARGIN, y, { characterSpacing: 1.5 });
    y += 12;

    doc.font("Helvetica-Bold").fontSize(13).fillColor(BODY_FG)
      .text(data.title, MARGIN, y);
    y += 17;

    doc.font("Helvetica").fontSize(7.5).fillColor(MUTED_FG)
      .text(`${data.subtitle}   ·   Free reference sheet · join-ready.com`, MARGIN, y);
    y += 13;

    // Disclaimer box
    const discText = `Planning reference only.  ${data.disclaimer}`;
    doc.font("Helvetica").fontSize(6.5);
    const discH = doc.heightOfString(discText, { width: CW - 14 }) + 12;
    doc.rect(MARGIN, y, CW, discH).fill(DISC_BG).stroke(BORDER);
    doc.font("Helvetica").fontSize(6.5).fillColor(MUTED_FG)
      .text(discText, MARGIN + 7, y + 6, { width: CW - 14, lineBreak: true });
    y += discH + 10;

    // ---- table -------------------------------------------------------------

    y = tableHeader(y);

    for (let i = 0; i < data.rows.length; i++) {
      const row = data.rows[i];
      const rh  = calcRowH(row);

      if (y + rh > MAX_Y) {
        doc.moveTo(MARGIN, y).lineTo(MARGIN + CW, y).stroke(BORDER);
        newPage();
        y = MARGIN;
        y = tableHeader(y);
      }

      y = drawRow(row, i, y, rh);
    }

    // Bottom border + source note
    doc.moveTo(MARGIN, y).lineTo(MARGIN + CW, y).stroke(BORDER);
    y += 7;
    doc.font("Helvetica").fontSize(6).fillColor(MUTED_FG)
      .text(
        `Official source: ${data.officialSourceName}   ${data.officialSourceUrl}`,
        MARGIN, y, { width: CW }
      );

    footer();
    doc.end();
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const keys = Object.keys(branchRoleRequirements);
  console.log(`Generating ${keys.length} role requirements PDFs…`);

  for (const key of keys) {
    const data   = branchRoleRequirements[key];
    const buffer = await generatePdf(data);
    const dest   = path.join(OUT_DIR, `${key}.pdf`);
    fs.writeFileSync(dest, buffer);
    console.log(`  ✓  ${key}.pdf  (${(buffer.length / 1024).toFixed(1)} KB)`);
  }

  console.log(`\nDone — all PDFs in public/role-requirements/`);
}

main().catch((err) => { console.error("PDF generation failed:", err); process.exit(1); });
