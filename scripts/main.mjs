/**
 * main.mjs
 * Módulo Artificer (Forge of the Artificer - One D&D / 2024) para Foundry VTT (v12/v14).
 * Adiciona a classe Artificer e suas 5 subclasses ao sistema D&D 5e,
 * com compêndios completos, sincronização e interface interativa da oficina.
 */

import { CompendiumSync } from "./compendium-sync.mjs";
import { ArtificerWorkshopApp } from "./apps/artificer-workshop.mjs";
import { MidiQOLCompat } from "./midi-qol-compat.mjs";

const MODULE_ID = "artificer-onednd";

/**
 * Hook de Inicialização do Foundry VTT (init).
 */
Hooks.once("init", () => {
  console.log("Expansão de Classes e Arquétipos | Inicializando módulo...");

  // Inicializar suporte ao Midi QOL
  MidiQOLCompat.init();

  // Registrar configurações do módulo
  game.settings.register(MODULE_ID, "enableSheetButton", {
    name: "ARTIFICER_5E.Settings.EnableSheetButton.Name",
    hint: "ARTIFICER_5E.Settings.EnableSheetButton.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "autoSyncCompendiums", {
    name: "ARTIFICER_5E.Settings.AutoSync.Name",
    hint: "ARTIFICER_5E.Settings.AutoSync.Hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "syncedLanguage", {
    name: "ARTIFICER_5E.Settings.SyncedLanguage.Name",
    hint: "ARTIFICER_5E.Settings.SyncedLanguage.Hint",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  // Registrar menu de atalho da Oficina no menu de configurações
  game.settings.registerMenu(MODULE_ID, "workshopMenu", {
    name: "ARTIFICER_5E.Settings.Menu.Name",
    label: "ARTIFICER_5E.Settings.Menu.Label",
    hint: "ARTIFICER_5E.Settings.Menu.Hint",
    icon: "fas fa-wrench",
    type: ArtificerWorkshopApp,
    restricted: false
  });

  // Configurar a progressão de magias e subclasses do Artífice no D&D 5e
  if (CONFIG.DND5E) {
    if (!CONFIG.DND5E.spellProgression) {
      CONFIG.DND5E.spellProgression = {};
    }
    CONFIG.DND5E.spellProgression.artificer = "artificer";

    if (CONFIG.DND5E.spellcastingTypes) {
      CONFIG.DND5E.spellcastingTypes.artificer = {
        label: "ARTIFICER_5E.Class.Name",
        progression: {
          roundUp: true,
          divisor: 2
        }
      };
    }

    // Registrar as 5 subclasses do Artífice no CONFIG.DND5E
    if (!CONFIG.DND5E.subclasses) {
      CONFIG.DND5E.subclasses = {};
    }
    CONFIG.DND5E.subclasses.artificer = {
      alchemist: "Compendium.artificer-onednd.artificer-subclasses.Item.alchemistsubcl00",
      armorer: "Compendium.artificer-onednd.artificer-subclasses.Item.armorersubclass0",
      artillerist: "Compendium.artificer-onednd.artificer-subclasses.Item.artilleristsub00",
      "battle-smith": "Compendium.artificer-onednd.artificer-subclasses.Item.battlesmithsub00",
      cartographer: "Compendium.artificer-onednd.artificer-subclasses.Item.cartographersub0"
    };

    // Registrar as 4 ordens do Caçador de Bruxas no CONFIG.DND5E
    CONFIG.DND5E.subclasses["witch-hunter"] = {
      ghostslayer: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubghostslayer",
      lycan: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsublycan000000",
      mutant: "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubmutant00000",
      "profane-soul": "Compendium.artificer-onednd.witch-hunter-subclasses.Item.whsubprofanesoul"
    };
    CONFIG.DND5E.subclasses.witchhunter = CONFIG.DND5E.subclasses["witch-hunter"];

    // Registrar Subclasses de Unearthed Arcana (Lote 1, Lote 2 e Lote 3 - Total 46 Subclasses)
    CONFIG.DND5E.subclasses.artificer.reanimator = "Compendium.artificer-onednd.ua-subclasses.Item.uasubreanimator0";
    CONFIG.DND5E.subclasses.barbarian = {
      ...CONFIG.DND5E.subclasses.barbarian,
      unlight: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbunlight",
      lament: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarblament0",
      "spiritual-guardian": "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbspirit0",
      "storm-herald": "Compendium.artificer-onednd.ua-subclasses.Item.uasubbarbstormh0"
    };
    CONFIG.DND5E.subclasses.bard = {
      ...CONFIG.DND5E.subclasses.bard,
      spirits: "Compendium.artificer-onednd.ua-subclasses.Item.uasubspiritbard0",
      moon: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmoonbard000"
    };
    CONFIG.DND5E.subclasses.cleric = {
      ...CONFIG.DND5E.subclasses.cleric,
      grave: "Compendium.artificer-onednd.ua-subclasses.Item.uasubgravecleric",
      arcana: "Compendium.artificer-onednd.ua-subclasses.Item.uasubarcanacleri",
      knowledge: "Compendium.artificer-onednd.ua-subclasses.Item.uasubknowcleric1"
    };
    CONFIG.DND5E.subclasses.druid = {
      ...CONFIG.DND5E.subclasses.druid,
      preservation: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpreservdrui",
      titan: "Compendium.artificer-onednd.ua-subclasses.Item.uasubdruidtitan0"
    };
    CONFIG.DND5E.subclasses.fighter = {
      ...CONFIG.DND5E.subclasses.fighter,
      "arcane-archer": "Compendium.artificer-onednd.ua-subclasses.Item.uasubfgtarcanear",
      "purple-dragon-knight": "Compendium.artificer-onednd.ua-subclasses.Item.uasubpdragknight",
      gladiator: "Compendium.artificer-onednd.ua-subclasses.Item.uasubgladiatorfg",
      "hell-knight": "Compendium.artificer-onednd.ua-subclasses.Item.uasubfghthellkni",
      cavalier: "Compendium.artificer-onednd.ua-subclasses.Item.uasubfgtcavalier"
    };
    CONFIG.DND5E.subclasses.monk = {
      ...CONFIG.DND5E.subclasses.monk,
      "tattooed-warrior": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonktattoo1",
      "mystic-arts": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkmystica",
      venom: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkvenom00",
      intoxication: "Compendium.artificer-onednd.ua-subclasses.Item.uasubmonkdrunk00"
    };
    CONFIG.DND5E.subclasses.paladin = {
      ...CONFIG.DND5E.subclasses.paladin,
      "noble-genies": "Compendium.artificer-onednd.ua-subclasses.Item.uasubpalgenies01",
      spellguard: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpalspellgua",
      oathbreaker: "Compendium.artificer-onednd.ua-subclasses.Item.uasubpaloathbrk0"
    };
    CONFIG.DND5E.subclasses.ranger = {
      ...CONFIG.DND5E.subclasses.ranger,
      "hollow-warden": "Compendium.artificer-onednd.ua-subclasses.Item.uasubhollowward1",
      "winter-walker": "Compendium.artificer-onednd.ua-subclasses.Item.uasubwinterwlk01"
    };
    CONFIG.DND5E.subclasses.rogue = {
      ...CONFIG.DND5E.subclasses.rogue,
      phantom: "Compendium.artificer-onednd.ua-subclasses.Item.uasubphantomrogu",
      "scion-of-the-three": "Compendium.artificer-onednd.ua-subclasses.Item.uasubscionthree1",
      "magic-stealer": "Compendium.artificer-onednd.ua-subclasses.Item.uasubmagicsteal1",
      "house-agent": "Compendium.artificer-onednd.ua-subclasses.Item.uasubhouseagent0"
    };
    CONFIG.DND5E.subclasses.sorcerer = {
      ...CONFIG.DND5E.subclasses.sorcerer,
      shadow: "Compendium.artificer-onednd.ua-subclasses.Item.uasubshadowsorce",
      ancestral: "Compendium.artificer-onednd.ua-subclasses.Item.uasubancestrals1",
      spellfire: "Compendium.artificer-onednd.ua-subclasses.Item.uasubspellfire01",
      defiled: "Compendium.artificer-onednd.ua-subclasses.Item.uasubdefiledsorc",
      demonic: "Compendium.artificer-onednd.ua-subclasses.Item.uasubsorcdemonic"
    };
    CONFIG.DND5E.subclasses.warlock = {
      ...CONFIG.DND5E.subclasses.warlock,
      hexblade: "Compendium.artificer-onednd.ua-subclasses.Item.uasubhexbladewar",
      undead: "Compendium.artificer-onednd.ua-subclasses.Item.uasubundeadwlk01",
      "sorcerer-king": "Compendium.artificer-onednd.ua-subclasses.Item.uasubsorckpatron",
      vestige: "Compendium.artificer-onednd.ua-subclasses.Item.uasubvestigepatr",
      primordial: "Compendium.artificer-onednd.ua-subclasses.Item.uasubprimordial0"
    };
    CONFIG.DND5E.subclasses.wizard = {
      ...CONFIG.DND5E.subclasses.wizard,
      conjurer: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwizconjurer",
      enchanter: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwizenchante",
      necromancer: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwiznecroman",
      transmuter: "Compendium.artificer-onednd.ua-subclasses.Item.uasubwiztransmut",
      bladesinger: "Compendium.artificer-onednd.ua-subclasses.Item.uasubbladesing01",
      imaskarcanist: "Compendium.artificer-onednd.ua-subclasses.Item.uasubimaskarcan0"
    };

    // Registrar Psion como Conjurador Pleno e suas 3 Subclasses
    CONFIG.DND5E.spellProgression.psion = "full";
    CONFIG.DND5E.subclasses.psion = {
      metamorph: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubmetamorp",
      psykinetic: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubpsykine1",
      telepath: "Compendium.artificer-onednd.psion-subclasses.Item.psionsubtelepath"
    };
  }

  // Pré-carregamento de templates Handlebars
  loadTemplates(["modules/artificer-onednd/templates/artificer-workshop.hbs"]);
});

/**
 * Hook quando o Foundry VTT está pronto para uso (ready).
 */
Hooks.once("ready", async () => {
  console.log("Expansão de Classes e Arquétipos | Sistema D&D 5e carregado e pronto!");

  // Sincronização automática dos compêndios se habilitado
  if (game.user.isGM && game.settings.get(MODULE_ID, "autoSyncCompendiums")) {
    await CompendiumSync.syncAllPacks({ silent: true });
  }

  // Expor API pública do módulo
  const module = game.modules.get(MODULE_ID);
  if (module) {
    module.api = {
      ArtificerWorkshopApp,
      CompendiumSync,
      openWorkshop: (actor = null) => {
        const app = new ArtificerWorkshopApp({ actor });
        app.render({ force: true });
        return app;
      },
      syncCompendiums: (force = true) => CompendiumSync.syncAllPacks({ force, silent: false })
    };
  }
});

/**
 * Adiciona botão de atalho para a Oficina do Artífice no cabeçalho da Ficha de Personagem.
 */
Hooks.on("getActorSheetHeaderButtons", (sheet, buttons) => {
  if (!game.settings.get(MODULE_ID, "enableSheetButton")) return;

  const actor = sheet.actor;
  if (!actor || actor.type !== "character") return;

  const isArtificer = actor.items.some(
    i => i.type === "class" && (i.system.identifier === "artificer" || i.name.toLowerCase().includes("artificer"))
  );

  // Exibe para personagens artífices ou para o Mestre
  if (isArtificer || game.user.isGM) {
    buttons.unshift({
      label: game.i18n.localize("ARTIFICER_5E.Workshop.HeaderButton"),
      class: "artificer-header-btn",
      icon: "fas fa-wrench",
      onclick: () => {
        new ArtificerWorkshopApp({ actor }).render({ force: true });
      }
    });
  }
});
