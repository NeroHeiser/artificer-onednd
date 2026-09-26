/**
 * artificer-workshop-data.mjs
 * Static catalogs and mappings for the Artificer Workshop ApplicationV2.
 * Pre-instantiated and frozen to prevent redundant heap allocations on render.
 */

const TINKER_ITEMS_BASE = [
  { id: "ball-bearings", pt: "Esferas de Metal", en: "Ball Bearings", icon: "fas fa-circle" },
  { id: "basket", pt: "Cesto", en: "Basket", icon: "fas fa-shopping-basket" },
  { id: "bedroll", pt: "Saco de Dormir", en: "Bedroll", icon: "fas fa-bed" },
  { id: "bell", pt: "Sino", en: "Bell", icon: "fas fa-bell" },
  { id: "blanket", pt: "Cobertor", en: "Blanket", icon: "fas fa-couch" },
  { id: "block-and-tackle", pt: "Talha", en: "Block and Tackle", icon: "fas fa-dolly" },
  { id: "bottle-glass", pt: "Garrafa de Vidro", en: "Bottle (Glass)", icon: "fas fa-wine-bottle" },
  { id: "bucket", pt: "Balde", en: "Bucket", icon: "fas fa-fill" },
  { id: "caltrops", pt: "Abrolhos", en: "Caltrops", icon: "fas fa-asterisk" },
  { id: "candle", pt: "Vela", en: "Candle", icon: "fas fa-fire" },
  { id: "crowbar", pt: "Pé de Cabra", en: "Crowbar", icon: "fas fa-gavel" },
  { id: "flask", pt: "Frasco", en: "Flask", icon: "fas fa-flask" },
  { id: "grappling-hook", pt: "Gancho de Escalada", en: "Grappling Hook", icon: "fas fa-anchor" },
  { id: "hunting-trap", pt: "Armadilha de Caça", en: "Hunting Trap", icon: "fas fa-teeth" },
  { id: "jug", pt: "Jarra", en: "Jug", icon: "fas fa-wine-glass" },
  { id: "lamp", pt: "Lâmpada", en: "Lamp", icon: "fas fa-lightbulb" },
  { id: "manacles", pt: "Algemas", en: "Manacles", icon: "fas fa-link" },
  { id: "net", pt: "Rede", en: "Net", icon: "fas fa-border-all" },
  { id: "oil", pt: "Óleo (Frasco)", en: "Oil (Flask)", icon: "fas fa-tint" },
  { id: "paper", pt: "Papel", en: "Paper", icon: "fas fa-scroll" },
  { id: "parchment", pt: "Pergaminho", en: "Parchment", icon: "fas fa-file-alt" },
  { id: "pole", pt: "Vara (3 metros)", en: "Pole (10-ft)", icon: "fas fa-ruler-vertical" },
  { id: "pouch", pt: "Bolsa", en: "Pouch", icon: "fas fa-archive" },
  { id: "rope", pt: "Corda de Cânhamo (15m)", en: "Rope, Hempen (50ft)", icon: "fas fa-ring" },
  { id: "sack", pt: "Saco", en: "Sack", icon: "fas fa-box" },
  { id: "shovel", pt: "Pá", en: "Shovel", icon: "fas fa-shovel" },
  { id: "spikes-iron", pt: "Pítons de Ferro", en: "Spikes (Iron)", icon: "fas fa-thumbtack" },
  { id: "string", pt: "Barbante", en: "String", icon: "fas fa-tape" },
  { id: "tinderbox", pt: "Isqueiro / Pederneira", en: "Tinderbox", icon: "fas fa-fire-alt" },
  { id: "torch", pt: "Tocha", en: "Torch", icon: "fas fa-burn" },
  { id: "vial", pt: "Vidreto", en: "Vial", icon: "fas fa-vial" }
];

const PLANS_TIER_2_BASE = [
  { pt: "Jarra de Alquimia", en: "Alchemy Jug", attunement: false },
  { pt: "Bolsa Espaçosa", en: "Bag of Holding", attunement: false },
  { pt: "Capuz de Respirar na Água", en: "Cap of Water Breathing", attunement: false },
  { pt: "Item Mágico Comum (não-poção/pergaminho)", en: "Common magic item (non-potion/scroll)", attunement: false },
  { pt: "Óculos Noturnos", en: "Goggles of Night", attunement: false },
  { pt: "Ferramenta Multifuncional", en: "Manifold Tool", attunement: true },
  { pt: "Disparo Repetidor", en: "Repeating Shot", attunement: true },
  { pt: "Arma Retornável", en: "Returning Weapon", attunement: false },
  { pt: "Corda de Escalar", en: "Rope of Climbing", attunement: false },
  { pt: "Pedras de Mensagem", en: "Sending Stones", attunement: false },
  { pt: "Escudo +1", en: "Shield, +1", attunement: false },
  { pt: "Varinha de Detectar Magia", en: "Wand of Magic Detection", attunement: false },
  { pt: "Varinha dos Segredos", en: "Wand of Secrets", attunement: false },
  { pt: "Varinha do Mago de Guerra +1", en: "Wand of the War Mage, +1", attunement: true },
  { pt: "Arma +1", en: "Weapon, +1", attunement: false },
  { pt: "Faixas de Poder Desarmado +1", en: "Wraps of Unarmed Power, +1", attunement: false }
];

