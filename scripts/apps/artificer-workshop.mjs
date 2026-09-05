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

    const isPt = game.i18n?.lang?.startsWith("pt");

    const tinkerItems = [
      { id: "ball-bearings", name: isPt ? "Esferas de Metal" : "Ball Bearings", label: isPt ? "Esferas de Metal" : "Ball Bearings", icon: "fas fa-circle" },
      { id: "basket", name: isPt ? "Cesto" : "Basket", label: isPt ? "Cesto" : "Basket", icon: "fas fa-shopping-basket" },
      { id: "bedroll", name: isPt ? "Saco de Dormir" : "Bedroll", label: isPt ? "Saco de Dormir" : "Bedroll", icon: "fas fa-bed" },
      { id: "bell", name: isPt ? "Sino" : "Bell", label: isPt ? "Sino" : "Bell", icon: "fas fa-bell" },
      { id: "blanket", name: isPt ? "Cobertor" : "Blanket", label: isPt ? "Cobertor" : "Blanket", icon: "fas fa-couch" },
      { id: "block-and-tackle", name: isPt ? "Talha" : "Block and Tackle", label: isPt ? "Talha" : "Block and Tackle", icon: "fas fa-dolly" },
      { id: "bottle-glass", name: isPt ? "Garrafa de Vidro" : "Bottle (Glass)", label: isPt ? "Garrafa de Vidro" : "Bottle (Glass)", icon: "fas fa-wine-bottle" },
      { id: "bucket", name: isPt ? "Balde" : "Bucket", label: isPt ? "Balde" : "Bucket", icon: "fas fa-fill" },
      { id: "caltrops", name: isPt ? "Abrolhos" : "Caltrops", label: isPt ? "Abrolhos" : "Caltrops", icon: "fas fa-asterisk" },
      { id: "candle", name: isPt ? "Vela" : "Candle", label: isPt ? "Vela" : "Candle", icon: "fas fa-fire" },
      { id: "crowbar", name: isPt ? "Pé de Cabra" : "Crowbar", label: isPt ? "Pé de Cabra" : "Crowbar", icon: "fas fa-gavel" },
      { id: "flask", name: isPt ? "Frasco" : "Flask", label: isPt ? "Frasco" : "Flask", icon: "fas fa-flask" },
      { id: "grappling-hook", name: isPt ? "Gancho de Escalada" : "Grappling Hook", label: isPt ? "Gancho de Escalada" : "Grappling Hook", icon: "fas fa-anchor" },
      { id: "hunting-trap", name: isPt ? "Armadilha de Caça" : "Hunting Trap", label: isPt ? "Armadilha de Caça" : "Hunting Trap", icon: "fas fa-teeth" },
      { id: "jug", name: isPt ? "Jarra" : "Jug", label: isPt ? "Jarra" : "Jug", icon: "fas fa-wine-glass" },
      { id: "lamp", name: isPt ? "Lâmpada" : "Lamp", label: isPt ? "Lâmpada" : "Lamp", icon: "fas fa-lightbulb" },
      { id: "manacles", name: isPt ? "Algemas" : "Manacles", label: isPt ? "Algemas" : "Manacles", icon: "fas fa-link" },
      { id: "net", name: isPt ? "Rede" : "Net", label: isPt ? "Rede" : "Net", icon: "fas fa-border-all" },
      { id: "oil", name: isPt ? "Óleo (Frasco)" : "Oil (Flask)", label: isPt ? "Óleo (Frasco)" : "Oil (Flask)", icon: "fas fa-tint" },
      { id: "paper", name: isPt ? "Papel" : "Paper", label: isPt ? "Papel" : "Paper", icon: "fas fa-scroll" },
      { id: "parchment", name: isPt ? "Pergaminho" : "Parchment", label: isPt ? "Pergaminho" : "Parchment", icon: "fas fa-file-alt" },
      { id: "pole", name: isPt ? "Vara (3 metros)" : "Pole (10-ft)", label: isPt ? "Vara (3 metros)" : "Pole (10-ft)", icon: "fas fa-ruler-vertical" },
      { id: "pouch", name: isPt ? "Bolsa" : "Pouch", label: isPt ? "Bolsa" : "Pouch", icon: "fas fa-archive" },
      { id: "rope", name: isPt ? "Corda de Cânhamo (15m)" : "Rope, Hempen (50ft)", label: isPt ? "Corda de Cânhamo (15m)" : "Rope, Hempen (50ft)", icon: "fas fa-ring" },
      { id: "sack", name: isPt ? "Saco" : "Sack", label: isPt ? "Saco" : "Sack", icon: "fas fa-box" },
      { id: "shovel", name: isPt ? "Pá" : "Shovel", label: isPt ? "Pá" : "Shovel", icon: "fas fa-shovel" },
      { id: "spikes-iron", name: isPt ? "Pítons de Ferro" : "Spikes (Iron)", label: isPt ? "Pítons de Ferro" : "Spikes (Iron)", icon: "fas fa-thumbtack" },
      { id: "string", name: isPt ? "Barbante" : "String", label: isPt ? "Barbante" : "String", icon: "fas fa-tape" },
      { id: "tinderbox", name: isPt ? "Isqueiro / Pederneira" : "Tinderbox", label: isPt ? "Isqueiro / Pederneira" : "Tinderbox", icon: "fas fa-fire-alt" },
      { id: "torch", name: isPt ? "Tocha" : "Torch", label: isPt ? "Tocha" : "Torch", icon: "fas fa-burn" },
      { id: "vial", name: isPt ? "Vidreto" : "Vial", label: isPt ? "Vidreto" : "Vial", icon: "fas fa-vial" }
    ];

    const plansTier2 = [
      { name: isPt ? "Jarra de Alquimia" : "Alchemy Jug", attunement: false },
      { name: isPt ? "Bolsa Espaçosa" : "Bag of Holding", attunement: false },
      { name: isPt ? "Capuz de Respirar na Água" : "Cap of Water Breathing", attunement: false },
      { name: isPt ? "Item Mágico Comum (não-poção/pergaminho)" : "Common magic item (non-potion/scroll)", attunement: false },
      { name: isPt ? "Óculos Noturnos" : "Goggles of Night", attunement: false },
      { name: isPt ? "Ferramenta Multifuncional" : "Manifold Tool", attunement: true },
      { name: isPt ? "Disparo Repetidor" : "Repeating Shot", attunement: true },
      { name: isPt ? "Arma Retornável" : "Returning Weapon", attunement: false },
      { name: isPt ? "Corda de Escalar" : "Rope of Climbing", attunement: false },
      { name: isPt ? "Pedras de Mensagem" : "Sending Stones", attunement: false },
      { name: isPt ? "Escudo +1" : "Shield, +1", attunement: false },
      { name: isPt ? "Varinha de Detectar Magia" : "Wand of Magic Detection", attunement: false },
      { name: isPt ? "Varinha dos Segredos" : "Wand of Secrets", attunement: false },
      { name: isPt ? "Varinha do Mago de Guerra +1" : "Wand of the War Mage, +1", attunement: true },
      { name: isPt ? "Arma +1" : "Weapon, +1", attunement: false },
      { name: isPt ? "Faixas de Poder Desarmado +1" : "Wraps of Unarmed Power, +1", attunement: false }
    ];

    const plansTier6 = [
      { name: isPt ? "Armadura +1" : "Armor, +1", attunement: false },
      { name: isPt ? "Botas Élficas" : "Boots of Elvenkind", attunement: false },
      { name: isPt ? "Botas do Caminho Sinuoso" : "Boots of the Winding Path", attunement: true },
      { name: isPt ? "Manto Élfico" : "Cloak of Elvenkind", attunement: true },
      { name: isPt ? "Manto da Arraia" : "Cloak of the Manta Ray", attunement: true },
      { name: isPt ? "Arma Deslumbrante" : "Dazzling Weapon", attunement: true },
      { name: isPt ? "Olhos de Fascinação" : "Eyes of Charming", attunement: true },
      { name: isPt ? "Olhos de Visão Minuciosa" : "Eyes of Minute Seeing", attunement: false },
      { name: isPt ? "Luvas do Ladrão" : "Gloves of Thievery", attunement: false }
    ];

    const plansTier10 = [
      { name: isPt ? "Armadura de Resistência" : "Armor of Resistance", attunement: true },
      { name: isPt ? "Adaga do Veneno" : "Dagger of Venom", attunement: false },
      { name: isPt ? "Cota Élfica" : "Elven Chain", attunement: false },
      { name: isPt ? "Elmo da Prontidão" : "Helm of Awareness", attunement: false },
      { name: isPt ? "Lanterna da Revelação" : "Lantern of Revealing", attunement: false },
      { name: isPt ? "Focalizador Mental" : "Mind Sharpener", attunement: true },
      { name: isPt ? "Colar de Adaptação" : "Necklace of Adaptation", attunement: true },
      { name: isPt ? "Gaita Assombrada" : "Pipes of Haunting", attunement: false },
      { name: isPt ? "Escudo de Repulsão" : "Repulsion Shield", attunement: false },
      { name: isPt ? "Anel de Queda Suave" : "Ring of Feather Falling", attunement: true },
      { name: isPt ? "Anel de Pulo" : "Ring of Jumping", attunement: true },
      { name: isPt ? "Anel de Proteção Mental" : "Ring of Mind Shielding", attunement: true },
      { name: isPt ? "Anel de Natação" : "Ring of Swimming", attunement: false },
      { name: isPt ? "Anel de Caminhar na Água" : "Ring of Water Walking", attunement: false },
      { name: isPt ? "Escudo Sentinela" : "Sentinel Shield", attunement: false },
      { name: isPt ? "Escudo +2" : "Shield, +2", attunement: false },
      { name: isPt ? "Anel Reabastecedor de Magia" : "Spell-Refueling Ring", attunement: true },
      { name: isPt ? "Item Maravilhoso Incomum (não-amaldiçoado)" : "Uncommon Wondrous Item (non-cursed)", attunement: false },
      { name: isPt ? "Varinha de Mísseis Mágicos" : "Wand of Magic Missiles", attunement: false },
      { name: isPt ? "Varinha do Mago de Guerra +2" : "Wand of the War Mage, +2", attunement: true },
      { name: isPt ? "Varinha de Teia" : "Wand of Web", attunement: true },
      { name: isPt ? "Arma +2" : "Weapon, +2", attunement: false },
      { name: isPt ? "Arma de Alerta" : "Weapon of Warning", attunement: true },
      { name: isPt ? "Faixas de Poder Desarmado +2" : "Wraps of Unarmed Power, +2", attunement: false }
    ];

    const plansTier14 = [
      { name: isPt ? "Armadura +2" : "Armor, +2", attunement: false },
      { name: isPt ? "Escudo de Apanhar Flechas" : "Arrow-Catching Shield", attunement: true },
      { name: isPt ? "Língua Flamejante" : "Flame Tongue", attunement: true },
      { name: isPt ? "Item Maravilhoso Raro (não-amaldiçoado)" : "Rare Wondrous Item (non-cursed)", attunement: false },
      { name: isPt ? "Anel de Movimentação Livre" : "Ring of Free Action", attunement: true },
      { name: isPt ? "Anel de Proteção" : "Ring of Protection", attunement: true },
      { name: isPt ? "Anel do Carneiro" : "Ring of the Ram", attunement: true }
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
      const langFolder = game.i18n?.lang?.startsWith("pt") ? "pt-BR" : "en";
      const res = await fetch(`modules/${MODULE_ID}/scripts/data/${langFolder}/items.json`);
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

    const planItemMap = {
      "manifold tool": "itemmanifoldtool",
      "ferramenta multifuncional": "itemmanifoldtool",
      "repeating shot": "itemrepeating001",
      "disparo repetidor": "itemrepeating001",
      "returning weapon": "itemreturning001",
      "arma retornável": "itemreturning001",
      "mind sharpener": "itemmindsharp001",
      "focalizador mental": "itemmindsharp001",
      "boots of the winding path": "itemwindingboot1",
      "botas do caminho sinuoso": "itemwindingboot1",
      "repulsion shield": "itemrepulsionsh1",
      "escudo de repulsão": "itemrepulsionsh1"
    };

    const targetDocId = planItemMap[itemName.toLowerCase()];
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

