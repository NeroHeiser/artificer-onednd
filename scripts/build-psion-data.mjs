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
// 1. CARACTERÍSTICAS DA CLASSE (psion-features.json)
// =============================================================

function buildFeatures(isPt) {
  return [
    // --- Recursos Básicos de Nível 1 ---
    {
      _id: "psionfeatpower01",
      name: isPt ? "Poder Psiônico" : "Psionic Power",
      type: "feat",
      img: "icons/magic/light/orbs-hand-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você abriga uma fonte de energia psiônica dentro de si, representada pelos seus <strong>Dados de Energia Psiônica</strong>.</p>
               <p>Seu nível de Psion determina o tamanho e a quantidade de dados que você possui (4d6 no nível 1, escalando até 12d12 no nível 17).</p>
               <p><strong>Recuperação:</strong> Você recupera 1 dado gasto ao terminar um Descanso Curto, e recupera todos ao terminar um Descanso Longo.</p>
               <p>Você começa com duas habilidades básicas: <strong>Propulsão Telecinética</strong> e <strong>Conexão Telepática</strong>.</p>`
            : `<p>You harbor a wellspring of psionic energy within yourself, represented by your <strong>Psionic Energy Dice</strong>.</p>
               <p>Your Psion level determines the die size and number of Psionic Energy Dice you have (4d6 at level 1, scaling to 12d12 at level 17).</p>
               <p><strong>Recovery:</strong> You regain 1 expended die when you finish a Short Rest, and all of them when you finish a Long Rest.</p>
               <p>You start with two baseline powers: <strong>Telekinetic Propel</strong> and <strong>Telepathic Connection</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 1" : "Psion 1"
      }
    },
    {
      _id: "psionfeatpropel1",
      name: isPt ? "Poder Psiônico: Propulsão Telecinética" : "Psionic Power: Telekinetic Propel",
      type: "feat",
      img: "icons/magic/control/debuff-energy-hold-levitate-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, escolha uma criatura Grande ou menor a até 9 metros (30 pés) de você que você possa ver.</p>
               <p>O alvo deve ser bem-sucedido em uma <strong>Salvaguarda de Força</strong> contra a sua CD de Conjuração ou será movido 1,5 metro (5 pés) em linha reta em sua direção ou para longe de você.</p>
               <p><strong>Impulso Amplificado:</strong> Alternativamente, você pode rolar um Dado de Energia Psiônica ao usar esta Ação Bônus. Se o fizer, a distância movida é igual a <strong>5 vezes o número rolado em pés</strong>. O dado é gasto apenas se o alvo falhar na salvaguarda.</p>`
            : `<p>As a <strong>Bonus Action</strong>, choose one Large or smaller creature other than you that you can see within 30 feet of yourself.</p>
               <p>The target must succeed on a <strong>Strength saving throw</strong> against your spell save DC or be moved 5 feet straight toward you or straight away from you.</p>
               <p><strong>Amplified Propel:</strong> Alternatively, you can roll one Psionic Energy Die when taking this Bonus Action, and the distance moved is equal to <strong>5 times the number rolled in feet</strong>. The die is expended only if the target fails the saving throw.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 1" : "Psion 1",
        activation: { type: "bonus", cost: 1 },
        range: { value: 30, units: "ft" },
        target: { value: 1, type: "creature" },
        save: { ability: "str", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionfeattelecon",
      name: isPt ? "Poder Psiônico: Conexão Telepática" : "Psionic Power: Telepathic Connection",
      type: "feat",
      img: "icons/magic/perception/orb-crystal-ball-scrying-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você possui telepatia com alcance de <strong>9 metros (30 pés)</strong>.</p>
               <p>Como uma <strong>Ação Bônus</strong>, você pode rolar um Dado de Energia Psiônica. Pela próxima 1 hora, o alcance da sua telepatia aumenta em uma quantidade de pés igual a <strong>10 vezes o número rolado</strong>.</p>
               <p>A primeira vez que usar esta Ação Bônus após cada Descanso Longo, você <strong>não gasta</strong> o Dado de Energia Psiônica. Em todas as outras vezes, o dado é consumido.</p>`
            : `<p>You have telepathy with a range of <strong>30 feet</strong>.</p>
               <p>As a <strong>Bonus Action</strong>, you can roll one Psionic Energy Die. For the next hour, the range of your telepathy increases by a number of feet equal to <strong>10 times the number rolled</strong>.</p>
               <p>The first time you use this Bonus Action after each Long Rest, you <strong>do not expend</strong> the Psionic Energy Die. All other times, you expend the die.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 1" : "Psion 1",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "psionfeatsubtlet",
      name: isPt ? "Telecinese Sutil" : "Subtle Telekinesis",
      type: "feat",
      img: "icons/magic/symbols/hand-sparkles-glow-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você aprende o truque <em>Mãos Mágicas (Mage Hand)</em>.</p>
               <p>Você pode conjurá-lo <strong>sem componentes Somáticos</strong> e pode tornar a mão espectral <strong>Invisível</strong> ao conjurá-la.</p>`
            : `<p>You know the <em>Mage Hand</em> cantrip.</p>
               <p>You can cast it <strong>without Somatic components</strong>, and you can make the spectral hand <strong>Invisible</strong> when you cast it.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 1" : "Psion 1"
      }
    },
    {
      _id: "psionfeatspell01",
      name: isPt ? "Conjuração Psiônica" : "Psionic Spellcasting",
      type: "feat",
      img: "icons/magic/light/projectile-smoke-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você aprendeu a canalizar energia mágica pura através do poder de sua mente.</p>
               <p><strong>Atributo de Conjuração:</strong> Sua habilidade para conjurar magias de Psion é <strong>Inteligência</strong>.</p>
               <p><strong>Conjuração Psiônica:</strong> Quando você conjura uma magia de Psion, ela <strong>não requer componentes Verbais nem Materiais</strong>, mesmo se a descrição indicar "V" ou "M", exceto componentes materiais consumidos pela magia ou que possuam custo em peças de ouro especificado.</p>`
            : `<p>You have learned how to channel magical energy using the power of your mind.</p>
               <p><strong>Spellcasting Ability:</strong> <strong>Intelligence</strong> is your spellcasting ability for your Psion spells.</p>
               <p><strong>Psionic Spellcasting:</strong> When you cast a Psion spell, that spell <strong>doesn't require a Verbal or Material component</strong>, even if the spell includes "V" or "M" in its components entry, except Material components that are consumed by the spell or have a specified gold cost.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 1" : "Psion 1"
      }
    },
    {
      _id: "psionfeatdisc001",
      name: isPt ? "Disciplinas Psiônicas" : "Psionic Discipline",
      type: "feat",
      img: "icons/sundries/books/book-symbol-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 2º nível, você aprende técnicas psiônicas avançadas alimentadas por seus Dados de Energia Psiônica. Você escolhe <strong>duas disciplinas</strong> à sua escolha.</p>
               <p>Você pode usar apenas uma Disciplina a cada turno e apenas uma vez por turno, salvo indicação em contrário.</p>
               <p>Você aprende uma disciplina adicional nos níveis <strong>5, 10, 13 e 17</strong>. Sempre que ganha um nível de Psion, você pode substituir uma disciplina conhecida por outra.</p>`
            : `<p>At 2nd level, you learn advanced psionic techniques fueled by your Psionic Energy Dice. You gain <strong>two disciplines</strong> of your choice.</p>
               <p>You can use only one Discipline each turn and only once per turn unless otherwise noted.</p>
               <p>You gain one additional option at Psion levels <strong>5, 10, 13, and 17</strong>. Whenever you gain a Psion level, you can replace one known discipline with another.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2" : "Psion 2"
      }
    },
    {
      _id: "psionfeatrestor1",
      name: isPt ? "Restauração Psiônica" : "Psionic Restoration",
      type: "feat",
      img: "icons/magic/life/cross-sparkle-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 5º nível, você pode realizar uma meditação focada durante <strong>1 minuto</strong>. Ao final dela, você recupera todos os seus <strong>Dados de Energia Psiônica</strong> gastos.</p>
               <p>Depois de usar este recurso, você só pode usá-lo novamente ao terminar um <strong>Descanso Longo</strong>.</p>`
            : `<p>At 5th level, you can perform a meditation that focuses the mind for <strong>1 minute</strong>. At the end of it, you regain all expended <strong>Psionic Energy Dice</strong>.</p>
               <p>Once you use this feature, you can't do so again until you finish a <strong>Long Rest</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 5" : "Psion 5",
        uses: { value: 1, max: 1, per: "lr", recovery: "" }
      }
    },
    {
      _id: "psionfeatsurge01",
      name: isPt ? "Surto Psiônico" : "Psionic Surge",
      type: "feat",
      img: "icons/magic/lightning/bolt-forked-large-cyan.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 7º nível, você pode forçar seus poderes psiônicos usando sua força vital.</p>
               <p>Após rolar um ou mais Dados de Energia Psiônica, você pode gastar <strong>um dos seus Dados de Vida</strong> e tratar qualquer rolagem de <strong>1, 2 ou 3</strong> nesses dados psiônicos como um <strong>4</strong>.</p>`
            : `<p>At 7th level, you can push your psionic powers using your life force.</p>
               <p>After you roll one or more Psionic Energy Dice, you can expend <strong>one of your Hit Point Dice</strong> and treat any roll of <strong>1, 2, or 3</strong> on those Psionic Energy Dice as a <strong>4</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 7" : "Psion 7"
      }
    },
    {
      _id: "psionfeatreserv1",
      name: isPt ? "Reservas Psiônicas" : "Psionic Reserves",
      type: "feat",
      img: "icons/magic/symbols/rune-sigil-horned-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 18º nível, quando você rolar <strong>Iniciativa</strong>, você recupera usos gastos de Dados de Energia Psiônica até ter <strong>quatro</strong>, caso possua menos do que isso.</p>`
            : `<p>At 18th level, when you roll <strong>Initiative</strong>, you regain expended uses of Psionic Energy Dice until you have <strong>four</strong> if you have fewer than that.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 18" : "Psion 18"
      }
    },
    {
      _id: "psionfeatepicb01",
      name: isPt ? "Dádiva Épica" : "Epic Boon",
      type: "feat",
      img: "icons/magic/light/explosion-star-glow-silhouette.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 19º nível, você ganha um talento de Dádiva Épica (One D&D / 2024) ou outro talento para o qual você seja qualificado. A <em>Dádiva da Resistência Elemental</em> é recomendada.</p>`
            : `<p>At 19th level, you gain an Epic Boon feat (One D&D / 2024) or another feat of your choice for which you qualify. <em>Boon of Energy Resistance</em> is recommended.</p>`,
          chat: ""
        },
        source: { custom: "Player's Handbook 2024 / Unearthed Arcana 2025" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 19" : "Psion 19"
      }
    },
    {
      _id: "psionfeatenkindl",
      name: isPt ? "Força Vital Inflamada" : "Enkindled Life Force",
      type: "feat",
      img: "icons/magic/fire/spirit-soul-flame-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 20º nível, você queima sua própria força vital para alcançar níveis supremos de psiônica.</p>
               <p>Uma vez por turno, ao rolar um ou mais Dados de Energia Psiônica para um recurso de Psion ou Disciplina, você pode gastar <strong>um ou dois dos seus Dados de Vida</strong>.</p>
               <p>Para cada Dado de Vida gasto, role um <strong>Dado de Energia Psiônica adicional</strong> e adicione o número rolado ao total. Essa rolagem adicional <strong>não gasta</strong> o Dado de Energia Psiônica.</p>`
            : `<p>At 20th level, you burn your life force to achieve greater psionics.</p>
               <p>Once per turn, when you roll one or more Psionic Energy Dice for a Psion feature or Psionic Discipline, you can expend <strong>one or two of your Hit Point Dice</strong>.</p>
               <p>For each Hit Point Die expended, roll an <strong>additional Psionic Energy Die</strong> and add the numbers rolled to the total. This roll does not expend the Psionic Energy Die.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 20" : "Psion 20"
      }
    },

    // --- 11 Disciplinas Psiônicas ---
    {
      _id: "psiondiscbiofeed",
      name: isPt ? "Disciplina: Biofeedback" : "Discipline: Biofeedback",
      type: "feat",
      img: "icons/magic/life/heart-shadow-red.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao conjurar uma magia de Psion da escola de <strong>Necromancia ou Transmutação</strong>, você pode gastar uma quantidade de Dados de Energia Psiônica de até o seu modificador de Inteligência.</p>
               <p>Role os dados: você ganha <strong>Pontos de Vida Temporários</strong> iguais ao total rolado mais seu modificador de Inteligência (mínimo de 1 PVT).</p>`
            : `<p>When you cast a Psion spell from the <strong>Necromancy or Transmutation</strong> school, you can expend a number of Psionic Energy Dice up to your Intelligence modifier.</p>
               <p>Roll them, and gain a number of <strong>Temporary Hit Points</strong> equal to the total number rolled plus your Intelligence modifier (minimum of one).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscprecogn",
      name: isPt ? "Disciplina: Precognição Fortalecedora" : "Discipline: Bolstering Precognition",
      type: "feat",
      img: "icons/magic/time/hourglass-tilted-gold.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao conjurar uma magia de Psion da escola de <strong>Abjuração ou Adivinhação</strong>, você pode gastar um Dado de Energia Psiônica.</p>
               <p>Role o dado e escolha uma criatura a até 18 metros (60 pés) que você possa ver (pode ser você mesmo). Até o final do seu próximo turno, a criatura ganha um <strong>bônus no próximo Teste d20</strong> igual ao número rolado.</p>`
            : `<p>When you cast a Psion spell from the <strong>Abjuration or Divination</strong> school, you can expend one Psionic Energy Die.</p>
               <p>Roll the die and choose a creature you can see within 60 feet (which can be yourself). Until the end of your next turn, the creature gains a <strong>bonus to the next D20 Test</strong> it makes equal to the number rolled.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)",
        range: { value: 60, units: "ft" }
      }
    },
    {
      _id: "psiondiscdestruc",
      name: isPt ? "Disciplina: Pensamentos Destrutivos" : "Discipline: Destructive Thoughts",
      type: "feat",
      img: "icons/magic/fire/flame-burning-skeleton-head.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao conjurar uma magia de Psion da escola de <strong>Conjuração ou Evocação</strong> que force uma criatura que você possa ver a fazer uma salvaguarda, você pode gastar uma quantidade de Dados de Energia Psiônica de até o seu modificador de Inteligência.</p>
               <p>Role os dados: a criatura sofre <strong>Dano Psíquico</strong> igual ao total rolado mais seu modificador de Inteligência (mínimo de 1), independentemente do resultado da salvaguarda.</p>`
            : `<p>When you cast a Psion spell from the <strong>Conjuration or Evocation</strong> school that forces a creature you can see to make a saving throw against the spell, you can expend a number of Psionic Energy Dice up to your Intelligence modifier.</p>
               <p>Roll them: the creature takes <strong>Psychic damage</strong> equal to the total number rolled plus your Intelligence modifier (minimum of one), regardless of the result of the saving throw.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscdevtng1",
      name: isPt ? "Disciplina: Língua Diabólica" : "Discipline: Devilish Tongue",
      type: "feat",
      img: "icons/magic/control/mouth-smile-fangs-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao realizar a ação de <strong>Influência</strong> (One D&D), você pode rolar um Dado de Energia Psiônica e adicionar o número rolado ao teste de atributo.</p>
               <p>Se isso fizer você ter <strong>sucesso</strong> no teste, o dado é gasto. Em caso de falha, o dado é preservado.</p>`
            : `<p>When you take the <strong>Influence</strong> action (One D&D), you can roll one Psionic Energy Die and add the number rolled to the ability check.</p>
               <p>If this causes you to <strong>succeed</strong> on the ability check, the die is expended. Otherwise, it is preserved.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscexpndaw",
      name: isPt ? "Disciplina: Percepção Expandida" : "Discipline: Expanded Awareness",
      type: "feat",
      img: "icons/magic/perception/eye-ringed-glow-angry-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao realizar a ação de <strong>Procura (Search)</strong>, você pode rolar um Dado de Energia Psiônica e adicionar o número rolado ao teste de atributo.</p>
               <p>Se isso fizer você ter <strong>sucesso</strong> no teste, o dado é gasto. Em caso de falha, o dado é preservado.</p>`
            : `<p>When you take the <strong>Search</strong> action, you can roll one Psionic Energy Die and add the number rolled to the ability check.</p>
               <p>If this causes you to <strong>succeed</strong> on the ability check, the die is expended. Otherwise, it is preserved.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscidinsin",
      name: isPt ? "Disciplina: Insinuação do Id" : "Discipline: Id Insinuation",
      type: "feat",
      img: "icons/magic/control/silhouette-hold-beam-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao conjurar uma magia de Psion da escola de <strong>Encantamento ou Ilusão</strong> que force uma criatura a fazer uma salvaguarda, você pode gastar um Dado de Energia Psiônica e rolá-lo.</p>
               <p>Um alvo da magia que você possa ver <strong>subtrai metade do número rolado (arredondado para cima)</strong> de sua salvaguarda contra a magia.</p>`
            : `<p>When you cast a Psion spell from the <strong>Enchantment or Illusion</strong> school that forces a creature to make a saving throw, you can expend one Psionic Energy Die and roll it.</p>
               <p>One target of the spell you can see <strong>subtracts half the number rolled (round up)</strong> from its saving throw against the spell.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscineraim",
      name: isPt ? "Disciplina: Mira Certeira" : "Discipline: Inerrant Aim",
      type: "feat",
      img: "icons/skills/ranged/target-bullseye-arrow-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Quando fizer uma jogada de ataque contra uma criatura e <strong>errar</strong>, você pode rolar um Dado de Energia Psiônica e adicionar o número rolado à jogada de ataque.</p>
               <p>Se isso fizer o ataque acertar, o dado é gasto. Se continuar errando, o dado é preservado.</p>`
            : `<p>When you make an attack roll against a creature and <strong>miss</strong>, you can roll one Psionic Energy Die and add the number rolled to the attack roll.</p>
               <p>If this causes the attack to hit, the die is expended. Otherwise, the die is preserved.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscobsmind",
      name: isPt ? "Disciplina: Mente Observadora" : "Discipline: Observant Mind",
      type: "feat",
      img: "icons/magic/knowledge/brain-science-yellow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Ao realizar a ação de <strong>Estudo (Study)</strong>, você pode rolar um Dado de Energia Psiônica e adicionar o número rolado ao teste de atributo.</p>
               <p>Se isso fizer você ter <strong>sucesso</strong> no teste, o dado é gasto. Em caso de falha, o dado é preservado.</p>`
            : `<p>When you take the <strong>Study</strong> action, you can roll one Psionic Energy Die and add the number rolled to the ability check.</p>
               <p>If this causes you to <strong>succeed</strong> on the ability check, the die is expended. Otherwise, the die is preserved.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)"
      }
    },
    {
      _id: "psiondiscbacklas",
      name: isPt ? "Disciplina: Contra-ataque Psiônico" : "Discipline: Psionic Backlash",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-glowing-triangle-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Imediatamente após uma criatura que você possa ver atingir você com uma jogada de ataque, você pode usar uma <strong>Reação</strong> para gastar um Dado de Energia Psiônica, rolá-lo e <strong>reduzir o dano sofrido</strong> pelo dobro do número rolado mais seu modificador de Inteligência (mínimo de 2 de redução).</p>
               <p>Além disso, você força o atacante a fazer uma <strong>Salvaguarda de Sabedoria</strong>. Em caso de falha, o atacante sofre <strong>dano psíquico</strong> igual à quantidade de dano que você reduziu.</p>`
            : `<p>Immediately after a creature you can see hits you with an attack roll, you can take a <strong>Reaction</strong> to expend one Psionic Energy Die, roll it, and <strong>reduce the damage taken</strong> equal to twice the number rolled plus your Intelligence modifier (minimum of two).</p>
               <p>In addition, you can force the attacker to make a <strong>Wisdom saving throw</strong>. On a failed save, the target takes <strong>psychic damage</strong> equal to the amount of damage you reduced.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)",
        activation: { type: "reaction", cost: 1 },
        save: { ability: "wis", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psiondiscguards1",
      name: isPt ? "Disciplina: Guardas Psiônicos" : "Discipline: Psionic Guards",
      type: "feat",
      img: "icons/magic/defensive/barrier-shield-dome-blue-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No início do seu turno, você pode gastar um Dado de Energia Psiônica. Até o início do seu próximo turno, você tem <strong>Imunidade às condições Enfeitiçado e Amedrontado</strong> e <strong>Vantagem em salvaguardas de Inteligência</strong>.</p>
               <p>Se você estiver Enfeitiçado ou Amedrontado ao usar esta disciplina, a condição é encerrada imediatamente.</p>
               <p><em>Você ainda pode usar uma disciplina diferente neste mesmo turno.</em></p>`
            : `<p>At the start of your turn, you can expend one Psionic Energy Die. Until the start of your next turn, you have <strong>Immunity to the Charmed and Frightened conditions</strong> and <strong>Advantage on Intelligence saving throws</strong>.</p>
               <p>If you are Charmed or Frightened when you use this discipline, the condition ends on you.</p>
               <p><em>When you use Psionic Guards, you can also use a different Psionic Discipline this turn.</em></p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)",
        activation: { type: "special", cost: 1 }
      }
    },
    {
      _id: "psiondiscsharpmd",
      name: isPt ? "Disciplina: Mente Aguçada" : "Discipline: Sharpened Mind",
      type: "feat",
      img: "icons/magic/symbols/triangle-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No início do seu turno, você pode gastar um Dado de Energia Psiônica para afiar sua mente destrutiva. Role o dado e registre o número rolado. Você ganha os benefícios abaixo por <strong>1 minuto</strong> ou até ficar Incapacitado:</p>
               <ul>
                 <li><strong>Transpor Psiônica:</strong> Dano de seus ataques de arma, magias de Psion e recursos de Psion <strong>ignora Resistência a dano Psíquico</strong>.</li>
                 <li><strong>Modo de Ataque:</strong> Uma vez por turno, ao causar dano Psíquico, você pode substituir o número rolado em um dos dados de dano pelo <strong>número registrado</strong> nesta ativação.</li>
               </ul>
               <p><em>Você ainda pode usar uma disciplina diferente neste mesmo turno.</em></p>`
            : `<p>At the start of your turn, you can expend one Psionic Energy Die to hone your destructive psionics. Roll the die and record the number rolled. You gain the following benefits for <strong>1 minute</strong> or until Incapacitated:</p>
               <ul>
                 <li><strong>Bypassing Psionics:</strong> Damage from your weapon attacks, Psion spells, and Psion features <strong>ignores Resistance to Psychic damage</strong>.</li>
                 <li><strong>Attack Mode:</strong> Once per turn, when dealing Psychic damage, you can replace the number rolled on one of the damage dice with the <strong>number recorded</strong> when you activated this discipline.</li>
               </ul>
               <p><em>When you use Sharpened Mind, you can also use a different Psionic Discipline this turn.</em></p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psion 2 (Disciplina)" : "Psion 2 (Discipline)",
        activation: { type: "special", cost: 1 }
      }
    },

    // --- Subclasse Metamorfo (Metamorph) Features ---
    {
      _id: "psionmetaspells1",
      name: isPt ? "Magias do Metamorfo" : "Metamorph Spells",
      type: "feat",
      img: "icons/magic/nature/plant-vines-healing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Alterar-se (Alter Self)</em>, <em>Curar Ferimentos (Cure Wounds)</em>, <em>Infligir Ferimentos (Inflict Wounds)</em>, <em>Restauração Menor (Lesser Restoration)</em></li>
                 <li><strong>5º Nível:</strong> <em>Aura de Vitalidade (Aura of Vitality)</em>, <em>Velocidade (Haste)</em></li>
                 <li><strong>7º Nível:</strong> <em>Metamorfose (Polymorph)</em>, <em>Pele de Pedra (Stoneskin)</em></li>
                 <li><strong>9º Nível:</strong> <em>Contágio (Contagion)</em>, <em>Curar Ferimentos em Massa (Mass Cure Wounds)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Psion levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Alter Self</em>, <em>Cure Wounds</em>, <em>Inflict Wounds</em>, <em>Lesser Restoration</em></li>
                 <li><strong>Level 5:</strong> <em>Aura of Vitality</em>, <em>Haste</em></li>
                 <li><strong>Level 7:</strong> <em>Polymorph</em>, <em>Stoneskin</em></li>
                 <li><strong>Level 9:</strong> <em>Contagion</em>, <em>Mass Cure Wounds</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 3" : "Metamorph 3"
      }
    },
    {
      _id: "psionmetamutable",
      name: isPt ? "Forma Mutável" : "Mutable Form",
      type: "feat",
      img: "icons/magic/unholy/hand-marked-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma <strong>Ação Bônus</strong>, você gasta um Dado de Energia Psiônica para esticar psionicamente seus membros por <strong>1 minuto</strong>.</p>
               <p>Role o dado gasto: você ganha <strong>Pontos de Vida Temporários</strong> iguais ao número rolado mais seu modificador de Inteligência (mínimo de 1 PVT).</p>
               <p>Enquanto ativa, você ganha:</p>
               <ul>
                 <li><strong>Alcance:</strong> Seu alcance de ataque corpo a corpo aumenta em <strong>1,5 metro (5 pés)</strong>.</li>
                 <li><strong>Deslocamento:</strong> Seu deslocamento aumenta em <strong>1,5 metro (5 pés)</strong>.</li>
                 <li><strong>Toque:</strong> Ao conjurar uma magia com alcance de Toque e tempo de conjuração de 1 ação, você pode fazer o alcance ser de <strong>3 metros (10 pés)</strong>.</li>
               </ul>`
            : `<p>As a <strong>Bonus Action</strong>, you expend one Psionic Energy Die to psionically stretch your limbs for <strong>1 minute</strong>.</p>
               <p>Roll the expended die: you gain <strong>Temporary Hit Points</strong> equal to the number rolled plus your Intelligence modifier (minimum 1).</p>
               <p>While active, you gain the following benefits:</p>
               <ul>
                 <li><strong>Reach:</strong> Your melee reach increases by <strong>5 feet</strong>.</li>
                 <li><strong>Speed:</strong> Your Speed increases by <strong>5 feet</strong>.</li>
                 <li><strong>Touch:</strong> When you cast a spell with a range of Touch and casting time of an action, you can make the range <strong>10 feet</strong>.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 3" : "Metamorph 3",
        activation: { type: "bonus", cost: 1 }
      }
    },
    {
      _id: "psionmetaorganic",
      name: isPt ? "Armas Orgânicas" : "Organic Weapons",
      type: "feat",
      img: "icons/skills/melee/strike-blade-bone-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você pode moldar seus membros em armas biológicas vivas. Como uma Ação de Magia (ou antes de fazer um ataque na ação de Ataque), você reforma sua mão livre em uma das armas:</p>
               <ul>
                 <li><strong>Lâmina de Osso:</strong> Arma simples corpo a corpo com a propriedade <em>Acuidade</em>, causa <strong>1d8 de dano perfurante</strong>. Você tem <strong>Vantagem</strong> na jogada de ataque se houver um aliado a até 1,5m do alvo não incapacitado.</li>
                 <li><strong>Maça de Carne:</strong> Arma simples corpo a corpo, causa <strong>1d10 de dano contundente</strong>. Criatura atingida tem <strong>Desvantagem na próxima salvaguarda de Força ou Constituição</strong> antes do início do seu próximo turno.</li>
                 <li><strong>Lançador de Vísceras:</strong> Arma simples à distância (alcance 9m/27m [30/90 ft]), causa <strong>1d6 de dano de ácido</strong>. Uma vez por turno ao acertar, causa <strong>+1d6 de dano de ácido extra</strong>.</li>
               </ul>
               <p>Você pode usar sua <strong>Inteligência</strong> em vez de Força ou Destreza nas jogadas de ataque e dano.</p>`
            : `<p>You can shape your limbs into weapons. As a Magic action (or before an attack roll on the Attack action), you reform your free hand into an organic weapon:</p>
               <ul>
                 <li><strong>Bone Blade:</strong> Simple Melee weapon with <em>Finesse</em>, deals <strong>1d8 Piercing damage</strong>. Advantage on attacks if an ally is within 5 feet of target and not incapacitated.</li>
                 <li><strong>Flesh Maul:</strong> Simple Melee weapon, deals <strong>1d10 Bludgeoning damage</strong>. Target has <strong>Disadvantage on its next Strength or Constitution saving throw</strong> before start of its next turn.</li>
                 <li><strong>Viscera Launcher:</strong> Simple Ranged weapon (range 30/90 ft), deals <strong>1d6 Acid damage</strong>. Once per turn on a hit, deals <strong>+1d6 extra Acid damage</strong>.</li>
               </ul>
               <p>You can use your <strong>Intelligence modifier</strong> for attack and damage rolls instead of Strength or Dexterity.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 3" : "Metamorph 3"
      }
    },
    {
      _id: "psionboneblade01",
      name: isPt ? "Arma Orgânica: Lâmina de Osso" : "Organic Weapon: Bone Blade",
      type: "weapon",
      img: "icons/weapons/swords/sword-bone-glowing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Lâmina biológica pontiaguda que brota do seu antebraço. Conta como arma simples corpo a corpo com <strong>Acuidade</strong>. Usa <strong>Inteligência</strong> no ataque e dano.</p>
               <p><strong>Vantagem:</strong> Se houver pelo menos um aliado a até 1,5m do alvo não incapacitado.</p>`
            : `<p>Biological blade sprouting from your forearm. Counts as a Simple Melee weapon with <strong>Finesse</strong>. Uses <strong>Intelligence</strong> for attack and damage.</p>
               <p><strong>Advantage:</strong> If at least one conscious ally is within 5 feet of the target.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        actionType: "mwak",
        ability: "int",
        damage: { parts: [["1d8 + @mod", "piercing"]] },
        properties: { fin: true, mgc: true },
        weaponType: "simpleM"
      }
    },
    {
      _id: "psionfleshmaul01",
      name: isPt ? "Arma Orgânica: Maça de Carne" : "Organic Weapon: Flesh Maul",
      type: "weapon",
      img: "icons/weapons/maces/mace-spiked-bone-brown.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Seu punho e antebraço se coalescem em uma massa endurecida de carne e osso. Conta como arma simples corpo a corpo. Usa <strong>Inteligência</strong> no ataque e dano.</p>
               <p><strong>Impacto Debilitante:</strong> A criatura atingida tem Desvantagem na próxima salvaguarda de Força ou Constituição antes do início do seu próximo turno.</p>`
            : `<p>Your fist and forearm coalesce into a hardened mass of flesh and bone. Counts as a Simple Melee weapon. Uses <strong>Intelligence</strong> for attack and damage.</p>
               <p><strong>Debilitating Impact:</strong> A creature hit has Disadvantage on the next Strength or Constitution saving throw it makes before the start of its next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        actionType: "mwak",
        ability: "int",
        damage: { parts: [["1d10 + @mod", "bludgeoning"]] },
        properties: { mgc: true },
        weaponType: "simpleM"
      }
    },
    {
      _id: "psionvisceralau1",
      name: isPt ? "Arma Orgânica: Lançador de Vísceras" : "Organic Weapon: Viscera Launcher",
      type: "weapon",
      img: "icons/weapons/crossbows/crossbow-organic-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Sua mão e antebraço se transformam em um disparador de músculo e tendão que dispara projéteis de bílis ácida (alcance 9m/27m [30/90 ft]). Usa <strong>Inteligência</strong> no ataque e dano.</p>
               <p><strong>Carga Cáustica:</strong> Uma vez por turno ao acertar um ataque com esta arma, causa 1d6 de dano de ácido extra.</p>`
            : `<p>Your hand and forearm transform into a launcher made of muscle and sinew firing bolts of bile (range 30/90 ft). Uses <strong>Intelligence</strong> for attack and damage.</p>
               <p><strong>Caustic Burst:</strong> Once on each of your turns when you hit with this launcher, you can deal an extra 1d6 Acid damage.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        actionType: "rwak",
        ability: "int",
        range: { value: 30, long: 90, units: "ft" },
        damage: { parts: [["1d6 + @mod", "acid"]] },
        properties: { mgc: true },
        weaponType: "simpleR"
      }
    },
    {
      _id: "psionmetaextraat",
      name: isPt ? "Ataque Extra (Metamorfo)" : "Extra Attack (Metamorph)",
      type: "feat",
      img: "icons/skills/melee/blade-slash-swipe-orange.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, você pode atacar duas vezes em vez de uma sempre que realizar a ação de Ataque no seu turno.</p>
               <p>Além disso, você pode conjurar um de seus <strong>truques de Psion</strong> que tenha tempo de conjuração de uma ação no lugar de um desses ataques.</p>`
            : `<p>At 6th level, you can attack twice instead of once whenever you take the Attack action on your turn.</p>
               <p>In addition, you can cast one of your <strong>Psion cantrips</strong> that has a casting time of an action in place of one of those attacks.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 6" : "Metamorph 6"
      }
    },
    {
      _id: "psionmetafleshwe",
      name: isPt ? "Tecelão de Carne" : "Flesh Weaver",
      type: "feat",
      img: "icons/magic/life/shield-hand-healing-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, ao ativar a <strong>Forma Mutável</strong>, você pode gastar um Dado de Energia Psiônica adicional para obter os benefícios abaixo enquanto o efeito durar:</p>
               <ul>
                 <li><strong>Defesa Orgânica:</strong> Você ganha um bônus de <strong>+2 na Classe de Armadura (CA)</strong>.</li>
                 <li><strong>Cura Fortalecida:</strong> Ao conjurar uma magia com espaço de magia que restaure PV a uma ou mais criaturas, você pode gastar um Dado de Energia Psiônica, rolá-lo e adicionar o número rolado aos PV recuperados.</li>
               </ul>`
            : `<p>At 6th level, when you use <strong>Mutable Form</strong>, you can expend an additional Psionic Energy Die to gain the following benefits while the feature is active:</p>
               <ul>
                 <li><strong>Organic Defense:</strong> You gain a <strong>+2 bonus to AC</strong>.</li>
                 <li><strong>Empowered Healing:</strong> When you cast a spell with a spell slot that restores Hit Points, you can expend one Psionic Energy Die, roll it, and add the result to the Hit Points regained.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 6" : "Metamorph 6"
      }
    },
    {
      _id: "psionmetaimprmut",
      name: isPt ? "Forma Mutável Aprimorada" : "Improved Mutable Form",
      type: "feat",
      img: "icons/magic/defensive/armor-stone-skin-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, a duração da sua <strong>Forma Mutável</strong> aumenta para <strong>10 minutos</strong>, e ao ativá-la você escolhe um dos seguintes benefícios adicionais:</p>
               <ul>
                 <li><strong>Epiderme Pétrea:</strong> Vantagem em salvaguardas de Constituição para manter Concentração e <strong>Resistência</strong> a um tipo de dano à sua escolha (Ácido, Contundente, Frio, Fogo, Elétrico, Perfurante, Veneno, Cortante ou Trovão).</li>
                 <li><strong>Passo Superior:</strong> Enquanto não usar armadura, pode disparar (Dash) como Ação Bônus e ganha deslocamento de Escalada e Natação iguais ao seu deslocamento terrestre.</li>
                 <li><strong>Flexibilidade Sobrenatural:</strong> +1 de bônus na CA, move-se por espaços estreitos de até 2,5 cm (1 polegada) e gasta apenas 1,5m de movimento para escapar de amarras não mágicas ou encerrar a condição Agarrado.</li>
               </ul>`
            : `<p>At 10th level, the duration of your <strong>Mutable Form</strong> increases to <strong>10 minutes</strong>, and you gain one of the following benefits of your choice:</p>
               <ul>
                 <li><strong>Stony Epidermis:</strong> Advantage on Con saves to maintain Concentration, plus <strong>Resistance</strong> to one damage type of your choice (Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Poison, Slashing, or Thunder).</li>
                 <li><strong>Superior Stride:</strong> While unarmored, Dash as a Bonus Action, and gain Climb and Swim speeds equal to your Speed.</li>
                 <li><strong>Unnatural Flexibility:</strong> +1 bonus to AC, squeeze through spaces as narrow as 1 inch, and spend 5 feet of movement to escape nonmagical restraints or end the Grappled condition.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 10" : "Metamorph 10"
      }
    },
    {
      _id: "psionmetalifebnd",
      name: isPt ? "Armas que Dobram a Vida" : "Life-Bending Weapons",
      type: "feat",
      img: "icons/magic/unholy/energy-smoke-drain-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, suas armas orgânicas se envolvem em energias vitais e necróticas.</p>
               <p>Ao acertar um ataque com sua Arma Orgânica, você pode rolar um Dado de Energia Psiônica e causar <strong>dano Necrótico extra</strong> igual ao valor rolado (esta rolagem <strong>não consome o dado</strong>).</p>
               <p><strong>Dreno Vital em Área:</strong> Alternativamente, você pode optar por <strong>gastar o dado</strong>: o alvo sofre o dano necrótico e cada criatura à sua escolha em uma Emanação de 9 metros (30 pés) ao seu redor <strong>recupera PV</strong> iguais ao número rolado mais seu modificador de Inteligência (1x por rodada).</p>`
            : `<p>At 14th level, your weapon radiates life-mending psionic energy.</p>
               <p>When you hit with your Organic Weapon, roll one Psionic Energy Die to deal <strong>extra Necrotic damage</strong> equal to the roll without expending the die.</p>
               <p><strong>Vital Drain Pulse:</strong> Alternatively, you can expend the die: the target takes the necrotic damage, and each creature of your choice in a 30-foot Emanation from you <strong>regains Hit Points</strong> equal to the number rolled plus your Intelligence modifier (once per turn).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Metamorfo 14" : "Metamorph 14"
      }
    },

    // --- Subclasse Psicinético (Psykinetic) Features ---
    {
      _id: "psionpsyspells01",
      name: isPt ? "Magias Psicinéticas" : "Psykinetic Spells",
      type: "feat",
      img: "icons/magic/force/barrier-shield-dome-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Nuvem de Adagas (Cloud of Daggers)</em>, <em>Levitação (Levitate)</em>, <em>Escudo Arcano (Shield)</em>, <em>Onda Trovejante (Thunderwave)</em></li>
                 <li><strong>5º Nível:</strong> <em>Lentidão (Slow)</em>, <em>Esmagamento Telecinético (Telekinetic Crush)</em></li>
                 <li><strong>7º Nível:</strong> <em>Esfera Resiliente de Otiluke (Otiluke's Resilient Sphere)</em>, <em>Moldar Rochas (Stone Shape)</em></li>
                 <li><strong>9º Nível:</strong> <em>Telecinese (Telekinesis)</em>, <em>Muralha de Energia (Wall of Force)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Psion levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Cloud of Daggers</em>, <em>Levitate</em>, <em>Shield</em>, <em>Thunderwave</em></li>
                 <li><strong>Level 5:</strong> <em>Slow</em>, <em>Telekinetic Crush</em></li>
                 <li><strong>Level 7:</strong> <em>Otiluke's Resilient Sphere</em>, <em>Stone Shape</em></li>
                 <li><strong>Level 9:</strong> <em>Telekinesis</em>, <em>Wall of Force</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 3" : "Psykinetic 3"
      }
    },
    {
      _id: "psionpsystrongtk",
      name: isPt ? "Telecinese Reforçada" : "Stronger Telekinesis",
      type: "feat",
      img: "icons/magic/control/energy-stream-link-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando você conjura <em>Mãos Mágicas (Mage Hand)</em>, o alcance da magia aumenta em <strong>9 metros (+30 pés)</strong> e a mão psíquica pode carregar até <strong>9 kg (20 libras)</strong>.</p>`
            : `<p>At 3rd level, when you cast <em>Mage Hand</em>, its range increases by <strong>30 feet</strong>, and the hand can carry up to <strong>20 pounds</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 3" : "Psykinetic 3"
      }
    },
    {
      _id: "psionpsytech0001",
      name: isPt ? "Técnicas Telecinéticas" : "Telekinetic Techniques",
      type: "feat",
      img: "icons/magic/sonic/explosion-shock-wave-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao usar <strong>Propulsão Telecinética (Telekinetic Propel)</strong>, você pode rolar <strong>1d4</strong> e usar o resultado sem precisar gastar nenhum Dado de Energia Psiônica.</p>
               <p>Além disso, quando um alvo falhar na salvaguarda contra sua Propulsão Telecinética, você pode impor um dos seguintes efeitos adicionais:</p>
               <ul>
                 <li><strong>Impulso (Boost):</strong> O deslocamento do alvo aumenta em 3 metros (10 pés) até o início do seu próximo turno.</li>
                 <li><strong>Desorientar (Disorient):</strong> O alvo não pode fazer Ataques de Oportunidade até o início do seu próximo turno.</li>
                 <li><strong>Raio Telecinético (Telekinetic Bolt):</strong> O alvo sofre dano de <strong>Força</strong> igual ao número rolado no dado psiônico/1d4.</li>
               </ul>`
            : `<p>At 3rd level, when you use <strong>Telekinetic Propel</strong>, you can roll <strong>1d4</strong> and use the number rolled instead of expending a Psionic Energy Die.</p>
               <p>In addition, when a target fails the saving throw against your Telekinetic Propel, you can impose one of the following effects on that target:</p>
               <ul>
                 <li><strong>Boost:</strong> The target's Speed increases by 10 feet until the start of your next turn.</li>
                 <li><strong>Disorient:</strong> The target can't make Opportunity Attacks until the start of its next turn.</li>
                 <li><strong>Telekinetic Bolt:</strong> The target takes Force damage equal to the number rolled on the Psionic Energy Die / 1d4.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 3" : "Psykinetic 3"
      }
    },
    {
      _id: "psionpsydestran1",
      name: isPt ? "Transe Destrutivo" : "Destructive Trance",
      type: "feat",
      img: "icons/magic/movement/trail-streak-zigzag-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, no início do seu turno, você pode gastar um Dado de Energia Psiônica para entrar em um transe destrutivo por <strong>10 minutos</strong>.</p>
               <p>Enquanto durar, você ganha <strong>deslocamento de Voo de 6 metros (20 pés)</strong> e pode <strong>pairar</strong>.</p>
               <p>Além disso, ao conjurar uma magia de Psion que gaste um espaço de magia, você pode rolar seu Dado de Energia Psiônica e adicionar o número rolado a <strong>uma rolagem de dano</strong> dessa magia (sem gastar o dado psiônico).</p>`
            : `<p>At 6th level, at the start of your turn, you can expend one Psionic Energy Die to enter a destructive state for <strong>10 minutes</strong>.</p>
               <p>For the duration, you gain a <strong>Fly Speed of 20 feet and can hover</strong>.</p>
               <p>In addition, when you cast a Psion spell that expends a spell slot, you can roll your Psionic Energy Die and add the number rolled to <strong>one damage roll</strong> of that spell without expending the die.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 6" : "Psykinetic 6",
        activation: { type: "special", cost: 1 }
      }
    },
    {
      _id: "psionpsyrebound1",
      name: isPt ? "Campo Ricocheteante" : "Rebounding Field",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, quando você conjura <em>Escudo Arcano (Shield)</em> em resposta a um ataque e faz o ataque errar, você pode gastar um Dado de Energia Psiônica para disparar a força cinética de volta ao atacante.</p>
               <p>O atacante faz uma <strong>Salvaguarda de Destreza</strong>. Role o dado psiônico: em caso de falha, ele sofre <strong>dano de Força</strong> igual à rolagem + mod Inteligência (metade no sucesso).</p>
               <p>Independentemente de passar ou falhar, você ganha <strong>Pontos de Vida Temporários</strong> iguais à quantidade de dano causado.</p>`
            : `<p>At 6th level, when you cast <em>Shield</em> in response to being hit by an attack roll and cause the attack to miss, you can expend one Psionic Energy Die to launch the kinetic force back at the attacker.</p>
               <p>The attacker makes a <strong>Dexterity saving throw</strong>. Roll one Psionic Energy Die: on a failed save, it takes <strong>Force damage</strong> equal to the roll plus your Intelligence modifier (half on success).</p>
               <p>Whether the target fails or succeeds, you gain <strong>Temporary Hit Points</strong> equal to the amount of damage dealt.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 6" : "Psykinetic 6",
        save: { ability: "dex", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionpsyenhtkcr1",
      name: isPt ? "Esmagamento Telecinético Aprimorado" : "Enhanced Telekinetic Crush",
      type: "feat",
      img: "icons/magic/earth/strike-fist-stone-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, ao conjurar <em>Esmagamento Telecinético (Telekinetic Crush)</em>, você pode gastar um Dado de Energia Psiônica para modificar a magia:</p>
               <ul>
                 <li>Quer as criaturas passem ou falhem na salvaguarda, o <strong>deslocamento delas é reduzido pela metade</strong> até o início do seu próximo turno.</li>
                 <li>Você rola o Dado de Energia Psiônica gasto e <strong>adiciona o valor a uma rolagem de dano</strong> da magia.</li>
               </ul>`
            : `<p>At 10th level, when you cast <em>Telekinetic Crush</em>, you can expend one Psionic Energy Die to modify the spell:</p>
               <ul>
                 <li>Whether creatures pass or fail the saving throw, their <strong>Speed is halved</strong> until the start of your next turn.</li>
                 <li>You roll the expended die and <strong>add the number rolled to one damage roll</strong> of the spell.</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 10" : "Psykinetic 10"
      }
    },
    {
      _id: "psionpsyheighttk",
      name: isPt ? "Telecinese Elevada" : "Heightened Telekinesis",
      type: "feat",
      img: "icons/magic/control/energy-hold-levitate-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode conjurar <em>Telecinese (Telekinesis)</em> <strong>sem gastar espaço de magia</strong> gastando <strong>quatro Dados de Energia Psiônica</strong>.</p>
               <p>Ao fazer isso, você pode modificar a magia para que ela <strong>não exija Concentração</strong>. Sua duração se torna 1 minuto e você pode escolher criaturas e objetos de tamanho <strong>Gargantuesco</strong> como alvos.</p>`
            : `<p>At 14th level, you can cast <em>Telekinesis</em> <strong>without expending a spell slot</strong> by expending <strong>four Psionic Energy Dice</strong>.</p>
               <p>When you do so, you can modify the spell so that it <strong>doesn't require Concentration</strong>. Its duration becomes 1 minute and you can target <strong>Gargantuan</strong> creatures and objects.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Psicinético 14" : "Psykinetic 14"
      }
    },

    // --- Subclasse Telepata (Telepath) Features ---
    {
      _id: "psiontelespell01",
      name: isPt ? "Magias Telepáticas" : "Telepath Spells",
      type: "feat",
      img: "icons/magic/perception/eye-tendrils-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você sempre tem as seguintes magias preparadas nos níveis correspondentes:</p>
               <ul>
                 <li><strong>3º Nível:</strong> <em>Perdição (Bane)</em>, <em>Comando (Command)</em>, <em>Detectar Pensamentos (Detect Thoughts)</em>, <em>Espigão Mental (Mind Spike)</em></li>
                 <li><strong>5º Nível:</strong> <em>Contramágica (Counterspell)</em>, <em>Lentidão (Slow)</em></li>
                 <li><strong>7º Nível:</strong> <em>Compulsão (Compulsion)</em>, <em>Confusão (Confusion)</em></li>
                 <li><strong>9º Nível:</strong> <em>Modificar Memória (Modify Memory)</em>, <em>Presença Régia de Yolande (Yolande's Regal Presence)</em></li>
               </ul>`
            : `<p>You always have the following spells prepared at the specified Psion levels:</p>
               <ul>
                 <li><strong>Level 3:</strong> <em>Bane</em>, <em>Command</em>, <em>Detect Thoughts</em>, <em>Mind Spike</em></li>
                 <li><strong>Level 5:</strong> <em>Counterspell</em>, <em>Slow</em></li>
                 <li><strong>Level 7:</strong> <em>Compulsion</em>, <em>Confusion</em></li>
                 <li><strong>Level 9:</strong> <em>Modify Memory</em>, <em>Yolande's Regal Presence</em></li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 3" : "Telepath 3"
      }
    },
    {
      _id: "psiontelemindinf",
      name: isPt ? "Infiltrador Mental" : "Mind Infiltrator",
      type: "feat",
      img: "icons/magic/perception/eye-slit-glow-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, ao conjurar <em>Detectar Pensamentos (Detect Thoughts)</em>, você pode gastar um Dado de Energia Psiônica para modificar a magia para que <strong>não exija componentes nem Concentração</strong>.</p>
               <p>Além disso, quando você usar o efeito Sondar Pensamentos (Read Thoughts), o alvo <strong>não percebe</strong> que você está investigando sua mente caso falhe na salvaguarda de Sabedoria.</p>`
            : `<p>At 3rd level, when you cast <em>Detect Thoughts</em>, you can expend one Psionic Energy Die to modify it so it <strong>requires no components and no Concentration</strong>.</p>
               <p>In addition, when you use the Read Thoughts effect, the target <strong>doesn't know</strong> you're probing its mind if it fails the Wisdom saving throw.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 3" : "Telepath 3"
      }
    },
    {
      _id: "psiondistraction",
      name: isPt ? "Distração Telepática" : "Telepathic Distraction",
      type: "feat",
      img: "icons/magic/control/silhouette-aura-energy-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 3º nível, quando uma criatura que você possa ver dentro do alcance da sua telepatia acertar uma jogada de ataque, você pode usar uma <strong>Reação</strong> para rolar um Dado de Energia Psiônica e <strong>subtrair o valor rolado do ataque</strong>, potencialmente transformando o acerto em erro.</p>
               <p>O dado é gasto <strong>apenas se o ataque errar</strong>.</p>`
            : `<p>At 3rd level, when a creature you can see within range of your telepathy hits with an attack roll, you can take a <strong>Reaction</strong> to roll one Psionic Energy Die and <strong>subtract the number rolled from the attack roll</strong>, potentially causing it to miss.</p>
               <p>The die is expended <strong>only if the attack misses</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 3" : "Telepath 3",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "psiontelebulwark",
      name: isPt ? "Baluarte Mental" : "Bulwark Mind",
      type: "feat",
      img: "icons/magic/defensive/shield-barrier-flaming-diamond-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, no início do seu turno, você pode gastar um Dado de Energia Psiônica para fortalecer sua mente por <strong>10 minutos</strong>.</p>
               <p>Você ganha <strong>Resistência a dano Psíquico</strong>, e sempre que fizer uma <strong>salvaguarda de Inteligência, Sabedoria ou Carisma</strong>, você adiciona uma rolagem do seu Dado de Energia Psiônica ao teste (essa rolagem não gasta o dado).</p>`
            : `<p>At 6th level, at the start of your turn, you can expend one Psionic Energy Die to fortify your mind for <strong>10 minutes</strong>.</p>
               <p>You gain <strong>Resistance to Psychic damage</strong>, and whenever you make an <strong>Intelligence, Wisdom, or Charisma saving throw</strong>, you add a roll of your Psionic Energy Die to the save without expending it.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 6" : "Telepath 6",
        activation: { type: "special", cost: 1 }
      }
    },
    {
      _id: "psiontelepotentt",
      name: isPt ? "Pensamentos Potentes" : "Potent Thoughts",
      type: "feat",
      img: "icons/magic/perception/mind-flayer-glowing-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 6º nível, o alcance passivo da sua telepatia aumenta para <strong>18 metros (60 pés)</strong>.</p>
               <p>Além disso, você adiciona seu <strong>modificador de Inteligência</strong> ao dano causado por qualquer <strong>truque de Psion</strong>.</p>`
            : `<p>At 6th level, the passive range of your telepathy increases to <strong>60 feet</strong>.</p>
               <p>In addition, you add your <strong>Intelligence modifier</strong> to the damage you deal with any <strong>Psion cantrip</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 6" : "Telepath 6"
      }
    },
    {
      _id: "psiontelebolster",
      name: isPt ? "Apoio Telepático" : "Telepathic Bolstering",
      type: "feat",
      img: "icons/magic/light/hand-sparks-glow-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 10º nível, quando você ou uma criatura que você possa ver dentro do alcance da sua telepatia <strong>falhar em um teste de atributo ou errar um ataque</strong>, você pode usar uma <strong>Reação</strong> para gastar um Dado de Energia Psiônica.</p>
               <p>Role o dado e adicione o número ao d20, potencialmente transformando a falha em sucesso. O dado é gasto <strong>apenas se o teste tiver sucesso ou o ataque acertar</strong>.</p>`
            : `<p>At 10th level, when you or a creature you can see within range of your telepathy <strong>fails an ability check or misses an attack roll</strong>, you can take a <strong>Reaction</strong> to expend one Psionic Energy Die.</p>
               <p>Roll the die and add it to the d20, potentially turning failure into success. The die is expended <strong>only if the check succeeds or the attack hits</strong>.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 10" : "Telepath 10",
        activation: { type: "reaction", cost: 1 }
      }
    },
    {
      _id: "psiontelescrambl",
      name: isPt ? "Embaralhar Mentes" : "Scramble Minds",
      type: "feat",
      img: "icons/magic/control/silhouette-struggle-damage-magenta.webp",
      system: {
        description: {
          value: isPt
            ? `<p>No 14º nível, você pode conjurar <em>Confusão (Confusion)</em> <strong>sem gastar espaço de magia</strong> gastando <strong>quatro Dados de Energia Psiônica</strong>.</p>
               <p>Ao fazer isso, o raio da esfera se torna <strong>9 metros (30 pés)</strong> e você pode escolher uma criatura na área para passar automaticamente na salvaguarda.</p>
               <p>Além disso, quando uma criatura sob efeito da magia iniciar seu turno, <strong>você escolhe o comportamento dela na tabela</strong> em vez de ela rolar o dado.</p>`
            : `<p>At 14th level, you can cast <em>Confusion</em> <strong>without expending a spell slot</strong> by instead expending <strong>four Psionic Energy Dice</strong>.</p>
               <p>When you do, the radius of the sphere becomes <strong>30 feet</strong> and you can choose one creature in the area to automatically succeed on its saving throw.</p>
               <p>In addition, when an affected creature starts its turn, <strong>you choose its behavior from the table</strong> instead of rolling.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        type: { value: "class", subtype: "" },
        requirements: isPt ? "Telepata 14" : "Telepath 14"
      }
    }
  ];
}

