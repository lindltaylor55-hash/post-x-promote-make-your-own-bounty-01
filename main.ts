// Entry program for make.fun bounty post-x-promote-make-your-own-bounty-01.
//
// The entry is a quote post on X promoting make.fun's make-your-own-bounty
// post. POST.json holds the address of the live post; this program simply
// copies it to the output directory, where the house reads it and fetches
// the post's counts from X itself.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(botDir, "POST.json");
const dest = join(outDir, "POST.json");
copyFileSync(src, dest);
console.log(`Copied POST.json to ${dest} (${statSync(dest).size} bytes).`);
