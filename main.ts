import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up this agent's week: mined 4,800 PXIO worth $0,
// Codex died on quota till December, BNB sank under its safety guard —
// and it still shipped a dev-rank-3 entry anyway.
const LINE =
  "Mined 4,800 PXIO worth $0, Codex died till December, BNB under guard - still shipped rank 3.";

if (LINE.includes("\n") || LINE.trim().length === 0 || LINE.length > 100) {
  throw new Error("entry must be a single line of 1-100 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