// =============================================================
// 2. SUBCLASSES DO PSION (psion-subclasses.json)
// =============================================================

function buildSubclasses(isPt) {
  return [
    {
      _id: "psionsubmetamorp",
      name: isPt ? "Metamorfo" : "Metamorph",
      type: "subclass",
      img: "icons/magic/unholy/hand-marked-pink.webp",
      system: {
        description: {
          value: isPt
            ? `<p>O Metamorfo volta o domínio de seus poderes psiônicos para o interior do próprio corpo. Sua carne se torna maleável como argila, permitindo esculpir membros em lâminas orgânicas, maças de carne densa e atiradores cáusticos, manipulando a vitalidade de amigos e inimigos.</p>`
            : `<p>The Metamorph turns psionic mastery inward. Flesh becomes like clay, molding into organic weapons of bone and muscle, adjusting life force and manipulating biology across friends and foes.</p>`,
          chat: ""
        },
        identifier: "metamorph",
        classIdentifier: "psion",
        advancement: [
          {
            _id: "advmetasubnv0003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Metamorfo (Nível 3)" : "Metamorph Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetaspells1" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetamutable" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetaorganic" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionboneblade01" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfleshmaul01" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionvisceralau1" }
              ]
            }
          },
          {
            _id: "advmetasubnv0006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Metamorfo (Nível 6)" : "Metamorph Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetaextraat" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetafleshwe" }
              ]
            }
          },
          {
            _id: "advmetasubnv0010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Metamorfo (Nível 10)" : "Metamorph Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetaimprmut" }
              ]
            }
          },
          {
            _id: "advmetasubnv0014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Metamorfo (Nível 14)" : "Metamorph Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionmetalifebnd" }
              ]
            }
          }
        ]
      }
    },
    {
      _id: "psionsubpsykine1",
      name: isPt ? "Psicinético" : "Psykinetic",
      type: "subclass",
      img: "icons/magic/force/barrier-shield-dome-blue.webp",
      system: {
        description: {
          value: isPt
            ? `<p>O Psicinético controla o poder psiônico como uma força maleável irresistível. Dobrando energias telecinéticas em barreiras inexpugnáveis, campos refletores e arremessos esmagadores com o impacto de um aríete.</p>`
            : `<p>A Psykinetic controls psionic power like a malleable force, bending telekinetic energy into sturdy kinetic barriers, reflective fields, and devastating crushing impacts.</p>`,
          chat: ""
        },
        identifier: "psykinetic",
        classIdentifier: "psion",
        advancement: [
          {
            _id: "advpsysubnv00003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Psicinético (Nível 3)" : "Psykinetic Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsyspells01" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsystrongtk" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsytech0001" }
              ]
            }
          },
          {
            _id: "advpsysubnv00006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Psicinético (Nível 6)" : "Psykinetic Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsydestran1" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsyrebound1" }
              ]
            }
          },
          {
            _id: "advpsysubnv00010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Psicinético (Nível 10)" : "Psykinetic Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsyenhtkcr1" }
              ]
            }
          },
          {
            _id: "advpsysubnv00014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Psicinético (Nível 14)" : "Psykinetic Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionpsyheighttk" }
              ]
            }
          }
        ]
      }
    },
    {
      _id: "psionsubtelepath",
      name: isPt ? "Telepata" : "Telepath",
      type: "subclass",
      img: "icons/magic/perception/eye-tendrils-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres absolutos na magia da mente, os Telepatas infiltram os pensamentos alheios sem serem detectados, projetam distrações cognitivas para desviar ataques de aliados e erguem baluartes psíquicos indestrutíveis.</p>`
            : `<p>Masters of mind magic, Telepaths probe thoughts undetected, project cognitive distractions to misdirect enemy strikes against allies, and maintain indestructible psionic bulwarks.</p>`,
          chat: ""
        },
        identifier: "telepath",
        classIdentifier: "psion",
        advancement: [
          {
            _id: "advtelesubnv0003",
            type: "ItemGrant",
            level: 3,
            title: isPt ? "Recursos do Telepata (Nível 3)" : "Telepath Features (Level 3)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelespell01" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelemindinf" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiondistraction" }
              ]
            }
          },
          {
            _id: "advtelesubnv0006",
            type: "ItemGrant",
            level: 6,
            title: isPt ? "Recursos do Telepata (Nível 6)" : "Telepath Features (Level 6)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelebulwark" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelepotentt" }
              ]
            }
          },
          {
            _id: "advtelesubnv0010",
            type: "ItemGrant",
            level: 10,
            title: isPt ? "Recurso do Telepata (Nível 10)" : "Telepath Feature (Level 10)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelebolster" }
              ]
            }
          },
          {
            _id: "advtelesubnv0014",
            type: "ItemGrant",
            level: 14,
            title: isPt ? "Recurso do Telepata (Nível 14)" : "Telepath Feature (Level 14)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psiontelescrambl" }
              ]
            }
          }
        ]
      }
    }
  ];
}

