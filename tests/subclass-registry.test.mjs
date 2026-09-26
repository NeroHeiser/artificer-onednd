import test from "node:test";
import assert from "node:assert/strict";
import { SUBCLASS_REGISTRY, registerSubclasses } from "../scripts/subclass-registry.mjs";

const UUID_REGEX = /^Compendium\.artificer-onednd\.(artificer-subclasses|witch-hunter-subclasses|psion-subclasses|ua-subclasses)\.Item\.[a-zA-Z0-9]{16}$/;

test("SUBCLASS_REGISTRY contains valid frozen classes and UUID paths", () => {
  assert.ok(Object.isFrozen(SUBCLASS_REGISTRY), "SUBCLASS_REGISTRY should be frozen");

  const expectedClasses = [
    "artificer",
    "witch-hunter",
    "psion",
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard"
  ];

  for (const cls of expectedClasses) {
    assert.ok(SUBCLASS_REGISTRY[cls], `Expected class '${cls}' to be in registry`);
    assert.ok(Object.isFrozen(SUBCLASS_REGISTRY[cls]), `Class '${cls}' registry should be frozen`);

    for (const [subclassKey, uuid] of Object.entries(SUBCLASS_REGISTRY[cls])) {
      assert.ok(
        UUID_REGEX.test(uuid),
        `Subclass '${subclassKey}' in class '${cls}' has invalid UUID format: '${uuid}'`
      );
    }
  }
});

test("registerSubclasses registers all subclasses and preserves preexisting entries", () => {
  const mockConfig = {
    subclasses: {
      fighter: {
        champion: "Compendium.dnd5e.subclasses.Item.champion000000"
      }
    }
  };

  registerSubclasses(mockConfig);

  // Preexisting entry preserved
  assert.equal(
    mockConfig.subclasses.fighter.champion,
    "Compendium.dnd5e.subclasses.Item.champion000000"
  );

  // New entries merged
  assert.equal(
    mockConfig.subclasses.fighter["arcane-archer"],
    "Compendium.artificer-onednd.ua-subclasses.Item.uasubfgtarcanear"
  );
  assert.equal(
    mockConfig.subclasses.artificer.alchemist,
    "Compendium.artificer-onednd.artificer-subclasses.Item.alchemistsubcl00"
  );
  assert.equal(
    mockConfig.subclasses.psion.metamorph,
    "Compendium.artificer-onednd.psion-subclasses.Item.psionsubmetamorp"
  );

  // Alias created
  assert.equal(
    mockConfig.subclasses.witchhunter,
    mockConfig.subclasses["witch-hunter"]
  );
});

test("registerSubclasses safely handles null or empty config", () => {
  assert.doesNotThrow(() => registerSubclasses(null));
  assert.doesNotThrow(() => registerSubclasses(undefined));

  const emptyConfig = {};
  registerSubclasses(emptyConfig);
  assert.ok(emptyConfig.subclasses);
  assert.ok(emptyConfig.subclasses.artificer);
});
