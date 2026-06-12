import { execFileSync } from "node:child_process";

const output = execFileSync("git", ["ls-files", "docs/blog/*.md"], {
  encoding: "utf8",
});
const groups = new Map();

for (const filePath of output.split("\n").filter(Boolean)) {
  const key = filePath.toLowerCase();
  const paths = groups.get(key) || [];
  paths.push(filePath);
  groups.set(key, paths);
}

const duplicates = Array.from(groups.values()).filter(
  (paths) => paths.length > 1,
);

if (duplicates.length > 0) {
  console.error("Case-insensitive duplicate docs/blog paths found:");
  for (const paths of duplicates) {
    console.error(`- ${paths.join(" | ")}`);
  }
  process.exit(1);
}

console.log("No case-insensitive duplicate docs/blog paths found.");
