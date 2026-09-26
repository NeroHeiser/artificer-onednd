/**
 * artificer-workshop.mjs
 * Interface interativa ApplicationV2 para a Oficina do Artífice.
 * Permite rolar e gerar Elixires Experimentais, conjurar itens de Tinker's Magic,
 * inspecionar planos arcanos e gerenciar fichas de companheiros.
 */

import { CompendiumSync } from "../compendium-sync.mjs";
import { getWorkshopCatalogs, PLAN_ITEM_MAP } from "./artificer-workshop-data.mjs";

const MODULE_ID = "artificer-onednd";

// Obtenção da classe base do Foundry V12+ (ApplicationV2) com fallback seguro
const BaseApplication = (typeof foundry !== "undefined" && foundry.applications?.api?.HandlebarsApplicationMixin)
  ? foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.api.ApplicationV2)
  : (typeof Application !== "undefined" ? Application : class {});

export class ArtificerWorkshopApp extends BaseApplication {
  constructor(options = {}) {
    super(options);
    this.actor = options.actor || this._getPrimaryArtificerActor();
    this.activeTab = "elixirs";
  }

  static DEFAULT_OPTIONS = {
    id: "artificer-workshop",
    classes: ["artificer-onednd", "artificer-workshop"],
    tag: "div",
    window: {
      title: "ARTIFICER_5E.Workshop.Title",
      icon: "fas fa-wrench",
      resizable: true
    },
    position: {
      width: 680,
      height: 640
    },
    actions: {
      rollElixir: ArtificerWorkshopApp.#onRollElixir,
      createElixir: ArtificerWorkshopApp.#onCreateElixir,
      createTinkerItem: ArtificerWorkshopApp.#onCreateTinkerItem,
      craftReplicatedItem: ArtificerWorkshopApp.#onCraftReplicatedItem,
      openCompanionSheet: ArtificerWorkshopApp.#onOpenCompanionSheet,
      syncCompendiums: ArtificerWorkshopApp.#onSyncCompendiums
    }
  };

  /**
   * Configuração de partes e templates do ApplicationV2
   */
  static PARTS = {
    workshop: {
      template: "modules/artificer-onednd/templates/artificer-workshop.hbs"
    }
  };

  /**
   * Localiza o primeiro personagem do usuário com a classe Artificer
   */
  _getPrimaryArtificerActor() {
    const controlled = canvas.tokens?.controlled[0]?.actor;
    if (controlled && this._isArtificer(controlled)) return controlled;

    const char = game.user.character;
    if (char && this._isArtificer(char)) return char;

    const anyActor = game.actors.find(a => a.isOwner && this._isArtificer(a));
    return anyActor || char || null;
  }

  _isArtificer(actor) {
    return actor.items.some(
      i => i.type === "class" && (i.system.identifier === "artificer" || i.name.toLowerCase().includes("artificer"))
    );
  }

  /**
   * Prepara o contexto de dados para o template Handlebars (ApplicationV2)
   */
  async _prepareContext(options) {
    const context = await super._prepareContext?.(options) || {};
    return this._getContextData(context);
  }

  /**
   * Fallback de dados para Foundry V11/V12 clássico
   */
  async getData(options) {
    const context = await super.getData?.(options) || {};
    return this._getContextData(context);
  }

  _getContextData(baseContext = {}) {
    const actor = this.actor;
    let artificerLevel = 1;
    let subclass = null;

    if (actor) {
      const classItem = actor.items.find(
        i => i.type === "class" && (i.system.identifier === "artificer" || i.name.toLowerCase().includes("artificer"))
      );
      if (classItem) {
        artificerLevel = classItem.system.levels || 1;
      }
      subclass = actor.items.find(
        i => i.type === "subclass" && (i.system.classIdentifier === "artificer" || i.name.toLowerCase().includes("artificer"))
      );
    }

    const isPt = game.i18n?.lang?.startsWith("pt");
    const catalogs = getWorkshopCatalogs(isPt);

    return {
      ...baseContext,
      actor,
      artificerLevel,
      subclass,
      tinkerItems: catalogs.tinkerItems,
      plansTier2: catalogs.plansTier2,
      plansTier6: catalogs.plansTier6,
      plansTier10: catalogs.plansTier10,
      plansTier14: catalogs.plansTier14,
      isGM: game.user.isGM
    };
  }

