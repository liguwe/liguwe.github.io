import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const webpSourceExts = new Set([".jpeg", ".jpg", ".png"]);

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function getWebpOptions(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase();

  if (ext === ".png") {
    return { lossless: true, effort: 4 };
  }

  return { quality: 85, effort: 4 };
}

function shouldConvertToWebp(sourcePath) {
  return webpSourceExts.has(path.extname(sourcePath).toLowerCase());
}

async function getFileSize(filePath) {
  const stat = await fs.stat(filePath);
  return stat.size;
}

export async function publishPublicAssets(assetRefs) {
  const stats = {
    converted: 0,
    copied: 0,
    beforeBytes: 0,
    afterBytes: 0,
  };

  for (const { sourcePath, outputPath } of assetRefs) {
    stats.beforeBytes += await getFileSize(sourcePath);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    if (shouldConvertToWebp(sourcePath)) {
      await sharp(sourcePath).webp(getWebpOptions(sourcePath)).toFile(outputPath);
      stats.converted += 1;
    } else {
      await fs.copyFile(sourcePath, outputPath);
      stats.copied += 1;
    }

    stats.afterBytes += await getFileSize(outputPath);
  }

  const savedBytes = stats.beforeBytes - stats.afterBytes;
  const savedRate =
    stats.beforeBytes > 0
      ? `${((savedBytes / stats.beforeBytes) * 100).toFixed(1)}%`
      : "0.0%";

  console.log(
    `   Public assets optimized → ${stats.converted} converted, ${stats.copied} copied`,
  );
  console.log(
    `   Asset size → ${formatKb(stats.beforeBytes)} → ${formatKb(stats.afterBytes)} (${formatKb(savedBytes)} saved, ${savedRate})`,
  );

  return stats;
}
