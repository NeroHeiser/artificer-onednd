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
// 1. CARACTERÍSTICAS (FEATURES)
// =============================================================

function buildFeatures(isPt) {
  return [
    {
      _id: "whfeatbane000001",
      name: isPt ? "Perdição do Caçador" : "Hunter's Bane",
      type: "feat",
      img: "icons/magic/perception/eye-slit-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sobreviveu à Perdição do Caçador, um ritual secreto que altera seu sangue com magia sombria.</p>
               <p>Você adiciona seu modificador de <strong>Inteligência</strong> a testes de Sabedoria (Sobrevivência) para rastrear Fadas, Corruptores e Mortos-vivos, bem como a testes de Inteligência para recordar informações sobre eles.</p>
               <p>Além disso, você tem vantagem em testes de Sabedoria (Intuição) e Carisma (Intimidação).</p>`
            : `<p>You have survived the Hunter's Bane, a secret ritual that alters your blood with dark magic.</p>
               <p>You add your <strong>Intelligence modifier</strong> to Wisdom (Survival) checks to track fey, fiends, and undead, and to Intelligence checks to recall lore about them.</p>
               <p>In addition, you gain advantage on Wisdom (Insight) and Charisma (Intimidation) checks.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 1" : "Witch Hunter 1"
      }
    },
    {
      _id: "whfeatbloodmaled",
      name: isPt ? "Sangue Maldito" : "Blood Maledict",
      type: "feat",
      img: "icons/magic/unholy/strike-body-explode-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você aprende a controlar a magia de sangue para amaldiçoar seus inimigos.</p>
               <p>Você pode invocar uma <strong>Maldição de Sangue</strong> que conheça gastando um uso de Sangue Maldito. Você recupera todos os usos ao terminar um Descanso Curto ou Longo.</p>
               <p><strong>Amplificar:</strong> Ao invocar uma maldição, você pode optar por amplificá-la sofrendo dano igual a uma rolagem do seu <strong>Dado de Hemomancia</strong>. Este dano não pode ser reduzido ou evitado.</p>
               <p><strong>CD de Hemomancia:</strong> 8 + seu Bônus de Proficiência + seu modificador de Inteligência.</p>`
            : `<p>You gain the ability to channel, and sacrifice, a part of your vital essence to curse and manipulate creatures through hemocraft.</p>
               <p>You can invoke a <strong>Blood Curse</strong> you know by expending one use of Blood Maledict. You regain all expended uses when you finish a Short or Long Rest.</p>
               <p><strong>Amplify:</strong> When invoking a blood curse, you can choose to amplify it by suffering damage equal to one roll of your <strong>Hemocraft die</strong>. This damage can't be reduced or avoided in any way.</p>
               <p><strong>Hemocraft Save DC:</strong> 8 + your Proficiency Bonus + your Intelligence modifier.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 1" : "Witch Hunter 1",
        uses: {
          value: 1,
          max: "@scale.witch-hunter.blood-maledict-uses",
          per: "sr",
          recovery: ""
        }
      }
    },
    {
      _id: "whfeatwepmaster1",
      name: isPt ? "Maestria em Armas (2024)" : "Weapon Mastery (2024)",
      type: "feat",
      img: "icons/skills/melee/weapons-crossed-swords-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Seu rigoroso treinamento em combate marcial permite que você utilize as propriedades de maestria de armas com maestria mortal (One D&D / 2024).</p>
               <p>Escolha <strong>2 tipos de armas</strong> simples ou marciais com as quais você tem proficiência (como Espada Grande, Arco Longo, Rapieira ou Machado Grande). Sempre que empunhar uma arma escolhida, você pode ativar sua propriedade de maestria (ex: <em>Cleave</em>, <em>Graze</em>, <em>Nick</em>, <em>Push</em>, <em>Sap</em>, <em>Slow</em>, <em>Topple</em> ou <em>Vex</em>).</p>
               <p>Sempre que terminar um <strong>Descanso Longo</strong>, você pode trocar qualquer uma das armas escolhidas por outro tipo de arma qualificado.</p>`
            : `<p>Your rigorous training with weapons allows you to tap into the mastery properties of weapons (One D&D / 2024).</p>
               <p>Choose <strong>2 weapon types</strong> (simple or martial) with which you are proficient. Whenever you wield a chosen weapon, you can use its weapon mastery property (such as <em>Cleave</em>, <em>Graze</em>, <em>Nick</em>, <em>Push</em>, <em>Sap</em>, <em>Slow</em>, <em>Topple</em>, or <em>Vex</em>).</p>
               <p>Whenever you finish a <strong>Long Rest</strong>, you can change your weapon choices to other eligible weapon types.</p>`,
          chat: ""
        },
        source: { custom: "Player's Handbook (2024) / One D&D" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 1" : "Witch Hunter 1"
      }
    },
    {
      _id: "whfeatfightstyl1",
      name: isPt ? "Estilo de Luta" : "Fighting Style",
      type: "feat",
      img: "icons/skills/melee/sword-shield-silver.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 2º nível, você adota um estilo de combate particular como sua especialidade. Escolha uma das seguintes opções:</p>
               <ul>
                 <li><strong>Arquearia:</strong> +2 de bônus nas jogadas de ataque com armas à distância.</li>
                 <li><strong>Duelismo:</strong> +2 de dano quando empunhar uma arma corpo-a-corpo em uma mão e nenhuma outra arma.</li>
                 <li><strong>Combate com Armas Grandes:</strong> Re-rola resultados 1 ou 2 no dano com armas empunhadas com duas mãos.</li>
                 <li><strong>Combate com Duas Armas:</strong> Adiciona o modificador de atributo no dano do ataque feito como Ação Bônus.</li>
               </ul>`
            : `<p>At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options:</p>
               <ul>
                 <li><strong>Archery:</strong> +2 bonus to attack rolls made with ranged weapons.</li>
                 <li><strong>Dueling:</strong> +2 bonus to damage rolls when wielding a melee weapon in one hand and no other weapons.</li>
                 <li><strong>Great Weapon Fighting:</strong> Reroll a 1 or 2 on damage dice for attacks made with a two-handed melee weapon.</li>
                 <li><strong>Two-Weapon Fighting:</strong> Add your ability modifier to the damage of the bonus action attack.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 2" : "Witch Hunter 2"
      }
    },
    {
      _id: "whfeatcrimsonrit",
      name: isPt ? "Ritual Carmesim" : "Crimson Rite",
      type: "feat",
      img: "icons/magic/fire/dagger-rune-enchant-flame-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 2º nível, você aprende a despertar o poder elemental oculto no seu sangue para imbuir suas armas.</p>
               <p>Como uma <strong>Ação Bônus</strong>, você pode ativar um ritual carmesim em uma única arma que estiver segurando. Ao fazê-lo, você sofre dano igual a <strong>1 rolagem do seu Dado de Hemomancia</strong>. Este dano não pode ser reduzido nem prevenido.</p>
               <p>Enquanto o ritual estiver ativo, ataques com essa arma causam <strong>dano elemental extra igual a uma rolagem do seu Dado de Hemomancia</strong>. O ritual dura até você terminar um Descanso Curto ou Longo, ou até que a arma saia das suas mãos.</p>
               <p><strong>Rituais Primais:</strong> Você escolhe um ritual primal no 2º nível (Ritual das Chamas, do Congelamento ou da Tempestade) e outro no 7º nível.</p>`
            : `<p>At 2nd level, you learn to invoke a rite of hemocraft that infuses your weapon strikes with elemental energy.</p>
               <p>As a <strong>Bonus Action</strong>, you can activate a crimson rite on a single weapon you are holding. When you do, you suffer damage equal to <strong>one roll of your Hemocraft die</strong>. This damage cannot be reduced or prevented in any way.</p>
               <p>While active, attacks from this weapon deal an <strong>extra elemental damage equal to one roll of your Hemocraft die</strong>. The rite lasts until you finish a Short or Long Rest, or until the weapon leaves your grip.</p>
               <p><strong>Primal Rites:</strong> You choose one primal rite at 2nd level (Rite of the Flame, Frozen, or Storm) and another at 7th level.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 2" : "Witch Hunter 2",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whfeatextraattk1",
      name: isPt ? "Ataque Extra" : "Extra Attack",
      type: "feat",
      img: "icons/skills/melee/strike-weapons-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A partir do 5º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque no seu turno.</p>`
            : `<p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 5" : "Witch Hunter 5"
      }
    },
    {
      _id: "whfeatbrandcast1",
      name: isPt ? "Marca do Castigo" : "Brand of Castigation",
      type: "feat",
      img: "icons/magic/fire/flame-burning-mark-symbol.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, sempre que atingir uma criatura com uma arma imbuída pelo seu Ritual Carmesim, você pode gravar uma marca arcana de hemomancia na criatura (1 vez por descanso curto ou longo).</p>
               <p>Você sempre sabe a direção e distância exata do alvo enquanto ele estiver no mesmo plano a até 8 km (5 milhas). Além disso, sempre que a criatura marcada causar dano a você ou a uma criatura a até 1,5m de você, ela sofre dano psíquico igual ao seu modificador de <strong>Inteligência</strong> (mínimo de 1).</p>`
            : `<p>At 6th level, whenever you damage a creature with a weapon for which a crimson rite is active, you can sear an arcane brand into it (once per short or long rest).</p>
               <p>You always know the direction and distance to the branded creature as long as it's on the same plane within 5 miles. Additionally, each time the creature deals damage to you or a creature within 5 feet of you, it suffers psychic damage equal to your <strong>Intelligence modifier</strong> (minimum 1).</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 6" : "Witch Hunter 6",
        uses: { value: 1, max: "1", per: "sr" }
      }
    },
    {
      _id: "whfeatcrimsonim7",
      name: isPt ? "Aprimoramento de Ritual (Primal)" : "Crimson Rite Improvement",
      type: "feat",
      img: "icons/magic/fire/dagger-rune-enchant-flame-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, você aprende um Ritual Primal adicional à sua escolha da lista de Rituais Primais.</p>`
            : `<p>At 7th level, you learn an additional Primal Rite of your choice.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 7" : "Witch Hunter 7"
      }
    },
    {
      _id: "whfeatgrimpsych1",
      name: isPt ? "Psicometria Sinistra" : "Grim Psychometry",
      type: "feat",
      img: "icons/magic/death/skull-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, você desenvolve uma conexão sobrenatural com os ecos de morte e maldade. Ao fazer um teste de Inteligência (História) para recordar informações sobre o passado sombrio ou violento de um objeto ou local que esteja tocando, você tem vantagem no teste.</p>`
            : `<p>At 9th level, you gain a supernatural affinity for the echoes of tragedy. When making an Intelligence (History) check to recall information about the sinister past of an object or location you are touching, you have advantage on the roll.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 9" : "Witch Hunter 9"
      }
    },
    {
      _id: "whfeatdarkaugmnt",
      name: isPt ? "Amplificação Sombria" : "Dark Augmentation",
      type: "feat",
      img: "icons/magic/unholy/shadow-silhouette-wings-purple.webp",
      effects: [
        {
          _id: "effdarkaugmnt001",
          name: isPt ? "Amplificação Sombria" : "Dark Augmentation",
          img: "icons/magic/unholy/shadow-silhouette-wings-purple.webp",
          changes: [
            { key: "system.attributes.movement.walk", mode: 2, value: "+5", priority: 20 },
            { key: "system.abilities.str.bonuses.save", mode: 2, value: "@abilities.int.mod", priority: 20 },
            { key: "system.abilities.dex.bonuses.save", mode: 2, value: "@abilities.int.mod", priority: 20 },
            { key: "system.abilities.con.bonuses.save", mode: 2, value: "@abilities.int.mod", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>A partir do 10º nível, a magia de sangue fortalece permanentemente seu corpo físico.</p>
               <p>Seu deslocamento aumenta em <strong>+1,5 metro (5 pés)</strong> e você adiciona seu modificador de <strong>Inteligência</strong> a todas as salvaguardas de <strong>Força, Destreza e Constituição</strong>.</p>`
            : `<p>At 10th level, the hemocraft magic permanently augments your physical form.</p>
               <p>Your walking speed increases by <strong>5 feet</strong>, and you add your <strong>Intelligence modifier</strong> to all <strong>Strength, Dexterity, and Constitution</strong> saving throws.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 10" : "Witch Hunter 10"
      }
    },
    {
      _id: "whfeatbrandteth1",
      name: isPt ? "Marca da Punição" : "Brand of Tethering",
      type: "feat",
      img: "icons/magic/unholy/chain-link-glowing-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, sua Marca do Castigo aprisiona os movimentos da vítima. A criatura marcada não pode usar a ação Disparada (Dash).</p>
               <p>Se ela tentar se teletransportar ou viajar para outro plano, ela sofre <strong>4d6 de dano psíquico</strong> e deve ser bem-sucedida em uma salvaguarda de Sabedoria contra a sua CD de Hemomancia ou o teletransporte falha completamente.</p>`
            : `<p>At 13th level, your Brand of Castigation anchors the target. The branded creature can't take the Dash action.</p>
               <p>If it attempts to teleport or travel to another plane, it suffers <strong>4d6 psychic damage</strong> and must succeed on a Wisdom saving throw against your Hemocraft save DC or the teleportation fails.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 13" : "Witch Hunter 13"
      }
    },
    {
      _id: "whfeathardeneds1",
      name: isPt ? "Alma Endurecida" : "Hardened Soul",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-diamond-teal.webp",
      effects: [
        {
          _id: "effhardenedsou01",
          name: isPt ? "Alma Endurecida" : "Hardened Soul",
          img: "icons/magic/defensive/shield-barrier-flaming-diamond-teal.webp",
          changes: [
            { key: "system.traits.ci.value", mode: 2, value: "frightened", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você se torna imune à condição <strong>Amedrontado</strong> e tem vantagem em salvaguardas contra ser <strong>Encantado</strong>.</p>`
            : `<p>At 14th level, you gain immunity to the <strong>Frightened</strong> condition and advantage on saving throws against being <strong>Charmed</strong>.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 14" : "Witch Hunter 14"
      }
    },
    {
      _id: "whfeatesoteric14",
      name: isPt ? "Rituais Esotéricos" : "Esoteric Rites",
      type: "feat",
      img: "icons/magic/death/skull-horned-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você desbloqueia o conhecimento de rituais carmesins exóticos e devastadores. Escolha um dos seguintes rituais para aprender:</p>
               <ul>
                 <li><strong>Ritual do Rugido:</strong> Dano Trovejante.</li>
                 <li><strong>Ritual do Oráculo:</strong> Dano Psíquico.</li>
                 <li><strong>Ritual do Morto:</strong> Dano Necrótico.</li>
               </ul>`
            : `<p>At 14th level, you unlock esoteric crimson rites. Choose one of the following to learn:</p>
               <ul>
                 <li><strong>Rite of the Roar:</strong> Thunder damage.</li>
                 <li><strong>Rite of the Oracle:</strong> Psychic damage.</li>
                 <li><strong>Rite of the Dead:</strong> Necrotic damage.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 14" : "Witch Hunter 14"
      }
    },
    {
      _id: "whfeatsanguinem1",
      name: isPt ? "Maestria Sanguinária" : "Sanguine Mastery",
      type: "feat",
      img: "icons/magic/unholy/heart-crystal-ruby.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 20º nível, você domina completamente os rituais e maldições de hemomancia.</p>
               <p>Uma vez por turno, ao rolar seu Dado de Hemomancia para dano de ritual ou para amplificar uma maldição, você pode maximizar o resultado da rolagem em vez de rolar.</p>
               <p>Além disso, sempre que obtiver um <strong>Acerto Crítico</strong> com uma arma que esteja com um Ritual Carmesim ativo, você recupera um uso gasto da característica Sangue Maldito.</p>`
            : `<p>At 20th level, you achieve true mastery over hemocraft.</p>
               <p>Once per turn, whenever you roll a Hemocraft die for rite damage or curse damage, you can choose to maximize the roll instead.</p>
               <p>Additionally, whenever you score a <strong>Critical Hit</strong> with a weapon imbued by your Crimson Rite, you regain one expended use of Blood Maledict.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Blood Hunter" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Caçador de Bruxas 20" : "Witch Hunter 20"
      }
    },

    // Subclass: Ghostslayer
    {
      _id: "whghostritedawn1",
      name: isPt ? "Ritual da Alvorada" : "Rite of the Dawn",
      type: "feat",
      img: "icons/magic/holy/sun-radiant-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao escolher esta ordem no 3º nível, você aprende o <strong>Ritual da Alvorada</strong>. O dano extra do ritual é do tipo <strong>Radiante</strong>.</p>
               <p>Enquanto este ritual estiver ativo, você tem resistência a dano necrótico e seu dado de hemomancia causa o dobro de dano contra criaturas Mortas-vivas.</p>`
            : `<p>When you join this order at 3rd level, you learn the <strong>Rite of the Dawn</strong>. The extra damage dealt by your rite is <strong>Radiant</strong>.</p>
               <p>While active, you gain resistance to necrotic damage and your hemocraft die damage is doubled against Undead creatures.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Ghostslayer" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Caçador de Espectros 3" : "Order of the Ghostslayer 3"
      }
    },
    {
      _id: "whghostetherstep",
      name: isPt ? "Passo Etéreo" : "Ethereal Step",
      type: "feat",
      img: "icons/magic/movement/trail-streak-zigzag-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A partir do 7º nível, como uma Ação Bônus, você pode cruzar a fronteira para o Plano Etéreo por um número de rodadas igual ao seu modificador de Inteligência (mínimo de 1 rodada, 1x por descanso curto ou longo).</p>
               <p>Você pode se mover através de criaturas e objetos sólidos como se fossem terreno difícil, e não pode ser atingido por ataques ou magias do plano material.</p>`
            : `<p>Beginning at 7th level, as a Bonus Action, you can step into the Ethereal Plane for a number of rounds equal to your Intelligence modifier (minimum 1 round, 1/short rest).</p>
               <p>You can move through creatures and objects as if they were difficult terrain, and you can't be perceived or affected by anything on the material plane.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Ghostslayer" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Caçador de Espectros 7" : "Order of the Ghostslayer 7",
        activation: { type: "bonus", cost: 1 },
        uses: { value: 1, max: "1", per: "sr" }
      }
    },
    {
      _id: "whghostbrandsund",
      name: isPt ? "Marca do Sepulcro" : "Brand of the Sundering",
      type: "feat",
      img: "icons/magic/light/beam-strike-vertical-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, sua Marca do Castigo corta a ligação da presa com planos alternativos. Ela não pode se esconder no Plano Etéreo ou ficar invisível.</p>
               <p>Além disso, sempre que você atingir a criatura com uma arma com Ritual da Alvorada ativo, ela sofre uma rolagem adicional do dado de hemomancia.</p>`
            : `<p>At 11th level, your Brand of Castigation severs the target's link to other planes. It cannot enter the Ethereal Plane or become invisible.</p>
               <p>In addition, whenever you damage the marked creature with a weapon with Rite of the Dawn active, it takes an extra roll of your hemocraft die.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Ghostslayer" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Caçador de Espectros 11" : "Order of the Ghostslayer 11"
      }
    },
    {
      _id: "whghostgravesigh",
      name: isPt ? "Visão da Sepultura" : "Grave Sight",
      type: "feat",
      img: "icons/magic/perception/eye-slit-glow-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, você pode ver criaturas invisíveis e espíritos no Plano Etéreo a até 9 metros (30 pés) de você.</p>`
            : `<p>At 15th level, you can see invisible creatures and spirits on the Ethereal Plane within 30 feet of you.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Ghostslayer" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Caçador de Espectros 15" : "Order of the Ghostslayer 15"
      }
    },
    {
      _id: "whghostvengspir1",
      name: isPt ? "Espírito Vingativo" : "Vengeful Spirit",
      type: "feat",
      img: "icons/magic/death/ghost-silhouette-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, ao ser reduzido a 0 pontos de vida, você projeta uma forma espiritual etérea de si mesmo que permanece lutando e conjurando maldições até o final do seu próximo turno, permitindo que você continue lutando além da morte.</p>`
            : `<p>At 18th level, upon dropping to 0 hit points, your ethereal spirit projects outward and can continue fighting and casting curses until the end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Ghostslayer" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Caçador de Espectros 18" : "Order of the Ghostslayer 18"
      }
    },

    // Subclass: Lycan
    {
      _id: "whlycansenses001",
      name: isPt ? "Sentidos Aguçados" : "Heightened Senses",
      type: "feat",
      img: "icons/magic/perception/ear-glowing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha sentidos de predador. Você tem vantagem em testes de Sabedoria (Percepção) que dependam de audição ou olfato.</p>`
            : `<p>At 3rd level, you gain heightened predator senses. You have advantage on Wisdom (Perception) checks relying on hearing or smell.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 3" : "Order of the Lycan 3"
      }
    },
    {
      _id: "whlycantransform",
      name: isPt ? "Transformação Híbrida" : "Hybrid Transformation",
      type: "feat",
      img: "icons/creatures/abilities/werewolf-howl-moon-blue.webp",
      effects: [
        {
          _id: "efflycanhybrid01",
          name: isPt ? "Forma Híbrida (Licantropo)" : "Hybrid Form (Lycan)",
          img: "icons/creatures/abilities/werewolf-howl-moon-blue.webp",
          changes: [
            { key: "system.attributes.ac.bonus", mode: 2, value: "1", priority: 20 },
            { key: "system.traits.dr.value", mode: 2, value: "bludgeoning", priority: 20 },
            { key: "system.traits.dr.value", mode: 2, value: "piercing", priority: 20 },
            { key: "system.traits.dr.value", mode: 2, value: "slashing", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você assume uma forma híbrida de predador por 1 hora (1x por descanso curto ou longo, 2x no 7º nível, ilimitado no 18º nível).</p>
               <ul>
                 <li><strong>Resiliência Sobrenatural:</strong> +1 de bônus na CA e resistência a dano concussão, cortante e perfurante de ataques não mágicos e não prateados.</li>
                 <li><strong>Garras Predadoras:</strong> Seus ataques desarmados causam 1d6 de dano cortante e você pode aplicar o Ritual Carmesim às suas garras.</li>
                 <li><strong>Golpes Selvagens:</strong> Ao usar a ação de Ataque com garras, você pode fazer um ataque desarmado adicional como Ação Bônus.</li>
                 <li><strong>Fúria Sanguinolenta:</strong> Se iniciar seu turno com menos da metade dos seus pontos de vida máximos, deve fazer uma salvaguarda de Sabedoria CD 8 ou atacar a criatura mais próxima.</li>
               </ul>`
            : `<p>As a <strong>Bonus Action</strong>, you transform into a hybrid predator form for 1 hour (1/rest, 2/rest at 7th level, unlimited at 18th level).</p>
               <ul>
                 <li><strong>Supernatural Resilience:</strong> +1 AC and resistance to bludgeoning, piercing, and slashing damage from nonmagical, nonsilvered attacks.</li>
                 <li><strong>Predatory Strikes:</strong> Your unarmed strikes deal 1d6 slashing damage and can be imbued with your Crimson Rite.</li>
                 <li><strong>Feral Flurry:</strong> You can make one unarmed strike as a bonus action when taking the Attack action with claws.</li>
                 <li><strong>Bloodlust:</strong> If you start your turn with under half your maximum hit points, you must succeed on a DC 8 Wisdom save or attack the nearest creature.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 3" : "Order of the Lycan 3",
        activation: { type: "bonus", cost: 1 },
        uses: { value: 1, max: "1", per: "sr" }
      }
    },
    {
      _id: "whlycanstalker01",
      name: isPt ? "Proeza do Perseguidor" : "Stalker's Prowess",
      type: "feat",
      img: "icons/skills/movement/feet-winged-sandals-gold.webp",
      effects: [
        {
          _id: "effstalkerprow01",
          name: isPt ? "Proeza do Perseguidor" : "Stalker's Prowess",
          img: "icons/skills/movement/feet-winged-sandals-gold.webp",
          changes: [
            { key: "system.attributes.movement.walk", mode: 2, value: "+10", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, sua velocidade aumenta em <strong>3 metros (10 pés)</strong> e a distância de seus saltos é aumentada em 3 metros.</p>`
            : `<p>At 7th level, your speed increases by <strong>10 feet</strong> and jump distance increases by 10 feet.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 7" : "Order of the Lycan 7"
      }
    },
    {
      _id: "whlycanadvanced1",
      name: isPt ? "Transformação Avançada" : "Advanced Transformation",
      type: "feat",
      img: "icons/magic/life/heart-shadow-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, suas garras predadoras são consideradas mágicas. Além disso, na forma híbrida, se estiver com menos da metade dos seus pontos de vida máximos no início do seu turno, você recupera 1 + seu modificador de Constituição em pontos de vida.</p>`
            : `<p>At 11th level, your predatory strikes count as magical. Also in hybrid form, if you have under half your maximum hit points at the start of your turn, you regain HP equal to 1 + your Constitution modifier.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 11" : "Order of the Lycan 11"
      }
    },
    {
      _id: "whlycanironwill1",
      name: isPt ? "Vontade de Ferro" : "Iron Will",
      type: "feat",
      img: "icons/magic/control/buff-strength-muscle-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, você tem vantagem nas salvaguardas contra a Fúria Sanguinolenta e vantagem em salvaguardas contra ser Encantado.</p>`
            : `<p>At 15th level, you have advantage on Wisdom saving throws against your Bloodlust and advantage against being Charmed.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 15" : "Order of the Lycan 15"
      }
    },
    {
      _id: "whlycanmastery01",
      name: isPt ? "Maestria da Transformação" : "Hybrid Transformation Mastery",
      type: "feat",
      img: "icons/creatures/abilities/werewolf-howl-blood-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, você pode usar a Transformação Híbrida um número <strong>ilimitado</strong> de vezes.</p>`
            : `<p>At 18th level, you can use your Hybrid Transformation an <strong>unlimited</strong> number of times.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Lycan" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Licantropo 18" : "Order of the Lycan 18"
      }
    },

    // Subclass: Mutant
    {
      _id: "whmutantcraft001",
      name: isPt ? "Criação de Mutagênicos" : "Mutagen Craft",
      type: "feat",
      img: "icons/consumables/potions/vial-cork-empty-glass.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a preparar frascos mutagênicos que alteram sua fisiologia. Ao terminar um Descanso Curto ou Longo, você pode preparar 1 mutagênico (2 no 7º nível, 3 no 15º nível).</p>
               <p>Consumir um mutagênico é uma Ação Bônus e os efeitos duram até seu próximo descanso curto ou longo.</p>`
            : `<p>At 3rd level, you learn to craft toxic mutagens that modify your physiology. At the end of a Short or Long Rest, you craft 1 mutagen (2 at 7th level, 3 at 15th level).</p>
               <p>Consuming a mutagen takes a Bonus Action, and effects last until your next rest.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 3" : "Order of the Mutant 3"
      }
    },
    {
      _id: "whmutantformulas",
      name: isPt ? "Fórmulas Mutagênicas" : "Mutagen Formulas",
      type: "feat",
      img: "icons/sundries/books/book-embossed-poison-skull.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você conhece 4 fórmulas mutagênicas no 3º nível, aprendendo fórmulas adicionais no 7º, 11º, 15º e 18º níveis.</p>`
            : `<p>You discover 4 mutagen formulas at 3rd level, and additional formulas at 7th, 11th, 15th, and 18th level.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 3" : "Order of the Mutant 3"
      }
    },
    {
      _id: "whmutantadvanced",
      name: isPt ? "Criação Avançada de Mutagênicos" : "Advanced Mutagen Craft",
      type: "feat",
      img: "icons/consumables/potions/potion-tube-corked-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, você pode preparar 2 mutagênicos a cada descanso curto ou longo.</p>`
            : `<p>At 7th level, you can craft 2 mutagens per rest.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 7" : "Order of the Mutant 7"
      }
    },
    {
      _id: "whmutantstrangem",
      name: isPt ? "Metabolismo Estranho" : "Strange Metabolism",
      type: "feat",
      img: "icons/magic/life/heart-cross-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, como uma Ação Bônus, você pode suprimir temporariamente os efeitos colaterais negativos de um mutagênico que esteja afetando você por 1 minuto (1x por descanso longo).</p>`
            : `<p>At 11th level, as a Bonus Action, you can suppress the negative side effects of an active mutagen for 1 minute (1/long rest).</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 11" : "Order of the Mutant 11",
        activation: { type: "bonus", cost: 1 },
        uses: { value: 1, max: "1", per: "lr" }
      }
    },
    {
      _id: "whmutantrobust01",
      name: isPt ? "Fisiologia Robusta" : "Robust Physiology",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-green.webp",
      effects: [
        {
          _id: "effrobustphys001",
          name: isPt ? "Fisiologia Robusta" : "Robust Physiology",
          img: "icons/magic/defensive/shield-barrier-glowing-green.webp",
          changes: [
            { key: "system.traits.di.value", mode: 2, value: "poison", priority: 20 },
            { key: "system.traits.ci.value", mode: 2, value: "poisoned", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, você se torna imune a dano de <strong>Veneno</strong> e à condição <strong>Envenenado</strong>. Além disso, pode preparar até 3 mutagênicos por descanso.</p>`
            : `<p>At 15th level, you become immune to <strong>Poison</strong> damage and the <strong>Poisoned</strong> condition. You can also craft 3 mutagens per rest.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 15" : "Order of the Mutant 15"
      }
    },
    {
      _id: "whmutantexalted1",
      name: isPt ? "Mutação Exaltada" : "Exalted Mutation",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, seu corpo sintetiza permanentemente uma das suas fórmulas de mutagênicos conhecidas, recebendo seus benefícios (e efeitos colaterais) sem ocupar espaço de preparação.</p>`
            : `<p>At 18th level, your body permanently adopts one mutagen formula, gaining its benefit (and drawback) constantly without taking up a crafted mutagen slot.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Mutant" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem do Mutante 18" : "Order of the Mutant 18"
      }
    },

    // Subclass: Profane Soul
    {
      _id: "whprofanepatron1",
      name: isPt ? "Patrono do Outro Mundo" : "Otherworldly Patron",
      type: "feat",
      img: "icons/magic/unholy/silhouette-robe-evil-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você fecha um pacto com uma entidade do outro mundo (O Corruptor, A Arquifada, O Grande Antigo, O Celestial, A Lâmina Maldita ou O Imperecível), guiando o tipo de magia e rituais que você domina.</p>`
            : `<p>At 3rd level, you strike a pact with an otherworldly patron (The Fiend, The Archfey, The Great Old One, The Celestial, The Hexblade, or The Undying).</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 3" : "Order of the Profane Soul 3"
      }
    },
    {
      _id: "whprofanepactmag",
      name: isPt ? "Magia de Pacto" : "Pact Magic",
      type: "feat",
      img: "icons/magic/symbols/runes-star-pentagon-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a conjurar magias da lista de Bruxo. Seus espaços de magia de pacto recarregam em um Descanso Curto ou Longo, e sua habilidade de conjuração é <strong>Inteligência</strong>.</p>`
            : `<p>At 3rd level, you gain pact magic casting from the warlock spell list. Your pact slots recover on a Short or Long Rest, and your spellcasting ability is <strong>Intelligence</strong>.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 3" : "Order of the Profane Soul 3"
      }
    },
    {
      _id: "whprofaneritefoc",
      name: isPt ? "Foco Ritual" : "Rite Focus",
      type: "feat",
      img: "icons/magic/fire/dagger-rune-enchant-flame-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Sua arma com Ritual Carmesim ativo atua como seu foco de conjuração para magias de Bruxo. Além disso, concede benefícios especiais baseados no patrono escolhido.</p>`
            : `<p>Your weapon with active Crimson Rite acts as a spellcasting focus for your warlock spells, and grants special benefits depending on your chosen patron.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 3" : "Order of the Profane Soul 3"
      }
    },
    {
      _id: "whprofanefrenzy1",
      name: isPt ? "Frenezi Místico" : "Mystic Frenzy",
      type: "feat",
      img: "icons/skills/melee/strike-blade-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A partir do 7º nível, sempre que você usar sua ação para conjurar um truque, você pode fazer um ataque com arma como uma Ação Bônus.</p>`
            : `<p>Starting at 7th level, whenever you use your action to cast a cantrip, you can make one weapon attack as a Bonus Action.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 7" : "Order of the Profane Soul 7"
      }
    },
    {
      _id: "whprofanedichan1",
      name: isPt ? "Canalização Diabólica" : "Diabolic Channel",
      type: "feat",
      img: "icons/magic/fire/flame-burst-magic-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, você pode imbuir uma magia de pacto em um ataque com arma. Se o ataque atingir, a criatura sofre o dano da arma e o efeito da magia simultaneamente.</p>`
            : `<p>At 11th level, you can infuse a warlock pact spell into a weapon attack. If the attack hits, the target suffers weapon damage and the spell effect simultaneously.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 11" : "Order of the Profane Soul 11"
      }
    },
    {
      _id: "whprofanearcana1",
      name: isPt ? "Arcana Revelada" : "Unrevealed Arcana",
      type: "feat",
      img: "icons/sundries/books/book-open-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, seu patrono concede acesso a uma magia secreta de 3º círculo sem gastar espaços de magia (1x por descanso longo).</p>`
            : `<p>At 15th level, your patron grants access to a secret 3rd-level spell without expending a spell slot (1/long rest).</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 15" : "Order of the Profane Soul 15"
      }
    },
    {
      _id: "whprofanesoulsyp",
      name: isPt ? "Sifão de Almas" : "Soul Syphon",
      type: "feat",
      img: "icons/magic/unholy/silhouette-robe-spirit-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, ao conseguir um acerto crítico com uma arma imbuída pelo seu ritual ou abater uma criatura significativa, você recupera um espaço de magia de pacto gasto.</p>`
            : `<p>At 18th level, scoring a critical hit with a rite-infused weapon or reducing a significant creature to 0 HP restores one expended warlock pact slot.</p>`,
          chat: ""
        },
        source: { custom: "D&D Beyond (2020) - Order of the Profane Soul" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Ordem da Alma Profana 18" : "Order of the Profane Soul 18"
      }
    }
  ];
}

