#!/usr/bin/env node
/**
 * Downloads the real image binaries for every `*.asset.json` pointer file
 * left behind when a Lovable project is exported/cloned to GitHub without
 * its assets. Each `.asset.json` holds a relative `/__l5e/assets-v1/...`
 * path that only resolves inside Lovable's own preview/proxy infrastructure
 * (see LOVABLE_PREVIEW_HOST handling in
 * @lovable.dev/vite-tanstack-config/dist/index.js). This script resolves
 * that path against `https://id-preview--<project_id>.lovable.app` and
 * saves the binary next to the pointer, under its `original_filename`.
 *
 * Usage: node scripts/download-lovable-assets.mjs [assetsDir]
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const assetsDir = process.argv[2] ?? "src/assets";

async function main() {
  const entries = await readdir(assetsDir);
  const pointerFiles = entries.filter((f) => f.endsWith(".asset.json"));

  if (pointerFiles.length === 0) {
    console.log(`No .asset.json files found in ${assetsDir}`);
    return;
  }

  console.log(`Found ${pointerFiles.length} asset pointer(s) in ${assetsDir}\n`);

  let ok = 0;
  let failed = 0;

  for (const file of pointerFiles) {
    const pointerPath = join(assetsDir, file);
    const pointer = JSON.parse(await readFile(pointerPath, "utf8"));
    const { project_id, url, original_filename, size } = pointer;

    if (!project_id || !url || !original_filename) {
      console.warn(`⚠︎  Skipping ${file}: missing project_id/url/original_filename`);
      failed++;
      continue;
    }

    const downloadUrl = `https://id-preview--${project_id}.lovable.app${url}`;
    const destPath = join(assetsDir, original_filename);

    process.stdout.write(`↓ ${original_filename} ... `);
    try {
      const res = await fetch(downloadUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());

      if (typeof size === "number" && buf.length !== size) {
        console.warn(`\n⚠︎  ${original_filename}: downloaded ${buf.length} bytes, expected ${size}`);
      }

      await writeFile(destPath, buf);
      console.log(`ok (${buf.length} bytes)`);
      ok++;
    } catch (err) {
      console.log(`FAILED (${err.message})`);
      failed++;
    }
  }

  console.log(`\nDone: ${ok} downloaded, ${failed} failed.`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
