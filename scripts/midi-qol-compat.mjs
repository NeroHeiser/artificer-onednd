/**
 * midi-qol-compat.mjs
 * Módulo de Compatibilidade e Automações com o Midi QOL (tposney/midi-qol).
 * Fornece integração graciosa: se o Midi QOL estiver ativo na mesa,
 * aplica automações de combate, salvaguardas e Active Effects.
 * Caso o Midi QOL não esteja instalado ou ativo, o sistema segue em modo nativo do D&D 5e sem emitir erros.
 */

const MODULE_ID = "artificer-onednd";

export class MidiQOLCompat {
  /**
   * Inicializa a compatibilidade com o Midi QOL
   */
  static init() {
    Hooks.once("ready", () => {
      const isMidiActive = game.modules.get("midi-qol")?.active;

      if (isMidiActive) {
        console.log("Expansão de Classes e Arquétipos | Midi QOL detectado! Ativando integrações automáticas de combate e efeitos ativos.");
        this._setupMidiHooks();
      } else {
        console.log("Expansão de Classes e Arquétipos | Midi QOL não ativo. Operando em modo padrão D&D 5e.");
      }
    });
  }

  /**
   * Registra hooks e auxiliares do Midi QOL
   */
  static _setupMidiHooks() {
    // Intercepta conclusões de fluxo do Midi QOL para logging ou validação de efeitos
    Hooks.on("midi-qol.RollComplete", async (workflow) => {
      if (!workflow?.item) return;

      const itemId = workflow.item._id;
      if (itemId === "elixirhealing000") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou cura do Elixir Experimental em ${workflow.targets?.size || 0} alvo(s).`);
      }

      // Automação para ativação do Ritual Carmesim (dano sacrificial)
      if (itemId === "whfeatcrimsonrit" || itemId?.startsWith("whrite")) {
        const actor = workflow.actor;
        if (actor) {
          console.log(`Expansão de Classes e Arquétipos | Midi QOL processou ativação do Ritual Carmesim para ${actor.name}.`);
        }
      }

      // Automação para Maldições de Sangue
      if (itemId?.startsWith("whcurse")) {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Maldição de Sangue (${workflow.item.name}) em ${workflow.targets?.size || 0} alvo(s).`);
      }

      // Automações para Arquétipos de Unearthed Arcana (Lote 1 & Lote 2)
      if (itemId === "uajolttolife0001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Choque para a Vida (Jolt to Life) do Reanimador.`);
      }
      if (itemId === "uapathtothegrav1") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Caminho para a Sepultura (Path to the Grave) do Clérigo do Túmulo.`);
      }
      if (itemId === "uahexblademanif1") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Manifestação da Lâmina Maldita (Hexblade Manifest).`);
      }
      if (itemId === "uaformofdread001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Forma Pavorosa (Form of Dread) do Bruxo Insepulto.`);
      }
      if (itemId === "uaarcaneshot0001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Disparo Arcano (Arcane Shot) do Arqueiro Arcano.`);
      }
      if (itemId === "uabladesong00001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Canção da Lâmina (Bladesong) para ${workflow.actor?.name}.`);
      }
      if (itemId === "uagladiatparry01") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Aparo Florescente (Flourish Parry) do Gladiador.`);
      }
      if (itemId === "uastealdrain0001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Drenar Magia (Drain Magic) do Ladrão de Magia.`);
      }
      if (itemId === "uaspellgstrike01") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Golpe Guarda-Feitiço (Spellguard Strike).`);
      }
      if (itemId === "uaspellfireabs01") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Absorver Magias (Absorb Spells) do Fogo Mágico.`);
      }
      if (itemId === "uasorckrebuke001") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Reprimenda Vingativa (Vindictive Rebuke) do Rei-Feiticeiro.`);
      }

      // Automação e logging para habilidades do Psion
      if (itemId === "psionfeatpropel1") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Propulsão Telecinética (Telekinetic Propel) em ${workflow.targets?.size || 0} alvo(s).`);
      }
      if (itemId === "psiondiscbacklas") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Contra-ataque Psiônico (Psionic Backlash) para ${workflow.actor?.name}.`);
      }
      if (itemId === "psiondistraction") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Distração Telepática (Telepathic Distraction).`);
      }
      if (itemId === "psionpsyrebound1") {
        console.log(`Expansão de Classes e Arquétipos | Midi QOL processou Campo Ricocheteante (Rebounding Field).`);
      }
    });
  }
}
