import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test("replicated plan item IDs exist in compendium items data", () => {
  const enItemsPath = path.resolve(__dirname, "../scripts/data/en/items.json");
  const enItems = JSON.parse(fs.readFileSync(enItemsPath, "utf-8"));
  const enItemIds = new Set(enItems.map(item => item._id));

  const planItemMap = {
    "manifold tool": "repmanifoldtool0",
    "ferramenta multifuncional": "repmanifoldtool0",
    "repeating shot": "reprepeating0000",
    "disparo repetidor": "reprepeating0000",
    "returning weapon": "repreturningweap",
    "arma retornável": "repreturningweap",
    "mind sharpener": "repmindsharpener",
    "focalizador mental": "repmindsharpener",
    "boots of the winding path": "repwindingboots0",
    "botas do caminho sinuoso": "repwindingboots0",
    "repulsion shield": "reprepulsionshld",
    "escudo de repulsão": "reprepulsionshld"
  };

  for (const [name, targetId] of Object.entries(planItemMap)) {
    assert.ok(
      enItemIds.has(targetId),
      `Expected target ID ${targetId} for '${name}' to exist in items.json`
    );
  }
});
