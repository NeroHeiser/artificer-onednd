import test from "node:test";
import assert from "node:assert/strict";
import { getWorkshopCatalogs, WORKSHOP_CATALOGS, PLAN_ITEM_MAP } from "../scripts/apps/artificer-workshop-data.mjs";

test("getWorkshopCatalogs returns frozen, fully populated English catalog", () => {
  const enCatalog = getWorkshopCatalogs(false);

  assert.ok(Object.isFrozen(enCatalog), "English catalog should be frozen");
  assert.equal(enCatalog.tinkerItems.length, 31, "Should have 31 tinker items");
  assert.equal(enCatalog.plansTier2.length, 16, "Should have 16 tier 2 plans");
  assert.equal(enCatalog.plansTier6.length, 9, "Should have 9 tier 6 plans");
  assert.equal(enCatalog.plansTier10.length, 24, "Should have 24 tier 10 plans");
  assert.equal(enCatalog.plansTier14.length, 7, "Should have 7 tier 14 plans");

  const sampleTinker = enCatalog.tinkerItems[0];
  assert.equal(sampleTinker.id, "ball-bearings");
  assert.equal(sampleTinker.name, "Ball Bearings");
  assert.equal(sampleTinker.icon, "fas fa-circle");
});

test("getWorkshopCatalogs returns frozen, localized Portuguese catalog", () => {
  const ptCatalog = getWorkshopCatalogs(true);

  assert.ok(Object.isFrozen(ptCatalog), "Portuguese catalog should be frozen");
  assert.equal(ptCatalog.tinkerItems.length, 31);
  assert.equal(ptCatalog.plansTier2.length, 16);

  const sampleTinker = ptCatalog.tinkerItems[0];
  assert.equal(sampleTinker.id, "ball-bearings");
  assert.equal(sampleTinker.name, "Esferas de Metal");

  const samplePlan = ptCatalog.plansTier2[0];
  assert.equal(samplePlan.name, "Jarra de Alquimia");
});

test("PLAN_ITEM_MAP contains frozen valid 16-character ID mappings for English and Portuguese keys", () => {
  assert.ok(Object.isFrozen(PLAN_ITEM_MAP), "PLAN_ITEM_MAP should be frozen");
  const idRegex = /^[a-zA-Z0-9]{16}$/;

  for (const [key, targetId] of Object.entries(PLAN_ITEM_MAP)) {
    assert.equal(key, key.toLowerCase(), `Mapping key '${key}' must be lowercase`);
    assert.ok(
      idRegex.test(targetId),
      `Target ID '${targetId}' for key '${key}' must be 16 alphanumeric characters`
    );
  }

  assert.equal(PLAN_ITEM_MAP["manifold tool"], "repmanifoldtool0");
  assert.equal(PLAN_ITEM_MAP["ferramenta multifuncional"], "repmanifoldtool0");
});
