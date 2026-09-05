# Artificer: Forge of the Artificer (D&D 5e)

Módulo completo para o **Foundry Virtual Tabletop (VTT)** que adiciona a classe **Artificer (Artífice)** atualizada para as regras modernas de D&D (baseada no documento *Unearthed Arcana: Eberron - Forge of the Artificer* / D&D 2024), totalmente integrada ao sistema oficial `dnd5e` (v3.0+ e v4.0+) no Foundry V12 e V14.

---

## 🛠️ Recursos Principais

- **Classe Artificer Completa**: Progressão de níveis 1 a 20 configurada com a arquitetura moderna de **Item Advancements** (`HitPoints`, `TraitAdvancement`, `ItemGrantAdvancement`, `ScaleValueAdvancement`).
- **5 Subclasses Especializadas**:
  1. **Alchemist (Alquimista)**: Produção de *Experimental Elixirs*, *Alchemical Savant*, *Restorative Reagents*, *Chemical Mastery*.
  2. **Armorer (Armeiro)**: *Arcane Armor*, modelos de armadura (**Dreadnaught**, **Guardian** e **Infiltrator**), *Extra Attack*, *Improved Armorer*, *Perfected Armor*.
  3. **Artillerist (Artilheiro)**: *Eldritch Cannon* (Flamethrower, Force Ballista, Protector), *Arcane Firearm*, *Explosive Cannon*, *Fortified Position*.
  4. **Battle Smith (Ferreiro de Batalha)**: *Battle Ready* (Int para ataque e dano mágico), companheiro *Steel Defender*, *Extra Attack*, *Arcane Jolt*, *Improved Defender*.
  5. **Cartographer (Cartógrafo)**: *Adventurer's Atlas*, *Mapping Magic* (teleporte *Portal Jump* e *Faerie Fire* grátis), *Guided Precision*, *Ingenious Movement*, *Superior Atlas*.
- **Nova Magia & Companheiros**:
  - Nova magia de 2º círculo: *Homunculus Servant* (Servo Homúnculo) com ritual e ficha de invocação.
  - Fichas de NPCs/Companheiros completas no compêndio: **Steel Defender**, **Homunculus Servant** e **Eldritch Cannon**.
- **Oficina do Artífice (Artificer Workshop)**:
  - Interface moderna desenvolvida em **ApplicationV2** do Foundry V12+.
  - **Sorteio e Geração de Elixires Experimentais**: Rola 1d6 ou gasta espaço de magia para gerar instantaneamente o frasco consumível no inventário do personagem.
  - **Magia de Funileiro (Tinker's Magic)**: Catálogo com 30 itens mundanos para conjurar no inventário com 1 clique (com controle de término no descanso longo).
  - **Replicar Item Mágico (Replicate Magic Item)**: Tabela de planos conhecidos e itens replicados com filtro por nível (2+, 6+, 10+, 14+).
  - **Companheiros**: Atalho direto para abrir e gerenciar as fichas de construtos e canhões.
- **Sincronização Automática de Compêndios**:
  - Popula automaticamente os compêndios do módulo no Foundry caso estejam vazios, garantindo total integridade de UUIDs e compatibilidade multiplataforma.
- **Bilingue (i18n)**:
  - Suporte completo a **Português (Brasil)** e **English**.

---

## 📦 Compêndios Inclusos

1. **Artificer Classes** (`artificer-classes`): O documento da classe Artífice com todos os avanços de perícias, dados de vida, proficiências e concessão automática de recursos.
2. **Artificer Subclasses** (`artificer-subclasses`): As 5 subclasses com suas respectivas concessões de magias e habilidades.
3. **Artificer Features** (`artificer-features`): Todos os recursos de classe e de subclasse como itens `feat`.
4. **Artificer Spells** (`artificer-spells`): A nova magia *Homunculus Servant* e tabela de referência de conjuração.
5. **Artificer Magic Items & Inventions** (`artificer-items`): Elixires experimentais consumíveis e itens replicados especiais (*Manifold Tool*, *Repeating Shot*, *Returning Weapon*, *Mind Sharpener*, *Boots of the Winding Path*, *Repulsion Shield*, etc.).
6. **Artificer Companions & Summons** (`artificer-actors`): Atores pré-configurados do *Steel Defender*, *Homunculus Servant* e *Eldritch Cannon*.

---

## 🚀 Como Usar no Foundry VTT

1. No painel de gerenciamento de módulos do seu mundo Foundry, habilite **Artificer: Forge of the Artificer (D&D 5e)**.
2. Abra a aba de **Compêndios** na barra lateral direita.
3. Localize **Artificer Classes** e arraste o item **Artificer** para uma ficha de personagem vazia.
4. A janela nativa de **Level Up / Advancement** do D&D 5e se abrirá automaticamente, permitindo escolher perícias e ferramentas.
5. Conforme o personagem sobe de nível:
   - No nível 2: Concede *Replicate Magic Item*.
   - No nível 3: Arraste a subclasse desejada da pasta **Artificer Subclasses** (ex: *Armorer*, *Alchemist*, etc.).
6. Clique no botão dourado **Oficina do Artífice** no cabeçalho da ficha do personagem para acessar o painel de criação rápida de elixires, invenções e companheiros!

---

## 📋 Compatibilidade

- **Foundry VTT**: v12 e v14
- **Sistema de Jogo**: `dnd5e` (v3.0.0 ou superior)

---

## 👤 Autor

Desenvolvido por **Lopes** ([GitHub](https://github.com/NeroHeiser)).

