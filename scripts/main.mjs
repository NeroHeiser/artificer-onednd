/**
 * main.mjs
 * Módulo Artificer (Forge of the Artificer - One D&D / 2024) para Foundry VTT (v12/v14).
 * Adiciona a classe Artificer e suas 5 subclasses ao sistema D&D 5e,
 * com compêndios completos, sincronização e interface interativa da oficina.
 */

import { CompendiumSync } from "./compendium-sync.mjs";
import { ArtificerWorkshopApp } from "./apps/artificer-workshop.mjs";

const MODULE_ID = "artificer-onednd";

/**
 * Hook de Inicialização do Foundry VTT (init).
 */
Hooks.once("init", () => {
  console.log("Artificer OneD&D | Inicializando módulo Forge of the Artificer...");

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
  }

  // Pré-carregamento de templates Handlebars
  loadTemplates(["modules/artificer-onednd/templates/artificer-workshop.hbs"]);
});

/**
 * Hook quando o Foundry VTT está pronto para uso (ready).
 */
Hooks.once("ready", async () => {
  console.log("Artificer OneD&D | Sistema D&D 5e carregado e pronto para o Artífice!");

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
