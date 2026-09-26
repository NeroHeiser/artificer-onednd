# Classes & Archetypes Expansion (D&D 5e)

[English](README.md) | [Português (Brasil)](README.pt-BR.md)

[![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v12%20%7C%20v14-orange.svg)](https://foundryvtt.com/)
[![System](https://img.shields.io/badge/System-dnd5e%20v3.0%2B-blue.svg)](https://github.com/foundryvtt/dnd5e)
[![Tests](https://img.shields.io/badge/Tests-20%20passed-brightgreen.svg)](tests/)
[![Midi-QOL](https://img.shields.io/badge/Midi--QOL-Recommended-purple.svg)](https://gitlab.com/tposney/midi-qol)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive module for **Foundry Virtual Tabletop (VTT)** providing full class progressions, 58 specialized archetypes, and interactive workshop interfaces for the `dnd5e` system (v3.0+ and v4.0+), with seamless **Midi QOL** combat automation and bilingual compendiums (**English** and **Português - Brasil**).

---

## 🌟 Highlights

- **Full Level 1–20 Classes**: Complete progression configured using modern D&D 5e **Item Advancements** (`HitPoints`, `TraitAdvancement`, `ItemGrantAdvancement`, `ScaleValueAdvancement`).
- **58 Total Subclasses**: Fully registered in `CONFIG.DND5E.subclasses` and automatically offered during level-up.
- **Interactive Artificer Workshop**: Modern **ApplicationV2** interface for rolling Experimental Elixirs, summoning Tinker's Magic mundane items, crafting Replicated Magic Items by tier, and managing construct companion sheets.
- **Midi QOL Automation**: Full activity alignment (`actionType`, scalable save DCs, Active Effects for buffs, sacrificial damage, and combat logs) with graceful degradation when Midi QOL is inactive.
- **Bilingual & Auto-Syncing**: Automatic locale detection (`en` and `pt-BR`) with 1:1 ID parity across all 16 compendiums.

---

## ⚔️ Included Classes & Archetypes

### 1. Artificer (One D&D / 2024)
*Half-caster (round-up progression) with Intelligence as key ability, infusions, and companion constructs.*

| Subclass | Focus | Key Features |
| :--- | :--- | :--- |
| **Alchemist** | Support / Potions | Experimental Elixirs, Alchemical Savant, Restorative Reagents, Chemical Mastery |
| **Armorer** | Tank / Infiltration | Arcane Armor (Guardian, Infiltrator, Dreadnaught models), Extra Attack, Perfected Armor |
| **Artillerist** | Ranged Blaster | Eldritch Cannon (Flamethrower, Force Ballista, Protector), Arcane Firearm, Fortified Position |
| **Battle Smith** | Martial / Pet | Battle Ready (INT weapon attacks), Steel Defender companion, Arcane Jolt, Improved Defender |
| **Cartographer** | Utility / Mobility | Adventurer's Atlas, Mapping Magic (*Portal Jump*, free *Faerie Fire*), Guided Precision |
| **Reanimator (UA)** | Necro-Engineering | Jolt to Life, Reanimated Companion, Strange Modifications, Promethean Reanimation |

### 2. Witch Hunter (Blood Hunter 2020)
*Martial warrior wielding Crimson Rites, Esoteric Mutations, and Blood Curses with Intelligence synergy.*

| Order | Focus | Key Features |
| :--- | :--- | :--- |
| **Ghostslayer** | Undead / Radiant | Rite of the Dawn, Ethereal Step, Brand of the Sundering, Grave Sight |
| **Lycan** | Shapeshifter Tank | Hybrid Transformation (damage resistance, natural claw attacks), Stalker's Prowess |
| **Mutant** | Consumable Buffs | 19 Mutagen consumables with automated positive and negative Active Effects |
| **Profane Soul** | Pact Magic | Intelligence pact slots, Otherworldly Patrons, Rite Focus, Mystic Frenzy |

### 3. Psion (One D&D / UA 2025)
*Full mental caster (1st–9th level slots) casting without verbal or material components.*

| Subclass | Focus | Key Features |
| :--- | :--- | :--- |
| **Metamorph** | Biopsionics | Mutable Form, INT-based Organic Weapons (Bone Blade, Flesh Mace, Viscera Launcher) |
| **Psykinetic** | Telekinesis | Telekinetic Techniques, Destructive Trance (flight & damage bonus), Rebounding Field |
| **Telepath** | Mind Infiltration | Mental Infiltrator (component-less *Detect Thoughts*), Telepathic Distraction, Mind Shuffle |

### 4. Unearthed Arcana Subclasses (46 Archetypes)
All archetypes are integrated into core classes and grant full class features from 3rd to 20th level:

| Class | Archetypes Included |
| :--- | :--- |
| **Barbarian** | Path of Unlight, Path of Lament, Path of the Spiritual Guardian, Path of the Storm Herald |
| **Bard** | College of Spirits, College of the Moon |
| **Cleric** | Grave Domain, Arcana Domain, Knowledge Domain |
| **Druid** | Circle of Preservation, Circle of the Titan |
| **Fighter** | Arcane Archer, Purple Dragon Knight, Gladiator, Hell Knight, Cavalier |
| **Monk** | Warrior of the Mystic Arts, Tattooed Warrior, Warrior of Venom, Warrior of Intoxication |
| **Paladin** | Oath of the Noble Genies, Oath of the Spellguard, Oathbreaker |
| **Ranger** | Hollow Warden, Winter Walker |
| **Rogue** | Phantom, Scion of the Three, Magic Stealer, House Agent |
| **Sorcerer** | Shadow Sorcery, Ancestral Sorcery, Spellfire Sorcery, Defiled Sorcery, Demonic Sorcery |
| **Warlock** | Hexblade Patron, Undead Patron, Sorcerer-King Patron, Vestige Patron, Primordial Patron |
| **Wizard** | School of Conjuration, School of Enchantment, School of Necromancy, School of Transmutation, Bladesinger, Imaskarcanist |

---

## 🔧 Interactive Artificer Workshop

Accessible via the character sheet header button or Module Settings shortcut:

1. **Experimental Elixirs**: Roll 1d6 or expend a spell slot to instantly craft consumable elixir items in the character's inventory with active effects for healing, speed, AC, or flight.
2. **Tinker's Magic**: 1-click generation of 31 mundane adventuring tools and equipment that expire upon taking a Long Rest.
3. **Replicate Magic Item**: Filter known plans and craft replicated items partitioned into Tiers 2+, 6+, 10+, and 14+.
4. **Companions Management**: Quick access to configure and open sheets for **Steel Defender**, **Homunculus Servant**, and **Eldritch Cannon**.

---

## 📦 Compendiums Included

| Compendium ID | Type | Content |
| :--- | :---: | :--- |
| `artificer-classes` | Item | Artificer class progression |
| `artificer-subclasses` | Item | 5 Artificer subclasses |
| `artificer-features` | Item | Artificer class and subclass features |
| `artificer-spells` | Item | Artificer spells and *Homunculus Servant* |
| `artificer-items` | Item | Experimental elixirs and replicated magic items |
| `artificer-actors` | Actor | Pre-configured companion actors and constructs |
| `witch-hunter-classes` | Item | Witch Hunter class progression |
| `witch-hunter-subclasses` | Item | 4 Witch Hunter orders |
| `witch-hunter-features` | Item | Crimson Rites, Blood Curses, and class features |
| `witch-hunter-items` | Item | 19 Craftable mutagens |
| `psion-classes` | Item | Psion class progression |
| `psion-subclasses` | Item | 3 Psion subclasses |
| `psion-features` | Item | 11 Psionic Disciplines and class features |
| `psion-spells` | Item | 10 UA 2025 Psionic spells |
| `ua-subclasses` | Item | 46 Unearthed Arcana subclasses |
| `ua-features` | Item | 248 Subclass features (levels 3–20) |

---

## 🚀 Installation & Usage

### Installation
1. In the Foundry VTT Setup screen, navigate to the **Add-on Modules** tab.
2. Click **Install Module** and paste the manifest URL:
   ```text
   https://raw.githubusercontent.com/NeroHeiser/artificer-onednd/main/module.json
   ```
3. Enable the module inside your world.

### Usage
1. Open the **Compendium Packs** sidebar.
2. Drag any class (e.g., **Artificer**, **Psion**, **Witch Hunter**) onto an empty character sheet.
3. Follow the native D&D 5e level-up advancement dialogs.
4. For Artificers, click the **Artificer Workshop** wrench button on the character sheet header to launch the interactive workshop.

---

## 🧪 Development & Quality Assurance

This module enforces strict unit testing and clean code principles with zero external testing dependencies:

```bash
# Run test suite (20 unit tests)
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 📋 Compatibility

- **Foundry Virtual Tabletop**: Verified for v12 and v14.
- **Game System**: `dnd5e` v3.0.0 or higher.
- **Recommended Modules**: `midi-qol` (for automated combat resolution and effect application).

---

## 👤 Author

Developed by **Lopes** ([GitHub](https://github.com/NeroHeiser)).

Licensed under the [MIT License](LICENSE).