const PLANS_TIER_6_BASE = [
  { pt: "Armadura +1", en: "Armor, +1", attunement: false },
  { pt: "Botas Élficas", en: "Boots of Elvenkind", attunement: false },
  { pt: "Botas do Caminho Sinuoso", en: "Boots of the Winding Path", attunement: true },
  { pt: "Manto Élfico", en: "Cloak of Elvenkind", attunement: true },
  { pt: "Manto da Arraia", en: "Cloak of the Manta Ray", attunement: true },
  { pt: "Arma Deslumbrante", en: "Dazzling Weapon", attunement: true },
  { pt: "Olhos de Fascinação", en: "Eyes of Charming", attunement: true },
  { pt: "Olhos de Visão Minuciosa", en: "Eyes of Minute Seeing", attunement: false },
  { pt: "Luvas do Ladrão", en: "Gloves of Thievery", attunement: false }
];

const PLANS_TIER_10_BASE = [
  { pt: "Armadura de Resistência", en: "Armor of Resistance", attunement: true },
  { pt: "Adaga do Veneno", en: "Dagger of Venom", attunement: false },
  { pt: "Cota Élfica", en: "Elven Chain", attunement: false },
  { pt: "Elmo da Prontidão", en: "Helm of Awareness", attunement: false },
  { pt: "Lanterna da Revelação", en: "Lantern of Revealing", attunement: false },
  { pt: "Focalizador Mental", en: "Mind Sharpener", attunement: true },
  { pt: "Colar de Adaptação", en: "Necklace of Adaptation", attunement: true },
  { pt: "Gaita Assombrada", en: "Pipes of Haunting", attunement: false },
  { pt: "Escudo de Repulsão", en: "Repulsion Shield", attunement: false },
  { pt: "Anel de Queda Suave", en: "Ring of Feather Falling", attunement: true },
  { pt: "Anel de Pulo", en: "Ring of Jumping", attunement: true },
  { pt: "Anel de Proteção Mental", en: "Ring of Mind Shielding", attunement: true },
  { pt: "Anel de Natação", en: "Ring of Swimming", attunement: false },
  { pt: "Anel de Caminhar na Água", en: "Ring of Water Walking", attunement: false },
  { pt: "Escudo Sentinela", en: "Sentinel Shield", attunement: false },
  { pt: "Escudo +2", en: "Shield, +2", attunement: false },
  { pt: "Anel Reabastecedor de Magia", en: "Spell-Refueling Ring", attunement: true },
  { pt: "Item Maravilhoso Incomum (não-amaldiçoado)", en: "Uncommon Wondrous Item (non-cursed)", attunement: false },
  { pt: "Varinha de Mísseis Mágicos", en: "Wand of Magic Missiles", attunement: false },
  { pt: "Varinha do Mago de Guerra +2", en: "Wand of the War Mage, +2", attunement: true },
  { pt: "Varinha de Teia", en: "Wand of Web", attunement: true },
  { pt: "Arma +2", en: "Weapon, +2", attunement: false },
  { pt: "Arma de Alerta", en: "Weapon of Warning", attunement: true },
  { pt: "Faixas de Poder Desarmado +2", en: "Wraps of Unarmed Power, +2", attunement: false }
];

const PLANS_TIER_14_BASE = [
  { pt: "Armadura +2", en: "Armor, +2", attunement: false },
  { pt: "Escudo de Apanhar Flechas", en: "Arrow-Catching Shield", attunement: true },
  { pt: "Língua Flamejante", en: "Flame Tongue", attunement: true },
  { pt: "Item Maravilhoso Raro (não-amaldiçoado)", en: "Rare Wondrous Item (non-cursed)", attunement: false },
  { pt: "Anel de Movimentação Livre", en: "Ring of Free Action", attunement: true },
  { pt: "Anel de Proteção", en: "Ring of Protection", attunement: true },
  { pt: "Anel do Carneiro", en: "Ring of the Ram", attunement: true }
];

function buildLocaleCatalog(langKey) {
  const isPt = langKey === "pt-BR";
  const nameProp = isPt ? "pt" : "en";

  const tinkerItems = Object.freeze(
    TINKER_ITEMS_BASE.map(item => Object.freeze({
      id: item.id,
      name: item[nameProp],
      label: item[nameProp],
      icon: item.icon
    }))
  );

  const mapPlans = list => Object.freeze(
    list.map(plan => Object.freeze({
      name: plan[nameProp],
      attunement: plan.attunement
    }))
  );

  return Object.freeze({
    tinkerItems,
    plansTier2: mapPlans(PLANS_TIER_2_BASE),
    plansTier6: mapPlans(PLANS_TIER_6_BASE),
    plansTier10: mapPlans(PLANS_TIER_10_BASE),
    plansTier14: mapPlans(PLANS_TIER_14_BASE)
  });
}

export const WORKSHOP_CATALOGS = Object.freeze({
  "pt-BR": buildLocaleCatalog("pt-BR"),
  "en": buildLocaleCatalog("en")
});

export function getWorkshopCatalogs(isPt = false) {
  return WORKSHOP_CATALOGS[isPt ? "pt-BR" : "en"];
}

export const PLAN_ITEM_MAP = Object.freeze({
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
});
