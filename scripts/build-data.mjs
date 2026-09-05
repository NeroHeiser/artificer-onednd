import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const PT_DIR = path.join(DATA_DIR, "pt-BR");
const EN_DIR = path.join(DATA_DIR, "en");

for (const dir of [DATA_DIR, PT_DIR, EN_DIR]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Helper para salvar nos 3 diretórios (pt-BR, en e raiz como default pt-BR)
function saveFiles(filename, enData, ptData) {
  fs.writeFileSync(path.join(EN_DIR, filename), JSON.stringify(enData, null, 2));
  fs.writeFileSync(path.join(PT_DIR, filename), JSON.stringify(ptData, null, 2));
  // Raiz recebe pt-BR por padrão
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(ptData, null, 2));
}

// =============================================================
// 1. FEATURES (features.json)
// =============================================================
const enFeatures = [
  {
    _id: "artfeatspellcast",
    name: "Spellcasting (Artificer)",
    type: "feat",
    img: "icons/magic/symbols/runes-star-pentagon-blue.webp",
    system: {
      description: {
        value: `
          <p>You have learned how to channel magical energy through objects. See the Player's Handbook for the rules on spellcasting.</p>
          <h3>Tools Required</h3>
          <p>You produce your Artificer spells through tools. You can use Thieves' Tools, Tinker's Tools, or another kind of Artisan's Tools with which you have proficiency as a Spellcasting Focus, and you must have one of those focuses in hand when you cast an Artificer spell (meaning the spell has an M component when you cast it).</p>
          <h3>Cantrips</h3>
          <p>You know two Artificer cantrips of your choice (<em>Acid Splash</em> and <em>Prestidigitation</em> are recommended). Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Artificer cantrip of your choice. When you reach Artificer levels 10 and 14, you learn another Artificer cantrip of your choice.</p>
          <h3>Spell Slots</h3>
          <p>The Artificer Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.</p>
          <h3>Prepared Spells of Level 1+</h3>
          <p>You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Artificer spells (<em>Cure Wounds</em> and <em>Grease</em> are recommended). The number of spells on your list increases as you gain Artificer levels. The chosen spells must be of a level for which you have spell slots.</p>
          <h3>Changing Your Prepared Spells</h3>
          <p>Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Artificer spells for which you have spell slots.</p>
          <h3>Spellcasting Ability</h3>
          <p>Intelligence is your spellcasting ability for your Artificer spells.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 1"
    }
  },
  {
    _id: "artfeattinkermag",
    name: "Tinker's Magic",
    type: "feat",
    img: "icons/tools/instruments/measuring-compass-brass.webp",
    system: {
      description: {
        value: `
          <p>You know the <em>Mending</em> cantrip.</p>
          <p>As a <strong>Magic action</strong> while holding Tinker's Tools, you can create one item in an unoccupied space within 5 feet of yourself, choosing the item from the following list:</p>
          <p><em>Ball Bearings, Basket, Bedroll, Bell, Blanket, Block and Tackle, Bottle (Glass), Bucket, Caltrops, Candle, Crowbar, Flask, Grappling Hook, Hunting Trap, Jug, Lamp, Manacles, Net, Oil, Paper, Parchment, Pole, Pouch, Rope, Sack, Shovel, Spikes (Iron), String, Tinderbox, Torch, Vial.</em></p>
          <p>The item lasts until you finish a Long Rest, at which point it vanishes. You can use this feature a number of times equal to your <strong>Intelligence modifier</strong> (minimum of once), and you regain all expended uses when you finish a Long Rest.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      range: { value: 5, units: "ft" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 1"
    }
  },
  {
    _id: "artfeatreplicatm",
    name: "Replicate Magic Item",
    type: "feat",
    img: "icons/commodities/treasure/chest-wooden-steel-gold.webp",
    system: {
      description: {
        value: `
          <p>You have learned arcane plans that you use to make magic items.</p>
          <ul>
            <li><strong>Plans Known:</strong> When you gain this feature, choose four plans to learn from the Magic Item Plans table. Whenever you gain an Artificer level, you can replace one of the plans you know with a new plan for which you qualify.</li>
            <li><strong>Creating an Item:</strong> When you finish a Long Rest, you can create one or two different magic items if you have Tinker's Tools in hand. If a created item requires Attunement, you can attune yourself to it the instant you create it. If you try to exceed your maximum number of magic items for this feature, the oldest item vanishes, and then the new item appears.</li>
            <li><strong>Duration:</strong> A magic item created by this feature functions as the normal magic item, except its magic isn't permanent; when you die, the magic item vanishes after 1d4 days. If you replace a plan you know with a new plan, any magic item created with the replaced plan immediately vanishes.</li>
            <li><strong>Spellcasting Focus:</strong> You can use any Wand or Weapon created by this feature as a Spellcasting Focus in lieu of using a set of Artisan's Tools.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 2"
    }
  },
  {
    _id: "artfeatasiprog00",
    name: "Ability Score Improvement",
    type: "feat",
    img: "icons/skills/movement/feet-winged-boots-glowing-yellow.webp",
    system: {
      description: {
        value: "<p>You increase one ability score of your choice by 2, or you increase two ability scores of your choice by 1. Alternatively, you can gain a feat of your choice for which you qualify.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 4, 8, 12, 16"
    }
  },
  {
    _id: "artfeatmagictink",
    name: "Magic Item Tinker",
    type: "feat",
    img: "icons/magic/symbols/gear-sparks-teal.webp",
    system: {
      description: {
        value: `
          <p>At 6th level, you can manipulate magic items in the following ways:</p>
          <ul>
            <li><strong>Charge Magic Item:</strong> As a Bonus Action, touch a magic item within 5 feet that you created with Replicate Magic Item and that uses charges. Expend a level 1+ spell slot to restore a number of charges equal to the slot level.</li>
            <li><strong>Drain Magic Item:</strong> As a Bonus Action, touch a magic item within 5 feet created with Replicate Magic Item and cause it to vanish, gaining a level 1 spell slot (if Common) or level 2 spell slot (if Uncommon/Rare). <em>1/Long Rest.</em></li>
            <li><strong>Transmute Magic Item:</strong> As a Magic action, touch one magic item created with Replicate Magic Item and transform it into a different magic item from a plan you know. <em>1/Long Rest.</em></li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "bonus", cost: 1 },
      range: { value: 5, units: "ft" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 6"
    }
  },
  {
    _id: "artfeatflashgen0",
    name: "Flash of Genius",
    type: "feat",
    img: "icons/magic/light/bulb-glow-yellow-blue.webp",
    system: {
      description: {
        value: `
          <p>When you or a creature you can see within 30 feet fails an ability check or a saving throw, you can take a <strong>Reaction</strong> to add your Intelligence modifier (minimum of +1) to the roll.</p>
          <p>You can use this Reaction a number of times equal to your <strong>Intelligence modifier</strong> (minimum of once), regaining all expended uses when you finish a Long Rest.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "reaction", cost: 1 },
      range: { value: 30, units: "ft" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 7"
    }
  },
  {
    _id: "artfeatmagicadep",
    name: "Magic Item Adept",
    type: "feat",
    img: "icons/equipment/finger/ring-cabochon-gold-purple.webp",
    system: {
      description: {
        value: "<p>You can now attune to up to <strong>four</strong> magic items at once.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 10"
    }
  },
  {
    _id: "artfeatspellstor",
    name: "Spell-Storing Item",
    type: "feat",
    img: "icons/sundries/books/book-embossed-jeweled-purple.webp",
    system: {
      description: {
        value: `
          <p>Whenever you finish a Long Rest, touch one Simple or Martial weapon or Spellcasting Focus, and store a level 1, 2, or 3 Artificer spell that has a casting time of 1 action and doesn't require material components consumed by the spell.</p>
          <p>While holding the object, a creature can take a <strong>Magic action</strong> to produce the spell's effect using your spellcasting modifier. The spell stays in the object until used a number of times equal to <strong>twice your Intelligence modifier</strong> (minimum of twice) or until you store another spell.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 2, max: "max(2, @abilities.int.mod * 2)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 11"
    }
  },
  {
    _id: "artfeatadvartif0",
    name: "Advanced Artifice",
    type: "feat",
    img: "icons/magic/symbols/rune-sigil-horned-blue.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Magic Item Savant:</strong> You can attune to up to <strong>five</strong> magic items at once.</li>
            <li><strong>Refreshed Genius:</strong> When you finish a Short Rest, you regain <strong>one</strong> expended use of Flash of Genius.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 14"
    }
  },
  {
    _id: "artfeatmagicmas0",
    name: "Magic Item Master",
    type: "feat",
    img: "icons/equipment/finger/ring-band-engraved-gold.webp",
    system: {
      description: {
        value: "<p>You can now attune to up to <strong>six</strong> magic items at once.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 18"
    }
  },
  {
    _id: "artfeatepicboon0",
    name: "Epic Boon",
    type: "feat",
    img: "icons/magic/light/explosion-star-glow-orange.webp",
    system: {
      description: {
        value: "<p>You gain an Epic Boon feat or another feat of your choice (<em>Boon of Energy Resistance</em> is recommended).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 19"
    }
  },
  {
    _id: "artfeatsoulartif",
    name: "Soul of Artifice",
    type: "feat",
    img: "icons/magic/life/heart-cross-strong-green.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Cheat Death:</strong> If reduced to 0 Hit Points but not killed outright, you can disintegrate any number of Uncommon or Rare replicated magic items. If you do so, your Hit Points instead change to <strong>20 times the number of magic items disintegrated</strong>.</li>
            <li><strong>Magical Guidance:</strong> When you finish a Short Rest, you regain <strong>all</strong> expended uses of Flash of Genius if you are attuned to at least one magic item.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 20"
    }
  },

  // --- ALCHEMIST FEATURES ---
  {
    _id: "alcfeattoolstrad",
    name: "Tools of the Trade (Alchemist)",
    type: "feat",
    img: "icons/tools/laboratory/alembic-glass-copper.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Tool Proficiency:</strong> Gain proficiency with Alchemist's Supplies and Herbalism Kit.</li>
            <li><strong>Potion Crafting:</strong> Potion crafting time is halved.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 3"
    }
  },
  {
    _id: "alcfeatspells000",
    name: "Alchemist Spells",
    type: "feat",
    img: "icons/sundries/books/book-green-clasp.webp",
    system: {
      description: {
        value: `
          <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table.</p>
          <table>
            <thead><tr><th>Level</th><th>Spells</th></tr></thead>
            <tbody>
              <tr><td>3rd</td><td><em>Healing Word, Ray of Sickness</em></td></tr>
              <tr><td>5th</td><td><em>Flaming Sphere, Melf's Acid Arrow</em></td></tr>
              <tr><td>9th</td><td><em>Gaseous Form, Mass Healing Word</em></td></tr>
              <tr><td>13th</td><td><em>Death Ward, Vitriolic Sphere</em></td></tr>
              <tr><td>17th</td><td><em>Cloudkill, Raise Dead</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 3"
    }
  },
  {
    _id: "alcfeatelixir000",
    name: "Experimental Elixir",
    type: "feat",
    img: "icons/consumables/potions/potion-bottle-corked-glowing-green.webp",
    system: {
      description: {
        value: `
          <p>Whenever you finish a Long Rest while holding Alchemist's Supplies, produce <strong>two</strong> elixirs (three at lvl 5, four at lvl 9, five at lvl 15). Roll on the table below.</p>
          <p>As a <strong>Bonus Action</strong>, a creature can drink it or administer it to an adjacent creature. You can expend a spell slot (Magic action) to create an additional elixir with a chosen effect.</p>
          <table>
            <thead><tr><th>1d6</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td><strong>1</strong></td><td><strong>Healing:</strong> Regains 2d8 + Int mod HP (3d8 at lvl 9, 4d8 at lvl 15).</td></tr>
              <tr><td><strong>2</strong></td><td><strong>Swiftness:</strong> Speed increases by 10 ft for 1 hour (15 ft at lvl 9, 20 ft at lvl 15).</td></tr>
              <tr><td><strong>3</strong></td><td><strong>Resilience:</strong> +1 bonus to AC for 10 minutes (1 hour at lvl 9, 8 hours at lvl 15).</td></tr>
              <tr><td><strong>4</strong></td><td><strong>Boldness:</strong> Add 1d4 to every attack roll and saving throw for 1 minute (10 minutes at lvl 9, 1 hour at lvl 15).</td></tr>
              <tr><td><strong>5</strong></td><td><strong>Flight:</strong> Gains a Fly Speed of 10 ft for 10 minutes (20 ft at lvl 9, 30 ft at lvl 15).</td></tr>
              <tr><td><strong>6</strong></td><td><strong>Choice:</strong> Choose any one of the other effects on this table.</td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 3"
    }
  },
  {
    _id: "alcfeatsavant000",
    name: "Alchemical Savant",
    type: "feat",
    img: "icons/magic/fire/flame-burning-flask-teal.webp",
    system: {
      description: {
        value: "<p>When casting a spell using Alchemist's Supplies as the Spellcasting Focus, add your <strong>Intelligence modifier</strong> (minimum of +1) to one healing roll or to one damage roll dealing Acid, Fire, or Poison damage.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 5"
    }
  },
  {
    _id: "alcfeatreagents0",
    name: "Restorative Reagents",
    type: "feat",
    img: "icons/magic/life/cross-burst-teal.webp",
    system: {
      description: {
        value: "<p>Cast <em>Lesser Restoration</em> without expending a spell slot a number of times equal to your <strong>Intelligence modifier</strong> per Long Rest.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 9"
    }
  },
  {
    _id: "alcfeatmastery00",
    name: "Chemical Mastery",
    type: "feat",
    img: "icons/magic/unholy/cauldron-bubbling-green.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Alchemical Eruption:</strong> Once per turn, when a spell deals Acid, Fire, or Poison damage, add <strong>2d8 Force damage</strong> to the target.</li>
            <li><strong>Chemical Resistance:</strong> Resistance to Acid and Poison damage; immunity to Poisoned condition.</li>
            <li><strong>Conjured Cauldron:</strong> Cast <em>Tasha's Bubbling Cauldron</em> once per Long Rest without expending a spell slot or components.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 15"
    }
  },

  // --- ARMORER FEATURES ---
  {
    _id: "armfeattoolstrad",
    name: "Tools of the Trade (Armorer)",
    type: "feat",
    img: "icons/tools/smithing/hammer-sledge.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Armor Training:</strong> Training with Heavy armor.</li>
            <li><strong>Proficiency:</strong> Smith's Tools.</li>
            <li><strong>Armor Crafting:</strong> Armor crafting time is halved.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 3"
    }
  },
  {
    _id: "armfeatspells000",
    name: "Armorer Spells",
    type: "feat",
    img: "icons/sundries/books/book-iron-clasp.webp",
    system: {
      description: {
        value: `
          <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table.</p>
          <table>
            <thead><tr><th>Level</th><th>Spells</th></tr></thead>
            <tbody>
              <tr><td>3rd</td><td><em>Magic Missile, Thunderwave</em></td></tr>
              <tr><td>5th</td><td><em>Mirror Image, Shatter</em></td></tr>
              <tr><td>9th</td><td><em>Hypnotic Pattern, Lightning Bolt</em></td></tr>
              <tr><td>13th</td><td><em>Fire Shield, Greater Invisibility</em></td></tr>
              <tr><td>17th</td><td><em>Passwall, Wall of Force</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 3"
    }
  },
  {
    _id: "armfeatarcanearm",
    name: "Arcane Armor",
    type: "feat",
    img: "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
    system: {
      description: {
        value: "<p>As a <strong>Magic action</strong> while holding Smith's Tools, transform worn armor into Arcane Armor. It lacks Strength requirements, can be donned/doffed as a Utilize action, cannot be removed against your will, and functions as your Spellcasting Focus.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 3"
    }
  },
  {
    _id: "armfeatarmormod0",
    name: "Armor Model",
    type: "feat",
    img: "icons/equipment/shield/tower-crest-steel-blue.webp",
    system: {
      description: {
        value: `
          <p>Customize your Arcane Armor into one of three distinct models:</p>
          <ul>
            <li><strong>Dreadnaught:</strong>
              <ul>
                <li><em>Force Demolisher:</em> Simple Melee weapon, Reach, deals 1d10 Force damage. On hit vs smaller creature, push or pull target up to 10 feet.</li>
                <li><em>Giant Stature:</em> As a Bonus Action, become Large and gain +5 ft reach for 1 minute (Int mod uses/Long Rest).</li>
              </ul>
            </li>
            <li><strong>Guardian:</strong>
              <ul>
                <li><em>Thunder Pulse:</em> Simple Melee weapon, deals 1d8 Thunder damage. Hit creature has Disadvantage on attacks against targets other than you.</li>
                <li><em>Defensive Field:</em> While Bloodied, gain Temporary Hit Points equal to your Artificer level as a Bonus Action.</li>
              </ul>
            </li>
            <li><strong>Infiltrator:</strong>
              <ul>
                <li><em>Lightning Launcher:</em> Simple Ranged weapon (90/300 ft), deals 1d6 Lightning damage (+1d6 once per turn).</li>
                <li><em>Powered Steps:</em> Speed increases by 5 feet.</li>
                <li><em>Dampening Field:</em> Advantage on Dexterity (Stealth) checks.</li>
              </ul>
            </li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 3"
    }
  },
  {
    _id: "armfeatextraatt0",
    name: "Extra Attack (Armorer)",
    type: "feat",
    img: "icons/skills/melee/strike-sword-steel-yellow.webp",
    system: {
      description: {
        value: "<p>You can attack twice instead of once whenever you take the Attack action.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 5"
    }
  },
  {
    _id: "armfeatimparmor0",
    name: "Improved Armorer",
    type: "feat",
    img: "icons/equipment/chest/breastplate-helmet-metal.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Armor Replication:</strong> Learn 1 extra Armor plan and create 1 additional replicated item (Armor category only).</li>
            <li><strong>Improved Arsenal:</strong> +1 bonus to attack and damage rolls with your Arcane Armor weapons.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 9"
    }
  },
  {
    _id: "armfeatperfect00",
    name: "Perfected Armor",
    type: "feat",
    img: "icons/equipment/chest/armor-plate-gilded-purple.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Dreadnaught:</strong> Force Demolisher damage increases to 2d6 Force. Giant Stature gives +10 ft reach, size Large or Huge, and Advantage on Strength checks/saves.</li>
            <li><strong>Guardian:</strong> Thunder Pulse damage increases to 1d10 Thunder. Reaction to magically pull a creature within 30 ft up to 25 ft closer and make a melee attack (Int mod uses/Long Rest).</li>
            <li><strong>Infiltrator:</strong> Lightning Launcher damage increases to 2d6 Lightning. Targets glimmer (shed Dim Light and have Disadvantage attacking you). Bonus Action Fly Speed equal to 2x Speed (Int mod uses/Long Rest).</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armorer 15"
    }
  },

  // --- ARTILLERIST FEATURES ---
  {
    _id: "artifeattoolstr0",
    name: "Tools of the Trade (Artillerist)",
    type: "feat",
    img: "icons/weapons/guns/gun-blunderbuss-brass.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiency:</strong> Martial Ranged weapons and Woodcarver's Tools.</li>
            <li><strong>Magic Wand Crafting:</strong> Magic Wand crafting time is halved.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 3"
    }
  },
  {
    _id: "artifeatspells00",
    name: "Artillerist Spells",
    type: "feat",
    img: "icons/sundries/books/book-red-fire.webp",
    system: {
      description: {
        value: `
          <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Artillerist Spells table.</p>
          <table>
            <thead><tr><th>Level</th><th>Spells</th></tr></thead>
            <tbody>
              <tr><td>3rd</td><td><em>Shield, Thunderwave</em></td></tr>
              <tr><td>5th</td><td><em>Scorching Ray, Shatter</em></td></tr>
              <tr><td>9th</td><td><em>Fireball, Wind Wall</em></td></tr>
              <tr><td>13th</td><td><em>Ice Storm, Wall of Fire</em></td></tr>
              <tr><td>17th</td><td><em>Cone of Cold, Wall of Force</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 3"
    }
  },
  {
    _id: "artifeatcannon00",
    name: "Eldritch Cannon",
    type: "feat",
    img: "icons/weapons/artillery/cannon-wooden-bronze.webp",
    system: {
      description: {
        value: `
          <p>As a <strong>Magic action</strong>, create an Eldritch Cannon (Small or Tiny) lasting 1 hour. AC 18, HP = 5 × Artificer level. As a <strong>Bonus Action</strong>, activate it (within 60 ft; can move 15 ft):</p>
          <ul>
            <li><strong>Flamethrower:</strong> 15-foot Cone, Dexterity save, 2d8 Fire damage (half on save).</li>
            <li><strong>Force Ballista:</strong> Ranged spell attack (120 ft), 2d8 Force damage and pushed 5 ft back.</li>
            <li><strong>Protector:</strong> 10-foot radius grants 1d8 + Int mod Temporary Hit Points.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 3"
    }
  },
  {
    _id: "artifeatfirearm0",
    name: "Arcane Firearm",
    type: "feat",
    img: "icons/weapons/wands/wand-carved-glowing-gold.webp",
    system: {
      description: {
        value: "<p>Turn a Rod, Staff, Wand, or Martial Ranged weapon into an arcane focus; roll <strong>1d8</strong> and add the result to one damage roll of an Artificer spell cast through it.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 5"
    }
  },
  {
    _id: "artifeatexplosiv",
    name: "Explosive Cannon",
    type: "feat",
    img: "icons/magic/fire/explosion-fireball-large-orange.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Detonate:</strong> Reaction when damaged to explode the cannon: 20-foot radius, 3d10 Force damage (Dexterity save half).</li>
            <li><strong>Firepower:</strong> Eldritch Cannon damage rolls and Protector temp HP increase by 1d8.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 9"
    }
  },
  {
    _id: "artifeatfortifi0",
    name: "Fortified Position",
    type: "feat",
    img: "icons/environment/settlement/watchtower-stone-snow.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>Create and activate two cannons simultaneously.</li>
            <li>You and allies have <strong>Half Cover</strong> within 10 feet of a cannon.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artillerist 15"
    }
  },

  // --- BATTLE SMITH FEATURES ---
  {
    _id: "bsfeattoolstrad0",
    name: "Tools of the Trade (Battle Smith)",
    type: "feat",
    img: "icons/tools/smithing/anvil.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiency:</strong> Smith's Tools.</li>
            <li><strong>Weapon Crafting:</strong> Weapon crafting time is halved.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 3"
    }
  },
  {
    _id: "bsfeatspells0000",
    name: "Battle Smith Spells",
    type: "feat",
    img: "icons/sundries/books/book-steel-clasp.webp",
    system: {
      description: {
        value: `
          <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table.</p>
          <table>
            <thead><tr><th>Level</th><th>Spells</th></tr></thead>
            <tbody>
              <tr><td>3rd</td><td><em>Heroism, Shield</em></td></tr>
              <tr><td>5th</td><td><em>Shining Smite, Warding Bond</em></td></tr>
              <tr><td>9th</td><td><em>Aura of Vitality, Conjure Barrage</em></td></tr>
              <tr><td>13th</td><td><em>Aura of Purity, Fire Shield</em></td></tr>
              <tr><td>17th</td><td><em>Banishing Smite, Mass Cure Wounds</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 3"
    }
  },
  {
    _id: "bsfeatbattleread",
    name: "Battle Ready",
    type: "feat",
    img: "icons/weapons/swords/sword-broad-crystal-blue.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>Proficiency with Martial weapons, and weapons serve as your Spellcasting Focus.</li>
            <li>Use your <strong>Intelligence modifier</strong> instead of Strength or Dexterity for magic weapon attack and damage rolls.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 3"
    }
  },
  {
    _id: "bsfeatdefender00",
    name: "Steel Defender",
    type: "feat",
    img: "icons/creatures/magical/construct-iron-golem-purple.webp",
    system: {
      description: {
        value: `
          <p>You forge a trusty companion, the <strong>Steel Defender</strong>. In combat, it shares your Initiative count and takes its turn immediately after yours.</p>
          <p>See its complete statblock in the Artificer Companions & Summons compendium.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 3"
    }
  },
  {
    _id: "bsfeatextraatt00",
    name: "Extra Attack (Battle Smith)",
    type: "feat",
    img: "icons/skills/melee/strike-sword-blood-red.webp",
    system: {
      description: {
        value: "<p>You can attack twice instead of once whenever you take the Attack action. In addition, you can forgo one of those attacks to command your Steel Defender to use its Force-Empowered Rend.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 5"
    }
  },
  {
    _id: "bsfeatarcanejolt",
    name: "Arcane Jolt",
    type: "feat",
    img: "icons/magic/lightning/bolt-strike-blue.webp",
    system: {
      description: {
        value: "<p>When you or your defender hit a target with a magic weapon/attack, deal an extra <strong>2d6 Force damage</strong> or heal <strong>2d6 HP</strong> to a creature within 30 ft (Int mod uses/Long Rest, max 1/turn).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 9"
    }
  },
  {
    _id: "bsfeatimprdefen0",
    name: "Improved Defender",
    type: "feat",
    img: "icons/creatures/magical/construct-golem-steel-gold.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>Arcane Jolt damage and healing increase to <strong>4d6</strong>.</li>
            <li>Deflect Attack deals <strong>1d4 + Int mod Force damage</strong> to the attacker.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Battle Smith 15"
    }
  },

  // --- CARTOGRAPHER FEATURES ---
  {
    _id: "cartfeattoolstr0",
    name: "Tools of the Trade (Cartographer)",
    type: "feat",
    img: "icons/tools/navigation/map-chart-tan.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiency:</strong> Calligrapher's Supplies and Cartographer's Tools.</li>
            <li><strong>Spell Scroll Scribing:</strong> Spell Scroll scribing time is halved.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 3"
    }
  },
  {
    _id: "cartfeatspells00",
    name: "Cartographer Spells",
    type: "feat",
    img: "icons/sundries/books/book-embossed-gold-tan.webp",
    system: {
      description: {
        value: `
          <p>You always have certain spells prepared after you reach particular levels in this class, as shown in the Cartographer Spells table.</p>
          <table>
            <thead><tr><th>Level</th><th>Spells</th></tr></thead>
            <tbody>
              <tr><td>3rd</td><td><em>Faerie Fire, Guiding Bolt, Healing Word</em></td></tr>
              <tr><td>5th</td><td><em>Locate Object, Mind Spike</em></td></tr>
              <tr><td>9th</td><td><em>Call Lightning, Clairvoyance</em></td></tr>
              <tr><td>13th</td><td><em>Banishment, Locate Creature</em></td></tr>
              <tr><td>17th</td><td><em>Scrying, Teleportation Circle</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 3"
    }
  },
  {
    _id: "cartfeatatlas000",
    name: "Adventurer's Atlas",
    type: "feat",
    img: "icons/tools/navigation/map-marked-blue.webp",
    system: {
      description: {
        value: "<p>Create magical maps for up to <strong>1 + Int mod</strong> creatures. Holders gain <strong>+1d4 to Initiative</strong> and know each other's planar locations (enabling targeting regardless of sight/cover within range).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 3"
    }
  },
  {
    _id: "cartfeatmapping0",
    name: "Mapping Magic",
    type: "feat",
    img: "icons/magic/movement/portal-vortex-teal.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Illuminated Cartography:</strong> Cast <em>Faerie Fire</em> without a spell slot Int mod times per Long Rest.</li>
            <li><strong>Portal Jump:</strong> Spend half Speed to teleport 10 ft, or within 5 ft of a map holder within 30 ft.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 3"
    }
  },
  {
    _id: "cartfeatprecis00",
    name: "Guided Precision",
    type: "feat",
    img: "icons/magic/perception/eye-ringed-glow-purple-teal.webp",
    system: {
      description: {
        value: "<p>Add your <strong>Intelligence modifier</strong> to one damage roll of Cartographer spells or attacks vs targets marked by your <em>Faerie Fire</em>. Taking damage cannot break Concentration on <em>Faerie Fire</em>.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 5"
    }
  },
  {
    _id: "cartfeatmovemen0",
    name: "Ingenious Movement",
    type: "feat",
    img: "icons/magic/movement/trail-streak-zigzag-teal.webp",
    system: {
      description: {
        value: "<p>When using Flash of Genius, you or a target within 30 ft can <strong>teleport up to 30 ft</strong> as part of that Reaction.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 9"
    }
  },
  {
    _id: "cartfeatsuperio0",
    name: "Superior Atlas",
    type: "feat",
    img: "icons/tools/navigation/compass-brass-vintage.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Safe Haven:</strong> When reduced to 0 HP, destroy the map to set your HP to <strong>2x Artificer level</strong> and teleport adjacent to another map holder.</li>
            <li><strong>Unerring Path:</strong> Cast <em>Find the Path</em> once per Long Rest without preparing or material components.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 15"
    }
  }
];

// Gerar versão PT-BR das features com traduções ricas e fiéis
const ptFeatures = [
  {
    _id: "artfeatspellcast",
    name: "Conjuração (Artífice)",
    type: "feat",
    img: "icons/magic/symbols/runes-star-pentagon-blue.webp",
    system: {
      description: {
        value: `
          <p>Você aprendeu a canalizar energia mágica através de objetos e ferramentas de ofício.</p>
          <h3>Ferramentas Necessárias</h3>
          <p>Você produz suas magias de Artífice através de ferramentas. Você pode usar Ferramentas de Ladrão, Ferramentas de Funileiro ou outro tipo de Ferramentas de Artesão nas quais tenha proficiência como Foco de Conjuração, devendo empunhá-las ao conjurar (o que confere componente M à magia).</p>
          <h3>Truques</h3>
          <p>Você conhece dois truques da lista de Artífice à sua escolha (<em>Espirro Ácido</em> e <em>Prestidigitação</em> são recomendados). Ao terminar um Descanso Longo, pode substituir um truque por outro da lista. No 10º e no 14º nível, você aprende um truque adicional.</p>
          <h3>Espaços de Magia e Preparação</h3>
          <p>A tabela de Artífice indica seus espaços de magia para conjurar magias de 1º círculo ou superior. Você recupera todos os espaços gastos após um Descanso Longo. Você prepara uma lista de magias disponíveis; ao terminar um Descanso Longo, pode alterar as magias preparadas.</p>
          <h3>Habilidade de Conjuração</h3>
          <p><strong>Inteligência</strong> é a sua habilidade para conjuração das magias de Artífice.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 1"
    }
  },
  {
    _id: "artfeattinkermag",
    name: "Magia de Funileiro",
    type: "feat",
    img: "icons/tools/instruments/measuring-compass-brass.webp",
    system: {
      description: {
        value: `
          <p>Você conhece o truque <em>Consertar (Mending)</em>.</p>
          <p>Como uma <strong>Ação de Magia</strong> segurando Ferramentas de Funileiro, você pode criar um item mundano em um espaço desocupado a até 1,5m (5 pés) de você, escolhendo da seguinte lista:</p>
          <p><em>Abrolhos, Algemas, Armadilha de Caça, Balde, Barbante, Bolsa, Cobertor, Corda de Cânhamo (15m), Cesto, Esferas de Ferro, Frasco, Garrafa de Vidro, Gancho de Escalada, Jarra, Lâmpada, Manilhas, Óleo (frasco), Pá, Papel, Pederneira, Pé de Cabra, Pergaminho, Picos de Ferro, Rede, Roldana e Talha, Saco, Saco de Dormir, Sino, Tocha, Vara (3m), Vela, Vidreto.</em></p>
          <p>O item dura até você terminar um Descanso Longo, momento em que desaparece. Você pode usar esta habilidade um número de vezes igual ao seu <strong>modificador de Inteligência</strong> (mínimo 1) por Descanso Longo.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      range: { value: 5, units: "ft" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 1"
    }
  },
  {
    _id: "artfeatreplicatm",
    name: "Replicar Item Mágico",
    type: "feat",
    img: "icons/commodities/treasure/chest-wooden-steel-gold.webp",
    system: {
      description: {
        value: `
          <p>Você aprendeu planos arcanos para forjar itens mágicos temporários.</p>
          <ul>
            <li><strong>Planos Conhecidos:</strong> Ao receber este recurso, escolha 4 planos da tabela de Planos de Nível 2+ (<em>Bolsa de Carga</em>, <em>Chapéu de Respirar na Água</em>, <em>Pedras de Comunicação</em> e <em>Varinha do Mago de Guerra +1</em> são recomendados). Ao subir de nível, você pode trocar um plano antigo por um novo elegível.</li>
            <li><strong>Criando um Item:</strong> Ao terminar um Descanso Longo com suas Ferramentas de Funileiro em mãos, você pode criar itens mágicos de seus planos conhecidos até o seu limite de itens ativos. Se exigir sintonização, você pode sintonizar-se imediatamente. Ao exceder o limite, o item mais antigo desaparece.</li>
            <li><strong>Duração:</strong> O item funciona como o item mágico original, mas dura até 1d4 dias após a sua morte ou até o plano ser substituído.</li>
            <li><strong>Foco Arcano:</strong> Qualquer varinha ou arma criada por este recurso serve como Foco de Conjuração.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 2"
    }
  },
  {
    _id: "artfeatasiprog00",
    name: "Aumento no Valor de Habilidade",
    type: "feat",
    img: "icons/skills/movement/feet-winged-boots-glowing-yellow.webp",
    system: {
      description: {
        value: "<p>Você pode aumentar um valor de habilidade à sua escolha em 2, ou dois valores em 1. Alternativamente, você pode selecionar um Talento (Feat) para o qual seja qualificado.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 4, 8, 12, 16"
    }
  },
  {
    _id: "artfeatmagictink",
    name: "Funileiro de Itens Mágicos",
    type: "feat",
    img: "icons/magic/symbols/gear-sparks-teal.webp",
    system: {
      description: {
        value: `
          <p>No 6º nível, você pode manipular itens mágicos criados com Replicar Item Mágico:</p>
          <ul>
            <li><strong>Recarregar Item Mágico:</strong> Como Ação Bônus, toque um item replicado a até 1,5m que gaste cargas. Gaste um espaço de magia de 1º círculo ou superior para restaurar um número de cargas igual ao nível do espaço gasto.</li>
            <li><strong>Drenar Item Mágico:</strong> Como Ação Bônus, destrua um item replicado a até 1,5m para recuperar um espaço de magia de 1º círculo (Comum) ou 2º círculo (Incomum/Raro). <em>1/Descanso Longo.</em></li>
            <li><strong>Transmutar Item Mágico:</strong> Como Ação de Magia, transforme um item replicado em outro item de um plano conhecido. <em>1/Descanso Longo.</em></li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "bonus", cost: 1 },
      range: { value: 5, units: "ft" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 6"
    }
  },
  {
    _id: "artfeatflashgen0",
    name: "Lampejo de Genialidade",
    type: "feat",
    img: "icons/magic/light/bulb-glow-yellow-blue.webp",
    system: {
      description: {
        value: `
          <p>Quando você ou uma criatura que você possa ver a até 9 metros (30 pés) falha em um teste de habilidade ou salvaguarda, você pode usar uma <strong>Reação</strong> para adicionar o seu <strong>modificador de Inteligência</strong> (mínimo de +1) à rolagem.</p>
          <p>Você pode usar esta Reação um número de vezes igual ao seu modificador de Inteligência (mínimo de 1), recuperando todos os usos gastos em um Descanso Longo.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "reaction", cost: 1 },
      range: { value: 30, units: "ft" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 7"
    }
  },
  {
    _id: "artfeatmagicadep",
    name: "Adepto de Itens Mágicos",
    type: "feat",
    img: "icons/equipment/finger/ring-cabochon-gold-purple.webp",
    system: {
      description: {
        value: "<p>Você agora pode sintonizar-se com até <strong>quatro</strong> itens mágicos simultaneamente.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 10"
    }
  },
  {
    _id: "artfeatspellstor",
    name: "Item de Armazenar Magias",
    type: "feat",
    img: "icons/sundries/books/book-embossed-jeweled-purple.webp",
    system: {
      description: {
        value: `
          <p>Ao terminar um Descanso Longo, toque uma arma simples, marcial ou foco de conjuração, e armazene nele uma magia de Artífice de 1º, 2º ou 3º círculo com tempo de conjuração de 1 ação e sem componentes materiais consumidos.</p>
          <p>Enquanto empunha o objeto, uma criatura pode realizar uma <strong>Ação de Magia</strong> para produzir o efeito da magia usando o seu modificador de conjuração. A magia permanece no objeto por um número de ativações igual a <strong>duas vezes seu modificador de Inteligência</strong> (mínimo 2).</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 2, max: "max(2, @abilities.int.mod * 2)", per: "lr", recovery: "" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 11"
    }
  },
  {
    _id: "artfeatadvartif0",
    name: "Artifício Avançado",
    type: "feat",
    img: "icons/magic/symbols/rune-sigil-horned-blue.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Sábio de Itens Mágicos:</strong> Você pode sintonizar-se com até <strong>cinco</strong> itens mágicos ao mesmo tempo.</li>
            <li><strong>Genialidade Renovada:</strong> Ao terminar um Descanso Curto, você recupera <strong>um uso</strong> de Lampejo de Genialidade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 14"
    }
  },
  {
    _id: "artfeatmagicmas0",
    name: "Mestre de Itens Mágicos",
    type: "feat",
    img: "icons/equipment/finger/ring-band-engraved-gold.webp",
    system: {
      description: {
        value: "<p>Você agora pode sintonizar-se com até <strong>seis</strong> itens mágicos simultaneamente.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 18"
    }
  },
  {
    _id: "artfeatepicboon0",
    name: "Dádiva Épica",
    type: "feat",
    img: "icons/magic/light/explosion-star-glow-orange.webp",
    system: {
      description: {
        value: "<p>Você recebe um talento de Dádiva Épica (Epic Boon) ou outro talento de sua escolha (<em>Dádiva da Resistência à Energia</em> é recomendada).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 19"
    }
  },
  {
    _id: "artfeatsoulartif",
    name: "Alma do Artifício",
    type: "feat",
    img: "icons/magic/life/heart-cross-strong-green.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Burlar a Morte (Cheat Death):</strong> Se você for reduzido a 0 Pontos de Vida mas não morto imediatamente, você pode desintegrar qualquer número de itens mágicos replicados Incomuns ou Raros. Seus PV se tornam <strong>20 vezes o número de itens desintegrados</strong>.</li>
            <li><strong>Orientação Mágica:</strong> Ao terminar um Descanso Curto, você recupera <strong>todos</strong> os usos gastos de Lampejo de Genialidade caso esteja sintonizado a pelo menos um item mágico.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "class", subtype: "" },
      requirements: "Artífice 20"
    }
  },

  // --- ALQUIMISTA ---
  {
    _id: "alcfeattoolstrad",
    name: "Ferramentas do Ofício (Alquimista)",
    type: "feat",
    img: "icons/tools/laboratory/alembic-glass-copper.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiência:</strong> Você ganha proficiência com Suprimentos de Alquimista e Kit de Herbalismo.</li>
            <li><strong>Produção de Poções:</strong> O tempo necessário para fabricar poções é reduzido pela metade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 3"
    }
  },
  {
    _id: "alcfeatspells000",
    name: "Magias de Alquimista",
    type: "feat",
    img: "icons/sundries/books/book-green-clasp.webp",
    system: {
      description: {
        value: `
          <p>Você sempre tem certas magias preparadas ao alcançar determinados níveis nesta classe, conforme a tabela de Magias de Alquimista.</p>
          <table>
            <thead><tr><th>Nível</th><th>Magias</th></tr></thead>
            <tbody>
              <tr><td>3º</td><td><em>Palavra Curativa (Healing Word), Raio de Adoecimento (Ray of Sickness)</em></td></tr>
              <tr><td>5º</td><td><em>Esfera Flamejante (Flaming Sphere), Flecha Ácida de Melf (Melf's Acid Arrow)</em></td></tr>
              <tr><td>9º</td><td><em>Forma Gasosa (Gaseous Form), Palavra Curativa em Massa (Mass Healing Word)</em></td></tr>
              <tr><td>13º</td><td><em>Proteção contra a Morte (Death Ward), Esfera Vitriólica (Vitriolic Sphere)</em></td></tr>
              <tr><td>17º</td><td><em>Névoa Mortal (Cloudkill), Reviver os Mortos (Raise Dead)</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 3"
    }
  },
  {
    _id: "alcfeatelixir000",
    name: "Elixir Experimental",
    type: "feat",
    img: "icons/consumables/potions/potion-bottle-corked-glowing-green.webp",
    system: {
      description: {
        value: `
          <p>Sempre que você terminar um Descanso Longo empunhando Suprimentos de Alquimista, você produz <strong>dois</strong> elixires (três no 5º nível, quatro no 9º, cinco no 15º). Role na tabela abaixo.</p>
          <p>Como uma <strong>Ação Bônus</strong>, uma criatura pode beber o elixir ou administrá-lo a uma criatura adjacente. Você pode gastar um espaço de magia (Ação de Magia) para criar um elixir adicional com o efeito escolhido.</p>
          <table>
            <thead><tr><th>1d6</th><th>Efeito</th></tr></thead>
            <tbody>
              <tr><td><strong>1</strong></td><td><strong>Cura:</strong> Recupera 2d8 + mod Inteligência PV (3d8 no nv 9, 4d8 no nv 15).</td></tr>
              <tr><td><strong>2</strong></td><td><strong>Rapidez:</strong> Deslocamento aumenta em 3m (10 ft) por 1 hora (+4,5m no nv 9, +6m no nv 15).</td></tr>
              <tr><td><strong>3</strong></td><td><strong>Resiliência:</strong> +1 na CA por 10 minutos (1h no nv 9, 8h no nv 15).</td></tr>
              <tr><td><strong>4</strong></td><td><strong>Audácia:</strong> +1d4 em jogadas de ataque e salvaguardas por 1 minuto (10m no nv 9, 1h no nv 15).</td></tr>
              <tr><td><strong>5</strong></td><td><strong>Voo:</strong> Deslocamento de voo de 3m (10 ft) por 10 minutos (6m no nv 9, 9m no nv 15).</td></tr>
              <tr><td><strong>6</strong></td><td><strong>Escolha:</strong> Escolha qualquer um dos outros 5 efeitos da tabela.</td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 3"
    }
  },
  {
    _id: "alcfeatsavant000",
    name: "Sábio Alquímico",
    type: "feat",
    img: "icons/magic/fire/flame-burning-flask-teal.webp",
    system: {
      description: {
        value: "<p>Ao conjurar uma magia usando Suprimentos de Alquimista como Foco, adicione o seu <strong>modificador de Inteligência</strong> (mínimo +1) a uma rolagem de cura ou a uma rolagem de dano de Ácido, Fogo ou Veneno.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 5"
    }
  },
  {
    _id: "alcfeatreagents0",
    name: "Reagentes Restauradores",
    type: "feat",
    img: "icons/magic/life/cross-burst-teal.webp",
    system: {
      description: {
        value: "<p>Você pode conjurar <em>Restauração Menor (Lesser Restoration)</em> sem gastar espaços de magia um número de vezes igual ao seu <strong>modificador de Inteligência</strong> por Descanso Longo.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 9"
    }
  },
  {
    _id: "alcfeatmastery00",
    name: "Maestria Química",
    type: "feat",
    img: "icons/magic/unholy/cauldron-bubbling-green.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Erupção Alquímica:</strong> Uma vez por turno, quando uma magia causar dano de Ácido, Fogo ou Veneno, adicione <strong>2d8 de dano de Força</strong> ao alvo.</li>
            <li><strong>Resistência Química:</strong> Você ganha resistência a dano de Ácido e Veneno, e imunidade à condição Envenenado.</li>
            <li><strong>Caldeirão Conjurado:</strong> Você pode conjurar <em>Caldeirão Borbulhante de Tasha (Tasha's Bubbling Cauldron)</em> uma vez por Descanso Longo sem gastar espaços ou componentes.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Alquimista 15"
    }
  },

  // --- ARMEIRO ---
  {
    _id: "armfeattoolstrad",
    name: "Ferramentas do Ofício (Armeiro)",
    type: "feat",
    img: "icons/tools/smithing/hammer-sledge.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Treinamento em Armaduras:</strong> Treinamento com Armaduras Pesadas.</li>
            <li><strong>Proficiência:</strong> Ferramentas de Ferreiro.</li>
            <li><strong>Forja de Armadura:</strong> O tempo necessário para forjar armaduras é reduzido pela metade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 3"
    }
  },
  {
    _id: "armfeatspells000",
    name: "Magias de Armeiro",
    type: "feat",
    img: "icons/sundries/books/book-iron-clasp.webp",
    system: {
      description: {
        value: `
          <p>Você sempre tem certas magias preparadas ao alcançar determinados níveis nesta classe, conforme a tabela de Magias de Armeiro.</p>
          <table>
            <thead><tr><th>Nível</th><th>Magias</th></tr></thead>
            <tbody>
              <tr><td>3º</td><td><em>Mísseis Mágicos (Magic Missile), Onda Trovejante (Thunderwave)</em></td></tr>
              <tr><td>5º</td><td><em>Imagem Espelhada (Mirror Image), Despedaçar (Shatter)</em></td></tr>
              <tr><td>9º</td><td><em>Padrão Hipnótico (Hypnotic Pattern), Relâmpago (Lightning Bolt)</em></td></tr>
              <tr><td>13º</td><td><em>Escudo de Fogo (Fire Shield), Invisibilidade Maior (Greater Invisibility)</em></td></tr>
              <tr><td>17º</td><td><em>Passo em Paredes (Passwall), Muralha de Força (Wall of Force)</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 3"
    }
  },
  {
    _id: "armfeatarcanearm",
    name: "Armadura Arcana",
    type: "feat",
    img: "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
    system: {
      description: {
        value: "<p>Como uma <strong>Ação de Magia</strong> segurando Ferramentas de Ferreiro, transforme uma armadura usada em Armadura Arcana. Ela dispensa requisitos de Força, pode ser vestida/despida com uma ação Utilizar, não pode ser removida contra a sua vontade e funciona como Foco de Conjuração.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 3"
    }
  },
  {
    _id: "armfeatarmormod0",
    name: "Modelo de Armadura",
    type: "feat",
    img: "icons/equipment/shield/tower-crest-steel-blue.webp",
    system: {
      description: {
        value: `
          <p>Personalize sua Armadura Arcana escolhendo um de três modelos:</p>
          <ul>
            <li><strong>Couraçado (Dreadnaught):</strong>
              <ul>
                <li><em>Demolidor de Força:</em> Arma simples corpo a corpo, Alcance (Reach), causa 1d10 de dano de Força. Ao acertar criatura menor, empurre ou puxe o alvo em até 3m (10 pés).</li>
                <li><em>Estatura Gigante:</em> Como Ação Bônus, torne-se Grande e ganhe +1,5m de alcance por 1 minuto (usos = mod Int/Descanso Longo).</li>
              </ul>
            </li>
            <li><strong>Guardião (Guardian):</strong>
              <ul>
                <li><em>Pulso Trovejante:</em> Arma simples corpo a corpo, causa 1d8 de dano Trovejante. O alvo atingido tem Desvantagem em ataques contra outros que não você.</li>
                <li><em>Campo Defensivo:</em> Enquanto estiver Ferido (Bloodied), ganhe PV Temporários iguais ao seu nível de Artífice como Ação Bônus.</li>
              </ul>
            </li>
            <li><strong>Infiltrador (Infiltrator):</strong>
              <ul>
                <li><em>Lançador Elétrico:</em> Arma simples à distância (27/90m), causa 1d6 de dano Elétrico (+1d6 extra uma vez por turno).</li>
                <li><em>Passos Potencializados:</em> Seu deslocamento aumenta em 1,5m (5 pés).</li>
                <li><em>Campo Atenuador:</em> Vantagem em testes de Destreza (Furtividade).</li>
              </ul>
            </li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 3"
    }
  },
  {
    _id: "armfeatextraatt0",
    name: "Ataque Extra (Armeiro)",
    type: "feat",
    img: "icons/skills/melee/strike-sword-steel-yellow.webp",
    system: {
      description: {
        value: "<p>Você pode realizar dois ataques em vez de um sempre que executar a ação de Ataque.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 5"
    }
  },
  {
    _id: "armfeatimparmor0",
    name: "Armeiro Aprimorado",
    type: "feat",
    img: "icons/equipment/chest/breastplate-helmet-metal.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Replicação de Armadura:</strong> Aprenda 1 plano extra de armadura e crie 1 item replicado adicional (apenas armaduras).</li>
            <li><strong>Arsenal Aprimorado:</strong> +1 de bônus nas jogadas de ataque e dano com as armas integradas da sua Armadura Arcana.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 9"
    }
  },
  {
    _id: "armfeatperfect00",
    name: "Armadura Aperfeiçoada",
    type: "feat",
    img: "icons/equipment/chest/armor-plate-gilded-purple.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Couraçado:</strong> O dano do Demolidor de Força aumenta para 2d6. Estatura Gigante concede +3m de alcance, tamanho Grande ou Enorme e Vantagem em testes e salvaguardas de Força.</li>
            <li><strong>Guardião:</strong> O dano do Pulso Trovejante aumenta para 1d10. Reação para puxar magicamente uma criatura a até 9m para até 7,5m mais perto e fazer um ataque corpo a corpo (mod Int/Descanso Longo).</li>
            <li><strong>Infiltrador:</strong> O dano do Lançador Elétrico aumenta para 2d6. Alvos brilham com luz tênue e têm Desvantagem para atacá-lo. Voo com Ação Bônus igual ao dobro do Deslocamento (mod Int/Descanso Longo).</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Armeiro 15"
    }
  },

  // --- ARTILHEIRO ---
  {
    _id: "artifeattoolstr0",
    name: "Ferramentas do Ofício (Artilheiro)",
    type: "feat",
    img: "icons/weapons/guns/gun-blunderbuss-brass.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiência:</strong> Armas Marciais à Distância e Ferramentas de Entalhador (Woodcarver's Tools).</li>
            <li><strong>Criação de Varinhas:</strong> O tempo para criar varinhas mágicas é reduzido pela metade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 3"
    }
  },
  {
    _id: "artifeatspells00",
    name: "Magias de Artilheiro",
    type: "feat",
    img: "icons/sundries/books/book-red-fire.webp",
    system: {
      description: {
        value: `
          <p>Você sempre tem certas magias preparadas ao alcançar determinados níveis nesta classe, conforme a tabela de Magias de Artilheiro.</p>
          <table>
            <thead><tr><th>Nível</th><th>Magias</th></tr></thead>
            <tbody>
              <tr><td>3º</td><td><em>Escudo Arcano (Shield), Onda Trovejante (Thunderwave)</em></td></tr>
              <tr><td>5º</td><td><em>Raio Ardente (Scorching Ray), Despedaçar (Shatter)</em></td></tr>
              <tr><td>9º</td><td><em>Bola de Fogo (Fireball), Muralha de Vento (Wind Wall)</em></td></tr>
              <tr><td>13º</td><td><em>Tempestade de Gelo (Ice Storm), Muralha de Fogo (Wall of Fire)</em></td></tr>
              <tr><td>17º</td><td><em>Cone de Frio (Cone of Cold), Muralha de Força (Wall of Force)</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 3"
    }
  },
  {
    _id: "artifeatcannon00",
    name: "Canhão Arcano",
    type: "feat",
    img: "icons/weapons/artillery/cannon-wooden-bronze.webp",
    system: {
      description: {
        value: `
          <p>Como uma <strong>Ação de Magia</strong>, crie um Canhão Arcano (Pequeno ou Miúdo) com duração de 1 hora. CA 18, PV = 5 × nível de Artífice. Como <strong>Ação Bônus</strong>, ative-o (a até 18m; pode andar 4,5m):</p>
          <ul>
            <li><strong>Lança-Chamas:</strong> Cone de 4,5m (15 pés), salvaguarda de Destreza, 2d8 de dano de Fogo (metade no sucesso).</li>
            <li><strong>Balista de Força:</strong> Ataque mágico à distância (36m), 2d8 de dano de Força e empurra o alvo 1,5m para trás.</li>
            <li><strong>Protetor:</strong> Raio de 3m concede 1d8 + mod Inteligência em Pontos de Vida Temporários aos aliados.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      activation: { type: "action", cost: 1 },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 3"
    }
  },
  {
    _id: "artifeatfirearm0",
    name: "Arma de Fogo Arcana",
    type: "feat",
    img: "icons/weapons/wands/wand-carved-glowing-gold.webp",
    system: {
      description: {
        value: "<p>Transforme uma Vara, Cajado, Varinha ou Arma Marcial à Distância em foco arcano; role <strong>1d8</strong> e adicione o resultado a uma rolagem de dano de uma magia de Artífice conjurada através dele.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 5"
    }
  },
  {
    _id: "artifeatexplosiv",
    name: "Canhão Explosivo",
    type: "feat",
    img: "icons/magic/fire/explosion-fireball-large-orange.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Detonar:</strong> Reação quando danificado para detonar o canhão: raio de 6m, 3d10 de dano de Força (salvaguarda de Destreza reduz à metade).</li>
            <li><strong>Poder de Fogo:</strong> O dano do Canhão Arcano e os PV Temporários do Protetor aumentam em 1d8.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 9"
    }
  },
  {
    _id: "artifeatfortifi0",
    name: "Posição Fortificada",
    type: "feat",
    img: "icons/environment/settlement/watchtower-stone-snow.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>Crie e ative dois canhões arcanos simultaneamente.</li>
            <li>Você e seus aliados recebem <strong>Meia Cobertura (+2 na CA e Destreza)</strong> a até 3m de qualquer canhão.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Artilheiro 15"
    }
  },

  // --- FERREIRO DE BATALHA ---
  {
    _id: "bsfeattoolstrad0",
    name: "Ferramentas do Ofício (Ferreiro de Batalha)",
    type: "feat",
    img: "icons/tools/smithing/anvil.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiência:</strong> Ferramentas de Ferreiro.</li>
            <li><strong>Forja de Armas:</strong> O tempo necessário para forjar armas é reduzido pela metade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 3"
    }
  },
  {
    _id: "bsfeatspells0000",
    name: "Magias de Ferreiro de Batalha",
    type: "feat",
    img: "icons/sundries/books/book-steel-clasp.webp",
    system: {
      description: {
        value: `
          <p>Você sempre tem certas magias preparadas ao alcançar determinados níveis nesta classe, conforme a tabela de Magias de Ferreiro de Batalha.</p>
          <table>
            <thead><tr><th>Nível</th><th>Magias</th></tr></thead>
            <tbody>
              <tr><td>3º</td><td><em>Heroísmo (Heroism), Escudo Arcano (Shield)</em></td></tr>
              <tr><td>5º</td><td><em>Golpe Radiante (Shining Smite), Vínculo Protetor (Warding Bond)</em></td></tr>
              <tr><td>9º</td><td><em>Aura de Vitalidade (Aura of Vitality), Conjurar Rajada (Conjure Barrage)</em></td></tr>
              <tr><td>13º</td><td><em>Aura de Pureza (Aura of Purity), Escudo de Fogo (Fire Shield)</em></td></tr>
              <tr><td>17º</td><td><em>Golpe Banidor (Banishing Smite), Curar Ferimentos em Massa (Mass Cure Wounds)</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 3"
    }
  },
  {
    _id: "bsfeatbattleread",
    name: "Pronto para a Batalha",
    type: "feat",
    img: "icons/weapons/swords/sword-broad-crystal-blue.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>Você ganha proficiência com Armas Marciais, e armas mágicas servem como Foco de Conjuração.</li>
            <li>Você pode usar o seu <strong>modificador de Inteligência</strong> em vez de Força ou Destreza para jogadas de ataque e dano com armas mágicas.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 3"
    }
  },
  {
    _id: "bsfeatdefender00",
    name: "Defensor de Aço",
    type: "feat",
    img: "icons/creatures/magical/construct-iron-golem-purple.webp",
    system: {
      description: {
        value: `
          <p>Você constrói um parceiro fiel, o <strong>Defensor de Aço (Steel Defender)</strong>. Em combate, ele compartilha a sua Iniciativa e age imediatamente após você.</p>
          <p>Veja a ficha completa do Defensor de Aço no compêndio de Companheiros & Invocações.</p>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 3"
    }
  },
  {
    _id: "bsfeatextraatt00",
    name: "Ataque Extra (Ferreiro de Batalha)",
    type: "feat",
    img: "icons/skills/melee/strike-sword-blood-red.webp",
    system: {
      description: {
        value: "<p>Você pode atacar duas vezes em vez de uma na ação de Ataque. Você pode abrir mão de um dos ataques para comandar o Defensor de Aço a usar Lacerar Forçado.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 5"
    }
  },
  {
    _id: "bsfeatarcanejolt",
    name: "Choque Arcano",
    type: "feat",
    img: "icons/magic/lightning/bolt-strike-blue.webp",
    system: {
      description: {
        value: "<p>Quando você ou seu defensor acertarem um alvo com arma/ataque mágico, cause <strong>2d6 de dano de Força</strong> extra ou cure <strong>2d6 PV</strong> de uma criatura a até 9m (mod Int usos/Descanso Longo, máx 1/turno).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 9"
    }
  },
  {
    _id: "bsfeatimprdefen0",
    name: "Defensor Aprimorado",
    type: "feat",
    img: "icons/creatures/magical/construct-golem-steel-gold.webp",
    system: {
      description: {
        value: `
          <ul>
            <li>O dano e a cura do Choque Arcano aumentam para <strong>4d6</strong>.</li>
            <li>Defletir Ataque causa <strong>1d4 + mod Inteligência de dano de Força</strong> ao atacante.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Ferreiro de Batalha 15"
    }
  },

  // --- CARTÓGRAFO ---
  {
    _id: "cartfeattoolstr0",
    name: "Ferramentas do Ofício (Cartógrafo)",
    type: "feat",
    img: "icons/tools/navigation/map-chart-tan.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Proficiência:</strong> Suprimentos de Calígrafo e Ferramentas de Cartógrafo.</li>
            <li><strong>Escrita de Pergaminhos:</strong> O tempo para escrever pergaminhos de magia é reduzido pela metade.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 3"
    }
  },
  {
    _id: "cartfeatspells00",
    name: "Magias de Cartógrafo",
    type: "feat",
    img: "icons/sundries/books/book-embossed-gold-tan.webp",
    system: {
      description: {
        value: `
          <p>Você sempre tem certas magias preparadas ao alcançar determinados níveis nesta classe, conforme a tabela de Magias de Cartógrafo.</p>
          <table>
            <thead><tr><th>Nível</th><th>Magias</th></tr></thead>
            <tbody>
              <tr><td>3º</td><td><em>Fogo das Fadas (Faerie Fire), Raio Guiador (Guiding Bolt), Palavra Curativa (Healing Word)</em></td></tr>
              <tr><td>5º</td><td><em>Localizar Objeto (Locate Object), Espinho Mental (Mind Spike)</em></td></tr>
              <tr><td>9º</td><td><em>Convocar Relâmpagos (Call Lightning), Clarividência (Clairvoyance)</em></td></tr>
              <tr><td>13º</td><td><em>Banimento (Banishment), Localizar Criatura (Locate Creature)</em></td></tr>
              <tr><td>17º</td><td><em>Adivinhação (Scrying), Círculo de Teletransporte (Teleportation Circle)</em></td></tr>
            </tbody>
          </table>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 3"
    }
  },
  {
    _id: "cartfeatatlas000",
    name: "Atlas do Aventureiro",
    type: "feat",
    img: "icons/tools/navigation/map-marked-blue.webp",
    system: {
      description: {
        value: "<p>Crie mapas mágicos para até <strong>1 + mod Inteligência</strong> criaturas. Os portadores ganham <strong>+1d4 na Iniciativa</strong> e sabem a localização planar exata uns dos outros (permitindo mirar sem restrição de visão/cobertura dentro do alcance).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 3"
    }
  },
  {
    _id: "cartfeatmapping0",
    name: "Magia de Mapeamento",
    type: "feat",
    img: "icons/magic/movement/portal-vortex-teal.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Cartografia Iluminada:</strong> Conjure <em>Fogo das Fadas (Faerie Fire)</em> sem gastar espaço de magia mod Int vezes por Descanso Longo.</li>
            <li><strong>Salto de Portal (Portal Jump):</strong> Gaste metade do seu Deslocamento para se teletransportar 3m (10 pés) ou a até 1,5m de um portador do seu mapa a até 9m.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: { value: 1, max: "max(1, @abilities.int.mod)", per: "lr", recovery: "" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 3"
    }
  },
  {
    _id: "cartfeatprecis00",
    name: "Precisão Guiada",
    type: "feat",
    img: "icons/magic/perception/eye-ringed-glow-purple-teal.webp",
    system: {
      description: {
        value: "<p>Adicione seu <strong>modificador de Inteligência</strong> a uma rolagem de dano de magias de Cartógrafo ou ataques contra alvos marcados por seu <em>Fogo das Fadas</em>. Sofrer dano não quebra sua Concentração em <em>Fogo das Fadas</em>.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 5"
    }
  },
  {
    _id: "cartfeatmovemen0",
    name: "Movimento Engenhoso",
    type: "feat",
    img: "icons/magic/movement/trail-streak-zigzag-teal.webp",
    system: {
      description: {
        value: "<p>Ao usar Lampejo de Genialidade, você ou o alvo a até 9m pode se <strong>teletransportar até 9 metros</strong> como parte daquela Reação.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 9"
    }
  },
  {
    _id: "cartfeatsuperio0",
    name: "Atlas Superior",
    type: "feat",
    img: "icons/tools/navigation/compass-brass-vintage.webp",
    system: {
      description: {
        value: `
          <ul>
            <li><strong>Refúgio Seguro:</strong> Ao ser reduzido a 0 PV, destrua o mapa para definir seus PV em <strong>2x seu nível de Artífice</strong> e teletransporte-se adjacente a outro portador do mapa.</li>
            <li><strong>Caminho Infalível:</strong> Conjure <em>Encontrar o Caminho (Find the Path)</em> uma vez por Descanso Longo sem preparar e sem componentes materiais.</li>
          </ul>
        `,
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartógrafo 15"
    }
  }
];

saveFiles("features.json", enFeatures, ptFeatures);

// =============================================================
// 2. CLASSES (classes.json) - With Subclass Advancement at Level 3!
// =============================================================
function generateClass(isPt) {
  return [
    {
      _id: "artificerclass00",
      name: isPt ? "Artífice" : "Artificer",
      type: "class",
      img: "icons/tools/smithing/anvil.webp",
      system: {
        description: {
          value: isPt
            ? `
              <p>Mestres da invenção, Artífices usam engenhosidade e magia para desbloquear capacidades extraordinárias em objetos. Eles veem a magia como um sistema complexo esperando para ser decodificado e canalizado em invenções e feitiços.</p>
              <h3>Características Básicas</h3>
              <ul>
                <li><strong>Habilidade Primária:</strong> Inteligência</li>
                <li><strong>Dado de Vida:</strong> d8 por nível de Artífice</li>
                <li><strong>Salvaguardas:</strong> Constituição e Inteligência</li>
                <li><strong>Perícias:</strong> Escolha 2: Arcanismo, História, Investigação, Medicina, Natureza, Percepção ou Prestidigitação</li>
                <li><strong>Armas:</strong> Armas simples</li>
                <li><strong>Ferramentas:</strong> Ferramentas de Ladrão, Ferramentas de Funileiro e 1 ferramenta de artesão à sua escolha</li>
                <li><strong>Armaduras:</strong> Armaduras leves, médias e escudos</li>
              </ul>
            `
            : `
              <p>Masters of invention, Artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions.</p>
              <h3>Core Artificer Traits</h3>
              <ul>
                <li><strong>Primary Ability:</strong> Intelligence</li>
                <li><strong>Hit Point Die:</strong> D8 per Artificer level</li>
                <li><strong>Saving Throw Proficiencies:</strong> Constitution and Intelligence</li>
                <li><strong>Skill Proficiencies:</strong> Choose 2: Arcana, History, Investigation, Medicine, Nature, Perception, or Sleight of Hand</li>
                <li><strong>Weapon Proficiencies:</strong> Simple weapons</li>
                <li><strong>Tool Proficiencies:</strong> Thieves' Tools, Tinker's Tools, and one type of Artisan's Tools of your choice</li>
                <li><strong>Armor Training:</strong> Light and Medium armor and Shields</li>
              </ul>
            `,
          chat: ""
        },
        identifier: "artificer",
        levels: 1,
        hitDice: "d8",
        hitDiceUsed: 0,
        advancement: [
          {
            _id: "advhitpoints0001",
            type: "HitPoints",
            configuration: {},
            value: {}
          },
          {
            _id: "advtraitsaving01",
            type: "Trait",
            configuration: {
              mode: "default",
              allowReplacements: false,
              grants: ["savingThrow:con", "savingThrow:int"],
              choices: []
            },
            level: 1,
            title: isPt ? "Testes de Resistência" : "Saving Throws"
          },
          {
            _id: "advtraitarmor001",
            type: "Trait",
            configuration: {
              mode: "default",
              allowReplacements: false,
              grants: ["armor:lgt", "armor:med", "armor:shl"],
              choices: []
            },
            level: 1,
            title: isPt ? "Treinamento em Armaduras" : "Armor Training"
          },
          {
            _id: "advtraitweapon01",
            type: "Trait",
            configuration: {
              mode: "default",
              allowReplacements: false,
              grants: ["weapon:sim"],
              choices: []
            },
            level: 1,
            title: isPt ? "Proficiência com Armas" : "Weapon Proficiencies"
          },
          {
            _id: "advtraittools001",
            type: "Trait",
            configuration: {
              mode: "default",
              allowReplacements: false,
              grants: ["tool:thief", "tool:tinker"],
              choices: [
                {
                  count: 1,
                  pool: ["tool:art:*"]
                }
              ]
            },
            level: 1,
            title: isPt ? "Proficiência com Ferramentas" : "Tool Proficiencies"
          },
          {
            _id: "advtraitskills01",
            type: "Trait",
            configuration: {
              mode: "default",
              allowReplacements: false,
              grants: [],
              choices: [
                {
                  count: 2,
                  pool: [
                    "skills:arc",
                    "skills:his",
                    "skills:inv",
                    "skills:med",
                    "skills:nat",
                    "skills:prc",
                    "skills:slt"
                  ]
                }
              ]
            },
            level: 1,
            title: isPt ? "Perícias de Artífice" : "Skill Proficiencies"
          },
          {
            _id: "advitemgrant0001",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatspellcast", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeattinkermag", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 1,
            title: isPt ? "Características de 1º Nível" : "Level 1 Features"
          },
          {
            _id: "advitemgrant0002",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatreplicatm", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 2,
            title: isPt ? "Replicar Item Mágico" : "Replicate Magic Item"
          },
          // REGRA DE ESCOLHA DA SUBCLASSE NO NÍVEL 3 (SUBCLASS ADVANCEMENT)
          {
            _id: "advsubclass00003",
            type: "Subclass",
            configuration: {},
            level: 3,
            title: isPt ? "Subclasse de Artífice" : "Artificer Subclass"
          },
          {
            _id: "advitemgrant0004",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 4,
            title: isPt ? "Aumento no Valor de Habilidade" : "Ability Score Improvement"
          },
          {
            _id: "advitemgrant0006",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagictink", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 6,
            title: isPt ? "Funileiro de Itens Mágicos" : "Magic Item Tinker"
          },
          {
            _id: "advitemgrant0007",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatflashgen0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 7,
            title: isPt ? "Lampejo de Genialidade" : "Flash of Genius"
          },
          {
            _id: "advitemgrant0008",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 8,
            title: isPt ? "Aumento no Valor de Habilidade" : "Ability Score Improvement"
          },
          {
            _id: "advitemgrant0010",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagicadep", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 10,
            title: isPt ? "Adepto de Itens Mágicos" : "Magic Item Adept"
          },
          {
            _id: "advitemgrant0011",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatspellstor", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 11,
            title: isPt ? "Item de Armazenar Magias" : "Spell-Storing Item"
          },
          {
            _id: "advitemgrant0012",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 12,
            title: isPt ? "Aumento no Valor de Habilidade" : "Ability Score Improvement"
          },
          {
            _id: "advitemgrant0014",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatadvartif0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 14,
            title: isPt ? "Artifício Avançado" : "Advanced Artifice"
          },
          {
            _id: "advitemgrant0016",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 16,
            title: isPt ? "Aumento no Valor de Habilidade" : "Ability Score Improvement"
          },
          {
            _id: "advitemgrant0018",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagicmas0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 18,
            title: isPt ? "Mestre de Itens Mágicos" : "Magic Item Master"
          },
          {
            _id: "advitemgrant0019",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatepicboon0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 19,
            title: isPt ? "Dádiva Épica" : "Epic Boon"
          },
          {
            _id: "advitemgrant0020",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatsoulartif", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 20,
            title: isPt ? "Alma do Artifício" : "Soul of Artifice"
          },
          {
            _id: "advscaleplans000",
            type: "ScaleValue",
            configuration: {
              identifier: "plans-known",
              type: "numeric",
              distance: { units: "" },
              scale: {
                "2": { value: 4 },
                "6": { value: 5 },
                "10": { value: 6 },
                "14": { value: 7 },
                "18": { value: 8 }
              }
            },
            title: isPt ? "Planos Conhecidos" : "Plans Known"
          },
          {
            _id: "advscaleitems000",
            type: "ScaleValue",
            configuration: {
              identifier: "magic-items-active",
              type: "numeric",
              distance: { units: "" },
              scale: {
                "2": { value: 2 },
                "6": { value: 3 },
                "10": { value: 4 },
                "14": { value: 5 },
                "18": { value: 6 }
              }
            },
            title: isPt ? "Itens Mágicos Ativos" : "Magic Items Active"
          },
          {
            _id: "advscaleprep0000",
            type: "ScaleValue",
            configuration: {
              identifier: "prepared-spells",
              type: "numeric",
              distance: { units: "" },
              scale: {
                "1": { value: 2 }, "2": { value: 3 }, "3": { value: 4 }, "4": { value: 5 },
                "5": { value: 6 }, "6": { value: 6 }, "7": { value: 7 }, "8": { value: 7 },
                "9": { value: 9 }, "10": { value: 9 }, "11": { value: 10 }, "12": { value: 10 },
                "13": { value: 11 }, "14": { value: 11 }, "15": { value: 12 }, "16": { value: 12 },
                "17": { value: 14 }, "18": { value: 14 }, "19": { value: 15 }, "20": { value: 15 }
              }
            },
            title: isPt ? "Magias Preparadas" : "Prepared Spells"
          }
        ],
        spellcasting: {
          progression: "artificer",
          ability: "int"
        }
      }
    }
  ];
}

saveFiles("classes.json", generateClass(false), generateClass(true));

// =============================================================
// 3. SUBCLASSES (subclasses.json) - With Subclass Spells Included!
// =============================================================
function generateSubclasses(isPt) {
  return [
    {
      _id: "alchemistsubcl00",
      name: isPt ? "Alquimista" : "Alchemist",
      type: "subclass",
      img: "icons/tools/laboratory/alembic-glass-copper.webp",
      system: {
        description: {
          value: isPt
            ? "<p>O Alquimista é perito em misturar reagentes para gerar elixires de cura, vapores letais e efeitos místicos velozes.</p>"
            : "<p>An Alchemist is an expert at combining exotic reagents to produce mystical effects. They create swift healing, toxic coatings, and volatile concoctions.</p>",
          chat: ""
        },
        classIdentifier: "artificer",
        identifier: "alchemist",
        advancement: [
          {
            _id: "alcadvent0000003",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeattoolstrad", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatelixir000", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatspells000", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 3,
            title: isPt ? "Características de 3º Nível (Alquimista)" : "Alchemist Level 3 Features"
          },
          {
            _id: "alcadvent0000005",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatsavant000", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 5,
            title: isPt ? "Sábio Alquímico" : "Alchemical Savant"
          },
          {
            _id: "alcadvent0000009",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatreagents0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 9,
            title: isPt ? "Reagentes Restauradores" : "Restorative Reagents"
          },
          {
            _id: "alcadvent0000015",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatmastery00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 15,
            title: isPt ? "Maestria Química" : "Chemical Mastery"
          }
        ]
      }
    },
    {
      _id: "armorersubclass0",
      name: isPt ? "Armeiro" : "Armorer",
      type: "subclass",
      img: "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
      system: {
        description: {
          value: isPt
            ? "<p>O Armeiro modifica armaduras para agir como uma segunda pele, integrando armas arcanas, defesas formidáveis e mobilidade extraordinária.</p>"
            : "<p>An Armorer augments armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense.</p>",
          chat: ""
        },
        classIdentifier: "artificer",
        identifier: "armorer",
        advancement: [
          {
            _id: "armadvent0000003",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeattoolstrad", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatarcanearm", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatarmormod0", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatspells000", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 3,
            title: isPt ? "Características de 3º Nível (Armeiro)" : "Armorer Level 3 Features"
          },
          {
            _id: "armadvent0000005",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatextraatt0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 5,
            title: isPt ? "Ataque Extra" : "Extra Attack"
          },
          {
            _id: "armadvent0000009",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatimparmor0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 9,
            title: isPt ? "Armeiro Aprimorado" : "Improved Armorer"
          },
          {
            _id: "armadvent0000015",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatperfect00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 15,
            title: isPt ? "Armadura Aperfeiçoada" : "Perfected Armor"
          }
        ]
      }
    },
    {
      _id: "artilleristsub00",
      name: isPt ? "Artilheiro" : "Artillerist",
      type: "subclass",
      img: "icons/weapons/artillery/cannon-wooden-bronze.webp",
      system: {
        description: {
          value: isPt
            ? "<p>O Artilheiro é perito em artilharia mágica, criando canhões arcanos móveis e projetando rajadas devastadoras de energia pelo campo de batalha.</p>"
            : "<p>An Artillerist specializes in using magic to hurl energy, projectiles, and explosions upon the battlefield, creating magical cannons and wielding empowered firearms.</p>",
          chat: ""
        },
        classIdentifier: "artificer",
        identifier: "artillerist",
        advancement: [
          {
            _id: "artadvent0000003",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeattoolstr0", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatcannon00", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatspells00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 3,
            title: isPt ? "Características de 3º Nível (Artilheiro)" : "Artillerist Level 3 Features"
          },
          {
            _id: "artadvent0000005",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatfirearm0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 5,
            title: isPt ? "Arma de Fogo Arcana" : "Arcane Firearm"
          },
          {
            _id: "artadvent0000009",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatexplosiv", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 9,
            title: isPt ? "Canhão Explosivo" : "Explosive Cannon"
          },
          {
            _id: "artadvent0000015",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatfortifi0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 15,
            title: isPt ? "Posição Fortificada" : "Fortified Position"
          }
        ]
      }
    },
    {
      _id: "battlesmithsub00",
      name: isPt ? "Ferreiro de Batalha" : "Battle Smith",
      type: "subclass",
      img: "icons/tools/smithing/anvil.webp",
      system: {
        description: {
          value: isPt
            ? "<p>O Ferreiro de Batalha une forja bélica e magia, lutando lado a lado com seu companheiro mecânico, o Defensor de Aço.</p>"
            : "<p>Armored in purpose and backed by a loyal mechanical companion, the Battle Smith repairs what is broken, protects comrades, and smites foes with arcane power.</p>",
          chat: ""
        },
        classIdentifier: "artificer",
        identifier: "battle-smith",
        advancement: [
          {
            _id: "bsadvent00000003",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeattoolstrad0", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatbattleread", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatdefender00", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatspells0000", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 3,
            title: isPt ? "Características de 3º Nível (Ferreiro de Batalha)" : "Battle Smith Level 3 Features"
          },
          {
            _id: "bsadvent00000005",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatextraatt00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 5,
            title: isPt ? "Ataque Extra" : "Extra Attack"
          },
          {
            _id: "bsadvent00000009",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatarcanejolt", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 9,
            title: isPt ? "Choque Arcano" : "Arcane Jolt"
          },
          {
            _id: "bsadvent00000015",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatimprdefen0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 15,
            title: isPt ? "Defensor Aprimorado" : "Improved Defender"
          }
        ]
      }
    },
    {
      _id: "cartographersub0",
      name: isPt ? "Cartógrafo" : "Cartographer",
      type: "subclass",
      img: "icons/tools/navigation/map-chart-tan.webp",
      system: {
        description: {
          value: isPt
            ? "<p>O Cartógrafo traça as coordenadas arcanas do espaço e da realidade, navegando pelo campo de batalha e teletransportando aliados com precisão cirúrgica.</p>"
            : "<p>Cartographers chart the arcane lay of the land, navigating chaos and teleporting allies through metaphysical coordinates.</p>",
          chat: ""
        },
        classIdentifier: "artificer",
        identifier: "cartographer",
        advancement: [
          {
            _id: "cartadvent000003",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeattoolstr0", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatatlas000", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatmapping0", optional: false },
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatspells00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 3,
            title: isPt ? "Características de 3º Nível (Cartógrafo)" : "Cartographer Level 3 Features"
          },
          {
            _id: "cartadvent000005",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatprecis00", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 5,
            title: isPt ? "Precisão Guiada" : "Guided Precision"
          },
          {
            _id: "cartadvent000009",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatmovemen0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 9,
            title: isPt ? "Movimento Engenhoso" : "Ingenious Movement"
          },
          {
            _id: "cartadvent000015",
            type: "ItemGrant",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatsuperio0", optional: false }
              ],
              optional: false,
              spell: null
            },
            level: 15,
            title: isPt ? "Atlas Superior" : "Superior Atlas"
          }
        ]
      }
    }
  ];
}

saveFiles("subclasses.json", generateSubclasses(false), generateSubclasses(true));

// =============================================================
// 4. SPELLS (spells.json)
// =============================================================
function generateSpells(isPt) {
  return [
    {
      _id: "splhomunculus000",
      name: isPt ? "Servo Homúnculo" : "Homunculus Servant",
      type: "spell",
      img: "icons/creatures/magical/construct-gargoyle-stone-grey.webp",
      system: {
        description: {
          value: isPt
            ? `
              <p>Você invoca um homúnculo especial em um espaço desocupado ao alcance usando o bloco de estatísticas correspondente. Em combate, ele compartilha a sua Iniciativa e age imediatamente após você, obedecendo a seus comandos sem exigir nenhuma ação.</p>
              <p>Consulte o companheiro <strong>Servo Homúnculo</strong> no compêndio de Companheiros & Invocações do Artífice.</p>
            `
            : `
              <p>You summon a special homunculus in an unoccupied space within range using the stat block below. In combat, it shares your Initiative count and takes its turn immediately after yours, obeying commands with no action required.</p>
              <p>See the <strong>Homunculus Servant</strong> companion in the Artificer Companions & Summons compendium.</p>
            `,
          chat: ""
        },
        source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
        level: 2,
        school: "con",
        properties: ["vocal", "somatic", "material", "ritual"],
        materials: {
          value: isPt ? "uma gema no valor de 100+ PO" : "a gem worth 100+ GP",
          consumed: false,
          cost: 100,
          supply: 0
        },
        target: { value: 1, units: "", type: "space" },
        range: { value: 10, units: "ft" },
        activation: { type: "hour", cost: 1 },
        duration: { value: "", units: "inst" },
        actionType: "util"
      }
    }
  ];
}

saveFiles("spells.json", generateSpells(false), generateSpells(true));

// =============================================================
// 5. ITEMS & CONSUMABLES (items.json)
// =============================================================
function generateItems(isPt) {
  return [
    {
      _id: "elixirhealing000",
      name: isPt ? "Elixir Experimental: Cura" : "Experimental Elixir: Healing",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-red.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma criatura pode beber este elixir ou administrá-lo a uma criatura adjacente como <strong>Ação Bônus</strong>. O bebedor recupera <strong>2d8 + mod Inteligência PV</strong> (3d8 no nv 9, 4d8 no nv 15).</p>"
            : "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker regains <strong>2d8 + Intelligence modifier HP</strong> (3d8 at lvl 9, 4d8 at lvl 15).</p>",
          chat: ""
        },
        consumableType: "potion",
        uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
        activation: { type: "bonus", cost: 1 },
        actionType: "heal",
        damage: { parts: [["2d8 + @abilities.int.mod", "healing"]] }
      }
    },
    {
      _id: "elixirswiftnes00",
      name: isPt ? "Elixir Experimental: Rapidez" : "Experimental Elixir: Swiftness",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-yellow.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma criatura pode beber este elixir como <strong>Ação Bônus</strong>. O Deslocamento aumenta em <strong>3 metros (10 ft) por 1 hora</strong> (+4,5m no nv 9, +6m no nv 15).</p>"
            : "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker's Speed increases by <strong>10 feet for 1 hour</strong> (15 ft at lvl 9, 20 ft at lvl 15).</p>",
          chat: ""
        },
        consumableType: "potion",
        uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
        activation: { type: "bonus", cost: 1 },
        duration: { value: 1, units: "hour" }
      }
    },
    {
      _id: "elixirresilien00",
      name: isPt ? "Elixir Experimental: Resiliência" : "Experimental Elixir: Resilience",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma criatura pode beber este elixir como <strong>Ação Bônus</strong>. O bebedor recebe <strong>+1 de bônus na CA por 10 minutos</strong> (1h no nv 9, 8h no nv 15).</p>"
            : "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker gains a <strong>+1 bonus to AC for 10 minutes</strong> (1 hour at lvl 9, 8 hours at lvl 15).</p>",
          chat: ""
        },
        consumableType: "potion",
        uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
        activation: { type: "bonus", cost: 1 },
        duration: { value: 10, units: "minute" }
      }
    },
    {
      _id: "elixirboldness00",
      name: isPt ? "Elixir Experimental: Audácia" : "Experimental Elixir: Boldness",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-orange.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma criatura pode beber este elixir como <strong>Ação Bônus</strong>. O bebedor adiciona <strong>1d4 a todas as jogadas de ataque e salvaguardas por 1 minuto</strong> (10m no nv 9, 1h no nv 15).</p>"
            : "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker adds <strong>1d4 to every attack roll and saving throw for 1 minute</strong> (10 minutes at lvl 9, 1 hour at lvl 15).</p>",
          chat: ""
        },
        consumableType: "potion",
        uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
        activation: { type: "bonus", cost: 1 },
        duration: { value: 1, units: "minute" }
      }
    },
    {
      _id: "elixirflight0000",
      name: isPt ? "Elixir Experimental: Voo" : "Experimental Elixir: Flight",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-purple.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma criatura pode beber este elixir como <strong>Ação Bônus</strong>. O bebedor ganha <strong>Deslocamento de Voo de 3 metros (10 ft) por 10 minutos</strong> (6m no nv 9, 9m no nv 15).</p>"
            : "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker gains a <strong>Fly Speed of 10 feet for 10 minutes</strong> (20 ft at lvl 9, 30 ft at lvl 15).</p>",
          chat: ""
        },
        consumableType: "potion",
        uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
        activation: { type: "bonus", cost: 1 },
        duration: { value: 10, units: "minute" }
      }
    },
    {
      _id: "repmanifoldtool0",
      name: isPt ? "Ferramenta Multifuncional" : "Manifold Tool",
      type: "equipment",
      img: "icons/tools/instruments/multitool-brass.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Uma ferramenta canivete-suíço miraculosa. Exige Sintonização. Como uma ação, pode transformar-se em qualquer conjunto de ferramentas de ladrão ou de artesão.</p>"
            : "<p>A miraculous Swiss Army tool crafted by an Artificer. Requires Attunement. As an action, it can transform into any type of artisan's tools or thieves' tools.</p>",
          chat: ""
        },
        attunement: 1,
        rarity: "common",
        equipped: true
      }
    },
    {
      _id: "reprepeating0000",
      name: isPt ? "Disparo Repetidor" : "Repeating Shot",
      type: "weapon",
      img: "icons/weapons/crossbows/crossbow-loaded-repeater.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Arma à distância infundida com engenharia arcana. Exige Sintonização. +1 nas jogadas de ataque e dano. Ignora a propriedade de recarga e cria sua própria munição mágica infinita.</p>"
            : "<p>A ranged weapon infused with arcane machinery. Requires Attunement. +1 bonus to attack and damage rolls. Automatically produces its own magical ammunition if none is loaded, and ignores the loading property.</p>",
          chat: ""
        },
        attunement: 1,
        rarity: "common",
        equipped: true,
        actionType: "rwak"
      }
    },
    {
      _id: "repreturningweap",
      name: isPt ? "Arma Retornável" : "Returning Weapon",
      type: "weapon",
      img: "icons/weapons/daggers/dagger-thrown-glow-blue.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Esta arma mágica concede +1 de bônus nas jogadas de ataque e dano feitas com ela, e retorna instantaneamente à mão do usuário logo após um ataque de arremesso.</p>"
            : "<p>This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.</p>",
          chat: ""
        },
        attunement: 0,
        rarity: "common",
        equipped: true,
        actionType: "mwak"
      }
    },
    {
      _id: "repmindsharpener",
      name: isPt ? "Focalizador Mental" : "Mind Sharpener",
      type: "equipment",
      img: "icons/equipment/chest/vest-leather-studded-glowing.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Manto ou armadura infundida. Exige Sintonização. Ao falhar em uma salvaguarda de Constituição para manter concentração em uma magia, use sua Reação para ser bem-sucedido em vez disso (4 cargas, recupera 1d4 ao amanhecer).</p>"
            : "<p>Infused robes or armor. Requires Attunement. The infused item can send a jolt to the wearer to refocus their mind: when the wearer fails a Constitution saving throw to maintain concentration on a spell, the wearer can use its reaction to succeed instead (4 charges, regains 1d4 at dawn).</p>",
          chat: ""
        },
        attunement: 1,
        rarity: "uncommon",
        equipped: true
      }
    },
    {
      _id: "repwndingpath000",
      name: isPt ? "Botas do Caminho Sinuoso" : "Boots of the Winding Path",
      type: "equipment",
      img: "icons/equipment/feet/boots-leather-fur-cuffed-purple.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Exige Sintonização. Como Ação Bônus, teletransporte-se até 4,5m (15 pés) para um espaço desocupado que você tenha ocupado em algum momento durante o turno atual.</p>"
            : "<p>Requires Attunement. While wearing these boots, a creature can teleport up to 15 feet as a Bonus Action to an unoccupied space the creature occupied at some point during the current turn.</p>",
          chat: ""
        },
        attunement: 1,
        rarity: "uncommon",
        equipped: true
      }
    },
    {
      _id: "reprepulsionshld",
      name: isPt ? "Escudo de Repulsão" : "Repulsion Shield",
      type: "equipment",
      img: "icons/equipment/shield/heater-crystal-blue.webp",
      system: {
        description: {
          value: isPt
            ? "<p>Escudo com +1 de bônus na CA. Como uma Reação imediatamente após ser atingido por um ataque corpo a corpo, empurre o atacante até 4,5m (15 pés) para longe (4 cargas, recupera 1d4 ao amanhecer).</p>"
            : "<p>A shield granting a +1 bonus to Armor Class. As a reaction immediately after being hit by a melee attack, the wielder can push the attacker up to 15 feet away (4 charges, regains 1d4 at dawn).</p>",
          chat: ""
        },
        attunement: 0,
        rarity: "uncommon",
        equipped: true
      }
    }
  ];
}

saveFiles("items.json", generateItems(false), generateItems(true));

// =============================================================
// 6. ACTORS (actors.json)
// =============================================================
function generateActors(isPt) {
  return [
    {
      _id: "actsteeldefende0",
      name: isPt ? "Defensor de Aço" : "Steel Defender",
      type: "npc",
      img: "icons/creatures/magical/construct-iron-golem-purple.webp",
      system: {
        abilities: {
          str: { value: 14, mod: 2 },
          dex: { value: 12, mod: 1 },
          con: { value: 14, mod: 2 },
          int: { value: 4, mod: -3 },
          wis: { value: 10, mod: 0 },
          cha: { value: 6, mod: -2 }
        },
        attributes: {
          ac: { value: 15 },
          hp: { value: 20, max: 20 },
          movement: { walk: 40 },
          senses: { darkvision: 60 }
        },
        traits: {
          size: "med",
          di: { value: ["poison"] },
          ci: { value: ["charmed", "exhaustion", "poisoned"] }
        },
        details: {
          cr: null,
          type: { value: "construct" },
          alignment: "Neutral",
          biography: {
            value: isPt
              ? "<p>O companheiro mecânico leal forjado por um Ferreiro de Batalha.</p>"
              : "<p>The mechanical companion created by a Battle Smith Artificer.</p>"
          }
        }
      },
      items: [
        {
          _id: "itemrend00000001",
          name: isPt ? "Lacerar Forçado" : "Force-Empowered Rend",
          type: "weapon",
          img: "icons/skills/melee/unarmed-punch-fist.webp",
          system: {
            actionType: "mwak",
            damage: { parts: [["1d8 + 2 + @abilities.int.mod", "force"]] },
            range: { value: 5, units: "ft" },
            ability: "str",
            description: {
              value: isPt
                ? "<p>Ataque Corpo a Corpo: Alcance 1,5m. Acerto: 1d8 + 2 + mod Int de dano de Força.</p>"
                : "<p>Melee Attack: Reach 5 ft. Hit: 1d8 + 2 + Int mod Force damage.</p>"
            }
          }
        },
        {
          _id: "itemrepair000001",
          name: isPt ? "Reparar (3/Dia)" : "Repair (3/Day)",
          type: "feat",
          img: "icons/tools/smithing/tongs-steel.webp",
          system: {
            activation: { type: "action", cost: 1 },
            uses: { value: 3, max: "3", per: "day" },
            damage: { parts: [["2d8 + @abilities.int.mod", "healing"]] },
            description: {
              value: isPt
                ? "<p>Restaura 2d8 + mod Int PV a si mesmo ou a um construto/objeto a até 1,5m.</p>"
                : "<p>Restores 2d8 + Int mod HP to itself or a construct/object within 5 ft.</p>"
            }
          }
        },
        {
          _id: "itemdeflect00001",
          name: isPt ? "Defletir Ataque" : "Deflect Attack",
          type: "feat",
          img: "icons/equipment/shield/round-shield-buckler-boss-steel.webp",
          system: {
            activation: { type: "reaction", cost: 1 },
            description: {
              value: isPt
                ? "<p>Impõe Desvantagem na jogada de ataque feita contra um aliado a até 1,5m.</p>"
                : "<p>Impose Disadvantage on an attack against an ally within 5 ft.</p>"
            }
          }
        }
      ]
    },
    {
      _id: "acthomunculusser",
      name: isPt ? "Servo Homúnculo" : "Homunculus Servant",
      type: "npc",
      img: "icons/creatures/magical/construct-gargoyle-stone-grey.webp",
      system: {
        abilities: {
          str: { value: 4, mod: -3 },
          dex: { value: 15, mod: 2 },
          con: { value: 12, mod: 1 },
          int: { value: 10, mod: 0 },
          wis: { value: 10, mod: 0 },
          cha: { value: 7, mod: -2 }
        },
        attributes: {
          ac: { value: 13 },
          hp: { value: 15, max: 15 },
          movement: { walk: 20, fly: 30 },
          senses: { darkvision: 60 }
        },
        traits: {
          size: "tiny",
          di: { value: ["poison"] },
          ci: { value: ["exhaustion", "poisoned"] }
        },
        details: {
          cr: null,
          type: { value: "construct" },
          alignment: "Neutral",
          biography: {
            value: isPt
              ? "<p>Um servo construto diminuto criado através da magia Servo Homúnculo.</p>"
              : "<p>A magical construct servant created via the Homunculus Servant spell.</p>"
          }
        }
      },
      items: [
        {
          _id: "itemfstrike00001",
          name: isPt ? "Golpe de Força" : "Force Strike",
          type: "weapon",
          img: "icons/magic/symbols/star-rising-purple.webp",
          system: {
            actionType: "rwak",
            damage: { parts: [["1d6 + 2", "force"]] },
            range: { value: 30, units: "ft" },
            description: {
              value: isPt
                ? "<p>Ataque Corpo a Corpo ou à Distância (9m). Acerto: 1d6 + círculo da magia de dano de Força.</p>"
                : "<p>Melee or Ranged Attack (30 ft). Hit: 1d6 + spell level Force damage.</p>"
            }
          }
        },
        {
          _id: "itemchanmag00001",
          name: isPt ? "Canalizar Magia" : "Channel Magic",
          type: "feat",
          img: "icons/magic/light/hand-sparks-glow-yellow.webp",
          system: {
            activation: { type: "reaction", cost: 1 },
            description: {
              value: isPt
                ? "<p>Entrega magias de toque conjuradas pelo seu criador a até 36m (120 pés).</p>"
                : "<p>Delivers touch spells cast within 120 ft by its creator.</p>"
            }
          }
        },
        {
          _id: "itemevasion00001",
          name: isPt ? "Evasão" : "Evasion",
          type: "feat",
          img: "icons/skills/movement/body-turn-dodge-blue.webp",
          system: {
            description: {
              value: isPt
                ? "<p>Não sofre dano em sucesso numa salvaguarda de Destreza, e sofre metade em falha.</p>"
                : "<p>Takes no damage on successful Dex save, half on failure.</p>"
            }
          }
        }
      ]
    },
    {
      _id: "acteldritchcann0",
      name: isPt ? "Canhão Arcano" : "Eldritch Cannon",
      type: "npc",
      img: "icons/weapons/artillery/cannon-wooden-bronze.webp",
      system: {
        abilities: {
          str: { value: 10, mod: 0 },
          dex: { value: 10, mod: 0 },
          con: { value: 10, mod: 0 },
          int: { value: 10, mod: 0 },
          wis: { value: 10, mod: 0 },
          cha: { value: 10, mod: 0 }
        },
        attributes: {
          ac: { value: 18 },
          hp: { value: 15, max: 15 },
          movement: { walk: 15 }
        },
        traits: {
          size: "sm",
          di: { value: ["poison", "psychic"] },
          ci: { value: ["charmed", "frightened", "poisoned"] }
        },
        details: {
          type: { value: "construct" },
          alignment: "Neutral",
          biography: {
            value: isPt
              ? "<p>Um canhão mágico ambulante ou estacionário criado por um Artilheiro.</p>"
              : "<p>A magical walking or stationary cannon created by an Artillerist.</p>"
          }
        }
      },
      items: [
        {
          _id: "itemflamethr0001",
          name: isPt ? "Lança-Chamas" : "Flamethrower",
          type: "feat",
          img: "icons/magic/fire/beam-jet-stream-red.webp",
          system: {
            activation: { type: "bonus", cost: 1 },
            target: { value: 15, units: "ft", type: "cone" },
            actionType: "save",
            save: { ability: "dex", dc: 15, scaling: "int" },
            damage: { parts: [["2d8", "fire"]] },
            description: {
              value: isPt
                ? "<p>Cone de 4,5m (15 pés), salvaguarda de Destreza, 2d8 de dano de Fogo (metade no sucesso).</p>"
                : "<p>15-foot Cone, Dexterity save, 2d8 Fire damage (half on save).</p>"
            }
          }
        },
        {
          _id: "itemforceballis1",
          name: isPt ? "Balista de Força" : "Force Ballista",
          type: "weapon",
          img: "icons/weapons/artillery/ballista-iron.webp",
          system: {
            activation: { type: "bonus", cost: 1 },
            actionType: "rsak",
            range: { value: 120, units: "ft" },
            damage: { parts: [["2d8", "force"]] },
            description: {
              value: isPt
                ? "<p>Ataque mágico à distância (36m), 2d8 de dano de Força e empurra o alvo 1,5m para trás.</p>"
                : "<p>Ranged spell attack (120 ft), 2d8 Force damage and pushed 5 ft back.</p>"
            }
          }
        },
        {
          _id: "itemprotector001",
          name: isPt ? "Protetor" : "Protector",
          type: "feat",
          img: "icons/magic/defensive/shield-barrier-glowing-triangle-blue.webp",
          system: {
            activation: { type: "bonus", cost: 1 },
            target: { value: 10, units: "ft", type: "radius" },
            damage: { parts: [["1d8 + @abilities.int.mod", "temphp"]] },
            description: {
              value: isPt
                ? "<p>Raio de 3m concede 1d8 + mod Inteligência em Pontos de Vida Temporários.</p>"
                : "<p>10-foot radius grants 1d8 + Int mod Temporary Hit Points.</p>"
            }
          }
        }
      ]
    }
  ];
}

saveFiles("actors.json", generateActors(false), generateActors(true));

console.log("Both pt-BR and EN Artificer data files successfully generated in scripts/data/ with valid 16-character IDs and Subclass Advancements!");
