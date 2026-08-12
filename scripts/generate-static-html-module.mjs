import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "public", "vr-consulting-home.html");
const outputPath = path.join(root, "src", "generated", "vr-consulting-home.ts");

const html = await readFile(inputPath, "utf8");
const source = `export const vrConsultingHomeHtml = ${JSON.stringify(html)};\n`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, source);
