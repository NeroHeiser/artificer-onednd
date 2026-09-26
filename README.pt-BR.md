# Expansão de Classes e Arquétipos (D&D 5e)

[English](README.md) | [Português (Brasil)](README.pt-BR.md)

[![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v12%20%7C%20v14-orange.svg)](https://foundryvtt.com/)
[![Sistema](https://img.shields.io/badge/Sistema-dnd5e%20v3.0%2B-blue.svg)](https://github.com/foundryvtt/dnd5e)
[![Testes](https://img.shields.io/badge/Testes-20%20passando-brightgreen.svg)](tests/)
[![Midi-QOL](https://img.shields.io/badge/Midi--QOL-Recomendado-purple.svg)](https://gitlab.com/tposney/midi-qol)
[![Licença](https://img.shields.io/badge/Licen%C3%A7a-MIT-green.svg)](LICENSE)

Módulo completo para o **Foundry Virtual Tabletop (VTT)** que fornece progressão de classes do 1º ao 20º nível, 58 arquétipos especializados e interface interativa de oficina para o sistema `dnd5e` (v3.0+ e v4.0+), com suporte nativo a automações no **Midi QOL** e compêndios totalmente bilíngues (**Português do Brasil** e **English**).

---

## 🌟 Recursos Principais

- **Classes Completas (Níveis 1 a 20)**: Progressão estruturada usando a arquitetura moderna de **Item Advancements** do D&D 5e (`HitPoints`, `TraitAdvancement`, `ItemGrantAdvancement`, `ScaleValueAdvancement`).
- **58 Subclasses no Total**: Totalmente registradas no `CONFIG.DND5E.subclasses` e concedidas automaticamente durante a evolução de nível.
- **Oficina Interativa do Artífice**: Interface moderna em **ApplicationV2** para sorteio e geração de Elixires Experimentais, conjuração de itens mundanos da Magia de Funileiro, criação de itens mágicos replicados por tier e gerenciamento de fichas de companheiros construtos.
- **Automação com Midi QOL**: Alinhamento com atividades do sistema (`actionType`, CDs de salvaguarda escaláveis, Active Effects para bônus, dano sacrificial e registros de combate) com degradação graciosa quando o Midi QOL não estiver ativo na mesa.
- **Compêndios Bilíngues com Sincronização Automática**: Detecção de idioma da mesa (`pt-BR` e `en`) com paridade 1:1 de identificadores em todos os 16 compêndios.

---

## ⚔️ Classes e Arquétipos Inclusos

### 1. Artífice (One D&D / 2024)
*Meio-conjurador (arredondamento para cima) baseado em Inteligência, com infusões e companheiros construtos.*

| Subclasse | Foco | Recursos Principais |
| :--- | :--- | :--- |
| **Alquimista** | Suporte / Poções | Elixires Experimentais, Erudito Alquímico, Reagentes Restauradores, Maestria Química |
| **Armeiro** | Tanque / Infiltração | Armadura Arcana (Guardião, Infiltrador, Dreadnaught), Ataque Extra, Armadura Aperfeiçoada |
| **Artilheiro** | Dano à Distância | Canhão Arcano (Lança-chamas, Balista de Força, Protetor), Arma de Fogo Arcana, Posição Fortificada |
| **Ferreiro de Batalha** | Marcial / Construto | Pronto para Batalha (ataques com INT), Defensor de Aço, Ataque Extra, Choque Arcano |
| **Cartógrafo** | Utilidade / Mobilidade | Atlas do Aventureiro, Magia de Mapeamento (*Salto de Portal*, *Fogo das Fadas* livre), Precisão Guiada |
| **Reanimador (UA)** | Necro-Engenharia | Choque para a Vida, Companheiro Reanimado, Modificações Estranhas, Reanimação Prometeica |

### 2. Caçador de Bruxas (Blood Hunter 2020)
*Guerreiro marcial que empunha Rituais Carmesins, Mutações Esotéricas e Maldições de Sangue com Inteligência.*

| Ordem | Foco | Recursos Principais |
| :--- | :--- | :--- |
| **Caçador de Espectros** | Mortos-vivos / Radiante | Ritual da Alvorada, Passo Etéreo, Marca do Sepulcro, Visão da Sepultura |
| **Licantropo** | Metamorfo / Tanque | Transformação Híbrida (resistência a dano físico, garras naturais), Proeza do Perseguidor |
| **Mutante** | Bônus Consumíveis | 19 Fórmulas de Mutagênicos com bônus e penalidades automatizadas via ActiveEffect |
| **Alma Profana** | Magia de Pacto | Espaços de pacto com Inteligência, Patronos do Outro Mundo, Foco Ritual, Frenezi Místico |

### 3. Psion (One D&D / UA 2025)
*Conjurador pleno mental (1º ao 9º círculo) que conjura sem componentes verbais nem materiais.*

| Subclasse | Foco | Recursos Principais |
| :--- | :--- | :--- |
| **Metamorfo** | Biopsiônica | Forma Mutável, Armas Orgânicas com INT (Lâmina de Osso, Maça de Carne, Lançador de Vísceras) |
| **Psicinético** | Telecinese Destrutiva | Técnicas Telecinéticas, Transe Destrutivo (voo e bônus de dano contínuo), Campo Ricocheteante |
| **Telepata** | Infiltração Cognitiva | Infiltrador Mental (*Detectar Pensamentos* livre), Distração Telepática, Embaralhar Mentes |

### 4. Subclasses de Unearthed Arcana (46 Arquétipos)
Integradas às classes oficiais do sistema, com progressão completa de recursos do 3º ao 20º nível:

| Classe | Arquétipos Inclusos |
| :--- | :--- |
| **Bárbaro** | Caminho da Não-Luz, Caminho do Lamento, Caminho do Guardião Espiritual, Arauto da Tempestade |
| **Bardo** | Colégio dos Espíritos, Colégio da Lua |
| **Clérigo** | Domínio do Túmulo, Domínio da Arcana, Domínio do Conhecimento |
| **Druida** | Círculo da Preservação, Círculo do Titã |
| **Guerreiro** | Arqueiro Arcano, Cavaleiro do Dragão Púrpura, Gladiador, Cavaleiro do Inferno, Cavaleiro |
| **Monge** | Guerreiro das Artes Místicas, Guerreiro Tatuado, Guerreiro do Veneno, Guerreiro da Intoxicação |
| **Paladino** | Juramento dos Gênios Nobres, Juramento da Guarda de Feitiços, Quebrador de Juramento |
| **Patrulheiro** | Guardião Oco, Caminhante do Inverno |
| **Ladino** | Fantasma, Herdeiro dos Três, Ladrão de Magia, Agente da Casa |
| **Feiticeiro** | Feitiçaria das Sombras, Feitiçaria Ancestral, Fogo Mágico, Feitiçaria Profanada, Feitiçaria Demoníaca |
| **Bruxo** | Patrono Lâmina Maldita, Patrono Insepulto, Rei-Feiticeiro, Patrono Vestígio, Patrono Primordial |
| **Mago** | Conjurador, Encantador, Necromante, Transmutador, Cantor da Lâmina, Imaskarcanista |

---

## 🔧 Oficina Interativa do Artífice

Acessível diretamente pelo botão de chave inglesa no cabeçalho da ficha de personagem ou pelo menu de Configurações do Módulo:

1. **Elixires Experimentais**: Role 1d6 ou consuma espaços de magia para gerar frascos consumíveis instantaneamente no inventário com efeitos de cura, velocidade, CA ou voo.
2. **Magia de Funileiro**: Catálogo com 31 itens mundanos e ferramentas para conjuração rápida em 1 clique (com término no descanso longo).
3. **Replicar Item Mágico**: Filtro de planos conhecidos e itens replicados divididos nos Tiers 2+, 6+, 10+ e 14+.
4. **Gerenciamento de Companheiros**: Acesso rápido para abrir e gerenciar as fichas de **Defensor de Aço**, **Servo Homúnculo** e **Canhão Arcano**.

---

## 📦 Compêndios Inclusos

| Compêndio (ID) | Tipo | Conteúdo |
| :--- | :---: | :--- |
| `artificer-classes` | Item | Progressão da classe Artífice |
| `artificer-subclasses` | Item | 5 Subclasses do Artífice |
| `artificer-features` | Item | Recursos de classe e subclasse do Artífice |
| `artificer-spells` | Item | Magias do Artífice e *Homunculus Servant* |
| `artificer-items` | Item | Elixires experimentais e itens mágicos replicados |
| `artificer-actors` | Actor | Atores e companheiros pré-configurados |
| `witch-hunter-classes` | Item | Progressão da classe Caçador de Bruxas |
| `witch-hunter-subclasses` | Item | 4 Ordens do Caçador de Bruxas |
| `witch-hunter-features` | Item | Rituais Carmesins, Maldições de Sangue e recursos |
| `witch-hunter-items` | Item | 19 Fórmulas de mutagênicos consumíveis |
| `psion-classes` | Item | Progressão da classe Psion |
| `psion-subclasses` | Item | 3 Subclasses do Psion |
| `psion-features` | Item | 11 Disciplinas Psiônicas e armas orgânicas |
| `psion-spells` | Item | 10 Novas magias psiônicas do UA 2025 |
| `ua-subclasses` | Item | 46 Subclasses de Unearthed Arcana |
| `ua-features` | Item | 248 Recursos completos de subclasse (níveis 3–20) |

---

## 🚀 Instalação e Uso

### Instalação
1. Na tela de Configuração do Foundry VTT, acesse a aba **Módulos Adicionais**.
2. Clique em **Instalar Módulo** e cole a URL do manifesto:
   ```text
   https://raw.githubusercontent.com/NeroHeiser/artificer-onednd/main/module.json
   ```
3. Ative o módulo dentro do seu mundo de jogo.

### Como Usar
1. Abra a barra lateral de **Compêndios**.
2. Arraste qualquer classe desejada (**Artificer**, **Psion**, **Witch Hunter**) para uma ficha de personagem vazia.
3. Siga as janelas de Advancement nativas do D&D 5e conforme o personagem evolui de nível.
4. Para personagens Artífices, clique no botão **Oficina do Artífice** no topo da ficha para acessar o painel de criação rápida.

---

## 🧪 Desenvolvimento e Garantia de Qualidade

Este módulo segue diretrizes estritas de código limpo e testes automatizados sem dependências externas:

```bash
# Executar a suite de testes (20 testes unitários)
npm test

# Executar testes em modo watch (reexecução contínua)
npm run test:watch
```

---

## 📋 Compatibilidade

- **Foundry Virtual Tabletop**: Homologado para v12 e v14.
- **Sistema de Jogo**: `dnd5e` v3.0.0 ou superior.
- **Módulos Recomendados**: `midi-qol` (para automação de combate e aplicação de Active Effects).

---

## 👤 Autor

Desenvolvido por **Lopes** ([GitHub](https://github.com/NeroHeiser)).

Distribuído sob a [Licença MIT](LICENSE).
