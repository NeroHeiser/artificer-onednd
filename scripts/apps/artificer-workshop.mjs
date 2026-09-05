/**
 * artificer-workshop.mjs
 * Interface interativa ApplicationV2 para a Oficina do Artífice.
 * Permite rolar e gerar Elixires Experimentais, conjurar itens de Tinker's Magic,
 * inspecionar planos arcanos e gerenciar fichas de companheiros.
 */

import { CompendiumSync } from "../compendium-sync.mjs";

const MODULE_ID = "artificer-onednd";

// Obtenção da classe base do Foundry V12+ (ApplicationV2) com fallback seguro
const BaseApplication = foundry.applications?.api?.HandlebarsApplicationMixin
  ? foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.api.ApplicationV2)
  : Application;

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

    const tinkerItems = [
      { id: "ball-bearings", name: "Ball Bearings", label: "Ball Bearings (Esferas)", icon: "fas fa-circle" },
      { id: "basket", name: "Basket", label: "Basket (Cesto)", icon: "fas fa-shopping-basket" },
      { id: "bedroll", name: "Bedroll", label: "Bedroll (Saco de Dormir)", icon: "fas fa-bed" },
      { id: "bell", name: "Bell", label: "Bell (Sino)", icon: "fas fa-bell" },
      { id: "blanket", name: "Blanket", label: "Blanket (Cobertor)", icon: "fas fa-couch" },
      { id: "block-and-tackle", name: "Block and Tackle", label: "Block & Tackle (Talha)", icon: "fas fa-dolly" },
      { id: "bottle-glass", name: "Bottle (Glass)", label: "Bottle, Glass (Garrafa)", icon: "fas fa-wine-bottle" },
      { id: "bucket", name: "Bucket", label: "Bucket (Balde)", icon: "fas fa-fill" },
      { id: "caltrops", name: "Caltrops", label: "Caltrops (Abrolhos)", icon: "fas fa-asterisk" },
      { id: "candle", name: "Candle", label: "Candle (Vela)", icon: "fas fa-fire" },
      { id: "crowbar", name: "Crowbar", label: "Crowbar (Pé de Cabra)", icon: "fas fa-gavel" },
      { id: "flask", name: "Flask", label: "Flask (Frasco)", icon: "fas fa-flask" },
      { id: "grappling-hook", name: "Grappling Hook", label: "Grappling Hook (Gancho)", icon: "fas fa-anchor" },
      { id: "hunting-trap", name: "Hunting Trap", label: "Hunting Trap (Armadilha)", icon: "fas fa-teeth" },
      { id: "jug", name: "Jug", label: "Jug (Jarra)", icon: "fas fa-wine-glass" },
      { id: "lamp", name: "Lamp", label: "Lamp (Lâmpada)", icon: "fas fa-lightbulb" },
      { id: "manacles", name: "Manacles", label: "Manacles (Algemas)", icon: "fas fa-link" },
      { id: "net", name: "Net", label: "Net (Rede)", icon: "fas fa-border-all" },
      { id: "oil", name: "Oil", label: "Oil, Flask (Óleo)", icon: "fas fa-tint" },
      { id: "paper", name: "Paper", label: "Paper (Papel)", icon: "fas fa-scroll" },
      { id: "parchment", name: "Parchment", label: "Parchment (Pergaminho)", icon: "fas fa-file-alt" },
      { id: "pole", name: "Pole", label: "Pole, 10-ft (Vara)", icon: "fas fa-ruler-vertical" },
      { id: "pouch", name: "Pouch", label: "Pouch (Bolsa)", icon: "fas fa-archive" },
      { id: "rope", name: "Rope", label: "Rope, Hempen 50ft (Corda)", icon: "fas fa-ring" },
      { id: "sack", name: "Sack", label: "Sack (Saco)", icon: "fas fa-box" },
      { id: "shovel", name: "Shovel", label: "Shovel (Pá)", icon: "fas fa-shovel" },
      { id: "spikes-iron", name: "Spikes (Iron)", label: "Spikes, Iron (Picos)", icon: "fas fa-thumbtack" },
      { id: "string", name: "String", label: "String (Barbante)", icon: "fas fa-tape" },
      { id: "tinderbox", name: "Tinderbox", label: "Tinderbox (Pederneira)", icon: "fas fa-fire-alt" },
      { id: "torch", name: "Torch", label: "Torch (Tocha)", icon: "fas fa-burn" },
      { id: "vial", name: "Vial", label: "Vial (Vidreto)", icon: "fas fa-vial" }
    ];

    const plansTier2 = [
      { name: "Alchemy Jug", attunement: false },
      { name: "Bag of Holding", attunement: false },
      { name: "Cap of Water Breathing", attunement: false },
      { name: "Common magic item (non-potion/scroll)", attunement: false },
      { name: "Goggles of Night", attunement: false },
      { name: "Manifold Tool", attunement: true },
      { name: "Repeating Shot", attunement: true },
      { name: "Returning Weapon", attunement: false },
      { name: "Rope of Climbing", attunement: false },
      { name: "Sending Stones", attunement: false },
      { name: "Shield, +1", attunement: false },
      { name: "Wand of Magic Detection", attunement: false },
      { name: "Wand of Secrets", attunement: false },
      { name: "Wand of the War Mage, +1", attunement: true },
      { name: "Weapon, +1", attunement: false },
      { name: "Wraps of Unarmed Power, +1", attunement: false }
    ];

    const plansTier6 = [
      { name: "Armor, +1", attunement: false },
      { name: "Boots of Elvenkind", attunement: false },
      { name: "Boots of the Winding Path", attunement: true },
      { name: "Cloak of Elvenkind", attunement: true },
      { name: "Cloak of the Manta Ray", attunement: true },
      { name: "Dazzling Weapon", attunement: true },
      { name: "Eyes of Charming", attunement: true },
      { name: "Eyes of Minute Seeing", attunement: false },
      { name: "Gloves of Thievery", attunement: false }
    ];

    const plansTier10 = [
      { name: "Armor of Resistance", attunement: true },
      { name: "Dagger of Venom", attunement: false },
      { name: "Elven Chain", attunement: false },
      { name: "Helm of Awareness", attunement: false },
      { name: "Lantern of Revealing", attunement: false },
      { name: "Mind Sharpener", attunement: true },
      { name: "Necklace of Adaptation", attunement: true },
      { name: "Pipes of Haunting", attunement: false },
      { name: "Repulsion Shield", attunement: false },
      { name: "Ring of Feather Falling", attunement: true },
      { name: "Ring of Jumping", attunement: true },
      { name: "Ring of Mind Shielding", attunement: true },
      { name: "Ring of Swimming", attunement: false },
      { name: "Ring of Water Walking", attunement: false },
      { name: "Sentinel Shield", attunement: false },
      { name: "Shield, +2", attunement: false },
      { name: "Spell-Refueling Ring", attunement: true },
      { name: "Uncommon Wondrous Item (non-cursed)", attunement: false },
      { name: "Wand of Magic Missiles", attunement: false },
      { name: "Wand of the War Mage, +2", attunement: true },
      { name: "Wand of Web", attunement: true },
      { name: "Weapon, +2", attunement: false },
      { name: "Weapon of Warning", attunement: true },
      { name: "Wraps of Unarmed Power, +2", attunement: false }
    ];

    const plansTier14 = [
      { name: "Armor, +2", attunement: false },
      { name: "Arrow-Catching Shield", attunement: true },
      { name: "Flame Tongue", attunement: true },
      { name: "Rare Wondrous Item (non-cursed)", attunement: false },
      { name: "Ring of Free Action", attunement: true },
      { name: "Ring of Protection", attunement: true },
      { name: "Ring of the Ram", attunement: true }
    ];

    return {
      ...baseContext,
      actor,
      artificerLevel,
      subclass,
      tinkerItems,
      plansTier2,
      plansTier6,
      plansTier10,
      plansTier14,
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

    // Ações para compatibilidade com clique direto
    html.querySelectorAll("[data-action]").forEach(el => {
      el.addEventListener("click", ev => {
        const actionName = ev.currentTarget.dataset.action;
        const handler = ArtificerWorkshopApp.DEFAULT_OPTIONS.actions[actionName];
        if (handler) {
          handler.call(this, ev, ev.currentTarget);
        }
      });
    });
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
      const res = await fetch(`modules/${MODULE_ID}/scripts/data/items.json`);
      const items = await res.json();
      itemData = items.find(i => i._id === targetId);
    }

    if (itemData) {
      delete itemData._id;
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

    const itemName = target.dataset.name || "Mundane Item";
    const newItemData = {
      name: `${itemName} (Tinker's Magic)`,
      type: "loot",
      img: "icons/tools/instruments/measuring-compass-brass.webp",
      system: {
        description: {
          value: `<p>Created via Artificer <strong>Tinker's Magic</strong>. This item lasts until you finish a Long Rest, at which point it vanishes.</p>`
        },
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

    let itemData = null;
    if (pack) {
      const entry = pack.index.find(i => i.name.toLowerCase() === itemName.toLowerCase());
      if (entry) {
        const doc = await pack.getDocument(entry._id);
        if (doc) itemData = doc.toObject();
      }
    }

    if (!itemData) {
      // Fallback genérico para itens padrão D&D 5e
      itemData = {
        name: `${itemName} (Replicated)`,
        type: "equipment",
        img: "icons/commodities/treasure/chest-wooden-steel-gold.webp",
        system: {
          description: {
            value: `<p>A replicated magic item created by an Artificer. Vanishes 1d4 days after your death or immediately if you replace this plan.</p>`
          },
          equipped: true
        }
      };
    } else {
      delete itemData._id;
    }

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
    ui.notifications.info(`Criado ${itemData.name} no inventário de ${this.actor.name}!`);
  }

  /**
   * Abre a ficha do companheiro
   */
  static async #onOpenCompanionSheet(event, target) {
    event.preventDefault();
    const companionId = target.dataset.companionId;
    const pack = game.packs.get(`${MODULE_ID}.artificer-actors`);

    if (!pack) {
      ui.notifications.warn("Pacote de companheiros não encontrado.");
      return;
    }

    const doc = await pack.getDocument(companionId);
    if (doc) {
      doc.sheet.render(true);
    } else {
      ui.notifications.warn("Ficha do companheiro não encontrada no compêndio.");
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

