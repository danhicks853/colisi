# Colisi Project Conventions

> Folder structure, naming, and code conventions for the Godot project. Locked **before** Phase 3 creates the Godot project so structure isn't retrofit. Source-of-truth for INFRA-05.

**Authority:** When this document and a downstream plan disagree, this document is authoritative. Amendments via PHILOSOPHY.md Amendment Process — log to `.planning/SCOPE.md` with rationale and impact analysis, then update this file.

**Status:** Locked 2026-05-11 per D-INFRA-conv-1..4 (see `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`).

---

## 1. Folder Structure

The Godot project (created in Phase 3) lives at the repo root with the following top-level layout under `res://`. Per **D-INFRA-conv-1**, organization is **by-type** (Godot-canonical pattern). Each folder is documented below with its purpose and the rules that govern what lives there.

### `res://scenes/`

`.tscn` scene files. Per **D-INFRA-conv-3**, scenes live with their paired primary script in the **same folder** — e.g., `scenes/dialog/dialog_manager.tscn` paired with `scenes/dialog/dialog_manager.gd`. Organize subfolders by domain: `scenes/dialog/`, `scenes/world/`, `scenes/ui/`, `scenes/player/`, and so on. Never centralize all scenes in a single flat directory; the by-domain split keeps related files discoverable and refactor-atomic.

### `res://scripts/`

Utility, autoload, and shared base-class scripts **only**. NOT scene-paired scripts (those live with their scene per Section 3). Examples:

- Shared data structures (e.g., `scripts/data/villager_data.gd`)
- Math / geometry / time helpers (e.g., `scripts/util/time_math.gd`)
- The 5 autoload `.gd` files + the DialogueManager facade (see Section 5)
- Custom Resource type definitions that multiple scenes consume (e.g., `scripts/resources/save_game_data.gd`)
- Shared base classes that multiple scenes inherit from

### `res://assets/art/`

2D textures, sprites, UI graphics, fonts. Subfolders by domain (e.g., `assets/art/ui/buttons/`, `assets/art/characters/baker/`, `assets/art/world/foliage/`). Large image files are LFS-tracked per `.gitattributes`.

### `res://assets/audio/`

Music files (OGG Vorbis at ~128–192 kbps for cozy-game dynamic range) and SFX files (WAV at 44.1 kHz for short stings <2s; OGG for longer ambient loops). Subfolders by domain (e.g., `assets/audio/music/`, `assets/audio/sfx/baker/`, `assets/audio/ambient/spring/`). Per STACK.md §"Audio Sourcing & Production" + §"File format conventions".

### `res://assets/models/`

3D `.glb` files exported from Blender per STACK.md §"3D Art Pipeline (Blender → Godot)". One canonical character skeleton (`hero_skeleton.glb`) with bone maps configured once. Animations are NOT baked into character `.glb` files — they live separately in `res://animations/` (see Section 4). Subfolders by domain (e.g., `assets/models/characters/`, `assets/models/props/`, `assets/models/environment/`).

### `res://addons/`

Installed addons. Expected residents through v1 (per STACK.md):

- **Dialogue Manager** (Nathan Hoad) — stateless dialogue runtime; reads/writes `GameState` autoload via mutations
- **GUT** 9.x — GDScript unit testing framework
- **GodotSteam GDExtension** — Steam achievements / cloud / Input (~6 months pre-launch; Phase 12-ish)
- **Mixamo Animation Retargeter** — batch Mixamo FBX → Godot animations (when animation production scales in Phase 4-6)

Addons are committed to the repo. Pin alpha addons (Dialogue Manager) to a specific tag or commit; update only during quiet phases.

### `res://autoloads/`

The 5 singleton scripts + the DialogueManager facade per `.planning/research/ARCHITECTURE.md`. See Section 5 for the cross-reference. Example contents:

