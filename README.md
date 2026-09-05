# Expansão de Classes e Arquétipos (D&D 5e)

Módulo completo para o **Foundry Virtual Tabletop (VTT)** que adiciona classes completas e arquétipos de Unearthed Arcana (One D&D / 2024), começando com a classe **Artificer (Artífice)** e suas 5 subclasses, totalmente integrado ao sistema oficial `dnd5e` (v3.0+ e v4.0+) e com suporte a automações completas no **Midi QOL** (v12 e v14).

---

## 🛠️ Recursos Principais

- **Automação & Compatibilidade com Midi QOL**:
  - Alinhamento total com as atividades do sistema `dnd5e` (`actionType`, fórmulas de ataque/dano/cura, salvaguardas com DC escalável e Active Effects integrados).
  - Elixires experimentais aplicam bônus de velocidade, CA, dados em salvaguardas/ataques e voo automaticamente via Active Effects com controle de tempo.
  - Companheiros (Defensor de Aço, Canhão Arcano, Servo Homúnculo) com armas e ações automatizadas (cura com detecção de alvos, sopro em cone com CD de resistência, golpes de força e arremessos).
  - Degradação graciosa: se o Midi QOL não estiver ativo na mesa, funciona 100% no padrão nativo do D&D 5e.
- **Classe Artificer Completa**: Progressão de níveis 1 a 20 configurada com a arquitetura moderna de **Item Advancements** (`HitPoints`, `TraitAdvancement`, `ItemGrantAdvancement`, `ScaleValueAdvancement`).
- **5 Subclasses Especializadas do Artífice**:
  1. **Alchemist (Alquimista)**: Produção de *Experimental Elixirs*, *Alchemical Savant*, *Restorative Reagents*, *Chemical Mastery*.
  2. **Armorer (Armeiro)**: *Arcane Armor*, modelos de armadura (**Dreadnaught**, **Guardian** e **Infiltrator**), *Extra Attack*, *Improved Armorer*, *Perfected Armor*.
  3. **Artillerist (Artilheiro)**: *Eldritch Cannon* (Flamethrower, Force Ballista, Protector), *Arcane Firearm*, *Explosive Cannon*, *Fortified Position*.
  4. **Battle Smith (Ferreiro de Batalha)**: *Battle Ready* (Int para ataque e dano mágico), companheiro *Steel Defender*, *Extra Attack*, *Arcane Jolt*, *Improved Defender*.
  5. **Cartographer (Cartógrafo)**: *Adventurer's Atlas*, *Mapping Magic* (teleporte *Portal Jump* e *Faerie Fire* grátis), *Guided Precision*, *Ingenious Movement*, *Superior Atlas*.
- **Classe Caçador de Bruxas (Witch Hunter / Blood Hunter)**:
  - Progressão completa de níveis 1 a 20 baseada na versão oficial de 2020 do D&D Beyond (Matthew Mercer), com **Inteligência** como atributo-chave e **Maestria em Armas (One D&D / 2024)** no 1º nível.
  - **4 Ordens Especializadas**:
    1. **Ordem do Caçador de Espectros (Ghostslayer)**: *Ritual da Alvorada* (Radiante), *Passo Etéreo*, *Marca do Sepulcro*, *Visão da Sepultura*, *Espírito Vingativo*.
    2. **Ordem do Licantropo (Lycan)**: *Transformação Híbrida* (resistências a armas, bônus de CA, garras desarmadas e ataque bônus), *Proeza do Perseguidor*, *Transformação Avançada*, *Vontade de Ferro*, *Maestria Híbrida*.
    3. **Ordem do Mutante (Mutant)**: *Criação de Mutagênicos* com 19 fórmulas completas em itens consumíveis (bônus e penalidades automatizadas via ActiveEffect), *Metabolismo Estranho*, *Fisiologia Robusta*, *Mutação Exaltada*.
    4. **Ordem da Alma Profana (Profane Soul)**: *Magia de Pacto* com Inteligência, Patronos do Outro Mundo, *Foco Ritual*, *Frenezi Místico*, *Canalização Diabólica*, *Arcana Revelada*, *Sifão de Almas*.
  - **Rituais Carmesins & Maldições de Sangue**: 7 Rituais com ActiveEffects e 10 Maldições de Sangue completas com salvaguardas e automações no Midi QOL.
- **Nova Magia & Companheiros**:
  - Nova magia de 2º círculo: *Homunculus Servant* (Servo Homúnculo) com ritual e ficha de invocação.
  - Fichas de NPCs/Companheiros completas no compêndio: **Steel Defender**, **Homunculus Servant** e **Eldritch Cannon**.
- **Ferramenta de Expansão (Workshop)**:
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