// =============================================================
// 3. NOVAS MAGIAS DO UA 2025 (psion-spells.json)
// =============================================================

function buildSpells(isPt) {
  return [
    {
      _id: "psionspltkfling1",
      name: isPt ? "Arremesso Telecinético" : "Telekinetic Fling",
      type: "spell",
      img: "icons/magic/control/energy-stream-link-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você escolhe um objeto não mágico pesando de 0,5 a 2,5 kg (1 a 5 libras) a até 3 metros de você que não esteja sendo vestido ou carregado, envolve-o em pura força psíquica e o arremessa contra uma criatura a até 18 metros (60 pés).</p>
               <p>Faça um <strong>ataque de magia à distância</strong>. Em um acerto, o alvo sofre <strong>1d10 de dano de Força</strong>. Acertando ou errando, o objeto cai no chão intacto.</p>
               <p><strong>Aprimoramento de Truque:</strong> O dano aumenta em 1d10 nos níveis 5 (2d10), 11 (3d10) e 17 (4d10).</p>`
            : `<p>Choose one nonmagical object weighing 1 to 5 pounds within 10 feet of you that isn't being worn or carried to wreathe in psionic energy and fire at a creature within range.</p>
               <p>Make a <strong>ranged spell attack</strong> against the target. On a hit, the target takes <strong>1d10 Force damage</strong>. On a hit or miss, the object falls to the ground undamaged.</p>
               <p><strong>Cantrip Upgrade:</strong> The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 0,
        school: "evo",
        actionType: "rsak",
        range: { value: 60, units: "ft" },
        target: { value: 1, type: "creature" },
        components: { somatic: true, verbal: false, material: false },
        damage: { parts: [["1d10", "force"]] },
        scaling: { mode: "cantrip", formula: "1d10" }
      }
    },
    {
      _id: "psionspllifesiph",
      name: isPt ? "Sifão Vital" : "Life Siphon",
      type: "spell",
      img: "icons/magic/unholy/beam-impact-purple.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você dispara uma esfera de energia psiônica alimentada pela sua força vital contra uma criatura a até 36 metros (120 pés). Faça um ataque de magia à distância.</p>
               <p>Em um acerto, o alvo sofre <strong>1d10 de dano Psíquico</strong> e você pode <strong>gastar um Dado de Vida</strong> para aumentar o dano em <strong>+1d10</strong>.</p>
               <p><strong>Espaços Superiores:</strong> O dano base aumenta em 1d10 e a quantidade de Dados de Vida que você pode gastar aumenta em 1 para cada nível de espaço acima do 1º.</p>`
            : `<p>You fire an orb of psionic energy fueled by your life force at a creature within 120 feet. Make a ranged spell attack against the target.</p>
               <p>On a hit, the target takes <strong>1d10 Psychic damage</strong>, and you can <strong>expend one Hit Point Die</strong> to increase the damage by <strong>1d10</strong>.</p>
               <p><strong>Using a Higher-Level Slot:</strong> The damage increases by 1d10 and the number of Hit Dice you can expend increases by one for each spell slot level above 1.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 1,
        school: "evo",
        actionType: "rsak",
        range: { value: 120, units: "ft" },
        target: { value: 1, type: "creature" },
        components: { somatic: true, verbal: false, material: false },
        damage: { parts: [["1d10", "psychic"]] },
        scaling: { mode: "level", formula: "1d10" }
      }
    },
    {
      _id: "psionsplectrotra",
      name: isPt ? "Rastro Ectoplásmico" : "Ectoplasmic Trail",
      type: "spell",
      img: "icons/magic/death/skull-energy-green.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você se envolve em espíritos ectoplásmicos até o final do seu turno. Enquanto envolvido, você pode mover-se através de espaços ocupados como terreno difícil sem provocar Ataques de Oportunidade.</p>
               <p>Sempre que você entrar no espaço de uma criatura, ela fica coberta de ectoplasma até o final do seu próximo turno: o <strong>deslocamento dela é reduzido em 3 metros (10 pés)</strong> e ela sofre <strong>2d8 de dano Necrótico</strong> no início do turno dela.</p>`
            : `<p>You cloak yourself in spirits that leave ectoplasm in your wake until the end of your turn. You can move through occupied spaces as difficult terrain without provoking Opportunity Attacks.</p>
               <p>Whenever you enter a creature's space, it becomes covered in ectoplasm until end of your next turn: <strong>Speed reduced by 10 feet</strong> and takes <strong>2d8 Necrotic damage</strong> at start of its turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 2,
        school: "nec",
        actionType: "other",
        range: { units: "self" },
        activation: { type: "bonus", cost: 1 },
        components: { verbal: true, somatic: true, material: false },
        damage: { parts: [["2d8", "necrotic"]] }
      }
    },
    {
      _id: "psionsplegowhip1",
      name: isPt ? "Chicote do Ego" : "Ego Whip",
      type: "spell",
      img: "icons/magic/control/silhouette-grow-shrink-tan.webp",
      system: {
        description: {
          value: isPt
            ? `<p><strong>Tempo de Conjuração:</strong> 1 Reação, quando uma criatura a até 9 metros fizer um teste de atributo ou salvaguarda baseada em Carisma.</p>
               <p>A criatura faz uma <strong>Salvaguarda de Carisma</strong>. Em caso de falha, ela deve <strong>subtrair 1d8</strong> do teste ou salvaguarda.</p>`
            : `<p><strong>Casting Time:</strong> 1 Reaction, when a creature within 30 feet makes a Charisma-based ability check or saving throw.</p>
               <p>The creature makes a <strong>Charisma saving throw</strong>. On a failed save, the target must <strong>subtract 1d8</strong> from the ability check or saving throw.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 2,
        school: "enc",
        actionType: "save",
        range: { value: 120, units: "ft" },
        target: { value: 1, type: "creature" },
        activation: { type: "reaction", cost: 1 },
        components: { verbal: true, somatic: false, material: false },
        save: { ability: "cha", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionsplblddarkn",
      name: isPt ? "Escuridão Sangrenta" : "Bleeding Darkness",
      type: "spell",
      img: "icons/magic/unholy/barrier-shield-black.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você cria um vazio de tinta mágica em uma esfera de 3 metros de raio que derrama um cilindro de escuridão mágica de 12 metros de altura até o início do seu próximo turno. O cilindro é terreno difícil e nenhuma luz pode iluminar a área.</p>
               <p>Criaturas na área devem passar em uma <strong>Salvaguarda de Constituição</strong> ou sofrem <strong>3d8 de dano de Frio</strong> e ficam <strong>Cegas</strong> até o final do próximo turno delas.</p>`
            : `<p>You create an inky void in a 10-foot-radius sphere that pours magical Darkness in a 40-foot-tall cylinder. The cylinder is Difficult Terrain and no light can illuminate it.</p>
               <p>Creatures in the area must succeed on a <strong>Constitution saving throw</strong> or take <strong>3d8 Cold damage</strong> and have the <strong>Blinded</strong> condition until the end of their next turn.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 3,
        school: "evo",
        actionType: "save",
        range: { value: 60, units: "ft" },
        components: { verbal: true, somatic: true, material: true, materials: { value: "vial of rare ink worth 50+ GP", consumed: false, cost: 50 } },
        duration: { concentration: true, value: 1, units: "minute" },
        damage: { parts: [["3d8", "cold"]] },
        save: { ability: "con", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionspltkcrush1",
      name: isPt ? "Esmagamento Telecinético" : "Telekinetic Crush",
      type: "spell",
      img: "icons/magic/earth/strike-fist-stone-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você cria um campo de força telecinética esmagadora em um cubo de 9 metros (30 pés). Cada criatura na área faz uma <strong>Salvaguarda de Força</strong>.</p>
               <p>Em caso de falha, sofre <strong>5d6 de dano de Força</strong> e fica <strong>Caída (Prone)</strong>. Em um sucesso, sofre metade do dano apenas.</p>
               <p><strong>Espaços Superiores:</strong> O dano aumenta em 1d6 para cada nível de espaço acima do 3º.</p>`
            : `<p>You create a field of crushing telekinetic force in a 30-foot Cube within 120 feet. Each creature in the area makes a <strong>Strength saving throw</strong>.</p>
               <p>On a failed save, takes <strong>5d6 Force damage</strong> and has the <strong>Prone</strong> condition. On success, takes half damage only.</p>
               <p><strong>Higher Level Slot:</strong> Damage increases by 1d6 for each slot level above 3.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 3,
        school: "trs",
        actionType: "save",
        range: { value: 120, units: "ft" },
        target: { value: 30, type: "cube" },
        components: { verbal: true, somatic: false, material: false },
        damage: { parts: [["5d6", "force"]] },
        scaling: { mode: "level", formula: "1d6" },
        save: { ability: "str", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionspllifeinvf",
      name: isPt ? "Campo de Inversão Vital" : "Life Inversion Field",
      type: "spell",
      img: "icons/magic/life/cross-area-circle-green-white.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Uma aura se irradia de você em uma Emanação de 9 metros (30 pés) por até 1 minuto (Concentração). Ao criar a aura, você <strong>recupera 4d8 Pontos de Vida</strong>.</p>
               <p>Sempre que você recuperar PV, você pode escolher uma criatura na aura para fazer uma <strong>Salvaguarda de Constituição</strong>. Em caso de falha, ela sofre <strong>dano Necrótico</strong> igual à metade dos PV recuperados (arredondado para cima).</p>`
            : `<p>An aura radiates from you in a 30-foot Emanation for up to 1 minute (Concentration). When you create the aura, you <strong>regain 4d8 Hit Points</strong>.</p>
               <p>Whenever you regain Hit Points, you can force a creature in the aura to make a <strong>Constitution saving throw</strong>. On a failed save, it takes <strong>Necrotic damage</strong> equal to half the HP regained (round up).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 4,
        school: "abj",
        actionType: "heal",
        range: { units: "self" },
        components: { verbal: true, somatic: true, material: false },
        duration: { concentration: true, value: 1, units: "minute" },
        damage: { parts: [["4d8", "healing"]] },
        scaling: { mode: "level", formula: "1d8" },
        save: { ability: "con", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionsplpsiblast",
      name: isPt ? "Explosão Psiônica" : "Psionic Blast",
      type: "spell",
      img: "icons/magic/sonic/beam-shock-wave-teal.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você desencadeia uma explosão concussiva de pura energia mental. Cada criatura em um <strong>Cone de 18 metros (60 pés)</strong> faz uma <strong>Salvaguarda de Inteligência</strong>.</p>
               <p>Em uma falha, sofre <strong>6d8 de dano Psíquico</strong> e fica <strong>Atordoada (Stunned)</strong> até o início do seu próximo turno. Em um sucesso, sofre metade do dano apenas.</p>`
            : `<p>You unleash a concussive burst of psionic energy. Each creature in a <strong>60-foot Cone</strong> makes an <strong>Intelligence saving throw</strong>.</p>
               <p>On a failed save, takes <strong>6d8 Psychic damage</strong> and has the <strong>Stunned</strong> condition until the start of your next turn. Half damage on success.</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 6,
        school: "evo",
        actionType: "save",
        range: { units: "self" },
        target: { value: 60, type: "cone" },
        components: { verbal: true, somatic: true, material: true },
        damage: { parts: [["6d8", "psychic"]] },
        scaling: { mode: "level", formula: "1d8" },
        save: { ability: "int", dc: null, scaling: "spell" }
      }
    },
    {
      _id: "psionsplthghtfrm",
      name: isPt ? "Forma de Pensamento" : "Thought Form",
      type: "spell",
      img: "icons/magic/perception/silhouette-stealth-shadow.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Como uma Ação Bônus, você se transforma brevemente em um espírito psíquico por 1 minuto (Concentração):</p>
               <ul>
                 <li><strong>Forma Fantasmagórica:</strong> Imunidade a dano de Veneno e Psíquico, e Imunidade à condição Exaustão.</li>
                 <li><strong>Movimento Incorpóreo:</strong> Deslocamento de voo de 18 metros (60 pés) e pode pairar. Pode mover-se através de espaços ocupados como terreno difícil.</li>
                 <li><strong>Recarga Psiônica:</strong> Como uma Ação de Magia, toque uma criatura (pode ser você mesmo) e role 1d6. A criatura recupera um espaço de magia gasto de círculo igual a metade do número rolado (arredondado para cima) ou menor (1x por Descanso Longo).</li>
               </ul>`
            : `<p>As a Bonus Action, you briefly transform into a psionic spirit for up to 1 minute (Concentration):</p>
               <ul>
                 <li><strong>Ghostly Form:</strong> Immunity to Poison and Psychic damage, and Immunity to Exhaustion.</li>
                 <li><strong>Incorporeal Movement:</strong> Fly Speed of 60 feet and can hover. Move through occupied spaces as Difficult Terrain.</li>
                 <li><strong>Psionic Recharge:</strong> Magic action to touch a creature and roll 1d6 to restore an expended spell slot of level equal to half the roll (round up) or lower (1x per Long Rest).</li>
               </ul>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 6,
        school: "trs",
        actionType: "other",
        range: { units: "self" },
        activation: { type: "bonus", cost: 1 },
        components: { verbal: true, somatic: false, material: true, materials: { value: "brain matter in a vessel worth 500+ GP", cost: 500 } },
        duration: { concentration: true, value: 1, units: "minute" }
      }
    },
    {
      _id: "psionsplsumastrl",
      name: isPt ? "Invocar Entidade Astral" : "Summon Astral Entity",
      type: "spell",
      img: "icons/magic/sonic/projectile-sound-rings-wave.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Você invoca o espírito de uma entidade psiônica astral em um espaço desocupado a até 27 metros (90 pés). Escolha Entidade Cristalina, Ectoplásmica ou Fantasmagórica.</p>
               <p>Em combate, ela compartilha sua iniciativa agindo logo após o seu turno, obedecendo aos seus comandos verbais (sem exigir ação). Dura até 1 hora (Concentração).</p>`
            : `<p>You call forth the spirit of a psionic entity in an unoccupied space within 90 feet. Choose Crystal Entity, Ectoplasmic Entity, or Ghostly Entity.</p>
               <p>It shares your Initiative count taking its turn immediately after yours, obeying verbal commands without requiring an action. Lasts up to 1 hour (Concentration).</p>`,
          chat: ""
        },
        source: { custom: "Unearthed Arcana 2025 - Psion Update" },
        level: 3,
        school: "con",
        actionType: "summon",
        range: { value: 90, units: "ft" },
        components: { verbal: true, somatic: true, material: true, materials: { value: "gem or crystal worth 300+ GP", cost: 300 } },
        duration: { concentration: true, value: 1, units: "hour" }
      }
    }
  ];
}