- `event_bus.gd`
- `game_state.gd`
- `save_manager.gd`
- `time_service.gd`
- `settings.gd`
- `dialogue_manager.gd` (project-side facade wrapping Nathan Hoad's addon)

### `res://resources/`

Custom Resource data files (`.tres` during development for clean diffs; `.res` for shipped builds for size/speed) per the locked save-system decision. Includes item definitions, recipe data, dialogue conditions, save-game-data templates, NPC arc definitions, etc. The class **definitions** for these resources live under `res://scripts/resources/` (see Section 3 table); the **data files** that instantiate them live here.

### `res://dialogue/`

Dialogue source files. Format is Nathan Hoad's Dialogue Manager `.dialogue` syntax (locked Phase 1; replaces the original Dialogic 2 plan). Organized per-villager or per-arc — exact organization lands as Phase 4+ content authoring patterns emerge. Phase 3 creates the empty folder; Phase 4+ populates it.

### `res://translations/`

`translations.csv` for Phase 3 onward; migration to `.po` files happens pre-localized-launch per STACK.md §"Localization". `UPPER_SNAKE_CASE` keys grouped by area (see Section 7).

### `res://animations/`

Per-character + shared animation library resources per **D-INFRA-conv-4**. See Section 4 for the full pattern.

---

**Rationale:** Godot-canonical organization (mirrors official examples + community patterns); easier learning curve for beginner solo dev; established cognitive map for the next 4-6 years. Per **D-INFRA-conv-1**.

---

## 2. File Naming

Per **D-INFRA-conv-2**, all files use `snake_case`. No exceptions.

| File type | Pattern | Example |
| --- | --- | --- |
| Scenes | `<feature>.tscn` | `village_square.tscn`, `dialog_manager.tscn` |
| Scripts | `<feature>.gd` | `dialog_manager.gd`, `player_controller.gd` |
| Resources (data) | `<entity>.tres` (dev) / `<entity>.res` (ship) | `save_data.tres`, `baker_recipe.tres` |
| 3D models | `<entity>_<aspect>.glb` | `baker.glb`, `hero_skeleton.glb` |
| Animation libraries | `<character>_<action>.res` | `baker_idle.res`, `baker_work_oven.res` |
| Textures | `<entity>_<map_type>.png` | `village_square_albedo.png`, `baker_normal.png` |
| Audio (SFX) | `<source>_<action>.wav` | `oven_sizzle.wav`, `door_open_creak.wav` |
| Audio (music) | `<context>_<season>.ogg` | `village_spring.ogg`, `baker_theme_autumn.ogg` |
| Folders | `snake_case/` | `scenes/dialog/`, `assets/art/ui/buttons/` |

### Class name vs file name (accepted trade-off)

`class_name DialogManager` (PascalCase) inside `dialog_manager.gd` (snake_case) is the official Godot convention. The file name and the class name don't visually match. **This is intentional** — Godot's tooling (`preload`, `load`, auto-resource references, the `class_name` registry, the AssetLib import system) expects this pattern. Do not "fix" it by renaming files to PascalCase; that breaks Godot's tooling assumptions.

**Rationale:** Per Godot official style guide. Case-insensitive-filesystem safe (Windows + macOS). Phase 3 enforces this convention via the `godot-import-check.yml` CI workflow (per plan 02-04 / 02-03 scaffolding, activated when the Godot project lands). Per **D-INFRA-conv-2**.

---

## 3. Scene + Script Pairing

Per **D-INFRA-conv-3**: a `.tscn` and its primary `.gd` live in the **same folder**.

**Example:**
- `scenes/dialog/dialog_window.tscn` (the scene)
- `scenes/dialog/dialog_window.gd` (its primary script)

`res://scripts/` is reserved for code that is NOT paired with a single scene:

- Shared utility scripts (data structures, helpers, math)
- The 5 autoload scripts + the DialogueManager facade (see Section 5)
- Shared base classes that multiple scenes inherit from
- Custom Resource type **definitions** (`extends Resource` class files)

### Where things live — quick reference

| Pattern | Where it lives |
| --- | --- |
| Scene with its own script | `scenes/<domain>/<feature>.tscn` + `scenes/<domain>/<feature>.gd` |
| Pure utility (no scene) | `scripts/util/<helper>.gd` |
| Autoload singleton | `autoloads/<service>.gd` |
| Custom Resource type definition (`extends Resource`) | `scripts/resources/<resource_type>.gd` |
| Custom Resource data file (.tres) | `resources/<data_name>.tres` |
| Shared base class (multiple scenes extend) | `scripts/base/<base_class>.gd` |

**Rationale:** Scene + its script always discovered together; refactoring stays atomic (rename / move / delete operates on one folder); mirrors Godot's right-click-create-script default behavior (Godot offers to create the script next to the scene by default). Per **D-INFRA-conv-3**.

---

## 4. Animation Library

Per **D-INFRA-conv-4**, animations use a **per-character + shared library** pattern under `res://animations/`.

### Layout

- `res://animations/<character_slug>/` — per-character animation library resources
  - Examples: `res://animations/baker/baker_idle.res`, `res://animations/baker/baker_work_oven.res`, `res://animations/cyrus/cyrus_meditate.res`
- `res://animations/_shared/` — animations reusable across characters
  - Common walk cycle, idle variants, sit, wave, pick-up, run, look-around

### Pipeline

One canonical character skeleton (`assets/models/characters/hero_skeleton.glb`) with bone maps configured **once**. Per STACK.md §"Animation library pattern (do this from day one)" — any retargeted animation library (Mixamo, Quaternius Universal Animation Library, hand-authored Blender animations) drops onto the same skeleton via the Mixamo Animation Retargeter addon or Godot's built-in bone map system.

### Anti-patterns (do NOT do)

- Do NOT bake all animations into the character `.glb`. That ships duplicated bone data per animation and makes iteration painful.
- Do NOT duplicate animation data per NPC. Each NPC instance loads the same animation library; variations come from skeleton differences (height / proportions), not duplicated animation data.

### Phase context

Phase 3 lands the empty `res://animations/` folder + the canonical skeleton (`hero_skeleton.glb`) + an initial bone map. Phase 4-6 lands per-character animation content as villager arcs come online. Per **D-INFRA-conv-4** + STACK.md §"Animation library pattern (do this from day one)".

---

## 5. Autoloads (Architecture Reference)

Per `.planning/research/ARCHITECTURE.md` (Daniel-signed 2026-05-10), the project ships with **6 autoloads** (5 architecture + DialogueManager facade). Detailed autoload responsibilities and interaction patterns live in `ARCHITECTURE.md`; this section is the cross-reference.

| Autoload | Purpose |
| --- | --- |
| `EventBus` | Global signal bus for cross-system communication; nodes emit signals, autoloads route to interested receivers. Decouples producers and consumers without hard references. |
| `GameState` | Authoritative store of all gameplay state (multi-axis relationships per NPC-03, world flags, NPC arc state per NPC-04, matchmaking pair state per D-VISION-13, spritesight unlock per D-VISION-12, tonal state per D-VISION-14). Read/write via mutations; never bypassed. |
| `SaveManager` | Custom Resource save format (`.tres` dev / `.res` ship); versioned schema per SAVE-04; migration on load; atomic file write (write to `save.tmp` then rename to `save.res`). Saves to `user://`, never `res://`. |
| `TimeService` | In-game time-of-day + season + festival-week state. Action-driven advancement per D-VISION time-model lock; no wall-clock advancement. |
| `Settings` | Player preferences (audio buses, keybinds, graphics presets, locale). Persists via `ConfigFile` (INI) per STACK.md §"Save System Pattern" — settings are flat key-value and INI is the right tool; save games are nested and structured and use Custom Resources. |
| `DialogueManager` (project facade) | Wraps Nathan Hoad's Dialogue Manager addon. Per Phase 1 stack-ratification, the dialogue runtime reads/writes the `GameState` autoload via mutations (the stateless-design decoupling that earned the override from Dialogic 2). |

**Cross-reference rule:** When this document and `ARCHITECTURE.md` disagree about autoload responsibilities, `ARCHITECTURE.md` is authoritative for behavior; this document is authoritative for file location and naming.

---

## 6. Save/Resource Convention

Brief reminder of STACK.md §"Save System Pattern (decided, do not re-litigate)":

- **Development:** text form (`.tres`) for clean diffs in Git. The dialogue between scenes/code/resources is human-readable and review-friendly.
- **Shipped builds:** binary form (`.res`) for size and load speed. The Godot export pipeline can convert at ship time.
- **Resource class definitions** (`extends Resource` files) live in `scripts/resources/<resource_type>.gd` (per Section 3 table).
- **Resource data files** live in `resources/<data_name>.tres` for in-project authored content.
- **Save files specifically** live in `user://` (Godot's per-user data path), NOT `res://`. This is a standard Godot rule (the `res://` filesystem is read-only at runtime on exported builds).
- **Version field from day one** on every save-bearing resource. The schema will change; migration code is far easier to write when the original save knows its version.
- **Atomic saves:** write to `save.tmp`, then `DirAccess.rename_absolute` to `save.res`. Power-loss-safe.

JSON is NOT used for save data. ConfigFile (INI) is used for **settings only**, not save games. `FileAccess.store_var(dict)` is forbidden — no schema, no type safety.

---

## 7. Translation Keys

Per STACK.md §"Localization":

- `UPPER_SNAKE_CASE` keys grouped by area: `UI_BUTTON_START`, `DIALOG_NPC_BAKER_GREETING_01`, `ITEM_CARROT_NAME`, `ITEM_CARROT_DESC`
- All player-visible text routed through `tr("KEY_NAME")` from day one — even when only one locale exists
- Sort keys lexically; translators love it
- CSV format Phase 3 → PO migration pre-localized-launch (Phase 10 per ROADMAP.md)

### Anti-patterns

- Hard-coded English strings in scripts. Refactor cost compounds linearly with project age. Wrap in `tr()` from day one.
- Concatenating translated strings. Every locale has different word order. Use full sentence keys with format placeholders: `tr("DIALOG_GIFT_RECEIVED").format({"item": item_name})`.

---

## 8. Open Items

The following code-level conventions are deliberately deferred to Phase 3, where they'll be authored during actual scripting:

- **GDScript style conventions** — type-annotation policy (mandatory? recommended? opt-in?), comment style, function-naming for private (`_internal_helper`) vs public, signal-naming patterns, `class_name` usage policy, `@onready` vs `_ready()` patterns.

Phase 2 locks folder structure + file naming + scene-script pairing + animation library pattern. Phase 3 lands code-internals conventions as part of the project skeleton + foundational autoloads work.

---

**Last updated:** 2026-05-11 (Phase 2 initial creation per INFRA-05)
**Source decisions:** D-INFRA-conv-1, D-INFRA-conv-2, D-INFRA-conv-3, D-INFRA-conv-4 in `.planning/phases/02-infrastructure-repo-setup/02-CONTEXT.md`
**Amendment process:** PHILOSOPHY.md Amendment Process (every change logged to `.planning/SCOPE.md`)