  /**
   * Listeners para alternância de abas e botões
   */
  _onRender(context, options) {
    super._onRender?.(context, options);
    const html = this.element;

    // Inicializa abas
    const tabs = html.querySelectorAll(".sheet-tabs .item");
    tabs.forEach(tab => {
      tab.addEventListener("click", ev => {
        ev.preventDefault();
        const targetTab = ev.currentTarget.dataset.tab;
        this.activeTab = targetTab;

        tabs.forEach(t => t.classList.remove("active"));
        ev.currentTarget.classList.add("active");

        const tabContents = html.querySelectorAll(".tab-content .tab");
        tabContents.forEach(tc => {
          tc.classList.toggle("active", tc.dataset.tab === targetTab);
        });
      });
    });

    // Filtro de itens mundanos (Tinker's Magic)
    const filterInput = html.querySelector(".tinker-filter");
    if (filterInput) {
      filterInput.addEventListener("input", ev => {
        const query = ev.currentTarget.value.toLowerCase();
        const cards = html.querySelectorAll(".tinker-card");
        cards.forEach(card => {
          const name = card.dataset.name.toLowerCase();
          const label = card.textContent.toLowerCase();
          card.style.display = (name.includes(query) || label.includes(query)) ? "flex" : "none";
        });
      });
    }

    // Nota: ApplicationV2 gerencia as ações declaradas em DEFAULT_OPTIONS.actions nativamente.
  }

  // -------------------------------------------------------------
  // HANDLERS DE AÇÕES
  // -------------------------------------------------------------

  /**
   * Rola 1d6 na tabela de Elixir Experimental e cria o item correspondente
   */
  static async #onRollElixir(event, target) {
    event.preventDefault();
    if (!this.actor) {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Workshop.NoActor"));
      return;
    }

