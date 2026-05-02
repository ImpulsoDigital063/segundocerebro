import { marked } from "marked";
import fs from "fs";
import path from "path";

const BASE = path.resolve("..");

const FILES = [
  { path: "plano-lancamento-7dias.md", title: "Plano de Lançamento — 7 Dias" },
  { path: "roteiros/reel-1-curadoria.md", title: "Reel 1 — Curadoria Profissional" },
  { path: "roteiros/reel-2-motoboy.md", title: "Reel 2 — Motoboy Palmas" },
  { path: "roteiros/reel-3-educativo.md", title: "Reel 3 — Educativo" },
  { path: "roteiros/stories-pack-7dias.md", title: "Pack de Stories — 7 Dias" },
];

marked.setOptions({ gfm: true, breaks: false });

const sections = FILES.map((f, i) => {
  const md = fs.readFileSync(path.join(BASE, f.path), "utf-8");
  const html = marked.parse(md);
  const pageBreak = i > 0 ? 'style="page-break-before: always;"' : "";
  return `<section ${pageBreak}>${html}</section>`;
}).join("\n");

const cover = `
<section class="cover">
  <div class="cover-tag">IMPULSO DIGITAL · PLANO COMPLETO</div>
  <h1 class="cover-title">GB Nutrition</h1>
  <h2 class="cover-subtitle">Lançamento · 7 dias de estratégia</h2>
  <div class="cover-meta">
    <div><strong>Cliente:</strong> Gabriel Barros</div>
    <div><strong>Produto:</strong> GB Nutrition — curadoria de suplementos</div>
    <div><strong>URL:</strong> gbnutrition.online</div>
    <div><strong>Reunião de apresentação:</strong> 20/04/2026, 16h</div>
    <div><strong>Responsável (Impulso):</strong> Eduardo Barros</div>
  </div>
  <div class="cover-toc">
    <strong>Nesse documento:</strong>
    <ol>
      <li>Plano de lançamento — 7 dias (cronograma + entregáveis)</li>
      <li>Reel 1 — Curadoria profissional</li>
      <li>Reel 2 — Motoboy Palmas (logística)</li>
      <li>Reel 3 — Educativo</li>
      <li>Pack de stories — 30 ideias distribuídas nos 7 dias</li>
    </ol>
  </div>
</section>
`;

const css = `
* { box-sizing: border-box; }

@page {
  size: A4;
  margin: 18mm 16mm 20mm 16mm;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.55;
  color: #334155;
  background: #ffffff;
}

section { padding: 0; }

.cover {
  padding: 40mm 0 0 0;
  border-top: 6pt solid #1e3a8a;
}
.cover-tag {
  font-size: 9pt;
  letter-spacing: 3pt;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 18pt;
}
.cover-title {
  font-size: 46pt;
  color: #1e3a8a;
  margin: 0 0 6pt 0;
  font-weight: 800;
  letter-spacing: -1pt;
}
.cover-subtitle {
  font-size: 18pt;
  color: #475569;
  font-weight: 400;
  margin: 0 0 40pt 0;
  border: none;
  padding: 0;
}
.cover-meta {
  background: #eff6ff;
  border-left: 4pt solid #2563eb;
  padding: 14pt 18pt;
  margin-bottom: 30pt;
  color: #475569;
  font-size: 10.5pt;
}
.cover-meta div { margin: 3pt 0; }
.cover-meta strong { color: #1e3a8a; }
.cover-toc {
  color: #475569;
  font-size: 10.5pt;
}
.cover-toc strong { color: #1e3a8a; font-size: 11pt; }
.cover-toc ol { margin-top: 6pt; padding-left: 18pt; }
.cover-toc li { margin: 4pt 0; }

h1 {
  color: #1e3a8a;
  font-size: 22pt;
  font-weight: 700;
  border-bottom: 2pt solid #93c5fd;
  padding-bottom: 6pt;
  margin-top: 0;
  margin-bottom: 14pt;
  page-break-after: avoid;
}
h2 {
  color: #2563eb;
  font-size: 15pt;
  font-weight: 600;
  margin-top: 22pt;
  margin-bottom: 10pt;
  border-bottom: 1pt solid #cbd5e1;
  padding-bottom: 4pt;
  page-break-after: avoid;
}
h3 {
  color: #1e40af;
  font-size: 12pt;
  font-weight: 600;
  margin-top: 16pt;
  margin-bottom: 6pt;
  page-break-after: avoid;
}
h4 {
  color: #475569;
  font-size: 10.5pt;
  font-weight: 700;
  margin-top: 12pt;
  margin-bottom: 4pt;
  text-transform: uppercase;
  letter-spacing: 0.5pt;
  page-break-after: avoid;
}

p { margin: 6pt 0; color: #334155; }
strong { color: #1e3a8a; font-weight: 600; }
em { color: #475569; font-style: italic; }

a { color: #2563eb; text-decoration: none; border-bottom: 0.5pt dotted #93c5fd; }

ul, ol { margin: 6pt 0; padding-left: 20pt; }
li { margin: 3pt 0; color: #334155; }
li::marker { color: #2563eb; }

blockquote {
  border-left: 3pt solid #3b82f6;
  background: #eff6ff;
  padding: 8pt 14pt;
  margin: 10pt 0;
  color: #475569;
  font-style: italic;
  page-break-inside: avoid;
}
blockquote p { color: #475569; margin: 3pt 0; }
blockquote strong { color: #1e40af; }

code {
  background: #f1f5f9;
  color: #1e40af;
  padding: 1pt 4pt;
  border-radius: 2pt;
  font-family: "Consolas", "Courier New", monospace;
  font-size: 9.5pt;
}
pre {
  background: #f8fafc;
  border: 1pt solid #cbd5e1;
  padding: 10pt;
  border-radius: 3pt;
  color: #334155;
  font-size: 9.5pt;
  page-break-inside: avoid;
  overflow-x: auto;
}
pre code { background: transparent; padding: 0; color: #334155; }

table {
  width: 100%;
  border-collapse: collapse;
  margin: 12pt 0;
  font-size: 9.5pt;
  page-break-inside: avoid;
}
thead {
  background: #dbeafe;
  color: #1e3a8a;
}
th {
  padding: 7pt 10pt;
  text-align: left;
  font-weight: 600;
  border: 1pt solid #93c5fd;
  color: #1e3a8a;
}
td {
  padding: 6pt 10pt;
  border: 1pt solid #cbd5e1;
  color: #475569;
  vertical-align: top;
}
tbody tr:nth-child(even) { background: #f8fafc; }
tbody tr:nth-child(odd) { background: #ffffff; }
td strong { color: #1e3a8a; }

hr {
  border: none;
  border-top: 1pt dashed #94a3b8;
  margin: 20pt 0;
}

input[type="checkbox"] {
  accent-color: #2563eb;
  margin-right: 4pt;
}

/* checkbox lists look sharper with custom style */
li input[type="checkbox"] { transform: translateY(1pt); }

section { color: #334155; }
`;

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>GB Nutrition — Plano de Lançamento</title>
  <style>${css}</style>
</head>
<body>
  ${cover}
  ${sections}
</body>
</html>`;

fs.writeFileSync("output.html", html, "utf-8");
console.log("HTML_OK");