// =============================================================
// 4. CLASSE PRINCIPAL DO PSION (psion-classes.json)
// =============================================================

function buildClass(isPt) {
  return [
    {
      _id: "psionclassitem01",
      name: isPt ? "Psion" : "Psion",
      type: "class",
      img: "icons/magic/light/orbs-hand-gray.webp",
      system: {
        description: {
          value: isPt
            ? `<p>Mestres supremos do poder psiônico, os Psions utilizam a força primordial do pensamento para manifestar magias e dobrar a realidade. Eles transformam suas próprias mentes em fontes inesgotáveis de energia que crescem e se aprimoram ao longo de suas jornadas.</p>
               <h3>Construção Rápida</h3>
               <p>Coloque seu valor de atributo mais alto em <strong>Inteligência</strong>, que rege suas magias de Psion, CDs de salvaguarda e Dados de Energia Psiônica. Seu segundo valor mais alto deve ser <strong>Constituição</strong> ou <strong>Destreza</strong> para aumentar sua sobrevivência e Classe de Armadura.</p>`
            : `<p>Masters of psionic power, Psions wield magic and extraordinary powers through the power of thought. They develop their minds as fonts of power that manifest spells and grow stronger over the course of their adventuring careers.</p>
               <h3>Quick Build</h3>
               <p>Make <strong>Intelligence</strong> your highest ability score, as it governs your Psion spells, save DCs, and Psionic Energy Dice. Your next highest score should be <strong>Constitution</strong> or <strong>Dexterity</strong>.</p>`,
          chat: ""
        },
        identifier: "psion",
        hitDice: "d6",
        spellcasting: {
          progression: "full",
          ability: "int"
        },
        advancement: [
          // Pontos de Vida (1d6)
          {
            _id: "advhitpointsps01",
            type: "HitPoints",
            configuration: {}
          },
          // Proficiências de Traços
          {
            _id: "advtraitspsion01",
            type: "Trait",
            level: 1,
            configuration: {
              grants: [
                "weapon:sim"
              ],
              choices: [
                {
                  count: 2,
                  pool: [
                    "skills:arc",
                    "skills:ins",
                    "skills:itm",
                    "skills:inv",
                    "skills:med",
                    "skills:prc",
                    "skills:per"
                  ]
                }
              ]
            }
          },
          // Escala: Dados de Energia Psiônica
          {
            _id: "advenergydie0001",
            type: "ScaleValue",
            configuration: {
              identifier: "psionic-energy-die",
              type: "dice",
              scale: {
                1: { number: 4, faces: 6 },
                5: { number: 6, faces: 8 },
                9: { number: 8, faces: 8 },
                11: { number: 8, faces: 10 },
                13: { number: 10, faces: 10 },
                17: { number: 12, faces: 12 }
              }
            }
          },
          // Escala: Disciplinas Conhecidas
          {
            _id: "advscalediscip01",
            type: "ScaleValue",
            configuration: {
              identifier: "disciplines-known",
              type: "numeric",
              scale: {
                2: { value: 2 },
                5: { value: 3 },
                10: { value: 4 },
                13: { value: 5 },
                17: { value: 6 }
              }
            }
          },
          // Nível 1: Poder Psiônico, Conjuração, Telecinese Sutil
          {
            _id: "advitemgrant0001",
            type: "ItemGrant",
            level: 1,
            title: isPt ? "Recursos de 1º Nível" : "1st Level Features",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatpower01" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatpropel1" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeattelecon" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatsubtlet" },
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatspell01" }
              ]
            }
          },
          // Nível 2: Disciplinas Psiônicas
          {
            _id: "advitemgrant0002",
            type: "ItemGrant",
            level: 2,
            title: isPt ? "Disciplinas Psiônicas" : "Psionic Disciplines",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatdisc001" }
              ]
            }
          },
          // Nível 3: Subclasse do Psion
          {
            _id: "advpsionsubcl001",
            type: "Subclass",
            level: 3,
            title: isPt ? "Subclasse do Psion" : "Psion Subclass",
            configuration: {}
          },
          // Nível 5: Restauração Psiônica
          {
            _id: "advitemgrant0005",
            type: "ItemGrant",
            level: 5,
            title: isPt ? "Recurso de 5º Nível" : "5th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatrestor1" }
              ]
            }
          },
          // Nível 7: Surto Psiônico
          {
            _id: "advitemgrant0007",
            type: "ItemGrant",
            level: 7,
            title: isPt ? "Recurso de 7º Nível" : "7th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatsurge01" }
              ]
            }
          },
          // Nível 18: Reservas Psiônicas
          {
            _id: "advitemgrant0018",
            type: "ItemGrant",
            level: 18,
            title: isPt ? "Recurso de 18º Nível" : "18th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatreserv1" }
              ]
            }
          },
          // Nível 19: Dádiva Épica (One D&D 2024)
          {
            _id: "advitemgrant0019",
            type: "ItemGrant",
            level: 19,
            title: isPt ? "Dádiva Épica (Nível 19)" : "Epic Boon (Level 19)",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatepicb01" }
              ]
            }
          },
          // Nível 20: Força Vital Inflamada
          {
            _id: "advitemgrant0020",
            type: "ItemGrant",
            level: 20,
            title: isPt ? "Recurso de 20º Nível" : "20th Level Feature",
            configuration: {
              items: [
                { uuid: "Compendium.artificer-onednd.psion-features.Item.psionfeatenkindl" }
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
saveFiles("psion-features.json", enFeatures, ptFeatures);

const enSubclasses = buildSubclasses(false);
const ptSubclasses = buildSubclasses(true);
saveFiles("psion-subclasses.json", enSubclasses, ptSubclasses);

const enSpells = buildSpells(false);
const ptSpells = buildSpells(true);
saveFiles("psion-spells.json", enSpells, ptSpells);

const enClass = buildClass(false);
const ptClass = buildClass(true);
saveFiles("psion-classes.json", enClass, ptClass);

console.log("Psion data generated successfully for pt-BR and en!");
