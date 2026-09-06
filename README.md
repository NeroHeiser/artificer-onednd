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
- **Classe Psion Completa (One D&D / UA 2025)**:
  - Conjurador Pleno Mental (espaços de 1º a 9º círculo, Inteligência, d6 de vida, salvaguardas de Int e Sab).
  - **Conjuração Psiônica**: Sem necessidade de componentes Verbais nem Materiais (a menos que consumidos ou com custo em ouro).
  - **Telecinese Sutil**: *Mãos Mágicas* sem componentes somáticos e invisível.
  - **Dados de Energia Psiônica**: Escala de `4d6` no nível 1 até `12d12` no nível 17.
  - **Habilidades Básicas**: *Propulsão Telecinética* e *Conexão Telepática*.
  - **11 Disciplinas Psiônicas**: *Biofeedback*, *Precognição Fortalecedora*, *Pensamentos Destrutivos*, *Língua Diabólica*, *Percepção Expandida*, *Insinuação do Id*, *Mira Certeira*, *Mente Observadora*, *Contra-ataque Psiônico*, *Guardas Psiônicos* e *Mente Aguçada*.
  - **3 Subclasses Oficiais**:
    1. **Metamorfo (Metamorph)**: Biopsiônica, *Forma Mutável*, 3 *Armas Orgânicas* baseadas em Inteligência (Lâmina de Osso, Maça de Carne, Lançador de Vísceras), *Ataque Extra* com truque, *Tecelão de Carne* (+2 CA e cura ampliada), *Forma Mutável Aprimorada* e *Armas que Dobram a Vida*.
    2. **Psicinético (Psykinetic)**: Cinética destrutiva, *Telecinese Reforçada*, *Técnicas Telecinéticas* (uso gratuito de 1d4, Boost, Disorient, Telekinetic Bolt), *Transe Destrutivo* (Voo 6m e bônus de dano contínuo), *Campo Ricocheteante*, *Esmagamento Telecinético Aprimorado* e *Telecinese Elevada*.
    3. **Telepata (Telepath)**: Domínio cognitivo, *Infiltrador Mental* (*Detectar Pensamentos* sem componentes e sem concentração), *Distração Telepática* (reação subtrai dado de ataque inimigo), *Baluarte Mental*, *Pensamentos Potentes* (telepatia 18m e Int em truques), *Apoio Telepático* e *Embaralhar Mentes* (*Confusão* em área ampliada controlando ações).
  - **10 Novas Magias do UA 2025**: *Arremesso Telecinético*, *Sifão Vital*, *Rastro Ectoplásmico*, *Chicote do Ego*, *Escuridão Sangrenta*, *Esmagamento Telecinético*, *Campo de Inversão Vital*, *Explosão Psiônica*, *Forma de Pensamento* e *Invocar Entidade Astral*.
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

1. **Artificer Classes** (`artificer-classes`): A classe Artífice completa.
2. **Artificer Subclasses** (`artificer-subclasses`): As 5 subclasses do Artífice.
3. **Artificer Features** (`artificer-features`): Recursos do Artífice.
4. **Artificer Spells** (`artificer-spells`): Magias do Artífice.
5. **Artificer Magic Items & Inventions** (`artificer-items`): Itens mágicos e elixires do Artífice.
6. **Artificer Companions & Summons** (`artificer-actors`): Atores e companheiros.
7. **Witch Hunter Classes** (`witch-hunter-classes`): A classe Caçador de Bruxas.
8. **Witch Hunter Orders** (`witch-hunter-subclasses`): As 4 Ordens do Caçador de Bruxas.
9. **Witch Hunter Features** (`witch-hunter-features`): Recursos, rituais carmesins e maldições de sangue.
10. **Witch Hunter Items & Mutagens** (`witch-hunter-items`): As 19 fórmulas de mutagênicos consumíveis.
11. **Psion Classes** (`psion-classes`): A classe Psion completa (conjurador pleno, 1º a 20º nível).
12. **Psion Subclasses** (`psion-subclasses`): As 3 subclasses (*Metamorfo*, *Psicinético*, *Telepata*).
13. **Psion Features** (`psion-features`): Recursos da classe, 11 Disciplinas Psiônicas e armas orgânicas.
14. **Psion Spells** (`psion-spells`): As 10 novas magias oficiais do playtest Unearthed Arcana 2025.

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

