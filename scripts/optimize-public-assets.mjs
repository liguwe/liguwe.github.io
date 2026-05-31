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
    copiedFromCache: 0,
    beforeBytes: 0,
    afterBytes: 0,
  };

  let cacheDir = null;
  let registryPath = null;
  let registry = {};

  if (assetRefs.length > 0) {
    cacheDir = path.resolve(path.dirname(assetRefs[0].outputPath), "../.cache");
    await fs.mkdir(cacheDir, { recursive: true });
    registryPath = path.join(cacheDir, "registry.json");

    try {
      const content = await fs.readFile(registryPath, "utf8");
      registry = JSON.parse(content);
    } catch (e) {
      // 忽略找不到或损坏的缓存文件
    }
  }

  for (const { sourcePath, outputPath } of assetRefs) {
    const stat = await fs.stat(sourcePath);
    stats.beforeBytes += stat.size;
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    if (shouldConvertToWebp(sourcePath)) {
      const outputFilename = path.basename(outputPath);
      const cachedFilePath = path.join(cacheDir, outputFilename);
      const cacheKey = `${sourcePath}:${stat.size}:${stat.mtimeMs}`;

      let useCache = false;
      if (registry[cacheKey] === outputFilename) {
        try {
          await fs.access(cachedFilePath);
          useCache = true;
        } catch (e) {
          // 缓存文件不存在，则需要重新生成
        }
      }

      if (useCache) {
        await fs.copyFile(cachedFilePath, outputPath);
        stats.copiedFromCache += 1;
      } else {
        await sharp(sourcePath).webp(getWebpOptions(sourcePath)).toFile(cachedFilePath);
        await fs.copyFile(cachedFilePath, outputPath);
        registry[cacheKey] = outputFilename;
        stats.converted += 1;
      }
    } else {
      await fs.copyFile(sourcePath, outputPath);
      stats.copied += 1;
    }

    stats.afterBytes += await getFileSize(outputPath);
  }

  // 保存最新的缓存映射
  if (registryPath) {
    await fs.writeFile(registryPath, JSON.stringify(registry, null, 2), "utf8");
  }

  const savedBytes = stats.beforeBytes - stats.afterBytes;
  const savedRate =
    stats.beforeBytes > 0
      ? `${((savedBytes / stats.beforeBytes) * 100).toFixed(1)}%`
      : "0.0%";

  console.log(
    `   Public assets optimized → ${stats.converted} converted, ${stats.copied} copied, ${stats.copiedFromCache} loaded from cache`,
  );
  console.log(
    `   Asset size → ${formatKb(stats.beforeBytes)} → ${formatKb(stats.afterBytes)} (${formatKb(savedBytes)} saved, ${savedRate})`,
  );

  return stats;
}

