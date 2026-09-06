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

function saveFiles(filename, enData, ptData) {
  fs.writeFileSync(path.join(EN_DIR, filename), JSON.stringify(enData, null, 2));
  fs.writeFileSync(path.join(PT_DIR, filename), JSON.stringify(ptData, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(ptData, null, 2));
}

// =============================================================
// 1. RECURSOS DE ARQUÉTIPOS (ua-features.json)
// =============================================================

function buildFeatures(isPt) {
  return [
    // ---------------------------------------------------------
    // 1. REANIMATOR (Artificer)
    // ---------------------------------------------------------
    {
      _id: "uareanspells0001",
      name: isPt ? "Magias do Reanimador" : "Reanimator Spells",
      type: "feat",
      img: "icons/magic/death/skull-energy-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Vitalidade Falsa (False Life)</em>, <em>Poupar os Moribundos (Spare the Dying)</em>, <em>Raio de Bruxa (Witch Bolt)</em></li>
                 <li><strong>5º Nível:</strong> <em>Cegueira/Surdez (Blindness/Deafness)</em>, <em>Aprimorar Habilidade (Enhance Ability)</em></li>
                 <li><strong>9º Nível:</strong> <em>Animar Mortos (Animate Dead)</em>, <em>Relâmpago (Lightning Bolt)</em></li>
                 <li><strong>13º Nível:</strong> <em>Definhar (Blight)</em>, <em>Proteção contra a Morte (Death Ward)</em></li>
                 <li><strong>17º Nível:</strong> <em>Casulo Antivida (Antilife Shell)</em>, <em>Reviver os Mortos (Raise Dead)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Artificer levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>False Life</em>, <em>Spare the Dying</em>, <em>Witch Bolt</em></li>
                 <li><strong>Level 5:</strong> <em>Blindness/Deafness</em>, <em>Enhance Ability</em></li>
                 <li><strong>Level 9:</strong> <em>Animate Dead</em>, <em>Lightning Bolt</em></li>
                 <li><strong>Level 13:</strong> <em>Blight</em>, <em>Death Ward</em></li>
                 <li><strong>Level 17:</strong> <em>Antilife Shell</em>, <em>Raise Dead</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 3" : "Reanimator 3"
      }
    },
    {
      _id: "uajolttolife0001",
      name: isPt ? "Choque para a Vida" : "Jolt to Life",
      type: "feat",
      img: "icons/magic/lightning/bolt-forked-large-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando você conjura <em>Poupar os Moribundos (Spare the Dying)</em>, você pode modificar a magia para enviar um choque voltaico através do alvo, reanimando-o:</p>
               <ul>
                 <li>O alvo recupera <strong>1 Ponto de Vida</strong>.</li>
                 <li>Cada criatura em uma Emanação de 3 metros (10 pés) ao redor do alvo faz uma salvaguarda de Destreza contra sua CD de magia, sofrendo <strong>1d4 + metade do seu nível de Artífice (arredondado para cima)</strong> de dano Elétrico em uma falha, ou metade no sucesso.</li>
               </ul>
               <p>Você pode usar esta modificação uma quantidade de vezes igual ao seu modificador de Inteligência (mínimo de 1), recuperando todos os usos em um Descanso Longo.</p>`
            : `<p>At 3rd level, when you cast <em>Spare the Dying</em>, you can modify the spell so that it sends a jolt of electricity through the target, reviving it:</p>
               <ul>
                 <li>The target regains <strong>1 Hit Point</strong>.</li>
                 <li>Each creature in a 10-foot Emanation from the target makes a Dexterity saving throw against your spell save DC, taking Lightning damage equal to <strong>1d4 plus half your Artificer level (round up)</strong> on a failed save, or half as much on a success.</li>
               </ul>
               <p>You can modify the spell this way a number of times equal to your Intelligence modifier, regaining all uses after a Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 3" : "Reanimator 3",
        uses: { value: 3, max: "@abilities.int.mod", per: "lr", recovery: "" }
      }
    },
    {
      _id: "uareancompani001",
      name: isPt ? "Companheiro Reanimado" : "Reanimated Companion",
      type: "feat",
      img: "icons/creatures/magical/construct-golem-flesh-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, usando Ferramentas de Funileiro ou de Artesão com as quais você é proficiente, você pode usar uma Ação de Magia para construir um <strong>Companheiro Reanimado</strong> (Morto-vivo Médio).</p>
               <p>Ele age logo após seu turno, obedece aos seus comandos verbais e ataca usando seu modificador de Inteligência para ataque e dano.</p>`
            : `<p>At 3rd level, using Tinker's Tools or Artisan's Tools you are proficient with, you take a Magic action to create a <strong>Reanimated Companion</strong> (Medium Undead).</p>
               <p>It takes its turn immediately after yours, obeys verbal commands, and attacks using your Intelligence modifier for attack and damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 3" : "Reanimator 3"
      }
    },
    {
      _id: "uareanmodific001",
      name: isPt ? "Modificações Estranhas" : "Strange Modifications",
      type: "feat",
      img: "icons/commodities/biological/organ-heart-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 5º nível, seu companheiro reanimado ganha aprimoramentos cirúrgicos e alquímicos à sua escolha: Cuspe Ácido, Carapaça Óssea, Tendões Elásticos ou Vigor Vil.</p>`
            : `<p>At 5th level, your reanimated companion gains surgical and alchemical upgrades of your choice: Acidic Spittle, Bony Carapace, Elastic Sinew, or Vile Vigor.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 5" : "Reanimator 5"
      }
    },
    {
      _id: "uareanimproved01",
      name: isPt ? "Reanimação Aprimorada" : "Improved Reanimation",
      type: "feat",
      img: "icons/magic/lightning/bolt-forked-large-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, o dano elétrico de Choque para a Vida aumenta em 1d4 e o alvo recupera PV iguais a 1 + seu modificador de Inteligência. Além disso, seu companheiro pode realizar dois ataques em sua ação de Ataque.</p>`
            : `<p>At 9th level, the lightning damage of Jolt to Life increases by 1d4, and the revived target regains HP equal to 1 + your Intelligence modifier. In addition, your companion can make two attacks.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 9" : "Reanimator 9"
      }
    },
    {
      _id: "uareanpromethe01",
      name: isPt ? "Reanimação Prometeica" : "Promethean Reanimation",
      type: "feat",
      img: "icons/magic/lightning/fist-unarmed-strike-strike-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, seu companheiro ganha Imunidade a dano Elétrico e regenera 5 PV no início de cada turno se sofrer dano elétrico. Além disso, você pode conjurar <em>Criar Mortos-vivos (Create Undead)</em> uma vez por Descanso Longo sem gastar espaço de magia.</p>`
            : `<p>At 15th level, your companion gains Immunity to Lightning damage and regenerates 5 HP at start of its turn when subjected to lightning. You can also cast <em>Create Undead</em> once per Long Rest without a spell slot.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Reanimador 15" : "Reanimator 15"
      }
    },

    // ---------------------------------------------------------
    // 2. COLLEGE OF SPIRITS (Bard)
    // ---------------------------------------------------------
    {
      _id: "uaspirchanneler1",
      name: isPt ? "Canalizador de Espíritos" : "Channeler",
      type: "feat",
      img: "icons/magic/symbols/circle-outer-ring-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende o truque <em>Orientação (Guidance)</em>, que conta como magia de Bardo para você e possui alcance de 18 metros (60 pés). Você também pode usar uma vela, baralho de tarô ou tábua de espíritos como Foco de Conjuração.</p>`
            : `<p>At 3rd level, you learn the <em>Guidance</em> cantrip, which counts as a Bard spell for you and has a range of 60 feet. You can also use a candle, tarokka deck, or spirit board as a spellcasting focus.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Colégio dos Espíritos 3" : "College of Spirits 3"
      }
    },
    {
      _id: "uaspirbeyond0001",
      name: isPt ? "Contos do Além" : "Tales from Beyond",
      type: "feat",
      img: "icons/sundries/books/book-skull-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, como uma Ação Bônus, você gasta um dado de Inspiração de Bardo e rola na <strong>Tabela de Contos dos Espíritos</strong> para canalizar um espírito (ex: Fera, Herói, Tirano, Dragão, Amante, etc.), aplicando seus efeitos mágicos imediatos a um alvo.</p>`
            : `<p>At 3rd level, as a Bonus Action, you expend one use of Bardic Inspiration and roll on the <strong>Spirit Tales table</strong> to channel an otherworldly entity and bestow its magical tale onto a creature.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Colégio dos Espíritos 3" : "College of Spirits 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uaspirempowered1",
      name: isPt ? "Canalização Fortalecida" : "Empowered Channeling",
      type: "feat",
      img: "icons/magic/sonic/silence-unholy-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao conjurar uma magia de Bardo através do seu Foco Espiritual que cause dano ou restaure PV, você adiciona <strong>1d6</strong> ao dano ou à cura.</p>`
            : `<p>At 6th level, when you cast a Bard spell through your Spiritual Focus that deals damage or restores HP, you add <strong>1d6</strong> to the damage or healing.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Colégio dos Espíritos 6" : "College of Spirits 6"
      }
    },
    {
      _id: "uaspirmysticconn",
      name: isPt ? "Conexão Mística" : "Mystical Connection",
      type: "feat",
      img: "icons/magic/perception/mind-flayer-glowing-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, ao rolar na Tabela de Contos dos Espíritos, você rola <strong>dois dados</strong> e escolhe qual dos contos manifestar.</p>`
            : `<p>At 14th level, whenever you roll on the Spirit Tales table, you roll <strong>two dice</strong> and choose which tale to manifest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Colégio dos Espíritos 14" : "College of Spirits 14"
      }
    },

    // ---------------------------------------------------------
    // 3. GRAVE DOMAIN (Cleric)
    // ---------------------------------------------------------
    {
      _id: "uagravecircle001",
      name: isPt ? "Círculo da Mortalidade" : "Circle of Mortality",
      type: "feat",
      img: "icons/magic/life/cross-beam-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando você conjura uma magia que restaura PV para uma criatura com 0 PV, qualquer dado rolado para cura usa o <strong>resultado máximo possível</strong>.</p>
               <p>Além disso, você aprende o truque <em>Poupar os Moribundos (Spare the Dying)</em>, que para você tem alcance de 9 metros (30 pés) e pode ser conjurado como uma Ação Bônus.</p>`
            : `<p>At 3rd level, when you cast a spell that restores HP to a creature at 0 HP, any dice rolled for healing use the <strong>highest possible result</strong>.</p>
               <p>You also learn <em>Spare the Dying</em> with a range of 30 feet and can cast it as a Bonus Action.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio do Túmulo 3" : "Grave Domain 3"
      }
    },
    {
      _id: "uagravespells001",
      name: isPt ? "Magias do Domínio do Túmulo" : "Grave Domain Spells",
      type: "feat",
      img: "icons/magic/death/grave-tombstone-cross-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Perdição (Bane)</em>, <em>Vitalidade Falsa (False Life)</em></li>
                 <li><strong>5º Nível:</strong> <em>Repouso Tranquilo (Gentle Repose)</em>, <em>Raio do Enfraquecimento (Ray of Enfeeblement)</em></li>
                 <li><strong>7º Nível:</strong> <em>Reviver (Revivify)</em>, <em>Toque Vampírico (Vampiric Touch)</em></li>
                 <li><strong>9º Nível:</strong> <em>Definhar (Blight)</em>, <em>Proteção contra a Morte (Death Ward)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Bane</em>, <em>False Life</em></li>
                 <li><strong>Level 5:</strong> <em>Gentle Repose</em>, <em>Ray of Enfeeblement</em></li>
                 <li><strong>Level 7:</strong> <em>Revivify</em>, <em>Vampiric Touch</em></li>
                 <li><strong>Level 9:</strong> <em>Blight</em>, <em>Death Ward</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio do Túmulo 3" : "Grave Domain 3"
      }
    },
    {
      _id: "uapathtothegrav1",
      name: isPt ? "Canalizar Divindade: Caminho para a Sepultura" : "Channel Divinity: Path to the Grave",
      type: "feat",
      img: "icons/magic/death/skull-horned-black.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma Ação de Magia, você gasta um uso de Canalizar Divindade para amaldiçoar uma criatura a até 9 metros (30 pés). Até o final do seu próximo turno, o alvo fica com <strong>Vulnerabilidade a todo o dano</strong> do próximo ataque feito por você ou seus aliados que o atingir.</p>`
            : `<p>As a Magic action, expend one use of Channel Divinity to curse a creature within 30 feet. The target has <strong>Vulnerability to all damage</strong> of the next hit dealt to it before end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio do Túmulo 3" : "Grave Domain 3",
        activation: { type: "action", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "uagravesentinel1",
      name: isPt ? "Sentinela às Portas da Morte" : "Sentinel at Death's Door",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-diamond-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, quando você ou uma criatura a até 9 metros sofrer um <strong>Acerto Crítico</strong>, você pode usar uma Reação para cancelar o crítico, transformando-o em um acerto normal. Usos iguais ao mod Sabedoria por Descanso Longo.</p>`
            : `<p>At 6th level, when you or a creature within 30 feet suffers a <strong>Critical Hit</strong>, you can use a Reaction to negate the critical, turning it into a normal hit. Uses equal to Wisdom mod per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio do Túmulo 6" : "Grave Domain 6",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "uagravereaper001",
      name: isPt ? "Ceifador Divino" : "Divine Reaper",
      type: "feat",
      img: "icons/magic/death/scythe-blade-skull-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, ao conjurar uma magia de Necromancia de 1º a 5º círculo que tenha como alvo apenas uma criatura, você pode escolher um <strong>segundo alvo</strong> dentro do alcance.</p>`
            : `<p>At 17th level, when you cast a Necromancy spell of 1st through 5th level that targets only one creature, you can target a <strong>second creature</strong> within range.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio do Túmulo 17" : "Grave Domain 17"
      }
    },

    // ---------------------------------------------------------
    // 4. HOLLOW WARDEN (Ranger)
    // ---------------------------------------------------------
    {
      _id: "uahollowspells01",
      name: isPt ? "Magias do Guardião Oco" : "Hollow Warden Spells",
      type: "feat",
      img: "icons/magic/nature/root-vine-glow-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Infligir Ferimentos</em>, <em>Passos sem Pegadas</em>, <em>Animar Mortos</em>, <em>Definhar</em> e <em>Contágio</em>.</p>`
            : `<p>You always have the following spells prepared: <em>Inflict Wounds</em>, <em>Pass without Trace</em>, <em>Animate Dead</em>, <em>Blight</em>, and <em>Contagion</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guardião Oco 3" : "Hollow Warden 3"
      }
    },
    {
      _id: "uawrathofthewild",
      name: isPt ? "Ira da Natureza Oca" : "Wrath of the Wild",
      type: "feat",
      img: "icons/magic/unholy/beam-impact-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma Ação Bônus, seus ataques são envoltos em espíritos necróticos da floresta por 1 minuto. Uma vez por turno ao acertar um ataque, causa <strong>1d6 de dano Necrótico ou Frio extra</strong> e reduz o deslocamento do alvo em 3 metros (10 pés).</p>`
            : `<p>As a Bonus Action, your strikes are wreathed in hollow woodland spirits for 1 minute. Once per turn on a hit, deals <strong>extra 1d6 Necrotic or Cold damage</strong> and reduces the target's Speed by 10 feet.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guardião Oco 3" : "Hollow Warden 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uahungeringmigh1",
      name: isPt ? "Poder Faminto" : "Hungering Might",
      type: "feat",
      img: "icons/magic/life/heart-shadow-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, ao causar dano com Ira da Natureza Oca, você ganha Pontos de Vida Temporários iguais ao dano causado ou transfere esses PVT para um aliado a até 9 metros.</p>`
            : `<p>At 7th level, when you deal damage with Wrath of the Wild, you gain Temporary HP equal to the damage dealt or grant it to an ally within 30 feet.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guardião Oco 7" : "Hollow Warden 7"
      }
    },
    {
      _id: "uarotandviolence",
      name: isPt ? "Podridão e Violência" : "Rot and Violence",
      type: "feat",
      img: "icons/magic/death/swarm-insects-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, o dano da Ira da Natureza Oca aumenta para <strong>1d10</strong>, e você pode criar uma tempestade de podridão que torna a área em volta de você terreno difícil para os inimigos e causa dano contínuo.</p>`
            : `<p>At 11th level, the damage of Wrath of the Wild increases to <strong>1d10</strong>, and you can create a vortex of rot creating difficult terrain and dealing continuous damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guardião Oco 11" : "Hollow Warden 11"
      }
    },
    {
      _id: "uaancientenduran",
      name: isPt ? "Resistência Ancestral" : "Ancient Endurance",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, ao ser reduzido a 0 PV, você cai para 1 PV em vez disso e emite uma onda necrótica em 9 metros que causa 3d10 de dano necrótico e empurra os inimigos (1x por Descanso Longo).</p>`
            : `<p>At 15th level, when reduced to 0 HP, you drop to 1 HP instead and emit a necrotic burst within 30 feet dealing 3d10 damage and pushing enemies (1x per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guardião Oco 15" : "Hollow Warden 15"
      }
    },

    // ---------------------------------------------------------
    // 5. PHANTOM (Rogue)
    // ---------------------------------------------------------
    {
      _id: "uawhispersdead01",
      name: isPt ? "Sussurros dos Mortos" : "Whispers of the Dead",
      type: "feat",
      img: "icons/magic/perception/ear-sound-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, sempre que terminar um Descanso Curto ou Longo, você pode escolher uma perícia ou ferramenta da qual não seja proficiente para se tornar <strong>proficiente</strong> até o próximo descanso, guiado pelas vozes dos espíritos.</p>`
            : `<p>At 3rd level, whenever you finish a Short or Long Rest, you can gain <strong>proficiency</strong> with one skill or tool of your choice until your next rest, guided by the dead.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Fantasma 3" : "Phantom 3"
      }
    },
    {
      _id: "uawailsfromgrav1",
      name: isPt ? "Lamentos da Sepultura" : "Wails from the Grave",
      type: "feat",
      img: "icons/magic/death/skull-screaming-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, imediatamente após causar dano de <strong>Ataque Furtivo (Sneak Attack)</strong> em uma criatura, você pode forçar uma segunda criatura a até 9 metros a sofrer <strong>dano Necrótico igual à metade dos seus dados de Ataque Furtivo</strong> (arredondado para cima).</p>
               <p>Usos iguais ao seu Bônus de Proficiência por Descanso Longo.</p>`
            : `<p>At 3rd level, immediately after dealing <strong>Sneak Attack</strong> damage to a creature, you can cause a second creature within 30 feet to take <strong>Necrotic damage equal to half your Sneak Attack dice</strong> (round up).</p>
               <p>Uses equal to Proficiency Bonus per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Fantasma 3" : "Phantom 3"
      }
    },
    {
      _id: "uatokensofdepart",
      name: isPt ? "Fetiches dos Partidos" : "Tokens of the Departed",
      type: "feat",
      img: "icons/commodities/materials/shard-glass-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, quando uma criatura morre a até 9 metros de você, você pode usar uma Reação para aprisionar uma lasca da alma dela em um <em>Fetiche da Alma</em> (máximo igual ao seu PB). Enquanto carregar um fetiche, tem Vantagem em testes de resistência contra morte e Constituição.</p>`
            : `<p>At 9th level, when a creature dies within 30 feet, take a Reaction to capture a soul sliver as a <em>Soul Trinket</em> (max = PB). While carrying one, you have Advantage on death saves and Con saves.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Fantasma 9" : "Phantom 9"
      }
    },
    {
      _id: "uaghostwalk00001",
      name: isPt ? "Passo Fantasma" : "Ghost Walk",
      type: "feat",
      img: "icons/magic/movement/trail-streak-zigzag-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, como uma Ação Bônus, você entra em uma forma espectral por 10 minutos (ou destrói 1 fetiche para ativar sem gastar uso diário): ganha deslocamento de voo de 3 metros (pairar), ataques contra você têm Desvantagem e você pode mover-se através de criaturas e objetos.</p>`
            : `<p>At 13th level, as a Bonus Action, assume a spectral form for 10 minutes: gain 10-foot Fly speed (hover), attacks against you have Disadvantage, and you can move through creatures and objects.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Fantasma 13" : "Phantom 13",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uadeathsfriend01",
      name: isPt ? "Amigo da Morte" : "Death's Friend",
      type: "feat",
      img: "icons/magic/death/skeleton-skull-horned-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, ao usar Lamentos da Sepultura, você causa o dano necrótico ao <strong>primeiro e ao segundo alvo simultaneamente</strong>. Além disso, ao terminar um Descanso Longo, um fetiche da alma aparece em sua mão se você não tiver nenhum.</p>`
            : `<p>At 17th level, Wails from the Grave deals damage to <strong>both targets simultaneously</strong>. When you finish a Long Rest, a soul trinket manifests if you have none.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Fantasma 17" : "Phantom 17"
      }
    },

    // ---------------------------------------------------------
    // 6. SHADOW SORCERY (Sorcerer)
    // ---------------------------------------------------------
    {
      _id: "uaeyesofdark0001",
      name: isPt ? "Olhos da Escuridão" : "Eyes of the Dark",
      type: "feat",
      img: "icons/magic/perception/eye-slit-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha <strong>Visão no Escuro com alcance de 36 metros (120 pés)</strong>. Além disso, você pode conjurar <em>Escuridão (Darkness)</em> gastando 2 Pontos de Feitiçaria e pode enxergar normalmente através da escuridão criada por esta magia.</p>`
            : `<p>At 3rd level, you gain <strong>Darkvision up to 120 feet</strong>. You can also cast <em>Darkness</em> by expending 2 Sorcery Points and can see through the darkness created by this casting.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria das Sombras 3" : "Shadow Sorcery 3"
      }
    },
    {
      _id: "uashadowspells01",
      name: isPt ? "Magias das Sombras" : "Shadow Spells",
      type: "feat",
      img: "icons/magic/unholy/silhouette-evil-horned-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Vitalidade Falsa</em>, <em>Escuridão</em>, <em>Medo</em>, <em>Tentáculos Negros de Evard</em> e <em>Enervação</em>.</p>`
            : `<p>You always have the following spells prepared: <em>False Life</em>, <em>Darkness</em>, <em>Fear</em>, <em>Evard's Black Tentacles</em>, and <em>Enervation</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria das Sombras 3" : "Shadow Sorcery 3"
      }
    },
    {
      _id: "uaspiritsillomen",
      name: isPt ? "Cão do Mau Agouro" : "Hound of Ill Omen",
      type: "feat",
      img: "icons/creatures/abilities/wolf-howl-moon-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, como uma Ação Bônus, você gasta 3 Pontos de Feitiçaria para convocar um lobo espectral de sombra ao lado de uma criatura a até 36 metros. O cão persegue o alvo, e enquanto estiver a até 1,5m dele, o alvo tem <strong>Desvantagem em salvaguardas contra suas magias</strong>.</p>`
            : `<p>At 6th level, as a Bonus Action, spend 3 Sorcery Points to summon a shadow hound next to an enemy within 120 feet. While the hound is within 5 feet, the target has <strong>Disadvantage on saving throws against your spells</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria das Sombras 6" : "Shadow Sorcery 6",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uashadowwalk0001",
      name: isPt ? "Passo das Sombras" : "Shadow Walk",
      type: "feat",
      img: "icons/magic/movement/portal-vortex-dark-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, quando estiver em luz penumbrosa ou escuridão, você pode usar uma Ação Bônus para se teletransportar a até <strong>36 metros (120 pés)</strong> para outro espaço em luz penumbrosa ou escuridão que possa ver.</p>`
            : `<p>At 14th level, while in dim light or darkness, you can teleport as a Bonus Action up to <strong>120 feet</strong> to an unoccupied space you can see that is also in dim light or darkness.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria das Sombras 14" : "Shadow Sorcery 14",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uaumbralform0001",
      name: isPt ? "Forma Umbral" : "Umbral Form",
      type: "feat",
      img: "icons/magic/defensive/barrier-shield-dome-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, gastando 5 Pontos de Feitiçaria como Ação Bônus, você se transforma em pura sombra por 1 minuto: ganha <strong>Resistência a todos os tipos de dano exceto Força e Radiante</strong>, e pode mover-se através de outras criaturas e objetos.</p>`
            : `<p>At 18th level, spend 5 Sorcery Points as a Bonus Action to transform into shadow for 1 minute: gain <strong>Resistance to all damage except Force and Radiant</strong>, and move through creatures/objects.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria das Sombras 18" : "Shadow Sorcery 18",
        activation: { type: "bonus", cost: 1 }
      }
    },

    // ---------------------------------------------------------
    // 7. HEXBLADE PATRON (Warlock)
    // ---------------------------------------------------------
    {
      _id: "uahexbladespell1",
      name: isPt ? "Magias da Lâmina Maldita" : "Hexblade Spells",
      type: "feat",
      img: "icons/weapons/swords/sword-broad-glowing-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Escudo Arcano (Shield)</em>, <em>Golpe Colérico</em>, <em>Desfoque (Blur)</em>, <em>Golpe Estigmatizante</em>, <em>Piscar (Blink)</em>, <em>Arma Elemental</em>, <em>Assassino Fantasmagórico</em> e <em>Golpe Estonteante</em>.</p>`
            : `<p>You always have the following spells prepared: <em>Shield</em>, <em>Wrathful Smite</em>, <em>Blur</em>, <em>Branding Smite</em>, <em>Blink</em>, <em>Elemental Weapon</em>, <em>Phantasmal Killer</em>, and <em>Staggering Smite</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Lâmina Maldita 3" : "Hexblade 3"
      }
    },
    {
      _id: "uahexblademanif1",
      name: isPt ? "Manifestação da Lâmina Maldita" : "Hexblade Manifest",
      type: "feat",
      img: "icons/magic/unholy/strike-body-explode-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, como uma Ação Bônus, você amaldiçoa uma criatura que possa ver a até 9 metros por 1 minuto:</p>
               <ul>
                 <li>Você adiciona seu <strong>Bônus de Proficiência ao dano</strong> contra ela.</li>
                 <li>Seus ataques contra o alvo acertam no <strong>crítico com 19 ou 20</strong>.</li>
                 <li>Se o alvo morrer, você recupera PV iguais ao seu nível de Bruxo + mod Carisma.</li>
                 <li><strong>Guerreiro Maldito:</strong> Você ganha proficiência com Armaduras Médias, Escudos e Armas Marciais, e usa seu <strong>Carisma</strong> para ataque e dano com sua arma de pacto.</li>
               </ul>`
            : `<p>At 3rd level, curse an enemy within 30 feet as a Bonus Action for 1 minute:</p>
               <ul>
                 <li>Add your <strong>Proficiency Bonus to damage</strong> rolls against it.</li>
                 <li>Attack rolls against the cursed target crit on <strong>19 or 20</strong>.</li>
                 <li>If the target dies, you regain HP equal to your Warlock level + Charisma mod.</li>
                 <li><strong>Hex Warrior:</strong> Proficiency with Medium Armor, Shields, Martial Weapons, and use <strong>Charisma</strong> for weapon attack and damage.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Lâmina Maldita 3" : "Hexblade 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "ualifestealer001",
      name: isPt ? "Roubo de Vida (Espectro Maldito)" : "Life Stealer (Accursed Specter)",
      type: "feat",
      img: "icons/magic/death/undead-ghost-shadow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao matar uma criatura humanoide, você pode usar uma Reação para erguer o espírito dela como um <strong>Espectro</strong> a seu serviço até o término do seu próximo Descanso Longo.</p>`
            : `<p>At 6th level, when you slay a humanoid, use a Reaction to bind its spirit, raising it as an <strong>Accursed Specter</strong> under your command until your next Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Lâmina Maldita 6" : "Hexblade 6",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "uaarmorofhexes01",
      name: isPt ? "Armadura de Maldições" : "Armor of Hexes",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-triangle-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, se o alvo da sua maldição atingir você com uma jogada de ataque, você pode usar uma Reação para rolar <strong>1d6</strong>: em um resultado <strong>4 ou superior</strong>, o ataque erra você independentemente do resultado.</p>`
            : `<p>At 10th level, if your cursed target hits you with an attack roll, you can use a Reaction to roll <strong>1d6</strong>: on a <strong>4 or higher</strong>, the attack misses you regardless of the roll.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Lâmina Maldita 10" : "Hexblade 10",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "uamasterfulhex01",
      name: isPt ? "Maldição Mestra" : "Masterful Hex",
      type: "feat",
      img: "icons/magic/control/silhouette-aura-energy-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, quando o alvo amaldiçoado pela sua Manifestação morrer, você pode transferir a maldição imediatamente para outra criatura que possa ver a até 9 metros sem gastar um novo uso.</p>`
            : `<p>At 14th level, when the creature cursed by your Hexblade Manifest dies, you can transfer the curse to another creature within 30 feet without expending a new use.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Lâmina Maldita 14" : "Hexblade 14"
      }
    },

    // ---------------------------------------------------------
    // 8. UNDEAD PATRON (Warlock)
    // ---------------------------------------------------------
    {
      _id: "uaformofdread001",
      name: isPt ? "Forma Pavorosa" : "Form of Dread",
      type: "feat",
      img: "icons/magic/death/skull-horned-goat-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, como uma Ação Bônus, você manifesta um aspecto da morte por 1 minuto:</p>
               <ul>
                 <li>Ganha <strong>Pontos de Vida Temporários iguais a 1d10 + nível de Bruxo</strong>.</li>
                 <li>Você fica <strong>Imune à condição Amedrontado</strong>.</li>
                 <li>Uma vez por turno ao acertar um ataque, pode forçar o alvo a fazer uma <strong>salvaguarda de Sabedoria</strong> ou ficar <strong>Amedrontado</strong> de você até o final do seu próximo turno.</li>
               </ul>
               <p>Usos iguais ao seu Bônus de Proficiência por Descanso Longo.</p>`
            : `<p>At 3rd level, manifest an aspect of dread as a Bonus Action for 1 minute:</p>
               <ul>
                 <li>Gain <strong>Temporary HP equal to 1d10 + Warlock level</strong>.</li>
                 <li><strong>Immune to Frightened</strong> condition.</li>
                 <li>Once per turn on a hit, force the target to make a <strong>Wisdom save</strong> or become <strong>Frightened</strong> of you until end of your next turn.</li>
               </ul>
               <p>Uses equal to Proficiency Bonus per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Insepulto 3" : "Undead 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uaundeadspells01",
      name: isPt ? "Magias do Insepulto" : "Undead Spells",
      type: "feat",
      img: "icons/magic/unholy/energy-smoke-drain-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Perdição</em>, <em>Cegueira/Surdez</em>, <em>Falar com os Mortos</em>, <em>Proteção contra a Morte</em> e <em>Névoa Mortal (Cloudkill)</em>.</p>`
            : `<p>You always have the following spells prepared: <em>Bane</em>, <em>Blindness/Deafness</em>, <em>Speak with Dead</em>, <em>Death Ward</em>, and <em>Cloudkill</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Insepulto 3" : "Undead 3"
      }
    },
    {
      _id: "uagravetouched01",
      name: isPt ? "Tocado pela Sepultura" : "Grave Touched",
      type: "feat",
      img: "icons/magic/unholy/hand-marked-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você não precisa comer, beber ou respirar. Além disso, uma vez por turno ao causar dano, você pode substituir o tipo de dano do ataque por <strong>Necrótico</strong> e adicionar <strong>um dado extra de dano</strong> do mesmo tipo.</p>`
            : `<p>At 6th level, you do not need to eat, drink, or breathe. Once per turn when dealing damage, you can replace the damage type with <strong>Necrotic</strong> and add <strong>one extra damage die</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Insepulto 6" : "Undead 6"
      }
    },
    {
      _id: "uanecrotichusk01",
      name: isPt ? "Casca Necrótica" : "Necrotic Husk",
      type: "feat",
      img: "icons/magic/death/skeleton-skull-horned-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você ganha <strong>Resistência a dano Necrótico</strong> (e Imunidade enquanto em Forma Pavorosa). Ao ser reduzido a 0 PV, você pode explodir em energia necrótica causando dano em 9 metros e retornar com 1 PV (1x por Descanso Longo).</p>`
            : `<p>At 10th level, gain <strong>Resistance to Necrotic damage</strong> (Immunity during Form of Dread). When reduced to 0 HP, explode dealing necrotic damage within 30 feet and revive with 1 HP (1x per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Insepulto 10" : "Undead 10"
      }
    },
    {
      _id: "uasuperiordread1",
      name: isPt ? "Projeção Espiritual" : "Spirit Projection",
      type: "feat",
      img: "icons/magic/perception/silhouette-stealth-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, como uma Ação de Magia, você pode projetar seu espírito para fora do corpo por 1 hora: ganha deslocamento de voo de 9 metros (pairar), resistência a dano concussão/cortante/perfurante e conjura magias de Conjuração e Necromancia sem componentes verbais, somáticos ou materiais sem custo.</p>`
            : `<p>At 14th level, as a Magic action, project your spirit for 1 hour: 30-foot Fly speed (hover), resistance to bludgeoning/piercing/slashing, and cast Conjuration/Necromancy spells with reduced components.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Horror Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Insepulto 14" : "Undead 14",
        activation: { type: "action", cost: 1 }
      }
    },

    // ---------------------------------------------------------
    // 9. ARCANE ARCHER (Fighter)
    // ---------------------------------------------------------
    {
      _id: "uaarcherlore0001",
      name: isPt ? "Tradição do Arqueiro Arcano" : "Arcane Archer Lore",
      type: "feat",
      img: "icons/sundries/books/book-runes-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a teoria mágica élfica: ganha proficiência nas perícias <strong>Arcanismo e Natureza</strong>, e aprende o truque <em>Prestidigitação (Prestidigitation)</em> ou <em>Arte Druídica (Druidcraft)</em> usando Inteligência.</p>`
            : `<p>At 3rd level, gain proficiency in <strong>Arcana and Nature</strong>, and learn either <em>Prestidigitation</em> or <em>Druidcraft</em> using Intelligence.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 3" : "Arcane Archer 3"
      }
    },
    {
      _id: "uaarcaneshot0001",
      name: isPt ? "Disparo Arcano" : "Arcane Shot",
      type: "feat",
      img: "icons/weapons/ammunition/arrows-broadhead-glowing-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a imbuir flechas com magias potentes. Você escolhe duas opções de Disparo Arcano (ex: <em>Disparo Banidor</em>, <em>Explosivo</em>, <em>Enfraquecedor</em>, <em>Buscador</em>, <em>Sombrio</em>, <em>Perfurante</em>).</p>
               <p>Você pode usar Disparo Arcano uma vez por turno ao acertar com uma arma à distância. Você tem <strong>2 usos</strong>, recuperando todos em Descanso Curto ou Longo.</p>`
            : `<p>At 3rd level, infuse ranged attacks with magical effects. Choose two Arcane Shot options (e.g., <em>Banishing</em>, <em>Bursting</em>, <em>Enfeebling</em>, <em>Seeking</em>, <em>Shadow</em>, <em>Piercing</em>).</p>
               <p>You can use an Arcane Shot once per turn on a hit. You have <strong>2 uses</strong>, regaining them on a Short or Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 3" : "Arcane Archer 3",
        uses: { value: 2, max: 2, per: "sr", recovery: "" }
      }
    },
    {
      _id: "uacurvingshot001",
      name: isPt ? "Disparo Curvo" : "Curving Shot",
      type: "feat",
      img: "icons/skills/ranged/arrow-flying-spiral-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, ao fazer um ataque com arma à distância e errar, você pode usar uma Ação Bônus para redirecionar o projétil mágico contra outra criatura a até 18 metros da primeira, fazendo uma nova jogada de ataque.</p>`
            : `<p>At 7th level, when you miss with a ranged attack, take a Bonus Action to curve the shot toward another creature within 60 feet, making a new attack roll.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 7" : "Arcane Archer 7",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uamagicammo00001",
      name: isPt ? "Munição Mágica" : "Magical Ammunition",
      type: "feat",
      img: "icons/weapons/ammunition/arrows-crystal-glowing-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, suas munições disparadas contam como mágicas para sobrepujar resistências e podem emitir luz brilhante mágica ou fixar cordas espectrais.</p>`
            : `<p>At 7th level, your ammunition counts as magical to overcome resistances and can create magical utility effects such as light beacons or anchoring ropes.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 7" : "Arcane Archer 7"
      }
    },
    {
      _id: "uaeverreadyshot1",
      name: isPt ? "Disparo Sempre Pronto" : "Ever-Ready Shot",
      type: "feat",
      img: "icons/skills/ranged/target-bullseye-arrow-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, ao rolar Iniciativa sem nenhum uso de Disparo Arcano restante, você recupera <strong>um uso</strong> imediatamente.</p>`
            : `<p>At 10th level, when you roll Initiative with no remaining uses of Arcane Shot, you immediately regain <strong>one use</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 10" : "Arcane Archer 10"
      }
    },
    {
      _id: "uaarcaneburst001",
      name: isPt ? "Explosão Arcana" : "Arcane Burst",
      type: "feat",
      img: "icons/magic/sonic/explosion-shock-wave-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, quando você usa seu recurso Indomável (Indomitable), você pode liberar uma onda de energia que atordoa criaturas hostis a até 3 metros ou teleporta você 9 metros.</p>`
            : `<p>At 15th level, when you use Indomitable, release a shockwave that disorients adjacent foes or teleports you up to 30 feet.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 15" : "Arcane Archer 15"
      }
    },
    {
      _id: "uamasterfulshot1",
      name: isPt ? "Disparos Mestres" : "Masterful Shots",
      type: "feat",
      img: "icons/skills/ranged/arrows-flying-multiple-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, o dano extra de todas as suas opções de Disparo Arcano aumenta de <strong>2d6 para 4d6</strong>.</p>`
            : `<p>At 18th level, the extra damage dealt by all of your Arcane Shot options increases from <strong>2d6 to 4d6</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Arqueiro Arcano 18" : "Arcane Archer 18"
      }
    },

    // ---------------------------------------------------------
    // 10. TATTOOED WARRIOR (Monk)
    // ---------------------------------------------------------
    {
      _id: "uamagictattoos01",
      name: isPt ? "Tatuagens Mágicas" : "Magic Tattoos",
      type: "feat",
      img: "icons/skills/wounds/injury-scar-stitched-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, sua pele é marcada com tatuagens mágicas que canalizam o seu Foco Espiritual (Ki). Seus ataques desarmados podem causar dano de Força em vez de concussão.</p>`
            : `<p>At 3rd level, your body is inscribed with mystical tattoos channeling your Focus. Your unarmed strikes can deal Force damage instead of bludgeoning.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro Tatuado 3" : "Tattooed Warrior 3"
      }
    },
    {
      _id: "uabeasttattoos01",
      name: isPt ? "Tatuagens das Feras" : "Beast Tattoos",
      type: "feat",
      img: "icons/creatures/claws/claw-glowing-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você escolhe duas tatuagens bestiais (ex: <em>Garra do Tigre</em>, <em>Asa do Falcão</em>, <em>Casco da Tartaruga</em> ou <em>Presa da Serpente</em>), ganhando ataques especiais e mobilidade aprimorada gastando pontos de Foco.</p>`
            : `<p>At 3rd level, choose two beast tattoos (e.g., <em>Tiger's Claw</em>, <em>Falcon's Wing</em>, <em>Turtle Shell</em>, or <em>Viper's Fang</em>) gaining enhanced strikes and defense.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro Tatuado 3" : "Tattooed Warrior 3"
      }
    },
    {
      _id: "uacelestialtatt1",
      name: isPt ? "Tatuagem Celestial" : "Celestial Tattoo",
      type: "feat",
      img: "icons/magic/light/wings-angel-feathered-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você recebe uma tatuagem celestial: ganha deslocamento de Voo igual ao seu deslocamento terrestre quando usar Passo do Vento e resistência a dano Radiante e Necrótico.</p>`
            : `<p>At 6th level, receive a celestial tattoo: gain Fly speed equal to your Speed when using Step of the Wind, and resistance to Radiant and Necrotic damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro Tatuado 6" : "Tattooed Warrior 6"
      }
    },
    {
      _id: "uanaturetattoo01",
      name: isPt ? "Tatuagem da Natureza" : "Nature Tattoo",
      type: "feat",
      img: "icons/magic/nature/tree-spirit-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, sua tatuagem da natureza permite absorver dano elemental e refletir em seus ataques desarmados como dano de fogo, frio ou elétrico.</p>`
            : `<p>At 11th level, your nature tattoo absorbs elemental damage, infusing your unarmed strikes with fire, cold, or lightning.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro Tatuado 11" : "Tattooed Warrior 11"
      }
    },
    {
      _id: "uamonstertattoo1",
      name: isPt ? "Tatuagem dos Monstros" : "Monster Tattoo",
      type: "feat",
      img: "icons/creatures/abilities/dragon-breath-fire-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, você manifesta a tatuagem dos monstros cósmicos: como uma Ação Bônus, expande seu tamanho para Grande, ganha imunidade a condições incapacitantes e seus golpes causam 1d10 extra de força.</p>`
            : `<p>At 17th level, manifest the titan tattoo: as a Bonus Action grow to Large size, gain condition immunities, and deal an extra 1d10 Force damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Guerreiro Tatuado 17" : "Tattooed Warrior 17",
        activation: { type: "bonus", cost: 1 }
      }
    },

    // ---------------------------------------------------------
    // 11. CONJURER (Wizard)
    // ---------------------------------------------------------
    {
      _id: "uabenigntransp01",
      name: isPt ? "Transposição Benigna" : "Benign Transposition",
      type: "feat",
      img: "icons/magic/movement/portal-vortex-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, como uma Ação Bônus, você pode se teletransportar até 9 metros para um espaço desocupado que possa ver, ou trocar de lugar com uma criatura voluntária Pequena ou Média. Recarrega ao conjurar uma magia de Conjuração de 1º círculo ou superior.</p>`
            : `<p>At 3rd level, as a Bonus Action, teleport up to 30 feet to an unoccupied space or swap places with a willing creature. Recharges when casting a 1st+ level Conjuration spell.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 3" : "Conjurer 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "uaconjursavant01",
      name: isPt ? "Especialista em Conjuração" : "Conjuration Savant",
      type: "feat",
      img: "icons/sundries/books/book-open-glow-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você adiciona duas magias de Conjuração de 1º ou 2º círculo ao seu grimório gratuitamente e copiar magias de Conjuração custa metade do ouro e tempo.</p>`
            : `<p>Add two 1st- or 2nd-level Conjuration spells to your spellbook for free, and copying Conjuration spells takes half the gold and time.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 3" : "Conjurer 3"
      }
    },
    {
      _id: "uadistanttransp1",
      name: isPt ? "Transposição Distante" : "Distant Transposition",
      type: "feat",
      img: "icons/magic/movement/trail-streak-zigzag-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, o alcance da sua Transposição Benigna aumenta para <strong>18 metros (60 pés)</strong>.</p>`
            : `<p>At 6th level, the range of your Benign Transposition increases to <strong>60 feet</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 6" : "Conjurer 6"
      }
    },
    {
      _id: "uadurablesummons",
      name: isPt ? "Invocações Duradouras" : "Durable Summons",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, criaturas que você conjurar ou invocar ganham <strong>Pontos de Vida Temporários iguais ao dobro do seu nível de Mago</strong>.</p>`
            : `<p>At 6th level, any creature you summon or create gains <strong>Temporary HP equal to twice your Wizard level</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 6" : "Conjurer 6"
      }
    },
    {
      _id: "uafocusedconjur1",
      name: isPt ? "Conjuração Focada" : "Focused Conjuration",
      type: "feat",
      img: "icons/magic/control/silhouette-hold-beam-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, enquanto você estiver se concentrando em uma magia de Conjuração, sua concentração <strong>não pode ser quebrada como resultado de sofrer dano</strong>.</p>`
            : `<p>At 10th level, while concentrating on a Conjuration spell, your concentration <strong>cannot be broken as a result of taking damage</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 10" : "Conjurer 10"
      }
    },
    {
      _id: "uasplintersummon",
      name: isPt ? "Invocações Fracionadas" : "Splintered Summons",
      type: "feat",
      img: "icons/magic/control/portal-stream-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, ao conjurar uma magia de invocação que crie uma criatura, você pode manifestar duas criaturas em vez de uma (com estatísticas divididas harmoniosamente).</p>`
            : `<p>At 14th level, when casting a summon spell that creates one creature, you can manifest two creatures instead.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Invocador 14" : "Conjurer 14"
      }
    },

    // ---------------------------------------------------------
    // 12. ENCHANTER (Wizard)
    // ---------------------------------------------------------
    {
      _id: "uaenchantsavant1",
      name: isPt ? "Especialista em Encantamento" : "Enchantment Savant",
      type: "feat",
      img: "icons/magic/control/hypnosis-mesmerism-eye-tan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você adiciona duas magias de Encantamento ao seu grimório e copiar magias de Encantamento custa metade do ouro e tempo.</p>`
            : `<p>Add two Enchantment spells to your spellbook for free, and copying Enchantment spells takes half the gold and time.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Encantador 3" : "Enchanter 3"
      }
    },
    {
      _id: "uahypnoticpres01",
      name: isPt ? "Presença Hipnótica" : "Hypnotic Presence",
      type: "feat",
      img: "icons/magic/control/silhouette-aura-energy-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, como uma Ação de Magia, force uma criatura a até 1,5m a fazer uma salvaguarda de Sabedoria ou ficar Enfeitiçada e Incapacitada até o início do seu próximo turno.</p>`
            : `<p>At 3rd level, as a Magic action, force a creature within 5 feet to make a Wisdom save or be Charmed and Incapacitated until end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Encantador 3" : "Enchanter 3",
        activation: { type: "action", cost: 1 }
      }
    },
    {
      _id: "uasplitenchant01",
      name: isPt ? "Encantamento Dividido" : "Split Enchantment",
      type: "feat",
      img: "icons/magic/control/silhouette-grow-shrink-tan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao conjurar uma magia de Encantamento de 1º círculo ou superior que tenha apenas uma criatura como alvo, você pode escolher um <strong>segundo alvo</strong> dentro do alcance.</p>`
            : `<p>At 6th level, when you cast an Enchantment spell of 1st level or higher that targets only one creature, you can target a <strong>second creature</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Encantador 6" : "Enchanter 6"
      }
    },
    {
      _id: "uainstinctcharm1",
      name: isPt ? "Charme Instintivo" : "Instinctive Charm",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, quando uma criatura que você possa ver fizer um ataque contra você, você pode usar uma Reação para forçar uma salvaguarda de Sabedoria: em caso de falha, o ataque é redirecionado para a criatura mais próxima.</p>`
            : `<p>At 10th level, when attacked, take a Reaction to force a Wisdom save on the attacker to redirect the attack to the nearest creature.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Encantador 10" : "Enchanter 10",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "uaaltermemories1",
      name: isPt ? "Alterar Memórias" : "Alter Memories",
      type: "feat",
      img: "icons/magic/perception/brain-think-glow-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, ao enfeitiçar criaturas com magias de Encantamento, elas não percebem que foram enfeitiçadas quando o efeito termina, e você pode fazê-las esquecer detalhes do período.</p>`
            : `<p>At 14th level, creatures you charm do not realize they were charmed, and you can make them forget periods of time.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Encantador 14" : "Enchanter 14"
      }
    },

    // ---------------------------------------------------------
    // 13. NECROMANCER (Wizard)
    // ---------------------------------------------------------
    {
      _id: "uanecromansavant",
      name: isPt ? "Especialista em Necromancia" : "Necromancy Savant",
      type: "feat",
      img: "icons/magic/death/skull-energy-white-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você adiciona duas magias de Necromancia ao seu grimório e copiar magias de Necromancia custa metade do ouro e tempo.</p>`
            : `<p>Add two Necromancy spells to your spellbook for free, and copying Necromancy spells takes half the gold and time.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 3" : "Necromancer 3"
      }
    },
    {
      _id: "uanecromanspellb",
      name: isPt ? "Grimório dos Mortos" : "Necromancy Spellbook",
      type: "feat",
      img: "icons/sundries/books/book-skull-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende o truque <em>Toque Chocante</em> ou <em>Rajada de Veneno</em> modificado para Necromancia, e pode armazenar almas nos pergaminhos do grimório.</p>`
            : `<p>At 3rd level, learn a modified Necromancy cantrip and store soul fragments within your spellbook pages.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 3" : "Necromancer 3"
      }
    },
    {
      _id: "uagravepower0001",
      name: isPt ? "Poder do Túmulo" : "Grave Power",
      type: "feat",
      img: "icons/magic/death/hand-dirt-undead-zombie.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao matar uma ou mais criaturas com uma magia de 1º círculo ou superior, você recupera Pontos de Vida iguais ao dobro do círculo da magia (ou triplo se for Necromancia).</p>`
            : `<p>At 6th level, when you slay creatures with a spell of 1st+ level, regain HP equal to twice the spell level (three times for Necromancy).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 6" : "Necromancer 6"
      }
    },
    {
      _id: "uaundeadthralls1",
      name: isPt ? "Servos Mortos-vivos" : "Undead Thralls",
      type: "feat",
      img: "icons/creatures/undead/skeleton-sword-shield-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você adiciona <em>Animar Mortos (Animate Dead)</em> ao grimório. Seus mortos-vivos criados ganham PV adicionais iguais ao seu nível de Mago e adicionam seu Bônus de Proficiência ao dano.</p>`
            : `<p>At 6th level, add <em>Animate Dead</em> to spellbook. Undead you create have HP increased by Wizard level and add PB to damage rolls.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 6" : "Necromancer 6"
      }
    },
    {
      _id: "uaharvestundead1",
      name: isPt ? "Colheita dos Mortos" : "Harvest Undead",
      type: "feat",
      img: "icons/magic/death/skull-horned-goat-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você tem Resistência a dano Necrótico e seu máximo de PV não pode ser reduzido. Quando um de seus servos mortos-vivos for destruído, você pode absorver a essência dele para curar a si mesmo.</p>`
            : `<p>At 10th level, Resistance to Necrotic damage, max HP cannot be reduced, and absorb destroying undead thralls to heal yourself.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 10" : "Necromancer 10"
      }
    },
    {
      _id: "uadeathsmaster01",
      name: isPt ? "Mestre da Morte" : "Death's Master",
      type: "feat",
      img: "icons/magic/death/undead-skeleton-lich-king-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode comandar mortos-vivos hostis: como uma Ação de Magia, force um morto-vivo a até 18 metros a fazer salvaguarda de Carisma contra sua CD de magia ou se tornar seu servo permanente.</p>`
            : `<p>At 14th level, as a Magic action, force an undead creature within 60 feet to make a Charisma saving throw or become under your permanent command.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Necromante 14" : "Necromancer 14",
        activation: { type: "action", cost: 1 }
      }
    },

    // ---------------------------------------------------------
    // 14. TRANSMUTER (Wizard)
    // ---------------------------------------------------------
    {
      _id: "uatransmutsavant",
      name: isPt ? "Especialista em Transmutação" : "Transmutation Savant",
      type: "feat",
      img: "icons/magic/symbols/runes-carved-stone-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você adiciona duas magias de Transmutação ao seu grimório e copiar magias de Transmutação custa metade do ouro e tempo.</p>`
            : `<p>Add two Transmutation spells to your spellbook for free, and copying Transmutation spells takes half the gold and time.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 3" : "Transmuter 3"
      }
    },
    {
      _id: "uatransmutstone1",
      name: isPt ? "Pedra do Transmutador" : "Transmuter's Stone",
      type: "feat",
      img: "icons/commodities/gems/gem-faceted-rough-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você forja uma pedra mágica especial que concede ao portador um benefício à sua escolha: Visão no Escuro (18m), +3m de velocidade, proficiência em salvaguardas de Constituição ou resistência a um elemento.</p>`
            : `<p>At 3rd level, craft a magic stone granting its bearer a benefit: 60ft Darkvision, +10ft Speed, proficiency in Constitution saves, or elemental resistance.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 3" : "Transmuter 3"
      }
    },
    {
      _id: "uawondrousalter1",
      name: isPt ? "Alteração Prodigiosa" : "Wondrous Alteration",
      type: "feat",
      img: "icons/magic/nature/crystal-growth-glow-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você pode alterar temporariamente as propriedades físicas de materiais mundanos (madeira em metal, pedra em prata, etc.) durante um descanso.</p>`
            : `<p>At 3rd level, temporarily transmute mundane physical substances (wood to iron, stone to silver, etc.) during a rest.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 3" : "Transmuter 3"
      }
    },
    {
      _id: "uaempoweredtrans",
      name: isPt ? "Transmutação Fortalecida" : "Empowered Transmutation",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-diamond-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, sua pedra pode conceder dois benefícios simultâneos ou você pode trocar os benefícios no início de cada turno.</p>`
            : `<p>At 6th level, your stone can confer two simultaneous benefits or be changed quickly.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 6" : "Transmuter 6"
      }
    },
    {
      _id: "uapotentstone001",
      name: isPt ? "Pedra Potente" : "Potent Stone",
      type: "feat",
      img: "icons/commodities/gems/gem-faceted-diamond-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, o portador da pedra pode gastar sua carga para curar todos os PV ou remover todas as maldições e venenos.</p>`
            : `<p>At 10th level, the stone bearer can consume its charge to restore all HP or cure poisons and curses.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 10" : "Transmuter 10"
      }
    },
    {
      _id: "uashapechanger01",
      name: isPt ? "Metamorfo Arcano" : "Shapechanger",
      type: "feat",
      img: "icons/creatures/mammals/wolf-shadow-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você adiciona <em>Metamorfose (Polymorph)</em> ao grimório e pode conjurá-la em si mesmo sem gastar espaço de magia (1x por Descanso Longo).</p>`
            : `<p>At 10th level, add <em>Polymorph</em> to spellbook and cast it on yourself without a spell slot (1x per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 10" : "Transmuter 10"
      }
    },
    {
      _id: "uamastertransmut",
      name: isPt ? "Mestre da Transmutação" : "Master Transmuter",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-horned-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode destruir sua pedra para realizar uma Transmutação Maior: Criar Panaceia (cura total e remoção de condições), Restaurar Juventude ou Reviver os Mortos.</p>`
            : `<p>At 14th level, consume your stone to perform Major Transmutation: Panacea, Restore Youth, or Raise Dead.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Updates" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Transmutador 14" : "Transmuter 14"
      }
    },

    // ---------------------------------------------------------
    // 15. ARCANA DOMAIN (Cleric)
    // ---------------------------------------------------------
    {
      _id: "uaarcanaspells01",
      name: isPt ? "Magias do Domínio da Arcana" : "Arcana Domain Spells",
      type: "feat",
      img: "icons/sundries/books/book-runes-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Mísseis Mágicos</em>, <em>Detectar Magia</em>, <em>Arma Mágica</em>, <em>Passo Nebuloso</em>, <em>Dissipar Magia</em>, <em>Velocidade</em>, <em>Olho Arcano</em> e <em>Porta Dimensional</em>.</p>`
            : `<p>You always have prepared: <em>Magic Missile</em>, <em>Detect Magic</em>, <em>Magic Weapon</em>, <em>Misty Step</em>, <em>Dispel Magic</em>, <em>Haste</em>, <em>Arcane Eye</em>, and <em>Dimension Door</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio da Arcana 3" : "Arcana Domain 3"
      }
    },
    {
      _id: "uaarcanainitiate",
      name: isPt ? "Iniciado Arcano" : "Arcane Initiate",
      type: "feat",
      img: "icons/magic/light/projectile-smoke-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência em Arcanismo e aprende <strong>dois truques da lista de Mago</strong> à sua escolha, que contam como magias de Clérigo para você.</p>`
            : `<p>At 3rd level, gain Arcana proficiency and learn <strong>two Wizard cantrips</strong> of your choice as Cleric spells.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio da Arcana 3" : "Arcana Domain 3"
      }
    },
    {
      _id: "uaarcanaabjurat1",
      name: isPt ? "Abjuração de Quebra de Feitiço" : "Spellbreaker Abjuration",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao restaurar PV de um aliado com uma magia de 1º círculo ou superior, você também encerra uma magia de círculo igual ou menor que esteja afetando o alvo.</p>`
            : `<p>At 6th level, when healing an ally with a 1st+ level spell, also end one spell of equal or lower level affecting the target.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio da Arcana 6" : "Arcana Domain 6"
      }
    },
    {
      _id: "uaarcanamastery1",
      name: isPt ? "Maestria Arcana" : "Arcane Mastery",
      type: "feat",
      img: "icons/magic/symbols/triangle-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, você escolhe quatro magias da lista de Mago (uma de 6º, uma de 7º, uma de 8º e uma de 9º círculo) para adicionar à sua lista de magias sempre preparadas de Clérigo.</p>`
            : `<p>At 17th level, choose four Wizard spells (one each of 6th, 7th, 8th, and 9th level) to add to your prepared Cleric spells.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Domínio da Arcana 17" : "Arcana Domain 17"
      }
    },

    // ---------------------------------------------------------
    // 16. ANCESTRAL SORCERY (Sorcerer)
    // ---------------------------------------------------------
    {
      _id: "uaancestralspell",
      name: isPt ? "Magias Ancestrais" : "Ancestral Spells",
      type: "feat",
      img: "icons/magic/fire/spirit-soul-flame-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas: <em>Bênção</em>, <em>Oração de Cura</em>, <em>Espíritos Guardiões</em>, <em>Proteção contra a Morte</em> e <em>Comunhão</em>.</p>`
            : `<p>You always have prepared: <em>Bless</em>, <em>Prayer of Healing</em>, <em>Spirit Guardians</em>, <em>Death Ward</em>, and <em>Commune</em>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria Ancestral 3" : "Ancestral Sorcery 3"
      }
    },
    {
      _id: "uaancestralguide",
      name: isPt ? "Guia Ancestral" : "Ancestral Guide",
      type: "feat",
      img: "icons/magic/perception/mind-flayer-glowing-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você pode invocar o conselho dos espíritos de seus antepassados: ganha bônus de 1d4 em testes de perícia e pode gastar 1 Ponto de Feitiçaria para ter Vantagem em salvaguardas mentais.</p>`
            : `<p>At 3rd level, consult ancestor spirits for a 1d4 bonus on skill checks and spend 1 Sorcery Point for Advantage on mental saves.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria Ancestral 3" : "Ancestral Sorcery 3"
      }
    },
    {
      _id: "uaspiritualarmor",
      name: isPt ? "Armadura Espiritual" : "Spiritual Armor",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, os espíritos ancestrais formam um escudo protetor: sua CA se torna 13 + mod Carisma enquanto não usar armadura, e você pode absorver dano direcionado a aliados adjacentes.</p>`
            : `<p>At 6th level, ancestors shield you: unarmored AC becomes 13 + Charisma mod, and you can intercept damage for nearby allies.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria Ancestral 6" : "Ancestral Sorcery 6"
      }
    },
    {
      _id: "uaancestralcall1",
      name: isPt ? "Chamado dos Ancestrais" : "Ancestral Call",
      type: "feat",
      img: "icons/magic/sonic/sound-wave-explosion-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode conjurar <em>Conjurar Descendente Celestial/Espiritual</em> gastando 4 Pontos de Feitiçaria sem gastar espaço de magia.</p>`
            : `<p>At 14th level, summon an ancestral spirit warrior by spending 4 Sorcery Points without expending a spell slot.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria Ancestral 14" : "Ancestral Sorcery 14"
      }
    },
    {
      _id: "uaancientavatars",
      name: isPt ? "Avatar dos Antigos" : "Avatar of the Ancients",
      type: "feat",
      img: "icons/magic/light/explosion-star-glow-silhouette.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, como uma Ação Bônus, você se torna o receptáculo vivo de sua linhagem ancestral por 1 minuto: ganha resistência a dano de armas, voo de 18m e pode re-rolar dados de magias.</p>`
            : `<p>At 18th level, as a Bonus Action become the living vessel of your bloodline for 1 minute: weapon resistance, 60ft Fly speed, and reroll spell damage dice.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Arcane Subclasses" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Feitiçaria Ancestral 18" : "Ancestral Sorcery 18",
        activation: { type: "bonus", cost: 1 }
      }
    }
  ];
}

// =============================================================
// 2. SUBCLASSES (ua-subclasses.json)
// =============================================================

function buildSubclasses(isPt) {
  return [
    // 1. Reanimator (Artificer)
    {
      _id: "uasubreanimator0",
      name: isPt ? "Reanimador" : "Reanimator",
      type: "subclass",
      img: "icons/magic/death/skull-energy-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Reanimadores desafiam as leis naturais da biologia e da morte. Esses artífices sombrios costuram servos a partir de corpos disparatados, usam magia voltaica para fortalecer a vida e transformam a necromancia em uma ciência aterradora.</p>`
            : `<p>Reanimators defy the laws of nature in pursuit of gruesome experiment, stitching together undead servants from disparate corpses and fusing necromancy with voltaic science.</p>`,
          chat: ""
        },
        identifier: "reanimator",
        classIdentifier: "artificer",
        advancement: [
          {
            _id: "advreannv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Reanimador (Nível 3)" : "Reanimator Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uareanspells0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uajolttolife0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uareancompani001" }
              ]
            }
          },
          {
            _id: "advreannv0000005",
            type: "ItemGrant",
            level: 5,
            title: isPt ? "Recurso do Reanimador (Nível 5)" : "Reanimator Feature (Level 5)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uareanmodific001" }
              ]
            }
          },
          {
            _id: "advreannv0000009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso do Reanimador (Nível 9)" : "Reanimator Feature (Level 9)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uareanimproved01" }
              ]
            }
          },
          {
            _id: "advreannv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Reanimador (Nível 15)" : "Reanimator Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uareanpromethe01" }
              ]
            }
          }
        ]
      }
    },

    // 2. College of Spirits (Bard)
    {
      _id: "uasubspiritbard0",
      name: isPt ? "Colégio dos Espíritos" : "College of Spirits",
      type: "subclass",
      img: "icons/magic/symbols/circle-outer-ring-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bardos do Colégio dos Espíritos buscam contos do além, sussurrados por almas desencarnadas e assombrações ancestrais, canalizando seus poderes através de focos místicos.</p>`
            : `<p>Bards of the College of Spirits seek tales from beyond, whispered by discarnate souls and ancestral phantoms, channeling otherworldy lore through spiritual foci.</p>`,
          chat: ""
        },
        identifier: "spirits",
        classIdentifier: "bard",
        advancement: [
          {
            _id: "advspirnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos dos Espíritos (Nível 3)" : "Spirits Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspirchanneler1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspirbeyond0001" }
              ]
            }
          },
          {
            _id: "advspirnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso dos Espíritos (Nível 6)" : "Spirits Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspirempowered1" }
              ]
            }
          },
          {
            _id: "advspirnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso dos Espíritos (Nível 14)" : "Spirits Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspirmysticconn" }
              ]
            }
          }
        ]
      }
    },

    // 3. Grave Domain (Cleric)
    {
      _id: "uasubgravecleric",
      name: isPt ? "Domínio do Túmulo" : "Grave Domain",
      type: "subclass",
      img: "icons/magic/death/grave-tombstone-cross-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Deuses da sepultura vigiam a fronteira sagrada entre a vida e a morte. Para esses clérigos, a morte é parte da jornada cósmica natural, e a morte-vida é uma abominação a ser expurgada.</p>`
            : `<p>Gods of the grave watch over the sacred boundary between life and death. To these clerics, death is a natural transition, and undeath is a desecration to be laid to rest.</p>`,
          chat: ""
        },
        identifier: "grave",
        classIdentifier: "cleric",
        advancement: [
          {
            _id: "advgravnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Túmulo (Nível 3)" : "Grave Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravecircle001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravespells001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapathtothegrav1" }
              ]
            }
          },
          {
            _id: "advgravnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Túmulo (Nível 6)" : "Grave Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravesentinel1" }
              ]
            }
          },
          {
            _id: "advgravnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Túmulo (Nível 17)" : "Grave Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravereaper001" }
              ]
            }
          }
        ]
      }
    },

    // 4. Hollow Warden (Ranger)
    {
      _id: "uasubhollowward1",
      name: isPt ? "Guardião Oco" : "Hollow Warden",
      type: "subclass",
      img: "icons/magic/nature/root-vine-glow-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Patrulheiros que se unem aos espíritos de florestas antigas e decaídas, canalizando a força do ciclo da podridão para punir violadores da natureza.</p>`
            : `<p>Rangers who commune with hollow, ancient, decayed woods, channeling rot and rebirth to hunt those who violate the wild.</p>`,
          chat: ""
        },
        identifier: "hollow-warden",
        classIdentifier: "ranger",
        advancement: [
          {
            _id: "advhollnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Guardião Oco (Nível 3)" : "Hollow Warden Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uahollowspells01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawrathofthewild" }
              ]
            }
          },
          {
            _id: "advhollnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Guardião Oco (Nível 7)" : "Hollow Warden Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uahungeringmigh1" }
              ]
            }
          },
          {
            _id: "advhollnv0000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso do Guardião Oco (Nível 11)" : "Hollow Warden Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uarotandviolence" }
              ]
            }
          },
          {
            _id: "advhollnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Guardião Oco (Nível 15)" : "Hollow Warden Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaancientenduran" }
              ]
            }
          }
        ]
      }
    },

    // 5. Phantom (Rogue)
    {
      _id: "uasubphantomrogu",
      name: isPt ? "Fantasma" : "Phantom",
      type: "subclass",
      img: "icons/magic/death/skull-screaming-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres da morte que caminham na tênue fronteira entre a vida e o mundo espiritual, colhendo fetiches das almas dos que tombam diante deles.</p>`
            : `<p>Masters of death who walk the borderline between life and the spirit world, harvesting soul trinkets from the fallen.</p>`,
          chat: ""
        },
        identifier: "phantom",
        classIdentifier: "rogue",
        advancement: [
          {
            _id: "advphannv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Fantasma (Nível 3)" : "Phantom Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawhispersdead01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawailsfromgrav1" }
              ]
            }
          },
          {
            _id: "advphannv0000009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso do Fantasma (Nível 9)" : "Phantom Feature (Level 9)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uatokensofdepart" }
              ]
            }
          },
          {
            _id: "advphannv0000013",
            type: "ItemGrant",
            level: 13,
            title: isPt ? "Recurso do Fantasma (Nível 13)" : "Phantom Feature (Level 13)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaghostwalk00001" }
              ]
            }
          },
          {
            _id: "advphannv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Fantasma (Nível 17)" : "Phantom Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadeathsfriend01" }
              ]
            }
          }
        ]
      }
    },

    // 6. Shadow Sorcery (Sorcerer)
    {
      _id: "uasubshadowsorce",
      name: isPt ? "Feitiçaria das Sombras" : "Shadow Sorcery",
      type: "subclass",
      img: "icons/magic/unholy/silhouette-evil-horned-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Feiticeiros cuja faísca de magia provém da escuridão eterna do Pendor das Sombras (Shadowfell), moldando a escuridão em barreiras e convocando cães espectrais.</p>`
            : `<p>Sorcerers whose innate spark of power is drawn from the Fell darkness of the Shadowfell, manipulating gloom and hounds of ill omen.</p>`,
          chat: ""
        },
        identifier: "shadow",
        classIdentifier: "sorcerer",
        advancement: [
          {
            _id: "advshadnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos das Sombras (Nível 3)" : "Shadow Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaeyesofdark0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uashadowspells01" }
              ]
            }
          },
          {
            _id: "advshadnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso das Sombras (Nível 6)" : "Shadow Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspiritsillomen" }
              ]
            }
          },
          {
            _id: "advshadnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso das Sombras (Nível 14)" : "Shadow Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uashadowwalk0001" }
              ]
            }
          },
          {
            _id: "advshadnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso das Sombras (Nível 18)" : "Shadow Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaumbralform0001" }
              ]
            }
          }
        ]
      }
    },

    // 7. Hexblade Patron (Warlock)
    {
      _id: "uasubhexbladewar",
      name: isPt ? "Patrono Lâmina Maldita" : "Hexblade Patron",
      type: "subclass",
      img: "icons/weapons/swords/sword-broad-glowing-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bruxos que firmaram pacto com uma entidade do Pendor das Sombras que se manifesta através de armas sencientes forjadas em sombras e almas ceifadas.</p>`
            : `<p>Warlocks who bind themselves to a mysterious entity of the Shadowfell that manifests through sentient blades carved of shadow and soulcraft.</p>`,
          chat: ""
        },
        identifier: "hexblade",
        classIdentifier: "warlock",
        advancement: [
          {
            _id: "advhexbnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Lâmina Maldita (Nível 3)" : "Hexblade Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uahexbladespell1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uahexblademanif1" }
              ]
            }
          },
          {
            _id: "advhexbnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Lâmina Maldita (Nível 6)" : "Hexblade Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.ualifestealer001" }
              ]
            }
          },
          {
            _id: "advhexbnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso da Lâmina Maldita (Nível 10)" : "Hexblade Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarmorofhexes01" }
              ]
            }
          },
          {
            _id: "advhexbnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso da Lâmina Maldita (Nível 14)" : "Hexblade Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamasterfulhex01" }
              ]
            }
          }
        ]
      }
    },

    // 8. Undead Patron (Warlock)
    {
      _id: "uasubundeadwlk01",
      name: isPt ? "Patrono Insepulto" : "Undead Patron",
      type: "subclass",
      img: "icons/magic/death/skull-horned-goat-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Seu patrono é um lorde da morte-vida — como um Lich primordial, vampiro ancestral ou múmia soberana — que compartilha os segredos além do túmulo.</p>`
            : `<p>Your patron is a master of undeath — such as an ancient lich, elder vampire, or mummy lord — conferring the dark boons of eternity.</p>`,
          chat: ""
        },
        identifier: "undead",
        classIdentifier: "warlock",
        advancement: [
          {
            _id: "advunddnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Insepulto (Nível 3)" : "Undead Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaformofdread001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaundeadspells01" }
              ]
            }
          },
          {
            _id: "advunddnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Insepulto (Nível 6)" : "Undead Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravetouched01" }
              ]
            }
          },
          {
            _id: "advunddnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Insepulto (Nível 10)" : "Undead Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uanecrotichusk01" }
              ]
            }
          },
          {
            _id: "advunddnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Insepulto (Nível 14)" : "Undead Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasuperiordread1" }
              ]
            }
          }
        ]
      }
    },

    // 9. Arcane Archer (Fighter)
    {
      _id: "uasubfgtarcanear",
      name: isPt ? "Arqueiro Arcano" : "Arcane Archer",
      type: "subclass",
      img: "icons/weapons/ammunition/arrows-broadhead-glowing-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Guerreiros que dominam a milenar arte élfica de fundir magia nas flechas e disparos de combate, desencadeando efeitos mágicos devastadores.</p>`
            : `<p>Fighters who master the ancient elven tradition of weaving arcane magic into archery, producing supernatural and devastating effects.</p>`,
          chat: ""
        },
        identifier: "arcane-archer",
        classIdentifier: "fighter",
        advancement: [
          {
            _id: "advarcanv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Arqueiro Arcano (Nível 3)" : "Arcane Archer Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcherlore0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcaneshot0001" }
              ]
            }
          },
          {
            _id: "advarcanv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recursos do Arqueiro Arcano (Nível 7)" : "Arcane Archer Features (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uacurvingshot001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamagicammo00001" }
              ]
            }
          },
          {
            _id: "advarcanv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Arqueiro Arcano (Nível 10)" : "Arcane Archer Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaeverreadyshot1" }
              ]
            }
          },
          {
            _id: "advarcanv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Arqueiro Arcano (Nível 15)" : "Arcane Archer Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcaneburst001" }
              ]
            }
          },
          {
            _id: "advarcanv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso do Arqueiro Arcano (Nível 18)" : "Arcane Archer Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamasterfulshot1" }
              ]
            }
          }
        ]
      }
    },

    // 10. Tattooed Warrior (Monk)
    {
      _id: "uasubmonktattoo1",
      name: isPt ? "Guerreiro Tatuado" : "Tattooed Warrior",
      type: "subclass",
      img: "icons/skills/wounds/injury-scar-stitched-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Monges que transcrevem a energia do cosmos em tatuagens mágicas vivas sobre o corpo, manifestando o poder de feras ancestrais, celestiais e titãs.</p>`
            : `<p>Monks who etch arcane cosmic power directly into living mystical tattoos across their skin, channeling beasts, celestials, and titans.</p>`,
          chat: ""
        },
        identifier: "tattooed-warrior",
        classIdentifier: "monk",
        advancement: [
          {
            _id: "advtatwnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Guerreiro Tatuado (Nível 3)" : "Tattooed Warrior Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamagictattoos01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabeasttattoos01" }
              ]
            }
          },
          {
            _id: "advtatwnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Guerreiro Tatuado (Nível 6)" : "Tattooed Warrior Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uacelestialtatt1" }
              ]
            }
          },
          {
            _id: "advtatwnv0000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso do Guerreiro Tatuado (Nível 11)" : "Tattooed Warrior Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uanaturetattoo01" }
              ]
            }
          },
          {
            _id: "advtatwnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Guerreiro Tatuado (Nível 17)" : "Tattooed Warrior Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonstertattoo1" }
              ]
            }
          }
        ]
      }
    },

    // 11. Conjurer (Wizard)
    {
      _id: "uasubwizconjurer",
      name: isPt ? "Invocador" : "Conjurer",
      type: "subclass",
      img: "icons/magic/movement/portal-vortex-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Magos dedicados à escola de Conjuração, capazes de transpor o espaço instantaneamente e invocar criaturas resistentes e fortalecidas do multiverso.</p>`
            : `<p>Wizards who specialize in Conjuration magic, teleporting effortlessly through space and summoning durable thralls of the multiverse.</p>`,
          chat: ""
        },
        identifier: "conjurer",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advcnjwnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Invocador (Nível 3)" : "Conjurer Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabenigntransp01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaconjursavant01" }
              ]
            }
          },
          {
            _id: "advcnjwnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Invocador (Nível 6)" : "Conjurer Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadistanttransp1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadurablesummons" }
              ]
            }
          },
          {
            _id: "advcnjwnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Invocador (Nível 10)" : "Conjurer Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafocusedconjur1" }
              ]
            }
          },
          {
            _id: "advcnjwnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Invocador (Nível 14)" : "Conjurer Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasplintersummon" }
              ]
            }
          }
        ]
      }
    },

    // 12. Enchanter (Wizard)
    {
      _id: "uasubwizenchante",
      name: isPt ? "Encantador" : "Enchanter",
      type: "subclass",
      img: "icons/magic/control/hypnosis-mesmerism-eye-tan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres da persuasão e manipulação mágica da mente, dobrando a vontade de adversários e dividindo feitiços sobre múltiplos alvos.</p>`
            : `<p>Masters of magical charm and mental manipulation, bending minds and splitting enchantments across multiple adversaries.</p>`,
          chat: ""
        },
        identifier: "enchanter",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advencwnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Encantador (Nível 3)" : "Enchanter Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaenchantsavant1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uahypnoticpres01" }
              ]
            }
          },
          {
            _id: "advencwnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Encantador (Nível 6)" : "Enchanter Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasplitenchant01" }
              ]
            }
          },
          {
            _id: "advencwnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Encantador (Nível 10)" : "Enchanter Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uainstinctcharm1" }
              ]
            }
          },
          {
            _id: "advencwnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Encantador (Nível 14)" : "Enchanter Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaaltermemories1" }
              ]
            }
          }
        ]
      }
    },

    // 13. Necromancer (Wizard)
    {
      _id: "uasubwiznecroman",
      name: isPt ? "Necromante" : "Necromancer",
      type: "subclass",
      img: "icons/magic/death/skull-energy-white-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Estudiosos dos mistérios da morte e forças necróticas que erguem legiões de mortos-vivos com vitalidade intensificada e colhem almas.</p>`
            : `<p>Scholars of the mysteries of life and death, commanding empowered undead hordes and reaping the vitality of slain foes.</p>`,
          chat: ""
        },
        identifier: "necromancer",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advnecrnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Necromante (Nível 3)" : "Necromancer Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uanecromansavant" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uanecromanspellb" }
              ]
            }
          },
          {
            _id: "advnecrnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Necromante (Nível 6)" : "Necromancer Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uagravepower0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaundeadthralls1" }
              ]
            }
          },
          {
            _id: "advnecrnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Necromante (Nível 10)" : "Necromancer Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaharvestundead1" }
              ]
            }
          },
          {
            _id: "advnecrnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Necromante (Nível 14)" : "Necromancer Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadeathsmaster01" }
              ]
            }
          }
        ]
      }
    },

    // 14. Transmuter (Wizard)
    {
      _id: "uasubwiztransmut",
      name: isPt ? "Transmutador" : "Transmuter",
      type: "subclass",
      img: "icons/magic/symbols/runes-carved-stone-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres da alquimia e modificação da matéria física que forjam a Pedra do Transmutador para conceder bênçãos arcanas e transmutar elementos.</p>`
            : `<p>Masters of alchemy and physical alteration who forge the Transmuter's Stone to bestow elemental resilience and miraculous transformations.</p>`,
          chat: ""
        },
        identifier: "transmuter",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advtrnsnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Transmutador (Nível 3)" : "Transmuter Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uatransmutsavant" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uatransmutstone1" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawondrousalter1" }
              ]
            }
          },
          {
            _id: "advtrnsnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Transmutador (Nível 6)" : "Transmuter Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaempoweredtrans" }
              ]
            }
          },
          {
            _id: "advtrnsnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recursos do Transmutador (Nível 10)" : "Transmuter Features (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapotentstone001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uashapechanger01" }
              ]
            }
          },
          {
            _id: "advtrnsnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Transmutador (Nível 14)" : "Transmuter Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamastertransmut" }
              ]
            }
          }
        ]
      }
    },

    // 15. Arcana Domain (Cleric)
    {
      _id: "uasubarcanacleri",
      name: isPt ? "Domínio da Arcana" : "Arcana Domain",
      type: "subclass",
      img: "icons/sundries/books/book-runes-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Clérigos que servem divindades da magia, tecendo a pureza da fé divina com os segredos dos conjuradores arcanos e desfazendo encantamentos.</p>`
            : `<p>Clerics who worship deities of magic, weaving divine reverence with arcane secrets and unraveling adverse enchantments.</p>`,
          chat: ""
        },
        identifier: "arcana",
        classIdentifier: "cleric",
        advancement: [
          {
            _id: "advarcdnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Arcana (Nível 3)" : "Arcana Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcanaspells01" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcanainitiate" }
              ]
            }
          },
          {
            _id: "advarcdnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Arcana (Nível 6)" : "Arcana Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcanaabjurat1" }
              ]
            }
          },
          {
            _id: "advarcdnv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso da Arcana (Nível 17)" : "Arcana Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaarcanamastery1" }
              ]
            }
          }
        ]
      }
    },

    // 16. Ancestral Sorcery (Sorcerer)
    {
      _id: "uasubancestrals1",
      name: isPt ? "Feitiçaria Ancestral" : "Ancestral Sorcery",
      type: "subclass",
      img: "icons/magic/fire/spirit-soul-flame-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Feiticeiros cujos poderes despertam da comunhão com os espíritos e legados imortais de seus honrados antepassados.</p>`
            : `<p>Sorcerers whose powers awaken through communion with the enduring spirits and heroic legends of their ancestral bloodline.</p>`,
          chat: ""
        },
        identifier: "ancestral",
        classIdentifier: "sorcerer",
        advancement: [
          {
            _id: "advancsnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos Ancestrais (Nível 3)" : "Ancestral Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaancestralspell" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaancestralguide" }
              ]
            }
          },
          {
            _id: "advancsnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso Ancestral (Nível 6)" : "Ancestral Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaspiritualarmor" }
              ]
            }
          },
          {
            _id: "advancsnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso Ancestral (Nível 14)" : "Ancestral Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaancestralcall1" }
              ]
            }
          },
          {
            _id: "advancsnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso Ancestral (Nível 18)" : "Ancestral Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaancientavatars" }
              ]
            }
          }
        ]
      }
    }
  ];
}

// =============================================================
// EXECUÇÃO DO BUILD
// =============================================================

const enFeatures = buildFeatures(false);
const ptFeatures = buildFeatures(true);
saveFiles("ua-features.json", enFeatures, ptFeatures);

const enSubclasses = buildSubclasses(false);
const ptSubclasses = buildSubclasses(true);
saveFiles("ua-subclasses.json", enSubclasses, ptSubclasses);

console.log("UA Subclasses and Features generated successfully for pt-BR and en!");
