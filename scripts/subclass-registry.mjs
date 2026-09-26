/**
 * subclass-registry.mjs
 * Declarative subclass mappings and CONFIG.DND5E registrations for Artificer,
 * Witch Hunter, Psion, and Unearthed Arcana archetypes.
 */

export const SUBCLASS_REGISTRY = Object.freeze({
  artificer: Object.freeze({
    alchemist: "Compendium.artificer-onednd.artificer-subclasses.Item.alchemistsubcl00",
    armorer: "Compendium.artificer-onednd.artificer-subclasses.Item.armorersubclass0",
    artillerist: "Compendium.artificer-onednd.artificer-subclasses.Item.artilleristsub00",
    "battle-smith": "Compendium.artificer-onednd.artificer-subclasses.Item.battlesmithsub00",
    cartographer: "Compendium.artificer-onednd.artificer-subclasses.Item.cartographersub0",
    reanimator: "Compendium.artificer-onednd.ua-subclasses.Item.uasubreanimator0"
  }),
  "witch-hunter": Object.freeze({
    ghostslayer: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubghostslayer",
    lycan: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsublycan000000",
    mutant: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubmutant00000",
    "profane-soul": "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubprofanesoul"
  }),
  psion: Object.freeze({
    metamorph: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubmetamorp",
    psykinetic: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubpsykine1",
    telepath: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubtelepath"
  }),
  barbarian: Object.freeze({
    unlight: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbunlight",
    lament: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarblament0",
    "spiritual-guardian": "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbspirit0",
    "storm-herald": "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbstormh0"
  }),
  bard: Object.freeze({
    spirits: "Compendium.artificer-onednd.ua-subclasses.Item.uasubspiritbard0",
    moon: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmoonbard000"
  }),
  cleric: Object.freeze({
    grave: "Compendium.artificer-onednd.ua-subclasses.Item.uasubgravecleric",
    arcana: "Compendium.artificer-onednd.ua-subclasses.Item.uasubarcanacleri",
    knowledge: "Compendium.artificer-onednd.ua-subclasses.Item.uasubknowcleric1"
  }),
  druid: Object.freeze({
    preservation: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpreservdrui",
    titan: "Compendium.artificer-onednd.ua-subclasses.Item.uasubdruidtitan0"
  }),
  fighter: Object.freeze({
    "arcane-archer": "Compendium.artificer-onednd.ua-subclasses.Item.uasubfgtarcanear",
    "purple-dragon-knight": "Compendium.artificer-onednd.ua-subclasses.Item.uasubpdragknight",
    gladiator: "Compendium.artificer-onednd.ua-subclasses.Item.uasubgladiatorfg",
    "hell-knight": "Compendium.artificer-onednd.ua-subclasses.Item.uasubfghthellkni",
    cavalier: "Compendium.artificer-onednd.ua-subclasses.Item.uasubfgtcavalier"
  }),
  monk: Object.freeze({
    "tattooed-warrior": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonktattoo1",
    "mystic-arts": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkmystica",
    venom: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkvenom00",
    intoxication: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkdrunk00"
  }),
  paladin: Object.freeze({
    "noble-genies": "Compendium.artificer-onednd.ua-subclasses.Item.uasubpalgenies01",
    spellguard: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpalspellgua",
    oathbreaker: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpaloathbrk0"
  }),
  ranger: Object.freeze({
    "hollow-warden": "Compendium.artificer-onednd.ua-subclasses.Item.uasubhollowward1",
    "winter-walker": "Compendium.artificer-onednd.ua-subclasses.Item.uasubwinterwlk01"
  }),
  rogue: Object.freeze({
    phantom: "Compendium.artificer-onednd.ua-subclasses.Item.uasubphantomrogu",
    "scion-of-the-three": "Compendium.artificer-onednd.ua-subclasses.Item.uasubscionthree1",
    "magic-stealer": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmagicsteal1",
    "house-agent": "Compendium.artificer-onednd.ua-subclasses.Item.uasubhouseagent0"
  }),
  sorcerer: Object.freeze({
    shadow: "Compendium.artificer-onednd.ua-subclasses.Item.uasubshadowsorce",
    ancestral: "Compendium.artificer-onednd.ua-subclasses.Item.uasubancestrals1",
    spellfire: "Compendium.artificer-onednd.ua-subclasses.Item.uasubspellfire01",
    defiled: "Compendium.artificer-onednd.ua-subclasses.Item.uasubdefiledsorc",
    demonic: "Compendium.artificer-onednd.ua-subclasses.Item.uasubsorcdemonic"
  }),
  warlock: Object.freeze({
    hexblade: "Compendium.artificer-onednd.ua-subclasses.Item.uasubhexbladewar",
    undead: "Compendium.artificer-onednd.ua-subclasses.Item.uasubundeadwlk01",
    "sorcerer-king": "Compendium.artificer-onednd.ua-subclasses.Item.uasubsorckpatron",
    vestige: "Compendium.artificer-onednd.ua-subclasses.Item.uasubvestigepatr",
    primordial: "Compendium.artificer-onednd.ua-subclasses.Item.uasubprimordial0"
  }),
  wizard: Object.freeze({
    conjurer: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwizconjurer",
    enchanter: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwizenchante",
    necromancer: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwiznecroman",
    transmuter: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwiztransmut",
    bladesinger: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbladesing01",
    imaskarcanist: "Compendium.artificer-onednd.ua-subclasses.Item.uasubimaskarcan0"
  })
});

/**
 * Registers all subclasses from the registry into CONFIG.DND5E.subclasses.
 * Safely preserves any preexisting subclasses defined by the system or other modules.
 * @param {object} dnd5eConfig - CONFIG.DND5E reference
 */
export function registerSubclasses(dnd5eConfig) {
  if (!dnd5eConfig) return;

  dnd5eConfig.subclasses = dnd5eConfig.subclasses || {};

  for (const [classIdentifier, subclasses] of Object.entries(SUBCLASS_REGISTRY)) {
    dnd5eConfig.subclasses[classIdentifier] = {
      ...(dnd5eConfig.subclasses[classIdentifier] || {}),
      ...subclasses
    };
  }

  // Alias witch-hunter to witchhunter for compatibility
  if (dnd5eConfig.subclasses["witch-hunter"]) {
    dnd5eConfig.subclasses.witchhunter = dnd5eConfig.subclasses["witch-hunter"];
  }
}