    const roll = await new Roll("1d6").evaluate();
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: `<strong>${game.i18n.localize("ARTIFICER_5E.Workshop.Elixirs.RollTitle")}</strong>`
    });

    const elixirKeys = {
      1: "healing",
      2: "swiftness",
      3: "resilience",
      4: "boldness",
      5: "flight",
      6: "choice"
    };

    const chosen = elixirKeys[roll.total];
    if (chosen === "choice") {
      ui.notifications.info(
        `Rolou 6: ${game.i18n.localize("ARTIFICER_5E.Elixir.Choice.Desc")}`
      );
      return;
    }

    await this._giveElixirToActor(chosen);
  }

  /**
   * Cria o elixir selecionado no menu suspenso
   */
  static async #onCreateElixir(event, target) {
    event.preventDefault();
    if (!this.actor) {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Workshop.NoActor"));
      return;
    }

    const select = this.element.querySelector(".elixir-select");
    const elixirType = select?.value || "healing";
    await this._giveElixirToActor(elixirType);
  }

  /**
   * Entrega o elixir no inventário do ator
   */
  async _giveElixirToActor(elixirType) {
    const pack = game.packs.get(`${MODULE_ID}.artificer-items`);
    const elixirIdMap = {
      healing: "elixirhealing000",
      swiftness: "elixirswiftnes00",
      resilience: "elixirresilien00",
      boldness: "elixirboldness00",
      flight: "elixirflight0000"
    };

    const targetId = elixirIdMap[elixirType];
    let itemData = null;

    if (pack) {
      const doc = await pack.getDocument(targetId);
      if (doc) itemData = doc.toObject();
    }

    if (!itemData) {
      // Fallback a partir de JSON local caso o compêndio ainda não esteja indexado
      const langFolder = game.i18n?.lang?.startsWith("pt") ? "pt-BR" : "en";
      const baseRoute = typeof foundry !== "undefined" && foundry.utils?.getRoute
        ? foundry.utils.getRoute(`modules/${MODULE_ID}`)
        : `/modules/${MODULE_ID}`;

      let res = await fetch(`${baseRoute}/scripts/data/${langFolder}/items.json`).catch(() => null);
      if (!res || !res.ok) {
        res = await fetch(`modules/${MODULE_ID}/scripts/data/${langFolder}/items.json`).catch(() => null);
      }

      if (res?.ok) {
        const items = await res.json();
        itemData = items.find(i => i._id === targetId);
      }
    }

    if (itemData) {
      delete itemData._id;
      itemData.flags = itemData.flags || {};
      itemData.flags[MODULE_ID] = {
        sourceId: targetId
      };
      await this.actor.createEmbeddedDocuments("Item", [itemData]);
      ui.notifications.info(
        game.i18n.format("ARTIFICER_5E.Notifications.ElixirCreated", {
          name: itemData.name,
          actor: this.actor.name
        })
      );
    }
  }

  /**
   * Cria um item mundano de Tinker's Magic no inventário do ator
   */
  static async #onCreateTinkerItem(event, target) {
    event.preventDefault();
    if (!this.actor) {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Workshop.NoActor"));
      return;
    }

    const isPt = game.i18n?.lang?.startsWith("pt");
    const itemName = target.dataset.name || (isPt ? "Item Mundano" : "Mundane Item");
    const suffix = isPt ? "(Magia de Funileiro)" : "(Tinker's Magic)";
    const desc = isPt
      ? "<p>Criado através da <strong>Magia de Funileiro</strong> do Artífice. Este item dura até você terminar um Descanso Longo, quando então desaparece.</p>"
      : "<p>Created via Artificer <strong>Tinker's Magic</strong>. This item lasts until you finish a Long Rest, at which point it vanishes.</p>";

    const newItemData = {
      name: `${itemName} ${suffix}`,
      type: "loot",
      img: "icons/tools/instruments/measuring-compass-brass.webp",
      system: {
        description: { value: desc },
        quantity: 1,
        weight: 1,
        price: { value: 0, denomination: "gp" }
      }
    };

    await this.actor.createEmbeddedDocuments("Item", [newItemData]);
    ui.notifications.info(
      game.i18n.format("ARTIFICER_5E.Notifications.TinkerItemCreated", {
        name: itemName,
        actor: this.actor.name
      })
    );
  }

  /**
   * Cria ou concede um item replicado do plano escolhido
   */
  static async #onCraftReplicatedItem(event, target) {
    event.preventDefault();
    if (!this.actor) {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Workshop.NoActor"));
      return;
    }

    const itemName = target.dataset.itemName;
    const pack = game.packs.get(`${MODULE_ID}.artificer-items`);
    const isPt = game.i18n?.lang?.startsWith("pt");

    const targetDocId = PLAN_ITEM_MAP[itemName.toLowerCase()];
    let itemData = null;

    if (pack && targetDocId) {
      const doc = await pack.getDocument(targetDocId);
      if (doc) itemData = doc.toObject();
    }

    if (!itemData && pack) {
      const entry = pack.index.find(i => i.name.toLowerCase() === itemName.toLowerCase());
      if (entry) {
        const doc = await pack.getDocument(entry._id);
        if (doc) itemData = doc.toObject();
      }
    }

    if (!itemData) {
      // Fallback genérico para itens padrão D&D 5e
      const suffix = isPt ? "(Replicado)" : "(Replicated)";
      const desc = isPt
        ? "<p>Um item mágico replicado criado por um Artífice. Permanece ativo até 1d4 dias após sua morte ou imediatamente ao substituir este plano.</p>"
        : "<p>A replicated magic item created by an Artificer. Vanishes 1d4 days after your death or immediately if you replace this plan.</p>";

      itemData = {
        name: `${itemName} ${suffix}`,
        type: "equipment",
        img: "icons/commodities/treasure/chest-wooden-steel-gold.webp",
        system: {
          description: { value: desc },
          equipped: true
        }
      };
    } else {
      delete itemData._id;
    }

    itemData.flags = itemData.flags || {};
    if (targetDocId) {
      itemData.flags[MODULE_ID] = {
        sourceId: targetDocId
      };
    }

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
    ui.notifications.info(
      game.i18n.format("ARTIFICER_5E.Notifications.ItemCreated", {
        name: itemData.name,
        actor: this.actor.name
      })
    );
  }

  /**
   * Abre a ficha do companheiro
   */
  static async #onOpenCompanionSheet(event, target) {
    event.preventDefault();
    const companionId = target.dataset.companionId;
    const pack = game.packs.get(`${MODULE_ID}.artificer-actors`);

    if (!pack) {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Notifications.CompanionPackNotFound"));
      return;
    }

    const doc = await pack.getDocument(companionId);
    if (doc) {
      doc.sheet.render(true);
    } else {
      ui.notifications.warn(game.i18n.localize("ARTIFICER_5E.Notifications.CompanionNotFound"));
    }
  }

  /**
   * Força a re-sincronização de compêndios pelo Mestre
   */
  static async #onSyncCompendiums(event, target) {
    event.preventDefault();
    if (!game.user.isGM) return;
    await CompendiumSync.syncAllPacks({ force: true });
  }
}

