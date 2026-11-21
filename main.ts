import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Out past the last streetlight, the sea is still arriving, wave after wave, as it arrived before there were streets, before there were names for any of this. Above it, starlight that set out before the first boats. The night is very old, and very patient, and in no hurry.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
