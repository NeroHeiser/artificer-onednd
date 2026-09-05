import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// =============================================================
// 1. FEATURES (features.json)
// =============================================================
const features = [
  // --- BASE ARTIFICER FEATURES ---
  {
    _id: "artfeatspellcast0",
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
    _id: "artfeattinkermag0",
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
      uses: {
        value: 1,
        max: "max(1, @abilities.int.mod)",
        per: "lr",
        recovery: ""
      },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 1"
    }
  },
  {
    _id: "artfeatreplicatm0",
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
    _id: "artfeatasiprog000",
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
    _id: "artfeatmagtinker0",
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
    _id: "artfeatflashgen00",
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
      uses: {
        value: 1,
        max: "max(1, @abilities.int.mod)",
        per: "lr",
        recovery: ""
      },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 7"
    }
  },
  {
    _id: "artfeatmagicadept",
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
    _id: "artfeatspellstore",
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
      uses: {
        value: 2,
        max: "max(2, @abilities.int.mod * 2)",
        per: "lr",
        recovery: ""
      },
      type: { value: "class", subtype: "" },
      requirements: "Artificer 11"
    }
  },
  {
    _id: "artfeatadvartifi0",
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
    _id: "artfeatmagicmast0",
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
    _id: "artfeatepicboon00",
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
    _id: "artfeatsoulartif0",
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
    _id: "alcfeattoolstrad0",
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
    _id: "alcfeatelixir0000",
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
    _id: "alcfeatsavant0000",
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
    _id: "alcfeatreagents00",
    name: "Restorative Reagents",
    type: "feat",
    img: "icons/magic/life/cross-burst-teal.webp",
    system: {
      description: {
        value: "<p>Cast <em>Lesser Restoration</em> without expending a spell slot a number of times equal to your <strong>Intelligence modifier</strong> per Long Rest.</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: {
        value: 1,
        max: "max(1, @abilities.int.mod)",
        per: "lr",
        recovery: ""
      },
      type: { value: "subclass", subtype: "" },
      requirements: "Alchemist 9"
    }
  },
  {
    _id: "alcfeatmastery000",
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
    _id: "armfeattoolstrad0",
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
    _id: "armfeatarcanearm0",
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
    _id: "armfeatarmormod00",
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
    _id: "armfeatextraatt00",
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
    _id: "armfeatimparmor00",
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
    _id: "armfeatperfect000",
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
    _id: "artifeatcannon000",
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
    _id: "artifeatfirearm00",
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
    _id: "artifeatexplosiv0",
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
    _id: "artifeatfortifie0",
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
    _id: "bsfeattoolstrad00",
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
    _id: "bsfeatbattleread0",
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
    _id: "bsfeatdefender000",
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
    _id: "bsfeatextraatt000",
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
    _id: "bsfeatarcanejolt0",
    name: "Arcane Jolt",
    type: "feat",
    img: "icons/magic/lightning/bolt-strike-blue.webp",
    system: {
      description: {
        value: "<p>When you or your defender hit a target with a magic weapon/attack, deal an extra <strong>2d6 Force damage</strong> or heal <strong>2d6 HP</strong> to a creature within 30 ft (Int mod uses/Long Rest, max 1/turn).</p>",
        chat: ""
      },
      source: { custom: "Unearthed Arcana: Eberron - Forge of the Artificer (2024)" },
      uses: {
        value: 1,
        max: "max(1, @abilities.int.mod)",
        per: "lr",
        recovery: ""
      },
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
    _id: "cartfeatatlas0000",
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
    _id: "cartfeatmapping00",
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
      uses: {
        value: 1,
        max: "max(1, @abilities.int.mod)",
        per: "lr",
        recovery: ""
      },
      type: { value: "subclass", subtype: "" },
      requirements: "Cartographer 3"
    }
  },
  {
    _id: "cartfeatprecis000",
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
    _id: "cartfeatmovemen00",
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
    _id: "cartfeatsuperio00",
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

fs.writeFileSync(path.join(DATA_DIR, "features.json"), JSON.stringify(features, null, 2));

// =============================================================
// 2. CLASSES (classes.json)
// =============================================================
const classes = [
  {
    _id: "artificerclass00",
    name: "Artificer",
    type: "class",
    img: "icons/tools/smithing/anvil.webp",
    system: {
      description: {
        value: `
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
          title: "Saving Throws"
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
          title: "Armor Training"
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
          title: "Weapon Proficiencies"
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
          title: "Tool Proficiencies"
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
          title: "Skill Proficiencies"
        },
        {
          _id: "advitemgrant0001",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatspellcast0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeattinkermag0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 1,
          title: "Level 1 Features"
        },
        {
          _id: "advitemgrant0002",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatreplicatm0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 2,
          title: "Replicate Magic Item"
        },
        {
          _id: "advitemgrant0004",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 4,
          title: "Ability Score Improvement"
        },
        {
          _id: "advitemgrant0006",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagtinker0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 6,
          title: "Magic Item Tinker"
        },
        {
          _id: "advitemgrant0007",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatflashgen00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 7,
          title: "Flash of Genius"
        },
        {
          _id: "advitemgrant0008",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 8,
          title: "Ability Score Improvement"
        },
        {
          _id: "advitemgrant0010",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagicadept", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 10,
          title: "Magic Item Adept"
        },
        {
          _id: "advitemgrant0011",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatspellstore", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 11,
          title: "Spell-Storing Item"
        },
        {
          _id: "advitemgrant0012",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 12,
          title: "Ability Score Improvement"
        },
        {
          _id: "advitemgrant0014",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatadvartifi0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 14,
          title: "Advanced Artifice"
        },
        {
          _id: "advitemgrant0016",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatasiprog000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 16,
          title: "Ability Score Improvement"
        },
        {
          _id: "advitemgrant0018",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatmagicmast0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 18,
          title: "Magic Item Master"
        },
        {
          _id: "advitemgrant0019",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatepicboon00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 19,
          title: "Epic Boon"
        },
        {
          _id: "advitemgrant0020",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artfeatsoulartif0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 20,
          title: "Soul of Artifice"
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
          title: "Plans Known"
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
          title: "Magic Items Active"
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
          title: "Prepared Spells"
        }
      ],
      spellcasting: {
        progression: "artificer",
        ability: "int"
      }
    }
  }
];

fs.writeFileSync(path.join(DATA_DIR, "classes.json"), JSON.stringify(classes, null, 2));

// =============================================================
// 3. SUBCLASSES (subclasses.json)
// =============================================================
const subclasses = [
  {
    _id: "alchemistsubcl00",
    name: "Alchemist",
    type: "subclass",
    img: "icons/tools/laboratory/alembic-glass-copper.webp",
    system: {
      description: {
        value: `
          <p>An Alchemist is an expert at combining exotic reagents to produce mystical effects. They create swift healing, toxic coatings, and volatile concoctions.</p>
          <h3>Alchemist Spells</h3>
          <table>
            <thead><tr><th>Artificer Level</th><th>Spells</th></tr></thead>
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
      classIdentifier: "artificer",
      identifier: "alchemist",
      advancement: [
        {
          _id: "alcadvent0000003",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeattoolstrad0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatelixir0000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 3,
          title: "Alchemist Level 3 Features"
        },
        {
          _id: "alcadvent0000005",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatsavant0000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 5,
          title: "Alchemical Savant"
        },
        {
          _id: "alcadvent0000009",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatreagents00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 9,
          title: "Restorative Reagents"
        },
        {
          _id: "alcadvent0000015",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.alcfeatmastery000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 15,
          title: "Chemical Mastery"
        }
      ]
    }
  },
  {
    _id: "armorersubclass0",
    name: "Armorer",
    type: "subclass",
    img: "icons/equipment/chest/breastplate-metal-scaled-grey.webp",
    system: {
      description: {
        value: `
          <p>An Armorer augments armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense.</p>
          <h3>Armorer Spells</h3>
          <table>
            <thead><tr><th>Artificer Level</th><th>Spells</th></tr></thead>
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
      classIdentifier: "artificer",
      identifier: "armorer",
      advancement: [
        {
          _id: "armadvent0000003",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeattoolstrad0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatarcanearm0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatarmormod00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 3,
          title: "Armorer Level 3 Features"
        },
        {
          _id: "armadvent0000005",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatextraatt00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 5,
          title: "Extra Attack"
        },
        {
          _id: "armadvent0000009",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatimparmor00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 9,
          title: "Improved Armorer"
        },
        {
          _id: "armadvent0000015",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.armfeatperfect000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 15,
          title: "Perfected Armor"
        }
      ]
    }
  },
  {
    _id: "artilleristsubcl",
    name: "Artillerist",
    type: "subclass",
    img: "icons/weapons/artillery/cannon-wooden-bronze.webp",
    system: {
      description: {
        value: `
          <p>An Artillerist specializes in using magic to hurl energy, projectiles, and explosions upon the battlefield, creating magical cannons and wielding empowered firearms.</p>
          <h3>Artillerist Spells</h3>
          <table>
            <thead><tr><th>Artificer Level</th><th>Spells</th></tr></thead>
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
      classIdentifier: "artificer",
      identifier: "artillerist",
      advancement: [
        {
          _id: "artadvent0000003",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeattoolstr0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatcannon000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 3,
          title: "Artillerist Level 3 Features"
        },
        {
          _id: "artadvent0000005",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatfirearm00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 5,
          title: "Arcane Firearm"
        },
        {
          _id: "artadvent0000009",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatexplosiv0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 9,
          title: "Explosive Cannon"
        },
        {
          _id: "artadvent0000015",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.artifeatfortifie0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 15,
          title: "Fortified Position"
        }
      ]
    }
  },
  {
    _id: "battlesmithsubcl",
    name: "Battle Smith",
    type: "subclass",
    img: "icons/tools/smithing/anvil.webp",
    system: {
      description: {
        value: `
          <p>Armored in purpose and backed by a loyal mechanical companion, the Battle Smith repairs what is broken, protects comrades, and smites foes with arcane power.</p>
          <h3>Battle Smith Spells</h3>
          <table>
            <thead><tr><th>Artificer Level</th><th>Spells</th></tr></thead>
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
      classIdentifier: "artificer",
      identifier: "battle-smith",
      advancement: [
        {
          _id: "bsadvent00000003",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeattoolstrad00", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatbattleread0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatdefender000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 3,
          title: "Battle Smith Level 3 Features"
        },
        {
          _id: "bsadvent00000005",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatextraatt000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 5,
          title: "Extra Attack"
        },
        {
          _id: "bsadvent00000009",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.bsfeatarcanejolt0", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 9,
          title: "Arcane Jolt"
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
          title: "Improved Defender"
        }
      ]
    }
  },
  {
    _id: "cartographersubc",
    name: "Cartographer",
    type: "subclass",
    img: "icons/tools/navigation/map-chart-tan.webp",
    system: {
      description: {
        value: `
          <p>Cartographers chart the arcane lay of the land, navigating chaos and teleporting allies through metaphysical coordinates.</p>
          <h3>Cartographer Spells</h3>
          <table>
            <thead><tr><th>Artificer Level</th><th>Spells</th></tr></thead>
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
      classIdentifier: "artificer",
      identifier: "cartographer",
      advancement: [
        {
          _id: "cartadvent000003",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeattoolstr0", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatatlas0000", optional: false },
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatmapping00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 3,
          title: "Cartographer Level 3 Features"
        },
        {
          _id: "cartadvent000005",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatprecis000", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 5,
          title: "Guided Precision"
        },
        {
          _id: "cartadvent000009",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatmovemen00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 9,
          title: "Ingenious Movement"
        },
        {
          _id: "cartadvent000015",
          type: "ItemGrant",
          configuration: {
            items: [
              { uuid: "Compendium.artificer-onednd.artificer-features.Item.cartfeatsuperio00", optional: false }
            ],
            optional: false,
            spell: null
          },
          level: 15,
          title: "Superior Atlas"
        }
      ]
    }
  }
];

fs.writeFileSync(path.join(DATA_DIR, "subclasses.json"), JSON.stringify(subclasses, null, 2));

// =============================================================
// 4. SPELLS (spells.json)
// =============================================================
const spells = [
  {
    _id: "splhomunculus00",
    name: "Homunculus Servant",
    type: "spell",
    img: "icons/creatures/magical/construct-gargoyle-stone-grey.webp",
    system: {
      description: {
        value: `
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
        value: "a gem worth 100+ GP",
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

fs.writeFileSync(path.join(DATA_DIR, "spells.json"), JSON.stringify(spells, null, 2));

// =============================================================
// 5. ITEMS & CONSUMABLES (items.json)
// =============================================================
const items = [
  // --- Experimental Elixirs ---
  {
    _id: "elixirhealing000",
    name: "Experimental Elixir: Healing",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-red.webp",
    system: {
      description: {
        value: "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker regains <strong>2d8 + Intelligence modifier HP</strong> (3d8 at lvl 9, 4d8 at lvl 15).</p>",
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
    name: "Experimental Elixir: Swiftness",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-yellow.webp",
    system: {
      description: {
        value: "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker's Speed increases by <strong>10 feet for 1 hour</strong> (15 ft at lvl 9, 20 ft at lvl 15).</p>",
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
    name: "Experimental Elixir: Resilience",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
    system: {
      description: {
        value: "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker gains a <strong>+1 bonus to AC for 10 minutes</strong> (1 hour at lvl 9, 8 hours at lvl 15).</p>",
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
    name: "Experimental Elixir: Boldness",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-orange.webp",
    system: {
      description: {
        value: "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker adds <strong>1d4 to every attack roll and saving throw for 1 minute</strong> (10 minutes at lvl 9, 1 hour at lvl 15).</p>",
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
    name: "Experimental Elixir: Flight",
    type: "consumable",
    img: "icons/consumables/potions/potion-bottle-corked-purple.webp",
    system: {
      description: {
        value: "<p>A creature can drink this elixir or administer it to an adjacent creature as a <strong>Bonus Action</strong>. The drinker gains a <strong>Fly Speed of 10 feet for 10 minutes</strong> (20 ft at lvl 9, 30 ft at lvl 15).</p>",
        chat: ""
      },
      consumableType: "potion",
      uses: { value: 1, max: "1", per: "charges", autoDestroy: true },
      activation: { type: "bonus", cost: 1 },
      duration: { value: 10, units: "minute" }
    }
  },

  // --- Special Replicated Items & Weapons ---
  {
    _id: "repmanifoldtool0",
    name: "Manifold Tool",
    type: "equipment",
    img: "icons/tools/instruments/multitool-brass.webp",
    system: {
      description: {
        value: "<p>A miraculous Swiss Army tool crafted by an Artificer. Requires Attunement. As an action, it can transform into any type of artisan's tools or thieves' tools.</p>",
        chat: ""
      },
      attunement: 1,
      rarity: "common",
      equipped: true
    }
  },
  {
    _id: "reprepeating0000",
    name: "Repeating Shot",
    type: "weapon",
    img: "icons/weapons/crossbows/crossbow-loaded-repeater.webp",
    system: {
      description: {
        value: "<p>A ranged weapon infused with arcane machinery. Requires Attunement. +1 bonus to attack and damage rolls. Automatically produces its own magical ammunition if none is loaded, and ignores the loading property.</p>",
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
    name: "Returning Weapon",
    type: "weapon",
    img: "icons/weapons/daggers/dagger-thrown-glow-blue.webp",
    system: {
      description: {
        value: "<p>This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.</p>",
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
    name: "Mind Sharpener",
    type: "equipment",
    img: "icons/equipment/chest/vest-leather-studded-glowing.webp",
    system: {
      description: {
        value: "<p>Infused robes or armor. Requires Attunement. The infused item can send a jolt to the wearer to refocus their mind: when the wearer fails a Constitution saving throw to maintain concentration on a spell, the wearer can use its reaction to succeed instead (4 charges, regains 1d4 at dawn).</p>",
        chat: ""
      },
      attunement: 1,
      rarity: "uncommon",
      equipped: true
    }
  },
  {
    _id: "repwndingpath000",
    name: "Boots of the Winding Path",
    type: "equipment",
    img: "icons/equipment/feet/boots-leather-fur-cuffed-purple.webp",
    system: {
      description: {
        value: "<p>Requires Attunement. While wearing these boots, a creature can teleport up to 15 feet as a Bonus Action to an unoccupied space the creature occupied at some point during the current turn.</p>",
        chat: ""
      },
      attunement: 1,
      rarity: "uncommon",
      equipped: true
    }
  },
  {
    _id: "reprepulsionshld",
    name: "Repulsion Shield",
    type: "equipment",
    img: "icons/equipment/shield/heater-crystal-blue.webp",
    system: {
      description: {
        value: "<p>A shield granting a +1 bonus to Armor Class. As a reaction immediately after being hit by a melee attack, the wielder can push the attacker up to 15 feet away (4 charges, regains 1d4 at dawn).</p>",
        chat: ""
      },
      attunement: 0,
      rarity: "uncommon",
      equipped: true
    }
  }
];

fs.writeFileSync(path.join(DATA_DIR, "items.json"), JSON.stringify(items, null, 2));

// =============================================================
// 6. ACTORS (actors.json)
// =============================================================
const actors = [
  {
    _id: "actsteeldefende0",
    name: "Steel Defender",
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
          value: "<p>The mechanical companion created by a Battle Smith Artificer.</p>"
        }
      }
    },
    items: [
      {
        name: "Force-Empowered Rend",
        type: "weapon",
        img: "icons/skills/melee/unarmed-punch-fist.webp",
        system: {
          actionType: "mwak",
          damage: { parts: [["1d8 + 2 + @abilities.int.mod", "force"]] },
          range: { value: 5, units: "ft" },
          ability: "str",
          description: {
            value: "<p>Melee Attack: Reach 5 ft. Hit: 1d8 + 2 + Int mod Force damage.</p>"
          }
        }
      },
      {
        name: "Repair (3/Day)",
        type: "feat",
        img: "icons/tools/smithing/tongs-steel.webp",
        system: {
          activation: { type: "action", cost: 1 },
          uses: { value: 3, max: "3", per: "day" },
          damage: { parts: [["2d8 + @abilities.int.mod", "healing"]] },
          description: {
            value: "<p>Restores 2d8 + Int mod HP to itself or a construct/object within 5 ft.</p>"
          }
        }
      },
      {
        name: "Deflect Attack",
        type: "feat",
        img: "icons/equipment/shield/round-shield-buckler-boss-steel.webp",
        system: {
          activation: { type: "reaction", cost: 1 },
          description: {
            value: "<p>Impose Disadvantage on an attack against an ally within 5 ft.</p>"
          }
        }
      }
    ]
  },
  {
    _id: "acthomunculusser",
    name: "Homunculus Servant",
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
          value: "<p>A magical construct servant created via the Homunculus Servant spell.</p>"
        }
      }
    },
    items: [
      {
        name: "Force Strike",
        type: "weapon",
        img: "icons/magic/symbols/star-rising-purple.webp",
        system: {
          actionType: "rwak",
          damage: { parts: [["1d6 + 2", "force"]] },
          range: { value: 30, units: "ft" },
          description: {
            value: "<p>Melee or Ranged Attack (30 ft). Hit: 1d6 + spell level Force damage.</p>"
          }
        }
      },
      {
        name: "Channel Magic",
        type: "feat",
        img: "icons/magic/light/hand-sparks-glow-yellow.webp",
        system: {
          activation: { type: "reaction", cost: 1 },
          description: {
            value: "<p>Delivers touch spells cast within 120 ft by its creator.</p>"
          }
        }
      },
      {
        name: "Evasion",
        type: "feat",
        img: "icons/skills/movement/body-turn-dodge-blue.webp",
        system: {
          description: {
            value: "<p>Takes no damage on successful Dex save, half on failure.</p>"
          }
        }
      }
    ]
  },
  {
    _id: "acteldritchcann0",
    name: "Eldritch Cannon",
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
          value: "<p>A magical walking or stationary cannon created by an Artillerist.</p>"
        }
      }
    },
    items: [
      {
        name: "Flamethrower",
        type: "feat",
        img: "icons/magic/fire/beam-jet-stream-red.webp",
        system: {
          activation: { type: "bonus", cost: 1 },
          target: { value: 15, units: "ft", type: "cone" },
          actionType: "save",
          save: { ability: "dex", dc: 15, scaling: "int" },
          damage: { parts: [["2d8", "fire"]] },
          description: {
            value: "<p>15-foot Cone, Dexterity save, 2d8 Fire damage (half on save).</p>"
          }
        }
      },
      {
        name: "Force Ballista",
        type: "weapon",
        img: "icons/weapons/artillery/ballista-iron.webp",
        system: {
          activation: { type: "bonus", cost: 1 },
          actionType: "rsak",
          range: { value: 120, units: "ft" },
          damage: { parts: [["2d8", "force"]] },
          description: {
            value: "<p>Ranged spell attack (120 ft), 2d8 Force damage and pushed 5 ft back.</p>"
          }
        }
      },
      {
        name: "Protector",
        type: "feat",
        img: "icons/magic/defensive/shield-barrier-glowing-triangle-blue.webp",
        system: {
          activation: { type: "bonus", cost: 1 },
          target: { value: 10, units: "ft", type: "radius" },
          damage: { parts: [["1d8 + @abilities.int.mod", "temphp"]] },
          description: {
            value: "<p>10-foot radius grants 1d8 + Int mod Temporary Hit Points.</p>"
          }
        }
      }
    ]
  }
];

fs.writeFileSync(path.join(DATA_DIR, "actors.json"), JSON.stringify(actors, null, 2));

console.log("All Artificer data files successfully generated in scripts/data/!");