// =============================================================
// 2. ITENS (RITUAIS, MALDIÇÕES E MUTAGÊNICOS)
// =============================================================

function buildItems(isPt) {
  return [
    // Rituais Carmesins
    {
      _id: "whriteflame00001",
      name: isPt ? "Ritual das Chamas" : "Rite of the Flame",
      type: "feat",
      img: "icons/magic/fire/dagger-rune-enchant-flame-red.webp",
      effects: [
        {
          _id: "effriteflame0001",
          name: isPt ? "Ritual das Chamas (+Fogo)" : "Rite of the Flame (+Fire)",
          img: "icons/magic/fire/dagger-rune-enchant-flame-red.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[fire]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[fire]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano de <strong>Fogo</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Fire</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whritefrozen0001",
      name: isPt ? "Ritual do Congelamento" : "Rite of the Frozen",
      type: "feat",
      img: "icons/magic/water/dagger-rune-enchant-ice-blue.webp",
      effects: [
        {
          _id: "effritefrozen001",
          name: isPt ? "Ritual do Congelamento (+Gelo)" : "Rite of the Frozen (+Cold)",
          img: "icons/magic/water/dagger-rune-enchant-ice-blue.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[cold]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[cold]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano de <strong>Frio</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Cold</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whritestorm00001",
      name: isPt ? "Ritual da Tempestade" : "Rite of the Storm",
      type: "feat",
      img: "icons/magic/lightning/bolt-strike-blue.webp",
      effects: [
        {
          _id: "effritestorm0001",
          name: isPt ? "Ritual da Tempestade (+Elétrico)" : "Rite of the Storm (+Lightning)",
          img: "icons/magic/lightning/bolt-strike-blue.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[lightning]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[lightning]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano <strong>Elétrico</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Lightning</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whriteroar000001",
      name: isPt ? "Ritual do Rugido" : "Rite of the Roar",
      type: "feat",
      img: "icons/magic/sonic/explosion-shock-wave-teal.webp",
      effects: [
        {
          _id: "effriteroar00001",
          name: isPt ? "Ritual do Rugido (+Trovejante)" : "Rite of the Roar (+Thunder)",
          img: "icons/magic/sonic/explosion-shock-wave-teal.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[thunder]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[thunder]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano <strong>Trovejante</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Thunder</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whriteoracle0001",
      name: isPt ? "Ritual do Oráculo" : "Rite of the Oracle",
      type: "feat",
      img: "icons/magic/perception/eye-ringed-glow-purple.webp",
      effects: [
        {
          _id: "effriteoracle001",
          name: isPt ? "Ritual do Oráculo (+Psíquico)" : "Rite of the Oracle (+Psychic)",
          img: "icons/magic/perception/eye-ringed-glow-purple.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[psychic]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[psychic]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano <strong>Psíquico</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Psychic</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whritedead000001",
      name: isPt ? "Ritual do Morto" : "Rite of the Dead",
      type: "feat",
      img: "icons/magic/death/skull-energy-green.webp",
      effects: [
        {
          _id: "effritedead00001",
          name: isPt ? "Ritual do Morto (+Necrótico)" : "Rite of the Dead (+Necrotic)",
          img: "icons/magic/death/skull-energy-green.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[necrotic]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[necrotic]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano <strong>Necrótico</strong> igual ao seu Dado de Hemomancia aos ataques feitos com esta arma.</p>`
            : `<p>Adds <strong>Necrotic</strong> damage equal to your Hemocraft die to attacks made with this weapon.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whritedawn000001",
      name: isPt ? "Ritual da Alvorada" : "Rite of the Dawn",
      type: "feat",
      img: "icons/magic/holy/sun-radiant-yellow.webp",
      effects: [
        {
          _id: "effritedawn00001",
          name: isPt ? "Ritual da Alvorada (+Radiante)" : "Rite of the Dawn (+Radiant)",
          img: "icons/magic/holy/sun-radiant-yellow.webp",
          changes: [
            { key: "system.bonuses.mwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[radiant]", priority: 20 },
            { key: "system.bonuses.rwak.damage", mode: 2, value: "+@scale.witch-hunter.hemocraft-die[radiant]", priority: 20 }
          ],
          transfer: true
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p>Adiciona dano <strong>Radiante</strong> igual ao seu Dado de Hemomancia aos ataques com esta arma (dobrado contra mortos-vivos).</p>`
            : `<p>Adds <strong>Radiant</strong> damage equal to your Hemocraft die to attacks with this weapon (doubled against undead).</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },

    // Maldições de Sangue (Blood Curses)
    {
      _id: "whcursebinding01",
      name: isPt ? "Maldição de Sangue da Amarração" : "Blood Curse of Binding",
      type: "feat",
      img: "icons/magic/control/silhouette-hold-beam-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você tenta aprisionar um inimigo a até 9 metros. O alvo deve ter sucesso em uma salvaguarda de Força (CD de Hemomancia) ou seu deslocamento é reduzido a 0 até o início do seu próximo turno.</p>
               <p><strong>Amplificar:</strong> Afeta criaturas de qualquer tamanho e a maldição dura 1 minuto (o alvo repete o teste ao final de cada um dos seus turnos).</p>`
            : `<p>As a <strong>Bonus Action</strong>, you attempt to bind a Large or smaller creature within 30 feet. Target must succeed on a Strength saving throw against your Hemocraft DC or have its speed reduced to 0 until the start of your next turn.</p>
               <p><strong>Amplify:</strong> Affects creatures of any size, and lasts up to 1 minute with repeats at the end of each turn.</p>`,
          chat: ""
        },
        actionType: "save",
        save: { ability: "str", dc: null, scaling: "int" },
        target: { value: 1, units: "", type: "creature" },
        range: { value: 30, units: "ft" },
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whcurseeyeless01",
      name: isPt ? "Maldição de Sangue do Sem Olhos" : "Blood Curse of the Eyeless",
      type: "feat",
      img: "icons/magic/perception/eye-blind-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Reação</strong> quando uma criatura a até 9 metros atacar você ou um aliado, você rola seu Dado de Hemomancia e subtrai o valor rolado da jogada de ataque da criatura.</p>
               <p><strong>Amplificar:</strong> A penalidade se aplica a todas as jogadas de ataque da criatura até o início do próximo turno dela.</p>`
            : `<p>As a <strong>Reaction</strong> when a creature within 30 feet makes an attack roll, you roll your Hemocraft die and subtract the result from its attack roll.</p>
               <p><strong>Amplify:</strong> The penalty applies to all attacks the creature makes until the start of its next turn.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "reaction", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcursefallenpup",
      name: isPt ? "Maldição de Sangue do Fantoche Caído" : "Blood Curse of the Fallen Puppet",
      type: "feat",
      img: "icons/magic/death/undead-skeleton-energy-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Reação</strong> quando uma criatura cair a 0 pontos de vida a até 9 metros, você a faz atacar imediatamente uma criatura à sua escolha ao alcance dela.</p>
               <p><strong>Amplificar:</strong> O ataque recebe um bônus na jogada de ataque igual ao seu modificador de Inteligência e um bônus no dano igual a uma rolagem do seu Dado de Hemomancia.</p>`
            : `<p>As a <strong>Reaction</strong> when a creature drops to 0 HP within 30 feet, you force it to make an immediate weapon attack against a target of your choice within its reach.</p>
               <p><strong>Amplify:</strong> Grants a bonus to attack equal to your Intelligence modifier and bonus damage equal to one roll of your Hemocraft die.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "reaction", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcursemarked001",
      name: isPt ? "Maldição de Sangue do Marcado" : "Blood Curse of the Marked",
      type: "feat",
      img: "icons/magic/fire/flame-burning-mark-symbol.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você marca um inimigo a até 9 metros. Até o final do seu turno, todo o dano do seu Ritual Carmesim contra o alvo é dobrado.</p>
               <p><strong>Amplificar:</strong> A criatura marcada também perde qualquer resistência ao tipo de dano do seu ritual ativo até o final do seu turno.</p>`
            : `<p>As a <strong>Bonus Action</strong>, you mark an enemy within 30 feet. Until the end of your turn, all Crimson Rite damage you deal to the target is doubled.</p>
               <p><strong>Amplify:</strong> The target also loses resistance to your active rite damage type until the end of your turn.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcursemutualsuf",
      name: isPt ? "Maldição de Sangue do Sofrimento Mútuo" : "Blood Curse of Mutual Suffering",
      type: "feat",
      img: "icons/magic/unholy/blood-drop-spatter-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você amaldiçoa uma criatura a até 9 metros. Sempre que ela causar dano a você, ela sofre dano necrótico igual a metade do dano sofrido por você.</p>
               <p><strong>Amplificar:</strong> A criatura sofre dano necrótico total igual a todo o dano sofrido por você.</p>`
            : `<p>As a <strong>Bonus Action</strong>, curse a creature within 30 feet. Whenever it damages you, it takes necrotic damage equal to half the damage you suffered.</p>
               <p><strong>Amplify:</strong> Target takes necrotic damage equal to the full amount of damage you suffered.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcurseanxious01",
      name: isPt ? "Maldição de Sangue do Inquieto" : "Blood Curse of the Anxious",
      type: "feat",
      img: "icons/magic/perception/eye-slit-glow-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você instila pavor em um alvo a até 9 metros. Você tem vantagem em testes de Carisma (Intimidação) contra o alvo até o final do seu próximo turno.</p>
               <p><strong>Amplificar:</strong> O alvo tem desvantagem na próxima salvaguarda de Sabedoria que fizer antes do término da maldição.</p>`
            : `<p>As a <strong>Bonus Action</strong>, target within 30 feet is unnerved. You have advantage on Charisma (Intimidation) checks against it until the end of your next turn.</p>
               <p><strong>Amplify:</strong> The target also has disadvantage on the next Wisdom saving throw it makes.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcursebloatedag",
      name: isPt ? "Maldição de Sangue da Agonia Inchada" : "Blood Curse of Bloated Agony",
      type: "feat",
      img: "icons/magic/unholy/curse-cloud-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você infla dolorosamente o corpo de um alvo a até 9 metros. O alvo deve ser bem-sucedido em uma salvaguarda de Constituição ou terá desvantagem em testes de Força e Destreza por 1 minuto. Além disso, se fizer mais de um ataque em um turno, sofre 1d8 de dano necrótico imediatamente.</p>
               <p><strong>Amplificar:</strong> O dano aumenta para 2d8 necrótico.</p>`
            : `<p>As a <strong>Bonus Action</strong>, curse a target within 30 feet. Must succeed on a Constitution save or have disadvantage on Strength and Dexterity checks for 1 minute. If it makes more than one attack in a turn, it takes 1d8 necrotic damage.</p>
               <p><strong>Amplify:</strong> Damage increases to 2d8 necrotic.</p>`,
          chat: ""
        },
        actionType: "save",
        save: { ability: "con", dc: null, scaling: "int" },
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcurseexposure1",
      name: isPt ? "Maldição de Sangue da Exposição" : "Blood Curse of Exposure",
      type: "feat",
      img: "icons/magic/defensive/shield-broken-flame-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Reação</strong> quando uma criatura a até 9 metros sofrer dano, você remove a resistência da criatura àquele tipo de dano contra o ataque desencadeante.</p>
               <p><strong>Amplificar:</strong> O alvo perde a resistência àquele dano até o final do seu próximo turno.</p>`
            : `<p>As a <strong>Reaction</strong> when a creature within 30 feet takes damage, you strip its resistance to that damage type against the triggering attack.</p>
               <p><strong>Amplify:</strong> The target loses resistance to that damage type until the end of your next turn.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "reaction", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcursesouleater",
      name: isPt ? "Maldição de Sangue do Devorador de Almas" : "Blood Curse of the Souleater",
      type: "feat",
      img: "icons/magic/unholy/soul-drain-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Reação</strong> quando uma criatura que possua alma cair a 0 pontos de vida a até 9 metros, você consome sua energia residual para ganhar vantagem na sua próxima jogada de ataque, teste de habilidade ou salvaguarda.</p>
               <p><strong>Amplificar:</strong> Você também recupera pontos de vida iguais a uma rolagem do seu Dado de Hemomancia.</p>`
            : `<p>As a <strong>Reaction</strong> when a creature with a soul drops to 0 HP within 30 feet, you absorb its essence to gain advantage on your next attack roll, ability check, or save.</p>
               <p><strong>Amplify:</strong> You also regain hit points equal to one roll of your Hemocraft die.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "reaction", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },
    {
      _id: "whcurseexorcist1",
      name: isPt ? "Maldição de Sangue do Exorcista" : "Blood Curse of the Exorcist",
      type: "feat",
      img: "icons/magic/holy/exorcism-cross-light-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você liberta um aliado a até 9 metros de qualquer efeito que o esteja deixando Encantado, Amedrontado ou Possuído.</p>
               <p><strong>Amplificar:</strong> A criatura que causou o efeito sofre dano psíquico igual a uma rolagem do seu Dado de Hemomancia + seu modificador de Inteligência.</p>`
            : `<p>As a <strong>Bonus Action</strong>, purge an ally within 30 feet of any effect causing it to be Charmed, Frightened, or Possessed.</p>
               <p><strong>Amplify:</strong> The creature that imposed the condition takes psychic damage equal to one roll of your Hemocraft die + your Intelligence modifier.</p>`,
          chat: ""
        },
        actionType: "util",
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" }
      }
    },

    // Mutagênicos da Ordem do Mutante (Mutagens)
    {
      _id: "whmutagencelerit",
      name: isPt ? "Mutagênico: Celeridade" : "Mutagen: Celerity",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-yellow.webp",
      effects: [
        {
          _id: "effmutcelerity01",
          name: isPt ? "Mutagênico: Celeridade" : "Mutagen: Celerity",
          img: "icons/consumables/potions/potion-bottle-corked-yellow.webp",
          changes: [
            { key: "system.abilities.dex.value", mode: 2, value: "3", priority: 20 },
            { key: "system.abilities.wis.value", mode: 2, value: "-3", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Seu valor de Destreza (e máximo) aumenta em +3 (+4 no 11º nível, +5 no 18º nível).</p>
               <p><strong>Efeito Colateral:</strong> Seu valor de Sabedoria diminui em -3 (-4 no 11º nível, -5 no 18º nível).</p>`
            : `<p><strong>Benefit:</strong> Your Dexterity score (and maximum) increases by +3 (+4 at 11th, +5 at 18th).</p>
               <p><strong>Side Effect:</strong> Your Wisdom score decreases by -3 (-4 at 11th, -5 at 18th).</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagenpotency",
      name: isPt ? "Mutagênico: Potência" : "Mutagen: Potency",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-red.webp",
      effects: [
        {
          _id: "effmutpotency001",
          name: isPt ? "Mutagênico: Potência" : "Mutagen: Potency",
          img: "icons/consumables/potions/potion-bottle-corked-red.webp",
          changes: [
            { key: "system.abilities.str.value", mode: 2, value: "3", priority: 20 },
            { key: "system.abilities.dex.value", mode: 2, value: "-3", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Seu valor de Força (e máximo) aumenta em +3 (+4 no 11º nível, +5 no 18º nível).</p>
               <p><strong>Efeito Colateral:</strong> Seu valor de Destreza diminui em -3 (-4 no 11º nível, -5 no 18º nível).</p>`
            : `<p><strong>Benefit:</strong> Your Strength score (and maximum) increases by +3 (+4 at 11th, +5 at 18th).</p>
               <p><strong>Side Effect:</strong> Your Dexterity score decreases by -3 (-4 at 11th, -5 at 18th).</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagensagaci1",
      name: isPt ? "Mutagênico: Sagacidade" : "Mutagen: Sagacity",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
      effects: [
        {
          _id: "effmutsagacity01",
          name: isPt ? "Mutagênico: Sagacidade" : "Mutagen: Sagacity",
          img: "icons/consumables/potions/potion-bottle-corked-blue.webp",
          changes: [
            { key: "system.abilities.int.value", mode: 2, value: "3", priority: 20 },
            { key: "system.abilities.cha.value", mode: 2, value: "-3", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Seu valor de Inteligência (e máximo) aumenta em +3 (+4 no 11º nível, +5 no 18º nível).</p>
               <p><strong>Efeito Colateral:</strong> Seu valor de Carisma diminui em -3 (-4 no 11º nível, -5 no 18º nível).</p>`
            : `<p><strong>Benefit:</strong> Your Intelligence score (and maximum) increases by +3 (+4 at 11th, +5 at 18th).</p>
               <p><strong>Side Effect:</strong> Your Charisma score decreases by -3 (-4 at 11th, -5 at 18th).</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagenimperme",
      name: isPt ? "Mutagênico: Impermeável" : "Mutagen: Impermeable",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-grey.webp",
      effects: [
        {
          _id: "effmutimperme001",
          name: isPt ? "Mutagênico: Impermeável" : "Mutagen: Impermeable",
          img: "icons/consumables/potions/potion-bottle-corked-grey.webp",
          changes: [
            { key: "system.traits.dr.value", mode: 2, value: "piercing", priority: 20 },
            { key: "system.traits.dv.value", mode: 2, value: "slashing", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Você ganha resistência a dano Perfurante.</p>
               <p><strong>Efeito Colateral:</strong> Você ganha vulnerabilidade a dano Cortante.</p>`
            : `<p><strong>Benefit:</strong> You gain resistance to Piercing damage.</p>
               <p><strong>Side Effect:</strong> You gain vulnerability to Slashing damage.</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagenshield1",
      name: isPt ? "Mutagênico: Blindado" : "Mutagen: Shielded",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-teal.webp",
      effects: [
        {
          _id: "effmutshielded01",
          name: isPt ? "Mutagênico: Blindado" : "Mutagen: Shielded",
          img: "icons/consumables/potions/potion-bottle-corked-teal.webp",
          changes: [
            { key: "system.traits.dr.value", mode: 2, value: "slashing", priority: 20 },
            { key: "system.traits.dv.value", mode: 2, value: "bludgeoning", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Você ganha resistência a dano Cortante.</p>
               <p><strong>Efeito Colateral:</strong> Você ganha vulnerabilidade a dano Concussão.</p>`
            : `<p><strong>Benefit:</strong> You gain resistance to Slashing damage.</p>
               <p><strong>Side Effect:</strong> You gain vulnerability to Bludgeoning damage.</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagenunbreak",
      name: isPt ? "Mutagênico: Inquebrável" : "Mutagen: Unbreakable",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-brown.webp",
      effects: [
        {
          _id: "effmutunbreak001",
          name: isPt ? "Mutagênico: Inquebrável" : "Mutagen: Unbreakable",
          img: "icons/consumables/potions/potion-bottle-corked-brown.webp",
          changes: [
            { key: "system.traits.dr.value", mode: 2, value: "bludgeoning", priority: 20 },
            { key: "system.traits.dv.value", mode: 2, value: "piercing", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Benefício:</strong> Você ganha resistência a dano Concussão.</p>
               <p><strong>Efeito Colateral:</strong> Você ganha vulnerabilidade a dano Perfurante.</p>`
            : `<p><strong>Benefit:</strong> You gain resistance to Bludgeoning damage.</p>
               <p><strong>Side Effect:</strong> You gain vulnerability to Piercing damage.</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagenaether1",
      name: isPt ? "Mutagênico: Éter" : "Mutagen: Aether",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-purple.webp",
      effects: [
        {
          _id: "effmutaether0001",
          name: isPt ? "Mutagênico: Éter" : "Mutagen: Aether",
          img: "icons/consumables/potions/potion-bottle-corked-purple.webp",
          changes: [
            { key: "system.attributes.movement.fly", mode: 4, value: "20", priority: 20 }
          ],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Pré-requisito:</strong> 11º nível.</p>
               <p><strong>Benefício:</strong> Você ganha deslocamento de Voo de 6 metros (20 pés) por 1 hora.</p>
               <p><strong>Efeito Colateral:</strong> Você tem desvantagem em todos os testes de Força e Destreza por 1 hora.</p>`
            : `<p><strong>Prerequisite:</strong> 11th level.</p>
               <p><strong>Benefit:</strong> You gain a flying speed of 20 feet for 1 hour.</p>
               <p><strong>Side Effect:</strong> You have disadvantage on all Strength and Dexterity ability checks for 1 hour.</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "whmutagencruelty",
      name: isPt ? "Mutagênico: Crueldade" : "Mutagen: Cruelty",
      type: "consumable",
      img: "icons/consumables/potions/potion-bottle-corked-black.webp",
      effects: [
        {
          _id: "effmutcruelty001",
          name: isPt ? "Mutagênico: Crueldade" : "Mutagen: Cruelty",
          img: "icons/consumables/potions/potion-bottle-corked-black.webp",
          changes: [],
          transfer: false,
          duration: { seconds: 3600 }
        }
      ],
      system: {
        description: {
          value: isPt
            ? `<p><strong>Pré-requisito:</strong> 11º nível.</p>
               <p><strong>Benefício:</strong> Você pode fazer um ataque adicional com arma como uma Ação Bônus.</p>
               <p><strong>Efeito Colateral:</strong> Você tem desvantagem em todas as salvaguardas de Inteligência, Sabedoria e Carisma.</p>`
            : `<p><strong>Prerequisite:</strong> 11th level.</p>
               <p><strong>Benefit:</strong> You can make an additional weapon attack as a Bonus Action.</p>
               <p><strong>Side Effect:</strong> You have disadvantage on all Intelligence, Wisdom, and Charisma saving throws.</p>`,
          chat: ""
        },
        consumableType: "potion",
        actionType: "util",
        activation: { type: "bonus", cost: 1 }
      }
    }
  ];
}

// =============================================================
// 3. SUBCLASSES (witch-hunter-subclasses.json)
// =============================================================

function buildSubclasses(isPt) {
  return [
    {
      _id: "whsubghostslayer",
      name: isPt ? "Ordem do Caçador de Espectros" : "Order of the Ghostslayer",
      type: "subclass",
      img: "icons/magic/holy/sun-radiant-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A Ordem do Caçador de Espectros é a mais antiga das ordens de caçadores de sangue. Focados em destruir os mortos-vivos e libertar espíritos atormentados, eles dominam a energia sagrada da alvorada e viajam pelo plano etéreo.</p>`
            : `<p>The Order of the Ghostslayer is the oldest of the blood hunter orders. Dedicated to destroying the undead and releasing tortured souls, they master sacred dawn rites and step through ethereal planes.</p>`,
          chat: ""
        },
        identifier: "ghostslayer",
        classIdentifier: "witch-hunter",
        advancement: [
          {
            _id: "advghostsubnv003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Ordem (Nível 3)" : "Order Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whghostritedawn1" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-items.Item.whcurseexorcist1" }
              ]
            }
          },
          {
            _id: "advghostsubnv007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso da Ordem (Nível 7)" : "Order Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whghostetherstep" }
              ]
            }
          },
          {
            _id: "advghostsubnv011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso da Ordem (Nível 11)" : "Order Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whghostbrandsund" }
              ]
            }
          },
          {
            _id: "advghostsubnv015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso da Ordem (Nível 15)" : "Order Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whghostgravesigh" }
              ]
            }
          },
          {
            _id: "advghostsubnv018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso da Ordem (Nível 18)" : "Order Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whghostvengspir1" }
              ]
            }
          }
        ]
      }
    },
    {
      _id: "whsublycan000000",
      name: isPt ? "Ordem do Licantropo" : "Order of the Lycan",
      type: "subclass",
      img: "icons/creatures/abilities/werewolf-howl-moon-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Caçadores de sangue da Ordem do Licantropo submetem seus corpos à temível maldição da licantropia, controlando a besta interior através de treinamento e rituais de sangue para rasgar seus inimigos.</p>`
            : `<p>Blood hunters of the Order of the Lycan subject their bodies to the terrible curse of lycanthropy, harnessing the beast within through intense mental discipline to shred their foes.</p>`,
          chat: ""
        },
        identifier: "lycan",
        classIdentifier: "witch-hunter",
        advancement: [
          {
            _id: "advlycansubnv003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Ordem (Nível 3)" : "Order Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycansenses001" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycantransform" }
              ]
            }
          },
          {
            _id: "advlycansubnv007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso da Ordem (Nível 7)" : "Order Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycanstalker01" }
              ]
            }
          },
          {
            _id: "advlycansubnv011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso da Ordem (Nível 11)" : "Order Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycanadvanced1" }
              ]
            }
          },
          {
            _id: "advlycansubnv015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso da Ordem (Nível 15)" : "Order Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycanironwill1" }
              ]
            }
          },
          {
            _id: "advlycansubnv018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso da Ordem (Nível 18)" : "Order Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whlycanmastery01" }
              ]
            }
          }
        ]
      }
    },
    {
      _id: "whsubmutant00000",
      name: isPt ? "Ordem do Mutante" : "Order of the Mutant",
      type: "subclass",
      img: "icons/consumables/potions/potion-tube-corked-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A Ordem do Mutante estuda as toxinas e a alquimia dos monstros que caçam, forjando elixires e compostos químicos voláteis para mutar seu próprio corpo em uma arma adaptativa.</p>`
            : `<p>The Order of the Mutant explores the alchemy and toxins of monsters, crafting volatile mutagens to transform their own biology into an adaptable weapon.</p>`,
          chat: ""
        },
        identifier: "mutant",
        classIdentifier: "witch-hunter",
        advancement: [
          {
            _id: "advmutantsubnv03",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Ordem (Nível 3)" : "Order Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantcraft001" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantformulas" }
              ]
            }
          },
          {
            _id: "advmutantsubnv07",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso da Ordem (Nível 7)" : "Order Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantadvanced" }
              ]
            }
          },
          {
            _id: "advmutantsubnv11",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso da Ordem (Nível 11)" : "Order Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantstrangem" }
              ]
            }
          },
          {
            _id: "advmutantsubnv15",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso da Ordem (Nível 15)" : "Order Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantrobust01" }
              ]
            }
          },
          {
            _id: "advmutantsubnv18",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso da Ordem (Nível 18)" : "Order Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whmutantexalted1" }
              ]
            }
          }
        ]
      }
    },
    {
      _id: "whsubprofanesoul",
      name: isPt ? "Ordem da Alma Profana" : "Order of the Profane Soul",
      type: "subclass",
      img: "icons/magic/unholy/silhouette-robe-evil-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Para enfrentar os poderes abissais e entidades do cosmos, caçadores da Alma Profana usam a própria magia dos inimigos contra eles, forjando pactos com patronos do outro mundo.</p>`
            : `<p>To battle the aberrant powers of the cosmos, hunters of the Profane Soul turn their enemies' own magic against them, forging pacts with otherworldly patrons.</p>`,
          chat: ""
        },
        identifier: "profane-soul",
        classIdentifier: "witch-hunter",
        advancement: [
          {
            _id: "advprofanesubn03",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Ordem (Nível 3)" : "Order Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanepatron1" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanepactmag" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofaneritefoc" }
              ]
            }
          },
          {
            _id: "advprofanesubn07",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso da Ordem (Nível 7)" : "Order Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanefrenzy1" }
              ]
            }
          },
          {
            _id: "advprofanesubn11",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso da Ordem (Nível 11)" : "Order Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanedichan1" }
              ]
            }
          },
          {
            _id: "advprofanesubn15",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso da Ordem (Nível 15)" : "Order Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanearcana1" }
              ]
            }
          },
          {
            _id: "advprofanesubn18",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso da Ordem (Nível 18)" : "Order Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whprofanesoulsyp" }
              ]
            }
          }
        ]
      }
    }
  ];
}

