/**
 * build-ua-lote2-data.mjs
 * Construtor dos dados para os Arquétipos de Unearthed Arcana (Lote 2: Realms, Apocalyptic & Mystic)
 * Integra 16 novas subclasses completas aos compêndios ua-subclasses e ua-features.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const PT_DIR = path.join(DATA_DIR, "pt-BR");
const EN_DIR = path.join(DATA_DIR, "en");

// Carregar dados existentes do Lote 1 se existirem
function loadExisting(filename, dir) {
  const p = path.join(dir, filename);
  if (fs.existsSync(p)) {
    try {
      return JSON.parse(fs.readFileSync(p, "utf8"));
    } catch {
      return [];
    }
  }
  return [];
}

// -------------------------------------------------------------
// 1. CARACTERÍSTICAS DO LOTE 2 (ua-features.json)
// -------------------------------------------------------------
function buildLote2Features(isPt) {
  return [
    // =========================================================
    // FORGOTTEN REALMS SUBCLASSES (UA2025-RealmsSubclasses.pdf)
    // =========================================================

    // 1. BARD: College of the Moon
    {
      _id: "uamoonfolk000001",
      name: isPt ? "Contos Populares de Moonshae" : "Moonshae Folktales",
      type: "feat",
      img: "icons/magic/nature/moon-crescent-tree-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a invocar a sabedoria mágica das lendas das Ilhas Moonshae. Com uma Ação Bônus, você pode gastar um dado de Inspiração de Bardo e rolar o dado para escolher um conto popular abençoado:</p>
               <ul>
                 <li><strong>1–2 (O Monstro):</strong> Um aliado que você possa ver a até 9m ganha Pontos de Vida Temporários iguais ao resultado + seu modificador de Carisma, e seu próximo ataque corpo a corpo causa dano de frio adicional igual ao número rolado.</li>
                 <li><strong>3–4 (A Mãe-Terra):</strong> Um aliado a até 9m recupera Pontos de Vida iguais ao resultado + seu modificador de Carisma, e encerra uma condição Envenenado ou Doente em si mesmo.</li>
                 <li><strong>5–6+ (O Poço Branco):</strong> Um aliado a até 9m pode usar imediatamente sua reação para teleportar-se até 9m para um espaço desocupado visível e ganha Vantagem em seu próximo teste de resistência.</li>
               </ul>`
            : `<p>At 3rd level, you learn to invoke the primal wisdom of the Moonshae Isles. As a Bonus Action, you can expend one Bardic Inspiration die and roll it to channel a blessed folk legend:</p>
               <ul>
                 <li><strong>1–2 (The Beast):</strong> An ally within 30 ft gains Temporary HP equal to the roll + your Cha modifier, and its next melee attack deals extra cold damage equal to the roll.</li>
                 <li><strong>3–4 (The Earthmother):</strong> An ally within 30 ft regains HP equal to the roll + your Cha modifier, and ends one poison or disease affecting it.</li>
                 <li><strong>5–6+ (The White Well):</strong> An ally within 30 ft can use its reaction to teleport up to 30 ft to an unoccupied space it can see and gains Advantage on its next saving throw.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bardo (Colégio da Lua) 3" : "Bard (College of the Moon) 3"
      }
    },
    {
      _id: "uaprimalori00001",
      name: isPt ? "Folclorista Primitivo" : "Primal Lorist",
      type: "feat",
      img: "icons/sundries/books/book-embossed-tree-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência nas perícias Natureza e Sobrevivência. Sempre que fizer um teste de Inteligência (Natureza) ou Sabedoria (Sobrevivência), você pode adicionar seu modificador de Carisma ao teste. Além disso, você aprende o truque <em>Artifício Adiantado (Druidcraft)</em>.</p>`
            : `<p>At 3rd level, you gain proficiency in Nature and Survival. Whenever you make an Int (Nature) or Wis (Survival) check, you can add your Cha modifier to the check. In addition, you learn the <em>Druidcraft</em> cantrip.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bardo (Colégio da Lua) 3" : "Bard (College of the Moon) 3"
      }
    },
    {
      _id: "uamoonwell000001",
      name: isPt ? "Bênção dos Poços da Lua" : "Blessing of the Moonwells",
      type: "feat",
      img: "icons/magic/water/vortex-water-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, a água sagrada dos poços lunares revigora seu espírito. Uma vez por dia ao completar um Descanso Curto, você recupera um uso esgotado de Inspiração de Bardo. Além disso, você pode conjurar a magia <em>Raio Lunar (Moonbeam)</em> sem gastar espaço de magia uma vez por Descanso Longo.</p>`
            : `<p>At 6th level, the sacred water of the moonwells restores your soul. Once per day when you finish a Short Rest, you regain one expended use of Bardic Inspiration. Additionally, you can cast <em>Moonbeam</em> once without expending a spell slot per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bardo (Colégio da Lua) 6" : "Bard (College of the Moon) 6"
      }
    },
    {
      _id: "uabolsterfk00001",
      name: isPt ? "Contos Fortalecidos" : "Bolstered Folktales",
      type: "feat",
      img: "icons/magic/control/buff-flight-wings-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, suas histórias tocam a própria essência feérica. Sempre que rolar um dado de Inspiração de Bardo para Contos Populares de Moonshae, você rola dois dados em vez de um e escolhe qual efeito aplicar, ou pode aplicar os dois efeitos a aliados diferentes dentro do alcance.</p>`
            : `<p>At 14th level, your stories resonate with ancient power. Whenever you roll your Bardic Inspiration die for Moonshae Folktales, you roll two dice instead of one and can choose which result to use, or apply both results to two different allies within range.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bardo (Colégio da Lua) 14" : "Bard (College of the Moon) 14"
      }
    },

    // 2. CLERIC: Knowledge Domain
    {
      _id: "uaknowspells0001",
      name: isPt ? "Magias do Domínio do Conhecimento" : "Knowledge Domain Spells",
      type: "feat",
      img: "icons/sundries/books/book-eye-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Comando (Command)</em>, <em>Identificação (Identify)</em>, <em>Detectar Pensamentos (Detect Thoughts)</em>, <em>Espinho Mental (Mind Spike)</em></li>
                 <li><strong>5º Nível:</strong> <em>Indetectável (Nondetection)</em>, <em>Idiomas (Tongues)</em></li>
                 <li><strong>7º Nível:</strong> <em>Olho Arcano (Arcane Eye)</em>, <em>Confusão (Confusion)</em></li>
                 <li><strong>9º Nível:</strong> <em>Lendas e Histórias (Legend Lore)</em>, <em>Vidência (Scrying)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Cleric levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Command</em>, <em>Identify</em>, <em>Detect Thoughts</em>, <em>Mind Spike</em></li>
                 <li><strong>Level 5:</strong> <em>Nondetection</em>, <em>Tongues</em></li>
                 <li><strong>Level 7:</strong> <em>Arcane Eye</em>, <em>Confusion</em></li>
                 <li><strong>Level 9:</strong> <em>Legend Lore</em>, <em>Scrying</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Clérigo (Domínio do Conhecimento) 3" : "Cleric (Knowledge Domain) 3"
      }
    },
    {
      _id: "uaknowbless00001",
      name: isPt ? "Bênçãos do Conhecimento" : "Blessings of Knowledge",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-horned-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende dois idiomas à sua escolha. Você também ganha proficiência e Especialização (Expertise) em duas das seguintes perícias: Arcanismo, História, Natureza ou Religião.</p>`
            : `<p>At 3rd level, you learn two languages of your choice. You also gain proficiency and Expertise in two of the following skills: Arcana, History, Nature, or Religion.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Clérigo (Domínio do Conhecimento) 3" : "Cleric (Knowledge Domain) 3"
      }
    },
    {
      _id: "uaknowmindm00001",
      name: isPt ? "Magia Mental" : "Mind Magic",
      type: "feat",
      img: "icons/magic/perception/brain-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, sempre que você conjurar uma magia da escola de Encantamento ou Adivinhação usando um espaço de magia, você pode conjurá-la sem a necessidade de componentes Verbais ou Somáticos.</p>`
            : `<p>At 3rd level, whenever you cast an Enchantment or Divination spell using a spell slot, you can do so without needing Verbal or Somatic components.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Clérigo (Domínio do Conhecimento) 3" : "Cleric (Knowledge Domain) 3"
      }
    },
    {
      _id: "uaknowunfet00001",
      name: isPt ? "Mente Desacorrentada" : "Unfettered Mind",
      type: "feat",
      img: "icons/magic/control/silhouette-aura-energy-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, sua mente se torna uma fortaleza inexpugnável. Você tem Vantagem em testes de resistência contra ser Enfeitiçado ou Amedrontado. Além disso, você pode usar seu Canalizar Divindade para ler pensamentos superficiais de uma criatura ou encerrar instantaneamente as condições Enfeitiçado e Amedrontado em criaturas aliadas a até 9m.</p>`
            : `<p>At 6th level, your mind becomes an unassailable redoubt. You have Advantage on saving throws against being Charmed or Frightened. Furthermore, you can use your Channel Divinity to read surface thoughts of a creature or cleanse the Charmed and Frightened conditions from allies within 30 ft.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Clérigo (Domínio do Conhecimento) 6" : "Cleric (Knowledge Domain) 6"
      }
    },
    {
      _id: "uaknowdivin00001",
      name: isPt ? "Presciência Divina" : "Divine Foreknowledge",
      type: "feat",
      img: "icons/magic/perception/eye-tendrils-web-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, sua conexão com a onisciência divina atinge o ápice. Você ganha Visão Verdadeira (Truesight) com alcance de 9m. Como uma Reação quando um inimigo a até 18m realiza uma jogada de ataque, teste de habilidade ou teste de resistência, você pode impor Desvantagem naquela rolagem.</p>`
            : `<p>At 17th level, your connection to divine omniscience reaches its apex. You gain Truesight out to 30 ft. As a Reaction when an enemy within 60 ft makes an attack roll, ability check, or saving throw, you can impose Disadvantage on that roll.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Clérigo (Domínio do Conhecimento) 17" : "Cleric (Knowledge Domain) 17"
      }
    },

    // 3. FIGHTER: Purple Dragon Knight
    {
      _id: "uapdkknight00001",
      name: isPt ? "Enviado Cavaleiresco" : "Knightly Envoy",
      type: "feat",
      img: "icons/skills/social/diplomacy-handshake-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você é treinado como líder diplomático de Cormyr. Você ganha proficiência na perícia Persuasão (ou Intuição/Adestrar Animais se já for proficiente) e Especialização (Expertise) em Persuasão.</p>`
            : `<p>At 3rd level, you are trained as a diplomatic vanguard of Cormyr. You gain proficiency in Persuasion (or Animal Handling/Insight) and gain Expertise in Persuasion.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 3" : "Fighter (Purple Dragon Knight) 3"
      }
    },
    {
      _id: "uapdkcompan00001",
      name: isPt ? "Companheiro Dragão Púrpura" : "Purple Dragon Companion",
      type: "feat",
      img: "icons/creatures/reptiles/dragon-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você estabelece um elo com um jovem dragão púrpura (wyrmling dracônico) que o acompanha em batalha. Ele age imediatamente após o seu turno, usa seu Bônus de Proficiência e pode desferir ataques de sopro psíquico/energia ou garras ferozes.</p>`
            : `<p>At 3rd level, you form a bond with a purple dragon wyrmling companion that fights beside you. It takes its turn immediately after yours, uses your Proficiency Bonus, and can deliver psionic breath or draconic strikes.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 3" : "Fighter (Purple Dragon Knight) 3"
      }
    },
    {
      _id: "uapdkdrider00001",
      name: isPt ? "Cavaleiro de Dragão" : "Dragon Rider",
      type: "feat",
      img: "icons/environment/creatures/flying-mount.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, seu companheiro dragão atinge tamanho suficiente para servir como sua montaria de combate. Montar ou desmontar custa apenas 1,5m de movimento, e você tem Vantagem em salvaguardas para não ser derrubado da sela.</p>`
            : `<p>At 7th level, your dragon companion grows large enough to serve as your combat mount. Mounting or dismounting costs only 5 ft of movement, and you have Advantage on saving throws to avoid falling off your mount.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 7" : "Fighter (Purple Dragon Knight) 7"
      }
    },
    {
      _id: "uapdkrallys00001",
      name: isPt ? "Surto de Encorajamento" : "Rallying Surge",
      type: "feat",
      img: "icons/magic/life/heart-shield-hand-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, quando você usa seu <em>Retomar o Fôlego (Second Wind)</em>, você pode escolher até três aliados a até 18m de você. Cada um deles recupera Pontos de Vida iguais ao seu nível de Guerreiro ou à sua rolagem de Retomar o Fôlego.</p>`
            : `<p>At 10th level, when you use your <em>Second Wind</em>, you can choose up to three allies within 60 ft. Each one regains Hit Points equal to your Fighter level or your Second Wind roll.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 10" : "Fighter (Purple Dragon Knight) 10"
      }
    },
    {
      _id: "uapdkamethyst001",
      name: isPt ? "Pináculo de Ametista" : "Amethyst Pinnacle",
      type: "feat",
      img: "icons/commodities/gems/gem-faceted-rough-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, a energia ametista protege você e sua montaria. Você e seu dragão ganham resistência a dano de Força e Psíquico, e o sopro do dragão tem seu alcance dobrado e dano ampliado.</p>`
            : `<p>At 15th level, amethyst energy shields you and your mount. You and your dragon gain resistance to Force and Psychic damage, and the dragon's breath weapon range is doubled and damage increased.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 15" : "Fighter (Purple Dragon Knight) 15"
      }
    },
    {
      _id: "uapdkendurin0001",
      name: isPt ? "Comandante Resiliente" : "Enduring Commander",
      type: "feat",
      img: "icons/skills/combat/banners-honor-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, quando você usa seu <em>Surto de Ação (Action Surge)</em>, um aliado à sua escolha a até 18m pode usar imediatamente a reação dele para realizar um ataque com arma ou conjurar um truque.</p>`
            : `<p>At 18th level, when you use your <em>Action Surge</em>, one ally of your choice within 60 ft can use its reaction to make one weapon attack or cast a cantrip.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Cavaleiro do Dragão Púrpura) 18" : "Fighter (Purple Dragon Knight) 18"
      }
    },

    // 4. PALADIN: Oath of the Noble Genies
    {
      _id: "uageniessmite001",
      name: isPt ? "Golpe Elemental" : "Elemental Smite",
      type: "feat",
      img: "icons/magic/fire/dagger-rune-enchant-flame-blue-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando você conjura <em>Golpe Divino (Divine Smite)</em>, você pode escolher causar dano de Ácido, Frio, Fogo, Elétrico ou Trovão em vez de dano Radiante.</p>`
            : `<p>At 3rd level, when you cast <em>Divine Smite</em>, you can choose to deal Acid, Cold, Fire, Lightning, or Thunder damage instead of Radiant damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 3" : "Paladin (Oath of the Noble Genies) 3"
      }
    },
    {
      _id: "uageniesspells01",
      name: isPt ? "Magias dos Gênios" : "Genie Spells",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-elemental.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Absorver Elementos (Absorb Elements)</em>, <em>Golpe Trovejante (Thunderous Smite)</em>, <em>Passo Sombrio (Misty Step)</em>, <em>Força Fantasmagórica (Phantasmal Force)</em></li>
                 <li><strong>5º Nível:</strong> <em>Voo (Fly)</em>, <em>Proteção contra Energia (Protection from Energy)</em></li>
                 <li><strong>9º Nível:</strong> <em>Banimento (Banishment)</em>, <em>Escudo de Fogo (Fire Shield)</em></li>
                 <li><strong>13º Nível:</strong> <em>Conjurar Elemental (Conjure Elemental)</em>, <em>Criação (Creation)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Paladin levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Absorb Elements</em>, <em>Thunderous Smite</em>, <em>Misty Step</em>, <em>Phantasmal Force</em></li>
                 <li><strong>Level 5:</strong> <em>Fly</em>, <em>Protection from Energy</em></li>
                 <li><strong>Level 9:</strong> <em>Banishment</em>, <em>Fire Shield</em></li>
                 <li><strong>Level 13:</strong> <em>Conjure Elemental</em>, <em>Creation</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 3" : "Paladin (Oath of the Noble Genies) 3"
      }
    },
    {
      _id: "uageniessplend01",
      name: isPt ? "Esplendor dos Gênios" : "Genie's Splendor",
      type: "feat",
      img: "icons/magic/air/wind-stream-whirlwind-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você pode usar seu Canalizar Divindade para manifestar a opulência elemental dos gênios: você ganha deslocamento de voo igual ao seu deslocamento de caminhada por 10 minutos ou libera uma onda elemental em cone de 4,5m causando 2d8 + seu nível de Paladino em dano elemental.</p>`
            : `<p>At 3rd level, you can use your Channel Divinity to manifest noble genie power: gain flying speed equal to your walking speed for 10 minutes, or unleash a 15-ft cone of elemental energy dealing 2d8 + Paladin level damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 3" : "Paladin (Oath of the Noble Genies) 3"
      }
    },
    {
      _id: "uageniesaura0001",
      name: isPt ? "Aura de Blindagem Elemental" : "Aura of Elemental Shielding",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-gold-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, você emana uma aura de 3m de proteção elemental. Sempre que terminar um descanso, escolha Ácido, Frio, Fogo, Elétrico ou Trovão. Você e aliados dentro da sua aura têm resistência ao tipo escolhido. No 18º nível, o alcance da aura expande para 9m.</p>`
            : `<p>At 7th level, you emanate a 10-ft aura of elemental warding. Whenever you finish a rest, choose Acid, Cold, Fire, Lightning, or Thunder. You and allies in the aura have resistance to the chosen damage type. Extends to 30 ft at 18th level.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 7" : "Paladin (Oath of the Noble Genies) 7"
      }
    },
    {
      _id: "uageniesrebuk001",
      name: isPt ? "Reprimenda Elemental" : "Elemental Rebuke",
      type: "feat",
      img: "icons/magic/lightning/bolt-strike-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, quando uma criatura a até 9m atinge você ou um aliado em sua aura, você pode usar sua reação para retaliar com fúria elemental, causando 2d10 + seu modificador de Carisma de dano elemental ao atacante.</p>`
            : `<p>At 15th level, when a creature within 30 ft hits you or an ally in your aura, you can use a reaction to retaliate, dealing 2d10 + Cha modifier elemental damage to the attacker.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 15" : "Paladin (Oath of the Noble Genies) 15"
      }
    },
    {
      _id: "uageniesscion001",
      name: isPt ? "Herdeiro Nobre" : "Noble Scion",
      type: "feat",
      img: "icons/magic/symbols/crest-elemental-royalty.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 20º nível, como uma Ação Bônus, você assume a forma avatar de um sultão dos gênios por 1 minuto: ganha deslocamento de voo de 18m (planar), resistência a todos os 5 danos elementais e pode conjurar magias elementais com custo de ação reduzido.</p>`
            : `<p>At 20th level, as a Bonus Action, you take on the avatar of a noble genie sultan for 1 minute: flying speed 60 ft (hover), resistance to all 5 elemental damage types, and enhanced spell power.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento dos Gênios Nobres) 20" : "Paladin (Oath of the Noble Genies) 20"
      }
    },

    // 5. RANGER: Winter Walker
    {
      _id: "uawinterexpl0001",
      name: isPt ? "Explorador Gélido" : "Frigid Explorer",
      type: "feat",
      img: "icons/magic/water/ice-mountain-frost.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ignora terreno difícil criado por gelo ou neve, e está adaptado a climas de frio extremo. Você também ganha resistência a dano de Frio.</p>`
            : `<p>At 3rd level, you ignore difficult terrain created by ice or snow, and you are adapted to extreme cold climates. You also gain resistance to Cold damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 3" : "Ranger (Winter Walker) 3"
      }
    },
    {
      _id: "uawinterrime0001",
      name: isPt ? "Geada do Caçador" : "Hunter's Rime",
      type: "feat",
      img: "icons/magic/water/projectile-ice-shard.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, uma vez por turno quando você atinge uma criatura com um ataque de arma, você pode cobri-la com geada: ela sofre +1d6 de dano de Frio e seu deslocamento é reduzido em 3m até o início do seu próximo turno.</p>`
            : `<p>At 3rd level, once per turn when you hit a creature with a weapon attack, you can encase it in frost: it takes an extra 1d6 Cold damage and its speed is reduced by 10 ft until the start of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 3" : "Ranger (Winter Walker) 3"
      }
    },
    {
      _id: "uawinterspells01",
      name: isPt ? "Magias do Caminhante do Inverno" : "Winter Walker Spells",
      type: "feat",
      img: "icons/magic/water/snowflake-ice-crystal-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Armadura de Agathys (Armor of Agathys)</em>, <em>Faca de Gelo (Ice Knife)</em>, <em>Imobilizar Pessoa (Hold Person)</em>, <em>Gelo Vinculante de Rime (Rime's Binding Ice)</em></li>
                 <li><strong>5º Nível:</strong> <em>Nevasca (Sleet Storm)</em>, <em>Lentidão (Slow)</em></li>
                 <li><strong>9º Nível:</strong> <em>Tempestade de Gelo (Ice Storm)</em>, <em>Esfera Resiliente (Resilient Sphere)</em></li>
                 <li><strong>13º Nível:</strong> <em>Cone de Frio (Cone of Cold)</em>, <em>Imobilizar Monstro (Hold Monster)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Ranger levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Armor of Agathys</em>, <em>Ice Knife</em>, <em>Hold Person</em>, <em>Rime's Binding Ice</em></li>
                 <li><strong>Level 5:</strong> <em>Sleet Storm</em>, <em>Slow</em></li>
                 <li><strong>Level 9:</strong> <em>Ice Storm</em>, <em>Resilient Sphere</em></li>
                 <li><strong>Level 13:</strong> <em>Cone of Cold</em>, <em>Hold Monster</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 3" : "Ranger (Winter Walker) 3"
      }
    },
    {
      _id: "uawintersoul0001",
      name: isPt ? "Alma Fortalecida" : "Fortifying Soul",
      type: "feat",
      img: "icons/magic/life/cross-frost-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, sempre que você causar dano de Frio com um ataque de arma ou magia de patrulheiro, você ganha Pontos de Vida Temporários iguais ao seu modificador de Sabedoria (mínimo de 1).</p>`
            : `<p>At 7th level, whenever you deal Cold damage with a weapon attack or ranger spell, you gain Temporary Hit Points equal to your Wisdom modifier (minimum 1).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 7" : "Ranger (Winter Walker) 7"
      }
    },
    {
      _id: "uawinterretrib01",
      name: isPt ? "Retribuição Congelante" : "Chilling Retribution",
      type: "feat",
      img: "icons/magic/water/ice-spikes-burst-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, o dano da Geada do Caçador aumenta para 1d10. Além disso, quando um inimigo a até 1,5m atinge você com um ataque corpo a corpo, ele sofre 2d8 de dano de Frio e deve passar em uma salvaguarda de Constituição ou terá Desvantagem em seu próximo ataque.</p>`
            : `<p>At 11th level, Hunter's Rime damage increases to 1d10. Furthermore, when an enemy within 5 ft hits you with a melee attack, it takes 2d8 Cold damage and must succeed on a Con save or have Disadvantage on its next attack.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 11" : "Ranger (Winter Walker) 11"
      }
    },
    {
      _id: "uawinterhaunt000",
      name: isPt ? "Assombração Congelada" : "Frozen Haunt",
      type: "feat",
      img: "icons/magic/death/specter-frozen-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, você pode manifestar o avatar do inverno implacável por 1 minuto: emana uma tempestade de 4,5m ao seu redor (terreno difícil para inimigos, 2d6 de dano de frio no início do turno inimigo) e você pode se mover através de criaturas e objetos sólidos.</p>`
            : `<p>At 15th level, you can manifest the avatar of unrelenting winter for 1 minute: emanate a 15-ft blizzard (difficult terrain for enemies, 2d6 cold damage at start of enemy turn) and you can pass through solid creatures and objects.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Patrulheiro (Caminhante do Inverno) 15" : "Ranger (Winter Walker) 15"
      }
    },

    // 6. ROGUE: Scion of the Three
    {
      _id: "uascionthirst001",
      name: isPt ? "Sede de Sangue" : "Bloodthirst",
      type: "feat",
      img: "icons/skills/melee/blood-slash-dagger-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando você acerta um Acerto Crítico ou reduz uma criatura a 0 PV com Ataque Furtivo, você ganha Pontos de Vida Temporários iguais ao seu nível de Ladino + modificador de Destreza e pode se mover até metade do seu deslocamento sem provocar ataques de oportunidade.</p>`
            : `<p>At 3rd level, when you score a Critical Hit or drop a creature to 0 HP with Sneak Attack, you gain Temporary HP equal to your Rogue level + Dex modifier and can immediately move up to half your speed without provoking opportunity attacks.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Herdeiro dos Três) 3" : "Rogue (Scion of the Three) 3"
      }
    },
    {
      _id: "uascionalleg0001",
      name: isPt ? "Lealdade Pavorosa" : "Dread Allegiance",
      type: "feat",
      img: "icons/magic/death/skull-horned-blood-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você dedica seus assassinatos a um dos Três Mortos:</p>
               <ul>
                 <li><strong>Bane (Tirania):</strong> Proficiência em Intimidação, vantagem em testes contra medo e +PB em dano de Força em ataques surpresa.</li>
                 <li><strong>Bhaal (Assassinato):</strong> Acerto Crítico em 19–20 contra alvos com menos da metade da vida máxima (feridos).</li>
                 <li><strong>Myrkul (Morte):</strong> Seu Ataque Furtivo pode causar dano Necrótico, e você aprende os truques <em>Poupar os Moribundos</em> e <em>Vitalidade Falsa</em>.</li>
               </ul>`
            : `<p>At 3rd level, you swear dark fealty to one of the Dead Three:</p>
               <ul>
                 <li><strong>Bane (Tyranny):</strong> Proficiency in Intimidation, advantage on saves against fear, and +PB Force damage.</li>
                 <li><strong>Bhaal (Murder):</strong> Critical hit on 19–20 against bloodied creatures (at or below half HP).</li>
                 <li><strong>Myrkul (Death):</strong> Sneak Attack can deal Necrotic damage, and you learn <em>Spare the Dying</em> and <em>False Life</em>.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Herdeiro dos Três) 3" : "Rogue (Scion of the Three) 3"
      }
    },
    {
      _id: "uascionfear00001",
      name: isPt ? "Abalar de Pavor" : "Strike Fear",
      type: "feat",
      img: "icons/magic/control/fear-fright-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, quando atinge um alvo com seu Ataque Furtivo, a criatura deve passar em uma salvaguarda de Sabedoria (CD 8 + PB + mod Destreza) ou ficará Amedrontada por você até o final do seu próximo turno.</p>`
            : `<p>At 9th level, when you hit with Sneak Attack, the target must succeed on a Wisdom save (DC 8 + PB + Dex mod) or have the Frightened condition until the end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Herdeiro dos Três) 9" : "Rogue (Scion of the Three) 9"
      }
    },
    {
      _id: "uascionaura00001",
      name: isPt ? "Aura de Malevolência" : "Aura of Malevolence",
      type: "feat",
      img: "icons/magic/unholy/silhouette-evil-horns-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, você emana uma aura de 3m de puro terror. Inimigos dentro da aura têm Desvantagem em salvaguardas contra a condição Amedrontado, e você e seus aliados ganham resistência a dano Necrótico.</p>`
            : `<p>At 13th level, you emanate a 10-ft aura of chilling dread. Enemies in your aura have Disadvantage on saves against fear, and you and allies gain resistance to Necrotic damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Herdeiro dos Três) 13" : "Rogue (Scion of the Three) 13"
      }
    },
    {
      _id: "uasciondread0001",
      name: isPt ? "Encarnação do Pavor" : "Dread Incarnate",
      type: "feat",
      img: "icons/magic/death/avatar-reaper-scythe-black.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, uma vez por Descanso Longo, você manifesta o poder pleno dos Três Mortos por 1 minuto: ganha resistência a todo dano exceto radiante, maximiza seu dano de Ataque Furtivo no primeiro acerto de cada turno, e inimigos amedrontados sofrem 4d6 de dano necrótico no início de cada turno deles.</p>`
            : `<p>At 17th level, once per Long Rest, you channel the dark mantle of the Dead Three for 1 minute: gain resistance to all damage except radiant, maximize Sneak Attack damage on your first hit each turn, and frightened enemies take 4d6 necrotic damage at start of their turns.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Herdeiro dos Três) 17" : "Rogue (Scion of the Three) 17"
      }
    },

    // 7. SORCERER: Spellfire Sorcery
    {
      _id: "uaspellfirebrst1",
      name: isPt ? "Explosão de Fogo Mágico" : "Spellfire Burst",
      type: "feat",
      img: "icons/magic/fire/beam-jet-stream-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você canaliza a magia pura de Faerûn. Quando conjura uma magia que causa dano de Fogo ou Radiante, você pode gastar 1 Ponto de Feitiçaria para fazer o dano ignorar resistências e forçar criaturas atingidas a fazerem uma salvaguarda de Constituição ou ficarem Cegas até o início do seu próximo turno.</p>`
            : `<p>At 3rd level, you channel the raw silver flame of magic. When you cast a spell that deals Fire or Radiant damage, you can spend 1 Sorcery Point to ignore resistance and force targets to make a Con save or be Blinded until the start of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria do Fogo Mágico) 3" : "Sorcerer (Spellfire Sorcery) 3"
      }
    },
    {
      _id: "uaspellfiresp001",
      name: isPt ? "Magias de Fogo Mágico" : "Spellfire Spells",
      type: "feat",
      img: "icons/magic/fire/flame-burning-hand-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Mãos Flamejantes (Burning Hands)</em>, <em>Raio Guiador (Guiding Bolt)</em>, <em>Raio Ardente (Scorching Ray)</em>, <em>Restauração Menor (Lesser Restoration)</em></li>
                 <li><strong>5º Nível:</strong> <em>Luz do Dia (Daylight)</em>, <em>Bola de Fogo (Fireball)</em></li>
                 <li><strong>7º Nível:</strong> <em>Escudo de Fogo (Fire Shield)</em>, <em>Muralha de Fogo (Wall of Fire)</em></li>
                 <li><strong>9º Nível:</strong> <em>Coluna de Chamas (Flame Strike)</em>, <em>Alvorecer (Dawn)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Sorcerer levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Burning Hands</em>, <em>Guiding Bolt</em>, <em>Scorching Ray</em>, <em>Lesser Restoration</em></li>
                 <li><strong>Level 5:</strong> <em>Daylight</em>, <em>Fireball</em></li>
                 <li><strong>Level 7:</strong> <em>Fire Shield</em>, <em>Wall of Fire</em></li>
                 <li><strong>Level 9:</strong> <em>Flame Strike</em>, <em>Dawn</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria do Fogo Mágico) 3" : "Sorcerer (Spellfire Sorcery) 3"
      }
    },
    {
      _id: "uaspellfireabs01",
      name: isPt ? "Absorver Magias" : "Absorb Spells",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-diamond-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, como uma Reação quando for alvo de uma magia ou estiver na área de efeito de uma magia, você pode gastar 1 Ponto de Feitiçaria para ganhar Vantagem na salvaguarda contra a magia. Se tiver sucesso, você recupera Pontos de Feitiçaria iguais ao círculo da magia absorvida (mínimo 1).</p>`
            : `<p>At 6th level, as a Reaction when targeted by a spell or inside a spell's area of effect, you can spend 1 Sorcery Point to gain Advantage on the saving throw. If you succeed, you regain Sorcery Points equal to the spell's level (minimum 1).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria do Fogo Mágico) 6" : "Sorcerer (Spellfire Sorcery) 6"
      }
    },
    {
      _id: "uaspellfirehn001",
      name: isPt ? "Fogo Mágico Lapidado" : "Honed Spellfire",
      type: "feat",
      img: "icons/magic/life/cross-healing-green-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode canalizar o Fogo Mágico para curar aliados. Com uma Ação, você pode gastar até o seu modificador de Carisma em Pontos de Feitiçaria para curar uma criatura a até 9m: 1d10 de cura por Ponto de Feitiçaria gasto.</p>`
            : `<p>At 14th level, you can direct spellfire to heal allies. As an Action, you can spend up to your Cha modifier in Sorcery Points to heal a creature within 30 ft: 1d10 HP per Sorcery Point spent.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria do Fogo Mágico) 14" : "Sorcerer (Spellfire Sorcery) 14"
      }
    },
    {
      _id: "uaspellfirecrw01",
      name: isPt ? "Coroa de Fogo Mágico" : "Crown of Spellfire",
      type: "feat",
      img: "icons/magic/fire/crown-flame-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, com uma Ação Bônus e gastando 5 Pontos de Feitiçaria, você acende a lendária Coroa de Fogo Mágico por 1 minuto: ganha voo de 18m (planar), imunidade a dano de Fogo e Radiante, e todas as suas magias causam dano bônus igual ao seu modificador de Carisma.</p>`
            : `<p>At 18th level, as a Bonus Action by spending 5 Sorcery Points, you ignite the Crown of Spellfire for 1 minute: gain flying speed 60 ft (hover), immunity to Fire and Radiant damage, and all your spells deal bonus damage equal to your Cha modifier.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria do Fogo Mágico) 18" : "Sorcerer (Spellfire Sorcery) 18"
      }
    },

    // 8. WIZARD: Bladesinger
    {
      _id: "uabladesong00001",
      name: isPt ? "Canção da Lâmina" : "Bladesong",
      type: "feat",
      img: "icons/skills/melee/sword-twirl-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a invocar a tradição élfica da Canção da Lâmina. Como Ação Bônus (usos iguais ao seu Bônus de Proficiência por Descanso Longo), você ativa a Canção da Lâmina por 1 minuto, recebendo:</p>
               <ul>
                 <li>Bônus na Classe de Armadura igual ao seu modificador de Inteligência (mínimo +1).</li>
                 <li>Deslocamento de caminhada aumentado em 3m.</li>
                 <li>Vantagem em testes de Destreza (Acrobacia).</li>
                 <li>Bônus em salvaguardas de Constituição para manter concentração igual ao seu modificador de Inteligência (mínimo +1).</li>
               </ul>`
            : `<p>At 3rd level, you invoke the elven art of the Bladesong. As a Bonus Action (uses = Proficiency Bonus per Long Rest), you start the Bladesong for 1 minute, gaining:</p>
               <ul>
                 <li>Bonus to AC equal to your Intelligence modifier (minimum +1).</li>
                 <li>Walking speed increases by 10 ft.</li>
                 <li>Advantage on Dexterity (Acrobatics) checks.</li>
                 <li>Bonus to Constitution saves to maintain concentration equal to your Int modifier (minimum +1).</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Mago (Cantor da Lâmina) 3" : "Wizard (Bladesinger) 3"
      }
    },
    {
      _id: "uabladeswarsong1",
      name: isPt ? "Treinamento de Guerra e Canção" : "Training in War and Song",
      type: "feat",
      img: "icons/weapons/swords/sword-rapier-dueling.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência em Armaduras Leves, em uma arma corpo a corpo de uma mão à sua escolha, e na perícia Atuação.</p>`
            : `<p>At 3rd level, you gain proficiency with Light Armor, one one-handed melee weapon of your choice, and the Performance skill.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Mago (Cantor da Lâmina) 3" : "Wizard (Bladesinger) 3"
      }
    },
    {
      _id: "uabladesextraat1",
      name: isPt ? "Ataque Extra (Cantor da Lâmina)" : "Extra Attack (Bladesinger)",
      type: "feat",
      img: "icons/skills/melee/strike-blade-slashing-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode atacar duas vezes em vez de uma sempre que realizar a ação de Ataque no seu turno. Além disso, você pode conjurar um dos seus truques no lugar de um desses ataques.</p>`
            : `<p>At 6th level, you can attack twice instead of once whenever you take the Attack action on your turn. Moreover, you can cast one of your cantrips in place of one of those attacks.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Mago (Cantor da Lâmina) 6" : "Wizard (Bladesinger) 6"
      }
    },
    {
      _id: "uabladessongdef1",
      name: isPt ? "Canção de Defesa" : "Song of Defense",
      type: "feat",
      img: "icons/magic/defensive/barrier-shield-dome-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, enquanto sua Canção da Lâmina estiver ativa e você sofrer dano, você pode usar sua reação para gastar um espaço de magia e reduzir aquele dano em um valor igual a 5 vezes o círculo do espaço gasto.</p>`
            : `<p>At 10th level, while your Bladesong is active and you take damage, you can use your reaction to expend one spell slot and reduce that damage by five times the slot's level.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Mago (Cantor da Lâmina) 10" : "Wizard (Bladesinger) 10"
      }
    },
    {
      _id: "uabladessongvic1",
      name: isPt ? "Canção de Vitória" : "Song of Victory",
      type: "feat",
      img: "icons/skills/melee/sword-blade-shining-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, enquanto sua Canção da Lâmina estiver ativa, você pode adicionar seu modificador de Inteligência (mínimo de +1) ao dano de seus ataques com armas corpo a corpo.</p>`
            : `<p>At 14th level, while your Bladesong is active, you can add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Forgotten Realms Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Mago (Cantor da Lâmina) 14" : "Wizard (Bladesinger) 14"
      }
    },

    // =========================================================
    // APOCALYPTIC SUBCLASSES (UA2025-ApocalypticSubclasses.pdf)
    // =========================================================

    // 9. DRUID: Circle of Preservation
    {
      _id: "uapreservspells1",
      name: isPt ? "Magias do Círculo da Preservação" : "Circle of Preservation Spells",
      type: "feat",
      img: "icons/magic/nature/sprout-tree-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Baga Boa (Goodberry)</em>, <em>Purificar Alimentos (Purify Food and Drink)</em>, <em>Pele de Árvore (Barkskin)</em>, <em>Restauração Menor (Lesser Restoration)</em></li>
                 <li><strong>5º Nível:</strong> <em>Criar Comida e Água (Create Food and Water)</em>, <em>Crescimento de Plantas (Plant Growth)</em></li>
                 <li><strong>7º Nível:</strong> <em>Aura de Vida (Aura of Life)</em>, <em>Proteção contra a Morte (Death Ward)</em></li>
                 <li><strong>9º Nível:</strong> <em>Restauração Maior (Greater Restoration)</em>, <em>Reencarnação (Reincarnate)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Druid levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Goodberry</em>, <em>Purify Food and Drink</em>, <em>Barkskin</em>, <em>Lesser Restoration</em></li>
                 <li><strong>Level 5:</strong> <em>Create Food and Water</em>, <em>Plant Growth</em></li>
                 <li><strong>Level 7:</strong> <em>Aura of Life</em>, <em>Death Ward</em></li>
                 <li><strong>Level 9:</strong> <em>Greater Restoration</em>, <em>Reincarnate</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 3" : "Druid (Circle of Preservation) 3"
      }
    },
    {
      _id: "uapreservland001",
      name: isPt ? "Terra Preservada" : "Preserved Land",
      type: "feat",
      img: "icons/magic/nature/oasis-desert-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, gastando um uso de Forma Selvagem, você santifica uma área de 6m de raio centrada em você por 1 minuto. Aliados na área ganham resistência a dano necrótico e recuperam Pontos de Vida adicionais iguais ao seu modificador de Sabedoria sempre que receberem cura mágica.</p>`
            : `<p>At 3rd level, by expending a use of Wild Shape, you sanctify a 20-ft radius area centered on you for 1 minute. Allies inside gain resistance to Necrotic damage and regain extra HP equal to your Wis modifier whenever healed.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 3" : "Druid (Circle of Preservation) 3"
      }
    },
    {
      _id: "uapreservstud001",
      name: isPt ? "Estudioso da Preservação" : "Student of Preservation",
      type: "feat",
      img: "icons/tools/herbalism/herbalism-pouch-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência em Medicina e com o Kit de Herbalismo. Além disso, tem Vantagem em testes para obter alimentos ou água pura em desertos ou terras devastadas.</p>`
            : `<p>At 3rd level, you gain proficiency in Medicine and Herbalism Kit, and have Advantage on checks to forage food or pure water in wastelands.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 3" : "Druid (Circle of Preservation) 3"
      }
    },
    {
      _id: "uapreservimp0001",
      name: isPt ? "Preservação Aprimorada" : "Improved Preservation",
      type: "feat",
      img: "icons/magic/nature/sun-radiance-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, aliados dentro de sua Terra Preservada adicionam 1d4 a todas as salvaguardas. Inimigos que entrem na área ou iniciem o turno nela sofrem dano Radiante igual ao seu modificador de Sabedoria.</p>`
            : `<p>At 6th level, allies within your Preserved Land add 1d4 to all saving throws. Enemies entering or starting their turn in the area take Radiant damage equal to your Wis modifier.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 6" : "Druid (Circle of Preservation) 6"
      }
    },
    {
      _id: "uapreservfacil01",
      name: isPt ? "Restauração Facilitada" : "Facilitated Restoration",
      type: "feat",
      img: "icons/magic/life/cross-sparkle-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você pode conjurar <em>Restauração Menor</em> como Ação Bônus sem gastar espaço de magia um número de vezes igual ao seu modificador de Sabedoria por Descanso Longo.</p>`
            : `<p>At 10th level, you can cast <em>Lesser Restoration</em> as a Bonus Action without expending a spell slot a number of times equal to your Wis modifier per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 10" : "Druid (Circle of Preservation) 10"
      }
    },
    {
      _id: "uapreservsacro01",
      name: isPt ? "Terra Sacrossanta" : "Sacrosanct Land",
      type: "feat",
      img: "icons/magic/nature/tree-roots-glow-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, o raio de sua Terra Preservada se expande para 9m. Quando um aliado dentro da área for reduzido a 0 PV, ele cai para 1 PV em vez disso (uma vez por criatura por descanso).</p>`
            : `<p>At 14th level, your Preserved Land expands to 30 ft radius. When an ally in the area is reduced to 0 HP, it drops to 1 HP instead (once per creature per rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Druida (Círculo da Preservação) 14" : "Druid (Circle of Preservation) 14"
      }
    },

    // 10. FIGHTER: Gladiator
    {
      _id: "uagladiatbrut001",
      name: isPt ? "Brutalidade" : "Brutality",
      type: "feat",
      img: "icons/skills/melee/unarmed-punch-fist-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a entreter multidões com violência devastadora. Você ganha 3 dados de Brutalidade (d6s, tornando-se d8s no nv 10 e d10s no nv 18). Você pode gastar um dado em ataques com arma para aumentar o dano, derrubar o alvo no chão, desarmá-lo ou forçá-lo a atacar com desvantagem.</p>`
            : `<p>At 3rd level, you learn crowd-pleasing brutality. You gain 3 Brutality dice (d6s, becoming d8s at 10th and d10s at 18th). You can spend a Brutality die on weapon attacks to add to damage, knock prone, disarm, or impose disadvantage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 3" : "Fighter (Gladiator) 3"
      }
    },
    {
      _id: "uagladiattheat01",
      name: isPt ? "Teatralidade de Combate" : "Combat Theatrics",
      type: "feat",
      img: "icons/skills/social/intimidation-mask-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência nas perícias Atuação e Atletismo. Você pode usar seu modificador de Carisma no lugar de Destreza em testes de Iniciativa.</p>`
            : `<p>At 3rd level, you gain proficiency in Performance and Athletics. You can add your Cha modifier to Initiative rolls instead of Dex.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 3" : "Fighter (Gladiator) 3"
      }
    },
    {
      _id: "uagladiatparry01",
      name: isPt ? "Aparo Florescente" : "Flourish Parry",
      type: "feat",
      img: "icons/skills/melee/shield-block-parry-sparks.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, como uma Reação quando atingido por um ataque corpo a corpo, você pode gastar 1 dado de Brutalidade, rolá-lo, adicionar seu Bônus de Proficiência e reduzir o dano recebido. Se o dano for reduzido a 0, você pode fazer um ataque corpo a corpo imediato contra o agressor.</p>`
            : `<p>At 7th level, as a Reaction when hit by a melee attack, spend 1 Brutality die, roll it, add your PB, and reduce the incoming damage. If reduced to 0, make an immediate melee attack against the attacker.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 7" : "Fighter (Gladiator) 7"
      }
    },
    {
      _id: "uagladiatbold001",
      name: isPt ? "Brutalidades Mais Ousadas" : "Bolder Brutalities",
      type: "feat",
      img: "icons/skills/melee/weapons-crossed-swords-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, seus dados de Brutalidade se tornam d8s. Sempre que você usar <em>Retomar o Fôlego</em>, você recupera 1 dado de Brutalidade gasto.</p>`
            : `<p>At 10th level, your Brutality dice become d8s. Whenever you use <em>Second Wind</em>, you regain 1 expended Brutality die.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 10" : "Fighter (Gladiator) 10"
      }
    },
    {
      _id: "uagladiatresurg1",
      name: isPt ? "Ressurgência Brutal" : "Brutal Resurgence",
      type: "feat",
      img: "icons/skills/wounds/blood-drip-fist.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, quando rolar iniciativa e não tiver dados de Brutalidade restantes, você recupera instantaneamente 2 dados de Brutalidade.</p>`
            : `<p>At 15th level, when you roll initiative and have no Brutality dice remaining, you immediately regain 2 Brutality dice.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 15" : "Fighter (Gladiator) 15"
      }
    },
    {
      _id: "uagladiatmutil01",
      name: isPt ? "Mutilar" : "Mutilate",
      type: "feat",
      img: "icons/skills/melee/cleave-axe-blood-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, seus dados de Brutalidade se tornam d10s. Quando você acerta um Acerto Crítico, você não gasta o dado de Brutalidade utilizado e o alvo tem seu deslocamento reduzido pela metade até receber cura mágica.</p>`
            : `<p>At 18th level, your Brutality dice become d10s. On a Critical Hit, you do not expend the Brutality die used, and the target's speed is halved until it receives magical healing.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro (Gladiador) 18" : "Fighter (Gladiator) 18"
      }
    },

    // 11. SORCERER: Defiled Sorcery
    {
      _id: "uadefileempow001",
      name: isPt ? "Profanar e Fortalecer" : "Defile and Empower",
      type: "feat",
      img: "icons/magic/unholy/wither-decay-hand-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao conjurar uma magia de 1º círculo ou superior, você drena a vitalidade do solo em uma emanação de 3m. A vegetação seca e criaturas não-mortas-vivas e não-construtos sofrem dano Necrótico igual ao círculo da magia. Você recebe +1 na jogada de ataque e na CD da magia conjurada.</p>`
            : `<p>At 3rd level, when casting a spell of 1st level or higher, you wither the life in a 10-ft emanation. Vegetation dies, and living creatures take Necrotic damage equal to the spell's level. You gain +1 to spell attack rolls and spell save DC for that casting.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria Profanada) 3" : "Sorcerer (Defiled Sorcery) 3"
      }
    },
    {
      _id: "uadefilespells01",
      name: isPt ? "Magias Profanadoras" : "Defiler Spells",
      type: "feat",
      img: "icons/magic/death/skull-poison-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Infligir Ferimentos (Inflict Wounds)</em>, <em>Raio de Enjoo (Ray of Sickness)</em>, <em>Cegueira/Surdez (Blindness/Deafness)</em>, <em>Raio do Enfraquecimento (Ray of Enfeeblement)</em></li>
                 <li><strong>5º Nível:</strong> <em>Animar Mortos (Animate Dead)</em>, <em>Toque Vampírico (Vampiric Touch)</em></li>
                 <li><strong>7º Nível:</strong> <em>Definhar (Blight)</em>, <em>Sombra de Moil (Shadow of Moil)</em></li>
                 <li><strong>9º Nível:</strong> <em>Névoa Mortal (Cloudkill)</em>, <em>Contágio (Contagion)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Sorcerer levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Inflict Wounds</em>, <em>Ray of Sickness</em>, <em>Blindness/Deafness</em>, <em>Ray of Enfeeblement</em></li>
                 <li><strong>Level 5:</strong> <em>Animate Dead</em>, <em>Vampiric Touch</em></li>
                 <li><strong>Level 7:</strong> <em>Blight</em>, <em>Shadow of Moil</em></li>
                 <li><strong>Level 9:</strong> <em>Cloudkill</em>, <em>Contagion</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria Profanada) 3" : "Sorcerer (Defiled Sorcery) 3"
      }
    },
    {
      _id: "uadefilecorrupt1",
      name: isPt ? "Conjurador Corrompido" : "Corrupted Caster",
      type: "feat",
      img: "icons/magic/death/undead-zombie-glowing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você se torna resistente a dano Necrótico e de Veneno, e ganha imunidade à condição Envenenado.</p>`
            : `<p>At 6th level, you gain resistance to Necrotic and Poison damage, and immunity to the Poisoned condition.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria Profanada) 6" : "Sorcerer (Defiled Sorcery) 6"
      }
    },
    {
      _id: "uadefileaura0001",
      name: isPt ? "Aura Agonizante" : "Withering Aura",
      type: "feat",
      img: "icons/magic/unholy/miasma-plague-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você projeta uma aura de 4,5m de decadência: inimigos dentro dela têm Desvantagem em testes de resistência de Constituição. Sempre que um inimigo morre dentro da sua aura, você recupera 1 Ponto de Feitiçaria.</p>`
            : `<p>At 14th level, you project a 15-ft aura of decay: enemies inside have Disadvantage on Constitution saving throws. When an enemy dies in your aura, you regain 1 Sorcery Point.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria Profanada) 14" : "Sorcerer (Defiled Sorcery) 14"
      }
    },
    {
      _id: "uadefilesuper001",
      name: isPt ? "Profanador Superior" : "Superior Defiler",
      type: "feat",
      img: "icons/magic/death/skull-energy-cloud-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, sua Aura Agonizante expande para 9m e impede inimigos dentro dela de recuperarem Pontos de Vida. Além disso, gastando 4 Pontos de Feitiçaria, você pode desintegrar toda a flora em 18m causando 6d10 de dano necrótico em inimigos na área (salvaguarda de Con reduz pela metade).</p>`
            : `<p>At 18th level, your Withering Aura expands to 30 ft and prevents enemies inside from regaining Hit Points. Spending 4 Sorcery Points allows you to incinerate terrain in 60 ft, dealing 6d10 necrotic damage to all enemies in the area (Con save half).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feiticeiro (Feitiçaria Profanada) 18" : "Sorcerer (Defiled Sorcery) 18"
      }
    },

    // 12. WARLOCK: Sorcerer-King Patron
    {
      _id: "uasorckspells001",
      name: isPt ? "Magias do Rei-Feiticeiro" : "Sorcerer-King Spells",
      type: "feat",
      img: "icons/magic/control/control-influence-crown-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Comando (Command)</em>, <em>Duelo Compelido (Compelled Duel)</em>, <em>Imobilizar Pessoa (Hold Person)</em>, <em>Espinho Mental (Mind Spike)</em>, <em>Golpe Furioso (Wrathful Smite)</em></li>
                 <li><strong>5º Nível:</strong> <em>Medo (Fear)</em>, <em>Envio (Sending)</em></li>
                 <li><strong>7º Nível:</strong> <em>Compulsão (Compulsion)</em>, <em>Golpe Estonteante (Staggering Smite)</em></li>
                 <li><strong>9º Nível:</strong> <em>Dominar Pessoa (Dominate Person)</em>, <em>Estática Sináptica (Synaptic Static)</em></li>
               </ul>
               <p><strong>Conjuração Psiônica:</strong> Você pode conjurar estas magias sem componentes Verbais ou Materiais (exceto se consumidos ou com custo monetário).</p>`
            : `<p>You always have the following spells prepared at the specified Warlock levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Command</em>, <em>Compelled Duel</em>, <em>Hold Person</em>, <em>Mind Spike</em>, <em>Wrathful Smite</em></li>
                 <li><strong>Level 5:</strong> <em>Fear</em>, <em>Sending</em></li>
                 <li><strong>Level 7:</strong> <em>Compulsion</em>, <em>Staggering Smite</em></li>
                 <li><strong>Level 9:</strong> <em>Dominate Person</em>, <em>Synaptic Static</em></li>
               </ul>
               <p><strong>Psionic Casting:</strong> You can cast these spells without Verbal or Material components (unless consumed or with monetary cost).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Rei-Feiticeiro) 3" : "Warlock (Sorcerer-King Patron) 3"
      }
    },
    {
      _id: "uasorckherald001",
      name: isPt ? "Arauto do Tirano" : "Tyrant's Herald",
      type: "feat",
      img: "icons/skills/social/intimidation-shouting-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência e Especialização na perícia Intimidação. Além disso, você pode conjurar <em>Comando (Command)</em> como uma Ação Bônus sem gastar espaço de magia um número de vezes igual ao seu modificador de Carisma por Descanso Longo.</p>`
            : `<p>At 3rd level, you gain proficiency and Expertise in Intimidation. Additionally, you can cast <em>Command</em> as a Bonus Action without expending a spell slot a number of times equal to your Cha modifier per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Rei-Feiticeiro) 3" : "Warlock (Sorcerer-King Patron) 3"
      }
    },
    {
      _id: "uasorckedict0001",
      name: isPt ? "Édito Decisivo" : "Decisive Edict",
      type: "feat",
      img: "icons/magic/control/command-speech-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, quando conjura uma magia usando um espaço de Magia de Pacto, você libera uma emanação de 9m centrada em você. Para cada criatura visível na área, escolha:</p>
               <ul>
                 <li><strong>Comandar:</strong> Aliado ganha Vantagem em jogadas de ataque até o fim do próximo turno dele.</li>
                 <li><strong>Oprimir:</strong> Inimigo deve passar em salvaguarda de Sabedoria ou ficará Amedrontado até o fim do próximo turno dele.</li>
               </ul>
               <p>Recarrega com Descanso Curto ou Longo, ou ao usar Astúcia Mágica.</p>`
            : `<p>At 6th level, when casting a spell using a Pact Magic slot, emit a 30-ft emanation. For each creature inside, choose:</p>
               <ul>
                 <li><strong>Marshal:</strong> Ally gains Advantage on attack rolls until the end of its next turn.</li>
                 <li><strong>Oppress:</strong> Enemy must pass a Wis save or be Frightened until the end of its next turn.</li>
               </ul>
               <p>Recharges on Short/Long Rest, or upon using Magical Cunning.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Rei-Feiticeiro) 6" : "Warlock (Sorcerer-King Patron) 6"
      }
    },
    {
      _id: "uasorckrebuke001",
      name: isPt ? "Reprimenda Vingativa" : "Vindictive Rebuke",
      type: "feat",
      img: "icons/magic/perception/mind-flaying-energy-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, como uma Reação quando um inimigo acerta um ataque em você, você força o inimigo a rolar novamente o d20 e usar o novo resultado. Se o ataque errar, o agressor sofre dano Psíquico igual ao seu nível de Bruxo (usos iguais ao mod de Carisma por Descanso Longo).</p>`
            : `<p>At 10th level, as a Reaction when hit by an attack, force the enemy to reroll the d20 and use the new roll. If the attack misses, the creature takes Psychic damage equal to your Warlock level (uses = Cha mod per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Rei-Feiticeiro) 10" : "Warlock (Sorcerer-King Patron) 10"
      }
    },
    {
      _id: "uasorcktyranny01",
      name: isPt ? "Tirania Absoluta" : "Absolute Tyranny",
      type: "feat",
      img: "icons/magic/control/throne-monarch-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, sempre que conjurar <em>Comando</em>, você pode mirar um alvo adicional dentro do alcance. Além disso, qualquer criatura Amedrontada por você falha automaticamente nas salvaguardas contra suas magias de <em>Comando</em>.</p>`
            : `<p>At 14th level, whenever you cast <em>Command</em>, you can target one additional creature. Furthermore, creatures Frightened by you automatically fail saving throws against your <em>Command</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Apocalyptic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Rei-Feiticeiro) 14" : "Warlock (Sorcerer-King Patron) 14"
      }
    },

    // =========================================================
    // MYSTIC SUBCLASSES (UA2026-MysticSubclasses.pdf)
    // =========================================================

    // 13. MONK: Warrior of the Mystic Arts
    {
      _id: "uamysticspell001",
      name: isPt ? "Conjuração Mística" : "Mystic Spellcasting",
      type: "feat",
      img: "icons/magic/symbols/circle-ouroboros-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a tecer energias místicas através de suas artes marciais. Você aprende truques e magias da lista de Feiticeiro (Abjuração e Evocação), usando Sabedoria como sua habilidade de conjuração e seguindo a progressão de Conjurador Terciário.</p>`
            : `<p>At 3rd level, you channel arcane discipline into martial mastery. You learn cantrips and spells from the Sorcerer spell list (Abjuration and Evocation), using Wisdom as your spellcasting ability with third-caster progression.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Monge (Guerreiro das Artes Místicas) 3" : "Monk (Warrior of the Mystic Arts) 3"
      }
    },
    {
      _id: "uamysticfight001",
      name: isPt ? "Estilo de Luta Místico" : "Mystic Fighting Style",
      type: "feat",
      img: "icons/skills/melee/unarmed-kick-strike-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, quando você usa sua ação para conjurar um truque, você pode desferir um golpe desarmado como Ação Bônus.</p>`
            : `<p>At 6th level, when you use your action to cast a cantrip, you can make one unarmed strike as a Bonus Action.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Monge (Guerreiro das Artes Místicas) 6" : "Monk (Warrior of the Mystic Arts) 6"
      }
    },
    {
      _id: "uamysticfocus001",
      name: isPt ? "Foco Místico" : "Mystic Focus",
      type: "feat",
      img: "icons/magic/symbols/rune-gem-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode gastar 1 Ponto de Foco (Ki) para conjurar uma magia de 1º círculo preparada sem gastar espaço de magia, ou para infundir seus golpes desarmados com 1d8 de dano elemental por 1 minuto.</p>`
            : `<p>At 6th level, you can spend 1 Focus Point (Ki) to cast a prepared 1st-level spell without expending a spell slot, or empower your unarmed strikes with 1d8 elemental damage for 1 minute.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Monge (Guerreiro das Artes Místicas) 6" : "Monk (Warrior of the Mystic Arts) 6"
      }
    },
    {
      _id: "uamysticcenter01",
      name: isPt ? "Foco Centrado" : "Centered Focus",
      type: "feat",
      img: "icons/magic/perception/meditation-aura-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, sempre que fizer uma salvaguarda de Constituição para manter a concentração em uma magia, você pode gastar 1 Ponto de Foco para ter sucesso automático.</p>`
            : `<p>At 11th level, whenever you make a Constitution save to maintain concentration on a spell, you can spend 1 Focus Point to automatically succeed.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Monge (Guerreiro das Artes Místicas) 11" : "Monk (Warrior of the Mystic Arts) 11"
      }
    },
    {
      _id: "uamysticimpfg001",
      name: isPt ? "Estilo Místico Aprimorado" : "Improved Mystic Fighting Style",
      type: "feat",
      img: "icons/skills/melee/unarmed-combo-flurry-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, ao conjurar uma magia de 1º círculo ou superior como Ação, você pode desferir dois golpes desarmados com sua Ação Bônus, ou gastar 2 Pontos de Foco para conjurar a magia como Ação Bônus em vez de Ação.</p>`
            : `<p>At 17th level, when you cast a spell of 1st level or higher as an Action, you can make two unarmed strikes as a Bonus Action, or spend 2 Focus Points to cast the spell as a Bonus Action.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Monge (Guerreiro das Artes Místicas) 17" : "Monk (Warrior of the Mystic Arts) 17"
      }
    },

    // 14. PALADIN: Oath of the Spellguard
    {
      _id: "uaspellgbond0001",
      name: isPt ? "Vínculo Guardião" : "Guardian Bond",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-chain-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, com uma Ação, você cria um elo místico protetor com um aliado a até 9m. Quando aquele aliado sofrer dano, você pode usar sua Reação para absorver metade daquele dano, sofrendo-o você mesmo.</p>`
            : `<p>At 3rd level, as an Action, forge a protective bond with an ally within 30 ft. When that ally takes damage, you can use your Reaction to absorb half that damage yourself.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 3" : "Paladin (Oath of the Spellguard) 3"
      }
    },
    {
      _id: "uaspellgstrike01",
      name: isPt ? "Golpe Guarda-Feitiço" : "Spellguard Strike",
      type: "feat",
      img: "icons/weapons/swords/sword-broad-glowing-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando atinge uma criatura concentrando-se em uma magia com um ataque corpo a corpo, o alvo tem Desvantagem na salvaguarda de concentração. Se falhar e perder a concentração, ele sofre dano de Força adicional igual ao seu nível de Paladino.</p>`
            : `<p>At 3rd level, when you hit a concentrating creature with a melee attack, it has Disadvantage on the concentration check. If it loses concentration, it takes extra Force damage equal to your Paladin level.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 3" : "Paladin (Oath of the Spellguard) 3"
      }
    },
    {
      _id: "uaspellgspells01",
      name: isPt ? "Magias do Juramento da Guarda de Feitiços" : "Oath of the Spellguard Spells",
      type: "feat",
      img: "icons/magic/symbols/shield-runes-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Detectar Magia (Detect Magic)</em>, <em>Escudo Arcano (Shield)</em>, <em>Passo Sombrio (Misty Step)</em>, <em>Silêncio (Silence)</em></li>
                 <li><strong>5º Nível:</strong> <em>Contramágica (Counterspell)</em>, <em>Dissipar Magia (Dispel Magic)</em></li>
                 <li><strong>9º Nível:</strong> <em>Banimento (Banishment)</em>, <em>Esfera Resiliente (Otiluke's Resilient Sphere)</em></li>
                 <li><strong>13º Nível:</strong> <em>Círculo de Poder (Circle of Power)</em>, <em>Dissipar o Bem e Mal (Dispel Evil and Good)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Paladin levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Detect Magic</em>, <em>Shield</em>, <em>Misty Step</em>, <em>Silence</em></li>
                 <li><strong>Level 5:</strong> <em>Counterspell</em>, <em>Dispel Magic</em></li>
                 <li><strong>Level 9:</strong> <em>Banishment</em>, <em>Otiluke's Resilient Sphere</em></li>
                 <li><strong>Level 13:</strong> <em>Circle of Power</em>, <em>Dispel Evil and Good</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 3" : "Paladin (Oath of the Spellguard) 3"
      }
    },
    {
      _id: "uaspellgaura0001",
      name: isPt ? "Aura de Concentração" : "Aura of Concentration",
      type: "feat",
      img: "icons/magic/defensive/barrier-shield-dome-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, você emana uma aura de 3m: você e seus aliados na aura têm Vantagem em testes para manter concentração em magias e ganham resistência a dano causado por magias. No 18º nível, a aura expande para 9m.</p>`
            : `<p>At 7th level, you emanate a 10-ft aura: you and allies in the aura have Advantage on saves to maintain concentration on spells and gain resistance to spell damage. Expands to 30 ft at 18th level.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 7" : "Paladin (Oath of the Spellguard) 7"
      }
    },
    {
      _id: "uaspellgblade001",
      name: isPt ? "Lâmina Destruidora de Magia" : "Spell-Breaking Blade",
      type: "feat",
      img: "icons/weapons/swords/sword-runic-energy-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, quando atinge uma criatura com um ataque de arma, você pode conjurar <em>Dissipar Magia</em> no alvo como parte do mesmo ataque sem gastar espaço de magia (usos iguais ao mod de Carisma por Descanso Longo).</p>`
            : `<p>At 15th level, when you hit a creature with a weapon attack, you can cast <em>Dispel Magic</em> on the target as part of the attack without expending a spell slot (uses = Cha mod per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 15" : "Paladin (Oath of the Spellguard) 15"
      }
    },
    {
      _id: "uaspellgetern001",
      name: isPt ? "Guarda-Feitiços Eterno" : "Eternal Spellguard",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-wings-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 20º nível, com uma Ação Bônus, você manifesta a égide lendária da Guarda de Feitiços por 1 minuto: ganha imunidade a magias de 1º a 3º círculo, vantagem em todas as salvaguardas contra magias, e sempre que uma magia hostil falhar em afetá-lo, o conjurador sofre 3d10 de dano de Força.</p>`
            : `<p>At 20th level, as a Bonus Action, manifest the supreme aegis of the Spellguard for 1 minute: immunity to spells of 1st-3rd level, advantage on all saves against spells, and whenever a spell fails to affect you, the caster takes 3d10 Force damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Paladino (Juramento da Guarda de Feitiços) 20" : "Paladin (Oath of the Spellguard) 20"
      }
    },

    // 15. ROGUE: Magic Stealer
    {
      _id: "uastealdrain0001",
      name: isPt ? "Drenar Magia" : "Drain Magic",
      type: "feat",
      img: "icons/magic/symbols/rune-hand-grasp-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando acerta um Ataque Furtivo em uma criatura que conjura magias ou toca um objeto mágico, você pode drenar resíduos arcanos para obter uma Carga Mágica Roubada (máximo igual ao seu Bônus de Proficiência). Você pode gastar cargas para conjurar <em>Detectar Magia</em> ou <em>Dissipar Magia</em>.</p>`
            : `<p>At 3rd level, when you hit with Sneak Attack against a spellcaster or touch a magical object, siphon residual energy into a Stolen Magic Charge (max = Proficiency Bonus). Spend charges to cast <em>Detect Magic</em> or <em>Dispel Magic</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 3" : "Rogue (Magic Stealer) 3"
      }
    },
    {
      _id: "uastealempow0001",
      name: isPt ? "Empoderar Ataque Furtivo" : "Empower Sneak Attack",
      type: "feat",
      img: "icons/weapons/daggers/dagger-crystal-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando causar Ataque Furtivo, você pode gastar 1 Carga Mágica Roubada para converter todo o dano do ataque em dano de Força e adicionar +1d6 ao dano total.</p>`
            : `<p>At 3rd level, when you deal Sneak Attack damage, spend 1 Stolen Magic Charge to convert all damage to Force damage and add +1d6 damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 3" : "Rogue (Magic Stealer) 3"
      }
    },
    {
      _id: "uastealsabot0001",
      name: isPt ? "Sabotagem Mágica" : "Magical Sabotage",
      type: "feat",
      img: "icons/tools/traps/trap-disarm-wires-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, você pode usar sua Ação Ardilosa para desarmar armadilhas mágicas ou desmantelar efeitos mágicos contínuos em objetos e criaturas a até 9m usando ferramentas de ladrão e Arcanismo.</p>`
            : `<p>At 9th level, you can use Cunning Action to disarm magical glyphs, wards, or continuous magical effects within 30 ft using thieves' tools and Arcana.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 9" : "Rogue (Magic Stealer) 9"
      }
    },
    {
      _id: "uastealshroud001",
      name: isPt ? "Manto Oculto" : "Occult Shroud",
      type: "feat",
      img: "icons/magic/defensive/illusion-evasion-cloak-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, quando usar sua <em>Esquiva Sobrenatural (Uncanny Dodge)</em> contra dano de magia, você pode gastar 1 Carga Mágica Roubada para ficar Invisível até o final do seu próximo turno.</p>`
            : `<p>At 13th level, when using <em>Uncanny Dodge</em> against damage from a spell or magical effect, you can spend 1 Stolen Magic Charge to become Invisible until the end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 13" : "Rogue (Magic Stealer) 13"
      }
    },
    {
      _id: "uastealimpdr0001",
      name: isPt ? "Drenar Magia Aprimorado" : "Improved Drain Magic",
      type: "feat",
      img: "icons/magic/symbols/rune-hand-grasp-lightning.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, seu limite de Cargas Mágicas Roubadas aumenta para seu Bônus de Proficiência + 2. Como uma Reação quando uma criatura a até 9m conjurar uma magia, você pode fazer um ataque à distância com arma: se acertar, você drena a magia, cancelando-a se for de 1º ou 2º círculo, ou forçando uma salvaguarda com desvantagem.</p>`
            : `<p>At 13th level, your max Stolen Magic Charges increases to PB + 2. As a Reaction when a creature within 30 ft casts a spell, make a ranged weapon attack: if it hits, siphon the spell, negating it if 1st-2nd level, or imposing disadvantage on its concentration.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 13" : "Rogue (Magic Stealer) 13"
      }
    },
    {
      _id: "uastealimplosion",
      name: isPt ? "Implosão Mística" : "Eldritch Implosion",
      type: "feat",
      img: "icons/magic/sonic/explosion-shock-wave-violet.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, com uma Ação, você gasta 3 Cargas Mágicas Roubadas para detonar uma onda de vácuo arcano em uma esfera de 6m de raio a até 18m. Inimigos na área sofrem 10d10 de dano de Força (salvaguarda de Destreza reduz à metade) e todas as magias ativas de 5º círculo ou inferior na área são dissipadas.</p>`
            : `<p>At 17th level, as an Action, spend 3 Stolen Magic Charges to detonate an arcane implosion in a 20-ft radius sphere up to 60 ft away. Enemies take 10d10 Force damage (Dex save half) and all active spells of 5th level or lower in the area are dispelled.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ladino (Ladrão de Magia) 17" : "Rogue (Magic Stealer) 17"
      }
    },

    // 16. WARLOCK: Vestige Patron
    {
      _id: "uavestigcomp0001",
      name: isPt ? "Companheiro Vestígio" : "Vestige Companion",
      type: "feat",
      img: "icons/magic/death/wraith-ghost-spirit-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você vincula a alma espectral de uma entidade esquecida. Ela se manifesta como um companheiro etéreo que age no seu turno, ataca com seu modificador de ataque de magia, causa dano Psíquico ou de Força e pode voar através de obstáculos.</p>`
            : `<p>At 3rd level, you bind the spectral remnant of a forgotten entity. It manifests as an ephemeral companion that acts on your turn, attacks using your spell attack modifier, deals Psychic or Force damage, and can fly through solid objects.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Vestígio) 3" : "Warlock (Vestige Patron) 3"
      }
    },
    {
      _id: "uavestigspell001",
      name: isPt ? "Magias de Vestígio" : "Vestige Spells",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-spirit-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Heroísmo (Heroism)</em>, <em>Servo Invisível (Unseen Servant)</em>, <em>Invisibilidade (Invisibility)</em>, <em>Arma Espiritual (Spiritual Weapon)</em></li>
                 <li><strong>5º Nível:</strong> <em>Montaria Fantasmagórica (Phantom Steed)</em>, <em>Guardiões Espirituais (Spirit Guardians)</em></li>
                 <li><strong>7º Nível:</strong> <em>Proteção contra a Morte (Death Ward)</em>, <em>Assassino Fantasmagórico (Phantasmal Killer)</em></li>
                 <li><strong>9º Nível:</strong> <em>Contato Extraplanar (Contact Other Plane)</em>, <em>Despistar (Mislead)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Warlock levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Heroism</em>, <em>Unseen Servant</em>, <em>Invisibility</em>, <em>Spiritual Weapon</em></li>
                 <li><strong>Level 5:</strong> <em>Phantom Steed</em>, <em>Spirit Guardians</em></li>
                 <li><strong>Level 7:</strong> <em>Death Ward</em>, <em>Phantasmal Killer</em></li>
                 <li><strong>Level 9:</strong> <em>Contact Other Plane</em>, <em>Mislead</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Vestígio) 3" : "Warlock (Vestige Patron) 3"
      }
    },
    {
      _id: "uavestigrecov001",
      name: isPt ? "Recuperação de Vestígio" : "Vestige Recovery",
      type: "feat",
      img: "icons/magic/life/heart-soul-spirit-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, quando você ou seu companheiro vestígio reduz um inimigo a 0 PV, você recupera Pontos de Vida Temporários iguais ao seu nível de Bruxo + mod de Carisma, e o companheiro pode teleportar-se até 9m imediatamente.</p>`
            : `<p>At 6th level, when you or your vestige companion reduce an enemy to 0 HP, you gain Temporary HP equal to your Warlock level + Cha mod, and the vestige can immediately teleport up to 30 ft.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Vestígio) 6" : "Warlock (Vestige Patron) 6"
      }
    },
    {
      _id: "uavestigaura0001",
      name: isPt ? "Aura de Poder" : "Aura of Power",
      type: "feat",
      img: "icons/magic/control/silhouette-aura-energy-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, seu companheiro vestígio projeta uma aura de 3m: aliados na área adicionam 1d4 a jogadas de ataque e testes de resistência.</p>`
            : `<p>At 10th level, your vestige companion projects a 10-ft aura: allies inside add 1d4 to attack rolls and saving throws.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Vestígio) 10" : "Warlock (Vestige Patron) 10"
      }
    },
    {
      _id: "uavestigsembl001",
      name: isPt ? "Aparência de Vida" : "Semblance of Life",
      type: "feat",
      img: "icons/magic/unholy/specter-ascension-spirit-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, seu companheiro vestígio pode se manifestar fisicamente por 1 minuto: ganha resistência a todo dano, voo de 12m (planar), e pode canalizar suas magias de Bruxo preparadas usando a própria reação ou ação bônus dele.</p>`
            : `<p>At 14th level, your vestige companion can assume full corporeal power for 1 minute: gains resistance to all damage, 40 ft flying speed (hover), and can channel your prepared Warlock spells using its own reaction or bonus action.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2026 - Mystic Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Bruxo (Patrono Vestígio) 14" : "Warlock (Vestige Patron) 14"
      }
    }
  ];
}

// -------------------------------------------------------------
// 2. SUBCLASSES DO LOTE 2 (ua-subclasses.json)
// -------------------------------------------------------------
function buildLote2Subclasses(isPt) {
  return [
    // 1. College of the Moon (Bard)
    {
      _id: "uasubmoonbard000",
      name: isPt ? "Colégio da Lua" : "College of the Moon",
      type: "subclass",
      img: "icons/magic/nature/moon-crescent-tree-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bardos do Colégio da Lua canalizam as lendas antigas e os segredos espirituais das Ilhas Moonshae e das florestas intocadas de Faerûn, usando contos populares para fortalecer aliados e desferir magias primitivas.</p>`
            : `<p>Bards of the College of the Moon channel the ancient legends and spiritual springs of the Moonshae Isles, using folktales to embolden allies with primal magic.</p>`,
          chat: ""
        },
        identifier: "moon",
        classIdentifier: "bard",
        advancement: [
          {
            _id: "advmoonnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Lua (Nível 3)" : "Moon Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamoonfolk000001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaprimalori00001" }
              ]
            }
          },
          {
            _id: "advmoonnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Lua (Nível 6)" : "Moon Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamoonwell000001" }
              ]
            }
          },
          {
            _id: "advmoonnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso da Lua (Nível 14)" : "Moon Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabolsterfk00001" }
              ]
            }
          }
        ]
      }
    },

    // 2. Knowledge Domain (Cleric)
    {
      _id: "uasubknowcleric1",
      name: isPt ? "Domínio do Conhecimento" : "Knowledge Domain",
      type: "subclass",
      img: "icons/sundries/books/book-eye-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Deuses do conhecimento valorizam o aprendizado e a verdade cósmica. Seus clérigos desvendam segredos arcanos, manipulam memórias e desnudam as mentes de adversários.</p>`
            : `<p>Gods of knowledge prize learning and universal truth. Their clerics master esoteric secrets, pierce deceptive thoughts, and foresee impending destiny.</p>`,
          chat: ""
        },
        identifier: "knowledge",
        classIdentifier: "cleric",
        advancement: [
          {
            _id: "advknownv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Conhecimento (Nível 3)" : "Knowledge Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaknowspells0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaknowbless00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaknowmindm00001" }
              ]
            }
          },
          {
            _id: "advknownv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Conhecimento (Nível 6)" : "Knowledge Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaknowunfet00001" }
              ]
            }
          },
          {
            _id: "advknownv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Conhecimento (Nível 17)" : "Knowledge Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaknowdivin00001" }
              ]
            }
          }
        ]
      }
    },

    // 3. Purple Dragon Knight (Fighter)
    {
      _id: "uasubpdragknight",
      name: isPt ? "Cavaleiro do Dragão Púrpura" : "Purple Dragon Knight",
      type: "subclass",
      img: "icons/creatures/reptiles/dragon-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Guerreiros de elite da cavalaria de Cormyr, que marcham para o combate acompanhados por jovens dracônicos ametistas leais e inspiram seus companheiros com liderança inflexível.</p>`
            : `<p>Elite knights of Cormyr who ride into battle alongside loyal amethyst dragon wyrmlings, rallying allies with courageous command.</p>`,
          chat: ""
        },
        identifier: "purple-dragon-knight",
        classIdentifier: "fighter",
        advancement: [
          {
            _id: "advpdknv00000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Dragão Púrpura (Nível 3)" : "Purple Dragon Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkknight00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkcompan00001" }
              ]
            }
          },
          {
            _id: "advpdknv00000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Dragão Púrpura (Nível 7)" : "Purple Dragon Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkdrider00001" }
              ]
            }
          },
          {
            _id: "advpdknv00000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Dragão Púrpura (Nível 10)" : "Purple Dragon Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkrallys00001" }
              ]
            }
          },
          {
            _id: "advpdknv00000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Dragão Púrpura (Nível 15)" : "Purple Dragon Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkamethyst001" }
              ]
            }
          },
          {
            _id: "advpdknv00000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso do Dragão Púrpura (Nível 18)" : "Purple Dragon Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapdkendurin0001" }
              ]
            }
          }
        ]
      }
    },

    // 4. Oath of the Noble Genies (Paladin)
    {
      _id: "uasubpalgenies01",
      name: isPt ? "Juramento dos Gênios Nobres" : "Oath of the Noble Genies",
      type: "subclass",
      img: "icons/magic/symbols/crest-elemental-royalty.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Paladinos que juram honrar os pactos ancestrais dos nobres gênios elementais dos Planos Interiores, canalizando relâmpagos, fogo, tempestades e geada em seus golpes sagrados.</p>`
            : `<p>Paladins who uphold the ancient treaties of the noble genies, wreathing their sacred smites in the fury of the Elemental Chaos.</p>`,
          chat: ""
        },
        identifier: "noble-genies",
        classIdentifier: "paladin",
        advancement: [
          {
            _id: "advgennv00000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos dos Gênios (Nível 3)" : "Genie Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniessmite001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniesspells01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniessplend01" }
              ]
            }
          },
          {
            _id: "advgennv00000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso dos Gênios (Nível 7)" : "Genie Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniesaura0001" }
              ]
            }
          },
          {
            _id: "advgennv00000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso dos Gênios (Nível 15)" : "Genie Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniesrebuk001" }
              ]
            }
          },
          {
            _id: "advgennv00000020",
            type: "ItemGrant",
            level: 20,
            title: isPt ? "Recurso dos Gênios (Nível 20)" : "Genie Feature (Level 20)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uageniesscion001" }
              ]
            }
          }
        ]
      }
    },

    // 5. Winter Walker (Ranger)
    {
      _id: "uasubwinterwlk01",
      name: isPt ? "Caminhante do Inverno" : "Winter Walker",
      type: "subclass",
      img: "icons/magic/water/ice-mountain-frost.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Patrulheiros que habitam as tundras congeladas e montanhas implacáveis do Norte de Faerûn, dominando nevascas letais e congelando seus alvos em batalha.</p>`
            : `<p>Rangers who roam the frostbitten peaks and frozen wastes, commanding blizzard magic to freeze predators and prey alike.</p>`,
          chat: ""
        },
        identifier: "winter-walker",
        classIdentifier: "ranger",
        advancement: [
          {
            _id: "advwinnv00000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Inverno (Nível 3)" : "Winter Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawinterexpl0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawinterrime0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawinterspells01" }
              ]
            }
          },
          {
            _id: "advwinnv00000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Inverno (Nível 7)" : "Winter Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawintersoul0001" }
              ]
            }
          },
          {
            _id: "advwinnv00000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso do Inverno (Nível 11)" : "Winter Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawinterretrib01" }
              ]
            }
          },
          {
            _id: "advwinnv00000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Inverno (Nível 15)" : "Winter Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawinterhaunt000" }
              ]
            }
          }
        ]
      }
    },

    // 6. Scion of the Three (Rogue)
    {
      _id: "uasubscionthree1",
      name: isPt ? "Herdeiro dos Três" : "Scion of the Three",
      type: "subclass",
      img: "icons/magic/death/skull-horned-blood-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ladinos moldados pelas sombras dos Três Mortos (Bane, Bhaal e Myrkul), especialistas em emboscadas brutais, medo paralisante e sacrifícios rituais de sangue.</p>`
            : `<p>Rogues bound to the grim legacy of the Dead Three (Bane, Bhaal, and Myrkul), mastering ruthless brutality and fear-driven assassination.</p>`,
          chat: ""
        },
        identifier: "scion-of-the-three",
        classIdentifier: "rogue",
        advancement: [
          {
            _id: "advscinnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos dos Três (Nível 3)" : "Three Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uascionthirst001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uascionalleg0001" }
              ]
            }
          },
          {
            _id: "advscinnv0000009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso dos Três (Nível 9)" : "Three Feature (Level 9)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uascionfear00001" }
              ]
            }
          },
          {
            _id: "advscinnv0000013",
            type: "ItemGrant",
            level: 13,
            title: isPt ? "Recurso dos Três (Nível 13)" : "Three Feature (Level 13)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uascionaura00001" }
              ]
            }
          },
          {
            _id: "advscinnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso dos Três (Nível 17)" : "Three Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasciondread0001" }
              ]
            }
          }
        ]
      }
    },

    // 7. Spellfire Sorcery (Sorcerer)
    {
      _id: "uasubspellfire01",
      name: isPt ? "Feitiçaria do Fogo Mágico" : "Spellfire Sorcery",
      type: "subclass",
      img: "icons/magic/fire/beam-jet-stream-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Feiticeiros abençoados pelo raro dom do Fogo Mágico — o poder primordial de canalizar a própria Trama mágica pura, absorvendo feitiços inimigos e convertendo-os em chamas prateadas e cura.</p>`
            : `<p>Sorcerers blessed with the legendary Spellfire—the rare ability to channel raw Weave energy, absorb hostile spells, and project radiant silver flame.</p>`,
          chat: ""
        },
        identifier: "spellfire",
        classIdentifier: "sorcerer",
        advancement: [
          {
            _id: "advspfxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos de Fogo Mágico (Nível 3)" : "Spellfire Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellfirebrst1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellfiresp001" }
              ]
            }
          },
          {
            _id: "advspfxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso de Fogo Mágico (Nível 6)" : "Spellfire Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellfireabs01" }
              ]
            }
          },
          {
            _id: "advspfxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso de Fogo Mágico (Nível 14)" : "Spellfire Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellfirehn001" }
              ]
            }
          },
          {
            _id: "advspfxnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso de Fogo Mágico (Nível 18)" : "Spellfire Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellfirecrw01" }
              ]
            }
          }
        ]
      }
    },

    // 8. Bladesinger (Wizard)
    {
      _id: "uasubbladesing01",
      name: isPt ? "Cantor da Lâmina" : "Bladesinger",
      type: "subclass",
      img: "icons/skills/melee/sword-twirl-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Magos praticantes da antiga arte élfica que mescla esgrima acrobática e conjuração de feitiços de combate, transformando defesas em canções mortais.</p>`
            : `<p>Wizards who master the ancient elven tradition of weaving graceful swordplay with lethal combat wizardry.</p>`,
          chat: ""
        },
        identifier: "bladesinger",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advbldxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Cantor da Lâmina (Nível 3)" : "Bladesinger Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabladesong00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabladeswarsong1" }
              ]
            }
          },
          {
            _id: "advbldxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Cantor da Lâmina (Nível 6)" : "Bladesinger Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabladesextraat1" }
              ]
            }
          },
          {
            _id: "advbldxnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Cantor da Lâmina (Nível 10)" : "Bladesinger Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabladessongdef1" }
              ]
            }
          },
          {
            _id: "advbldxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Cantor da Lâmina (Nível 14)" : "Bladesinger Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabladessongvic1" }
              ]
            }
          }
        ]
      }
    },

    // 9. Circle of Preservation (Druid)
    {
      _id: "uasubpreservdrui",
      name: isPt ? "Círculo da Preservação" : "Circle of Preservation",
      type: "subclass",
      img: "icons/magic/nature/sprout-tree-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Druidas guardiões dedicados a salvar os últimos fragmentos de vida e vegetação em mundos áridos e assolados pelo apocalipse, criando santuários intocáveis de restauração.</p>`
            : `<p>Druids dedicated to shielding the fragile embers of life across apocalyptic wastelands, creating verdant sanctuaries of enduring restoration.</p>`,
          chat: ""
        },
        identifier: "preservation",
        classIdentifier: "druid",
        advancement: [
          {
            _id: "advprsxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Preservação (Nível 3)" : "Preservation Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservspells1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservland001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservstud001" }
              ]
            }
          },
          {
            _id: "advprsxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Preservação (Nível 6)" : "Preservation Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservimp0001" }
              ]
            }
          },
          {
            _id: "advprsxnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso da Preservação (Nível 10)" : "Preservation Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservfacil01" }
              ]
            }
          },
          {
            _id: "advprsxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso da Preservação (Nível 14)" : "Preservation Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapreservsacro01" }
              ]
            }
          }
        ]
      }
    },

    // 10. Gladiator (Fighter)
    {
      _id: "uasubgladiatorfg",
      name: isPt ? "Gladiador" : "Gladiator",
      type: "subclass",
      img: "icons/skills/melee/unarmed-punch-fist-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Combatentes forjados nas arenas sangrentas de Dark Sun e mundos brutais, mestres em manobras violentas que eletrizam o público e mutilam adversários com estilo feroz.</p>`
            : `<p>Fighters forged in bloodstained arenas, turning brutal spectacle into deadly combat mastery with crippling maneuvers.</p>`,
          chat: ""
        },
        identifier: "gladiator",
        classIdentifier: "fighter",
        advancement: [
          {
            _id: "advgldxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Gladiador (Nível 3)" : "Gladiator Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiatbrut001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiattheat01" }
              ]
            }
          },
          {
            _id: "advgldxnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Gladiador (Nível 7)" : "Gladiator Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiatparry01" }
              ]
            }
          },
          {
            _id: "advgldxnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Gladiador (Nível 10)" : "Gladiator Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiatbold001" }
              ]
            }
          },
          {
            _id: "advgldxnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Gladiador (Nível 15)" : "Gladiator Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiatresurg1" }
              ]
            }
          },
          {
            _id: "advgldxnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso do Gladiador (Nível 18)" : "Gladiator Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagladiatmutil01" }
              ]
            }
          }
        ]
      }
    },

    // 11. Defiled Sorcery (Sorcerer)
    {
      _id: "uasubdefiledsorc",
      name: isPt ? "Feitiçaria Profanada" : "Defiled Sorcery",
      type: "subclass",
      img: "icons/magic/unholy/wither-decay-hand-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Feiticeiros que extraem poder bruto dessecando e consumindo a força vital da terra e dos seres vivos ao seu redor, canalizando a magia profanadora dos mundos devastados.</p>`
            : `<p>Sorcerers who empower their magic by greedily leeching life from the soil and surrounding creatures in a blight of defilement.</p>`,
          chat: ""
        },
        identifier: "defiled",
        classIdentifier: "sorcerer",
        advancement: [
          {
            _id: "advdefxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos Profanadores (Nível 3)" : "Defiler Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadefileempow001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadefilespells01" }
              ]
            }
          },
          {
            _id: "advdefxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso Profanador (Nível 6)" : "Defiler Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadefilecorrupt1" }
              ]
            }
          },
          {
            _id: "advdefxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso Profanador (Nível 14)" : "Defiler Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadefileaura0001" }
              ]
            }
          },
          {
            _id: "advdefxnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso Profanador (Nível 18)" : "Defiler Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadefilesuper001" }
              ]
            }
          }
        ]
      }
    },

    // 12. Sorcerer-King Patron (Warlock)
    {
      _id: "uasubsorckpatron",
      name: isPt ? "Patrono Rei-Feiticeiro" : "Sorcerer-King Patron",
      type: "subclass",
      img: "icons/magic/control/control-influence-crown-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bruxos pactuados com tiranos dragões-feiticeiros imortais, governantes absolutos de reinos desérticos que concedem comandos mentais autoritários e poder psiônico implacável.</p>`
            : `<p>Warlocks pledged to god-like sorcerer-kings, wielding psionic authority and absolute tyranny over minds and battlefields.</p>`,
          chat: ""
        },
        identifier: "sorcerer-king",
        classIdentifier: "warlock",
        advancement: [
          {
            _id: "advskpxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Rei-Feiticeiro (Nível 3)" : "Sorcerer-King Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasorckspells001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasorckherald001" }
              ]
            }
          },
          {
            _id: "advskpxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Rei-Feiticeiro (Nível 6)" : "Sorcerer-King Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasorckedict0001" }
              ]
            }
          },
          {
            _id: "advskpxnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Rei-Feiticeiro (Nível 10)" : "Sorcerer-King Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasorckrebuke001" }
              ]
            }
          },
          {
            _id: "advskpxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Rei-Feiticeiro (Nível 14)" : "Sorcerer-King Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasorcktyranny01" }
              ]
            }
          }
        ]
      }
    },

    // 13. Warrior of the Mystic Arts (Monk)
    {
      _id: "uasubmonkmystica",
      name: isPt ? "Guerreiro das Artes Místicas" : "Warrior of the Mystic Arts",
      type: "subclass",
      img: "icons/magic/symbols/circle-ouroboros-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Monges iniciados nos segredos das antigas academias de conjuração marcial, combinando golpes fulminantes com feitiços arcanos e concentração inabalável.</p>`
            : `<p>Monks initiated into esoteric academies of mystical warfare, weaving spellcraft seamlessly through fluid martial forms.</p>`,
          chat: ""
        },
        identifier: "mystic-arts",
        classIdentifier: "monk",
        advancement: [
          {
            _id: "advmysxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recurso Místico (Nível 3)" : "Mystic Feature (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamysticspell001" }
              ]
            }
          },
          {
            _id: "advmysxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos Místicos (Nível 6)" : "Mystic Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamysticfight001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamysticfocus001" }
              ]
            }
          },
          {
            _id: "advmysxnv0000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso Místico (Nível 11)" : "Mystic Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamysticcenter01" }
              ]
            }
          },
          {
            _id: "advmysxnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso Místico (Nível 17)" : "Mystic Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamysticimpfg001" }
              ]
            }
          }
        ]
      }
    },

    // 14. Oath of the Spellguard (Paladin)
    {
      _id: "uasubpalspellgua",
      name: isPt ? "Juramento da Guarda de Feitiços" : "Oath of the Spellguard",
      type: "subclass",
      img: "icons/magic/defensive/shield-barrier-chain-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Paladinos templários juramentados para conter o abuso e a tirania mágica, neutralizando conjuradores hostis, dissipando feitiços e absorvendo dano de aliados vinculados.</p>`
            : `<p>Paladins sworn to counter rogue sorcery, shattering hostile concentration, dispelling curses, and shielding allies from arcane malice.</p>`,
          chat: ""
        },
        identifier: "spellguard",
        classIdentifier: "paladin",
        advancement: [
          {
            _id: "advspgxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Guarda (Nível 3)" : "Spellguard Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgbond0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgstrike01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgspells01" }
              ]
            }
          },
          {
            _id: "advspgxnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso da Guarda (Nível 7)" : "Spellguard Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgaura0001" }
              ]
            }
          },
          {
            _id: "advspgxnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso da Guarda (Nível 15)" : "Spellguard Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgblade001" }
              ]
            }
          },
          {
            _id: "advspgxnv0000020",
            type: "ItemGrant",
            level: 20,
            title: isPt ? "Recurso da Guarda (Nível 20)" : "Spellguard Feature (Level 20)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspellgetern001" }
              ]
            }
          }
        ]
      }
    },

    // 15. Magic Stealer (Rogue)
    {
      _id: "uasubmagicsteal1",
      name: isPt ? "Ladrão de Magia" : "Magic Stealer",
      type: "subclass",
      img: "icons/magic/symbols/rune-hand-grasp-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ladinos oportunistas que desenvolveram técnicas para pilhar energia mágica diretamente de conjuradores adversários e objetos encantados, reutilizando-a como golpes de força letais.</p>`
            : `<p>Rogues who pilfer magical energy straight from enemy spellcasters and enchanted relics, transmuting it into force-infused strikes.</p>`,
          chat: ""
        },
        identifier: "magic-stealer",
        classIdentifier: "rogue",
        advancement: [
          {
            _id: "advmstxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Ladrão de Magia (Nível 3)" : "Magic Stealer Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealdrain0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealempow0001" }
              ]
            }
          },
          {
            _id: "advmstxnv0000009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso do Ladrão de Magia (Nível 9)" : "Magic Stealer Feature (Level 9)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealsabot0001" }
              ]
            }
          },
          {
            _id: "advmstxnv0000013",
            type: "ItemGrant",
            level: 13,
            title: isPt ? "Recursos do Ladrão de Magia (Nível 13)" : "Magic Stealer Features (Level 13)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealshroud001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealimpdr0001" }
              ]
            }
          },
          {
            _id: "advmstxnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Ladrão de Magia (Nível 17)" : "Magic Stealer Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uastealimplosion" }
              ]
            }
          }
        ]
      }
    },

    // 16. Vestige Patron (Warlock)
    {
      _id: "uasubvestigepatr",
      name: isPt ? "Patrono Vestígio" : "Vestige Patron",
      type: "subclass",
      img: "icons/magic/death/wraith-ghost-spirit-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bruxos que negociaram pactos com os ecos fantasmagóricos de deuses caídos e heróis lendários esquecidos pelo tempo, acompanhados por um vestígio espectral de tremendo poder arcano.</p>`
            : `<p>Warlocks who bind themselves to the spectral remnants of forgotten gods and ancient souls, fighting beside a haunting vestige companion.</p>`,
          chat: ""
        },
        identifier: "vestige",
        classIdentifier: "warlock",
        advancement: [
          {
            _id: "advvstxnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Vestígio (Nível 3)" : "Vestige Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uavestigcomp0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uavestigspell001" }
              ]
            }
          },
          {
            _id: "advvstxnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Vestígio (Nível 6)" : "Vestige Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uavestigrecov001" }
              ]
            }
          },
          {
            _id: "advvstxnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Vestígio (Nível 10)" : "Vestige Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uavestigaura0001" }
              ]
            }
          },
          {
            _id: "advvstxnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Vestígio (Nível 14)" : "Vestige Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uavestigsembl001" }
              ]
            }
          }
        ]
      }
    }
  ];
}

// -------------------------------------------------------------
// 3. FUSÃO E COMPILAÇÃO (Lote 1 + Lote 2)
// -------------------------------------------------------------
function run() {
  console.log("Compilando dados do Lote 2 de Unearthed Arcana...");

  // Carregar dados existentes
  const existingFeaturesPt = loadExisting("ua-features.json", PT_DIR);
  const existingFeaturesEn = loadExisting("ua-features.json", EN_DIR);
  const existingSubclassesPt = loadExisting("ua-subclasses.json", PT_DIR);
  const existingSubclassesEn = loadExisting("ua-subclasses.json", EN_DIR);

  const lote2FeaturesPt = buildLote2Features(true);
  const lote2FeaturesEn = buildLote2Features(false);
  const lote2SubclassesPt = buildLote2Subclasses(true);
  const lote2SubclassesEn = buildLote2Subclasses(false);

  // Unificar sem duplicatas por _id
  function mergeById(existing, newlyAdded) {
    const map = new Map();
    for (const item of existing) map.set(item._id, item);
    for (const item of newlyAdded) map.set(item._id, item);
    return Array.from(map.values());
  }

  const allFeaturesPt = mergeById(existingFeaturesPt, lote2FeaturesPt);
  const allFeaturesEn = mergeById(existingFeaturesEn, lote2FeaturesEn);
  const allSubclassesPt = mergeById(existingSubclassesPt, lote2SubclassesPt);
  const allSubclassesEn = mergeById(existingSubclassesEn, lote2SubclassesEn);

  console.log(`Total de Features: ${allFeaturesPt.length} (Lote 1 + Lote 2)`);
  console.log(`Total de Subclasses: ${allSubclassesPt.length} (Lote 1 + Lote 2)`);

  // Salvar arquivos
  function save(filename, enData, ptData) {
    fs.writeFileSync(path.join(EN_DIR, filename), JSON.stringify(enData, null, 2) + "\n");
    fs.writeFileSync(path.join(PT_DIR, filename), JSON.stringify(ptData, null, 2) + "\n");
    fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(ptData, null, 2) + "\n");
  }

  save("ua-features.json", allFeaturesEn, allFeaturesPt);
  save("ua-subclasses.json", allSubclassesEn, allSubclassesPt);

  console.log("Arquivos JSON gerados com sucesso!");
}

run();
