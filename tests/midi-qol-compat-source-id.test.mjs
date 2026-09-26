import test from "node:test";
import assert from "node:assert/strict";
import { MidiQOLCompat } from "../scripts/midi-qol-compat.mjs";

test("resolveItemSourceId returns custom module sourceId when present in flags", () => {
  const item = {
    _id: "random16charitem",
    flags: {
      "artificer-onednd": {
        sourceId: "elixirhealing000"
      }
    }
  };
  const resolved = MidiQOLCompat.resolveItemSourceId(item);
  assert.equal(resolved, "elixirhealing000");
});

test("resolveItemSourceId extracts item ID from _stats.compendiumSource", () => {
  const item = {
    _id: "random16charitem",
    _stats: {
      compendiumSource: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatcrimsonrit"
    }
  };
  const resolved = MidiQOLCompat.resolveItemSourceId(item);
  assert.equal(resolved, "whfeatcrimsonrit");
});

test("resolveItemSourceId extracts item ID from flags.core.sourceId", () => {
  const item = {
    _id: "random16charitem",
    flags: {
      core: {
        sourceId: "Compendium.artificer-onednd.ua-features.Item.uajolttolife0001"
      }
    }
  };
  const resolved = MidiQOLCompat.resolveItemSourceId(item);
  assert.equal(resolved, "uajolttolife0001");
});

test("resolveItemSourceId falls back to _id or id when no compendium flags exist", () => {
  const itemWithUnderscoreId = { _id: "directitemid1234" };
  assert.equal(MidiQOLCompat.resolveItemSourceId(itemWithUnderscoreId), "directitemid1234");

  const itemWithId = { id: "anotheritemid123" };
  assert.equal(MidiQOLCompat.resolveItemSourceId(itemWithId), "anotheritemid123");
});

test("resolveItemSourceId returns null for invalid or null items", () => {
  assert.equal(MidiQOLCompat.resolveItemSourceId(null), null);
  assert.equal(MidiQOLCompat.resolveItemSourceId(undefined), null);
  assert.equal(MidiQOLCompat.resolveItemSourceId({}), null);
});
