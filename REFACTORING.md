# Refactoring & Code Quality Improvements

Summary of architectural, reliability, efficiency, and testability improvements integrated into `artificer-onednd`.

---

## 1. Architectural Decisions

1. **Decoupled Subclass Registry (`scripts/subclass-registry.mjs`)**:
   - Extracted 110+ lines of inline subclass mappings from `main.mjs` into an immutable declarative registry (`SUBCLASS_REGISTRY`).
   - `registerSubclasses(CONFIG.DND5E)` safely merges module subclasses into existing D&D 5e configurations without overwriting third-party or core system definitions (Open/Closed Principle).

2. **Decoupled Workshop Catalogs (`scripts/apps/artificer-workshop-data.mjs`)**:
   - Replaced dynamic in-method allocations of 80+ objects per render inside `ArtificerWorkshopApp._getContextData()` with pre-instantiated, frozen locale data structures (`WORKSHOP_CATALOGS`).
   - Single Responsibility: UI controller manages lifecycle and user interactions; static data resides in dedicated data structures.

3. **Robust Item Origin Identification (`scripts/midi-qol-compat.mjs`)**:
   - Embedded actor items receive randomly generated `_id` values in Foundry VTT.
   - Introduced `MidiQOLCompat.resolveItemSourceId(item)` to inspect `flags["artificer-onednd"].sourceId`, `_stats.compendiumSource`, `flags.core.sourceId`, and direct fallbacks.

4. **Reverse Proxy Route Resolution**:
   - Standardized `foundry.utils.getRoute(...)` resolution across compendium synchronization and interactive workshop fallbacks to guarantee reliability behind reverse proxies and custom subpaths.

5. **Clean Data Architecture**:
   - Removed 16 redundant JSON files from the root of `scripts/data/` (17,200+ duplicated lines), maintaining clean locale folders (`scripts/data/en/` and `scripts/data/pt-BR/`).
   - Updated all build scripts to output strictly to localized directories.

6. **Foundry Manifest Compatibility (`module.json`)**:
   - Added recommended module relationship (`relationships.recommends`) for `midi-qol`.

---

## 2. Test Suite & Quality Assurance

- Standard `package.json` with native Node test runner (`node:test`).
- **20 Automated Unit Tests** across 6 test modules:
  - `tests/compendium-integrity.test.mjs`: Compendium manifest sync, 16-char alphanumeric ID validation, required fields, and 1:1 bilingual parity.
  - `tests/subclass-registry.test.mjs`: Registry immutability, valid compendium UUID paths, and safe configuration merging.
  - `tests/workshop-catalogs.test.mjs`: Immutability of localized catalogs and item mapping integrity.
  - `tests/workshop-replicated-items.test.mjs`: Compendium existence of replicated items.
  - `tests/workshop-fetch-route.test.mjs`: Workshop route resolution under reverse proxy.
  - `tests/midi-qol-compat-source-id.test.mjs`: Multi-level source ID resolution hierarchy.
  - `tests/compendium-sync-route.test.mjs`: Compendium sync route resolution.

---

## 3. Usage & Execution

```bash
# Run all unit tests
npm test

# Run tests in watch mode during development
npm run test:watch
```