// =============================================================
// 4. CLASSE PRINCIPAL (witch-hunter-classes.json)
// =============================================================

function buildClass(isPt) {
  return [
    {
      _id: "witchhuntercls00",
      name: isPt ? "Caçador de Bruxas" : "Witch Hunter",
      type: "class",
      img: "icons/magic/death/skull-horned-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Guerreiros fanáticos que cruzam a linha tênue entre a humanidade e as monstruosidades que caçam. Sacrificando a própria vitalidade através da magia de sangue e alquimia sombria, o Caçador de Bruxas transforma seu corpo em uma arma viva contra o sobrenatural.</p>
               <h3>Construção Rápida</h3>
               <p>Coloque seu valor de atributo mais alto em <strong>Destreza</strong> ou <strong>Força</strong>, dependendo de você se concentrar em combate corpo-a-corpo ou à distância. Seu próximo valor mais alto deve ser <strong>Inteligência</strong>, que rege a potência de suas maldições de sangue e CDs de salvaguarda, seguido por <strong>Constituição</strong>.</p>`
            : `<p>Driven by an unending pursuit of darkness, witch hunters are warriors who bind themselves to forbidden hemocraft, sacrificing their own vitality to gain dominion over unnatural horrors.</p>
               <h3>Quick Build</h3>
               <p>Make <strong>Dexterity</strong> or <strong>Strength</strong> your highest ability score, followed by <strong>Intelligence</strong> for your Hemocraft save DC and abilities, and <strong>Constitution</strong>.</p>`,
          chat: ""
        },
        identifier: "witch-hunter",
        hitDice: "d10",
        advancement: [
          {
            _id: "advhitpoints0001",
            type: "HitPoints",
            configuration: {}
          },
          {
            _id: "advtraits0000001",
            type: "Trait",
            level: 1,
            configuration: {
              grants: [
                "armor:lgt",
                "armor:med",
                "armor:shl",
                "weapon:sim",
                "weapon:mar",
                "tool:alchemist"
              ],
              choices: [
                {
                  count: 3,
                  pool: [
                    "skills:acr",
                    "skills:arc",
                    "skills:ath",
                    "skills:his",
                    "skills:ins",
                    "skills:inv",
                    "skills:rel",
                    "skills:sur"
                  ]
                }
              ]
            }
          },
          // Dado de Hemomancia
          {
            _id: "advscalehemodie1",
            type: "ScaleValue",
            configuration: {
              identifier: "hemocraft-die",
              type: "dice",
              scale: {
                1: { number: 1, faces: 4 },
                5: { number: 1, faces: 6 },
                11: { number: 1, faces: 8 },
                17: { number: 1, faces: 10 }
              }
            }
          },
          // Maldições Conhecidas
          {
            _id: "advscalecurses01",
            type: "ScaleValue",
            configuration: {
              identifier: "curses-known",
              type: "numeric",
              scale: {
                1: { value: 1 },
                6: { value: 2 },
                10: { value: 3 },
                14: { value: 4 },
                18: { value: 5 }
              }
            }
          },
          // Usos de Sangue Maldito
          {
            _id: "advscalemaledi01",
            type: "ScaleValue",
            configuration: {
              identifier: "blood-maledict-uses",
              type: "numeric",
              scale: {
                1: { value: 1 },
                6: { value: 2 },
                11: { value: 3 },
                17: { value: 4 }
              }
            }
          },
          // Concessão de Nível 1
          {
            _id: "advitemgrant0001",
            type: "ItemGrant",
            level: 1,
            title: isPt ? "Recursos de 1º Nível" : "1st Level Features",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatbane000001" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatbloodmaled" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatwepmaster1" }
              ]
            }
          },
          // Concessão de Nível 2
          {
            _id: "advitemgrant0002",
            type: "ItemGrant",
            level: 2,
            title: isPt ? "Recursos de 2º Nível" : "2nd Level Features",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatfightstyl1" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatcrimsonrit" }
              ]
            }
          },
          // Concessão de Subclasse no Nível 3
          {
            _id: "advitemgrantsub3",
            type: "Subclass",
            level: 3,
            title: isPt ? "Ordem do Caçador (Subclasse)" : "Blood Hunter Order",
            configuration: {}
          },
          // Concessão de Nível 5
          {
            _id: "advitemgrant0005",
            type: "ItemGrant",
            level: 5,
            title: isPt ? "Recurso de 5º Nível" : "5th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatextraattk1" }
              ]
            }
          },
          // Concessão de Nível 6
          {
            _id: "advitemgrant0006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso de 6º Nível" : "6th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatbrandcast1" }
              ]
            }
          },
          // Concessão de Nível 7
          {
            _id: "advitemgrant0007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso de 7º Nível" : "7th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatcrimsonim7" }
              ]
            }
          },
          // Concessão de Nível 9
          {
            _id: "advitemgrant0009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso de 9º Nível" : "9th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatgrimpsych1" }
              ]
            }
          },
          // Concessão de Nível 10
          {
            _id: "advitemgrant0010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso de 10º Nível" : "10th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatdarkaugmnt" }
              ]
            }
          },
          // Concessão de Nível 13
          {
            _id: "advitemgrant0013",
            type: "ItemGrant",
            level: 13,
            title: isPt ? "Recurso de 13º Nível" : "13th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatbrandteth1" }
              ]
            }
          },
          // Concessão de Nível 14
          {
            _id: "advitemgrant0014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recursos de 14º Nível" : "14th Level Features",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeathardeneds1" },
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatesoteric14" }
              ]
            }
          },
          // Concessão de Nível 20
          {
            _id: "advitemgrant0020",
            type: "ItemGrant",
            level: 20,
            title: isPt ? "Recurso de 20º Nível" : "20th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.witch-hunter-features.Item.whfeatsanguinem1" }
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
saveFiles("witch-hunter-features.json", enFeatures, ptFeatures);

const enItems = buildItems(false);
const ptItems = buildItems(true);
saveFiles("witch-hunter-items.json", enItems, ptItems);

const enSubclasses = buildSubclasses(false);
const ptSubclasses = buildSubclasses(true);
saveFiles("witch-hunter-subclasses.json", enSubclasses, ptSubclasses);

const enClass = buildClass(false);
const ptClass = buildClass(true);
saveFiles("witch-hunter-classes.json", enClass, ptClass);

console.log("Witch Hunter data generated successfully for pt-BR and en!");
