import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CompendiumSync } from "../scripts/compendium-sync.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const MODULE_JSON_PATH = path.join(ROOT_DIR, "module.json");
const DATA_EN_DIR = path.join(ROOT_DIR, "scripts/data/en");
const DATA_PT_DIR = path.join(ROOT_DIR, "scripts/data/pt-BR");

const ID_REGEX = /^[a-zA-Z0-9]{16}$/;

test("module.json packs match CompendiumSync.PACKS definitions", () => {
  const moduleJson = JSON.parse(fs.readFileSync(MODULE_JSON_PATH, "utf-8"));
  const manifestPackNames = new Set(moduleJson.packs.map(p => p.name));
  const syncPackIds = new Set(CompendiumSync.PACKS.map(p => p.id));

  assert.equal(
    manifestPackNames.size,
    syncPackIds.size,
    `Pack count mismatch: module.json has ${manifestPackNames.size}, CompendiumSync has ${syncPackIds.size}`
  );

  for (const packId of syncPackIds) {
    assert.ok(
      manifestPackNames.has(packId),
      `Pack '${packId}' in CompendiumSync.PACKS is missing from module.json`
    );
  }
});

test("all compendium data files exist in both en and pt-BR locales", () => {
  for (const pack of CompendiumSync.PACKS) {
    const enFilePath = path.join(DATA_EN_DIR, pack.file);
    const ptFilePath = path.join(DATA_PT_DIR, pack.file);

    assert.ok(
      fs.existsSync(enFilePath),
      `Expected English data file to exist: ${pack.file}`
    );
    assert.ok(
      fs.existsSync(ptFilePath),
      `Expected Portuguese data file to exist: ${pack.file}`
    );
  }
});

test("all compendium documents possess valid 16-character IDs and metadata", () => {
  for (const pack of CompendiumSync.PACKS) {
    const enFilePath = path.join(DATA_EN_DIR, pack.file);
    const documents = JSON.parse(fs.readFileSync(enFilePath, "utf-8"));

    assert.ok(Array.isArray(documents), `${pack.file} content should be an array`);
    assert.ok(documents.length > 0, `${pack.file} should contain at least one document`);

    const seenIds = new Set();

    for (const doc of documents) {
      assert.ok(
        ID_REGEX.test(doc._id),
        `Document '${doc.name || "unnamed"}' in ${pack.file} has invalid _id: '${doc._id}'`
      );

      assert.ok(
        typeof doc.name === "string" && doc.name.trim().length > 0,
        `Document with id '${doc._id}' in ${pack.file} must have a non-empty name`
      );

      assert.ok(
        typeof doc.type === "string" && doc.type.trim().length > 0,
        `Document '${doc.name}' (${doc._id}) in ${pack.file} must have a non-empty type`
      );

      assert.ok(
        !seenIds.has(doc._id),
        `Duplicate document _id '${doc._id}' found in ${pack.file}`
      );
      seenIds.add(doc._id);
    }
  }
});

test("compendium files maintain 1:1 ID parity between en and pt-BR locales", () => {
  for (const pack of CompendiumSync.PACKS) {
    const enDocs = JSON.parse(fs.readFileSync(path.join(DATA_EN_DIR, pack.file), "utf-8"));
    const ptDocs = JSON.parse(fs.readFileSync(path.join(DATA_PT_DIR, pack.file), "utf-8"));

    assert.equal(
      enDocs.length,
      ptDocs.length,
      `Document count mismatch in ${pack.file}: en has ${enDocs.length}, pt-BR has ${ptDocs.length}`
    );

    const enIds = new Set(enDocs.map(d => d._id));
    const ptIds = new Set(ptDocs.map(d => d._id));

    assert.equal(
      enIds.size,
      ptIds.size,
      `Unique ID count mismatch in ${pack.file}`
    );

    for (const id of enIds) {
      assert.ok(
        ptIds.has(id),
        `Document ID '${id}' present in en/${pack.file} is missing in pt-BR/${pack.file}`
      );
    }
  }
});
