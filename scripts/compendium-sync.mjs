/**
 * compendium-sync.mjs
 * Gerenciador de Sincronização dos Compêndios do Módulo Artificer OneD&D.
 * Garante que os compêndios estejam sempre povoados com os documentos corretos
 * no Foundry VTT (v12/v14), preservando os UUIDs necessários para os Advancements.
 */

const MODULE_ID = "artificer-onednd";

export class CompendiumSync {
  static PACKS = [
    {
      id: "artificer-features",
      file: "features.json",
      documentName: "Item",
      label: "Artificer Features"
    },
    {
      id: "artificer-items",
      file: "items.json",
      documentName: "Item",
      label: "Artificer Magic Items & Inventions"
    },
    {
      id: "artificer-spells",
      file: "spells.json",
      documentName: "Item",
      label: "Artificer Spells"
    },
    {
      id: "artificer-classes",
      file: "classes.json",
      documentName: "Item",
      label: "Artificer Classes"
    },
    {
      id: "artificer-subclasses",
      file: "subclasses.json",
      documentName: "Item",
      label: "Artificer Subclasses"
    },
    {
      id: "artificer-actors",
      file: "actors.json",
      documentName: "Actor",
      label: "Artificer Companions & Summons"
    }
  ];

  /**
   * Sincroniza todos os pacotes do módulo se estiverem vazios, com IDs inválidos ou se for forçado.
   * @param {object} options
   * @param {boolean} [options.force=false] Força a sobrescrita dos itens
   * @param {boolean} [options.silent=false] Não emite notificações na tela
   */
  static async syncAllPacks({ force = false, silent = false } = {}) {
    if (!game.user.isGM) return;

    let syncedCount = 0;

    for (const packInfo of this.PACKS) {
      const packKey = `${MODULE_ID}.${packInfo.id}`;
      const pack = game.packs.get(packKey);

      if (!pack) {
        console.warn(`Artificer OneD&D | Pacote de compêndio não encontrado: ${packKey}`);
        continue;
      }

      // Se o compêndio estiver bloqueado, desbloqueia temporariamente para gravação
      const wasLocked = pack.locked;
      if (wasLocked) await pack.configure({ locked: false });

      try {
        const index = await pack.getIndex();
        const hasInvalidIds = index.some(e => !/^[a-zA-Z0-9]{16}$/.test(e._id));

        const dataUrl = `modules/${MODULE_ID}/scripts/data/${packInfo.file}`;
        const response = await fetch(dataUrl);
        if (!response.ok) {
          console.error(`Artificer OneD&D | Falha ao carregar arquivo de dados: ${dataUrl}`);
          continue;
        }

        const documentsData = await response.json();
        const shouldSync = index.size === 0 || force || hasInvalidIds || (index.size !== documentsData.length);

        if (shouldSync) {
          const docCls = getDocumentClass(packInfo.documentName);

          if (index.size > 0) {
            // Remove documentos antigos/inválidos antes de recriar
            const existingIds = index.map(e => e._id);
            try {
              await docCls.deleteDocuments(existingIds, { pack: pack.collection });
            } catch (err) {
              console.warn(`Artificer OneD&D | Aviso ao limpar registros antigos em ${packKey}:`, err);
            }
          }

          await docCls.createDocuments(documentsData, { pack: pack.collection, keepId: true });
          console.log(`Artificer OneD&D | Sincronizados ${documentsData.length} documentos em ${packKey}`);
          syncedCount += documentsData.length;
        }
      } catch (err) {
        console.error(`Artificer OneD&D | Erro ao sincronizar o pacote ${packKey}:`, err);
      } finally {
        if (wasLocked) await pack.configure({ locked: true });
      }
    }

    if (!silent && syncedCount > 0) {
      ui.notifications.info(
        game.i18n.format("ARTIFICER_5E.Notifications.CompendiumsSynced", { count: syncedCount })
      );
    }

    return syncedCount;
  }
}
