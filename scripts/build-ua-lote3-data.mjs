/**
 * build-ua-lote3-data.mjs
 * Construtor dos dados para os Arquétipos de Unearthed Arcana (Lote 3: Underdark, Vilões e Subclasses Atualizadas)
 * Integra as 14 subclasses restantes (totalizando 46 subclasses de UA e 58 no módulo).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");
const PT_DIR = path.join(DATA_DIR, "pt-BR");
const EN_DIR = path.join(DATA_DIR, "en");

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
// 1. CARACTERÍSTICAS DO LOTE 3 (ua-features.json)
// -------------------------------------------------------------
export function buildLote3Features(isPt) {
  return [
    // =========================================================
    // UNDERDARK OPTIONS (UA2026-UnderdarkOptions.pdf)
    // =========================================================

    // 1. BARBARIAN: Path of Unlight
    {
      _id: "uabarbunlrad0001",
      name: isPt ? "Fúria Radiante" : "Radiant Rage",
      type: "feat",
      img: "icons/magic/light/explosion-star-glow-silhouette.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, a Não-Luz que corre pelas suas veias alimenta sua Fúria. Enquanto sua Fúria estiver ativa, se uma criatura atingir você com uma jogada de ataque corpo a corpo, ela sofre Dano Radiante igual ao seu bônus de Dano de Fúria.</p>
               <p>Além disso, enquanto sua Fúria estiver ativa, você emana Luz Plena em um raio de 6 metros (20 pés).</p>`
            : `<p>At 3rd level, the Unlight coursing through you fuels your Rage. If a creature hits you with a melee attack roll while your Rage is active, the creature takes Radiant damage equal to your Rage Damage bonus.</p>
               <p>Additionally, while your Rage is active, you shed Bright Light in a 20-foot radius.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: 6, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbunlrev0001",
      name: isPt ? "Revelação da Não-Luz" : "Unlight Revelation",
      type: "feat",
      img: "icons/magic/perception/eye-ringed-glow-angry-large-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você ganha proficiência na perícia Percepção, caso já não a possua. Você também adquire Especialização nessa perícia.</p>
               <p>Enquanto sua Fúria estiver ativa, você possui Percepção às Cegas com alcance igual ao raio de Luz Plena concedido pela sua Fúria Radiante.</p>`
            : `<p>At 6th level, you have proficiency in the Perception skill, if you lack it. You also gain Expertise in that skill.</p>
               <p>While your Rage is active, you have Blindsight with a range equal to that of the Bright Light provided by your Radiant Rage.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbunlinf0001",
      name: isPt ? "Não-Luz Infecciosa" : "Infectious Unlight",
      type: "feat",
      img: "icons/magic/light/beam-strike-vertical-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, o dano causado pelo seu Golpe Brutal pode ser Radiante ou do tipo usual (sua escolha). O efeito a seguir é adicionado às suas opções de Golpe Brutal:</p>
               <p><strong>Infecção Radiante:</strong> O alvo fica infectado com Não-Luz por 1 minuto. Enquanto infectado, ele emite Luz Plena em um raio de 3 metros (10 pés). Além disso, no início de cada um dos turnos dele, o alvo sofre 1d6 de Dano Radiante. O alvo realiza um teste de resistência de Constituição (CD 8 + seu modificador de Força + seu Bônus de Proficiência) ao final de cada um dos turnos dele, encerrando o efeito com um sucesso.</p>`
            : `<p>At 10th level, damage you deal with Brutal Strike can be Radiant or the usual type (your choice). The following effect is now among your Brutal Strike options:</p>
               <p><strong>Radiant Infection:</strong> The target becomes infected with Unlight for 1 minute. While infected, it sheds Bright Light in a 10-foot radius. Additionally, at the start of each of its turns, the target takes 1d6 Radiant damage. The target makes a Constitution saving throw (DC 8 plus your Strength modifier and Proficiency Bonus) at the end of each of its turns, ending the effect on itself on a success.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbunlhar0001",
      name: isPt ? "Arauto da Não-Luz" : "Harbinger of Unlight",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você ganha Resistência a Dano Radiante.</p>`
            : `<p>At 10th level, you have Resistance to Radiant damage.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbunlbrl0001",
      name: isPt ? "Fúria Brilhante" : "Brilliant Rage",
      type: "feat",
      img: "icons/magic/light/explosion-star-large-orange-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, a aura da sua Não-Luz é potencializada. Enquanto sua Fúria estiver ativa, você emana Luz Plena em um raio de 9 metros (30 pés).</p>
               <p>Com uma Ação Bônus, você libera um brilho cegante. Cada criatura à sua escolha a até 9 metros de você realiza um teste de resistência de Constituição (CD 8 + seu modificador de Força + seu Bônus de Proficiência). Se falhar, sofre 1d12 de Dano Radiante e fica Cega até o final do seu próximo turno. Se tiver sucesso, sofre metade do dano e não fica cega.</p>
               <p>Uma vez usado, você não pode usar este recurso novamente até terminar um Descanso Longo, a menos que gaste um uso de sua Fúria (nenhuma ação exigida) para restaurá-lo.</p>`
            : `<p>At 14th level, the aura of your Unlight is bolstered. While your Rage is active, you shed Bright Light in a 30-foot radius.</p>
               <p>As a Bonus Action, you unleash blinding brilliance. When you do, each creature of your choice within 30 feet of you makes a Constitution saving throw (DC 8 plus your Strength modifier and Proficiency Bonus). On a failed save, a creature takes 1d12 Radiant damage and has the Blinded condition until the end of your next turn. On a successful save, a creature takes half damage only.</p>
               <p>Once you use this feature, you can’t use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 9, width: null, units: "m", type: "radius" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: 1, max: "1", per: "lr", recovery: "" },
        save: { ability: "con", dc: null, scaling: "str" }
      }
    },

    // 2. ROGUE: House Agent
    {
      _id: "uaroghseins00001",
      name: isPt ? "Insígnia da Casa" : "House Insignia",
      type: "feat",
      img: "icons/commodities/treasure/token-runed-silver.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você recebe um amuleto mágico em forma de broche ou moeda que marca você como um agente de seu patrocinador (como uma casa drow) e ostenta sua heráldica. Enquanto portar essa insígnia, você pode conjurar certas magias através dela, utilizando Carisma como sua habilidade de conjuração:</p>
               <ul>
                 <li><strong>Truques:</strong> Você aprende o truque <em>Amizade (Friends)</em>.</li>
                 <li><strong>Encontrar Familiar:</strong> Você pode conjurar <em>Encontrar Familiar</em> apenas como um Ritual, assumindo a forma de aranha. Seu patrocinador fornece os componentes materiais da primeira conjuração.</li>
                 <li><strong>Magias da Insígnia:</strong> No 3º nível: <em>Enfeitiçar Pessoa (Charm Person)</em>; no 5º nível: <em>Sugestão (Suggestion)</em>; no 9º nível: <em>Padrão Hipnótico (Hypnotic Pattern)</em>. Cada magia pode ser conjurada uma vez por Descanso Longo sem gastar espaços de magia.</li>
               </ul>
               <p>Se você perder sua insígnia, sua casa enviará uma nova por correio, familiar ou teletransporte após você terminar um Descanso Longo.</p>`
            : `<p>At 3rd level, you gain a magical token in the form of a brooch or coin that marks you as an agent of your sponsor and bears their heraldry. Charisma is your spellcasting ability for spells cast with your insignia:</p>
               <ul>
                 <li><strong>Cantrips:</strong> You learn the <em>Friends</em> cantrip.</li>
                 <li><strong>Find Familiar:</strong> You can cast <em>Find Familiar</em> only as a Ritual, choosing the Spider form.</li>
                 <li><strong>Insignia Spells:</strong> 3rd level: <em>Charm Person</em>; 5th level: <em>Suggestion</em>; 9th level: <em>Hypnotic Pattern</em>. Once you cast an insignia spell, you can't cast it again until you finish a Long Rest.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uaroghsepres0001",
      name: isPt ? "Presença Cativante" : "Charming Presence",
      type: "feat",
      img: "icons/skills/social/diplomacy-handshake-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você pode realizar a ação de Influenciar como uma Ação Bônus. Além disso, escolha uma das seguintes perícias: Atuação, Enganação, Intimidação ou Persuasão. Você ganha proficiência na perícia escolhida.</p>`
            : `<p>At 3rd level, you can take the Influence action as a Bonus Action. Additionally, choose one of the following skills: Deception, Intimidation, Performance, or Persuasion. You have proficiency in that skill.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uaroghseback0001",
      name: isPt ? "Golpe pelas Costas" : "Backstab",
      type: "feat",
      img: "icons/weapons/daggers/dagger-poison-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 9º nível, você tem Vantagem nas jogadas de ataque contra criaturas a até 1,5 metro de você que sejam Amistosas com você ou que estejam sob a condição Enfeitiçado. Você também ganha a seguinte opção de Golpe Furtivo:</p>
               <p><strong>Traição Atordoante (Custo: 4d6):</strong> Se o seu alvo era Amistoso com você ou estava sob a condição Enfeitiçado quando você o atingiu, o alvo fica Atordoado até o início do seu próximo turno.</p>`
            : `<p>At 9th level, you have Advantage on attack rolls against creatures within 5 feet of you that are Friendly to you or have the Charmed Condition. You also gain the following Cunning Strike option:</p>
               <p><strong>Stunning Betrayal (Cost: 4d6):</strong> If your target was Friendly to you or had the Charmed condition when you hit it, the target has the Stunned condition until the start of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 1.5, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uaroghsesilv0001",
      name: isPt ? "Língua de Prata" : "Silver Tongue",
      type: "feat",
      img: "icons/skills/social/speech-bubble-whisper-silver.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, a atitude Hostil de uma criatura não impõe Desvantagem em seus testes de Carisma para influenciá-la.</p>`
            : `<p>At 13th level, a creature’s Hostile attitude doesn’t impose Disadvantage on your Charisma checks to influence that creature.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uaroghseinf00001",
      name: isPt ? "Parceiro de Infiltração" : "Infiltration Partner",
      type: "feat",
      img: "icons/creatures/webs/spider-silk-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 13º nível, o familiar obtido pela magia <em>Encontrar Familiar</em> ganha Visão no Escuro de 36 metros (120 pés) e Visão Verdadeira de 9 metros (30 pés).</p>
               <p>Além disso, quando você conjura a magia <em>Encontrar Familiar</em> ou termina um Descanso Curto ou Longo tendo um familiar ativo, você pode conceder ao seu familiar Pontos de Vida Temporários iguais ao seu nível de Ladino.</p>`
            : `<p>At 13th level, the familiar you have through the Find Familiar spell gains Darkvision with a range of 120 feet and Truesight with a range of 30 feet.</p>
               <p>Additionally, when you cast the Find Familiar spell or finish a Short or Long Rest while you have a familiar, you can grant your familiar Temporary Hit Points equal to your Rogue level.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uaroghsesubt0001",
      name: isPt ? "Manipulador Sutil" : "Subtle Manipulator",
      type: "feat",
      img: "icons/magic/control/hypnosis-mesmerism-eye-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, você adquire a seguinte opção de Golpe Furtivo:</p>
               <p><strong>Confundir (Custo: 5d6):</strong> O alvo deve ser bem-sucedido em um teste de resistência de Sabedoria com CD igual à sua CD de conjuração ou ficará Enfeitiçado por 1 minuto. O alvo pode repetir a salvaguarda quando sofrer qualquer dano, encerrando o efeito se tiver sucesso.</p>
               <p>Além disso, você pode conjurar o truque <em>Amizade (Friends)</em> como uma Ação Bônus. O alvo não é mais bem-sucedido automaticamente na salvaguarda se não for um humanoide ou se você estiver em combate com ele.</p>
               <p>Por fim, quando uma magia conjurada por você que impôs a condição Enfeitiçado termina, o alvo não percebe que foi enfeitiçado por você.</p>`
            : `<p>At 17th level, you gain the following Cunning Strike option:</p>
               <p><strong>Confound (Cost: 5d6):</strong> The target must succeed on a Wisdom saving throw with a DC equal to your spellcasting DC or have the Charmed condition for 1 minute. The target can repeat the save when it takes any damage, ending the effect on itself on a success.</p>
               <p>Additionally, you can cast the Friends spell as a Bonus Action without its usual humanoid/combat immunities. When a spell you cast that causes the Charmed condition ends, the target doesn’t know it was Charmed by you.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 3. WIZARD: Imaskarcanist
    {
      _id: "uawizimaskadp001",
      name: isPt ? "Adepto da Não-Luz" : "Unlight Adept",
      type: "feat",
      img: "icons/magic/light/beam-strike-vertical-magenta.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você aprende a entrelaçar Não-Luz em suas magias ofensivas. Quando conjurar uma magia que cause dano de Ácido, Eletricidade, Fogo, Frio ou Trovão, você pode alterar esse tipo de dano para Radiante.</p>
               <p>Além disso, qualquer Penumbra criada por magias que você conjurar se torna Luz Plena em vez disso.</p>`
            : `<p>At 3rd level, you know how to weave Unlight into your damaging spells. When you cast a spell that deals Acid, Cold, Fire, Lightning, or Thunder damage, you can change that damage type to Radiant.</p>
               <p>In addition, Dim Light created by spells you cast is Bright Light instead.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawizimaskinv001",
      name: isPt ? "Vigor da Não-Luz" : "Unlight Invigoration",
      type: "feat",
      img: "icons/magic/light/hand-sparks-glow-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você pode imbuir criaturas com a Não-Luz extraída da sua própria força vital. Com uma Ação Bônus, escolha uma criatura voluntária que possa ver a até 9 metros de você e role um ou dois dos seus Dados de Vida. Esses dados são gastos. O alvo recebe Pontos de Vida Temporários iguais ao total rolado + seu modificador de Inteligência e, enquanto mantiver esses Pontos de Vida Temporários, possui Vantagem em testes de Força e emite Luz Plena em um raio de 3 metros.</p>`
            : `<p>At 3rd level, as a Bonus Action, choose a willing creature you can see within 30 feet of you and roll one or two of your Hit Point Dice. Those dice are expended. The target gains Temporary Hit Points equal to the total rolled plus your Intelligence modifier, and until the target has no Temporary Hit Points, it has Advantage on Strength checks and sheds Bright Light in a 10-foot radius.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawizimaskres001",
      name: isPt ? "Restauração da Não-Luz" : "Unlight Restoration",
      type: "feat",
      img: "icons/magic/life/cross-sparkle-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode canalizar os efeitos restauradores da Não-Luz. Com uma Ação Bônus, escolha uma criatura que possa ver a até 9 metros de você e role um ou dois dos seus Dados de Vida. Esses dados são gastos. O alvo recupera Pontos de Vida iguais ao total rolado e emana Luz Plena em um raio de 3 metros até o final do próximo turno dele.</p>
               <p>Se você gastou dois Dados de Vida, pode optar por encerrar uma das seguintes condições no alvo: Cego, Envenenado, Paralisado ou Surdo. Se o fizer, o alvo não recupera Pontos de Vida.</p>`
            : `<p>At 6th level, as a Bonus Action, choose a creature you can see within 30 feet of you and roll one or two of your Hit Point Dice. Those dice are expended. The target regains Hit Points equal to the total rolled and sheds Bright Light in a 10-foot radius until the end of its next turn.</p>
               <p>If you expended two Hit Point Dice, you can choose to end one of the following conditions on the target: Blinded, Deafened, Paralyzed, or Poisoned instead of restoring Hit Points.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawizimasksec001",
      name: isPt ? "Segredos de Imaskar Profunda" : "Secrets of Deep Imaskar",
      type: "feat",
      img: "icons/sundries/books/book-runed-glowing-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, seus estudos dos Imaskarcana concedem benefícios arcanos inestimáveis:</p>
               <ul>
                 <li><strong>Tradição dos Imaskarcana:</strong> Você pode sintonizar-se com um item mágico realizando uma Ação Mágica (em vez de um descanso). 1 vez por Descanso Longo.</li>
                 <li><strong>Não-Luz Penetrante:</strong> Suas magias ignoram Resistência a Dano Radiante.</li>
                 <li><strong>Resiliência da Não-Luz:</strong> Você ganha Resistência a Dano Radiante.</li>
                 <li><strong>Selos de Imaskar:</strong> Você sempre tem a magia <em>Glifo de Proteção (Glyph of Warding)</em> preparada e pode conjurá-la uma vez sem gastar espaço de magia nem componentes materiais, no círculo mais alto de magia de Mago que você puder conjurar. Recarrega ao terminar um Descanso Longo.</li>
               </ul>`
            : `<p>At 10th level, your research into the Imaskarcana grants you the following benefits:</p>
               <ul>
                 <li><strong>Imaskarcana Lore:</strong> You can attune yourself to a magic item as a Magic action (once per Long Rest).</li>
                 <li><strong>Piercing Unlight:</strong> Your spells ignore Resistance to Radiant damage.</li>
                 <li><strong>Unlight Resilience:</strong> You gain Resistance to Radiant damage.</li>
                 <li><strong>Imaskar Seals:</strong> You always have <em>Glyph of Warding</em> prepared and can cast it once per Long Rest without expending a spell slot or material components, cast at your highest available Wizard spell slot level.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawizimaskdom001",
      name: isPt ? "Ruína da Não-Luz" : "Doom of Unlight",
      type: "feat",
      img: "icons/magic/light/explosion-star-supernova-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, quando uma criatura sofrer Dano Radiante de uma magia que você conjurar, você pode usar uma Reação para amaldiçoá-la com a Não-Luz. A criatura realiza uma salvaguarda de Constituição contra a CD das suas magias. Em caso de falha, fica amaldiçoada até o efeito terminar:</p>
               <ul>
                 <li>O alvo emana Luz Plena em um raio de 6 metros.</li>
                 <li>Jogadas de ataque contra o alvo têm Vantagem.</li>
                 <li>No início de cada turno dele, o alvo sofre Dano Radiante igual ao seu nível total de personagem.</li>
                 <li>O alvo tem Vantagem em testes de Força e jogadas de ataque corpo a corpo. Se atingir outra criatura com um ataque corpo a corpo, ele pode repetir o teste de Constituição, encerrando a maldição em caso de sucesso.</li>
                 <li>Se o alvo for reduzido a 0 Pontos de Vida, ele explode! Role um número de d8s igual à metade do seu nível de personagem. Criaturas em uma Emanação de 3 metros centrada nele sofrem Dano Radiante igual ao total rolado.</li>
               </ul>
               <p>Você pode tentar amaldiçoar uma criatura uma vez por Descanso Longo, ou restaurar o uso gastando um espaço de magia de 6º nível ou superior.</p>`
            : `<p>At 14th level, when a creature takes Radiant damage from a spell you cast, you can use a Reaction to curse it. The target makes a Constitution save against your spell save DC. On a failure, it suffers:</p>
               <ul>
                 <li>Sheds Bright Light in a 20-foot radius; attacks against it have Advantage.</li>
                 <li>Takes Radiant damage equal to your character level at the start of each of its turns.</li>
                 <li>Has Advantage on Strength checks and melee attacks; hitting another creature allows it to repeat the save to end the curse.</li>
                 <li>If reduced to 0 HP, it explodes: creatures within 10 ft take Radiant damage equal to half your level in d8s.</li>
               </ul>
               <p>Recharges on a Long Rest or by expending a 6th+ level spell slot.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-UnderdarkOptions" },
        activation: { type: "reaction", cost: 1, condition: "Quando criatura sofre Dano Radiante de magia sua" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 18, long: null, units: "m" },
        uses: { value: 1, max: "1", per: "lr", recovery: "" },
        save: { ability: "con", dc: null, scaling: "int" }
      }
    },

    // =========================================================
    // VILLAINOUS OPTIONS II (UA2026-VillainousOptions02.pdf)
    // =========================================================

    // 4. BARBARIAN: Path of Lament
    {
      _id: "uabarblamban0001",
      name: isPt ? "Lamento da Banshee" : "Banshee's Wail",
      type: "feat",
      img: "icons/magic/control/fear-fright-monster-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao ativar sua Fúria ou como uma Ação Bônus enquanto sua Fúria estiver ativa, você pode soltar um lamento fúnebre. Cada criatura à sua escolha em uma Emanação de 9 metros (30 pés) originada de você realiza um teste de resistência de Constituição (CD 8 + seu modificador de Constituição + seu Bônus de Proficiência). Se falhar, sofre Dano Psíquico e fica Surda por 1 minuto. Se tiver sucesso, sofre metade do dano e não fica surda. Para determinar o dano, role um número de d12s igual ao seu bônus de Dano de Fúria e some-os.</p>
               <p>Você pode usar este recurso um número de vezes igual ao seu modificador de Constituição (mínimo de uma vez) e recupera todos os usos ao terminar um Descanso Longo. Você também pode recuperar todos os usos gastando um uso de Fúria (nenhuma ação exigida).</p>`
            : `<p>At 3rd level, when you activate your Rage or as a Bonus Action while your Rage is active, you can let out a doleful wail. Each creature of your choice in a 30-foot Emanation makes a Constitution saving throw (DC 8 + Con mod + PB). On a failed save, a creature takes Psychic damage equal to a number of d12s equal to your Rage Damage bonus and has the Deafened condition for 1 minute. On a successful save, half damage only.</p>
               <p>Uses equal to your Constitution modifier per Long Rest, or expend a Rage use to restore all uses.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 9, width: null, units: "m", type: "radius" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "@abilities.con.mod", per: "lr", recovery: "" },
        save: { ability: "con", dc: null, scaling: "con" }
      }
    },
    {
      _id: "uabarblamcom0001",
      name: isPt ? "Comunhão com os Mortos" : "Commune with the Dead",
      type: "feat",
      img: "icons/magic/death/skull-glow-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode conjurar a magia <em>Falar com os Mortos (Speak with Dead)</em> apenas como um Ritual. Sabedoria é a sua habilidade de conjuração para ela.</p>`
            : `<p>At 6th level, you can cast the <em>Speak with Dead</em> spell but only as a Ritual. Wisdom is your spellcasting ability for it.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarblamhor0001",
      name: isPt ? "Golpe Horripilante" : "Horrifying Strike",
      type: "feat",
      img: "icons/skills/melee/blood-slash-blade-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, uma vez por turno, ao atingir uma criatura com uma jogada de ataque baseada em Força enquanto sua Fúria estiver ativa, você pode aterrorizar o alvo. O alvo deve ser bem-sucedido em um teste de resistência de Sabedoria (CD 8 + seu modificador de Constituição + seu Bônus de Proficiência) ou ficará Amedrontado até o início do seu próximo turno.</p>`
            : `<p>At 6th level, once per turn when you hit a creature with a Strength-based attack roll while your Rage is active, the target must succeed on a Wisdom saving throw (DC 8 + Con mod + PB) or have the Frightened condition until the start of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "wis", dc: null, scaling: "con" }
      }
    },
    {
      _id: "uabarblamang0001",
      name: isPt ? "Angústia do Outro Mundo" : "Otherworldly Anguish",
      type: "feat",
      img: "icons/magic/death/skull-flames-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você canaliza uma tristeza tão profunda que transpassa os limites dos vivos:</p>
               <ul>
                 <li><strong>Lamento Mortal:</strong> Se um alvo falhar no teste de resistência contra o seu Lamento da Banshee e tiver Pontos de Vida iguais ou inferiores ao dobro do seu nível de Bárbaro, ele cai a 0 Pontos de Vida em vez de sofrer dano.</li>
                 <li><strong>Tristeza Impenetrável:</strong> Você não pode ser possuído.</li>
                 <li><strong>Resistência:</strong> Você possui Resistência a dano Necrótico e de Frio enquanto sua Fúria estiver ativa.</li>
               </ul>`
            : `<p>At 10th level, you gain the following benefits:</p>
               <ul>
                 <li><strong>Deathly Wail:</strong> If a target fails against Banshee’s Wail and has HP equal to twice your Barbarian level or fewer, it drops to 0 HP instead of taking damage.</li>
                 <li><strong>Impenetrable Sorrow:</strong> You can’t be possessed.</li>
                 <li><strong>Resistance:</strong> You have Resistance to Cold and Necrotic damage while your Rage is active.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarblamsor0001",
      name: isPt ? "Forma do Pesar" : "Sorrow Form",
      type: "feat",
      img: "icons/magic/death/undead-skeleton-energy-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, ao ativar sua Fúria, você pode potencializar a si mesmo com a morte-viva por 1 minuto ou até cair a 0 Pontos de Vida:</p>
               <ul>
                 <li><strong>Imunidades:</strong> Você é imune às condições Enfeitiçado e Amedrontado (encerrando-as se estiver sob efeito delas) e não pode adquirir níveis de Exaustão.</li>
                 <li><strong>Golpe Ceifador de Vida:</strong> Quando uma criatura falhar na salvaguarda contra o seu Golpe Horripilante, ela sofre 2d10 de Dano Necrótico adicional e você recupera Pontos de Vida iguais ao dano necrótico causado.</li>
                 <li><strong>Morte-Viva:</strong> Seu tipo de criatura se torna Morto-Vivo.</li>
               </ul>
               <p>Você pode usar esta forma uma vez por Descanso Longo.</p>`
            : `<p>At 14th level, when you activate your Rage, you can empower yourself with undeath for 1 minute:</p>
               <ul>
                 <li><strong>Immunities:</strong> Immunity to Charmed and Frightened conditions, and cannot gain Exhaustion levels.</li>
                 <li><strong>Life-Draining Strike:</strong> When a creature fails against Horrifying Strike, it takes 2d10 Necrotic damage and you regain HP equal to the Necrotic damage dealt.</li>
                 <li><strong>Undead:</strong> Your creature type is Undead.</li>
               </ul>
               <p>Recharges after a Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: 1, max: "1", per: "lr", recovery: "" }
      }
    },

    // 5. MONK: Warrior of Venom
    {
      _id: "uamonkvenwep0001",
      name: isPt ? "Envenenar Arma" : "Envenom Weapon",
      type: "feat",
      img: "icons/weapons/daggers/dagger-poison-skull-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, no início do seu turno, você pode gastar 1 Ponto de Foco para aplicar uma toxina produzida a partir do seu próprio sangue a uma arma de monge que esteja empunhando. Uma criatura atingida pela arma sofre um dos seguintes efeitos à sua escolha:</p>
               <ul>
                 <li><strong>Toxina Desaceleradora:</strong> Até o início do seu próximo turno, o Deslocamento do alvo é reduzido pela metade, ele não pode realizar Reações e só pode realizar uma ação ou uma Ação Bônus no turno dele, não ambas.</li>
                 <li><strong>Veneno:</strong> O alvo sofre Dano de Veneno igual a duas rolagens do seu dado de Artes Marciais.</li>
               </ul>
               <p>A toxina permanece potente por 1 minuto ou até uma criatura sofrer dano da arma.</p>`
            : `<p>At 3rd level, at the start of your turn, you can expend 1 Focus Point to apply a toxin from your blood to a Monk weapon you're holding. A creature hit takes one effect:</p>
               <ul>
                 <li><strong>Slowing Toxin:</strong> Until start of your next turn, target's Speed is halved; cannot take Reactions; and can take an action or Bonus Action on its turn, not both.</li>
                 <li><strong>Venom:</strong> The target takes Poison damage equal to two rolls of your Martial Arts die.</li>
               </ul>
               <p>Lasts 1 minute or until the weapon deals damage.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: 1, condition: "Início do turno" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkvenpot0001",
      name: isPt ? "Arsenal Potente" : "Potent Arsenal",
      type: "feat",
      img: "icons/tools/laboratory/vials-glass-poison-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você recebe um Kit de Envenenador e ganha proficiência com ele. Ao criar um Veneno Básico, você pode fazê-lo ao longo de 1 dia (8 horas de trabalho).</p>
               <p>Além disso, sempre que causar Dano de Veneno com uma característica de Monge ou com uma arma de monge, você pode alterar esse tipo de dano para Ácido.</p>`
            : `<p>At 3rd level, you gain a Poisoner’s Kit and proficiency with it. You can craft Basic Poison over 1 day (8 hours). Additionally, whenever you deal Poison damage with a Monk feature or weapon, you can change that damage type to Acid.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkventch0001",
      name: isPt ? "Toque Tóxico" : "Toxic Touch",
      type: "feat",
      img: "icons/skills/melee/unarmed-punch-fist-poison-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, como uma Ação Mágica, você pode gastar 1 Ponto de Foco para aplicar uma toxina potente a uma criatura que você tocar. O alvo realiza uma salvaguarda de Constituição. Se falhar, fica Envenenado por 1 minuto e sofre um efeito à sua escolha:</p>
               <ul>
                 <li><strong>Intoxicante:</strong> O alvo fica Enfeitiçado pela duração ou até você ou seus aliados causarem dano a ele.</li>
                 <li><strong>Sedativo:</strong> O alvo cai no sono e fica Inconsciente pela duração. Outra criatura pode usar uma ação para acordá-lo.</li>
                 <li><strong>Soro da Verdade:</strong> O alvo não pode mentir conscientemente pela duração.</li>
               </ul>`
            : `<p>At 6th level, as a Magic action, expend 1 Focus Point to touch a creature. On a failed Con save, it is Poisoned for 1 minute and gains one effect:</p>
               <ul>
                 <li><strong>Intoxicant:</strong> Charmed until damaged.</li>
                 <li><strong>Sedative:</strong> Unconscious until shaken awake as an action.</li>
                 <li><strong>Truth Serum:</strong> Cannot knowingly lie for the duration.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "action", cost: 1, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "touch" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "con", dc: null, scaling: "wis" }
      }
    },
    {
      _id: "uamonkvenref0001",
      name: isPt ? "Refinador de Toxinas" : "Toxin Refiner",
      type: "feat",
      img: "icons/magic/nature/root-vine-glow-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, seu corpo filtra e metaboliza toxinas:</p>
               <ul>
                 <li>Você ganha Imunidade a Dano de Veneno.</li>
                 <li>Sempre que for submetido a Dano de Veneno, suas opções de Envenenar Arma causam Dano de Veneno adicional igual a uma rolagem do seu dado de Artes Marciais (uma vez até o final do seu próximo turno).</li>
                 <li>Ao ingerir um veneno, você recupera Pontos de Vida iguais a uma rolagem do seu dado de Artes Marciais.</li>
               </ul>`
            : `<p>At 11th level, you gain Immunity to Poison damage. When subjected to Poison damage, your Envenom Weapon deals extra Poison damage equal to one Martial Arts die. Ingesting poison restores HP equal to one Martial Arts die roll.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkvenbld0001",
      name: isPt ? "Sangue Tóxico" : "Toxic Blood",
      type: "feat",
      img: "icons/magic/unholy/liquid-blood-drip-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, quem derrama seu sangue sofre as consequências. Sempre que uma criatura atingir você com um ataque corpo a corpo, ela sofre 1d6 de Dano de Veneno. Se você estiver com metade ou menos da sua vida máxima (Ensanguentado/Bloodied), o atacante sofre dano igual a uma rolagem do seu dado de Artes Marciais.</p>`
            : `<p>At 11th level, when a creature hits you with a melee attack roll, it takes 1d6 Poison damage. If you are Bloodied, it takes Poison damage equal to one roll of your Martial Arts die instead.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkvenbrt0001",
      name: isPt ? "Sopro Alucinógeno" : "Hallucinogenic Breath",
      type: "feat",
      img: "icons/magic/air/fog-gas-cloud-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, ao realizar a ação de Ataque, você pode gastar 2 Pontos de Foco para substituir um de seus ataques por uma exalação de vapores alucinógenos contra uma criatura que possa ver a até 9 metros. O alvo realiza uma salvaguarda de Constituição. Se falhar, sofre Dano de Veneno igual a três rolagens do seu dado de Artes Marciais e fica Amedrontado por 1 minuto (ou até sofrer dano). Enquanto amedrontado, o alvo realiza a ação de Disparada e foge de você pela rota mais segura no turno dele. Se tiver sucesso na salvaguarda, sofre metade do dano apenas.</p>`
            : `<p>At 17th level, as part of the Attack action, spend 2 Focus Points to replace one attack with hallucinogenic breath at a creature within 30 feet. Con save: on failure, takes 3 Martial Arts dice of Poison damage and is Frightened for 1 minute (dashing away on turns); half damage on success.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: 2, condition: "Substitui 1 ataque" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "con", dc: null, scaling: "wis" }
      }
    },

    // 6. WARLOCK: Primordial Patron
    {
      _id: "uawlkprimnod0001",
      name: isPt ? "Nodo Elemental" : "Elemental Node",
      type: "feat",
      img: "icons/magic/elements/sphere-elements-fire-earth-water-air.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, com uma Ação Mágica, você cria uma Esfera de 1,5 metro de raio de magia elemental em um ponto visível a até 18 metros de você. Nos turnos seguintes, você pode usar uma Ação Bônus para mover o nodo até 9 metros.</p>
               <p>Quando o nodo surge, quando ele se move para o espaço de uma criatura ou quando uma criatura entra nele ou encerra o turno nele (máximo 1 vez por turno), a criatura realiza uma salvaguarda de Destreza. Se falhar, sofre 1d6 de dano do tipo do seu elemento escolhido (Ar: Trovão, Terra: Ácido, Fogo: Fogo, Água: Frio); se passar, sofre metade do dano.</p>
               <p>O dano aumenta em 1d6 nos níveis 6 (2d6) e 14 (3d6). O nodo dura 1 minuto e você pode conjurá-lo 1 vez por Descanso Curto ou Longo, ou restaurar gastando um espaço de magia de Pacto.</p>`
            : `<p>At 3rd level, as a Magic action, create a 5-foot-radius Sphere of elemental magic within 60 feet. As a Bonus Action on later turns, move it up to 30 feet.</p>
               <p>Dex save: 1d6 damage of chosen element (Air: Thunder, Earth: Acid, Fire: Fire, Water: Cold) on failure, half on success. Damage increases to 2d6 at 6th level and 3d6 at 14th level. Lasts 1 minute. Recharges on Short or Long Rest, or expend a Pact Magic slot.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "action", cost: 1, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 1.5, width: null, units: "m", type: "sphere" },
        range: { value: 18, long: null, units: "m" },
        uses: { value: 1, max: "1", per: "sr", recovery: "" },
        save: { ability: "dex", dc: null, scaling: "cha" }
      }
    },
    {
      _id: "uawlkprimspe0001",
      name: isPt ? "Magias Elementais" : "Elemental Spells",
      type: "feat",
      img: "icons/sundries/books/book-elemental-runes-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você sempre tem certas magias preparadas, de acordo com a tabela de Magias Elementais e o elemento escolhido para o seu pacto:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Esfera Cromática, Visão no Escuro</em> + Ar (<em>Queda Suave, Despedaçar</em>), Terra (<em>Constrição, Tranca Arcana</em>), Fogo (<em>Mãos Flamejantes, Esquentar Metal</em>), Água (<em>Alterar-se, Faca de Gelo</em>).</li>
                 <li><strong>5º Nível:</strong> <em>Arma Elemental</em> + Ar (<em>Voo</em>), Terra (<em>Crescer Plantas</em>), Fogo (<em>Bola de Fogo</em>), Água (<em>Caminhar na Água</em>).</li>
                 <li><strong>7º Nível:</strong> <em>Invocar Elemental</em> + Ar (<em>Movimentação Livre</em>), Terra (<em>Esfera Vitriólica</em>), Fogo (<em>Muralha de Fogo</em>), Água (<em>Controlar Água</em>).</li>
                 <li><strong>9º Nível:</strong> <em>Comunhão com a Natureza</em> + Ar (<em>Ataque do Vento de Aço</em>), Terra (<em>Muralha de Pedra</em>), Fogo (<em>Coluna de Chamas</em>), Água (<em>Cone de Frio</em>).</li>
               </ul>`
            : `<p>At 3rd level, you always have certain primordial spells prepared along with spells corresponding to your chosen element (Air, Earth, Fire, or Water) at levels 3, 5, 7, and 9.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawlkprimhav0001",
      name: isPt ? "Refúgio Elemental" : "Elemental Haven",
      type: "feat",
      img: "icons/magic/defensive/barrier-shield-dome-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, o seu Nodo Elemental protege você contra o perigo:</p>
               <ul>
                 <li><strong>Proteção Elemental:</strong> Enquanto estiver dentro do seu nodo, você recebe um bônus na sua CA igual ao seu modificador de Carisma (mínimo de +1).</li>
                 <li><strong>Teletransporte Elemental:</strong> Com uma Ação Bônus, você pode teleportar-se para dentro do seu nodo ou para o espaço desocupado mais próximo a até 1,5 metro dele. Usos iguais ao seu modificador de Carisma por Descanso Longo.</li>
               </ul>`
            : `<p>At 6th level, while inside your Elemental Node, you add your Charisma modifier to AC (min +1). As a Bonus Action, teleport into your node or within 5 ft of it (uses equal to Cha mod per Long Rest).</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "@abilities.cha.mod", per: "lr", recovery: "" }
      }
    },
    {
      _id: "uawlkprimpro0001",
      name: isPt ? "Proteção Primitiva" : "Primeval Protection",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-shield-glow-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você desenvolve resiliência primal:</p>
               <ul>
                 <li><strong>Fortitude Elemental:</strong> Você ganha Resistência ao tipo de dano do seu elemento escolhido. Além disso, enquanto estiver dentro do seu Nodo Elemental, você possui Imunidade a esse tipo de dano.</li>
                 <li><strong>Aprimoramento do Nodo:</strong> O raio do seu Nodo Elemental aumenta para 3 metros (10 pés).</li>
               </ul>`
            : `<p>At 10th level, you have Resistance to your chosen element’s damage type. Inside your node, you are Immune to that damage type. Your Elemental Node becomes a 10-foot-radius Sphere.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uawlkprimhar0001",
      name: isPt ? "Arauto Elemental" : "Elemental Harbinger",
      type: "feat",
      img: "icons/magic/elements/vortex-elements-swirl.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, seu Nodo Elemental alcança o ápice das forças primordiais:</p>
               <ul>
                 <li><strong>Vórtice Elemental:</strong> Sempre que gastar um espaço de magia de Pacto enquanto estiver no seu nodo, você pode escolher uma criatura a até 9 metros do nodo; se ela falhar em um teste de Força, é puxada até 4,5 metros em direção ao centro do nodo.</li>
                 <li><strong>Duração Aprimorada:</strong> Seu nodo agora dura até 1 hora.</li>
                 <li><strong>Arauto Primordial:</strong> Dentro da área do seu nodo, você pode conjurar <em>Aliado Planar (Planar Ally)</em> sem gastar espaço de magia invocando o nome de seu patrono. Uma vez usado, não pode usar novamente por 2d4 Descansos Longos.</li>
               </ul>`
            : `<p>At 14th level, when expending a slot inside your node, pull a creature within 30 ft up to 15 ft toward center on a failed Str save. Node lasts up to 1 hour. Can cast <em>Planar Ally</em> without a spell slot inside node once per 2d4 Long Rests.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptions02" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "hour" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // =========================================================
    // VILLAINOUS OPTIONS REVISITED (UA2026-VillainousOptionsRevisited.pdf)
    // =========================================================

    // 7. DRUID: Circle of the Titan
    {
      _id: "uadrdtitanspe001",
      name: isPt ? "Magias do Círculo do Titã" : "Circle of the Titan Spells",
      type: "feat",
      img: "icons/sundries/books/book-carved-stone-glowing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você sempre tem certas magias preparadas nos níveis especificados:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Aumentar/Reduzir (Enlarge/Reduce), Taumaturgia (Thaumaturgy), Onda Trovejante (Thunderwave)</em></li>
                 <li><strong>5º Nível:</strong> <em>Medo (Fear)</em></li>
                 <li><strong>7º Nível:</strong> <em>Escudo de Fogo (Fire Shield)</em></li>
                 <li><strong>9º Nível:</strong> <em>Onda Destrutiva (Destructive Wave)</em></li>
               </ul>
               <p>Além disso, você pode conjurar as magias desta característica enquanto estiver na sua Forma de Titã!</p>`
            : `<p>At 3rd level, you always have the listed spells prepared: 3rd: <em>Enlarge/Reduce, Thaumaturgy, Thunderwave</em>; 5th: <em>Fear</em>; 7th: <em>Fire Shield</em>; 9th: <em>Destructive Wave</em>. You can cast these spells while in Titan Form.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uadrdtitanfrm001",
      name: isPt ? "Forma de Titã" : "Titan Form",
      type: "feat",
      img: "icons/creatures/magical/construct-golem-stone-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao usar Forma Selvagem, você pode assumir uma Forma de Titã (escolhendo entre Behemoth, Leviatã ou Insetoide) por 10 minutos.</p>
               <ul>
                 <li><strong>PV Temporários:</strong> 4 vezes o seu nível de Druida.</li>
                 <li><strong>Classe de Armadura:</strong> 13 + seu modificador de Sabedoria.</li>
                 <li><strong>Atributos:</strong> Seus valores de Força e Destreza tornam-se iguais ao seu valor de Sabedoria. Seus outros atributos se mantêm.</li>
                 <li><strong>Ataques:</strong> Ataque Dilacerar (alcance 3m, 1d8 + Sab de dano, aumentando para 2d8 no nv 6 e 3d8 no nv 12). Ataque Múltiplo (2 ataques) a partir do nível 5. Monstro de Cerco (dano dobrado a objetos/estruturas).</li>
                 <li><strong>Ações Especiais por Tipo:</strong> Behemoth (Escalar 12m, Sopro Incandescente com espaço de magia); Leviatã (Nadar 12m, Anfíbio, Dilúvio Tóxico no nv 10); Insetoide (Voo 12m no nv 10, Pólen Energizante cura 2d6/círculo).</li>
               </ul>`
            : `<p>At 3rd level, Wild Shape lets you assume a Titan Form (Behemoth, Leviathan, or Insectoid) for 10 minutes:</p>
               <ul>
                 <li>Temp HP: 4x Druid level; AC: 13 + Wis mod.</li>
                 <li>Strength and Dexterity scores equal your Wisdom score.</li>
                 <li>Rend attack (10 ft reach, 1d8+Wis, scaling to 2d8 at lv 6 and 3d8 at lv 12). Multiattack at lv 5. Siege Monster.</li>
                 <li>Form-specific abilities: Behemoth (Climb 40ft, Incandescent Breath), Leviathan (Swim 40ft, Amphibious, Toxic Deluge), Insectoid (Fly 40ft at lv 10, Energizing Pollen).</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "10", units: "minute" },
        target: { value: null, width: null, units: "", type: "self" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uadrdtitanimp001",
      name: isPt ? "Impacto Terrível" : "Dire Impact",
      type: "feat",
      img: "icons/magic/earth/strike-fist-stone-shatter.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, sua Forma de Titã atinge devastação monumental:</p>
               <ul>
                 <li><strong>Dilaceração Elemental:</strong> Ao acertar com o ataque Dilacerar da Forma de Titã, você pode escolher causar dano de Ácido, Eletricidade, Fogo, Frio ou Trovão em vez do tipo normal.</li>
                 <li><strong>Onda de Choque:</strong> Uma vez por turno, imediatamente após mover ao menos metade do seu Deslocamento, você pode criar uma onda de choque em uma Emanação de 3 metros originada de você. Cada criatura na área deve ser bem-sucedida em uma salvaguarda de Constituição ou ficará Caída (Prone).</li>
               </ul>`
            : `<p>At 6th level, your Titan Form features gain enhancements:</p>
               <ul>
                 <li><strong>Elemental Rend:</strong> Choose Acid, Cold, Fire, Lightning, or Thunder damage on Rend hits.</li>
                 <li><strong>Shock Wave:</strong> Once per turn after moving half your Speed, emit a 10-ft Emanation: Con save or knocked Prone.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 3, width: null, units: "m", type: "radius" },
        range: { value: 3, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "con", dc: null, scaling: "wis" }
      }
    },
    {
      _id: "uadrdtitanhav001",
      name: isPt ? "Devastação Primitiva" : "Primal Havoc",
      type: "feat",
      img: "icons/creatures/magical/behemoth-armored-mammoth-brown.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você canaliza o poder descomunal dos titãs:</p>
               <ul>
                 <li><strong>Tamanho Enorme:</strong> Você pode optar por se tornar Enorme (Huge) ao assumir sua Forma de Titã se houver espaço suficiente.</li>
                 <li><strong>Couraça Fortalecida:</strong> Imediatamente após assumir a forma Enorme ou maior, você pode gastar um espaço de magia de 1º círculo ou superior. Pela duração da forma, você recebe um bônus na CA igual à metade do círculo do espaço gasto (arredondado para cima).</li>
                 <li><strong>Acima de Tudo:</strong> Enquanto for Enorme ou maior, Terreno Difícil causado por neve espessa, gelo, escombros ou vegetação rasteira não custa movimento extra.</li>
               </ul>`
            : `<p>At 10th level, you can become Huge when assuming Titan Form. Expend a spell slot on transformation to gain +half slot level to AC. Ignore difficult terrain from rubble, snow, ice, or undergrowth.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uadrdtitanapp001",
      name: isPt ? "Apetite Monstruoso" : "Monstrous Appetite",
      type: "feat",
      img: "icons/creatures/abilities/mouth-teeth-flesh-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode escolher se tornar Imenso (Gargantuan) ao assumir sua Forma de Titã:</p>
               <ul>
                 <li><strong>Dilaceração Agarradora:</strong> Uma vez por turno, sendo Enorme ou maior, ao acertar com o Dilacerar você pode agarrar o alvo (CD de escape igual à sua CD de magias).</li>
                 <li><strong>Engolir:</strong> Com uma Ação Bônus sendo Imenso, escolha uma criatura Grande ou menor que esteja agarrada por você. Teste de Força contra sua CD: se falhar, você a engole! Criaturas engolidas ficam Cegas, Incapacitadas/Restringidas, com Cobertura Total e sofrem dano de Ácido igual a um número de d12s igual ao seu modificador de Sabedoria no início de cada um dos seus turnos. Você pode manter até Sab criaturas engolidas enquanto mantiver Concentração.</li>
               </ul>`
            : `<p>At 14th level, you can become Gargantuan. Grapple on Rend hit. Bonus Action Swallow a grappled Large or smaller creature on failed Str save: swallowed creature is Blinded and Restrained, has Total Cover, and takes Wis mod d12 Acid damage each turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "str", dc: null, scaling: "wis" }
      }
    },

    // 8. FIGHTER: Hell Knight
    {
      _id: "uafgthlgift00001",
      name: isPt ? "Dádiva Diabólica" : "Diabolical Gift",
      type: "feat",
      img: "icons/magic/perception/eye-slit-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você recebe poderes infernais outorgados pelos Nove Infernos:</p>
               <ul>
                 <li><strong>Visão Diabólica:</strong> Você enxerga normalmente em Penumbra e Escuridão — tanto mágica quanto comum — a até 36 metros (120 pés).</li>
                 <li><strong>Talentos Diabólicos:</strong> Você aprende o idioma Infernal (ou outro idioma à sua escolha caso já o saiba). Você também ganha proficiência em uma das seguintes perícias: Atuação, Enganação ou Prestidigitação.</li>
               </ul>`
            : `<p>At 3rd level, you gain Devil’s Sight (120 ft normal sight in darkness and magical darkness), learn Infernal (or another language), and gain proficiency in Deception, Performance, or Sleight of Hand.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: 36, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthlwep000001",
      name: isPt ? "Arma Forjada no Inferno" : "Hell-Forged Weapon",
      type: "feat",
      img: "icons/weapons/swords/sword-flanged-fire-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao realizar a ação de Ataque, você pode imbuir cada arma que estiver empunhando com fogo do inferno, transformando-a em uma Arma Forjada no Inferno. A arma emite Penumbra em um raio de 1,5 metro e, ao causar dano com ela, você pode escolher causar dano de Fogo, Frio ou Necrótico em vez de seu dano normal (escolhido ao imbuir a arma).</p>`
            : `<p>At 3rd level, when taking the Attack action, imbue weapons with hellfire. Sheds Dim Light in 5 ft, and damage can be Cold, Fire, or Necrotic (chosen when imbued).</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "Na ação de Ataque" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthlwnd000001",
      name: isPt ? "Ferida Infernal" : "Infernal Wound",
      type: "feat",
      img: "icons/skills/melee/blood-slash-curved-fire.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, sua Arma Forjada no Inferno pode infligir feridas infernais:</p>
               <ul>
                 <li><strong>Dado de Ferida Infernal:</strong> Você possui um Dado de Ferida Infernal, que é um d6.</li>
                 <li><strong>Causando Feridas:</strong> Ao acertar uma criatura com sua arma forjada no inferno, você pode causar dano extra igual a uma rolagem do seu Dado de Ferida Infernal (do mesmo tipo de dano escolhido). O alvo recebe uma ferida infernal. Enquanto estiver ferido assim, sofre dano igual a uma rolagem do seu dado no início de cada um dos turnos dele. A ferida dura 1 minuto, até o alvo recuperar PV ou até alguém usar uma ação para estancar a ferida.</li>
               </ul>
               <p>Usos iguais ao seu modificador de Constituição (mínimo 1) por Descanso Curto ou Longo.</p>`
            : `<p>At 3rd level, when hitting with Hell-Forged Weapon, add 1d6 extra damage and inflict an infernal wound. Wounded target takes 1d6 damage at start of its turns for 1 minute or until healed/stanched. Uses equal to Con mod per Short or Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "@abilities.con.mod", per: "sr", recovery: "" }
      }
    },
    {
      _id: "uafgthladvw00001",
      name: isPt ? "Feridas Avançadas" : "Advanced Wounds",
      type: "feat",
      img: "icons/magic/unholy/strike-body-explode-blood-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, ao rolar seu Dado de Ferida Infernal, você pode aplicar um dos seguintes efeitos. Se rolar um 6 no dado, você também ganha o efeito <em>Sorte do Diabo</em> correspondente (1 vez por rodada):</p>
               <ul>
                 <li><strong>Purulência de Minauros:</strong> Cada inimigo em uma Emanação de 1,5 metro sofre dano de Ácido igual ao seu mod de Constituição e o alvo fica Envenenado até o fim do próximo turno dele. <em>Sorte do Diabo:</em> penalidade de -1 na CA de quem sofreu dano até o fim do seu próximo turno.</li>
                 <li><strong>Ruptura de Cania:</strong> O alvo sofre dano de Energia igual ao seu mod de Constituição. <em>Sorte do Diabo:</em> o alvo subtrai 1d6 da próxima salvaguarda que fizer antes do fim do seu próximo turno.</li>
                 <li><strong>Gangrena Estígia:</strong> O alvo sofre dano de Frio igual ao seu mod de Constituição e não pode realizar Reações até o início do próximo turno dele. <em>Sorte do Diabo:</em> o Deslocamento do alvo é reduzido pela metade.</li>
               </ul>`
            : `<p>At 7th level, choose an advanced effect when rolling Infernal Wound Die: Purulence of Minauros (Acid + Poisoned), Rupture of Cania (Force damage), or Stygian Gangrene (Cold + no reactions). Rolling a 6 triggers Devil’s Luck enhancements.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthleqp000001",
      name: isPt ? "Equipamento Infernal" : "Infernal Equipment",
      type: "feat",
      img: "icons/equipment/chest/breastplate-metal-spiked-black-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, ao terminar um Descanso Curto ou Longo, escolha um tipo de dano: Fogo, Frio ou Necrótico. Enquanto estiver usando armadura Pesada ou empunhando um Escudo, você possui Resistência a esse tipo de dano.</p>
               <p>Além disso, ao rolar seu Dado de Ferida Infernal, você pode tratar um resultado 1 como um 6!</p>`
            : `<p>At 7th level, gain Resistance to Cold, Fire, or Necrotic while wearing Heavy armor or wielding a Shield. When you roll your Infernal Wound Die, treat a roll of 1 as a 6.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthlsrg000001",
      name: isPt ? "Surto de Fogo Infernal" : "Hellfire Surge",
      type: "feat",
      img: "icons/magic/fire/flame-burst-blast-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, ao usar seu Surto de Ação (Action Surge) enquanto empunha uma Arma Forjada no Inferno, você explode em chamas infernais em uma Emanação de 6 metros originada de você até o final do seu próximo turno. Sempre que uma criatura sofrendo uma ferida infernal iniciar o turno dela dentro da emanação, ela sofre dano igual a duas rolagens do seu Dado de Ferida Infernal em vez de uma.</p>`
            : `<p>At 10th level, using Action Surge with Hell-Forged Weapon emits a 20-foot Emanation until end of your next turn. Wounded creatures starting turns within take two Infernal Wound dice of damage instead of one.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "No Surto de Ação" },
        duration: { value: "1", units: "round" },
        target: { value: 6, width: null, units: "m", type: "radius" },
        range: { value: 6, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthlmsf000001",
      name: isPt ? "Infortúnio do Diabo" : "Devil's Misfortune",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-pentagon-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, quando uma criatura que esteja com uma ferida infernal atingir você com uma jogada de ataque, você pode usar uma Reação para rolar seu Dado de Ferida Infernal e reduzir o dano sofrido pelo valor rolado. Se rolar um 6, você pode rolar o dado novamente (máximo de até 3 rolagens no total) e reduzir pelo total acumulado.</p>
               <p>Além disso, se o ataque for um Acerto Crítico, ele se torna um acerto normal!</p>`
            : `<p>At 15th level, Reaction to roll Infernal Wound Die and reduce damage from a wounded attacker (roll again on a 6, max 3 dice). Critical hits against you become normal hits.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "reaction", cost: 1, condition: "Quando criatura com ferida infernal atinge você" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "self" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgthlbrg000001",
      name: isPt ? "Barganha Infernal" : "Infernal Bargain",
      type: "feat",
      img: "icons/magic/unholy/demon-fire-pentagram-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, ao rolar um resultado 6 no seu Dado de Ferida Infernal três ou mais vezes antes do início do seu próximo turno, você ganha Inspiração Heroica. Você pode usá-la da seguinte forma especial:</p>
               <p><strong>Inspiração Infernal:</strong> Se uma criatura a até 36 metros rolar um d20 em um Teste de d20, você pode gastar sua Inspiração Heroica para forçá-la a rerrolar. Se o novo resultado fizer o alvo ter sucesso, você recupera um uso gasto de Indomável ou Retomar o Fôlego. Se o fizer falhar, você perde Pontos de Vida iguais a 3d6 + seu nível de Guerreiro.</p>`
            : `<p>At 18th level, rolling three 6s on your Infernal Wound Die before next turn grants Heroic Inspiration. Expend it within 120 ft to force a d20 reroll: success recharges Indomitable or Second Wind; failure causes you to lose 3d6 + Fighter level HP.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 36, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 9. SORCERER: Demonic Sorcery
    {
      _id: "uasrcdemrup00001",
      name: isPt ? "Ruptura Abissal" : "Abyssal Rupture",
      type: "feat",
      img: "icons/magic/unholy/portal-rift-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao usar Feitiçaria Inata (Innate Sorcery), você cria uma fenda rasgando o Abismo em uma Esfera de 3 metros de raio em um ponto a até 9 metros de você. No início de cada um dos seus turnos, você pode mover o centro da esfera até 9 metros. Ao ativar e como uma Ação Bônus enquanto durar, você pode escolher uma opção:</p>
               <ul>
                 <li><strong>Açoite Demoníaco:</strong> Realize um ataque mágico corpo a corpo contra um alvo a até 1,5 metro da fenda. Se acertar, causa 1d8 de dano Cortante e, se for Grande ou menor, você pode puxá-lo até 3 metros em direção ao centro da esfera.</li>
                 <li><strong>Gritos Aterrorizantes:</strong> Cada criatura dentro da fenda deve ser bem-sucedida em uma salvaguarda de Sabedoria ou sofrerá 1d4 de Dano Psíquico.</li>
               </ul>`
            : `<p>At 3rd level, using Innate Sorcery creates a 10-foot-radius Abyssal rupture within 30 feet. Move it 30 ft at start of turn. Bonus Action option: Demonic Lash (melee spell attack, 1d8 slashing + pull 10 ft) or Terrifying Screams (Wis save or 1d4 psychic damage).</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: 3, width: null, units: "m", type: "sphere" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uasrcdemspe00001",
      name: isPt ? "Magias Demoníacas" : "Demonic Spells",
      type: "feat",
      img: "icons/sundries/books/book-shadow-horned-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você sempre tem as seguintes magias preparadas nos níveis especificados:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Perdição (Bane), Sussurros Dissonantes (Dissonant Whispers), Crescimento de Espinhos (Spike Growth), Teia (Web)</em></li>
                 <li><strong>5º Nível:</strong> <em>Rogar Maldição (Bestow Curse), Dissipar Magia (Dispel Magic)</em></li>
                 <li><strong>7º Nível:</strong> <em>Inseto Gigante (Giant Insect), Terreno Alucinógeno (Hallucinatory Terrain)</em></li>
                 <li><strong>9º Nível:</strong> <em>Contato Extraplanar (Contact Other Plane), Modificar Memória (Modify Memory)</em></li>
               </ul>`
            : `<p>At 3rd level, you always have Demonic Spells prepared: 3rd: <em>Bane, Dissonant Whispers, Spike Growth, Web</em>; 5th: <em>Bestow Curse, Dispel Magic</em>; 7th: <em>Giant Insect, Hallucinatory Terrain</em>; 9th: <em>Contact Other Plane, Modify Memory</em>.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uasrcdemrlm00001",
      name: isPt ? "Reino Abissal" : "Abyssal Realm",
      type: "feat",
      img: "icons/magic/unholy/silhouette-evil-horns-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao gastar 1 ou mais Pontos de Feitiçaria em uma Ação Mágica ou Ação Bônus, você pode preencher a esfera da sua Ruptura Abissal ou uma Emanação de 3 metros originada de você com as energias do Abismo:</p>
               <ul>
                 <li><strong>Frenesi da Goela Faminta:</strong> Designe uma direção horizontal. Criaturas na área que falharem em uma salvaguarda de Carisma devem usar o máximo de movimento possível na direção escolhida no início do próximo turno delas.</li>
                 <li><strong>Labirinto de Azzatar:</strong> Salvaguarda de Inteligência; se falharem, você ganha os benefícios da condição Invisível contra elas até o início do seu próximo turno.</li>
                 <li><strong>Bruma dos Poços de Lodo:</strong> Salvaguarda de Constituição; se falharem, ficam Enfeitiçadas ou Envenenadas (sua escolha) até o início do seu próximo turno.</li>
               </ul>`
            : `<p>At 6th level, spending 1+ Sorcery Points allows you to fill your Rupture or a 10-ft Emanation with Abyssal influence: Gaping Maw’s Frenzy (forced movement on Cha fail), Maze of Azzatar (Invisible against targets on Int fail), or Slime Pits’ Haze (Charmed or Poisoned on Con fail).</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "special", cost: null, condition: "Gasto de Pontos de Feitiçaria" },
        duration: { value: "1", units: "round" },
        target: { value: 3, width: null, units: "m", type: "radius" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uasrcdemcnd00001",
      name: isPt ? "Conduíte Abissal" : "Abyssal Conduit",
      type: "feat",
      img: "icons/magic/unholy/summon-demon-horns-flame-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, sua conexão com o Abismo se aprofunda:</p>
               <ul>
                 <li><strong>Expansão da Ruptura:</strong> O raio da sua Ruptura Abissal se torna 9 metros (30 pés) e a área se torna Terreno Difícil para inimigos.</li>
                 <li><strong>Servo Demoníaco:</strong> Você sempre tem a magia <em>Invocar Corruptor (Summon Fiend)</em> preparada. Ao conjurá-la, você pode modificá-la para não exigir Concentração (a duração se torna 1 minuto e você deve escolher a forma de Demônio). O Demônio possui Vantagem em jogadas de ataque enquanto estiver dentro da sua Ruptura Abissal.</li>
               </ul>`
            : `<p>At 14th level, Rupture radius becomes 30 feet and difficult terrain for enemies. Always have <em>Summon Fiend</em> prepared; can cast it without Concentration for 1 minute (Demon form), gaining Advantage on attacks within Rupture.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uasrcdemexp00001",
      name: isPt ? "Explosão Abissal" : "Abyssal Explosion",
      type: "feat",
      img: "icons/magic/unholy/energy-smoke-cloud-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, como uma Ação Mágica, você detona o caos puro do Abismo em uma Esfera de 9 metros (30 pés) de raio centrada em um ponto à sua escolha. Cada criatura na área realiza uma salvaguarda de Constituição. Se falhar, sofre 8d6 de Dano de Energia se não for um Corruptor e fica Incapacitada até o início do seu próximo turno. Se tiver sucesso, sofre metade do dano e não fica incapacitada.</p>
               <p>Uma vez usada, recarrega após um Descanso Longo, ou restaurada gastando 7 Pontos de Feitiçaria.</p>`
            : `<p>At 18th level, as a Magic action, fill a 30-foot-radius Sphere with Abyssal explosion. Con save: 8d6 Force damage (non-fiends) and Incapacitated until start of next turn on failure; half damage on success. Recharges on Long Rest or 7 Sorcery Points.</p>`,
          chat: ""
        },
        source: { custom: "UA2026-VillainousOptionsRevisited" },
        activation: { type: "action", cost: 1, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 9, width: null, units: "m", type: "sphere" },
        range: { value: 36, long: null, units: "m" },
        uses: { value: 1, max: "1", per: "lr", recovery: "" },
        save: { ability: "con", dc: null, scaling: "cha" }
      }
    },

    // =========================================================
    // UPDATED SUBCLASSES (UA2025+Updated+Subclasses.pdf)
    // =========================================================

    // 10. BARBARIAN: Path of the Spiritual Guardian
    {
      _id: "uabarbspipro0001",
      name: isPt ? "Protetores Espirituais" : "Spiritual Protectors",
      type: "feat",
      img: "icons/magic/death/undead-ghost-shadow-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, sua Fúria convoca guerreiros espectrais para auxiliá-lo. Enquanto sua Fúria estiver ativa, ao atingir uma criatura com uma arma ou com um Golpe Desarmado, ela se torna o alvo dos espíritos, sofrendo um efeito à sua escolha:</p>
               <ul>
                 <li><strong>Distrair:</strong> Até o início do seu próximo turno, o alvo tem Desvantagem em jogadas de ataque contra qualquer alvo que não seja você ou outro Bárbaro com este recurso.</li>
                 <li><strong>Proteger:</strong> Até o final do próximo turno do alvo, na próxima vez que ele atingir uma criatura que não seja você, essa criatura recebe Resistência ao dano causado pelo ataque.</li>
                 <li><strong>Golpear:</strong> O alvo sofre 1d6 de dano adicional, que pode ser Ácido, Eletricidade, Energia, Fogo, Frio ou Trovão (sua escolha).</li>
               </ul>`
            : `<p>At 3rd level, hitting a creature while raging triggers spectral warriors to cause one effect: Distract (Disadvantage on attacks vs others), Protect (ally gains Resistance to target's next hit), or Strike (extra 1d6 Acid, Cold, Fire, Force, Lightning, or Thunder damage).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbspishi0001",
      name: isPt ? "Escudo Espiritual" : "Spirit Shield",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, enquanto sua Fúria estiver ativa, quando outra criatura que você possa ver a até 9 metros de você sofrer dano, você pode usar uma Reação para reduzir esse dano. Role um número de d6s igual ao seu bônus de Dano de Fúria e reduza o dano pelo total rolado.</p>`
            : `<p>At 6th level, while your Rage is active, when another creature you can see within 30 feet of you takes damage, use a Reaction to reduce that damage by rolling a number of d6s equal to your Rage Damage bonus.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "reaction", cost: 1, condition: "Quando aliado a até 9m sofre dano" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbspicon0001",
      name: isPt ? "Consultar os Espíritos" : "Consult the Spirits",
      type: "feat",
      img: "icons/magic/perception/orb-crystal-ball-scrying-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, você pode contatar seus espíritos guardiões para obter orientação. Você pode conjurar a magia <em>Augúrio (Augury)</em> ou <em>Clarividência (Clairvoyance)</em> sem gastar espaços de magia nem componentes materiais (em Clarividência, você invoca invisivelmente um espírito guardião no local). Sabedoria é sua habilidade de conjuração. Você recupera o uso após terminar um Descanso Curto ou Longo.</p>`
            : `<p>At 10th level, cast <em>Augury</em> or <em>Clairvoyance</em> without a spell slot or material components. Wisdom is your spellcasting ability. Recharges on a Short or Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "action", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: 1, max: "1", per: "sr", recovery: "" }
      }
    },
    {
      _id: "uabarbspiven0001",
      name: isPt ? "Espíritos Vingativos" : "Vengeful Spirits",
      type: "feat",
      img: "icons/skills/melee/strike-blade-slashing-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, ao realizar uma jogada de ataque com uma arma Corpo a Corpo como parte da ação de Ataque e rolar 18–20 no d20, você pode realizar um ataque corpo a corpo adicional com a mesma arma como parte dessa mesma ação. Uma vez usado, não pode fazê-lo novamente até o início do seu próximo turno.</p>`
            : `<p>At 14th level, rolling 18–20 on a melee weapon attack roll allows you to make one additional attack roll with the same weapon as part of that action (once per turn).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "Ao rolar 18-20 em ataque corpo a corpo" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 11. BARBARIAN: Path of the Storm Herald
    {
      _id: "uabarbstrara0001",
      name: isPt ? "Aura de Tempestade" : "Storm Aura",
      type: "feat",
      img: "icons/magic/air/storm-lightning-clouds-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao entrar em Fúria, escolha Deserto, Mar ou Tundra. Você estende uma aura em uma Emanação de 3 metros (10 pés) pela duração da sua Fúria. O efeito é ativado ao entrar em Fúria e pode ser ativado novamente em cada um de seus turnos como uma Ação Bônus (CD 8 + Mod Con + PB):</p>
               <ul>
                 <li><strong>Deserto:</strong> Role um número de d4s igual ao seu bônus de Dano de Fúria. Cada criatura na aura deve ser bem-sucedida em um teste de Destreza ou sofrerá dano de Fogo igual ao valor rolado (você pode escolher uma criatura para ter sucesso automático).</li>
                 <li><strong>Mar:</strong> Role um número de d6s igual ao seu bônus de Dano de Fúria. Lance um raio em outra criatura que possa ver na aura; salvaguarda de Destreza para metade do dano de Eletricidade.</li>
                 <li><strong>Tundra:</strong> Role um número de d4s igual ao seu bônus de Dano de Fúria. Escolha outra criatura na aura; se ela falhar em um teste de Força, subtrai o número rolado da próxima rolagem de dano dela até o início do seu próximo turno.</li>
               </ul>`
            : `<p>At 3rd level, entering Rage extends a 10-foot Emanation aura (Desert, Sea, or Tundra). Activates on Rage and as a Bonus Action on subsequent turns (DC 8 + Con mod + PB):</p>
               <ul>
                 <li><strong>Desert:</strong> (Rage bonus)d4 Fire damage in aura on failed Dex save.</li>
                 <li><strong>Sea:</strong> (Rage bonus)d6 Lightning damage to one creature in aura (half on Dex save).</li>
                 <li><strong>Tundra:</strong> Target in aura subtracts (Rage bonus)d4 from next damage roll on failed Str save.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 3, width: null, units: "m", type: "radius" },
        range: { value: 3, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "dex", dc: null, scaling: "con" }
      }
    },
    {
      _id: "uabarbstrsou0001",
      name: isPt ? "Alma da Tempestade" : "Storm Soul",
      type: "feat",
      img: "icons/magic/lightning/spark-flashes-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, a tempestade concede benefícios permanentes baseados no último ambiente escolhido para a sua Aura de Tempestade:</p>
               <ul>
                 <li><strong>Deserto:</strong> Resistência a dano de Fogo. Com uma Ação Mágica, pode tocar um objeto inflamável para fazê-lo começar a queimar.</li>
                 <li><strong>Mar:</strong> Resistência a dano de Eletricidade, respiração sob a água e Deslocamento de Natação igual ao seu Deslocamento terrestre.</li>
                 <li><strong>Tundra:</strong> Resistência a dano de Frio. Com uma Ação Mágica, pode congelar um cubo de 1,5 metro de água em gelo por 1 minuto.</li>
               </ul>`
            : `<p>At 6th level, gain passive benefits based on last Storm Aura choice: Desert (Fire resistance, ignite objects), Sea (Lightning resistance, breathe water, swim speed), Tundra (Cold resistance, freeze 5-ft cube of water).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbstrshi0001",
      name: isPt ? "Tempestade Protetora" : "Shielding Storm",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, cada criatura à sua escolha dentro da sua Aura de Tempestade recebe a Resistência a dano que você possui através da característica Alma da Tempestade.</p>`
            : `<p>At 10th level, each creature of your choice within your Storm Aura has the damage Resistance you have from the Storm Soul feature.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uabarbstrrag0001",
      name: isPt ? "Tempestade Enfurecida" : "Raging Storm",
      type: "feat",
      img: "icons/magic/lightning/bolt-strike-blue-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, o poder da tempestade potencializa sua ira:</p>
               <ul>
                 <li><strong>Deserto:</strong> Uma vez por turno, quando uma criatura falhar na salvaguarda da sua Aura de Tempestade, ela começa a queimar: sofre 2d4 de dano de Fogo no início de cada um dos turnos dela até sua Fúria terminar ou por 1 minuto.</li>
                 <li><strong>Mar:</strong> Quer o alvo passe ou falhe na salvaguarda, um relâmpago salta do alvo para outro alvo à sua escolha a até 9 metros dele, que realiza a mesma salvaguarda de Destreza.</li>
                 <li><strong>Tundra:</strong> Uma vez por turno, quando uma criatura falhar na salvaguarda da sua aura, ela sofre 2d4 de dano de Frio e seu Deslocamento é reduzido pela metade até o fim do próximo turno dela.</li>
               </ul>`
            : `<p>At 14th level, Storm Aura upgrades: Desert (ignites targets for 2d4 fire damage at turn start), Sea (lightning chains to a second target within 30 ft), Tundra (deals 2d4 Cold damage and halves target’s Speed).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 12. FIGHTER: Cavalier
    {
      _id: "uafgtcavprf00001",
      name: isPt ? "Proficiência Bônus" : "Bonus Proficiency",
      type: "feat",
      img: "icons/skills/social/diplomacy-peace-symbol.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência em uma das seguintes perícias: Adestramento, Atuação, História, Intuição ou Persuasão. Como alternativa, você pode aprender um idioma à sua escolha.</p>`
            : `<p>At 3rd level, you gain proficiency in Animal Handling, History, Insight, Performance, or Persuasion, or you learn one language of your choice.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgtcavsad00001",
      name: isPt ? "Nascido na Sela" : "Born to the Saddle",
      type: "feat",
      img: "icons/environment/creatures/horses-running.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você tem Vantagem em testes de resistência para evitar cair de sua montaria. Se cair e não cair mais de 3 metros, você aterrissa de pé caso não esteja Incapacitado.</p>
               <p>Além disso, montar ou desmontar de uma criatura custa apenas 1,5 metro (5 pés) de movimento, em vez de metade do seu Deslocamento.</p>`
            : `<p>At 3rd level, Advantage on saving throws to avoid falling off mount, land on feet if falling 10 ft or less, and mounting/dismounting costs only 5 ft of movement.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgtcavmrk00001",
      name: isPt ? "Marca Inabalável" : "Unwavering Mark",
      type: "feat",
      img: "icons/skills/combat/mark-target-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao acertar uma criatura com uma arma Corpo a Corpo, você pode marcá-la até o final do seu próximo turno.</p>
               <p>Enquanto estiver a até 1,5 metro de você, uma criatura marcada possui Desvantagem em jogadas de ataque contra qualquer alvo que não seja você. Além disso, se a criatura marcada atingir outra criatura com um ataque, você ganha Vantagem em jogadas de ataque contra a criatura marcada até o final do seu próximo turno.</p>`
            : `<p>At 3rd level, hit with melee weapon marks a creature until end of next turn. While within 5 ft of you, marked creature has Disadvantage on attacks against targets other than you. If it hits an ally, you have Advantage on attack rolls against it until end of your next turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "round" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 1.5, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgtcavwar00001",
      name: isPt ? "Manobra de Guarda" : "Warding Maneuver",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-deflect-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, se você ou uma criatura que você possa ver a até 1,5 metro de você for atingida por uma jogada de ataque, você pode usar uma Reação se estiver empunhando uma arma Corpo a Corpo ou um Escudo: role 1d8 e adicione o resultado à CA do alvo contra o ataque desencadeante. Se o ataque ainda acertar, o alvo ganha Resistência contra o dano do ataque.</p>
               <p>Você pode usar este recurso um número de vezes igual ao seu modificador de Constituição (mínimo de 1) por Descanso Longo.</p>`
            : `<p>At 7th level, Reaction to add 1d8 to AC of self or ally within 5 ft against an attack. If it still hits, target gains Resistance to the damage. Uses equal to Con modifier per Long Rest.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "reaction", cost: 1, condition: "Quando você ou aliado a até 1,5m é atingido" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 1.5, long: null, units: "m" },
        uses: { value: null, max: "@abilities.con.mod", per: "lr", recovery: "" }
      }
    },
    {
      _id: "uafgtcavhld00001",
      name: isPt ? "Manter a Linha" : "Hold the Line",
      type: "feat",
      img: "icons/skills/combat/spear-defensive-formation.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, criaturas provocam um Ataque de Oportunidade seu sempre que se moverem 1,5 metro ou mais enquanto estiverem dentro do seu alcance. Ao acertar uma criatura com um Ataque de Oportunidade, o Deslocamento do alvo torna-se 0 até o final do turno atual.</p>`
            : `<p>At 10th level, creatures provoke Opportunity Attacks when moving 5 ft or more within your reach. Hitting with an Opportunity Attack reduces target’s Speed to 0 for the turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uafgtcavchr00001",
      name: isPt ? "Investida Feroz" : "Ferocious Charger",
      type: "feat",
      img: "icons/skills/movement/charge-charge-horseman-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, durante a primeira rodada de cada combate, o seu Deslocamento e o da sua montaria aumentam em 3 metros (10 pés), e o seu movimento não provoca Ataques de Oportunidade nessa rodada. Quando se mover a até 1,5 metro de uma criatura nessa rodada, ela deve ser bem-sucedida em um teste de Força (CD 8 + Mod For + PB) ou você a empurra 1,5 metro ou a derruba no chão (Caída/Prone). Uma criatura realiza esse teste apenas 1 vez por turno.</p>`
            : `<p>At 15th level, in the first round of combat, you and your mount gain +10 ft Speed and do not provoke Opportunity Attacks. Moving within 5 ft forces a Str save or pushed 5 ft / knocked Prone.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "Primeira rodada de combate" },
        duration: { value: "1", units: "round" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "str", dc: null, scaling: "str" }
      }
    },
    {
      _id: "uafgtcavdef00001",
      name: isPt ? "Defensor Vigilante" : "Vigilant Defender",
      type: "feat",
      img: "icons/skills/combat/sword-parry-defend-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, em combate, você recebe uma Reação especial que pode realizar uma vez no turno de cada criatura, exceto no seu próprio turno. Você só pode realizar essa reação especial para fazer um Ataque de Oportunidade, e não pode realizá-la no mesmo turno em que usar sua Reação normal.</p>`
            : `<p>At 18th level, gain a special Reaction once on every creature’s turn except your own, usable only to make Opportunity Attacks.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "reaction", cost: 1, condition: "No turno de outra criatura" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 13. MONK: Warrior of Intoxication
    {
      _id: "uamonkdrkprf0001",
      name: isPt ? "Proficiências Bônus" : "Bonus Proficiencies",
      type: "feat",
      img: "icons/tools/instruments/tankard-wood-beer.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você ganha proficiência na perícia Atuação (ou em outra perícia da lista de monge, se já possuir Atuação) e proficiência com Suprimentos de Cervejeiro.</p>`
            : `<p>At 3rd level, you gain proficiency in Performance (or another Monk skill) and Brewer’s Supplies.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkdrktch0001",
      name: isPt ? "Técnica Bêbada" : "Drunken Technique",
      type: "feat",
      img: "icons/skills/movement/body-turn-roll-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você se esquiva e gira como parte de sua Rajada de Golpes. Sempre que usar Rajada de Golpes, seu Deslocamento aumenta em 3 metros (10 pés) até o final do turno atual e seu movimento durante esse período não provoca Ataques de Oportunidade.</p>`
            : `<p>At 3rd level, whenever you use Flurry of Blows, your Speed increases by 10 feet until the end of the current turn and your movement doesn’t provoke Opportunity Attacks.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "Na Rajada de Golpes" },
        duration: { value: "1", units: "round" },
        target: { value: null, width: null, units: "", type: "self" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkdrkswy0001",
      name: isPt ? "Gingado Ébrio" : "Tipsy Sway",
      type: "feat",
      img: "icons/skills/movement/feet-turn-sway-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode se mover em manobras desconcertantes:</p>
               <ul>
                 <li><strong>Pular de Pé:</strong> Quando estiver Caído (Prone), você pode levantar-se gastando apenas 1,5 metro de movimento, em vez de metade do seu Deslocamento.</li>
                 <li><strong>Redirecionar Ataque:</strong> Quando uma criatura errar você com uma jogada de ataque corpo a corpo, você pode gastar 1 Ponto de Foco como uma Reação para fazer esse ataque acertar uma criatura à sua escolha (que não seja o atacante) a até 1,5 metro de você.</li>
               </ul>`
            : `<p>At 6th level, stand from Prone for 5 ft movement. When a melee attack misses you, spend 1 Focus Point as a Reaction to redirect it to hit another creature within 5 ft of you.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "reaction", cost: 1, condition: "Quando ataque corpo a corpo erra você" },
        duration: { value: "", units: "" },
        target: { value: 1, width: null, units: "", type: "creature" },
        range: { value: 1.5, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkdrkbrw0001",
      name: isPt ? "Infusão Mística" : "Mystic Brew",
      type: "feat",
      img: "icons/consumables/potions/potion-flask-corked-amber.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao terminar um Descanso Curto ou Longo segurando Suprimentos de Cervejeiro, você pode produzir uma bebida mágica especial (Dragão de Canela, Espírito Celestial ou Mergulho Revigorante). Você pode gastar 1 minuto bebendo uma caneca para obter seus benefícios por 1 hora (ou 8 horas se gastar 1 Ponto de Foco ao criá-la):</p>
               <ul>
                 <li><strong>Dragão de Canela:</strong> Ação Mágica para exalar chamas tóxicas em um Cone de 9 metros. Salvaguarda de Destreza: 4 rolagens do seu dado de Artes Marciais em dano de Fogo e fica Envenenado até o final do próximo turno do alvo; metade do dano em sucesso.</li>
                 <li><strong>Espírito Celestial:</strong> Você ganha Resistência a Dano Psíquico e Radiante.</li>
                 <li><strong>Mergulho Revigorante:</strong> Sempre que recuperar Pontos de Vida, você recupera PV adicionais iguais a uma rolagem do seu dado de Artes Marciais.</li>
               </ul>`
            : `<p>At 6th level, brew magical beverages after a rest (1 hr duration, or 8 hrs for 1 Focus Point): Cinnamon Dragon (30-ft cone 4 Martial Arts dice Fire damage + Poisoned), Heavenly Spirit (Psychic and Radiant resistance), Refreshing Dip (+1 Martial Arts die when regaining HP).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "1", units: "hour" },
        target: { value: null, width: null, units: "", type: "self" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkdrkmst0001",
      name: isPt ? "Mestre Cervejeiro" : "Master Brewer",
      type: "feat",
      img: "icons/consumables/potions/potion-tube-glowing-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 11º nível, você adiciona novas opções à sua característica Infusão Mística:</p>
               <ul>
                 <li><strong>Raio Azul:</strong> Sempre que realizar uma Reação que não seja um Ataque de Oportunidade nem conjurar uma magia, você pode realizar um Golpe Desarmado como parte dessa Reação.</li>
                 <li><strong>Sorte do Bêbado:</strong> Você ganha Inspiração Heroica se não a possuir. Além disso, você pode conceder a si mesmo Inspiração Heroica ao rolar Iniciativa caso não a tenha.</li>
               </ul>`
            : `<p>At 11th level, add to Mystic Brew: Blue Lightning (make an Unarmed Strike as part of reactions that aren't OAs or spells) and Drunkard’s Luck (gain Heroic Inspiration when rolling Initiative).</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uamonkdrkfrn0001",
      name: isPt ? "Frenesi Intoxicado" : "Intoxicated Frenzy",
      type: "feat",
      img: "icons/skills/melee/unarmed-strikes-flurry-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 17º nível, ao usar Rajada de Golpes, você pode fazer até três Golpes Desarmados adicionais com ela (até um total de seis Golpes Desarmados), desde que cada golpe tenha como alvo uma criatura diferente neste turno.</p>`
            : `<p>At 17th level, when you use Flurry of Blows, you can make up to three additional Unarmed Strikes with it (up to a total of six), provided that each strike targets a different creature this turn.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "Na Rajada de Golpes" },
        duration: { value: "1", units: "round" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },

    // 14. PALADIN: Oathbreaker
    {
      _id: "uapaloathund0001",
      name: isPt ? "Conjurar Mortos-Vivos" : "Conjure Undead",
      type: "feat",
      img: "icons/magic/death/hand-dirt-undead-zombie.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, com uma Ação Bônus, você pode gastar um uso de sua Canalizar Divindade para invocar um número de mortos-vivos igual à metade do seu modificador de Carisma (arredondado para cima; mínimo de 1). Cada morto-vivo surge em um espaço desocupado a até 9 metros de você e é do tipo Esqueleto ou Zumbi à sua escolha. Eles permanecem por 1 minuto (obedecendo seus comandos verbais sem exigir ação e agindo imediatamente após seu turno) e viram cinzas ao término.</p>`
            : `<p>At 3rd level, as a Bonus Action, spend one Channel Divinity to summon skeletons or zombies equal to half your Charisma modifier (min 1) for 1 minute within 30 ft. They act immediately after you and obey commands.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "1", units: "minute" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uapaloathasp0001",
      name: isPt ? "Aspecto Pavoroso" : "Dreadful Aspect",
      type: "feat",
      img: "icons/magic/control/fear-fright-skull-fire-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, imediatamente após conjurar <em>Destruição Divina (Divine Smite)</em>, você pode gastar um uso de sua Canalizar Divindade para liberar uma onda de terror. Cada criatura à sua escolha em uma Emanação de 9 metros (30 pés) originada de você deve ser bem-sucedida em uma salvaguarda de Sabedoria ou ficará Amedrontada por 1 minuto (repetindo o teste no final de cada um de seus turnos para encerrar).</p>`
            : `<p>At 3rd level, immediately after casting Divine Smite, spend one Channel Divinity: each creature of choice in a 30-foot Emanation must succeed on a Wisdom save or have the Frightened condition for 1 minute.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "Imediatamente após Divine Smite" },
        duration: { value: "1", units: "minute" },
        target: { value: 9, width: null, units: "m", type: "radius" },
        range: { value: 9, long: null, units: "m" },
        uses: { value: null, max: "", per: null, recovery: "" },
        save: { ability: "wis", dc: null, scaling: "cha" }
      }
    },
    {
      _id: "uapaloathspe0001",
      name: isPt ? "Magias do Quebrador de Juramento" : "Oathbreaker Spells",
      type: "feat",
      img: "icons/sundries/books/book-eye-skull-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, você sempre tem as seguintes magias preparadas nos níveis especificados:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Repreensão Infernal (Hellish Rebuke), Raio de Bruxa (Witch Bolt)</em></li>
                 <li><strong>5º Nível:</strong> <em>Coroa da Loucura (Crown of Madness), Escuridão (Darkness)</em></li>
                 <li><strong>9º Nível:</strong> <em>Medo (Fear), Invocar Mortos-Vivos (Summon Undead)</em></li>
                 <li><strong>13º Nível:</strong> <em>Definhar (Blight), Assassino Fantasmagórico (Phantasmal Killer)</em></li>
                 <li><strong>17º Nível:</strong> <em>Contágio (Contagion), Ataque do Vento de Aço (Steel Wind Strike)</em></li>
               </ul>`
            : `<p>At 3rd level, you always have Oathbreaker Spells prepared: 3rd: <em>Hellish Rebuke, Witch Bolt</em>; 5th: <em>Crown of Madness, Darkness</em>; 9th: <em>Fear, Summon Undead</em>; 13th: <em>Blight, Phantasmal Killer</em>; 17th: <em>Contagion, Steel Wind Strike</em>.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uapaloathhat0001",
      name: isPt ? "Aura de Ódio" : "Aura of Hate",
      type: "feat",
      img: "icons/magic/unholy/silhouette-robe-evil-glow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, quando você, bem como qualquer Corruptor ou Morto-Vivo na sua Aura de Proteção que seja seu aliado, atingir uma criatura com um ataque corpo a corpo, esse ataque causa Dano Necrótico adicional igual ao seu modificador de Carisma.</p>`
            : `<p>At 7th level, when you or an allied Fiend or Undead in your Aura of Protection hits with a melee attack, it deals extra Necrotic damage equal to your Charisma modifier.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "special", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uapaloathres0001",
      name: isPt ? "Resistência Sobrenatural" : "Supernatural Resistance",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-stone-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 15º nível, você ganha Resistência a dano Cortante, Perfurante e Concussivo.</p>`
            : `<p>At 15th level, you gain Resistance to Bludgeoning, Piercing, and Slashing damage.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "none", cost: null, condition: "" },
        duration: { value: "", units: "" },
        target: { value: null, width: null, units: "", type: "" },
        range: { value: null, long: null, units: "" },
        uses: { value: null, max: "", per: null, recovery: "" }
      }
    },
    {
      _id: "uapaloathdrd0001",
      name: isPt ? "Senhor do Pavor" : "Dread Lord",
      type: "feat",
      img: "icons/magic/death/skull-horned-shadow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 20º nível, como uma Ação Bônus, você imbui sua Aura de Proteção com trevas profanas por 10 minutos (1 vez por Descanso Longo, ou recarregado com espaço de 5º círculo):</p>
               <ul>
                 <li><strong>Escuridão:</strong> Escuridão mágica preenche sua Aura de Proteção. Você e seus aliados na aura enxergam normalmente através desta escuridão.</li>
                 <li><strong>Terror:</strong> Criaturas Amedrontadas que iniciarem o turno delas na sua Aura de Proteção sofrem 4d10 de Dano Psíquico.</li>
                 <li><strong>Golpe das Sombras:</strong> Com uma Ação Bônus, você realiza um ataque mágico corpo a corpo desferindo trevas contra uma criatura na sua Aura de Proteção. Ao acertar, causa 3d10 + seu mod de Carisma de Dano Necrótico.</li>
               </ul>`
            : `<p>At 20th level, as a Bonus Action, empower your Aura of Protection for 10 minutes (recharges on Long Rest or 5th-level spell slot): magical Darkness fills aura (you and allies can see through it); Frightened creatures starting turns in aura take 4d10 Psychic damage; Bonus Action Shadow Strike deals 3d10+Cha Necrotic damage to a target in aura.</p>`,
          chat: ""
        },
        source: { custom: "UA2025-UpdatedSubclasses" },
        activation: { type: "bonus", cost: 1, condition: "" },
        duration: { value: "10", units: "minute" },
        target: { value: null, width: null, units: "", type: "self" },
        range: { value: null, long: null, units: "" },
        uses: { value: 1, max: "1", per: "lr", recovery: "" }
      }
    }
  ];
}

// -------------------------------------------------------------
// 2. SUBCLASSES DO LOTE 3 (ua-subclasses.json)
// -------------------------------------------------------------
export function buildLote3Subclasses(isPt) {
  return [
    // 1. Barbarian: Path of Unlight
    {
      _id: "uasubbarbunlight",
      name: isPt ? "Caminho da Não-Luz" : "Path of Unlight",
      type: "subclass",
      img: "icons/magic/light/explosion-star-glow-silhouette.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bárbaros do Caminho da Não-Luz abraçam a magia incontrolável da Não-Luz nas profundezas do Subterrâneo em troca de uma destreza física avassaladora e fulgor destrutivo.</p>`
            : `<p>Barbarians on the Path of Unlight embrace uncontrollable radiant magic from the Underdark in exchange for incredible physical prowess and blazing fury.</p>`,
          chat: ""
        },
        identifier: "unlight",
        classIdentifier: "barbarian",
        advancement: [
          {
            _id: "advbunlnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recurso da Não-Luz (Nível 3)" : "Unlight Feature (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbunlrad0001" }
              ]
            }
          },
          {
            _id: "advbunlnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Não-Luz (Nível 6)" : "Unlight Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbunlrev0001" }
              ]
            }
          },
          {
            _id: "advbunlnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recursos da Não-Luz (Nível 10)" : "Unlight Features (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbunlinf0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbunlhar0001" }
              ]
            }
          },
          {
            _id: "advbunlnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso da Não-Luz (Nível 14)" : "Unlight Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbunlbrl0001" }
              ]
            }
          }
        ]
      }
    },

    // 2. Rogue: House Agent
    {
      _id: "uasubhouseagent0",
      name: isPt ? "Agente da Casa" : "House Agent",
      type: "subclass",
      img: "icons/commodities/treasure/token-runed-silver.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Treinados nas intrigas e jogos de poder das grandes casas nobres do Subterrâneo, os Agentes da Casa infiltram-se e sabotam com charme, sutileza e lâminas traiçoeiras.</p>`
            : `<p>Trained in the intrigue of noble houses of the Underdark, House Agents are master infiltrators who strike when their target's back is turned.</p>`,
          chat: ""
        },
        identifier: "house-agent",
        classIdentifier: "rogue",
        advancement: [
          {
            _id: "advhseanv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Agente (Nível 3)" : "House Agent Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghseins00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghsepres0001" }
              ]
            }
          },
          {
            _id: "advhseanv0000009",
            type: "ItemGrant",
            level: 9,
            title: isPt ? "Recurso do Agente (Nível 9)" : "House Agent Feature (Level 9)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghseback0001" }
              ]
            }
          },
          {
            _id: "advhseanv0000013",
            type: "ItemGrant",
            level: 13,
            title: isPt ? "Recursos do Agente (Nível 13)" : "House Agent Features (Level 13)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghsesilv0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghseinf00001" }
              ]
            }
          },
          {
            _id: "advhseanv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Agente (Nível 17)" : "House Agent Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uaroghsesubt0001" }
              ]
            }
          }
        ]
      }
    },

    // 3. Wizard: Imaskarcanist
    {
      _id: "uasubimaskarcan0",
      name: isPt ? "Imaskarcanista" : "Imaskarcanist",
      type: "subclass",
      img: "icons/sundries/books/book-runed-glowing-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Estudiosos dos segredos milenares de Imaskar Profunda e dos artefatos Imaskarcana, dominando a Não-Luz capaz de curar feridas ou desintegrar inimigos em cataclismos radiantes.</p>`
            : `<p>Scholars of the ancient secrets of Deep Imaskar who master Unlight to both heal allies and curse enemies with radiant doom.</p>`,
          chat: ""
        },
        identifier: "imaskarcanist",
        classIdentifier: "wizard",
        advancement: [
          {
            _id: "advimsknv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Imaskarcanista (Nível 3)" : "Imaskarcanist Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawizimaskadp001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawizimaskinv001" }
              ]
            }
          },
          {
            _id: "advimsknv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Imaskarcanista (Nível 6)" : "Imaskarcanist Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawizimaskres001" }
              ]
            }
          },
          {
            _id: "advimsknv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Imaskarcanista (Nível 10)" : "Imaskarcanist Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawizimasksec001" }
              ]
            }
          },
          {
            _id: "advimsknv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Imaskarcanista (Nível 14)" : "Imaskarcanist Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawizimaskdom001" }
              ]
            }
          }
        ]
      }
    },

    // 4. Barbarian: Path of Lament
    {
      _id: "uasubbarblament0",
      name: isPt ? "Caminho do Lamento" : "Path of Lament",
      type: "subclass",
      img: "icons/magic/control/fear-fright-monster-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bárbaros que trilham o Caminho do Lamento forjam seus arrependimentos em armas mortais e canalizam suas dores mais profundas em uma fúria sobrenatural vinda do além-túmulo.</p>`
            : `<p>Barbarians walking the Path of Lament hone their regrets into deadly weapons, propelled by supernatural grief and gifts from beyond the grave.</p>`,
          chat: ""
        },
        identifier: "lament",
        classIdentifier: "barbarian",
        advancement: [
          {
            _id: "advblamnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recurso do Lamento (Nível 3)" : "Lament Feature (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarblamban0001" }
              ]
            }
          },
          {
            _id: "advblamnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Lamento (Nível 6)" : "Lament Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarblamcom0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarblamhor0001" }
              ]
            }
          },
          {
            _id: "advblamnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Lamento (Nível 10)" : "Lament Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarblamang0001" }
              ]
            }
          },
          {
            _id: "advblamnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Lamento (Nível 14)" : "Lament Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarblamsor0001" }
              ]
            }
          }
        ]
      }
    },

    // 5. Monk: Warrior of Venom
    {
      _id: "uasubmonkvenom00",
      name: isPt ? "Guerreiro do Veneno" : "Warrior of Venom",
      type: "subclass",
      img: "icons/weapons/daggers/dagger-poison-skull-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Guerreiros do Veneno corrompem suas reservas internas de poder para se tornarem o próprio veneno encarnado, infectando e debilitando inimigos a cada golpe.</p>`
            : `<p>Warriors of Venom pollute their internal power to become poison incarnate, harnessing their own toxicity to impair and envenom foes.</p>`,
          chat: ""
        },
        identifier: "venom",
        classIdentifier: "monk",
        advancement: [
          {
            _id: "advmvennv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Veneno (Nível 3)" : "Venom Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkvenwep0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkvenpot0001" }
              ]
            }
          },
          {
            _id: "advmvennv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Veneno (Nível 6)" : "Venom Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkventch0001" }
              ]
            }
          },
          {
            _id: "advmvennv0000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recursos do Veneno (Nível 11)" : "Venom Features (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkvenref0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkvenbld0001" }
              ]
            }
          },
          {
            _id: "advmvennv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso do Veneno (Nível 17)" : "Venom Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkvenbrt0001" }
              ]
            }
          }
        ]
      }
    },

    // 6. Warlock: Primordial Patron
    {
      _id: "uasubprimordial0",
      name: isPt ? "Patrono Primordial" : "Primordial Patron",
      type: "subclass",
      img: "icons/magic/elements/sphere-elements-fire-earth-water-air.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Seu pacto bebe das forças brutas dos Planos Interiores, tornando você um arauto de poderosos príncipes e horrores elementais do caos primitivo.</p>`
            : `<p>Your pact draws on the Inner Planes, heralding ancient and destructive scions of elemental chaos and preparing the way for their arrival.</p>`,
          chat: ""
        },
        identifier: "primordial",
        classIdentifier: "warlock",
        advancement: [
          {
            _id: "advprimnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Primordial (Nível 3)" : "Primordial Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawlkprimnod0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawlkprimspe0001" }
              ]
            }
          },
          {
            _id: "advprimnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Primordial (Nível 6)" : "Primordial Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawlkprimhav0001" }
              ]
            }
          },
          {
            _id: "advprimnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Primordial (Nível 10)" : "Primordial Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawlkprimpro0001" }
              ]
            }
          },
          {
            _id: "advprimnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Primordial (Nível 14)" : "Primordial Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uawlkprimhar0001" }
              ]
            }
          }
        ]
      }
    },

    // 7. Druid: Circle of the Titan
    {
      _id: "uasubdruidtitan0",
      name: isPt ? "Círculo do Titã" : "Circle of the Titan",
      type: "subclass",
      img: "icons/creatures/magical/construct-golem-stone-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Druidas do Círculo do Titã assumem formas titânicas e monstruosas para esmagar cidades poluidoras e retribuir com cataclismos naturais àqueles que violam a natureza.</p>`
            : `<p>Druids of the Circle of the Titan assume towering, monstrous forms to mete out cataclysmic retribution and forcibly restore the natural order.</p>`,
          chat: ""
        },
        identifier: "titan",
        classIdentifier: "druid",
        advancement: [
          {
            _id: "advdtitnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Titã (Nível 3)" : "Titan Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadrdtitanspe001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadrdtitanfrm001" }
              ]
            }
          },
          {
            _id: "advdtitnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Titã (Nível 6)" : "Titan Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadrdtitanimp001" }
              ]
            }
          },
          {
            _id: "advdtitnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Titã (Nível 10)" : "Titan Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadrdtitanhav001" }
              ]
            }
          },
          {
            _id: "advdtitnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Titã (Nível 14)" : "Titan Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uadrdtitanapp001" }
              ]
            }
          }
        ]
      }
    },

    // 8. Fighter: Hell Knight
    {
      _id: "uasubfghthellkni",
      name: isPt ? "Cavaleiro do Inferno" : "Hell Knight",
      type: "subclass",
      img: "icons/weapons/swords/sword-flanged-fire-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Campeões e executores juramentados a arquidiabos dos Nove Infernos, munidos de armas forjadas em fogo infernal e capazes de infligir feridas atrozes que drenam a vida de seus oponentes.</p>`
            : `<p>Champions of archdevils and high-ranking fiends of the Nine Hells, armed with hell-forged weapons to inflict infernal wounds and damn enemies.</p>`,
          chat: ""
        },
        identifier: "hell-knight",
        classIdentifier: "fighter",
        advancement: [
          {
            _id: "advfhelnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Cavaleiro do Inferno (Nível 3)" : "Hell Knight Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlgift00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlwep000001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlwnd000001" }
              ]
            }
          },
          {
            _id: "advfhelnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recursos do Cavaleiro do Inferno (Nível 7)" : "Hell Knight Features (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthladvw00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthleqp000001" }
              ]
            }
          },
          {
            _id: "advfhelnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Cavaleiro do Inferno (Nível 10)" : "Hell Knight Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlsrg000001" }
              ]
            }
          },
          {
            _id: "advfhelnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Cavaleiro do Inferno (Nível 15)" : "Hell Knight Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlmsf000001" }
              ]
            }
          },
          {
            _id: "advfhelnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso do Cavaleiro do Inferno (Nível 18)" : "Hell Knight Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgthlbrg000001" }
              ]
            }
          }
        ]
      }
    },

    // 9. Sorcerer: Demonic Sorcery
    {
      _id: "uasubsorcdemonic",
      name: isPt ? "Feitiçaria Demoníaca" : "Demonic Sorcery",
      type: "subclass",
      img: "icons/magic/unholy/portal-rift-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>A magia corruptora dos demônios e as camadas caóticas do Abismo correm em suas veias, rasgando fendas dimensionais que dilaceram a mente e o corpo dos infelizes por perto.</p>`
            : `<p>The corruptive magic of demons courses through you, making you a conduit for the infinite horrors and reality-warping chaos of the Abyss.</p>`,
          chat: ""
        },
        identifier: "demonic",
        classIdentifier: "sorcerer",
        advancement: [
          {
            _id: "advsdemnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos Demoníacos (Nível 3)" : "Demonic Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasrcdemrup00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasrcdemspe00001" }
              ]
            }
          },
          {
            _id: "advsdemnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso Demoníaco (Nível 6)" : "Demonic Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasrcdemrlm00001" }
              ]
            }
          },
          {
            _id: "advsdemnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso Demoníaco (Nível 14)" : "Demonic Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasrcdemcnd00001" }
              ]
            }
          },
          {
            _id: "advsdemnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso Demoníaco (Nível 18)" : "Demonic Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uasrcdemexp00001" }
              ]
            }
          }
        ]
      }
    },

    // 10. Barbarian: Path of the Spiritual Guardian
    {
      _id: "uasubbarbspirit0",
      name: isPt ? "Caminho do Guardião Espiritual" : "Path of the Spiritual Guardian",
      type: "subclass",
      img: "icons/magic/death/undead-ghost-shadow-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Bárbaros que invocam espíritos ancestrais e protetores durante sua fúria para proteger seus companheiros, enfraquecer ataques inimigos e desferir golpes vingativos.</p>`
            : `<p>Barbarians calling upon ancestral spirits to guide, defend their comrades, shield allies from harm, and lash out with vengeful strikes.</p>`,
          chat: ""
        },
        identifier: "spiritual-guardian",
        classIdentifier: "barbarian",
        advancement: [
          {
            _id: "advbspinv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recurso do Guardião (Nível 3)" : "Guardian Feature (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbspipro0001" }
              ]
            }
          },
          {
            _id: "advbspinv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso do Guardião (Nível 6)" : "Guardian Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbspishi0001" }
              ]
            }
          },
          {
            _id: "advbspinv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Guardião (Nível 10)" : "Guardian Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbspicon0001" }
              ]
            }
          },
          {
            _id: "advbspinv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Guardião (Nível 14)" : "Guardian Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbspiven0001" }
              ]
            }
          }
        ]
      }
    },

    // 11. Barbarian: Path of the Storm Herald
    {
      _id: "uasubbarbstormh0",
      name: isPt ? "Caminho do Arauto da Tempestade" : "Path of the Storm Herald",
      type: "subclass",
      img: "icons/magic/air/storm-lightning-clouds-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres em transformar a fúria em mantos de tempestade primordial (Deserto, Mar ou Tundra) que assolam inimigos com fogo, raios ou geada inclemente.</p>`
            : `<p>Harness Rage into a mantle of primal magic swirling like a storm, unleashing the fury of the Desert, Sea, or Tundra.</p>`,
          chat: ""
        },
        identifier: "storm-herald",
        classIdentifier: "barbarian",
        advancement: [
          {
            _id: "advbstrnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recurso da Tempestade (Nível 3)" : "Storm Feature (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbstrara0001" }
              ]
            }
          },
          {
            _id: "advbstrnv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recurso da Tempestade (Nível 6)" : "Storm Feature (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbstrsou0001" }
              ]
            }
          },
          {
            _id: "advbstrnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso da Tempestade (Nível 10)" : "Storm Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbstrshi0001" }
              ]
            }
          },
          {
            _id: "advbstrnv0000014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso da Tempestade (Nível 14)" : "Storm Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uabarbstrrag0001" }
              ]
            }
          }
        ]
      }
    },

    // 12. Fighter: Cavalier
    {
      _id: "uasubfgtcavalier",
      name: isPt ? "Cavaleiro" : "Cavalier",
      type: "subclass",
      img: "icons/skills/movement/charge-charge-horseman-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Especialistas em combate montado e proteção de aliados em terra, marcando alvos inabalavelmente e impondo controle implacável de linha de frente.</p>`
            : `<p>Defenders of allies on foot or from a mount, excelling at mounted combat, warding maneuvers, and holding the defensive line.</p>`,
          chat: ""
        },
        identifier: "cavalier",
        classIdentifier: "fighter",
        advancement: [
          {
            _id: "advfcavnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Cavaleiro (Nível 3)" : "Cavalier Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavprf00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavsad00001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavmrk00001" }
              ]
            }
          },
          {
            _id: "advfcavnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Cavaleiro (Nível 7)" : "Cavalier Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavwar00001" }
              ]
            }
          },
          {
            _id: "advfcavnv0000010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Cavaleiro (Nível 10)" : "Cavalier Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavhld00001" }
              ]
            }
          },
          {
            _id: "advfcavnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Cavaleiro (Nível 15)" : "Cavalier Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavchr00001" }
              ]
            }
          },
          {
            _id: "advfcavnv0000018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso do Cavaleiro (Nível 18)" : "Cavalier Feature (Level 18)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uafgtcavdef00001" }
              ]
            }
          }
        ]
      }
    },

    // 13. Monk: Warrior of Intoxication
    {
      _id: "uasubmonkdrunk00",
      name: isPt ? "Guerreiro da Intoxicação" : "Warrior of Intoxication",
      type: "subclass",
      img: "icons/consumables/potions/potion-flask-corked-amber.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Monges que confundem oponentes com passos cambaleantes e imprevisíveis, utilizando infusões místicas fortificantes e rajadas acrobáticas de golpes desconcertantes.</p>`
            : `<p>Monks who sway and stumble to confound foes, drinking mystic brews for potent benefits and unleashing chaotic frenzies of unarmed strikes.</p>`,
          chat: ""
        },
        identifier: "intoxication",
        classIdentifier: "monk",
        advancement: [
          {
            _id: "advmdrknv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos da Intoxicação (Nível 3)" : "Intoxication Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrkprf0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrktch0001" }
              ]
            }
          },
          {
            _id: "advmdrknv0000006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos da Intoxicação (Nível 6)" : "Intoxication Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrkswy0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrkbrw0001" }
              ]
            }
          },
          {
            _id: "advmdrknv0000011",
            type: "ItemGrant",
            level: 11,
            title: isPt ? "Recurso da Intoxicação (Nível 11)" : "Intoxication Feature (Level 11)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrkmst0001" }
              ]
            }
          },
          {
            _id: "advmdrknv0000017",
            type: "ItemGrant",
            level: 17,
            title: isPt ? "Recurso da Intoxicação (Nível 17)" : "Intoxication Feature (Level 17)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uamonkdrkfrn0001" }
              ]
            }
          }
        ]
      }
    },

    // 14. Paladin: Oathbreaker
    {
      _id: "uasubpaloathbrk0",
      name: isPt ? "Quebrador de Juramento" : "Oathbreaker",
      type: "subclass",
      img: "icons/magic/death/skull-horned-shadow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Paladinos corrompidos pelo poder ou traição que quebraram seus votos sagrados, liderando legiões de mortos-vivos com auras opressivas de medo, ódio e escuridão.</p>`
            : `<p>Paladins who shattered their sacred vows for dark ambition or corruption, wielding dread auras, necromancy, and overwhelming malice.</p>`,
          chat: ""
        },
        identifier: "oathbreaker",
        classIdentifier: "paladin",
        advancement: [
          {
            _id: "advpoatnv0000003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Quebrador (Nível 3)" : "Oathbreaker Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathund0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathasp0001" },
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathspe0001" }
              ]
            }
          },
          {
            _id: "advpoatnv0000007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso do Quebrador (Nível 7)" : "Oathbreaker Feature (Level 7)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathhat0001" }
              ]
            }
          },
          {
            _id: "advpoatnv0000015",
            type: "ItemGrant",
            level: 15,
            title: isPt ? "Recurso do Quebrador (Nível 15)" : "Oathbreaker Feature (Level 15)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathres0001" }
              ]
            }
          },
          {
            _id: "advpoatnv0000020",
            type: "ItemGrant",
            level: 20,
            title: isPt ? "Recurso do Quebrador (Nível 20)" : "Oathbreaker Feature (Level 20)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.ua-features.Item.uapaloathdrd0001" }
              ]
            }
          }
        ]
      }
    }
  ];
}

// -------------------------------------------------------------
// 3. FUSÃO E COMPILAÇÃO (Lote 1 + Lote 2 + Lote 3)
// -------------------------------------------------------------
export function run() {
  console.log("Compilando dados do Lote 3 de Unearthed Arcana...");

  const existingFeaturesPt = loadExisting("ua-features.json", PT_DIR);
  const existingFeaturesEn = loadExisting("ua-features.json", EN_DIR);
  const existingSubclassesPt = loadExisting("ua-subclasses.json", PT_DIR);
  const existingSubclassesEn = loadExisting("ua-subclasses.json", EN_DIR);

  const lote3FeaturesPt = buildLote3Features(true);
  const lote3FeaturesEn = buildLote3Features(false);
  const lote3SubclassesPt = buildLote3Subclasses(true);
  const lote3SubclassesEn = buildLote3Subclasses(false);

  function mergeById(existing, newlyAdded) {
    const map = new Map();
    for (const item of existing) map.set(item._id, item);
    for (const item of newlyAdded) map.set(item._id, item);
    return Array.from(map.values());
  }

  const allFeaturesPt = mergeById(existingFeaturesPt, lote3FeaturesPt);
  const allFeaturesEn = mergeById(existingFeaturesEn, lote3FeaturesEn);
  const allSubclassesPt = mergeById(existingSubclassesPt, lote3SubclassesPt);
  const allSubclassesEn = mergeById(existingSubclassesEn, lote3SubclassesEn);

  console.log(`Total de Features: ${allFeaturesPt.length} (Lote 1 + 2 + 3)`);
  console.log(`Total de Subclasses: ${allSubclassesPt.length} (Lote 1 + 2 + 3)`);

  function save(filename, enData, ptData) {
    fs.writeFileSync(path.join(EN_DIR, filename), JSON.stringify(enData, null, 2) + "\n");
    fs.writeFileSync(path.join(PT_DIR, filename), JSON.stringify(ptData, null, 2) + "\n");
    fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(ptData, null, 2) + "\n");
  }

  save("ua-features.json", allFeaturesEn, allFeaturesPt);
  save("ua-subclasses.json", allSubclassesEn, allSubclassesPt);

  console.log("Arquivos JSON atualizados com sucesso para o Lote 3!");
}

run();
